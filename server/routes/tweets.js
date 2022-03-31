'use strict';

const userHelper = require('../lib/util/user-helper')

const express = require('express');
const tweetsRoutes = express.Router();
const tweets = 'http://localhost:8080/tweets';

module.exports = function (DataHelpers) {

  tweetsRoutes.get('/', (req, res) => {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post('/', (req, res) => {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  tweetsRoutes.post('/tweets', (req, res) => {
    const tweet = {
      user: {
        name: user.name,
        handle: user.handle,
        avatars: user.avatars
      },
      content: {
        text: req.body.text
      },
      create_at: Date.now()
    }

    tweets.push(tweet)
    res.status(201).redirect('/');
  })

  return tweetsRoutes;

}