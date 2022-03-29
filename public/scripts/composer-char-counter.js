document.querySelector('#tweet-text').addEventListener("keypress", function (e) {
  let outputLength = $(this).val().length + 1;
  let counterTotal = 140 - outputLength;
  document.querySelector('output').innerHTML = counterTotal;
});


