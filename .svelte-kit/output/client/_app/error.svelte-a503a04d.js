import{S as K,i as w,s as y,e as d,t as v,c as E,a as b,h as P,d as m,g as n,J as R,j,k as N,l as q,m as S,K as C}from"./chunks/vendor-8d39b5cc.js";function H(r){let l,t=r[1].frame+"",a;return{c(){l=d("pre"),a=v(t)},l(f){l=E(f,"PRE",{});var s=b(l);a=P(s,t),s.forEach(m)},m(f,s){n(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&j(a,t)},d(f){f&&m(l)}}}function J(r){let l,t=r[1].stack+"",a;return{c(){l=d("pre"),a=v(t)},l(f){l=E(f,"PRE",{});var s=b(l);a=P(s,t),s.forEach(m)},m(f,s){n(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&j(a,t)},d(f){f&&m(l)}}}function z(r){let l,t,a,f,s=r[1].message+"",c,k,u,p,i=r[1].frame&&H(r),o=r[1].stack&&J(r);return{c(){l=d("h1"),t=v(r[0]),a=N(),f=d("pre"),c=v(s),k=N(),i&&i.c(),u=N(),o&&o.c(),p=q()},l(e){l=E(e,"H1",{});var _=b(l);t=P(_,r[0]),_.forEach(m),a=S(e),f=E(e,"PRE",{});var h=b(f);c=P(h,s),h.forEach(m),k=S(e),i&&i.l(e),u=S(e),o&&o.l(e),p=q()},m(e,_){n(e,l,_),R(l,t),n(e,a,_),n(e,f,_),R(f,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&j(t,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=H(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=J(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&m(l),e&&m(a),e&&m(f),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function D({error:r,status:l}){return{props:{error:r,status:l}}}function A(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class F extends K{constructor(l){super();w(this,l,A,z,y,{status:0,error:1})}}export{F as default,D as load};
