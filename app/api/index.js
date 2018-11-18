/* Mock data an API call's. TO BE REPLACED 
   with actual requests to the server */
import { events } from './data';

export const Api = {
  loadEvents: () => events,
  loadEventById: id => events.find(event => event.id === id),
};
