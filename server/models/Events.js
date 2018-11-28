const mongoose = require('mongoose');
const db = require('../db'); //eslint-disable-line
const { Schema } = mongoose;

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
  imgURL: String,
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
