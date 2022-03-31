$(() => {
  
  //hover animations
  let tweets = document.querySelectorAll('.tweet');

  //boxshadow while hovering over tweets
  tweets.forEach(function (tweet) {
    tweet.addEventListener('mouseover', function () {
      this.style.boxShadow = '2px 2px 2px 2px white';
      this.style.border = 'solid thick';
    });
    tweet.addEventListener('mouseout', function () {
      this.style.boxShadow = '';
      this.style.border = '';
    });
  });

  //arrow blink hovering over arrows in nav
  document.querySelector('.nav-tweet').addEventListener('mouseover', () => {
    $('.fa-angles-down').fadeOut(100).fadeIn(500);
  });

});