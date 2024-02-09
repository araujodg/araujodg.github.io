const staticEasyScoreboard = 'scoreboard-site-v1';
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/dist",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})