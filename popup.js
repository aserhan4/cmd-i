chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var snippets = document.getElementById("snippets");
  var save = document.getElementById("save");

  save.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(snippets.value);
    chrome.storage.sync.set({snippet_storage: snippets.value});
    window.close();
  });

  console.log(`current tab id: ${tabs[0].id}`);
  chrome.storage.sync.get(["snippet_storage"], function(result) {
    snippets.innerHTML = result.snippet_storage
    let len = snippets.value.length
    snippets.setSelectionRange(0, len);
  });
});
Footer
