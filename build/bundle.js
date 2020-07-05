var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function i(t,e,n,r,o,s,l){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,l);t.p(o,i)}}function u(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function $(){return h(" ")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.data!==e&&(t.data=e)}function b(t,e,n){t.classList[n?"add":"remove"](e)}let _;function x(t){_=t}function k(){if(!_)throw new Error("Function called outside component initialization");return _}function w(){const t=k();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}function C(t,e){k().$$.context.set(t,e)}function E(t){return k().$$.context.get(t)}const M=[],j=[],T=[],O=[],N=Promise.resolve();let S=!1;function z(t){T.push(t)}function L(t){O.push(t)}let D=!1;const H=new Set;function J(){if(!D){D=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];x(e),A(e.$$)}for(M.length=0;j.length;)j.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];H.has(e)||(H.add(e),e())}T.length=0}while(M.length);for(;O.length;)O.pop()();S=!1,D=!1,H.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const B=new Set;let P;function Y(){P={r:0,c:[],p:P}}function U(){P.r||r(P.c),P=P.p}function q(t,e){t&&t.i&&(B.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),P.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function R(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function F(t){t&&t.c()}function W(t,n,s){const{fragment:l,on_mount:c,on_destroy:i,after_update:u}=t.$$;l&&l.m(n,s),z(()=>{const n=c.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(z)}function X(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(M.push(t),S||(S=!0,N.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,o,s,l,c,i,u=[-1]){const a=_;x(e);const f=o.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:u};let m=!1;if(d.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),m&&G(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();o.intro&&q(e.$$.fragment),W(e,o.target,o.anchor),J()}x(a)}class Q{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const V=[];function Z(e,n=t){let r;const o=[];function l(t){if(s(e,t)&&(e=t,r)){const t=!V.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),V.push(n,e)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,c=t){const i=[s,c];return o.push(i),1===o.length&&(r=n(l)||t),s(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function tt(e){let n,o,s;return{c(){n=m("div"),v(n,"class","svelte-csxmi6"),b(n,"horizontal",!e[0]),b(n,"vertical",e[0])},m(t,r){f(t,n,r),o||(s=[g(window,"mouseup",e[2]),g(window,"mousemove",e[3]),g(n,"mousedown",e[1])],o=!0)},p(t,[e]){1&e&&b(n,"horizontal",!t[0]),1&e&&b(n,"vertical",t[0])},i:t,o:t,d(t){t&&p(n),o=!1,r(s)}}}function et(t,e,n){let{split_pos:r}=e,{container:o}=e,{vertical:s=!1}=e,l=!1;return t.$set=t=>{"split_pos"in t&&n(4,r=t.split_pos),"container"in t&&n(5,o=t.container),"vertical"in t&&n(0,s=t.vertical)},[s,function(t){l||0!==t.button||(t.preventDefault(),l=!0)},function(t){l&&0===t.button&&(t.preventDefault(),l=!1)},function(t){if(!l)return;t.preventDefault();let e=o.getBoundingClientRect();n(4,r+=s?t.movementY/e.height:t.movementX/e.width),n(4,r=Math.min(Math.max(r,0),1))},r,o]}class nt extends Q{constructor(t){super(),K(this,t,et,tt,s,{split_pos:4,container:5,vertical:0})}}function rt(t){let e,n,r,o,s,l,u;const d=t[4].default,h=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(d,t,t[3],null);function g(e){t[5].call(null,e)}let y={vertical:t[1],container:t[2]};return void 0!==t[0]&&(y.split_pos=t[0]),o=new nt({props:y}),j.push(()=>R(o,"split_pos",g)),{c(){e=m("div"),h&&h.c(),n=$(),r=m("div"),F(o.$$.fragment),v(r,"class","splitter svelte-14mmgko"),v(e,"style",l=`\n    grid-template-rows: calc(${100*t[0]}% - var(--super--gaps) / 2) 0px auto;\n    grid-template-columns: calc(${100*t[0]}% - var(--super--gaps) / 2) 0px auto;\n  `),v(e,"class","svelte-14mmgko"),b(e,"vertical",t[1]),b(e,"horizontal",!t[1])},m(s,l){f(s,e,l),h&&h.m(e,null),a(e,n),a(e,r),W(o,r,null),t[6](e),u=!0},p(t,[n]){h&&h.p&&8&n&&i(h,d,t,t[3],n,null,null);const r={};2&n&&(r.vertical=t[1]),4&n&&(r.container=t[2]),!s&&1&n&&(s=!0,r.split_pos=t[0],L(()=>s=!1)),o.$set(r),(!u||1&n&&l!==(l=`\n    grid-template-rows: calc(${100*t[0]}% - var(--super--gaps) / 2) 0px auto;\n    grid-template-columns: calc(${100*t[0]}% - var(--super--gaps) / 2) 0px auto;\n  `))&&v(e,"style",l),2&n&&b(e,"vertical",t[1]),2&n&&b(e,"horizontal",!t[1])},i(t){u||(q(h,t),q(o.$$.fragment,t),u=!0)},o(t){I(h,t),I(o.$$.fragment,t),u=!1},d(n){n&&p(e),h&&h.d(n),X(o),t[6](null)}}}function ot(t,e,n){let r,{vertical:o=!1}=e,{split_pos:s=.5}=e,{$$slots:l={},$$scope:c}=e;return t.$set=t=>{"vertical"in t&&n(1,o=t.vertical),"split_pos"in t&&n(0,s=t.split_pos),"$$scope"in t&&n(3,c=t.$$scope)},[s,o,r,c,l,function(t){s=t,n(0,s)},function(t){j[t?"unshift":"push"](()=>{r=t,n(2,r)})}]}class st extends Q{constructor(t){super(),K(this,t,ot,rt,s,{vertical:1,split_pos:0})}}function lt(t){let e,n,r;var o=t[2];function s(t){return{props:{title:t[0],current:t[1]}}}return o&&(n=new o(s(t)),n.$on("makeCurrent",t[4])),{c(){e=m("div"),n&&F(n.$$.fragment),v(e,"class","svelte-1yrjn1q")},m(t,o){f(t,e,o),n&&W(n,e,null),r=!0},p(t,[r]){const l={};if(1&r&&(l.title=t[0]),2&r&&(l.current=t[1]),o!==(o=t[2])){if(n){Y();const t=n;I(t.$$.fragment,1,0,()=>{X(t,1)}),U()}o?(n=new o(s(t)),n.$on("makeCurrent",t[4]),F(n.$$.fragment),q(n.$$.fragment,1),W(n,e,null)):n=null}else o&&n.$set(l)},i(t){r||(n&&q(n.$$.fragment,t),r=!0)},o(t){n&&I(n.$$.fragment,t),r=!1},d(t){t&&p(e),n&&X(n)}}}function ct(t,e,n){let r,{title:o="Tab"}=e,{current:s=!1}=e,c=E("super__tabComponent");return l(t,c,t=>n(2,r=t)),t.$set=t=>{"title"in t&&n(0,o=t.title),"current"in t&&n(1,s=t.current)},[o,s,r,c,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}class it extends Q{constructor(t){super(),K(this,t,ct,lt,s,{title:0,current:1})}}function ut(t){let e,n;return{c(){e=m("pre"),n=h(t[0]),v(e,"class","svelte-tdzogj")},m(t,r){f(t,e,r),a(e,n)},p(t,e){1&e&&y(n,t[0])},d(t){t&&p(e)}}}function at(e){let n,r,o,s,l,c,i,u,d,b,_,x,k,w=JSON.stringify(e[1],null,4)+"",C=e[0]&&ut(e);return{c(){n=m("div"),r=m("h2"),o=h(e[2]),s=$(),l=m("p"),l.textContent="Looks like this component failed to load!",c=$(),C&&C.c(),i=$(),u=m("p"),u.textContent="Here's the associated data formatted as JSON:",d=$(),b=m("pre"),_=h(w),v(r,"class","svelte-tdzogj"),v(b,"class","svelte-tdzogj")},m(t,p){f(t,n,p),a(n,r),a(r,o),a(n,s),a(n,l),a(n,c),C&&C.m(n,null),a(n,i),a(n,u),a(n,d),a(n,b),a(b,_),x||(k=g(r,"click",e[3]),x=!0)},p(t,[e]){4&e&&y(o,t[2]),t[0]?C?C.p(t,e):(C=ut(t),C.c(),C.m(n,i)):C&&(C.d(1),C=null),2&e&&w!==(w=JSON.stringify(t[1],null,4)+"")&&y(_,w)},i:t,o:t,d(t){t&&p(n),C&&C.d(),x=!1,k()}}}function ft(t,e,n){let r,{error:o}=e,{data:s}=e,l=["Oops..","Uh-oh...","Whoops!","Yikes...","oh no","Too bad!","It works! ...nevermind.","Successfully caught the error","It's just a rapid unscheduled disassembly","Entropy... is such a lonely word","You've got to be kidding me!"];function c(){n(2,r=r?l.filter(t=>t!==r)[Math.floor(Math.random()*(l.length-1))]:l[Math.floor(Math.random()*l.length)])}return c(),t.$set=t=>{"error"in t&&n(0,o=t.error),"data"in t&&n(1,s=t.data)},[o,s,r,c]}class pt extends Q{constructor(t){super(),K(this,t,ft,at,s,{error:0,data:1})}}function dt(e){let n,r,s,l,c,i,u,d,g,b,_,x,k,w,C,E,M=JSON.stringify(e[0],null,4)+"";return{c(){n=m("div"),r=m("div"),s=m("p"),l=h("Use this field to see if the internal state is maintained: "),c=m("input"),u=$(),d=m("p"),d.innerHTML="Here&#39;s the JSON representation of the <code>data</code> field:",g=$(),b=m("pre"),_=h(M),x=$(),k=m("p"),k.textContent="Here's what the component building function created:",c.value=i=Math.round(1e3*Math.random()),v(r,"class","super-debug svelte-1hyi60h"),v(n,"class","svelte-1hyi60h")},m(i,p){var m;f(i,n,p),a(n,r),a(r,s),a(s,l),a(s,c),a(r,u),a(r,d),a(r,g),a(r,b),a(b,_),a(r,x),a(r,k),C||(m=w=e[1].call(null,n,e[0]),E=m&&o(m.destroy)?m.destroy:t,C=!0)},p(t,[e]){1&e&&M!==(M=JSON.stringify(t[0],null,4)+"")&&y(_,M),w&&o(w.update)&&1&e&&w.update.call(null,t[0])},i:t,o:t,d(t){t&&p(n),C=!1,E()}}}function mt(t,e,n){let{data:r}=e;const o=E("super__makeComponent");return t.$set=t=>{"data"in t&&n(0,r=t.data)},[r,function(t,e){function n(e){for(;t.firstChild;)t.removeChild(t.firstChild);try{o(t,e)}catch(n){new pt({target:t,props:{error:n,data:e}})}}return n(e),{update:n}}]}class ht extends Q{constructor(t){super(),K(this,t,mt,dt,s,{data:0})}}function $t(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function gt(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function vt(t){let e,n;return e=new it({props:{title:t[3].title,current:t[0]===t[5]}}),e.$on("makeCurrent",(function(...e){return t[2](t[5],...e)})),{c(){F(e.$$.fragment)},m(t,r){W(e,t,r),n=!0},p(n,r){t=n;const o={};2&r&&(o.title=t[3].title),1&r&&(o.current=t[0]===t[5]),e.$set(o)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function yt(t){let e,n,r,o;return n=new ht({props:{data:t[3].data}}),{c(){e=m("div"),F(n.$$.fragment),r=$(),v(e,"class","content svelte-8k2rsv"),b(e,"current",t[0]===t[5])},m(t,s){f(t,e,s),W(n,e,null),a(e,r),o=!0},p(t,r){const o={};2&r&&(o.data=t[3].data),n.$set(o),1&r&&b(e,"current",t[0]===t[5])},i(t){o||(q(n.$$.fragment,t),o=!0)},o(t){I(n.$$.fragment,t),o=!1},d(t){t&&p(e),X(n)}}}function bt(t){let e,n,r,o,s=t[1],l=[];for(let e=0;e<s.length;e+=1)l[e]=vt(gt(t,s,e));const c=t=>I(l[t],1,1,()=>{l[t]=null});let i=t[1],u=[];for(let e=0;e<i.length;e+=1)u[e]=yt($t(t,i,e));const h=t=>I(u[t],1,1,()=>{u[t]=null});return{c(){e=m("div"),n=m("nav");for(let t=0;t<l.length;t+=1)l[t].c();r=$();for(let t=0;t<u.length;t+=1)u[t].c();v(n,"class","svelte-8k2rsv"),v(e,"class","root svelte-8k2rsv")},m(t,s){f(t,e,s),a(e,n);for(let t=0;t<l.length;t+=1)l[t].m(n,null);a(e,r);for(let t=0;t<u.length;t+=1)u[t].m(e,null);o=!0},p(t,[r]){if(3&r){let e;for(s=t[1],e=0;e<s.length;e+=1){const o=gt(t,s,e);l[e]?(l[e].p(o,r),q(l[e],1)):(l[e]=vt(o),l[e].c(),q(l[e],1),l[e].m(n,null))}for(Y(),e=s.length;e<l.length;e+=1)c(e);U()}if(3&r){let n;for(i=t[1],n=0;n<i.length;n+=1){const o=$t(t,i,n);u[n]?(u[n].p(o,r),q(u[n],1)):(u[n]=yt(o),u[n].c(),q(u[n],1),u[n].m(e,null))}for(Y(),n=i.length;n<u.length;n+=1)h(n);U()}},i(t){if(!o){for(let t=0;t<s.length;t+=1)q(l[t]);for(let t=0;t<i.length;t+=1)q(u[t]);o=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)I(l[t]);u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)I(u[t]);o=!1},d(t){t&&p(e),d(l,t),d(u,t)}}}function _t(t,e,n){let{tabs:r=[{title:"Tab"}]}=e,{current:o=0}=e;return t.$set=t=>{"tabs"in t&&n(1,r=t.tabs),"current"in t&&n(0,o=t.current)},[o,r,t=>n(0,o=t)]}class xt extends Q{constructor(t){super(),K(this,t,_t,bt,s,{tabs:1,current:0})}}function kt(e){let n,r,o,s,l=e[0].type+"";return{c(){n=m("span"),r=h("Error! Unknown layout type: "),o=m("code"),s=h(l)},m(t,e){f(t,n,e),a(n,r),a(n,o),a(o,s)},p(t,e){1&e&&l!==(l=t[0].type+"")&&y(s,l)},i:t,o:t,d(t){t&&p(n)}}}function wt(t){let e,n,r,o;function s(e){t[4].call(null,e)}function l(e){t[5].call(null,e)}let c={};return void 0!==t[0].contents&&(c.tabs=t[0].contents),void 0!==t[0].current&&(c.current=t[0].current),e=new xt({props:c}),j.push(()=>R(e,"tabs",s)),j.push(()=>R(e,"current",l)),{c(){F(e.$$.fragment)},m(t,n){W(e,t,n),o=!0},p(t,o){const s={};!n&&1&o&&(n=!0,s.tabs=t[0].contents,L(()=>n=!1)),!r&&1&o&&(r=!0,s.current=t[0].current,L(()=>r=!1)),e.$set(s)},i(t){o||(q(e.$$.fragment,t),o=!0)},o(t){I(e.$$.fragment,t),o=!1},d(t){X(e,t)}}}function Ct(t){let e,n,r;function o(e){t[3].call(null,e)}let s={vertical:"vsplit"===t[0].type,$$slots:{default:[Et]},$$scope:{ctx:t}};return void 0!==t[0].split_pos&&(s.split_pos=t[0].split_pos),e=new st({props:s}),j.push(()=>R(e,"split_pos",o)),{c(){F(e.$$.fragment)},m(t,n){W(e,t,n),r=!0},p(t,r){const o={};1&r&&(o.vertical="vsplit"===t[0].type),65&r&&(o.$$scope={dirty:r,ctx:t}),!n&&1&r&&(n=!0,o.split_pos=t[0].split_pos,L(()=>n=!1)),e.$set(o)},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function Et(t){let e,n,r,o,s,l;function c(e){t[1].call(null,e)}let i={};function u(e){t[2].call(null,e)}void 0!==t[0].contents[0]&&(i.layout=t[0].contents[0]),e=new Tt({props:i}),j.push(()=>R(e,"layout",c));let a={};return void 0!==t[0].contents[1]&&(a.layout=t[0].contents[1]),o=new Tt({props:a}),j.push(()=>R(o,"layout",u)),{c(){F(e.$$.fragment),r=$(),F(o.$$.fragment)},m(t,n){W(e,t,n),f(t,r,n),W(o,t,n),l=!0},p(t,r){const l={};!n&&1&r&&(n=!0,l.layout=t[0].contents[0],L(()=>n=!1)),e.$set(l);const c={};!s&&1&r&&(s=!0,c.layout=t[0].contents[1],L(()=>s=!1)),o.$set(c)},i(t){l||(q(e.$$.fragment,t),q(o.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),I(o.$$.fragment,t),l=!1},d(t){X(e,t),t&&p(r),X(o,t)}}}function Mt(t){let e,n,r,o;const s=[Ct,wt,kt],l=[];function c(t,e){return"hsplit"===t[0].type||"vsplit"===t[0].type?0:"tabs"===t[0].type?1:2}return e=c(t),n=l[e]=s[e](t),{c(){n.c(),r=h("")},m(t,n){l[e].m(t,n),f(t,r,n),o=!0},p(t,[o]){let i=e;e=c(t),e===i?l[e].p(t,o):(Y(),I(l[i],1,1,()=>{l[i]=null}),U(),n=l[e],n||(n=l[e]=s[e](t),n.c()),q(n,1),n.m(r.parentNode,r))},i(t){o||(q(n),o=!0)},o(t){I(n),o=!1},d(t){l[e].d(t),t&&p(r)}}}function jt(t,e,n){let{layout:r={type:"tabs",contents:[{title:"/!\\ EMPTY /!\\"}]}}=e;return t.$set=t=>{"layout"in t&&n(0,r=t.layout)},[r,function(t){r.contents[0]=t,n(0,r)},function(t){r.contents[1]=t,n(0,r)},function(t){r.split_pos=t,n(0,r)},function(t){r.contents=t,n(0,r)},function(t){r.current=t,n(0,r)}]}class Tt extends Q{constructor(t){super(),K(this,t,jt,Mt,s,{layout:0})}}function Ot(e){let n,r,o,s;return{c(){n=m("button"),r=h(e[0]),v(n,"class","svelte-ntpwvv"),b(n,"current",e[1])},m(t,l){f(t,n,l),a(n,r),o||(s=g(n,"click",e[3]),o=!0)},p(t,[e]){1&e&&y(r,t[0]),2&e&&b(n,"current",t[1])},i:t,o:t,d(t){t&&p(n),o=!1,s()}}}function Nt(t,e,n){let{title:r="Tab"}=e,{current:o=!1}=e;const s=w();return t.$set=t=>{"title"in t&&n(0,r=t.title),"current"in t&&n(1,o=t.current)},[r,o,s,()=>s("makeCurrent")]}class St extends Q{constructor(t){super(),K(this,t,Nt,Ot,s,{title:0,current:1})}}function zt(t){let e,n,r,o,s;function l(e){t[3].call(null,e)}let c={};return void 0!==t[0]&&(c.layout=t[0]),r=new Tt({props:c}),j.push(()=>R(r,"layout",l)),{c(){e=m("div"),n=m("div"),F(r.$$.fragment),v(n,"class","inner svelte-ooi1b2"),v(e,"class","outer svelte-ooi1b2")},m(t,o){f(t,e,o),a(e,n),W(r,n,null),s=!0},p(t,[e]){const n={};!o&&1&e&&(o=!0,n.layout=t[0],L(()=>o=!1)),r.$set(n)},i(t){s||(q(r.$$.fragment,t),s=!0)},o(t){I(r.$$.fragment,t),s=!1},d(t){t&&p(e),X(r)}}}function Lt(t,e,n){let{layout:r}=e,{makeComponent:o}=e,{tabs:s=St}=e,l=Z();return C("super__makeComponent",(t,e)=>o(t,e)),C("super__tabComponent",l),t.$set=t=>{"layout"in t&&n(0,r=t.layout),"makeComponent"in t&&n(1,o=t.makeComponent),"tabs"in t&&n(2,s=t.tabs)},t.$$.update=()=>{4&t.$$.dirty&&l.set(s)},[r,o,s,function(t){r=t,n(0,r)}]}class Dt extends Q{constructor(t){super(),K(this,t,Lt,zt,s,{layout:0,makeComponent:1,tabs:2})}}function Ht(e){let n;return{c(){n=m("div"),n.innerHTML='<textarea value="better than vscode" class="svelte-42k6mw"></textarea>',v(n,"class","svelte-42k6mw")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class Jt extends Q{constructor(t){super(),K(this,t,null,Ht,s,{})}}function At(t,e,n){const r=t.slice();return r[5]=e[n],r}function Bt(t){let e,n,r,o,s,l,c,i,u,d=t[5]+"";return{c(){e=m("label"),n=m("input"),o=$(),s=h(d),l=$(),c=m("br"),v(n,"type","radio"),n.__value=r=t[5],n.value=n.__value,t[4][0].push(n)},m(r,p){f(r,e,p),a(e,n),n.checked=n.__value===t[0],a(e,o),a(e,s),f(r,l,p),f(r,c,p),i||(u=g(n,"change",t[3]),i=!0)},p(t,e){1&e&&(n.checked=n.__value===t[0])},d(r){r&&p(e),t[4][0].splice(t[4][0].indexOf(n),1),r&&p(l),r&&p(c),i=!1,u()}}}function Pt(e){let n,r,o,s=e[2],l=[];for(let t=0;t<s.length;t+=1)l[t]=Bt(At(e,s,t));return{c(){n=m("div"),r=m("p"),r.textContent="This is the project tree! The perfect place for a theme switcher!",o=$();for(let t=0;t<l.length;t+=1)l[t].c()},m(t,e){f(t,n,e),a(n,r),a(n,o);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(t,[e]){if(5&e){let r;for(s=t[2],r=0;r<s.length;r+=1){const o=At(t,s,r);l[r]?l[r].p(o,e):(l[r]=Bt(o),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}},i:t,o:t,d(t){t&&p(n),d(l,t)}}}function Yt(t,e,n){let r,o=E("current_theme");l(t,o,t=>n(0,r=t));let s=E("available_themes");return[r,o,s,function(){r=this.__value,o.set(r)},[[]]]}class Ut extends Q{constructor(t){super(),K(this,t,Yt,Pt,s,{})}}function qt(e){let n;return{c(){n=m("div"),n.innerHTML='<textarea value="totally a prompt $&gt; " class="svelte-42k6mw"></textarea>',v(n,"class","svelte-42k6mw")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class It extends Q{constructor(t){super(),K(this,t,null,qt,s,{})}}function Rt(e){let n,r,o,s;return{c(){n=m("button"),r=h(e[0]),v(n,"class","svelte-1cfli4k"),b(n,"current",e[1])},m(t,l){f(t,n,l),a(n,r),o||(s=g(n,"click",e[3]),o=!0)},p(t,[e]){1&e&&y(r,t[0]),2&e&&b(n,"current",t[1])},i:t,o:t,d(t){t&&p(n),o=!1,s()}}}function Ft(t,e,n){let{title:r="Tab"}=e,{current:o=!1}=e;const s=w();return t.$set=t=>{"title"in t&&n(0,r=t.title),"current"in t&&n(1,o=t.current)},[r,o,s,()=>s("makeCurrent")]}class Wt extends Q{constructor(t){super(),K(this,t,Ft,Rt,s,{title:0,current:1})}}function Xt(t){let e,n,r,o;return n=new Dt({props:{layout:t[2],makeComponent:t[3],tabs:"custom_tabs"===t[0]?Wt:St}}),{c(){e=m("main"),F(n.$$.fragment),v(e,"class",r=u("theme-"+t[0])+" svelte-n836gv")},m(t,r){f(t,e,r),W(n,e,null),o=!0},p(t,[s]){const l={};1&s&&(l.tabs="custom_tabs"===t[0]?Wt:St),n.$set(l),(!o||1&s&&r!==(r=u("theme-"+t[0])+" svelte-n836gv"))&&v(e,"class",r)},i(t){o||(q(n.$$.fragment,t),o=!0)},o(t){I(n.$$.fragment,t),o=!1},d(t){t&&p(e),X(n)}}}function Gt(t,e,n){let r;C("available_themes",["system","light","dark","slim","light_slim","dark_slim","custom_tabs"]);let o=Z("system");l(t,o,t=>n(0,r=t)),C("current_theme",o);return[r,o,{type:"hsplit",split_pos:.2,contents:[{type:"tabs",contents:[{title:"Project",data:"project"},{title:"Plugins",data:"plugins"}]},{type:"vsplit",split_pos:.7,contents:[{type:"tabs",current:1,contents:[{title:"rollup.config.js",data:"editor"},{title:"README.md",data:"editor"},{title:"SuperLayout.svelte",data:"editor"}]},{type:"tabs",contents:[{title:"Terminal",data:"terminal"},{title:"Documentation",data:"docs"},{title:"Debugger",data:"debug"}]}]}]},function(t,e){switch(e){case"project":new Ut({target:t});break;case"editor":new Jt({target:t});break;case"terminal":new It({target:t});break;default:throw new Error("i didn't implement this view so you can look at this error screen")}}]}return new class extends Q{constructor(t){super(),K(this,t,Gt,Xt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
