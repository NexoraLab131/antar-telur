/* Service worker sederhana: membuat halaman bisa dipasang sebagai aplikasi.
   Tidak menyimpan data apa pun; semua permintaan langsung diteruskan ke internet. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
