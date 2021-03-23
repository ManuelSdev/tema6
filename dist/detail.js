(()=>{"use strict";var e={99:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(645),r=t.n(a)()((function(e){return e[1]}));r.push([e.id,"ul{list-style-type:none}ul#games-list li{display:inline-block}.game-name{color:#ff8c00}.game-name:hover{color:orange}.game-snippet{max-width:220px}.game-snippet .game-snippet-container,.game-snippet .game-name{text-align:center}.game-snippet .game-name{max-width:220px;display:-webkit-box;text-overflow:ellipsis;overflow:hidden}",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var a,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function o(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],r=0;r<e.length;r++){var c=e[r],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var m=o(d),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(i[m].references++,i[m].updater(u)):i.push({identifier:d,updater:v(u,n),references:1}),a.push(d)}return a}function s(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function u(e,n,t){var a=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,p=0;function v(e,n){var t,a,r;if(n.singleton){var i=p++;t=f||(f=s(n)),a=m.bind(null,t,i,!1),r=m.bind(null,t,i,!0)}else t=s(n),a=u.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var r=o(t[a]);i[r].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=o(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=s}}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e="http://localhost:3000";var n=t(379),a=t.n(n),r=t(99);a()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i=parseInt(new URLSearchParams(window.location.search).get("id"));(async()=>{await async function(n){let t=await(async n=>(await fetch(`${e}/games/${n}`)).json())(n);document.getElementById("game-name-title").innerHTML=t.name,$(".breadcrumb span").html(`Game ${t.id}`),document.getElementById("game-image").src=t.image,document.getElementById("game-image").alt=t.name,document.getElementById("metacritic-score").innerHTML=t.scores.metacritic,document.getElementById("user-score").innerHTML=t.scores.userScore,document.getElementById("summary").innerHTML=t.summary,document.getElementById("platform").innerHTML=t.platform,document.getElementById("release-date").innerHTML=t.relaseDate}(i),await async function(n){console.log(n);let t=await(async n=>(await fetch(`${e}/games/${n}/comments?_expand=user`)).json())(n);document.getElementById("comments").appendChild(document.createElement("ul")).setAttribute("id","comments-list");for(var a,r=0;r<t.length;r++)document.getElementById("comments-list").appendChild(document.createElement("li")).innerHTML=`<div class="row">\n      <div class="col col-2">\n        <div class="image-container text-right">\n          <img class="avatar rounded" src="${(a=t[r]).user.image}" alt="${a.user.name}" />\n        </div>\n      </div>\n      <div class="col col-10">\n        <div class="user-name-container">\n          <h4 class="text-muted">${a.user.name}</h4>\n        </div>\n        <div class="comment-body-container">\n          ${a.body}\n        </div>\n        <div class="date-container">\n          Comment date: <b>${a.commentDate}</b>\n        </div>\n      </div>\n    </div>`}(i)})()})()})();