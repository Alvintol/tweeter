$(() => {

  //BUILDS MARKUP AND USING RELEVANT INFO FROM TWEET DATABASE 
  const createTweetElement = (tweet) => {

    let $tweet = $(`<article class='tweet'>
    <div class='tweet-top'>
      <img src='${tweet.user.avatars}'></img>
      <div class='username'>${tweet.user.handle}</div>
    </div>
    <p>
      ${tweet.content.text}
    </p>            
    <div class='container tweet-bottom'>
      <footer class='timeago'>${timeago.format(tweet.created_at)}</footer>
      <div class='icons'>
        <i class='icon fa-solid fa-flag'></i>
        <i class='icon fa-solid fa-retweet'></i>
        <i class='icon fa-solid fa-heart'></i>
      </div>
    </div>
    </article>`);

    return $tweet;
  };

  //GENERATES THE HTML MARKUP INTO INDEX.JS FILE 
  const renderTweets = () => {
    $('#tweet-feed').empty();
    $.get('/tweets').then(data => {

      //FUNCTION FOR LOOPING THROUGH ALL SEPERATE TWEETS IN DATABASE
      data.forEach(tweet => {
        $('#tweet-feed').prepend(createTweetElement(tweet));
      })

    })
  };

  renderTweets();

  $('#new-tweet').submit(event => {
    let textareaLength = $('#tweet-text').val().replaceAll(' ', '').length;
    event.preventDefault();
    if (textareaLength > 140) {
      alert('Too many characters!');
      return;
    }
    if (textareaLength === 0) {
      alert('Your keyboard must have been unplugged!')
      return;
    }
    $.ajax({
      type: 'post',
      url: '/tweets',
      data: $('#new-tweet').serialize()
    }).then(data => {
      renderTweets();
    })
  })

});