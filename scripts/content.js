(function () {
  const result = window.winkSentiment("The Worst Kind Of Programmer");
  console.log(result);

  document.addEventListener('yt-navigate-finish', function (event) {
    if (location.pathname === '/watch') {
      console.log("Correct Pathname");
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


  function changeTitleText(title_element) {
    if (!title_element){
      return;
    }
    console.log(`DECLICKBAIT - Processing element: ${title_element}`);

    title_text = title_element.textContent;

    title_text_sentiment = window.winkSentiment(title_text).score;
    console.log("DECLICKBAIT - Element text sentiment:", title_text_sentiment);
    
    if (title_text_sentiment < 0) {
      text = document.createElement('p');
      text.textContent = "Likely Clickbait!";
      title_element.replaceWith(text);
    }
    
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