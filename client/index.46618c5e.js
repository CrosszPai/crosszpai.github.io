function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t){return Array.from(t.childNodes)}function x(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;for(;n<r.attributes.length;){const t=r.attributes[n];e[t.name]?n++:r.removeAttribute(t.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function _(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function w(t){return _(t," ")}function v(t,n){n=""+n,t.data!==n&&(t.data=n)}function A(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function E(t,n,e){t.classList[e?"add":"remove"](n)}function j(t,n=document.body){return Array.from(n.querySelectorAll(t))}let N;function S(t){N=t}function k(t,n){(function(){if(!N)throw new Error("Function called outside component initialization");return N})().$$.context.set(t,n)}const q=[],C=[],z=[],B=[],F=Promise.resolve();let M=!1;function O(t){z.push(t)}const P=new Set;function T(){do{for(;q.length;){const t=q.shift();S(t),D(t.$$)}for(;C.length;)C.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];P.has(n)||(P.add(n),n())}z.length=0}while(q.length);for(;B.length;)B.pop()();M=!1,P.clear()}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const G=new Set;let H;function I(){H={r:0,c:[],p:H}}function L(){H.r||r(H.c),H=H.p}function J(t,n){t&&t.i&&(G.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push(()=>{G.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function Q(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],a=n[c];if(a){for(const t in u)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[c]=a}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function R(t){return"object"==typeof t&&null!==t?t:{}}function U(t){t&&t.c()}function V(t,n){t&&t.l(n)}function W(t,n,o){const{fragment:u,on_mount:a,on_destroy:i,after_update:s}=t.$$;u&&u.m(n,o),O(()=>{const n=a.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(O)}function X(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(t,n){-1===t.$$.dirty[0]&&(q.push(t),M||(M=!0,F.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Z(n,e,c,u,a,i,s=[-1]){const f=N;S(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:s};let p=!1;d.ctx=c?c(n,l,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&Y(n,t)),e}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!u&&u(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(b(e.target)):d.fragment&&d.fragment.c(),e.intro&&J(n.$$.fragment),W(n,e.target,e.anchor),T()),S(f)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{$ as A,j as B,n as C,Q as D,R as E,k as F,I as G,L as H,p as I,tt as S,g as a,b,x as c,_ as d,h as e,d as f,w as g,y as h,Z as i,E as j,A as k,l,f as m,t as n,a as o,U as p,V as q,W as r,u as s,m as t,i as u,s as v,J as w,K as x,X as y,v as z};
