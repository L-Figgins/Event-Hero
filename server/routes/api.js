const request = require('request-promise');
const express = require('express');
const { AUTH_TOKEN, PAGE_ID } = require('./constants');
const router = express.Router();

// router.get('/events', (req, res) => {
//   Event.find({}).then(events => {
//     res.json(events);
//   });
// });

router.get('/events', (req, res) => {
  const options = {
    method: 'GET',
    uri: `https://graph.facebook.com/${PAGE_ID}/events`,
    qs: {
      access_token: AUTH_TOKEN,
      fields: 'cover, name, id, description',
    },
  };

  request(options).then(fbRes => {
    // fixed at least this one
    const events = JSON.parse(fbRes).data;
    res.json(events);
  });
});

router.get('/events/:id', (req, res) => {
  const EVENT_ID = parseInt(req.params.id, 10);
  console.log('ATTEMPTING TO FETCH EVENT ID:', EVENT_ID);

  const options = {
    method: 'GET',
    uri: `https://graph.facebook.com/${EVENT_ID}`,
    qs: {
      access_token: AUTH_TOKEN,
      fields: 'id, cover, name, start_time, end_time',
    },
  };

  request(options).then(fbRes => {
    console.log(fbRes);
    const event = JSON.parse(fbRes).data;
    res.json(event);
  });
});

module.exports = router;
