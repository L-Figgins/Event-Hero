const request = require('request-promise');
const express = require('express');
const { AUTH_TOKEN, PAGE_ID } = require('./constants');
const Event = require('../models/Events');
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
    const events = JSON.parse(fbRes).data;
    res.json(events);
  });
});

router.get('/events/:id', (req, res) => {
  const eventID = parseInt(req.params.id, 10);
  Event.findOne({ id: eventID })
    .then(event => {
      res.json(event);
    })
    .catch(err => console.log(err));
});

module.exports = router;
