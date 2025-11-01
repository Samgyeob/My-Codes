// background.js
// Listen for tab updates and send current tab info to the sidebar
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.runtime.sendMessage({ type: "TAB_UPDATED", title: tab.title, url: tab.url });
  }
});