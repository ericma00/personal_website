"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/personal_website/index.html","7642ecd6e7eb76143090d450d6c8f79a"],["/personal_website/static/css/main.14a15a10.css","ba4481b8aceb6b0cc4221110dcbe7b05"],["/personal_website/static/js/main.9ac009ef.js","d06ffd4e3bed756c610dd4aa6328a9dc"],["/personal_website/static/media/identityGun.195d53c2.jpg","195d53c201fd189946d278c8a4b6e913"],["/personal_website/static/media/identity_gun_desc.7e92f213.PNG","7e92f213b671e3444967aece3a18ae58"],["/personal_website/static/media/instagrad_desc.c4ff1b4a.png","c4ff1b4abbbd036ae3805ee192b803ba"],["/personal_website/static/media/instagrads.b9587199.png","b958719934dcf80fa11078594b516dfa"],["/personal_website/static/media/mass_shooting.d076039c.jpg","d076039c76b8c7cbc12eba3371b1375c"],["/personal_website/static/media/mass_shooting_desc.77055a82.PNG","77055a82227b1cabd5cfc3c5e330db50"],["/personal_website/static/media/mount_rainier.69f90cef.jpg","69f90cefb98302ef7b4ede13a91178f2"],["/personal_website/static/media/nineboard_desc.401b7012.PNG","401b7012ba8d11de7bcac6ef458d933a"],["/personal_website/static/media/patient_appointment_desc.5b0a49b0.PNG","5b0a49b0e8fc76422136a0f49779e3f7"],["/personal_website/static/media/pencil.1721ea5d.jpg","1721ea5dbde561aa73b42fb2b8757ee1"],["/personal_website/static/media/pencil_desc.81b26058.jpg","81b26058da7ac85f104f2750785067da"],["/personal_website/static/media/personal_website.0e5f7664.png","0e5f766474db68c07427f85481f0b127"],["/personal_website/static/media/personal_website_desc.f3908300.png","f3908300b9c332d9da534eb51ea3c78c"],["/personal_website/static/media/profile.b7f07292.jpg","b7f072927653d7533c1d08ca795db00e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/personal_website/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});