parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"mpVp":[function(require,module,exports) {
function e(e,t,n,o,l,c,d){try{var m=e[c](d),r=m.value}catch(a){return void n(a)}m.done?t(r):Promise.resolve(r).then(o,l)}function t(t){return function(){var n=this,o=arguments;return new Promise(function(l,c){var d=t.apply(n,o);function m(t){e(d,l,c,m,r,"next",t)}function r(t){e(d,l,c,m,r,"throw",t)}m(void 0)})}}function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var l=0,c=function(){};return{s:c,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,m=!0,r=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return m=e.done,e},e:function(e){r=!0,d=e},f:function(){try{m||null==n.return||n.return()}finally{if(r)throw d}}}}function o(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c=require("regenerator-runtime");AOS.init();var d,m,r,a,s,u,y="https://litipsum.com/api/1",i="https://litipsum.com/api/5",g=!1,B=!1,E=document.getElementById("inputArea"),p=!1,f=0,I=0,b=!1,T=!1,h="light",v=60,C=0,F=0,k=0,w="typewriter",x=document.getElementById("modalSuccess"),L=document.getElementById("modalFailed"),A=document.getElementById("modalSuccessDark"),D=document.getElementById("modalFailedDark"),N=document.getElementsByClassName("close")[0],S=document.getElementsByClassName("close")[1],M=document.getElementsByClassName("close")[2],W=document.getElementsByClassName("close")[3],O=document.getElementsByClassName("button1"),q=document.getElementsByClassName("button2");window.onbeforeunload=function(){window.scrollTo(0,0)},window.onclick=function(e){e.target==x||e.target==L||e.target==A||e.target==D?ye():E.focus()};var H,R=n(O);try{for(R.s();!(H=R.n()).done;){var P=H.value;P.addEventListener("click",function(){ie(),ye()})}}catch(ge){R.e(ge)}finally{R.f()}var Y,j=n(q);try{for(j.s();!(Y=j.n()).done;){var z=Y.value;z.addEventListener("click",function(){T?(V(),X(),E.focus(),b=!1,T=!0):b&&(V(),Z(),E.focus(),b=!0,T=!1),ye()})}}catch(ge){j.e(ge)}finally{j.f()}function G(e){return fetch(e).then(function(e){return e.text()})}function U(){return $.apply(this,arguments)}function $(){return($=t(c.mark(function e(){var t,o,l,d,m,r,a,s,u,i;return c.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t="";case 1:if(!(t.length<150)){e.next=7;break}return e.next=4,G(y);case 4:t=e.sent,e.next=1;break;case 7:t.length>200&&(t=J(t)),t=(t=t.replace(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g,'"')).replace(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g,"'"),o=t.split("\n"),document.getElementById("passage").innerText="",l=n(o);try{for(l.s();!(d=l.n()).done;){m=d.value,r=document.createElement("p"),a=n(m);try{for(a.s();!(s=a.n()).done;)u=s.value,(i=document.createElement("span")).className="charSpan",i.innerText=u,r.appendChild(i)}catch(ge){a.e(ge)}finally{a.f()}document.getElementById("passage").appendChild(r)}}catch(ge){l.e(ge)}finally{l.f()}return e.abrupt("return");case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e){var t=e.substring(200,e.length),n=-1==t.indexOf(".")?999999999:t.indexOf("."),o=-1==t.indexOf("!")?999999999:t.indexOf("!"),l=-1==t.indexOf("?")?999999999:t.indexOf("?"),c=-1==t.indexOf(";")?999999999:t.indexOf(";"),d=Math.min(n,o,l,c);return'"'!=t.charAt(d+1)&&"'"!=t.charAt(d+1)||d++,e.substring(0,200+d+1)}function K(){return Q.apply(this,arguments)}function Q(){return(Q=t(c.mark(function e(){var t,o,l,d,m,r,a,s,u,y,g;return c.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(i);case 2:t=(t=(t=e.sent).replace(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g,'"')).replace(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g,"'"),o=t.split("\n\n"),document.getElementById("passageTime").innerText="",l=n(o);try{for(l.s();!(d=l.n()).done;){m=d.value,r=document.createElement("div"),a=document.createElement("p"),s=n(m);try{for(s.s();!(u=s.n()).done;)y=u.value,(g=document.createElement("span")).className="charSpanTime",g.innerText=y,a.appendChild(g)}catch(ge){s.e(ge)}finally{s.f()}r.appendChild(a),document.getElementById("passageTime").appendChild(r)}}catch(ge){l.e(ge)}finally{l.f()}return document.getElementById("bodyTime").scrollTo(0,0),document.getElementById("body").scrollTo(0,0),e.abrupt("return");case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(){document.getElementById("timer").innerText="0",document.getElementById("speed").innerText="0",document.getElementById("accuracy").innerText="0",document.getElementById("inputArea").value="",clearInterval(r),document.getElementById("bodyTime").scrollTo(0,0),document.getElementById("body").scrollTo(0,0),document.getElementById("passage").innerText="",document.getElementById("passageTime").innerText="",E.focus(),B=!1,g=!1,T=!1,b=!1,v=60,I=0,C=0}function X(){document.getElementById("timer").innerText="0",document.getElementById("speed").innerText="0",document.getElementById("accuracy").innerText="0",document.getElementById("inputArea").value="",clearInterval(r),U(),B=!1,g=!1,T=!1,b=!1,I=0,C=0}function Z(){document.getElementById("timerTime").innerText="60",document.getElementById("speedTime").innerText="0",document.getElementById("accuracyTime").innerText="0",document.getElementById("inputArea").value="",clearInterval(r),K(),I=0,B=!1,g=!1,T=!1,b=!1,v=60,C=0}function _(){b?(C+=1.75*document.getElementsByClassName("charSpanTime")[0].offsetHeight,document.getElementById("bodyTime").scrollTo({top:C,left:0,behavior:"smooth"})):T&&(C+=1.75*document.getElementsByClassName("charSpan")[0].offsetHeight,document.getElementById("body").scrollTo({top:C,left:0,behavior:"smooth"}))}function ee(){b?(C-=1.75*document.getElementsByClassName("charSpanTime")[0].offsetHeight,document.getElementById("bodyTime").scrollTo({top:C,left:0,behavior:"smooth"})):T&&(C-=1.75*document.getElementsByClassName("charSpan")[0].offsetHeight,document.getElementById("body").scrollTo({top:C,left:0,behavior:"smooth"}))}N.addEventListener("click",function(){ye()}),S.addEventListener("click",function(){ye()}),M.addEventListener("click",function(){ye()}),W.addEventListener("click",function(){ye()}),document.getElementById("slideOut").addEventListener("click",function(){document.getElementById("mySidenav").style.width="250px"}),document.getElementsByClassName("closebtn")[0].addEventListener("click",function(){document.getElementById("mySidenav").style.width="0"}),document.getElementsByClassName("buttonTheme")[0].addEventListener("click",function(){if("light"==h){document.getElementsByTagName("header")[0].style.backgroundColor="rgba(0, 0, 0, 0.92)",document.getElementById("logo").style.display="none",document.getElementById("logoDark").style.display="";var e,t=n(document.getElementsByClassName("buttonMode"));try{for(t.s();!(e=t.n()).done;){e.value.style.color="#F5F5F7"}}catch(ge){t.e(ge)}finally{t.f()}document.getElementsByClassName("buttonTheme")[0].style.borderColor="#F5F5F7",document.getElementsByClassName("buttonTheme")[0].style.color="#F5F5F7",document.getElementById("main").style.backgroundColor="#12161B",document.getElementById("subtitle").style.color="#F5F5F7",document.getElementById("huskey").style.color="#F5F5F7",document.getElementById("flex-options").style.backgroundColor="rgba(0,0,0,0.2)",document.getElementById("subtitleTime").style.color="#fefefea4",document.getElementById("subtitleWord").style.color="#fefefea4",document.getElementById("wordMode").style.backgroundColor="rgba(0,0,0,0.2)",document.getElementById("timeMode").style.backgroundColor="rgba(0,0,0,0.2)",document.getElementById("buttonTime").style.backgroundColor="rgba(255,255,255,0.5)",document.getElementById("buttonWord").style.backgroundColor="rgba(255,255,255,0.5)",document.getElementById("buttonTime").style.color="rgba(0,0,0,0.7)",document.getElementById("buttonWord").style.color="rgba(0,0,0,0.7)",document.getElementsByClassName("gameTitle")[0].style.color="#cccccc",document.getElementById("timerTime").style.color="#cccccc",document.getElementById("secondsTime").style.color="#cccccc",document.getElementById("timer").style.color="#cccccc",document.getElementById("seconds").style.color="#cccccc",document.getElementById("miniFlex").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("time").style.color="#cccccc",document.getElementById("wpm").style.color="#cccccc",document.getElementById("percent").style.color="#cccccc",document.getElementById("speed").style.color="#cccccc",document.getElementById("speed").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracy").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracy").style.color="#cccccc",document.getElementById("body").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("passage").style.color="#A0A0A0",document.getElementsByClassName("gameTitle")[1].style.color="#cccccc",document.getElementById("miniFlexTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("timeTime").style.color="#cccccc",document.getElementById("wpmTime").style.color="#cccccc",document.getElementById("percentTime").style.color="#cccccc",document.getElementById("speedTime").style.color="#cccccc",document.getElementById("speedTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracyTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracyTime").style.color="#cccccc",document.getElementById("bodyTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("body").style.backgroundColor="rgba(0, 0, 0, 0.2)";var o,l=n(T?document.getElementsByClassName("charSpan"):document.getElementsByClassName("charSpanTime"));try{for(l.s();!(o=l.n()).done;){var c=o.value;c.classList.contains("correct")&&(c.classList.remove("correct"),c.classList.add("correctDark"))}}catch(ge){l.e(ge)}finally{l.f()}document.getElementById("passageTime").style.color="#A0A0A0",document.getElementById("darkIcon").style.display="none",document.getElementsByTagName("html")[0].style.backgroundColor="rgba(0, 0, 0, 0.9)",h="dark"}else if("dark"==h){document.getElementsByTagName("header")[0].style.backgroundColor="#F4F5F4",document.getElementById("logo").style.display="",document.getElementById("logoDark").style.display="none";var d,m=n(document.getElementsByClassName("buttonMode"));try{for(m.s();!(d=m.n()).done;){d.value.style.color="#3C64B1"}}catch(ge){m.e(ge)}finally{m.f()}document.getElementsByClassName("buttonTheme")[0].style.borderColor="#3C64B1",document.getElementsByClassName("buttonTheme")[0].style.color="#3C64B1",document.getElementById("main").style.backgroundColor="rgb(60,100,177,0.06)",document.getElementById("subtitle").style.color="#3C64B1",document.getElementById("huskey").style.color="#3C64B1",document.getElementById("flex-options").style.backgroundColor="transparent",document.getElementById("subtitleTime").style.color="#3C64B1",document.getElementById("subtitleWord").style.color="#3C64B1",document.getElementById("wordMode").style.backgroundColor="#FBFBFD",document.getElementById("timeMode").style.backgroundColor="#FBFBFD",document.getElementById("buttonTime").style.backgroundColor="#3C64B1",document.getElementById("buttonWord").style.backgroundColor="#3C64B1",document.getElementById("buttonTime").style.color="#FFFFFF",document.getElementById("buttonWord").style.color="#FFFFFF",document.getElementsByClassName("gameTitle")[0].style.color="#3C64B1",document.getElementById("miniFlex").style.backgroundColor="#3C64B1",document.getElementById("time").style.color="#3C64B1",document.getElementById("wpm").style.color="#3C64B1",document.getElementById("percent").style.color="#3C64B1",document.getElementById("speed").style.color="#3C64B1",document.getElementById("speed").style.backgroundColor="#F6F6F7",document.getElementById("accuracy").style.backgroundColor="#F6F6F7",document.getElementById("accuracy").style.color="#3C64B1",document.getElementById("body").style.backgroundColor="#FBFBFD",document.getElementById("timer").style.color="#FFFFFF",document.getElementById("seconds").style.color="#FFFFFF",document.getElementById("timerTime").style.color="#FFFFFF",document.getElementById("secondsTime").style.color="#FFFFFF",document.getElementById("passage").style.color="#A0A0A0",document.getElementsByClassName("gameTitle")[1].style.color="#3C64B1",document.getElementById("miniFlexTime").style.backgroundColor="#3C64B1",document.getElementById("timeTime").style.color="#3C64B1",document.getElementById("wpmTime").style.color="#3C64B1",document.getElementById("percentTime").style.color="#3C64B1",document.getElementById("speedTime").style.color="#3C64B1",document.getElementById("speedTime").style.backgroundColor="#F6F6F7",document.getElementById("accuracyTime").style.backgroundColor="#F6F6F7",document.getElementById("accuracyTime").style.color="#3C64B1",document.getElementById("bodyTime").style.backgroundColor="#FBFBFD",document.getElementById("passageTime").style.color="#A0A0A0",document.getElementsByTagName("html")[0].style.backgroundColor="white";var r,a=n(T?document.getElementsByClassName("charSpan"):document.getElementsByClassName("charSpanTime"));try{for(a.s();!(r=a.n()).done;){var s=r.value;s.classList.contains("correctDark")&&(s.classList.remove("correctDark"),s.classList.add("correct"))}}catch(ge){a.e(ge)}finally{a.f()}h="light",document.getElementById("darkIcon").style.display=""}}),document.getElementById("choice1").addEventListener("click",function(){window.scrollTo(0,0),document.getElementById("mySidenav").style.width=0,V(),Z(),document.getElementById("gameWord").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameTime").style.display="",E.focus(),T=!1,b=!0}),document.getElementsByTagName("li")[0].addEventListener("click",function(){window.scrollTo(0,0),V(),Z(),document.getElementById("gameWord").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameTime").style.display="",E.focus(),T=!1,b=!0}),document.getElementById("choice2").addEventListener("click",function(){window.scrollTo(0,0),V(),X(),document.getElementById("mySidenav").style.width=0,document.getElementById("gameTime").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameWord").style.display="",E.focus(),b=!1,T=!0}),document.getElementsByTagName("li")[1].addEventListener("click",function(){window.scrollTo(0,0),V(),X(),document.getElementById("gameTime").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameWord").style.display="",E.focus(),b=!1,T=!0}),document.getElementById("buttonWord").addEventListener("click",function(){V(),X(),document.getElementById("gameTime").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameWord").style.display="",window.scrollTo(0,0),E.focus(),b=!1,T=!0}),document.getElementById("buttonTime").addEventListener("click",function(){V(),Z(),document.getElementById("gameWord").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameTime").style.display="",window.scrollTo(0,0),E.focus(),b=!0,T=!1}),document.getElementById("choiceHome").addEventListener("click",function(){ie()}),document.getElementsByTagName("img")[0].addEventListener("click",function(){V(),document.getElementById("main").style.display="",document.getElementById("flex-options").style.display="",document.getElementById("gameWord").style.display="none",document.getElementById("gameTime").style.display="none"}),document.getElementsByTagName("img")[1].addEventListener("click",function(){V(),document.getElementById("main").style.display="",document.getElementById("flex-options").style.display="",document.getElementById("gameWord").style.display="none",document.getElementById("gameTime").style.display="none"}),E.onpaste=function(e){return e.preventDefault()},E.addEventListener("keyup",function(e){"Control"===e.key&&(p=!1)}),E.onblur=function(e){E.focus()},E.addEventListener("input",function(){var e=T?document.getElementsByClassName("charSpan"):document.getElementsByClassName("charSpanTime"),t=e[(u=document.getElementById("inputArea").value.split("")).length-1],o=Math.floor((parseInt(getComputedStyle(document.getElementById("bodyTime")).height)+4*parseInt(getComputedStyle(document.getElementById("bodyTime")).padding))/86.4)-1;if(!g&&T?(g=!0,d=new Date,r=setInterval(function(){m=new Date,document.getElementById("timer").innerText=Math.floor((m-d)/1e3),a=Math.floor((u.length-f)/5/((m-d)/1e3/60)),s=Math.floor((u.length-f)/u.length*100),a=a<0?0:a,s=s<0?0:s,document.getElementById("speed").innerHTML=a,document.getElementById("accuracy").innerText=s},1e3)):!g&&b&&(g=!0,d=new Date,r=setInterval(function(){m=new Date,document.getElementById("timerTime").innerText=--v,a=Math.floor((u.length-f)/5/((m-d)/1e3/60)),s=Math.floor((u.length-f)/u.length*100),a=a<0?0:a,s=s<0?0:s,document.getElementById("speedTime").innerHTML=a,document.getElementById("accuracyTime").innerText=s,0==v&&(se(),B=!0,g=!1,clearInterval(r))},1e3)),null!=t&&(t.offsetTop>F?(F=t.offsetTop,++k>o&&_()):t.offsetTop<F&&(F=t.offsetTop,--k>=o&&ee())),!B){var l,c=0,y=n(e);try{for(y.s();!(l=y.n()).done;){l.value.classList.contains("incorrect")&&c++}}catch(ge){y.e(ge)}finally{y.f()}for(var i in f=c,e)i<=u.length&&(null==u[i]?(e[i].classList.remove("incorrect"),e[i].classList.remove("correct"),e[i].classList.remove("correctDark")):u[i]!=e[i].innerText?(I++,e[i].classList.remove("correct"),e[i].classList.remove("correctDark"),e[i].classList.add("incorrect")):u[i]===e[i].innerText&&(I=0,e[i].classList.remove("incorrect"),"dark"==h?e[i].classList.add("correctDark"):e[i].classList.add("correct")));if(I>=15)return ue(),B=!0,g=!1,void clearInterval(r);I=0,T&&u.length>=e.length&&(se(),B=!0,g=!1,clearInterval(r))}}),E.addEventListener("keydown",function(e){return"Control"===e.key?(p=!0,void e.preventDefault()):p?("a"===e.key&&e.preventDefault(),void("Backspace"===e.key&&e.preventDefault())):(E!==document.activeElement||B||re(),void(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].indexOf(e.key)>-1&&e.preventDefault()))});var te={target:document.querySelector("#contents"),ease:.05,endY:0,y:0,resizeRequest:1,scrollRequest:0},ne=document.documentElement,oe=document.body,le=null;function ce(){var e=te.resizeRequest>0;if(e){var t=parseInt(getComputedStyle(document.getElementById("main")).height);oe.style.height=t+"px",te.resizeRequest=0}var n=window.pageYOffset||ne.scrollTop||oe.scrollTop||0;te.endY=n,te.y+=(n-te.y)*te.ease,(Math.abs(n-te.y)<.05||e)&&(te.y=n,te.scrollRequest=0),TweenLite.set(te.target,{y:-te.y}),le=te.scrollRequest>0?requestAnimationFrame(ce):null}function de(){te.scrollRequest++,le||(le=requestAnimationFrame(ce))}function me(){te.resizeRequest++,le||(le=requestAnimationFrame(ce))}function re(){var e="";"apple"==w?e+="./macPress":"mechanical"==w?e+="./buttonPress":"typewriter"==w&&(e+="./typewriterPress"),e+=Math.floor(5*Math.random()+1)+".mp3";var t=new Audio(e);t.loop=!1,t.play()}function ae(){var e="";"apple"==w?e+="./macPressSpaceBar":"mechanical"==w?e+="./buttonPressSpaceBar":"typewriter"==w&&(e+="./typewriterPressSpaceBar2"),e+=".mp3";var t=new Audio(e);t.loop=!1,t.play()}function se(){var e="";e=a>100&&s>95?"WOW! You're blazing fast!":a>90&&s>95?"Well done! That was remarkable.":a>75&&s>85?"Great job! Now lets take it even faster!":"Good job! Let's strive keep improving!",T?(document.getElementById("resultsSuccess").innerHTML="Congrats! You've completed the passage.",document.getElementById("resultsSuccessDark").innerHTML="Congrats! You've completed the passage."):b&&(document.getElementById("resultsSuccess").innerHTML="Awesome! Thats one extra minute of practice today.",document.getElementById("resultsSuccessDark").innerHTML="Awesome! Thats one extra minute of practice today."),document.getElementById("statsSuccess").innerHTML="You typed ".concat(E.value.length," characters at ").concat(a," wpm with ").concat(s,"% accuracy! </br></br> ").concat(e),document.getElementById("statsSuccessDark").innerHTML="You typed ".concat(E.value.length," characters at ").concat(a," wpm with ").concat(s,"% accuracy! </br></br> ").concat(e),"light"==h?x.style.display="block":A.style.display="block"}function ue(){"light"==h?L.style.display="block":D.style.display="block"}function ye(){x.style.display="none",L.style.display="none",A.style.display="none",D.style.display="none",b?(Z(),b=!0):T&&(X(),T=!0)}function ie(){V(),document.getElementById("mySidenav").style.width=0,document.getElementById("main").style.display="",document.getElementById("flex-options").style.display="",document.getElementById("gameWord").style.display="none",document.getElementById("gameTime").style.display="none"}TweenLite.set(te.target,{rotation:.01,force3D:!0});
},{"regenerator-runtime":"QVnC"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.dd9d88fe.js.map