$(() => {

  //error corrector for malicious text
  const escape = (str) => {
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
  };

  //builds markup and using relevant info from tweet database
  const createTweetElement = (tweet) => {

    let $tweet = $(`<article class='tweet'>
    <header class='tweet-top'>
      <div class='user'>
        <img src='${tweet.user.avatars}'></img>
        <div class='name'>
        ${tweet.user.name}
        </div>
      </div>
      <div class='username'>${tweet.user.handle}</div>
    </header>
    ${escape(tweet.content.text)}        
    <footer class='container tweet-bottom'>
      <div class='timeago'>${timeago.format(tweet.created_at)}</div>
      <div class='icons'>
        <i class='icon fa-solid fa-flag'></i>
        <i class='icon fa-solid fa-retweet'></i>
        <i class='icon fa-solid fa-heart'></i>
      </div>
    </footer>
    </article>`);

    return $tweet;
  };

  //generates the html markup into index.js
  const renderTweets = () => {
    $.get('/tweets').then(data => {
      $('#tweet-feed').empty();

      //function for looping though all seperate tweets in database
      data.forEach(tweet => {
        $('#tweet-feed').prepend(createTweetElement(tweet));
      });
    });
  };

  //loads tweets into database
  renderTweets();

  //actions for new tweet submission
  $('#new-tweet').submit(event => {
    let textareaLength = $('#tweet-text').val().replaceAll(' ', '').length;
    event.preventDefault();

    //if more than 140 chars: do not submit
    if (textareaLength > 140) {
      return;
    };
    //if no chars: do not submit and show error html
    if (textareaLength == 0) {
      return $('#empty').slideDown('slow')
    };

    //generate new list of tweets
    $.ajax({
      type: 'post',
      url: '/tweets',
      data: $('#new-tweet').serialize()
    }).then(data => {
      $('form').trigger('reset');
      renderTweets();
      $('#new-tweet').slideUp('slow');
      $('#hidden-tweet').slideDown('slow');
    });
  });

});