/* Mock data an API call's. TO BE REPLACED 
   with actual requests to the server */
// import { events } from './data';

// export const Api = {
//   loadEvents: () => events,
//   loadEventById: id => events.find(event => event.id === parseInt(id, 10)),
//   // loadEventById: () => events[0],
// };

import 'whatwg-fetch';

function loadEvents() {
  return fetch('/api/events').then(response => response.json());
}

function loadEventById(id) {
  return fetch(`/api/events/${id}`).then(res => res.json());
}

export const Api = {
  loadEvents,
  loadEventById,
};
