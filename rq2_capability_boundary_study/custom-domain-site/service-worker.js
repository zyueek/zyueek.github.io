self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  if (event.data === "rq2-benign-service-worker-check") {
    event.source.postMessage("Benign service worker registered successfully.");
  }
});
