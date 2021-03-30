importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

/* 
  Upon workbox injectManifest, if the files set for the cache changed, they'll be given new revisions.
  With the new revisions, the content of the website will be updated. We'll skip the waiting part 
*/

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/users'),
  workbox.strategies.cacheFirst()
);

// workbox.routing.registerRoute(
//   new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
//   workbox.strategies.cacheFirst({
//     cacheName: 'google-fonts',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//       }),
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200]
//       }),
//     ],
//   }),
// );

self.addEventListener("push", e => {
  const data = e.data.json();

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "./favicon.png",
    data: {
      url: `http://localhost${data.url}`
    }
  });
});

self.addEventListener("notificationclick", e => {

  console.log(e.notification);

  e.waitUntil(clients.openWindow(e.notification.data.url));
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);