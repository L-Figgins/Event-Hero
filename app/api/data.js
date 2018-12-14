// Event Data Structure needs to be improved

// THIS IS ONLY HERE AS AN EXAMPLE OF WHAT EVENTS RETURNED FROM FACEBOOK LOOK LIKE
// WE NO LONGER NEED ANY DATABASE EXCEPT POSSIBLY TO STORE AUTH TOKENS
// THIS WILL BE EVALUATED AT A LATER DATE. SOMETHING SOMETHING  <INSERT CURSE WORD>

const events = [
  {
    id: 1,
    name: 'Event 1',
    start_time: 'date string goes here',
    end_time: 'date/time string goes here',
    description: 'des goes here',
    cover: {
      source: 'static url',
      id: 23,
    },
  },
];

export default events;
