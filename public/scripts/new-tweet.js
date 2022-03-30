$(() => {

  //TWEET FEED BACKGROUND COLOR ON FOCUS
  document.querySelector('#tweet-text').addEventListener('focus', () => {
    const textArea = document.querySelector('#new-tweet');
    textArea.style.backgroundColor = '#ffffff69';
    textArea.style.borderRadius = '2px';
  });

  //TWEET FEED BACKGROUND COLOR ON BLUR
  document.querySelector('#tweet-text').addEventListener('blur', () => {
    const textArea = document.querySelector('#new-tweet');
    textArea.style.backgroundColor = '';
  });

});