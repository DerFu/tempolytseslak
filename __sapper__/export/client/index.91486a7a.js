function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function g(){return m("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;for(;n<r.attributes.length;){const t=r.attributes[n];e[t.name]?n++:r.removeAttribute(t.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function w(t){return v(t," ")}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}function A(t,n){(null!=n||t.value)&&(t.value=n)}function N(t,n=document.body){return Array.from(n.querySelectorAll(t))}let j;function S(t){j=t}function k(){if(!j)throw new Error("Function called outside component initialization");return j}function q(t){k().$$.on_mount.push(t)}function C(t,n){k().$$.context.set(t,n)}const L=[],M=[],z=[],B=[],F=Promise.resolve();let O=!1;function T(t){z.push(t)}function D(t){B.push(t)}function G(){const t=new Set;do{for(;L.length;){const t=L.shift();S(t),H(t.$$)}for(;M.length;)M.pop()();for(let n=0;n<z.length;n+=1){const e=z[n];t.has(e)||(e(),t.add(e))}z.length=0}while(L.length);for(;B.length;)B.pop()();O=!1}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const I=new Set;let J;function K(){J={r:0,c:[],p:J}}function P(){J.r||r(J.c),J=J.p}function Q(t,n){t&&t.i&&(I.delete(t),t.i(n))}function R(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push(()=>{I.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function U(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],a=n[c];if(a){for(const t in u)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[c]=a}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function V(t){return"object"==typeof t&&null!==t?t:{}}function W(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function X(t){t&&t.c()}function Y(t,n){t&&t.l(n)}function Z(t,n,o){const{fragment:u,on_mount:a,on_destroy:i,after_update:s}=t.$$;u&&u.m(n,o),T(()=>{const n=a.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(T)}function tt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function nt(t,n){-1===t.$$.dirty[0]&&(L.push(t),O||(O=!0,F.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function et(n,e,c,u,a,i,s=[-1]){const f=j;S(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:s};let p=!1;d.ctx=c?c(n,l,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&nt(n,t)),e}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!u&&u(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(x(e.target)):d.fragment&&d.fragment.c(),e.intro&&Q(n.$$.fragment),Z(n,e.target,e.anchor),G()),S(f)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{U as A,V as B,tt as C,C as D,K as E,P as F,M as G,W as H,p as I,A as J,y as K,D as L,r as M,q as N,ot as S,_ as a,x as b,a as c,d,h as e,b as f,l as g,i as h,et as i,s as j,R as k,m as l,v as m,t as n,f as o,E as p,$ as q,g as r,u as s,Q as t,N as u,w as v,n as w,X as x,Y as y,Z as z};
