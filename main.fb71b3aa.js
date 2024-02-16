parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,o){return n(t)||r(t,o)||a(t,o)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}function n(t){if(Array.isArray(t))return t}function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function a(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".game-score"),r=document.querySelectorAll(".field-cell"),n=document.querySelector(".button.start"),a=document.querySelector(".message-win"),i=document.querySelector(".message-lose"),l=4,u=l,c=0,s=Array.from({length:l},function(){return Array.from({length:u},function(){return null})}),f=s.flat(),d=[];function v(t){switch(t.preventDefault(),t.key){case"ArrowUp":b("up");break;case"ArrowDown":b("down");break;case"ArrowLeft":g("left");break;case"ArrowRight":g("right");break;default:return}f.toString()!==s.flat().toString()&&m(),h(),function(){if(s.flat().includes(2048))return n.classList.remove("restart"),n.classList.add("start"),n.textContent="Start",a.classList.remove("hidden"),document.querySelector(".message-start").classList.remove("hidden"),void document.removeEventListener("keydown",v);0===d.length&&(i.classList.remove("hidden"),document.removeEventListener("keydown",v))}(),f=s.flat()}function h(){r.forEach(function(t,e){var r=s[Math.floor(e/u)][e%u];t.textContent=r||"",t.className="field-cell",r&&t.classList.add("field-cell--".concat(r))}),e.textContent=c}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!function(){d.length=0;for(var t=0,e=l*u;t<e;t++){var r=Math.floor(t/u),n=t%u;s[r][n]||d.push([r,n])}}();for(var r=0;r<e&&0!==d.length;r++){var n=y(d.length-1),o=t(d[n],2),a=o[0],i=o[1];s[a][i]=Math.random()<.9?2:4,d.splice(n,1)}}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.MAX_SAFE_INTEGER,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t<e?y(e,t):Math.floor(Math.random()*(t-e))+e}function g(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",e=[],r=0;r<l;r++){for(var n=0;n<u;n++)s[r][n]&&e.push(s[r][n]);"left"===t&&e.reverse(),e=p(e),"left"===t&&e.reverse();for(var o=0;o<u;o++)s[r][o]=e[o];e.length=0}}function b(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"down",e=[],r=0;r<u;r++){for(var n=0;n<l;n++)s[n][r]&&e.push(s[n][r]);"up"===t&&e.reverse(),e=p(e),"up"===t&&e.reverse();for(var o=0;o<l;o++)s[o][r]=e[o];e.length=0}}function p(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=1;e<t.length;e++)if(t[e-1]===t[e]){t[e-1]+=t[e],t.splice(e,1),c+=t[e-1];break}return Array.from({length:l-t.length},function(){return null}).concat(t)}n.addEventListener("click",function(){var t,r=o(s);try{for(r.s();!(t=r.n()).done;){t.value.forEach(function(t,e,r){r[e]=null})}}catch(l){r.e(l)}finally{r.f()}m(2),h(),document.addEventListener("keydown",v),n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart",c=0,e.textContent=c,document.querySelector(".message-start").classList.add("hidden"),a.classList.add("hidden"),i.classList.add("hidden")})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fb71b3aa.js.map