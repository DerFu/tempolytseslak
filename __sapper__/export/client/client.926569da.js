import{n as e,s as t,S as s,i as n,e as r,t as a,a as o,c,b as l,d as i,f as u,g as f,h as p,j as h,k as m,l as g,m as d,o as $,p as v,q as y,r as b,u as E,v as S,w,x,y as R,z as _,A as L,B as P,C as A,D as q,E as C,F as U}from"./index.7136c573.js";const N=[];function j(s,n=e){let r;const a=[];function o(e){if(t(s,e)&&(s=e,r)){const e=!N.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),N.push(t,s)}if(e){for(let e=0;e<N.length;e+=2)N[e][0](N[e+1]);N.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,c=e){const l=[t,c];return a.push(l),1===a.length&&(r=n(o)||e),t(s),()=>{const e=a.indexOf(l);-1!==e&&a.splice(e,1),0===a.length&&(r(),r=null)}}}}const O={},k=()=>({});function I(t){let s,n,d,$,v,y,b,E,S,w,x,R,_;return{c(){s=r("nav"),n=r("ul"),d=r("li"),$=r("a"),v=a("home"),y=o(),b=r("li"),E=r("a"),S=a("game"),w=o(),x=r("li"),R=r("a"),_=a("stats [...comming]"),this.h()},l(e){s=c(e,"NAV",{class:!0});var t=l(s);n=c(t,"UL",{class:!0});var r=l(n);d=c(r,"LI",{class:!0});var a=l(d);$=c(a,"A",{href:!0,class:!0});var o=l($);v=i(o,"home"),o.forEach(u),a.forEach(u),y=f(r),b=c(r,"LI",{class:!0});var p=l(b);E=c(p,"A",{href:!0,class:!0});var h=l(E);S=i(h,"game"),h.forEach(u),p.forEach(u),w=f(r),x=c(r,"LI",{class:!0});var m=l(x);R=c(m,"A",{href:!0,class:!0});var g=l(R);_=i(g,"stats [...comming]"),g.forEach(u),m.forEach(u),r.forEach(u),t.forEach(u),this.h()},h(){p($,"href","."),p($,"class","svelte-1g78bui"),h($,"selected",void 0===t[0]),p(d,"class","svelte-1g78bui"),p(E,"href","game"),p(E,"class","svelte-1g78bui"),h(E,"selected","game"===t[0]),p(b,"class","svelte-1g78bui"),p(R,"href","game"),p(R,"class","svelte-1g78bui"),p(x,"class","svelte-1g78bui"),p(n,"class","svelte-1g78bui"),p(s,"class","svelte-1g78bui")},m(e,t){m(e,s,t),g(s,n),g(n,d),g(d,$),g($,v),g(n,y),g(n,b),g(b,E),g(E,S),g(n,w),g(n,x),g(x,R),g(R,_)},p(e,[t]){1&t&&h($,"selected",void 0===e[0]),1&t&&h(E,"selected","game"===e[0])},i:e,o:e,d(e){e&&u(s)}}}function D(e,t,s){let{segment:n}=t;return e.$set=(e=>{"segment"in e&&s(0,n=e.segment)}),[n]}class B extends s{constructor(e){super(),n(this,e,D,I,t,{segment:0})}}function J(e){let t,s,n;const a=new B({props:{segment:e[0]}}),i=e[2].default,h=d(i,e,e[1],null);return{c(){$(a.$$.fragment),t=o(),s=r("main"),h&&h.c(),this.h()},l(e){v(a.$$.fragment,e),t=f(e),s=c(e,"MAIN",{class:!0});var n=l(s);h&&h.l(n),n.forEach(u),this.h()},h(){p(s,"class","svelte-1uhnsl8")},m(e,r){y(a,e,r),m(e,t,r),m(e,s,r),h&&h.m(s,null),n=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),a.$set(s),h&&h.p&&2&t&&h.p(b(i,e,e[1],null),E(i,e[1],t,null))},i(e){n||(S(a.$$.fragment,e),S(h,e),n=!0)},o(e){w(a.$$.fragment,e),w(h,e),n=!1},d(e){x(a,e),e&&u(t),e&&u(s),h&&h.d(e)}}}function V(e,t,s){let{segment:n}=t,{$$slots:r={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s(0,n=e.segment),"$$scope"in e&&s(1,a=e.$$scope)}),[n,a,r]}class H extends s{constructor(e){super(),n(this,e,V,J,t,{segment:0})}}function K(e){let t,s,n=e[1].stack+"";return{c(){t=r("pre"),s=a(n)},l(e){t=c(e,"PRE",{});var r=l(t);s=i(r,n),r.forEach(u)},m(e,n){m(e,t,n),g(t,s)},p(e,t){2&t&&n!==(n=e[1].stack+"")&&R(s,n)},d(e){e&&u(t)}}}function T(t){let s,n,h,d,$,v,y,b,E,S=t[1].message+"";document.title=s=t[0];let w=t[2]&&t[1].stack&&K(t);return{c(){n=o(),h=r("h1"),d=a(t[0]),$=o(),v=r("p"),y=a(S),b=o(),w&&w.c(),E=_(),this.h()},l(e){n=f(e),h=c(e,"H1",{class:!0});var s=l(h);d=i(s,t[0]),s.forEach(u),$=f(e),v=c(e,"P",{class:!0});var r=l(v);y=i(r,S),r.forEach(u),b=f(e),w&&w.l(e),E=_(),this.h()},h(){p(h,"class","svelte-8od9u6"),p(v,"class","svelte-8od9u6")},m(e,t){m(e,n,t),m(e,h,t),g(h,d),m(e,$,t),m(e,v,t),g(v,y),m(e,b,t),w&&w.m(e,t),m(e,E,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&R(d,e[0]),2&t&&S!==(S=e[1].message+"")&&R(y,S),e[2]&&e[1].stack?w?w.p(e,t):((w=K(e)).c(),w.m(E.parentNode,E)):w&&(w.d(1),w=null)},i:e,o:e,d(e){e&&u(n),e&&u(h),e&&u($),e&&u(v),e&&u(b),w&&w.d(e),e&&u(E)}}}function z(e,t,s){let{status:n}=t,{error:r}=t;return e.$set=(e=>{"status"in e&&s(0,n=e.status),"error"in e&&s(1,r=e.error)}),[n,r,!1]}class F extends s{constructor(e){super(),n(this,e,z,T,t,{status:0,error:1})}}function G(e){let t,s;const n=[e[4].props];var r=e[4].component;function a(e){let t={};for(let e=0;e<n.length;e+=1)t=L(t,n[e]);return{props:t}}if(r)var o=new r(a());return{c(){o&&$(o.$$.fragment),t=_()},l(e){o&&v(o.$$.fragment,e),t=_()},m(e,n){o&&y(o,e,n),m(e,t,n),s=!0},p(e,s){const c=16&s?P(n,[A(e[4].props)]):{};if(r!==(r=e[4].component)){if(o){C();const e=o;w(e.$$.fragment,1,0,()=>{x(e,1)}),U()}r?(o=new r(a()),$(o.$$.fragment),S(o.$$.fragment,1),y(o,t.parentNode,t)):o=null}else r&&o.$set(c)},i(e){s||(o&&S(o.$$.fragment,e),s=!0)},o(e){o&&w(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&x(o,e)}}}function M(e){let t;const s=new F({props:{error:e[0],status:e[1]}});return{c(){$(s.$$.fragment)},l(e){v(s.$$.fragment,e)},m(e,n){y(s,e,n),t=!0},p(e,t){const n={};1&t&&(n.error=e[0]),2&t&&(n.status=e[1]),s.$set(n)},i(e){t||(S(s.$$.fragment,e),t=!0)},o(e){w(s.$$.fragment,e),t=!1},d(e){x(s,e)}}}function W(e){let t,s,n,r;const a=[M,G],o=[];function c(e,t){return e[0]?0:1}return t=c(e),s=o[t]=a[t](e),{c(){s.c(),n=_()},l(e){s.l(e),n=_()},m(e,s){o[t].m(e,s),m(e,n,s),r=!0},p(e,r){let l=t;(t=c(e))===l?o[t].p(e,r):(C(),w(o[l],1,1,()=>{o[l]=null}),U(),(s=o[t])||(s=o[t]=a[t](e)).c(),S(s,1),s.m(n.parentNode,n))},i(e){r||(S(s),r=!0)},o(e){w(s),r=!1},d(e){o[t].d(e),e&&u(n)}}}function X(e){let t;const s=[{segment:e[2][0]},e[3].props];let n={$$slots:{default:[W]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=L(n,s[e]);const r=new H({props:n});return{c(){$(r.$$.fragment)},l(e){v(r.$$.fragment,e)},m(e,s){y(r,e,s),t=!0},p(e,[t]){const n=12&t?P(s,[4&t&&{segment:e[2][0]},8&t&&A(e[3].props)]):{};83&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){t||(S(r.$$.fragment,e),t=!0)},o(e){w(r.$$.fragment,e),t=!1},d(e){x(r,e)}}}function Y(e,t,s){let{stores:n}=t,{error:r}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:l=null}=t;return q(O,n),e.$set=(e=>{"stores"in e&&s(5,n=e.stores),"error"in e&&s(0,r=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,o=e.segments),"level0"in e&&s(3,c=e.level0),"level1"in e&&s(4,l=e.level1)}),[r,a,o,c,l,n]}class Q extends s{constructor(e){super(),n(this,e,Y,X,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Z=[],ee=[{js:()=>import("./index.bd98f51a.js"),css:["index.bd98f51a.css"]},{js:()=>import("./game.bc1f2fd4.js"),css:["game.bc1f2fd4.css"]}],te=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/game\/?$/,parts:[{i:1}]}];const se="undefined"!=typeof __SAPPER__&&__SAPPER__;let ne,re,ae,oe=!1,ce=[],le="{}";const ie={page:j({}),preloading:j(null),session:j(se&&se.session)};let ue,fe;ie.session.subscribe(async e=>{if(ue=e,!oe)return;fe=!0;const t=ye(new URL(location.href)),s=re={},{redirect:n,props:r,branch:a}=await we(t);s===re&&await Se(n,a,r,t.page)});let pe,he=null;let me,ge=1;const de="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},$e={};function ve(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(n):t[s]=n}),t}function ye(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(se.baseUrl))return null;let t=e.pathname.slice(se.baseUrl.length);if(""===t&&(t="/"),!Z.some(e=>e.test(t)))for(let s=0;s<te.length;s+=1){const n=te[s],r=n.pattern.exec(t);if(r){const s=ve(e.search),a=n.parts[n.parts.length-1],o=a.params?a.params(r):{},c={host:location.host,path:t,query:s,params:o};return{href:e.href,route:n,match:r,page:c}}}}function be(){return{x:pageXOffset,y:pageYOffset}}async function Ee(e,t,s,n){if(t)me=t;else{const e=be();$e[me]=e,t=me=++ge,$e[me]=s?e:{x:0,y:0}}me=t,ne&&ie.preloading.set(!0);const r=he&&he.href===e.href?he.promise:we(e);he=null;const a=re={},{redirect:o,props:c,branch:l}=await r;if(a===re&&(await Se(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=$e[t];if(n){const t=document.getElementById(n.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}$e[me]=e,e&&scrollTo(e.x,e.y)}}async function Se(e,t,s,n){if(e)return function(e,t={replaceState:!1}){const s=ye(new URL(e,document.baseURI));return s?(de[t.replaceState?"replaceState":"pushState"]({id:me},"",e),Ee(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ie.page.set(n),ie.preloading.set(!1),ne)ne.$set(s);else{s.stores={page:{subscribe:ie.page.subscribe},preloading:{subscribe:ie.preloading.subscribe},session:ie.session},s.level0={props:await ae};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Re(e.nextSibling);Re(e),Re(t)}ne=new Q({target:pe,props:s,hydrate:!0})}ce=t,le=JSON.stringify(n.query),oe=!0,fe=!1}async function we(e){const{route:t,page:s}=e,n=s.path.split("/").filter(Boolean);let r=null;const a={error:null,status:200,segments:[n[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;ae||(ae=se.preloaded[0]||k.call(o,{host:s.host,path:s.path,query:s.query,params:{}},ue));let l=1;try{const r=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=n[c];if(function(e,t,s,n){if(n!==le)return!0;const r=ce[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(c,f,i,r)&&(u=!0),a.segments[l]=n[c+1],!t)return{segment:f};const p=l++;if(!fe&&!u&&ce[c]&&ce[c].part===t.i)return ce[c];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(xe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(ee[t.i]);let g;return g=oe||!se.preloaded[c+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ue):{}:se.preloaded[c+1],a[`level${p}`]={component:h,props:g,segment:f,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:r,props:a,branch:c}}function xe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const n=document.createElement("link");n.rel="stylesheet",n.href=t,n.onload=(()=>e()),n.onerror=s,document.head.appendChild(n)})}function Re(e){e.parentNode.removeChild(e)}function _e(e){const t=ye(new URL(e,document.baseURI));if(t)return he&&e===he.href||function(e,t){he={href:e,promise:t}}(e,we(t)),he.promise}let Le;function Pe(e){clearTimeout(Le),Le=setTimeout(()=>{Ae(e)},20)}function Ae(e){const t=Ce(e.target);t&&"prefetch"===t.rel&&_e(t.href)}function qe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ce(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,n=String(s?t.href.baseVal:t.href);if(n===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const r=new URL(n);if(r.pathname===location.pathname&&r.search===location.search)return;const a=ye(r);if(a){Ee(a,null,t.hasAttribute("sapper-noscroll"),r.hash),e.preventDefault(),de.pushState({id:me},"",r.href)}}function Ce(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ue(e){if($e[me]=be(),e.state){const t=ye(new URL(location.href));t?Ee(t,e.state.id):location.href=location.href}else(function(e){me=e})(ge=ge+1),de.replaceState({id:me},"",location.href)}!function(e){var t;"scrollRestoration"in de&&(de.scrollRestoration="manual"),t=e.target,pe=t,addEventListener("click",qe),addEventListener("popstate",Ue),addEventListener("touchstart",Ae),addEventListener("mousemove",Pe),Promise.resolve().then(()=>{const{hash:e,href:t}=location;de.replaceState({id:ge},"",t);const s=new URL(location.href);if(se.error)return function(e){const{host:t,pathname:s,search:n}=location,{session:r,preloaded:a,status:o,error:c}=se;ae||(ae=a&&a[0]),Se(null,[],{error:c,status:o,session:r,level0:{props:ae},level1:{props:{status:o,error:c},component:F},segments:a},{host:t,path:s,query:ve(n),params:{}})}();const n=ye(s);return n?Ee(n,ge,!0,e):void 0})}({target:document.querySelector("#sapper")});
