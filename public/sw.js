if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-56079563"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Cj1ceW_TJiVhlW9ZP0n4K/_buildManifest.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/Cj1ceW_TJiVhlW9ZP0n4K/_ssgManifest.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/05d954cf-d6bf05a68f58e5daa1d0.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/18-391ba56d35ec331432fc.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/999-3c43b8b0b7ac39edb883.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/commons-824d49df35e67aacf1d4.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/framework-a549dedfe12b51f577fb.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/main-06b555ebcb40b63e2872.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/pages/_app-43dbd760b7ce3e6304a8.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/pages/_error-861ea6993aceba840649.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/pages/index-dcb7539c09d8ffd184cc.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/chunks/webpack-3b8f5e579f468e265e08.js",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/_next/static/css/53cb70ad5a3acad0fab0.css",revision:"Cj1ceW_TJiVhlW9ZP0n4K"},{url:"/design.png",revision:"25d028e29335b83ba3a1a31945c1ba4a"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/finance.png",revision:"4b4d8f0d27fc51c82d52742ea3fb385d"},{url:"/logo-basic.png",revision:"04f20dfd29e69519746b27f0f127ffff"},{url:"/logo-basic.svg",revision:"5b33caa030b04c1e6c77c2678f7d11d6"},{url:"/logo-full.svg",revision:"e3ddd458b882e97b68bea0392c6f881a"},{url:"/resume.pdf",revision:"d80917c7eb39f414cd70533fee2fdb45"},{url:"/technologies.png",revision:"23daaf83c8cae4d5e17354096d5e681f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/work/badadovolena.png",revision:"6f4b681dcc281102eb08278e0c62d787"},{url:"/work/decorasi.png",revision:"836e5dfbe8e0b35c4c855fc1ea5c40d8"},{url:"/work/larok.png",revision:"1e8dc2fd8434570bd4e1c7011709c377"},{url:"/work/plantae.png",revision:"7a6eeef216fd76436aed1f9d86ebe40c"},{url:"/work/pragaleto.png",revision:"cacb1025f6c77f11472a3e703d17d054"},{url:"/work/svobodni.png",revision:"e029be0a321df09e5472409e41a16f97"},{url:"/work/zamek.png",revision:"545181ebabfb02b35acb671015ca33e8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
