(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),i=n(15),o=n.n(i),s=n(7),l=n(2),u=(n(22),n(1)),h=function(){return Object(u.jsx)("div",{className:"app-header",children:Object(u.jsx)("h1",{children:"Note List"})})},f=n(5),p=n.n(f),d=n(6),j=n(9),b=function(e){return new Date(e.updates).toLocaleDateString()},v=function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45):t},O=function(e){var t=v(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},x=function(e){var t=e.note;return Object(u.jsx)(s.b,{to:"/note/".concat(t.id),children:Object(u.jsxs)("div",{className:"notes-list-item",children:[Object(u.jsx)("h3",{children:v(t)}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:b(t)}),O(t)]})]})})},y=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function g(e,t){var n=e.title,a=e.titleId,i=w(e,y);return c.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},i),void 0===n?c.createElement("title",{id:a},"add"):n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var E=c.forwardRef(g),N=(n.p,function(){return Object(u.jsx)(s.b,{to:"/note/new",className:"floating-button",children:Object(u.jsx)(E,{})})});var k,S=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"notes",children:[Object(u.jsxs)("div",{className:"notes-header",children:[Object(u.jsx)("h2",{className:"notes-title",children:"\u2636 Notes"}),Object(u.jsx)("p",{className:"notes-count",children:n.length})]}),Object(u.jsx)("div",{className:"notes-list",children:n.map((function(e,t){return Object(u.jsx)(x,{note:e},t)}))}),Object(u.jsx)(N,{})]})},P=n(14),I=["title","titleId"];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function T(e,t){var n=e.title,r=e.titleId,a=M(e,I);return c.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"chevron-left"):n?c.createElement("title",{id:r},n):null,k||(k=c.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var z,B=c.forwardRef(T),D=(n.p,["title","titleId"]);function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function R(e,t){var n=e.title,r=e.titleId,a=L(e,D);return c.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"delete"):n?c.createElement("title",{id:r},n):null,z||(z=c.createElement("path",{d:"M30 4h-8v-3c0-0.553-0.447-1-1-1h-10c-0.553 0-1 0.447-1 1v3h-8v2h2v24c0 1.104 0.897 2 2 2h20c1.103 0 2-0.896 2-2v-24h2v-2h-0zM12 2h8v2h-8v-2zM26.002 30l-0.002 1v-1h-20v-24h20v24h0.002z"})))}var A=c.forwardRef(R),U=(n.p,function(e){var t=e.match,n=e.history,r=t.params.id,a=Object(c.useState)(null),i=Object(j.a)(a,2),o=i[0],s=i[1];Object(c.useEffect)((function(){l()}),[r]);var l=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/note/".concat(r,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,s(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/note/".concat(r,"/update/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/note/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){"new"!==r&&""==o.body?v():"new"!==r?h():"new"==r&&null!=o.body&&f(),n.push("/")},v=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/note/".concat(r,"/delete/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.push("/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsxs)("div",{className:"note-header",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(B,{onClick:b})}),"new"!==r?Object(u.jsx)(A,{onClick:v}):Object(u.jsx)("button",{onClick:b,children:"Done"})]}),Object(u.jsx)("textarea",{onChange:function(e){var t;t=e.target.value,s(Object(P.a)(Object(P.a)({},o),{},{body:t}))},value:null===o||void 0===o?void 0:o.body})]})});var q=function(){return Object(u.jsx)(s.a,{children:Object(u.jsx)("div",{className:"container dark",children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(h,{}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:S}),Object(u.jsx)(l.a,{path:"/note/:id",component:U})]})})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6bae068b.chunk.js.map