console.log("in service worker");
const cacheName = "mb-assets";
const assets = [
	'/',
	'/offline.html',
	'manifest.json',
	'https://fonts.googleapis.com/css2?family=Nunito']

self.addEventListener("install", e => {
	console.log("INSTALL EVENT")
	e.waitUntil(
		caches.open(cacheName)
			.then(cache => {
				cache.addAll(assets)
			})
			.catch(err => console.error("Cannot open cache:", err))
	)
});

self.addEventListener("activate", (ev) => { console.log("SW activated") })
self.addEventListener("offline", (e) => console.log("OFFLINE", e))
self.addEventListener("fetch", (e) => {
	// console.log("SW FETCH")
	e.respondWith(
		caches.match(e.request)
			.then(cacheResponse => {
				return cacheResponse || fetch(e.request)
			})
			.catch(err => console.error("Cache match error:", err))
	)
});

self.addEventListener("beforeinstallprompt", (e) => {
	// e.prompt();
	console.log("BEFORE INSTALL", e)
});

self.addEventListener('push', function (event) {
	event.data
		? console.log('This push event has data: ', event.data)
		: console.log('This push event has no data.');
});