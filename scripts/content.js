(function () {
  document.addEventListener('yt-navigate-finish', function (event) {
    initiateObserverAndObserve();
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


  function changeTitleText(title_element) {
    if (!title_element){
      return;
    }
    console.log(`DECLICKBAIT - Processing element: ${title_element}`);

    title_text = title_element.textContent;

    title_text_sentiment = window.winkSentiment(title_text).score;
    console.log("DECLICKBAIT - Element text sentiment:", title_text_sentiment);

    title_element.textContent = title_element.textContent.toLowerCase()
    
    if (title_text_sentiment < 0) {
      title_element.textContent = "likely clickbait";
    }
    
  }



  // Wait for page to load and try multiple selectors
  function findAndChangeTitles() {
    console.log("findAndChangeTitles");

    let elements = Array.from(document.querySelectorAll("#contents > yt-lockup-view-model > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span"));
    elements = elements.concat(Array.from(document.querySelectorAll("#content > yt-lockup-view-model > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span")));
    for (let i = 0; i < elements.length; i++) {
      changeTitleText(elements[i]);
    }
    
  }
})();

// #content > yt-lockup-view-model > div > div > yt-lockup-metadata-view-model > div.yt-lockup-metadata-view-model__text-container > h3 > a > span