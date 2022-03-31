$(() => {

  document.querySelector('#tweet-text').addEventListener('input', function (event) {

    let textareaLength = $(this).val().replaceAll(' ', '').length;
    let counterTotal = 140 - textareaLength;
    let counter = document.querySelector('output');

    //ignores whitespace in tweet
    event.data === ' ' ?
      textareaLength = textareaLength-- :
      counter.innerHTML = counterTotal;

    //turns red if counter is negative
    counterTotal < 0 ?
      counter.style.color = 'red' :
      counter.style.color = 'black';

    //displays error if character limit hit
    textareaLength > 140 ? 
    $("#full").slideDown("slow") : 
    $("#full").slideUp("slow");

    if (textareaLength > 0) {
      $("#empty").slideUp("slow");
    }
  });

});