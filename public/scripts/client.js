$(() => {

  const data = [
    {
      'user': {
        'name': 'Newton',
        'avatars': 'https://i.imgur.com/73hZDYK.png'
        ,
        'handle': '@SirIstweetc'
      },
      'content': {
        'text': 'If I have seen further it is by standing on the shoulders of giants'
      },
      'created_at': 1461116232227
    },
    {
      'user': {
        'name': 'Descartes',
        'avatars': 'https://i.imgur.com/nlhLi3I.png',
        'handle': '@rd'
      },
      'content': {
        'text': 'Je pense , donc je suis'
      },
      'created_at': 1461113959088
    }
  ];

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
      <footer>${Date(tweet.created_at)}</footer>
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
  const renderTweets = (tweetsInData) => {
    const feed = document.querySelector('#tweet-feed');

    //FUNCTION FOR LOOPING THROUGH ALL SEPERATE TWEETS IN DATABASE
    for (let singleTweet = 0; singleTweet < tweetsInData.length; tweet++) {
      const tweetArticle = createTweetElement(tweetsInData[singleTweet]);
      return feed.prepend(tweetArticle[0]);
    };
  };

  $.ajax({
    url: '/tweets',
    type: 'GET'
  }).then((data) => {
    return renderTweets(data);
  });

  $('#new-tweet').submit((event) => {
    event.preventDefault();
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: $('#new-tweet').serialize()
    }).then((data) => {
      console.log('TEXTPLACEHOLDER:', data)
    })
  })


});