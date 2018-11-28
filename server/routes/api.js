const express = require('express');
const Event = require('../models/Events');

const router = express.Router();

router.get('/events', (req, res) => {
  Event.find({}).then(events => {
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
