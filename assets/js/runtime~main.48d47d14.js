(()=>{"use strict";var e,t,r,o,a,n={},f={};function c(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=n,c.c=f,e=[],c.O=(t,r,o,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var f=!0,d=0;d<r.length;d++)(!1&a||n>=a)&&Object.keys(c.O).every((e=>c.O[e](r[d])))?r.splice(d--,1):(f=!1,a<n&&(n=a));if(f){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);c.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,c.d(a,n),a},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",186:"1b00f897",195:"c4f5d8e4",287:"17c42f28",327:"74db3736",348:"ff03da17",414:"393be207",426:"e41f7ce8",446:"0ec3581e",452:"ca8cbad4",479:"fb63c38c",480:"78ac6002",514:"1be78505",669:"e4fecab6",671:"0e384e19",758:"8807027c",817:"14eb3368",836:"0480b142",885:"971a56da",918:"17896441"}[e]||e)+"."+{53:"5c77ef55",85:"0226b9d2",186:"b202e4fd",195:"fd8904ce",210:"f637648c",287:"b18e18a3",327:"359dc23c",348:"cfc542cd",414:"63121e01",426:"d8f2c312",446:"fd10cec0",452:"4a544352",479:"4e133291",480:"c63981ee",514:"e4d1af46",669:"8334a7ab",671:"132e9f7d",758:"d5175cb7",817:"a6446dee",836:"569d5fc0",885:"535de905",918:"e8eb07a5",972:"d5cc17b1"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="docs:",c.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var f,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){f=l;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",a+r),f.src=e),o[e]=[t];var b=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),d&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/formalizedChinese/",c.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","1b00f897":"186",c4f5d8e4:"195","17c42f28":"287","74db3736":"327",ff03da17:"348","393be207":"414",e41f7ce8:"426","0ec3581e":"446",ca8cbad4:"452",fb63c38c:"479","78ac6002":"480","1be78505":"514",e4fecab6:"669","0e384e19":"671","8807027c":"758","14eb3368":"817","0480b142":"836","971a56da":"885"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=c.p+c.u(t),f=new Error;c.l(n,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],f=r[1],d=r[2],i=0;if(n.some((t=>0!==e[t]))){for(o in f)c.o(f,o)&&(c.m[o]=f[o]);if(d)var u=d(c)}for(t&&t(r);i<n.length;i++)a=n[i],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return c.O(u)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();