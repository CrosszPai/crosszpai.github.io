import{a as n,b as t,c as o,d as r,i as c,s as a,e,S as i,f as s,t as l,g as u,h as f,j as h,k as d,l as p,m as g,o as v,q as b,r as m,u as k,P as E,W as y,Q as w,n as x,X as z}from"./index.dbd2efa7.js";import{_ as P,a as _,b as j}from"./index.5e6456ca.js";function I(n,t,o){var r=n.slice();return r[6]=t[o],r}function A(n,t,o){var r=n.slice();return r[3]=t[o],r}function H(n){var t,o,r,c,a,e,i;return{c:function(){t=s("div"),o=s("h1"),r=l("Loading..."),c=u(),a=s("h4"),e=l("Maybe api has reach GitHub limit-rate."),i=u()},l:function(n){t=f(n,"DIV",{});var s=h(t);o=f(s,"H1",{});var l=h(o);r=d(l,"Loading..."),l.forEach(p),c=g(s),a=f(s,"H4",{});var u=h(a);e=d(u,"Maybe api has reach GitHub limit-rate."),u.forEach(p),i=g(s),s.forEach(p)},m:function(n,s){m(n,t,s),k(t,o),k(o,r),k(t,c),k(t,a),k(a,e),k(t,i)},d:function(n){n&&p(t)}}}function L(n){var t,o,r,c,a,e=n[6]+"";return{c:function(){t=s("span"),o=s("a"),r=l(e),a=u(),this.h()},l:function(n){t=f(n,"SPAN",{class:!0});var c=h(t);o=f(c,"A",{href:!0,target:!0,style:!0,class:!0});var i=h(o);r=d(i,e),i.forEach(p),a=g(c),c.forEach(p),this.h()},h:function(){v(o,"href",c="https://github.com/topics/".concat(n[6])),v(o,"target","__blank"),b(o,"--topicbg",n[1](n[6]).background),b(o,"--topictext",n[1](n[6]).color),v(o,"class","topiclink svelte-yt2ozp"),v(t,"class","topic svelte-yt2ozp")},m:function(n,c){m(n,t,c),k(t,o),k(o,r),k(t,a)},p:function(n,t){1&t&&e!==(e=n[6]+"")&&E(r,e),1&t&&c!==(c="https://github.com/topics/".concat(n[6]))&&v(o,"href",c),1&t&&b(o,"--topicbg",n[1](n[6]).background),1&t&&b(o,"--topictext",n[1](n[6]).color)},d:function(n){n&&p(t)}}}function C(n){var t,o;return{c:function(){t=s("p"),o=l("no description")},l:function(n){t=f(n,"P",{});var r=h(t);o=d(r,"no description"),r.forEach(p)},m:function(n,r){m(n,t,r),k(t,o)},p:x,d:function(n){n&&p(t)}}}function D(n){var t,o,r=n[3].description+"";return{c:function(){t=s("p"),o=l(r)},l:function(n){t=f(n,"P",{});var c=h(t);o=d(c,r),c.forEach(p)},m:function(n,r){m(n,t,r),k(t,o)},p:function(n,t){1&t&&r!==(r=n[3].description+"")&&E(o,r)},d:function(n){n&&p(t)}}}function R(n){for(var t,o,r,c,a,e,i,w,x=n[3].name+"",z=n[3].topics,P=[],_=0;_<z.length;_+=1)P[_]=L(I(n,z,_));function j(n,t){return n[3].description?D:C}var A=j(n),H=A(n);return{c:function(){t=s("li"),o=s("a"),r=l(x),a=u(),e=s("div");for(var n=0;n<P.length;n+=1)P[n].c();i=u(),H.c(),w=u(),this.h()},l:function(n){t=f(n,"LI",{class:!0});var c=h(t);o=f(c,"A",{class:!0,href:!0,target:!0});var s=h(o);r=d(s,x),s.forEach(p),a=g(c),e=f(c,"DIV",{style:!0});for(var l=h(e),u=0;u<P.length;u+=1)P[u].l(l);l.forEach(p),i=g(c),H.l(c),w=g(c),c.forEach(p),this.h()},h:function(){v(o,"class","topic-link svelte-yt2ozp"),v(o,"href",c=n[3].html_url),v(o,"target","__blank"),b(e,"display","block"),b(e,"padding-top","1rem"),v(t,"class","svelte-yt2ozp")},m:function(n,c){m(n,t,c),k(t,o),k(o,r),k(t,a),k(t,e);for(var s=0;s<P.length;s+=1)P[s].m(e,null);k(t,i),H.m(t,null),k(t,w)},p:function(n,a){if(1&a&&x!==(x=n[3].name+"")&&E(r,x),1&a&&c!==(c=n[3].html_url)&&v(o,"href",c),3&a){var i;for(z=n[3].topics,i=0;i<z.length;i+=1){var s=I(n,z,i);P[i]?P[i].p(s,a):(P[i]=L(s),P[i].c(),P[i].m(e,null))}for(;i<P.length;i+=1)P[i].d(1);P.length=z.length}A===(A=j(n))&&H?H.p(n,a):(H.d(1),(H=A(n))&&(H.c(),H.m(t,w)))},d:function(n){n&&p(t),y(P,n),H.d()}}}function S(n){for(var t,o,r,c,a,e,i,E=n[0],z=[],_=0;_<E.length;_+=1)z[_]=R(A(n,E,_));var j=null;return E.length||(j=H()),{c:function(){t=u(),o=s("section"),r=s("div"),c=s("p"),a=l("Public Repositories."),e=u(),i=s("ul");for(var n=0;n<z.length;n+=1)z[n].c();j&&j.c(),this.h()},l:function(n){w('[data-svelte="svelte-1hohugf"]',document.head).forEach(p),t=g(n),o=f(n,"SECTION",{});var s=h(o);r=f(s,"DIV",{class:!0});var l=h(r);c=f(l,"P",{style:!0});var u=h(c);a=d(u,"Public Repositories."),u.forEach(p),e=g(l),i=f(l,"UL",{class:!0});for(var v=h(i),b=0;b<z.length;b+=1)z[b].l(v);j&&j.l(v),v.forEach(p),l.forEach(p),s.forEach(p),this.h()},h:function(){document.title="CrosszPai: Repositories",b(c,"font-size","36px"),v(i,"class","svelte-yt2ozp"),v(r,"class","content svelte-yt2ozp")},m:function(n,s){m(n,t,s),m(n,o,s),k(o,r),k(r,c),k(c,a),k(r,e),k(r,i);for(var l=0;l<z.length;l+=1)z[l].m(i,null);j&&j.m(i,null)},p:function(n,t){var o=P(t,1)[0];if(3&o){var r;for(E=n[0],r=0;r<E.length;r+=1){var c=A(n,E,r);z[r]?z[r].p(c,o):(z[r]=R(c),z[r].c(),z[r].m(i,null))}for(;r<z.length;r+=1)z[r].d(1);z.length=E.length}E.length?j&&(j.d(1),j=null):j||((j=H()).c(),j.m(i,null))},i:x,o:x,d:function(n){n&&p(t),n&&p(o),y(z,n),j&&j.d()}}}function V(n,t,o){var r=[],c={golang:{color:"black",background:"#7fd5ea"},vue:{color:"white",background:"#4fc08d"},vuejs:{color:"white",background:"#4fc08d"},arduino:{color:"white",background:"#00979d"},cpp:{color:"white",background:"#364f6f"},angular:{color:"white",background:"linear-gradient(145deg,#dd0031,#c3002f)"},angular8:{color:"white",background:"linear-gradient(145deg,#dd0031,#c3002f)"},image:{color:"black",background:"#e7d050"},ecs:{color:"black",background:"#e7d050"},"entity-component-system":{color:"black",background:"#e7d050"},sdl2:{color:"white",background:"#132B48"},firebase:{color:"grey",background:"#f8c42d"},"serial-communication":{color:"black",background:"#b3d2f8"}};z(_(j.mark(function n(){var t,c;return j.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.github.com/users/CrosszPai/repos",{headers:{Accept:"application/vnd.github.mercy-preview+json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:if(c=n.sent,!t.ok){n.next=10;break}o(0,r=c),n.next=11;break;case 10:throw new Error(c);case 11:case"end":return n.stop()}},n)})));return[r,function(n){return c[n]}]}export default(function(s){function l(n){var i;return t(this,l),i=o(this,r(l).call(this)),c(e(i),n,V,S,a,{}),i}return n(l,i),l}());
