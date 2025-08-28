function changeTitleText(yt_lockup_view_model) {
  console.log("Processing element:", yt_lockup_view_model);
  if (!yt_lockup_view_model){
    return;
  }
  
  text = document.createElement('p');
  text.textContent = "bababoey";
  yt_lockup_view_model.replaceWith(text);
}

// Wait for page to load and try multiple selectors
function findAndChangeTitles() {

  const elements = document.querySelector("#title > h1 > yt-formatted-string");
  changeTitleText(elements);
}

// Also run after a delay to catch dynamically loaded content
setTimeout(findAndChangeTitles, 2000);