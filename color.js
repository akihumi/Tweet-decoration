var tweet_data = getClass("js-stream-item stream-item stream-item expanding-stream-item");
var user = getClass("account-group js-mini-current-user")[0].getAttribute("data-screen-name");

if(top.location.pathname == "/i/connect"){
    var tweet_reply = getClass("js-stream-item stream-item stream-item js-activity js-activity-reply");
    var tweet_mention = getClass("js-stream-item stream-item stream-item js-activity js-activity-mention");
    var tweet_favorite = getClass("js-stream-item stream-item stream-item js-activity js-activity-favorite");
    var tweet_retweet = getClass("js-stream-item stream-item stream-item js-activity js-activity-retweet");
    decoration(tweet_reply);
    decoration(tweet_mention);
}
decoration(tweet_data);
document.getElementById("timeline").onclick = function(){
    setTimeout(function(){
        decoration(tweet_data);
        decorateEventpage();
    }, 0);
}
addEventListener("scroll", function(e){
    if(document.body.scrollTop % 1000 >= 800){
        decoration(tweet_data);
        decorateEventpage();
    }
}, false);

function decoration(data){
    for(var i = 0; i < data.length; i++){
        var tweet_user = data[i].getElementsByClassName("tweet original-tweet js-stream-tweet js-actionable-tweet js-hover js-profile-popup-actionable js-original-tweet")[0].getAttribute("data-screen-name");
        var text = data[i].getElementsByClassName("js-tweet-text")[0];
        if(text.innerText.indexOf("@" + user) >= 0){
            data[i].style.backgroundColor = "#FFE4E1";
        }
        if(tweet_user.indexOf(user) == 0){
            data[i].style.backgroundColor = "#B0FFFF";
        }
    }
}
function decorateEventpage(){
    if(top.location.pathname == "/i/connect"){
        decoration(tweet_reply);
        decoration(tweet_mention);
    }
}
function getClass(name){
    return document.getElementsByClassName(name);
}
