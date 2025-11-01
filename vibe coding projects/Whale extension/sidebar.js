// sidebar.js
// Receive messages from background.js and update the sidebar content
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "TAB_UPDATED") {
    document.getElementById("summary-content").innerText =
      `현재 페이지: ${message.title}\nURL: ${message.url}\n\n요약 생성 중...`;
  }
});

// Simple local note storage
const saveBtn = document.getElementById("save-note");
const input = document.getElementById("note-input");
const list = document.getElementById("note-list");

saveBtn.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;

  const note = { text, time: new Date().toLocaleString() };
  const stored = (await chrome.storage.local.get("notes")).notes || [];
  stored.push(note);
  await chrome.storage.local.set({ notes: stored });
  input.value = "";
  renderNotes();
});

async function renderNotes() {
  const stored = (await chrome.storage.local.get("notes")).notes || [];
  list.innerHTML = stored
    .map((n) => `<li><strong>${n.time}</strong><br>${n.text}</li>`)
    .join("");
}

renderNotes();