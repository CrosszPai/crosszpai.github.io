import{a as t,b as s,c as a,d as n,i as e,s as r,e as o,S as i,g as c,f as u,t as f,F as l,l as h,m as p,h as m,j as d,k as v,o as x,q as j,r as y,D as b,n as g}from"./index.40a0ab30.js";import{_ as T}from"./slicedToArray.f13a096f.js";import{_ as k,a as E}from"./asyncToGenerator.6eff4aef.js";function H(t){var s,a,n,e,r,o,i=t[0].title+"",k=t[0].html+"";return document.title=s=t[0].title,{c:function(){a=c(),n=u("h1"),e=f(i),r=c(),o=u("div"),this.h()},l:function(t){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),a=p(t),n=m(t,"H1",{});var s=d(n);e=v(s,i),s.forEach(h),r=p(t),o=m(t,"DIV",{class:!0}),d(o).forEach(h),this.h()},h:function(){x(o,"class","content svelte-gnxal1")},m:function(t,s){j(t,a,s),j(t,n,s),y(n,e),j(t,r,s),j(t,o,s),o.innerHTML=k},p:function(t,a){var n=T(a,1)[0];1&n&&s!==(s=t[0].title)&&(document.title=s),1&n&&i!==(i=t[0].title+"")&&b(e,i),1&n&&k!==(k=t[0].html+"")&&(o.innerHTML=k)},i:g,o:g,d:function(t){t&&h(a),t&&h(n),t&&h(r),t&&h(o)}}}function q(t){return w.apply(this,arguments)}function w(){return(w=k(E.mark(function t(s){var a,n,e;return E.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.params,s.query,t.next=3,this.fetch("blog/".concat(a.slug,".json"));case 3:return n=t.sent,t.next=6,n.json();case 6:if(e=t.sent,200!==n.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(n.status,e.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function D(t,s,a){var n=s.post;return t.$set=function(t){"post"in t&&a(0,n=t.post)},[n]}export default(function(c){function u(t){var i;return s(this,u),i=a(this,n(u).call(this)),e(o(i),t,D,H,r,{post:0}),i}return t(u,i),u}());export{q as preload};