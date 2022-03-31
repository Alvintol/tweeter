$(() => {

  //TWEET FEED BACKGROUND COLOR ON FOCUS
  document.querySelector('#tweet-text').addEventListener('focus', () => {
    const textArea = document.querySelector('#new-tweet');
    textArea.style.backgroundColor = '#ffffff69';
    textArea.style.borderRadius = '2px';
    
  });

  //TWEET FEED BACKGROUND COLOR ON BLUR
  document.querySelector('#tweet-text').addEventListener('blur', () => {
    let textareaLength = $('#tweet-text').val().replaceAll(' ', '').length;
    if (!textareaLength) {
      const textArea = document.querySelector('#new-tweet');
      textArea.style.backgroundColor = '';
      $('#new-tweet').slideUp('slow');
    }
  });
  
  document.querySelector('#new-tweet-link').addEventListener('click', () => {
    $('#new-tweet').slideDown('slow');
    document.querySelector('textarea').focus();
  });

  });