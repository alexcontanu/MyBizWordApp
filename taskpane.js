!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=307)}({307:function(e,t,n){"use strict";n.r(t),n.d(t,"run",(function(){return u}));n(308),n(309),n(310);function r(e,t,n,r,o,u,i){try{var c=e[u](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var i=e.apply(t,n);function c(e){r(i,o,u,c,s,"next",e)}function s(e){r(i,o,u,c,s,"throw",e)}c(void 0)}))}}function u(e){return i.apply(this,arguments)}function i(){return(i=o(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Word.run(function(){var e=o(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.document.getSelection().insertText("{"+t.trim()+"}","Before"),e.next=4,n.sync();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Office.onReady((function(e){e.host===Office.HostType.Word&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",$(document).ready((function(){function e(e){$.ajax({url:"https://mybiz.decorfloor.ro/settings/parametersList?name="+(e||"SSM.docx"),type:"GET",dataType:"jsonp",error:function(e){console.log(e),$("#content").html(JSON.stringify(e))},success:function(e){var t="";e.results.forEach((function(e){t+='<div role="button" id="'+e.id+'" class="ms-Button ms-Button--hero ms-font-xl"><span class="ms-Button-label">'+e.name+"</span></div>"})),$("#content").html(t),$('[role="button"]').each((function(e){$(this).on("click",(function(){u($(this).text())}))}))}})}Office.context.document.getFilePropertiesAsync((function(t){""==t.value?(console.log("The file hasn't been saved yet. Save the file and try again"),e()):e(t.value.url.split("/")[t.value.url.split("/").length-1])}))})))}))},308:function(e,t,n){e.exports=n.p+"assets/icon-16.png"},309:function(e,t,n){e.exports=n.p+"assets/icon-32.png"},310:function(e,t,n){e.exports=n.p+"assets/icon-80.png"}});
//# sourceMappingURL=taskpane.js.map