// client side

import 'whatwg-fetch';

function loadEvents() {
  return fetch('/api/events').then(response => response.json());
}

function loadEventById(id) {
  return fetch(`/api/events/${id}`).then(response => response.json());
}

function loadAlbums() {
  return fetch('/api/albums').then(response => response.json());
}

export const Api = {
  loadEvents,
  loadEventById,
  loadAlbums,
};
