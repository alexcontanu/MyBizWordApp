!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=307)}({307:function(t,e,n){"use strict";n.r(e),n.d(e,"run",(function(){return u}));n(308),n(309),n(310);function r(t,e,n,r,o,u,i){try{var c=t[u](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var i=t.apply(e,n);function c(t){r(i,o,u,c,s,"next",t)}function s(t){r(i,o,u,c,s,"throw",t)}c(void 0)}))}}function u(t){return i.apply(this,arguments)}function i(){return(i=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Word.run(function(){var t=o(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.document.getSelection().insertText("{"+e.trim()+"}","Before"),t.next=4,n.sync();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Office.onReady((function(t){t.host===Office.HostType.Word&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",$(document).ready((function(){$.ajax({url:"https://mybiz.decorfloor.ro/settings/parametersList?name="+$("[name='fileName']").value,type:"GET",dataType:"jsonp",error:function(t){console.log(t),$("#content").html(JSON.stringify(t))},success:function(t){var e="";t.results.forEach((function(t){e+='<div role="button" id="'+t.id+'" class="ms-Button ms-Button--hero ms-font-xl"><span class="ms-Button-label">'+t.name+"</span></div>"})),$("#content").html(e),$('[role="button"]').each((function(t){$(this).on("click",(function(){u($(this).text())}))}))}})})))}))},308:function(t,e,n){t.exports=n.p+"assets/icon-16.png"},309:function(t,e,n){t.exports=n.p+"assets/icon-32.png"},310:function(t,e,n){t.exports=n.p+"assets/icon-80.png"}});
//# sourceMappingURL=taskpane.js.map