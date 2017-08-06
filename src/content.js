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

            var node = document.querySelector(selector);

            if (!node) {
                return;
            }
            else if (node.nodeName.toLowerCase() === 'p') {
                message = node.innerText;
            }

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://language.googleapis.com/v1/documents:analyzeSentiment?key=', true);
            xhr.onload = function () {
                var response = JSON.parse(this.responseText);
                var sentiment = response.documentSentiment;

                var interpretedSentiment;


                if (sentiment) {

                    if (sentiment.score > 0.1) {
                        interpretedSentiment = "Positive";
                    }
                    else if (sentiment.score < -.1) {
                        interpretedSentiment = "Negative";
                    }
                    else {
                        interpretedSentiment = "Neutral";
                    }
                    alert(interpretedSentiment + ' (score => ' + sentiment.score + ")");
                }

            };
            var sentimentRequest = {
                "encodingType": "UTF8",
                "document": {
                    "type": "PLAIN_TEXT",
                    "content": ""
                }
            };
            sentimentRequest.document.content = message;

            xhr.send(JSON.stringify(sentimentRequest))
        }
    }
);
