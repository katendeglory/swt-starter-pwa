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
    body: "Notified From Svelte App!",
    // icon: "http://image.ibb.co/frYOFd/tmlogo.png"
    icon: "./favicon.png"
  });
});

workbox.precaching.precacheAndRoute([{"revision":"f457e7d92f963509a2a626d6d46f60c3","url":"app.css"},{"revision":"c3477c6fe391926fb261b94caf44d8b3","url":"app.js"},{"revision":"369a29cfc99cb933100c2aac9f95aa7f","url":"build/bundle.css"},{"revision":"d4c012e60bca2856f014154ca0bfd529","url":"build/bundle.js"},{"revision":"a2a4bc916a602a3e65f509a41f257e82","url":"favicon.png"},{"revision":"dd88f7f892bb60501f31fa257d16272b","url":"favicon.svg"},{"revision":"858732bdbf42b2b6211c410e832eb165","url":"images/faisceau.svg"},{"revision":"0701859b54cdb0d5a3c43dec36a9602b","url":"images/hero-img-01.png"},{"revision":"bbf62e9b3f9f0ad759ae0107b6449970","url":"images/pattern.svg"},{"revision":"b9435ffc7da768fa987b47f0bce56f10","url":"index.html"},{"revision":"70b54c45f069d27b57d16c7879169d6f","url":"manifest.json"},{"revision":"010ded7c998eea10c269dd5bfdb23363","url":"package.json"},{"revision":"10fb655dca5b58a9733af456b692c291","url":"tailwind.css"},{"revision":"03b8a1c8f4aad3f595cd23eb80223fd0","url":"workbox-6d047abd.js"}]);