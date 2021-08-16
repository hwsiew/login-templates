(()=>{"use strict";var e={675:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",""]);const o=r},65:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,"*{-webkit-box-sizing:border-box;box-sizing:border-box}html,body{width:100%;height:100%}.header{position:absolute;min-height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;background-color:#fff;z-index:6;-webkit-box-shadow:0 3px 10px rgba(0,0,0,.2);box-shadow:0 3px 10px rgba(0,0,0,.2);-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header i{font-size:2rem;margin:0 10px}.header #mobileNav{display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}@media screen and (max-width: 768px){.header #mobileNav{display:-webkit-box;display:-ms-flexbox;display:flex}}.header #mobileNav i{font-size:2rem}.container{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.container .sidebar{width:300px;height:100%;position:relative;overflow-y:auto;overflow-x:hidden;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}@media screen and (max-width: 768px){.container .sidebar{width:0}.container .sidebar.pinned{width:40%}}.container .sidebar ul#nav{margin-top:20px;list-style:none;padding:0}.container .sidebar ul#nav li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s, -webkit-transform .2s}.container .sidebar ul#nav li:not(.active):hover{cursor:pointer}.container .sidebar ul#nav li img{width:90%;height:100%}.container .sidebar ul#nav li img:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.container .content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}.container .content iframe#preview{border:none;width:100%;height:100%}",""]);const o=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var u=n(p),b={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(t[u].references++,t[u].updater(b)):t.push({identifier:p,updater:r(b,i),references:1}),a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var l=i(e,r),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},480:(e,t,n)=>{e.exports=n.p+"f8f08a2b95de646b8500.png"},50:(e,t,n)=>{e.exports=n.p+"8ecce4822edda4da3675.png"},967:(e,t,n)=>{e.exports=n.p+"76aa6536544f619daa46.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),a=n.n(o),s=n(565),l=n.n(s),c=n(216),d=n.n(c),p=n(589),u=n.n(p),b=n(675),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals;var f=n(65),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var g=n(50),x=[{src:"neumorphism.html",img:n(967)},{src:"glassmorphism.html",img:g},{src:"astra.html",img:n(480)}];document.addEventListener("DOMContentLoaded",(function(e){document.body.style.visibility="visible";var t=document.getElementById("nav"),n=document.getElementsByClassName("sidebar")[0],i=document.getElementById("mobileNav");x.forEach((function(e){var n=document.createElement("li"),i=document.createElement("img");i.src=e.img,n.dataset.url=e.src,n.appendChild(i),t.appendChild(n)}));var r=t.getElementsByTagName("li");function o(){for(var e=0;e<r.length;e++)r[e].classList.remove("active")}for(var a=0;a<r.length;a++)r[a].addEventListener("click",(function(){o(),document.getElementById("preview").src=this.dataset.url,this.classList.add("active")}));i.addEventListener("click",(function(){n.classList.toggle("pinned")}))}))})()})();