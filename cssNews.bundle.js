(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{339:function(n,t,e){var r=e(346);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};e(342)(r,o);r.locals&&(n.exports=r.locals)},341:function(n,t,e){"use strict";n.exports=function(e){var s=[];return s.toString=function(){return this.map(function(n){var t=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=function(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(e," */")}(r),a=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(a).concat([o]).join("\n")}return[e].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},s.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(e[o]=!0)}for(var a=0;a<n.length;a++){var i=n[a];null!=i[0]&&e[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="(".concat(i[2],") and (").concat(t,")")),s.push(i))}},s}},342:function(n,t,o){"use strict";var e,r,f={},a=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=(r={},function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]});function l(n,t){for(var e=[],r={},o=0;o<n.length;o++){var a=n[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):e.push(r[i]={id:i,parts:[s]})}return e}function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=f[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{for(var i=[];a<r.parts.length;a++)i.push(m(r.parts[a],t));f[r.id]={id:r.id,refs:1,parts:i}}}}function s(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=o.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var r=i(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,u=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}var h=null,v=0;function m(t,n){var e,r,o;if(n.singleton){var a=v++;e=h=h||s(n),r=d.bind(null,e,a,!1),o=d.bind(null,e,a,!0)}else e=s(n),r=function(n,t,e){var r=e.css,o=e.media,a=e.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,e,n),o=function(){!function(n){if(null===n.parentNode)return;n.parentNode.removeChild(n)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}n.exports=function(n,c){(c=c||{}).attributes="object"==typeof c.attributes?c.attributes:{},c.singleton||"boolean"==typeof c.singleton||(c.singleton=a());var u=l(n,c);return p(u,c),function(n){for(var t=[],e=0;e<u.length;e++){var r=u[e],o=f[r.id];o&&(o.refs--,t.push(o))}n&&p(l(n,c),c);for(var a=0;a<t.length;a++){var i=t[a];if(0===i.refs){for(var s=0;s<i.parts.length;s++)i.parts[s]();delete f[i.id]}}}}},346:function(n,t,e){(n.exports=e(341)(!1)).push([n.i,".newsDiv{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    height: 1500px;\r\n    align-content: space-between;\r\n}\r\n\r\n#news a img{\r\n    height: 300px;\r\n    width: 300px;;\r\n}\r\n\r\n#news span{\r\n    font-size: 25px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: #ffffff;\r\n}\r\n\r\n.newsBlock{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    width: 300px;\r\n    margin-left: 50px;\r\n    margin-bottom: 50px;\r\n}",""])}}]);