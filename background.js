chrome.runtime.onInstalled.addListener(() => {
  console.log('a');
});

// receiving message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script: ' + sender.tab.url
      : 'from the extension'
  );
  if (request.greeting === 'Hello') sendResponse({ farewell: 'goodbye' });
});
