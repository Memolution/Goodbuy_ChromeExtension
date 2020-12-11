$(function () {
  console.log("コンテントスクリプト");
  // const htmlPath = './index.html?url=' + location.href;
  // const htmlURL = chrome.extension.getURL(htmlPath);

  // herokuのurlに遷移
  const htmlURL = 'https://bloodcurdling-cemetery-16965.herokuapp.com/will/' + location.href;

  // 開発するときはこっち
  //const htmlURL = 'http://127.0.0.1:8080/will' + location.href;

  var targetList = ['#add-to-cart-button', '#rcx-subscribe-submit-button-announce', '.cart-button', '.elButton']

  for (const elm of targetList){
    $(elm).click(function () {
      var flag = window.confirm('これを買う動機を言語化してみましょう！')
      if (flag) {
        window.open(htmlURL);
      }
      else {
        return false;
      }
    })
  }
});
