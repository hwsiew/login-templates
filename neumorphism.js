(()=>{"use strict";var e={893:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",""]);const i=r},433:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'*{box-sizing:border-box;font-family:"Poppins",sans-serif}html,body{background-color:#eee;height:100%;width:100%;margin:0}.container{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}form#login{min-width:300px;padding:10px 10px 30px 10px;display:flex;flex-direction:column;background-color:#eee;border-radius:10px;box-shadow:-3px -3px 10px #ffffff73,2px 2px 5px rgba(94,104,121,.3)}form#login .field{width:100%;padding:2px;margin:10px auto}form#login .field input{width:100%;outline:none;border:none;padding:1rem;background-color:#eee;border-radius:25px;box-shadow:inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73}form#login .field input:focus{box-shadow:inset 1px 1px 5px #babecc,inset -1px -1px 2px #ffffff73}form#login a{font-size:.8rem;color:#39c;padding-left:5px;cursor:pointer;text-decoration:none}form#login button[type=submit]{font-weight:700;cursor:pointer;margin-top:1rem;margin-bottom:1rem;padding:1rem;border-radius:25px;border:none;outline:none;background-color:#eee;box-shadow:2px 2px 5px #babecc,-5px -5px 10px #ffffff73}form#login button[type=submit]:focus{box-shadow:inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73}form#login .signup{font-size:.8rem;text-align:center}',""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);o&&r[p[0]]||(n&&(p[2]?p[2]="".concat(n," and ").concat(p[2]):p[2]=n),t.push(p))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var p=e[s],u=o.base?p[0]+o.base:p[0],c=i[u]||0,f="".concat(u," ").concat(c);i[u]=c+1;var l=n(f),d={css:p[1],media:p[2],sourceMap:p[3]};-1!==l?(t[l].references++,t[l].updater(d)):t.push({identifier:f,updater:r(d,o),references:1}),a.push(f)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var p=o(e,r),u=0;u<i.length;u++){var c=n(i[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=p}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),s=n(565),p=n.n(s),u=n(216),c=n.n(u),f=n(589),l=n.n(f),d=n(433),b={};b.styleTagTransform=l(),b.setAttributes=p(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=c(),t()(d.Z,b),d.Z&&d.Z.locals&&d.Z.locals;var m=n(893),x={};x.styleTagTransform=l(),x.setAttributes=p(),x.insert=a().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=c(),t()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals})()})();