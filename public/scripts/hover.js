$(() => {

  let tweets = document.querySelectorAll('.tweet');

  tweets.forEach(function (tweet) {
    tweet.addEventListener('mouseover', function () {
      this.style.boxShadow = '2px 2px 2px 2px white';
      this.style.border = 'solid thick';
    })
    tweet.addEventListener('mouseout', function () {
      this.style.boxShadow = '';
      this.style.border = '';
    })
  })

});