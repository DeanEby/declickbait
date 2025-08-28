(function () {
  document.addEventListener('yt-navigate-finish', function (event) {
    if (location.pathname === '/watch') {
      initiateObserverAndObserve();
    }
  });

  function initiateObserverAndObserve() {
    var observer = new MutationObserver(function (mutations){
      observer.disconnect();
      const main_title = document.querySelector("#contents > yt-lockup-view-model:nth-child(1) > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span");
      // const recommendation_title = document.querySelectorAll("#contents > yt-lockup-view-model:nth-child() > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span");
      changeTitleText(main_title);
      // changeTitleText(recommendation_title);
      
    });
    observer.observe(document.body);
  }
})

// #contents > yt-lockup-view-model:nth-child(1) > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span





function changeTitleText(yt_lockup_view_model) {
  console.log("Processing element:", yt_lockup_view_model);
  if (!yt_lockup_view_model){
    return;
  }

  console.log(`DECLICKBAIT - ${yt_lockup_view_model}`)
  
  text = document.createElement('p');
  text.textContent = "bababoey";
  yt_lockup_view_model.replaceWith(text);
}

// Wait for page to load and try multiple selectors
function findAndChangeTitles() {

  const elements = document.querySelectorAll("#contents > yt-lockup-view-model > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span");
  for (let i = 0; i < elements.length; i++) {
    changeTitleText(elements[i]);
  }
  
}

// Also run after a delay to catch dynamically loaded content
setTimeout(findAndChangeTitles, 2000);