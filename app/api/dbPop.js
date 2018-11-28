#!/usr/bin/env node
/* eslint-disable */

const events = [
  {
    id: 1,
    title: 'Event 1',
    message: {
      artistName: 'Kid Cudi',
      artistGenre: 'Rap',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 2,
    title: 'Event 2',
    message: {
      artistName: 'The Dead Kennedys',
      artistGenre: 'Punk',
    },
    date: {
      day: '15',
      month: 'Oct',
      weekday: 'thurs',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 3,
    title: 'Event 3',
    message: {
      artistName: 'Explosions in the Sky',
      artistGenre: 'Instrumental',
    },
    date: {
      day: '16',
      month: 'Oct',
      weekday: 'Friday',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 4,
    title: 'Event 4',
    message: {
      artistName: 'Person',
      artistGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 5,
    title: 'Event 5',
    message: {
      artistName: 'Person',
      artistGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 6,
    title: 'Event 6',
    message: {
      artistName: 'Person',
      artistGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 7,
    title: 'Event 7',
    message: {
      artistName: 'Person',
      artistGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 8,
    title: 'Event 8',
    message: {
      artistName: 'Person',
      artistGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 9,
    title: 'Event 9',
    message: {
      artistName: 'Person',
      artistGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
  {
    id: 10,
    title: 'Event 10',
    message: {
      artistName: 'Person',
      artistGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
    imageURL: '/images/artist.jpg',
  },
];

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  artistName: String,
  artistGenre: String,
});

const DateSchema = new Schema({
  day: String,
  month: String,
  weekday: String,
});

const EventSchema = new Schema({
  id: Number,
  title: String,
  message: MessageSchema,
  date: DateSchema,
  imageURL: String,
});

const Event = mongoose.model('Event', EventSchema);

mongoose.connect('mongodb://127.0.0.1:27017/HoneyHive')
.then( ()=> {
  events.forEach( event => {
    const newEvent = new Event({
      id: event.id,
      title: event.title,
      message: event.message,
      date: event.date,
      imageURL: event.imageURL,
    });

    newEvent.save()
    .then( doc => {
      console.log('Saved Document:', doc);
    })
    .catch( error => {
      console.log('Error in dbPop script:', error);
    })
  })
})

