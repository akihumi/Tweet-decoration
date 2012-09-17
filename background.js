window.onload = init;

function init() {
    localStorage["my tweet color"] = localStorage["my tweet color"] || "#b0ffff";
    localStorage["reply tweet color"] = localStorage["reply tweet color"] || "#ffe4e1";
    localStorage["my tweet text color"] = localStorage["my tweet text color"] || "#000000";
    localStorage["reply tweet text color"] = localStorage["reply tweet text color"] || "#000000";
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
         if(request.action == "get"){
            var color = {mytweet: "", reply: ""};
            var messagecolor = {mytweet: "", reply: ""};
            color["mytweet"] = localStorage["my tweet color"];
            color["reply"] = localStorage["reply tweet color"];
            messagecolor["mytweet"] = localStorage["my tweet text color"];
            messagecolor["reply"] = localStorage["reply tweet text color"];
            sendResponse({
                "bgcolor" : color,
                "textcolor" : messagecolor
            });
         }
    });
}
