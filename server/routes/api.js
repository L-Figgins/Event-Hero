const request = require('request-promise');
const express = require('express');
const { PAGE_ID, PAGE_ACCESS_TOKEN } = require('./constants');
const router = express.Router();

router.get('/events', (req, res) => {
  const options = {
    method: 'GET',
    uri: `https://graph.facebook.com/${PAGE_ID}/events`,
    qs: {
      access_token: PAGE_ACCESS_TOKEN,
      fields:
        'name, id, description, start_time, cover{id, source.height(600)}',
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
    uri: `https://graph.facebook.com/v3.2/${EVENT_ID}`,
    qs: {
      access_token: PAGE_ACCESS_TOKEN,
      fields: 'id, name, description, cover{id,source.height(800)}',
    },
  };

  request(options).then(fbRes => {
    console.log(fbRes);
    const event = JSON.parse(fbRes);
    res.json(event);
  });
});

router.get('/albums', (req, res) => {
  const options = {
    method: 'GET',
    uri: `https://graph.facebook.com/${PAGE_ID}/albums`,
    qs: {
      access_token: PAGE_ACCESS_TOKEN,
      fields:
        'id, name, description, backdated_time, created_time, cover_photo{id,source.height(600)}',
    },
  };

  request(options)
    .then(fbRes => {
      const albums = JSON.parse(fbRes).data;
      console.log(albums);
      res.json(albums);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get('/albums/:id', (req, res) => {
  const albumId = parseInt(req.params.id, 10);
  const options = {
    method: 'Get',
    uri: `https://graph.facebook.com/v3.2/${albumId}`,
    qs: {
      access_token: PAGE_ACCESS_TOKEN,
      fields: 'id, name, description, photos{source.width(800)}',
    },
  };

  request(options)
    .then(fbRes => {
      const album = JSON.parse(fbRes);
      if (album) {
        console.log('Photos Recieved From Facebook Album ID:', albumId);
      }
      res.json(album);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
