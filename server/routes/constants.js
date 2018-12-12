// fb constants

// IMPORTANT NOTE PAGE_ID AND THE AUTH TOKEN WILL BE REPLACED BY CODE THAT CREATES LONG_TERM OAUTH TOKENS AND REFRESHES. FOR NOW THIS
const PAGE_ID = 718351648548456;
const AUTH_TOKEN =
  'EAAELyoAkOZC8BAPbvW8K09loQmxjfMPv1iQ2ZA2E0wOJdcDIaZCM5ntjkox31v4GF2KZBTWBoZCtxb2JZAUwnDRYnpwl1245P4bwQhDFSvr8Y8ZAqh10y4SGZCnas0JE3omBJehy1dbcNubLybI1PkuSrZCZC3i28ROgHLWgQZCZBFVJpqJHAJbjodVJ';

// FB_ROUTE_CONSTANTS
const GET_PAGE_INFO = `https://graph.facebook.com/${PAGE_ID}?fields=about,name,cover&auth&access_token=${AUTH_TOKEN}`;
const GET_FB_EVENTS = `https://graph.facebook.com/v3.2/${PAGE_ID}/events?fields=cover,name,start_time&access_token=${AUTH_TOKEN}`;

module.exports = {
  GET_PAGE_INFO,
  GET_FB_EVENTS,
  PAGE_ID,
  AUTH_TOKEN,
};