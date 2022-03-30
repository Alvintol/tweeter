$(() => {

  document.querySelector('#tweet-text').addEventListener('focus', () => {
    const textArea = document.querySelector('#new-tweet');
    textArea.style.backgroundColor = '#ffffff69';
    textArea.style.borderRadius = '2px';
  });
  document.querySelector('#tweet-text').addEventListener('blur', () => {
    const textArea = document.querySelector('#new-tweet');
    textArea.style.backgroundColor = '';
  });
  
});