/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();

/*
workbox.routing.registerRoute(
  /\.(?:js|css|html|json)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'ionic-cache'
  })
);
*/

/*
  This is our code to handle push events.
*/
self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');
  console.log('[Service Worker] Push had this data: "' + event.data.text() +'"');

  const title = 'Push Notification';
  const options = {
    body: event.data.text(),
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  './build/main.js',
  './build/vendor.js',
  './build/main.css',
  './build/polyfills.js',
  'index.html',
  'manifest.json'
]);
