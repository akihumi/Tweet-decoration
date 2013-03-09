var bgcolor = null;
var textcolor = null;
var tweet_reply = null;
var tweet_mention = null;
var tweet_data = null;
var user = getClass('account-group js-mini-current-user')[0].getAttribute('data-screen-name');

// background.htmlと通信して色の情報を取ってくる
chrome.extension.sendRequest({action : "get"}, function(response){
    bgcolor = response.bgcolor;
    textcolor = response.textcolor;
    init();
});

function init(){
    tweet_data = getClass('js-stream-item stream-item stream-item expanding-stream-item');
    decoration(tweet_data);
    if(top.location.pathname == "/i/connect"){
        tweet_reply = document.getElementsByClassName('js-stream-item stream-item stream-item js-activity js-activity-reply');
        tweet_mention = document.getElementsByClassName('js-stream-item stream-item stream-item js-activity js-activity-mention');
        decoration(tweet_reply);
        decoration(tweet_mention);
    }
}
// 要素が挿入する度にイベントを発生させる。非推奨らしい…
var timer = 0;
document.addEventListener('DOMNodeInserted', function() {
    if(timer) return;
    timer = setTimeout(function() {
        decoration(tweet_data);
        if(top.location.pathname == "/i/connect"){
            decoration(tweet_reply);
            decoration(tweet_mention);
        }
        timer = 0;
    }, 30);
}, false);

function decoration(data){
    for(var i = 0; i < data.length; i++){
        var tweet_user = data[i].getElementsByClassName('tweet original-tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable js-original-tweet')[0].getAttribute('data-screen-name');
        var text = data[i].getElementsByClassName('js-tweet-text')[0];
        if(text.innerText.indexOf("@" + user) >= 0){
            data[i].style.backgroundColor = bgcolor["reply"];
            data[i].style.color = textcolor["reply"];
        }
        if(tweet_user.indexOf(user) == 0){
            data[i].style.backgroundColor = bgcolor["mytweet"];
            data[i].style.color = textcolor["mytweet"];
        }
    }
}

function getClass(name){
    return document.getElementsByClassName(name);
}
