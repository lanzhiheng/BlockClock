'use strict';
chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
  window.grayInputStatus = false;
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  console.log(request, 'bug');

  if (request.to == 'background') {
    switch (request.subject) {
      case 'shouldBeGray':
        sendResponse({shouldBeGray: window.grayInputStatus})
        break;
      default:
        break
    }
  }

  sendResponse(true);
})
