// content.js

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        alert(request.message);
        if (request.message === "clicked_browser_action") {
            alert("in content file");
        }
    }
);