importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

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

workbox.precaching.precacheAndRoute([{"revision":"f457e7d92f963509a2a626d6d46f60c3","url":"app.css"},{"revision":"680198510db94b36fd0799df5ec473b3","url":"build/bundle.css"},{"revision":"6f2c29a4e9a190bc0bc904bcd547b579","url":"build/bundle.js"},{"revision":"a2a4bc916a602a3e65f509a41f257e82","url":"favicon.png"},{"revision":"dd88f7f892bb60501f31fa257d16272b","url":"favicon.svg"},{"revision":"858732bdbf42b2b6211c410e832eb165","url":"images/faisceau.svg"},{"revision":"0701859b54cdb0d5a3c43dec36a9602b","url":"images/hero-img-01.png"},{"revision":"bbf62e9b3f9f0ad759ae0107b6449970","url":"images/pattern.svg"},{"revision":"9132096cd56ea8e827ac90023106c5b1","url":"index.html"},{"revision":"2e147ff372cb903ea3d51df9e1e09a03","url":"manifest.json"},{"revision":"010ded7c998eea10c269dd5bfdb23363","url":"package.json"},{"revision":"10fb655dca5b58a9733af456b692c291","url":"tailwind.css"},{"revision":"03b8a1c8f4aad3f595cd23eb80223fd0","url":"workbox-6d047abd.js"}]);