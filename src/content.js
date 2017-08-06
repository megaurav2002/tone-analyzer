// content.js

// domainName: messageSelector
var selectorList = {
    'slack.com': 'div.ql-editor p'
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            var selector;
            var message;

            for (var key in selectorList) {
                if (document.URL.includes(key)) {
                    selector = selectorList[key];
                }
            }
            alert(selector);

            var node = document.querySelector(selector);

            if (!node) {
                return;
            }
            else if (node.nodeName.toLowerCase() === 'p') {
                message = node.innerText;
            }

            alert(message);

        }
    }
);
