!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=64)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var o=!0;console.log("isProd:",o);var r=o?"pgswinter.github.io":"localhost:1234",i="html";console.log("domain: ",r);var c={home:"".concat(r,"/index.").concat(i),homeIndex:"".concat(r,"/"),login:"".concat(r,"/login.").concat(i),registration:"".concat(r,"/registration.").concat(i),editprofile:"".concat(r,"/editprofile.").concat(i),forgotpassword:"".concat(r,"/forgotpassword.").concat(i),changepassword:"".concat(r,"/changepassword.").concat(i),legalacceptances:"".concat(r,"/legalacceptances.").concat(i),lung:"".concat(r,"/lung/index.").concat(i),L1CT:"".concat(r,"/lung/onel-combination-therapy/index.").concat(i),L1CTSD:"".concat(r,"/lung/onel-combination-therapy/study-design/index.").concat(i)}},function(t,e,n){var o=n(20);t.exports=function(t,e,n){return e in t?o(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports=n(41)},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var o=n(28)("wks"),r=n(29),i=n(6).Symbol,c="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=c&&i[t]||(c?i:r)("Symbol."+t))}).store=o},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(11),r=n(39),i=n(40),c=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(22)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){"use strict";var o=n(0),r={isHome:!0,isMenuRight:!0,isPwaPopup:!1},i={isLogIn:!0},c={isRegistration:!0},a={isEditProfile:!0},s={isForgotPassword:!0,isMenuRight:!0},u={isChangePassword:!0,isMenuRight:!0},l={isLegalacceptances:!0,isMenuRight:!0},f={isCt1:!0,isMenuRight:!0,isPwaPopup:!1},d={isCt2:!0,isMenuRight:!1,isPwaPopup:!1},m={isMenuRight:!0,isCt3:!0,isPwaPopup:!1};e.a=function(){var t=window.location.host+window.location.pathname;return t===o.b.home||t===o.b.homeIndex?r:t===o.b.login?i:t===o.b.registration?c:t===o.b.editprofile?a:t===o.b.changepassword?u:t===o.b.forgotpassword?s:t===o.b.legalacceptances?l:t===o.b.lung?f:t===o.b.L1CT?d:t===o.b.L1CTSD?m:void 0}},function(t,e,n){var o=n(7),r=n(15);t.exports=n(8)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(14);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(6),r=n(5),i=n(21),c=n(10),a=n(12),s=function(t,e,n){var u,l,f,d=t&s.F,m=t&s.G,p=t&s.S,h=t&s.P,g=t&s.B,v=t&s.W,_=m?r:r[e]||(r[e]={}),y=_.prototype,b=m?o:p?o[e]:(o[e]||{}).prototype;for(u in m&&(n=e),n)(l=!d&&b&&void 0!==b[u])&&a(_,u)||(f=l?b[u]:n[u],_[u]=m&&"function"!=typeof b[u]?n[u]:g&&l?i(f,o):v&&b[u]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((_.virtual||(_.virtual={}))[u]=f,t&s.R&&y&&!y[u]&&c(y,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports={}},function(t,e,n){var o=n(28)("keys"),r=n(29);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){t.exports=n(36)},function(t,e,n){var o=n(38);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(14),r=n(6).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e){t.exports=!0},function(t,e,n){var o=n(51),r=n(17);t.exports=function(t){return o(r(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(16),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(5),r=n(6),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(24)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(7).f,r=n(12),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(17);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(20);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o(t,r.key,r)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,n){t.exports=n(63)},function(t,e,n){},function(t,e,n){n(37);var o=n(5).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},function(t,e,n){var o=n(13);o(o.S+o.F*!n(8),"Object",{defineProperty:n(7).f})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(8)&&!n(22)((function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(14);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){n(42),n(56),t.exports=n(5).Array.from},function(t,e,n){"use strict";var o=n(43)(!0);n(44)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){var o=n(16),r=n(17);t.exports=function(t){return function(e,n){var i,c,a=String(r(e)),s=o(n),u=a.length;return s<0||s>=u?t?"":void 0:(i=a.charCodeAt(s))<55296||i>56319||s+1===u||(c=a.charCodeAt(s+1))<56320||c>57343?t?a.charAt(s):i:t?a.slice(s,s+2):c-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var o=n(24),r=n(13),i=n(45),c=n(10),a=n(18),s=n(46),u=n(31),l=n(55),f=n(4)("iterator"),d=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,p,h,g,v){s(n,e,p);var _,y,b,w=function(t){if(!d&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",x="values"==h,P=!1,L=t.prototype,O=L[f]||L["@@iterator"]||h&&L[h],T=O||w(h),E=h?x?w("entries"):T:void 0,k="Array"==e&&L.entries||O;if(k&&(b=l(k.call(new t)))!==Object.prototype&&b.next&&(u(b,S,!0),o||"function"==typeof b[f]||c(b,f,m)),x&&O&&"values"!==O.name&&(P=!0,T=function(){return O.call(this)}),o&&!v||!d&&!P&&L[f]||c(L,f,T),a[e]=T,a[S]=m,h)if(_={values:x?T:w("values"),keys:g?T:w("keys"),entries:E},v)for(y in _)y in L||i(L,y,_[y]);else r(r.P+r.F*(d||P),e,_);return _}},function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";var o=n(47),r=n(15),i=n(31),c={};n(10)(c,n(4)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(c,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(11),r=n(48),i=n(30),c=n(19)("IE_PROTO"),a=function(){},s=function(){var t,e=n(23)("iframe"),o=i.length;for(e.style.display="none",n(54).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;o--;)delete s.prototype[i[o]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=o(t),n=new a,a.prototype=null,n[c]=t):n=s(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(7),r=n(11),i=n(49);t.exports=n(8)?Object.defineProperties:function(t,e){r(t);for(var n,c=i(e),a=c.length,s=0;a>s;)o.f(t,n=c[s++],e[n]);return t}},function(t,e,n){var o=n(50),r=n(30);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(12),r=n(25),i=n(52)(!1),c=n(19)("IE_PROTO");t.exports=function(t,e){var n,a=r(t),s=0,u=[];for(n in a)n!=c&&o(a,n)&&u.push(n);for(;e.length>s;)o(a,n=e[s++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var o=n(26);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(25),r=n(27),i=n(53);t.exports=function(t){return function(e,n,c){var a,s=o(e),u=r(s.length),l=i(c,u);if(t&&n!=n){for(;u>l;)if((a=s[l++])!=a)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var o=n(16),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(6).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(12),r=n(32),i=n(19)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){"use strict";var o=n(21),r=n(13),i=n(32),c=n(57),a=n(58),s=n(27),u=n(59),l=n(60);r(r.S+r.F*!n(62)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,f,d=i(t),m="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,g=void 0!==h,v=0,_=l(d);if(g&&(h=o(h,p>2?arguments[2]:void 0,2)),null==_||m==Array&&a(_))for(n=new m(e=s(d.length));e>v;v++)u(n,v,g?h(d[v],v):d[v]);else for(f=_.call(d),n=new m;!(r=f.next()).done;v++)u(n,v,g?c(f,h,[r.value,v],!0):r.value);return n.length=v,n}})},function(t,e,n){var o=n(11);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(18),r=n(4)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){"use strict";var o=n(7),r=n(15);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var o=n(61),r=n(4)("iterator"),i=n(18);t.exports=n(5).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){var o=n(26),r=n(4)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:i?o(e):"Object"==(c=o(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var o=n(4)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],c=i[o]();c.next=function(){return{done:n=!0}},i[o]=function(){return c},t(i)}catch(t){}return n}},function(t,e,n){var o=n(5),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e,n){"use strict";n.r(e);n(35);var o=function(t,e){var n=document.querySelector(t),o=document.querySelector(e);n.appendChild(o)},r=function(t,e){var n=document.querySelector(t),o=document.querySelector(e);o.parentNode.insertBefore(n,o.previousSibling)},i=function(t,e,n){document.querySelector(t).setAttribute(e,n)},c=function(t,e){document.querySelector(t).innerHTML=e},a=function(t,e){document.querySelector(e).insertAdjacentHTML("afterend",t)},s=n(3),u=n.n(s),l=n(1),f=n.n(l),d=function t(e){var n=this;u()(this,t),f()(this,"routerToPage",(function(t){n.t.addEventListener("click",(function(){window.location.replace(t)}))})),f()(this,"addAttr",(function(t,e){n.t["".concat(t)]=e})),f()(this,"setAttrChildList",(function(t,e){var o=n.t.querySelectorAll(t);e.map((function(t){var e=t.key,n=t.val;o.forEach((function(t){t["".concat(e)]=n}))}))})),f()(this,"addClass",(function(t,e){document.querySelector(t).addEventListener("click",(function(){n.t.classList.add(e)}))})),f()(this,"removeChildAttr",(function(t,e){var o=n.t.querySelectorAll(t);e.map((function(t){o.forEach((function(e){e.removeAttribute(t)}))}))})),f()(this,"removeAttr",(function(t){t.map((function(t){n.t.removeAttribute(t)}))})),f()(this,"removeClass",(function(t,e){document.querySelector(t).addEventListener("click",(function(){n.t.classList.remove(e)}))})),f()(this,"convertHtmlStrToDom",(function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild})),f()(this,"replaceHtml",(function(t,e,n){var o=document.querySelector(t);o&&o.addEventListener("click",(function(){e.map((function(t){document.querySelector(t).classList.add("hiddenElement")})),n.map((function(t){document.querySelector(t).classList.remove("hiddenElement")}))}))})),f()(this,"handleAction",(function(t,e){var n=document.querySelector(t);n?n.addEventListener("click",(function(){e.map((function(t){switch(!0){case"add"===t.name:document.querySelector(t.html).classList.add(t.class);break;case"remove"===t.name:document.querySelector(t.html).classList.remove(t.class)}}))})):console.log("target HTML is not available!")})),this.t=document.querySelector(e)},m=n(2),p=n.n(m),h=function t(e){var n=this;u()(this,t),f()(this,"addOneItem",(function(t,e){var n=document.createElement("div");n.innerHTML=e.trim(),t.appendChild(n.firstChild)})),f()(this,"remove",(function(t){var e=document.querySelector(t);e&&e.parentNode.removeChild(e)})),f()(this,"zoomImg",(function(t){var e=document.querySelector(t);p()(n.t).forEach((function(t){var o=new Image;o.onload=function(){o.height,o.width};var r=t.getAttribute("src");o.src=r,t.addEventListener("click",(function(){n.remove(".zoom_wrap .zoom_wrap__show img");var t="<img src=".concat(o.src,' alt=""/>');n.addOneItem(e,t),e.classList.add("active")}))}))})),f()(this,"reArrangeMenu",(function(t,e){p()(n.t).forEach((function(n){var o=n.querySelector(t),r=n.querySelector(e),i=JSON.parse(n.querySelector(t).getAttribute("src"));o.setAttribute("src",i.src),r.setAttribute("href",i.href)}))})),f()(this,"addClass",(function(t){p()(n.t).forEach((function(e){e.addEventListener("click",(function(o){o.preventDefault(),p()(n.t).forEach((function(e){e.classList.remove(t)})),e.classList.add(t),e.querySelector("button.open").classList.add("active")}))}))})),f()(this,"addFreeClass",(function(t){p()(n.t).forEach((function(e){e.addEventListener("click",(function(n){n.preventDefault(),e.className.indexOf("active")>-1?e.classList.remove(t):e.classList.add(t)}))}))})),f()(this,"addMoreItem",(function(t){p()(n.t).map((function(e){p()(e.getElementsByTagName("ul")).map((function(n){if(p()(n.getElementsByTagName("li")).length>0){var o=document.createElement("div");o.innerHTML=t.trim(),console.log("newHtml.firstChild: ",o.firstChild),e.appendChild(o.firstChild)}}))}))})),this.t=document.querySelectorAll(e)},g=function t(e){var n=this;u()(this,t),f()(this,"localStorageData",(function(t){var e=localStorage.getItem(t);if(e){var o=document.createTextNode(e);n.t.appendChild(o)}else console.log("Getting data localStorage is not available!")})),f()(this,"apiData",(function(){})),this.t=document.querySelector(e)},v=n(33),_=n.n(v),y=function(){function t(e,n){u()(this,t),this.t=document.querySelector(e),this.b=document.querySelector(n),this.move=0}return _()(t,[{key:"init",value:function(){var t=this.t.querySelectorAll("li");p()(t).map((function(t,e){t.style.order=e}))}},{key:"moveLeft",value:function(){var t=this,e=this.t,n=this.t.querySelectorAll("li");this.b.addEventListener("click",(function(){screen.width>=1024?t.move>n[0].clientWidth*n.length-6*n[0].clientWidth?t.move=0:t.move+=n[0].clientWidth:t.move>n[0].clientWidth*n.length-4*n[0].clientWidth?t.move=0:t.move+=n[0].clientWidth,e.style.left="-".concat(t.move,"px")}))}}]),t}(),b=function(){var t,e,n,o,r,i;function c(t){var e,n,o,r=[];for(e=document.getElementsByClassName("select-items"),n=document.getElementsByClassName("select-selected"),o=0;o<n.length;o++)t==n[o]?r.push(o):n[o].classList.remove("select-arrow-active");for(o=0;o<e.length;o++)r.indexOf(o)&&e[o].classList.add("select-hide")}t=document.querySelectorAll(".capture_select_arrow"),p()(t).map((function(t){for(n=t.querySelector("select"),(o=document.createElement("DIV")).setAttribute("class","select-selected"),o.innerHTML=n.options[n.selectedIndex].innerHTML,t.appendChild(o),(r=document.createElement("DIV")).setAttribute("class","select-items select-hide"),e=1;e<n.length;e++)(i=document.createElement("DIV")).innerHTML=n.options[e].innerHTML,i.addEventListener("click",(function(t){var e,n,o,r,i;for(r=this.parentNode.parentNode.getElementsByTagName("select")[0],i=this.parentNode.previousSibling,n=0;n<r.length;n++)if(r.options[n].innerHTML==this.innerHTML){for(r.selectedIndex=n,i.innerHTML=this.innerHTML,e=this.parentNode.getElementsByClassName("same-as-selected"),o=0;o<e.length;o++)e[o].removeAttribute("class");this.setAttribute("class","same-as-selected");break}i.click()})),r.appendChild(i);t.appendChild(r),n.getAttribute("disabled")?o.setAttribute("disabled","disabled"):o.addEventListener("click",(function(t){t.stopPropagation(),c(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))})),document.addEventListener("click",c)};console.log("forgot password here");var w=n(34),S=n.n(w),x=n(0),P=navigator.userAgent.toLowerCase().indexOf("android")>-1,L=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,O=/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),T=/Win32|Win64|Windows|WinCE'/i.test(navigator.platform);function E(){var t=localStorage.getItem("janrainCaptureProfileData");return!!t&&!!JSON.parse(t).uuid}var k=n(9);!function(){var t,e;(t=window.location.host+window.location.pathname)===x.b.login?E()&&(x.a?window.location.replace("/"):window.location.replace("/index.html")):t!==x.b.registration&&t!==x.b.forgotpassword&&(E()||window.location.replace("/login.html")),(e=document.createElement("div")).innerHTML='<div \n      class="loading_page" \n      style="position: fixed;\n        height: 100vh;\n        width: 100vw;\n        top: 0;\n        left: 0;\n        background-color: #f9f9f9;\n        z-index: 5;"\n    >\n    <img \n      src="https://oncology-msdconnect-sg-dev.epublishmerck.com/static/mcisg/images/spiner.gif"\n      style="\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 90%;"\n      alt=""/>\n    </div>'.trim(),document.querySelector("body").appendChild(e.firstChild);var n=Object(k.a)(),s=n.isMenuRight,u=n.isHome,l=n.isPwaPopup,f=n.isCt1,m=n.isCt2,p=n.isCt3,v=n.isRegistration,_=n.isEditProfile,w=n.isLogIn,A=n.isForgotPassword,M=n.isChangePassword,C=n.isLegalacceptances;setTimeout((function(){var t;(t=document.querySelector(".loading_page"))&&t.parentNode.removeChild(t),setTimeout((function(){var t=document.querySelector(".signout.btn");t&&t.addEventListener("click",(function(){localStorage.clear(),window.location.replace("/login.html")}))})),w?(r("#content","#login"),function(){setTimeout((function(){if(t(),t()){e(),r(".rememberme_box",".register_button"),r(".forgotPassword_box",".register_button"),i(".capture_form_item input.capture_currentPassword","placeholder","*********"),i("#capture_signIn_signInEmailAddress","placeholder","name@email.com"),c(".login_button button","SIGN IN"),c(".forgotPassword_box a","Forgot Password?"),c(".register_button a","Register Now");var n=document.querySelector(".login_button .capture_secondary"),o={uuid:"85dfef1c-f96f-4ac5-9071-de455ea1f6a6",email:"haritha.saidurjay+sgdev@gmail.com",displayName:null,mainSpecialty:"DR",registrationCountry:"SG",validationStatus:"validated"};console.log("loginBtn: ",n),n.addEventListener("click",(function(){var t=S()(o);localStorage.setItem("janrainCaptureProfileData",t),window.location.replace("/index.html")}))}else console.log("resetLayout was fail!")}));var t=function(){return o("#content","#login"),o("#content","#bottomLoginBox"),!0},e=function(){a('<a class="img_wrap" href="/"><img src="https://oncology-msdconnect-sg-dev.epublishmerck.com/static/mcisg/images/MSD_Logo_white.cfd55b11678740dabc17.svg" alt="" /></a>',"#signIn > .capture_header h1")};document.querySelector(".login_button button").addEventListener("click",(function(){r("#capture_signIn_signInForm_errorMessages",".login_button")}))}()):(r("#content","#page-wrapper"),s&&setTimeout((function(){o("#content",".menu_mobile.menu"),o(".menu__body .dropdown","#QC_Menu_Nodes"),new h(".dropdown > ul > li").addMoreItem('<div class="item_wrap"><button class="narrow btn">\n                            <img src="https://oncology-msdconnect-sg-dev.epublishmerck.com/static/mcisg/images/minus.svg" alt="" />\n                          </button>\n                          <button class="expand btn">\n                            <img src="https://oncology-msdconnect-sg-dev.epublishmerck.com/static/mcisg/images/plus.svg" alt="" />\n                          </button></div>');var t=new d(".menu_mobile");t.addClass(".header__right .hamburger","active"),t.removeClass(".menu_header_right .close","active");var e={origin_target:".menu_header_right .search",origin_dom:[".menu__header .menu_header_left",".menu__header .menu_header_right"],back_origin_target:".menu__header .input_search__menu .clearSeach",replace_dom:[".menu__header .input_search__menu"],position:".menu__header"};t.replaceHtml(e.origin_target,e.origin_dom,e.replace_dom),t.replaceHtml(e.back_origin_target,e.replace_dom,e.origin_dom);var n=".header__right .search",r=[{name:"add",html:".menu_mobile",class:"active"},{name:"add",html:".menu_mobile .menu__header .menu_header_left",class:"hiddenElement"},{name:"add",html:".menu_mobile .menu__header .menu_header_right",class:"hiddenElement"},{name:"remove",html:".menu_mobile .menu__header .input_search__menu",class:"hiddenElement"}];t.handleAction(n,r),new g(".post .post__body .body__left .body_left_name").localStorageData("uname")})),u&&setTimeout((function(){o("#content","#home"),r("#footer .footer-links",".body__item > p"),new h(".body__item > ul.footer-links > li").reArrangeMenu("li > a > img","li > a")})),f&&setTimeout((function(){o("#content","#content_level_1")})),m&&setTimeout((function(){o("#content","#content_level_2"),new d("#content_level_2 .main__header .header__left .back").routerToPage("https://oncology-msdconnect-sg-dev.epublishmerck.com/lung/index.xhtml"),new y(".carousel_site_map ul",".carousel_site_map .btn").moveLeft()})),p&&setTimeout((function(){o("#content","#content_level_3"),new h(".zoom_wrap .zoom_wrap__thumbnail img").zoomImg(".zoom_wrap .zoom_wrap__show"),new d(".zoom_wrap .zoom_wrap__show").removeClass(".zoom_wrap .close","active")})),l&&setTimeout((function(){o("#content",".pwa.ios"),o("#content",".pwa.android");var t=document.querySelector(".add_to_home_screen_button"),e=document.querySelector("#content .pwa.ios"),n=document.querySelector("#content .pwa.ios .main__header .close"),r=document.querySelector("#content .pwa.android"),i=document.querySelector("#content .pwa.android .main__header .close");P||T?(console.log("isAndroid: ",P,"DETAIL",navigator.userAgent),t.addEventListener("click",(function(){r.classList.add("active")})),i.addEventListener("click",(function(){r.classList.remove("active")}))):L?(t.addEventListener("click",(function(){e.classList.add("active")})),n.addEventListener("click",(function(){e.classList.remove("active")}))):O&&console.log("Mac",O)}),1e3),v&&function(){setTimeout((function(){t(),t()?(e(),n(),a("<h2>PERSONAL INFORMATION</h2>","#capture_traditionalRegistration_form_item_newPasswordConfirm"),a("<h2>PROFESSIONAL INFORMATION</h2>","#capture_traditionalRegistration_form_item_phone"),i("#capture_traditionalRegistration_form_item_acceptTermsOfUse #capture_traditionalRegistration_form_item_inner_acceptTermsOfUse label a","title","MSD’s Terms of Use"),i("#capture_traditionalRegistration_form_item_acceptTermsOfUse #capture_traditionalRegistration_form_item_inner_acceptTermsOfUse label a","href","https://www.msdconnect.sg/terms_of_use.xhtml"),c("#capture_traditionalRegistration_form_item_acceptTermsOfUse #capture_traditionalRegistration_form_item_inner_acceptTermsOfUse label a","MSD’s Terms of Use"),i("#capture_traditionalRegistration_form_item_acceptTermsOfUse #capture_traditionalRegistration_form_item_inner_acceptTermsOfUse label a","title","MSD’s Privacy Policy"),i("#capture_traditionalRegistration_form_item_acceptTermsOfUse #capture_traditionalRegistration_form_item_inner_acceptTermsOfUse label a","href","https://www.msdconnect.sg/privacy_policy.xhtml"),c("#capture_traditionalRegistration_form_item_acceptPrivacyPolicy #capture_traditionalRegistration_form_item_inner_acceptPrivacyPolicy label a","MSD’s Privacy Policy"),b()):console.log("reset layoput was failed!")}));var t=function(){return o("#content","#registration"),!0},e=function(){a('<a class="img_wrap" href=""><img src="https://oncology-msdconnect-sg-dev.epublishmerck.com/static/mcisg/images/user.svg" alt="" /></a><h2>log in information</h2>',"#traditionalRegistration > .capture_header h1")},n=function(){a('<span class="checkmark"></span>',"#capture_traditionalRegistration_form_item_inner_brandedConsent label input"),a('<span class="checkmark"></span>',"#capture_traditionalRegistration_form_item_acceptTermsOfUse label input"),a('<span class="checkmark"></span>',"#capture_traditionalRegistration_form_item_acceptPrivacyPolicy label input")}}(),_&&function(){setTimeout((function(){t(),t()?e():console.log("checkmark missing"),a("<h2>log in information</h2>","#editProfile > .capture_header h3"),a("<h2>PERSONAL INFORMATION</h2>","#capture_editProfile_form_item_newPassword"),a("<h2>PROFESSIONAL INFORMATION</h2>","#capture_editProfile_form_item_phone"),b()}));var t=function(){return o("#content","#editprofilepage"),!0},e=function(){a('<span class="checkmark"></span>',"#capture_editProfile_form_item_inner_brandedConsent label input")}}(),A&&function(){setTimeout((function(){t(),t()?e():console.log("reset layout was failed!")}));var t=function(){return o("#content","#forgotPasswordTmpl"),!0},e=function(){a('<a class="img_wrap" href=""><img src="https://oncology-msdconnect-sg-dev.epublishmerck.com/static/mcisg/images/lock_icon.svg" alt="" /></a>',"#forgotPassword > .capture_header h1")}}(),M&&function(){setTimeout((function(){t(),t()?e():console.log("reset layout was failed!")}));var t=function(){return o("#content","#changePasswordTmpl"),!0},e=function(){a('<a class="img_wrap" href=""><img src="https://oncology-msdconnect-sg-dev.epublishmerck.com/static/mcisg/images/lock_icon.svg" alt="" /></a><h2>log in information</h2>',"#changePassword > .capture_header h1")}}(),C&&function(){setTimeout((function(){t(),t()||console.log("reset layout was failed!")}));var t=function(){return o("#content","#legalacceptancesTmpl"),!0}}())}),1500)}()}]);
//# sourceMappingURL=app.2e4a9f99935f71611434.js.map