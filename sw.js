const CACHE='site-ledger-cloud-shell-v4';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  const r=event.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin!==self.location.origin)return;
  // Firebase config must always be fresh; never store account/project settings in SW cache.
  if(u.pathname.endsWith('/firebase-config.js')){
    event.respondWith(fetch(r,{cache:'no-store'}).catch(()=>new Response('window.SITE_LEDGER_FIREBASE_CONFIG=null;',{headers:{'Content-Type':'application/javascript'}})));
    return;
  }
  // Prefer the deployed app on every visit, but keep the cached shell available offline.
  if(r.mode==='navigate'||u.pathname.endsWith('/index.html')){
    event.respondWith(fetch(r).then(response=>{
      if(response.ok)caches.open(CACHE).then(c=>c.put(r,response.clone()));
      return response;
    }).catch(()=>caches.match(r).then(cached=>cached||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(response=>{
    if(response.ok)caches.open(CACHE).then(c=>c.put(r,response.clone()));
    return response;
  })));
});
