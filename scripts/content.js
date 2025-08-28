(function () {
  document.addEventListener('yt-navigate-finish', function (event) {
    if (location.pathname === '/watch') {
      console.log("Correct Pathname")
      initiateObserverAndObserve();
    }
  });

  var config = {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true
  };

  function initiateObserverAndObserve() {
    var observer = new MutationObserver(function (mutations){
      console.log("Initiated Obeserver and Observed")
      setTimeout(findAndChangeTitles, 200);
      
    });
    observer.observe(document.body, config);
    }


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
    console.log("findAndChangeTitles");

    const elements = document.querySelectorAll("#contents > yt-lockup-view-model > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span");
    for (let i = 0; i < elements.length; i++) {
      changeTitleText(elements[i]);
    }
    
  }
})();