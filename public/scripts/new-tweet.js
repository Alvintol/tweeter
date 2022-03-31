$(() => {

  //new tweet textarea background color change on focus
  document.querySelector('#tweet-text').addEventListener('focus', () => {
    const textArea = document.querySelector('#new-tweet');
    textArea.style.backgroundColor = '#ffffff69';
    textArea.style.borderRadius = '2px';
  });

  //new tweet textarea background color change when no longer focused
  document.querySelector('#tweet-text').addEventListener('blur', () => {
    let textareaLength = $('#tweet-text').val().replaceAll(' ', '').length;
    if (!textareaLength) {
      const textArea = document.querySelector('#new-tweet');
      textArea.style.backgroundColor = '';
      $('#hidden-tweet').slideDown('slow');
      $('#new-tweet').slideUp('slow');
    };
  });

  //new tweet animations for textarea and navLink when navLink is clicked
  document.querySelector('#new-tweet-link').addEventListener('click', () => {
    $('#hidden-tweet').slideUp('slow');
    $('#new-tweet').slideDown('slow');
    document.querySelector('textarea').focus();
  });

  //pulls screen to top of the page and initiates animations for all buttons and text area when bottom arrow is clicked
  document.querySelector('#arrow-up')
    .addEventListener('click', () => {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      $('#hidden-tweet').slideUp('slow');
      $('#new-tweet').slideDown('slow');
      $('#arrow-up').fadeOut();
      document.querySelector('textarea').focus();
    });

  window.addEventListener('scroll', (event) => {
    console.log('scrollY:', window.scrollY);
    window.scrollY > 50 ? $('#arrow-up').fadeIn() : $('#arrow-up').fadeOut();
  })

});