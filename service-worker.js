!function(){"use strict";const e=["client/index.8a9d57d6.js","client/client.257c7a59.js","client/index.153b5b82.js","client/index.3d220ab8.js","client/index.596d4c43.js"].concat(["service-worker-index.html","favicon.png","global.css","great-success.png","husky_quote.jpg","logo-192.png","logo-512.png","manifest.json","octocat_64x64.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1580107979589").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1580107979589"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1580107979589").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
