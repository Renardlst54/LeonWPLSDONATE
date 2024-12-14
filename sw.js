self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('message', event => {
    if (event.data.type === 'START_AUDIO') {
        // Le service worker reste actif pour maintenir l'audio
        console.log('Audio started');
    }
});
