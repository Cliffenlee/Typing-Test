parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"mpVp":[function(require,module,exports) {
function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return d(e)}function l(e,t,n,o,l,c,a){try{var r=e[c](a),d=r.value}catch(m){return void n(m)}r.done?t(d):Promise.resolve(d).then(o,l)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(o,c){var a=e.apply(t,n);function r(e){l(a,o,c,r,d,"next",e)}function d(e){l(a,o,c,r,d,"throw",e)}r(void 0)})}}function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){d=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(d)throw c}}}}function r(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=require("regenerator-runtime");AOS.init();var s,u,y,i,g,p,B="https://litipsum.com/api/1/json",E="https://litipsum.com/api/7",f=!1,I=!1,b=document.getElementById("inputArea"),C=!1,h=0,T=0,v=!1,F=!1,k="light",x=60,w=0,N=0,A=0,S="typewriter",L=document.getElementById("modalSuccess"),D=document.getElementById("modalFailed"),M=document.getElementById("modalSuccessDark"),W=document.getElementById("modalFailedDark"),O=document.getElementsByClassName("close")[0],H=document.getElementsByClassName("close")[1],P=document.getElementsByClassName("close")[2],j=document.getElementsByClassName("close")[3],Y=document.getElementsByClassName("button1"),z=document.getElementsByClassName("button2"),R=document.getElementById("loaderWrapperWord"),q=document.getElementById("loaderWrapperTime"),U=[],$=[],G=[],J="",K=document.getElementById("chart").getContext("2d"),X=document.getElementById("chartDark").getContext("2d"),Q=0,V=0;window.onbeforeunload=function(){window.scrollTo(0,0)},window.onclick=function(e){b.focus()};var Z,_=a(Y);try{for(_.s();!(Z=_.n()).done;){var ee=Z.value;ee.addEventListener("click",function(){be(),Ie(),f=!1})}}catch(he){_.e(he)}finally{_.f()}var te,ne=a(z);try{for(ne.s();!(te=ne.n()).done;){var oe=te.value;oe.addEventListener("click",function(){F?(se(),ue(),b.focus(),v=!1,F=!0):v&&(se(),ye(),b.focus(),v=!0,F=!1),f=!1,Ie()})}}catch(he){ne.e(he)}finally{ne.f()}function le(e){return fetch(e).then(function(e){return e.text()})}function ce(){return ae.apply(this,arguments)}function ae(){return(ae=c(m.mark(function e(){var t,n,o,l,c,r,d,s,u,y;return m.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:F?document.getElementsByClassName("charSpan"):document.getElementsByClassName("charSpanTime"),t="",R.style.display="flex";case 3:if(!(t.length<150)){e.next=9;break}return e.next=6,le(B);case 6:t=e.sent,e.next=3;break;case 9:(t=JSON.parse(t).text[0]).length>200&&(t=re(t)),t=(t=(t=(t=(t=t.replace(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g,'"')).replace(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g,"'")).replace(/[\u0020\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2029\u202f\u205f]/g," ")).replace("’","'")).replace("  "," "),n=t.split("\n"),document.getElementById("passage").innerText="",R.style.display="none",o=a(n);try{for(o.s();!(l=o.n()).done;){c=l.value,r=document.createElement("p"),d=a(c);try{for(d.s();!(s=d.n()).done;)u=s.value,(y=document.createElement("span")).className="charSpan",y.innerText=u,r.appendChild(y)}catch(he){d.e(he)}finally{d.f()}document.getElementById("passage").appendChild(r)}}catch(he){o.e(he)}finally{o.f()}return e.abrupt("return");case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}function re(e){var t=e.substring(200,e.length),n=-1==t.indexOf(".")?999999999:t.indexOf("."),o=-1==t.indexOf("!")?999999999:t.indexOf("!"),l=-1==t.indexOf("?")?999999999:t.indexOf("?"),c=-1==t.indexOf(";")?999999999:t.indexOf(";"),a=Math.min(n,o,l,c);return'"'!=t.charAt(a+1)&&"'"!=t.charAt(a+1)||a++,e.substring(0,200+a+1)}function de(){return me.apply(this,arguments)}function me(){return(me=c(m.mark(function e(){var t,n,o,l,c,r,d,s,u,y,i;return m.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:q.style.display="flex",t="";case 2:if(!(t.length<1e3)){e.next=9;break}return e.next=5,le(E);case 5:t=e.sent,console.log(t.length),e.next=2;break;case 9:t=(t=(t=(t=(t=t.replace(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g,'"')).replace(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g,"'")).replace(/[\u0020\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2029\u202f\u205f]/g," ")).replace("’","'")).replace("  "," "),n=t.split("\n"),document.getElementById("passageTime").innerText="",q.style.display="none",o=a(n);try{for(o.s();!(l=o.n()).done;){c=l.value,r=document.createElement("div"),d=document.createElement("p"),s=a(c);try{for(s.s();!(u=s.n()).done;)y=u.value,(i=document.createElement("span")).className="charSpanTime",i.innerText=y,d.appendChild(i)}catch(he){s.e(he)}finally{s.f()}r.appendChild(d),document.getElementById("passageTime").appendChild(r)}}catch(he){o.e(he)}finally{o.f()}return document.getElementById("bodyTime").scrollTo(0,0),document.getElementById("body").scrollTo(0,0),e.abrupt("return");case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}function se(){""!=J&&J.destroy(),document.getElementById("timer").innerText="0",document.getElementById("speed").innerText="0",document.getElementById("accuracy").innerText="0",document.getElementById("inputArea").value="",$=[],G=[],U=[],clearInterval(y),document.getElementById("bodyTime").scrollTo(0,0),document.getElementById("body").scrollTo(0,0),document.getElementById("passage").innerText="",document.getElementById("passageTime").innerText="",b.focus(),I=!1,f=!1,F=!1,v=!1,Q=0,x=60,T=0,w=0}function ue(){document.getElementById("timer").innerText="0",document.getElementById("speed").innerText="0",document.getElementById("accuracy").innerText="0",document.getElementById("inputArea").value="",clearInterval(y),ce(),I=!1,f=!1,F=!1,v=!1,T=0,w=0}function ye(){document.getElementById("timerTime").innerText="60",document.getElementById("speedTime").innerText="0",document.getElementById("accuracyTime").innerText="0",document.getElementById("inputArea").value="",clearInterval(y),de(),T=0,I=!1,f=!1,F=!1,v=!1,x=60,w=0}function ie(){v?(w+=1.75*document.getElementsByClassName("charSpanTime")[0].offsetHeight,document.getElementById("bodyTime").scrollTo({top:w,left:0,behavior:"smooth"})):F&&(w+=1.75*document.getElementsByClassName("charSpan")[0].offsetHeight,document.getElementById("body").scrollTo({top:w,left:0,behavior:"smooth"}))}function ge(){v?(w-=1.75*document.getElementsByClassName("charSpanTime")[0].offsetHeight,document.getElementById("bodyTime").scrollTo({top:w,left:0,behavior:"smooth"})):F&&(w-=1.75*document.getElementsByClassName("charSpan")[0].offsetHeight,document.getElementById("body").scrollTo({top:w,left:0,behavior:"smooth"}))}function pe(){var e="";"apple"==S?e+="./macPress":"mechanical"==S?e+="./buttonPress":"typewriter"==S&&(e+="./typewriterPress"),e+=Math.floor(5*Math.random()+1)+".mp3";var t=new Audio(e);t.loop=!1,t.play()}function Be(){var e="";"apple"==S?e+="./macPressSpaceBar":"mechanical"==S?e+="./buttonPressSpaceBar":"typewriter"==S&&(e+="./typewriterPressSpaceBar2"),e+=".mp3";var t=new Audio(e);t.loop=!1,t.play()}function Ee(){J="light"==k?new Chart(K,{responsive:!0,type:"line",data:{labels:U,datasets:[{data:$,label:"Words per Minute",fill:!0,borderColor:"#3e95cd"},{data:G,label:"Accuracy",fill:!1,borderColor:"#c45850"}]},options:{maintainAspectRatio:!1,scales:{xAxes:[{ticks:{stepSize:4}}],yAxes:[{ticks:{min:0,max:20*Math.ceil(Math.max(Math.max.apply(Math,e(G)),Math.max.apply(Math,e($)))/20),stepSize:20}}]}}}):new Chart(X,{backgroundColor:"#7a7a7a",responsive:!0,type:"line",data:{labels:U,datasets:[{data:$,label:"Words per Minute",backgroundColor:"#313131",borderColor:"#3e95cd"},{data:G,label:"Accuracy",fill:!1,borderColor:"#c45850"}]},options:{maintainAspectRatio:!1,scales:{xAxes:[{ticks:{stepSize:4,fontColor:"#CCCCCC"}}],yAxes:[{ticks:{min:0,max:20*Math.floor(Math.max(Math.max.apply(Math,e(G)),Math.max.apply(Math,e($)))/20)+20,stepSize:20,fontColor:"#CCCCCC"}}]},legend:{labels:{fontColor:"#CCCCCC"}}}});var t="";t=i>100&&g>95?"WOW! You're blazing fast!":i>90&&g>95?"Well done! That was remarkable.":i>75&&g>85?"Great job! You're getting better!":"Not bad! Keep on practicing!",F?(document.getElementById("resultsSuccess").innerHTML="Congrats! You've completed the passage.",document.getElementById("resultsSuccessDark").innerHTML="Congrats! You've completed the passage."):v&&(document.getElementById("resultsSuccess").innerHTML="Awesome! Thats another minute of practice today.",document.getElementById("resultsSuccessDark").innerHTML="Awesome! Thats another minute of practice today."),document.getElementById("statsSuccess").innerHTML="You typed ".concat(b.value.length,' characters at <span style="color: #3e95cd;">').concat(i,' wpm</span> with <span style="color: #c45850;">').concat(g,"% accuracy</span>!"),document.getElementById("remark").innerHTML=t,document.getElementById("statsSuccessDark").innerHTML="You typed ".concat(b.value.length,' characters at <span style="color: #3e95cd;">').concat(i,' wpm</span> with <span style="color: #c45850;">').concat(g,"% accuracy</span>!"),document.getElementById("remarkDark").innerHTML='<span style="color: #CCCCCC;">'.concat(t,"</span>"),"light"==k?L.style.display="block":M.style.display="block"}function fe(){"light"==k?D.style.display="block":W.style.display="block"}function Ie(){L.style.display="none",D.style.display="none",M.style.display="none",W.style.display="none",v?(ye(),v=!0):F&&(ue(),F=!0)}function be(){se(),document.getElementsByClassName("navLinks")[0].style.display="",document.getElementsByClassName("ml11")[0].style.display="none",document.getElementById("mySidenav").style.width=0,document.getElementById("main").style.display="",document.getElementById("flex-options").style.display="",document.getElementById("gameWord").style.display="none",document.getElementById("gameTime").style.display="none"}function Ce(){document.getElementsByClassName("navLinks")[0].style.display="none",document.getElementsByClassName("ml11")[0].style.display="flex";var e=document.querySelector(".ml11 .letters");e.innerHTML=e.textContent.replace(/([^\x00-\x80]|\w|\u0021)/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!1}).add({targets:".ml11 .line",scaleY:[0,1],opacity:[.5,1],easing:"easeOutExpo",duration:700}).add({targets:".ml11 .line",translateX:[0,document.querySelector(".ml11 .letters").getBoundingClientRect().width+10],easing:"easeOutExpo",duration:700,delay:100}).add({targets:".ml11 .letter",opacity:[0,1],easing:"easeOutExpo",duration:600,offset:"-=775",delay:function(e,t){return 34*(t+1)}}).add({targets:".ml11 .line",opacity:0,duration:700,easing:"easeOutExpo",delay:0})}document.getElementById("slideOut").addEventListener("click",function(){document.getElementById("mySidenav").style.width="250px"}),document.getElementsByClassName("closebtn")[0].addEventListener("click",function(){document.getElementById("mySidenav").style.width="0"}),document.getElementsByClassName("buttonTheme")[0].addEventListener("click",function(){if("light"==k){document.getElementsByTagName("header")[0].style.backgroundColor="rgba(0, 0, 0, 0.92)",document.getElementById("logo").style.display="none",document.getElementById("logoDark").style.display="";var e,t=a(document.getElementsByClassName("buttonMode"));try{for(t.s();!(e=t.n()).done;){e.value.style.color="#F5F5F7"}}catch(he){t.e(he)}finally{t.f()}document.getElementsByClassName("buttonTheme")[0].style.borderColor="#F5F5F7",document.getElementsByClassName("buttonTheme")[0].style.color="#F5F5F7",document.getElementsByClassName("ml11")[0].style.color="#F5F5F7",document.getElementById("main").style.backgroundColor="#12161B",document.getElementById("subtitle").style.color="#F5F5F7",document.getElementById("huskey").style.color="#F5F5F7",document.getElementById("flex-options").style.backgroundColor="rgba(0,0,0,0.2)",document.getElementById("subtitleTime").style.color="#fefefea4",document.getElementById("subtitleWord").style.color="#fefefea4",document.getElementById("wordMode").style.backgroundColor="rgba(0,0,0,0.2)",document.getElementById("timeMode").style.backgroundColor="rgba(0,0,0,0.2)",document.getElementById("buttonTime").style.backgroundColor="rgba(255,255,255,0.5)",document.getElementById("buttonWord").style.backgroundColor="rgba(255,255,255,0.5)",document.getElementById("buttonTime").style.color="rgba(0,0,0,0.7)",document.getElementById("buttonWord").style.color="rgba(0,0,0,0.7)",document.getElementsByClassName("loader")[0].style.borderTopColor="#4b4b4b",document.getElementsByClassName("loader")[1].style.borderTopColor="#4b4b4b",document.getElementsByClassName("gameTitle")[0].style.color="#cccccc",document.getElementById("timerTime").style.color="#cccccc",document.getElementById("secondsTime").style.color="#cccccc",document.getElementById("timer").style.color="#cccccc",document.getElementById("seconds").style.color="#cccccc",document.getElementById("miniFlex").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("time").style.color="#cccccc",document.getElementById("wpm").style.color="#cccccc",document.getElementById("percent").style.color="#cccccc",document.getElementById("speed").style.color="#cccccc",document.getElementById("speed").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracy").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracy").style.color="#cccccc",document.getElementById("body").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("passage").style.color="#A0A0A0",document.getElementsByClassName("gameTitle")[1].style.color="#cccccc",document.getElementById("miniFlexTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("timeTime").style.color="#cccccc",document.getElementById("wpmTime").style.color="#cccccc",document.getElementById("percentTime").style.color="#cccccc",document.getElementById("speedTime").style.color="#cccccc",document.getElementById("speedTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracyTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("accuracyTime").style.color="#cccccc",document.getElementById("bodyTime").style.backgroundColor="rgba(0, 0, 0, 0.2)",document.getElementById("body").style.backgroundColor="rgba(0, 0, 0, 0.2)";var n,o=a(F?document.getElementsByClassName("charSpan"):document.getElementsByClassName("charSpanTime"));try{for(o.s();!(n=o.n()).done;){var l=n.value;l.classList.contains("correct")&&(l.classList.remove("correct"),l.classList.add("correctDark"))}}catch(he){o.e(he)}finally{o.f()}document.getElementById("passageTime").style.color="#A0A0A0",document.getElementById("darkIcon").style.display="none",document.getElementsByTagName("html")[0].style.backgroundColor="rgba(0, 0, 0, 0.9)",k="dark"}else if("dark"==k){document.getElementsByTagName("header")[0].style.backgroundColor="#F4F5F4",document.getElementById("logo").style.display="",document.getElementById("logoDark").style.display="none";var c,r=a(document.getElementsByClassName("buttonMode"));try{for(r.s();!(c=r.n()).done;){c.value.style.color="#3C64B1"}}catch(he){r.e(he)}finally{r.f()}document.getElementsByClassName("buttonTheme")[0].style.borderColor="#3C64B1",document.getElementsByClassName("buttonTheme")[0].style.color="#3C64B1",document.getElementsByClassName("ml11")[0].style.color="#7e7e7e",document.getElementById("main").style.backgroundColor="rgb(60,100,177,0.06)",document.getElementById("subtitle").style.color="#3C64B1",document.getElementById("huskey").style.color="#3C64B1",document.getElementById("flex-options").style.backgroundColor="transparent",document.getElementById("subtitleTime").style.color="#3C64B1",document.getElementById("subtitleWord").style.color="#3C64B1",document.getElementById("wordMode").style.backgroundColor="#FBFBFD",document.getElementById("timeMode").style.backgroundColor="#FBFBFD",document.getElementById("buttonTime").style.backgroundColor="#3C64B1",document.getElementById("buttonWord").style.backgroundColor="#3C64B1",document.getElementById("buttonTime").style.color="#FFFFFF",document.getElementById("buttonWord").style.color="#FFFFFF",document.getElementsByClassName("loader")[0].style.borderTopColor="#b8b8b8",document.getElementsByClassName("loader")[1].style.borderTopColor="#b8b8b8",document.getElementsByClassName("gameTitle")[0].style.color="#3C64B1",document.getElementById("miniFlex").style.backgroundColor="#3C64B1",document.getElementById("time").style.color="#3C64B1",document.getElementById("wpm").style.color="#3C64B1",document.getElementById("percent").style.color="#3C64B1",document.getElementById("speed").style.color="#3C64B1",document.getElementById("speed").style.backgroundColor="#F6F6F7",document.getElementById("accuracy").style.backgroundColor="#F6F6F7",document.getElementById("accuracy").style.color="#3C64B1",document.getElementById("body").style.backgroundColor="#FBFBFD",document.getElementById("timer").style.color="#FFFFFF",document.getElementById("seconds").style.color="#FFFFFF",document.getElementById("timerTime").style.color="#FFFFFF",document.getElementById("secondsTime").style.color="#FFFFFF",document.getElementById("passage").style.color="#A0A0A0",document.getElementsByClassName("gameTitle")[1].style.color="#3C64B1",document.getElementById("miniFlexTime").style.backgroundColor="#3C64B1",document.getElementById("timeTime").style.color="#3C64B1",document.getElementById("wpmTime").style.color="#3C64B1",document.getElementById("percentTime").style.color="#3C64B1",document.getElementById("speedTime").style.color="#3C64B1",document.getElementById("speedTime").style.backgroundColor="#F6F6F7",document.getElementById("accuracyTime").style.backgroundColor="#F6F6F7",document.getElementById("accuracyTime").style.color="#3C64B1",document.getElementById("bodyTime").style.backgroundColor="#FBFBFD",document.getElementById("passageTime").style.color="#A0A0A0",document.getElementsByTagName("html")[0].style.backgroundColor="white";var d,m=a(F?document.getElementsByClassName("charSpan"):document.getElementsByClassName("charSpanTime"));try{for(m.s();!(d=m.n()).done;){var s=d.value;s.classList.contains("correctDark")&&(s.classList.remove("correctDark"),s.classList.add("correct"))}}catch(he){m.e(he)}finally{m.f()}k="light",document.getElementById("darkIcon").style.display=""}}),document.getElementById("choice1").addEventListener("click",function(){window.scrollTo(0,0),document.getElementById("mySidenav").style.width=0,Ce(),se(),ye(),document.getElementById("gameWord").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameTime").style.display="",b.focus(),F=!1,v=!0}),document.getElementsByTagName("li")[0].addEventListener("click",function(){window.scrollTo(0,0),Ce(),se(),ye(),document.getElementById("gameWord").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameTime").style.display="",b.focus(),F=!1,v=!0}),document.getElementById("choice2").addEventListener("click",function(){window.scrollTo(0,0),Ce(),se(),ue(),document.getElementById("mySidenav").style.width=0,document.getElementById("gameTime").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameWord").style.display="",b.focus(),v=!1,F=!0}),document.getElementsByTagName("li")[1].addEventListener("click",function(){window.scrollTo(0,0),Ce(),se(),ue(),document.getElementById("gameTime").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameWord").style.display="",b.focus(),v=!1,F=!0}),document.getElementById("buttonWord").addEventListener("click",function(){Ce(),se(),ue(),document.getElementById("gameTime").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameWord").style.display="",window.scrollTo(0,0),b.focus(),v=!1,F=!0}),document.getElementById("buttonTime").addEventListener("click",function(){Ce(),se(),ye(),document.getElementById("gameWord").style.display="none",document.getElementById("main").style.display="none",document.getElementById("flex-options").style.display="none",document.getElementById("gameTime").style.display="",window.scrollTo(0,0),b.focus(),v=!0,F=!1}),document.getElementById("choiceHome").addEventListener("click",function(){be()}),document.getElementsByTagName("img")[0].addEventListener("click",function(){be()}),document.getElementsByTagName("img")[1].addEventListener("click",function(){be()}),b.onpaste=function(e){return e.preventDefault()},b.addEventListener("keyup",function(e){"Control"===e.key&&(C=!1)}),b.onblur=function(e){b.focus()},b.addEventListener("input",function(){var e=F?document.getElementsByClassName("charSpan"):document.getElementsByClassName("charSpanTime"),t=e[(p=document.getElementById("inputArea").value.split("")).length-1],n=Math.floor((parseInt(getComputedStyle(document.getElementById("bodyTime")).height)+4*parseInt(getComputedStyle(document.getElementById("bodyTime")).padding))/86.4)-1;if(!f&&F?(f=!0,s=new Date,y=setInterval(function(){u=new Date;var e=Math.floor((u-s)/1e3);document.getElementById("timer").innerText=e,i=Math.floor((p.length-h)/5/((u-s)/1e3/60)),g=Math.floor((p.length-h)/p.length*100),i=i<0?0:i,g=g<0?0:g,document.getElementById("speed").innerHTML=i,document.getElementById("accuracy").innerText=g,$.push(i),G.push(g),U.push(e)},1e3)):!f&&v&&(f=!0,s=new Date,y=setInterval(function(){u=new Date,document.getElementById("timerTime").innerText=--x,i=Math.floor((p.length-h)/5/((u-s)/1e3/60)),g=Math.floor((p.length-h)/p.length*100),i=i<0?0:i,g=g<0?0:g,document.getElementById("speedTime").innerHTML=i,document.getElementById("accuracyTime").innerText=g,$.push(i),G.push(g),U.push(Math.abs(x-60)),0==x&&(clearInterval(y),Ee(),I=!0)},1e3)),null!=t&&(t.offsetTop>N?(N=t.offsetTop,++A>n&&ie()):t.offsetTop<N&&(N=t.offsetTop,--A>=n&&ge())),!I){var o=0,l=!0;if((V=p.length)>=e.length)return Ee(),I=!0,void clearInterval(y);for(var c in V<=Q?(e[V].classList.remove("incorrect"),e[V].classList.remove("correct"),e[V].classList.remove("correctDark"),0==Q?Q=-1:Q--):p[V-1]===e[V-1].innerText?(e[V-1].classList.remove("incorrect"),"dark"==k?e[V-1].classList.add("correctDark"):e[V-1].classList.add("correct"),1==V?Q=0:0==V?Q=-1:Q++):(e[V-1].classList.remove("correct"),e[V-1].classList.remove("correctDark"),e[V-1].classList.add("incorrect"),1==V?Q=0:0==V?Q=-1:Q++),p)e[c].classList.contains("incorrect")?(o++,l&&T++,l=!0):(l=!1,T=1);if(h=o,T>=15)return fe(),I=!0,void clearInterval(y);T=0,F&&p.length>=e.length&&(Ee(),I=!0,clearInterval(y))}}),b.addEventListener("keydown",function(e){return"Control"===e.key?(C=!0,void e.preventDefault()):C?("a"===e.key&&e.preventDefault(),void("Backspace"===e.key&&e.preventDefault())):(b!==document.activeElement||I||pe(),void(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].indexOf(e.key)>-1&&e.preventDefault()))});
},{"regenerator-runtime":"QVnC"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.a7b5bf80.js.map