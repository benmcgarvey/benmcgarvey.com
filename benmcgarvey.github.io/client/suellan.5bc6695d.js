import{S as e,i as t,s as a,H as n,g as r,d as s,e as i,t as l,c as o,a as c,b as m,f as u,h as f,j as d,x as h,y as p,w as g,D as v,m as k,E as y,F as b,k as E,o as w,p as S,n as x}from"./index.8f88dd1c.js";import{N as I}from"./Note.bfbeb5f3.js";function A(e,t,a){const n=Object.create(e);return n.item=t[a],n}function D(e,t,a){const n=Object.create(e);return n.detail=t[a],n}function M(e,t,a){const n=Object.create(e);return n.item=t[a],n}function V(e,t,a){const n=Object.create(e);return n.item=t[a],n}function j(e,t,a){const n=Object.create(e);return n.skill=t[a],n}function C(e,t,a){const n=Object.create(e);return n.detail=t[a],n}function P(e,t,a){const n=Object.create(e);return n.experience=t[a],n}function N(e,t,a){const n=Object.create(e);return n.item=t[a],n}function $(e,t,a){const n=Object.create(e);return n.skill=t[a],n}function R(e,t,a){const n=Object.create(e);return n.contact=t[a],n}function L(e){var t,a=void 0!==e.contact&&function(e){var t,a,n=e.contact.display+"";return{c(){t=i("a"),a=l(n),this.h()},l(e){t=o(e,"A",{class:!0,href:!0},!1);var r=c(t);a=m(r,n),r.forEach(s),this.h()},h(){u(t,"class","Contact svelte-1mofus"),u(t,"href",e.contact.href)},m(e,n){r(e,t,n),f(t,a)},p:x,d(e){e&&s(t)}}}(e);return{c(){a&&a.c(),t=n()},l(e){a&&a.l(e),t=n()},m(e,n){a&&a.m(e,n),r(e,t,n)},p(e,t){void 0!==t.contact&&a.p(e,t)},d(e){a&&a.d(e),e&&s(t)}}}function O(e){var t,a,n=e.resume.summary+"";return{c(){t=i("div"),a=l(n),this.h()},l(e){t=o(e,"DIV",{class:!0,class:!0},!1);var r=c(t);a=m(r,n),r.forEach(s),this.h()},h(){u(t,"class",""),u(t,"class","svelte-1mofus")},m(e,n){r(e,t,n),f(t,a)},p(e,t){e.resume&&n!==(n=t.resume.summary+"")&&d(a,n)},d(e){e&&s(t)}}}function T(e){var t,a,n=e.item+"";return{c(){t=i("span"),a=l(n),this.h()},l(e){t=o(e,"SPAN",{class:!0},!1);var r=c(t);a=m(r,n),r.forEach(s),this.h()},h(){u(t,"class","SkillItem svelte-1mofus")},m(e,n){r(e,t,n),f(t,a)},p(e,t){e.resume&&n!==(n=t.item+"")&&d(a,n)},d(e){e&&s(t)}}}function Y(e){var t,a,v,k,y=e.skill.name+"";let b=e.skill.list,E=[];for(let t=0;t<b.length;t+=1)E[t]=T(N(e,b,t));return{c(){t=i("div"),a=l(y),v=h();for(let e=0;e<E.length;e+=1)E[e].c();k=n(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var r=c(t);a=m(r,y),r.forEach(s),v=p(e);for(let t=0;t<E.length;t+=1)E[t].l(e);k=n(),this.h()},h(){u(t,"class","Center SectionHeader svelte-1mofus")},m(e,n){r(e,t,n),f(t,a),r(e,v,n);for(let t=0;t<E.length;t+=1)E[t].m(e,n);r(e,k,n)},p(e,t){if(e.resume&&y!==(y=t.skill.name+"")&&d(a,y),e.resume){let a;for(b=t.skill.list,a=0;a<b.length;a+=1){const n=N(t,b,a);E[a]?E[a].p(e,n):(E[a]=T(n),E[a].c(),E[a].m(k.parentNode,k))}for(;a<E.length;a+=1)E[a].d(1);E.length=b.length}},d(e){e&&(s(t),s(v)),g(E,e),e&&s(k)}}}function B(e){var t;let a=e.experience.details,i=[];for(let t=0;t<a.length;t+=1)i[t]=H(C(e,a,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=n()},l(e){for(let t=0;t<i.length;t+=1)i[t].l(e);t=n()},m(e,a){for(let t=0;t<i.length;t+=1)i[t].m(e,a);r(e,t,a)},p(e,n){if(e.resume){let r;for(a=n.experience.details,r=0;r<a.length;r+=1){const s=C(n,a,r);i[r]?i[r].p(e,s):(i[r]=H(s),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=a.length}},d(e){g(i,e),e&&s(t)}}}function H(e){var t,a,n=e.detail+"";return{c(){t=i("span"),a=l(n),this.h()},l(e){t=o(e,"SPAN",{class:!0},!1);var r=c(t);a=m(r,n),r.forEach(s),this.h()},h(){u(t,"class","ExperienceItem svelte-1mofus")},m(e,n){r(e,t,n),f(t,a)},p(e,t){e.resume&&n!==(n=t.detail+"")&&d(a,n)},d(e){e&&s(t)}}}function U(e){var t,a,n,g,v,k,y,b,E,w,S,x,I,A,D,M,V=e.experience.place+"",j=e.experience.location+"",C=e.experience.title+"",P=e.experience.from+"",N=e.experience.to+"",$=e.experience.details&&B(e);return{c(){t=i("div"),a=i("a"),n=l(V),v=l("\n        - "),k=l(j),y=h(),b=i("div"),E=l(C),w=l(", "),S=l(P),x=l(" - "),I=l(N),A=h(),D=i("p"),$&&$.c(),M=h(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var r=c(t);a=o(r,"A",{class:!0,href:!0},!1);var i=c(a);n=m(i,V),i.forEach(s),v=m(r,"\n        - "),k=m(r,j),r.forEach(s),y=p(e),b=o(e,"DIV",{class:!0},!1);var l=c(b);E=m(l,C),w=m(l,", "),S=m(l,P),x=m(l," - "),I=m(l,N),l.forEach(s),A=p(e),D=o(e,"P",{class:!0},!1);var u=c(D);$&&$.l(u),M=p(u),u.forEach(s),this.h()},h(){u(a,"class","Bold svelte-1mofus"),u(a,"href",g=e.experience.href?e.experience.href:null),u(t,"class","svelte-1mofus"),u(b,"class","svelte-1mofus"),u(D,"class","svelte-1mofus")},m(e,s){r(e,t,s),f(t,a),f(a,n),f(t,v),f(t,k),r(e,y,s),r(e,b,s),f(b,E),f(b,w),f(b,S),f(b,x),f(b,I),r(e,A,s),r(e,D,s),$&&$.m(D,null),f(D,M)},p(e,t){e.resume&&V!==(V=t.experience.place+"")&&d(n,V),e.resume&&g!==(g=t.experience.href?t.experience.href:null)&&u(a,"href",g),e.resume&&j!==(j=t.experience.location+"")&&d(k,j),e.resume&&C!==(C=t.experience.title+"")&&d(E,C),e.resume&&P!==(P=t.experience.from+"")&&d(S,P),e.resume&&N!==(N=t.experience.to+"")&&d(I,N),t.experience.details?$?$.p(e,t):(($=B(t)).c(),$.m(D,M)):$&&($.d(1),$=null)},d(e){e&&(s(t),s(y),s(b),s(A),s(D)),$&&$.d()}}}function F(e){var t,a,n,h=e.item+"";return{c(){t=i("li"),a=i("span"),n=l(h),this.h()},l(e){t=o(e,"LI",{class:!0},!1);var r=c(t);a=o(r,"SPAN",{class:!0},!1);var i=c(a);n=m(i,h),i.forEach(s),r.forEach(s),this.h()},h(){u(a,"class","SkillItem svelte-1mofus"),u(t,"class","svelte-1mofus")},m(e,s){r(e,t,s),f(t,a),f(a,n)},p(e,t){e.resume&&h!==(h=t.item+"")&&d(n,h)},d(e){e&&s(t)}}}function z(e){var t,a,n,v,k,y=e.skill.name+"";let b=e.skill.list,E=[];for(let t=0;t<b.length;t+=1)E[t]=F(V(e,b,t));return{c(){t=i("div"),a=l(y),n=h(),v=i("ul");for(let e=0;e<E.length;e+=1)E[e].c();k=h(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var r=c(t);a=m(r,y),r.forEach(s),n=p(e),v=o(e,"UL",{class:!0},!1);var i=c(v);for(let e=0;e<E.length;e+=1)E[e].l(i);k=p(i),i.forEach(s),this.h()},h(){u(t,"class","Center SectionHeader svelte-1mofus"),u(v,"class","svelte-1mofus")},m(e,s){r(e,t,s),f(t,a),r(e,n,s),r(e,v,s);for(let e=0;e<E.length;e+=1)E[e].m(v,null);f(v,k)},p(e,t){if(e.resume&&y!==(y=t.skill.name+"")&&d(a,y),e.resume){let a;for(b=t.skill.list,a=0;a<b.length;a+=1){const n=V(t,b,a);E[a]?E[a].p(e,n):(E[a]=F(n),E[a].c(),E[a].m(v,k))}for(;a<E.length;a+=1)E[a].d(1);E.length=b.length}},d(e){e&&(s(t),s(n),s(v)),g(E,e)}}}function K(e){var t;let a=e.item.details,i=[];for(let t=0;t<a.length;t+=1)i[t]=q(D(e,a,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=n()},l(e){for(let t=0;t<i.length;t+=1)i[t].l(e);t=n()},m(e,a){for(let t=0;t<i.length;t+=1)i[t].m(e,a);r(e,t,a)},p(e,n){if(e.resume){let r;for(a=n.item.details,r=0;r<a.length;r+=1){const s=D(n,a,r);i[r]?i[r].p(e,s):(i[r]=q(s),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=a.length}},d(e){g(i,e),e&&s(t)}}}function q(e){var t,a,n=e.detail+"";return{c(){t=i("span"),a=l(n),this.h()},l(e){t=o(e,"SPAN",{class:!0},!1);var r=c(t);a=m(r,n),r.forEach(s),this.h()},h(){u(t,"class","EducationItem svelte-1mofus")},m(e,n){r(e,t,n),f(t,a)},p(e,t){e.resume&&n!==(n=t.detail+"")&&d(a,n)},d(e){e&&s(t)}}}function G(e){var t,a,g,v,k,y,b,E,w,S,x,I,A=e.item.title+"",D=e.item.to+"",M=e.item.place+"",V=e.item.place+"",j=e.item.details&&K(e);return{c(){t=i("div"),a=i("span"),g=l(A),v=l(","),k=h(),y=l(D),b=l(", "),E=l(M),w=l(", "),S=l(V),x=h(),j&&j.c(),I=n(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var r=c(t);a=o(r,"SPAN",{class:!0},!1);var i=c(a);g=m(i,A),v=m(i,","),i.forEach(s),k=p(r),y=m(r,D),b=m(r,", "),E=m(r,M),w=m(r,", "),S=m(r,V),r.forEach(s),x=p(e),j&&j.l(e),I=n(),this.h()},h(){u(a,"class","Bold svelte-1mofus"),u(t,"class","svelte-1mofus")},m(e,n){r(e,t,n),f(t,a),f(a,g),f(a,v),f(t,k),f(t,y),f(t,b),f(t,E),f(t,w),f(t,S),r(e,x,n),j&&j.m(e,n),r(e,I,n)},p(e,t){e.resume&&A!==(A=t.item.title+"")&&d(g,A),e.resume&&D!==(D=t.item.to+"")&&d(y,D),e.resume&&M!==(M=t.item.place+"")&&d(E,M),e.resume&&V!==(V=t.item.place+"")&&d(S,V),t.item.details?j?j.p(e,t):((j=K(t)).c(),j.m(I.parentNode,I)):j&&(j.d(1),j=null)},d(e){e&&(s(t),s(x)),j&&j.d(e),e&&s(I)}}}function W(e){var t,a,n,g,v,k,y,b,E,w,S,x,I,A,D,M,V,j,C,P,N,$,R,L=e.item.name+"",O=e.item.position+"",T=e.item.relationship+"",Y=e.item.mobile+"",B=e.item.email+"",H=e.item.linkedin+"";return{c(){t=i("div"),a=i("div"),n=l(L),g=h(),v=i("div"),k=l(O),y=h(),b=i("div"),E=l("Relationship: "),w=l(T),S=h(),x=i("div"),I=l("Mobile: "),A=l(Y),D=h(),M=i("div"),V=l("Email: "),j=l(B),C=h(),P=i("div"),N=l("Linkedin: "),$=l(H),R=h(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var r=c(t);a=o(r,"DIV",{class:!0},!1);var i=c(a);n=m(i,L),i.forEach(s),g=p(r),v=o(r,"DIV",{class:!0},!1);var l=c(v);k=m(l,O),l.forEach(s),y=p(r),b=o(r,"DIV",{class:!0},!1);var u=c(b);E=m(u,"Relationship: "),w=m(u,T),u.forEach(s),S=p(r),x=o(r,"DIV",{class:!0},!1);var f=c(x);I=m(f,"Mobile: "),A=m(f,Y),f.forEach(s),D=p(r),M=o(r,"DIV",{class:!0},!1);var d=c(M);V=m(d,"Email: "),j=m(d,B),d.forEach(s),C=p(r),P=o(r,"DIV",{class:!0},!1);var h=c(P);N=m(h,"Linkedin: "),$=m(h,H),h.forEach(s),R=p(r),r.forEach(s),this.h()},h(){u(a,"class","Bold svelte-1mofus"),u(v,"class","Italic svelte-1mofus"),u(b,"class","svelte-1mofus"),u(x,"class","svelte-1mofus"),u(M,"class","svelte-1mofus"),u(P,"class","svelte-1mofus"),u(t,"class","Reference svelte-1mofus")},m(e,s){r(e,t,s),f(t,a),f(a,n),f(t,g),f(t,v),f(v,k),f(t,y),f(t,b),f(b,E),f(b,w),f(t,S),f(t,x),f(x,I),f(x,A),f(t,D),f(t,M),f(M,V),f(M,j),f(t,C),f(t,P),f(P,N),f(P,$),f(t,R)},p(e,t){e.resume&&L!==(L=t.item.name+"")&&d(n,L),e.resume&&O!==(O=t.item.position+"")&&d(k,O),e.resume&&T!==(T=t.item.relationship+"")&&d(w,T),e.resume&&Y!==(Y=t.item.mobile+"")&&d(A,Y),e.resume&&B!==(B=t.item.email+"")&&d(j,B),e.resume&&H!==(H=t.item.linkedin+"")&&d($,H)},d(e){e&&s(t)}}}function J(e){var t,a,n,x,D,V,C,N,T,B,H,F,K,q,J,Z,_,ee,te,ae,ne,re,se,ie,le,oe,ce,me,ue,fe,de,he=e.resume.name+"",pe=e.resume.title+"";let ge=e.contactsMap,ve=[];for(let t=0;t<ge.length;t+=1)ve[t]=L(R(e,ge,t));var ke=e.showSummary&&O(e);let ye=e.resume.skills.filter(Q),be=[];for(let t=0;t<ye.length;t+=1)be[t]=Y($(e,ye,t));let Ee=e.resume.experiences,we=[];for(let t=0;t<Ee.length;t+=1)we[t]=U(P(e,Ee,t));let Se=e.resume.skills.filter(X),xe=[];for(let t=0;t<Se.length;t+=1)xe[t]=z(j(e,Se,t));let Ie=e.resume.education,Ae=[];for(let t=0;t<Ie.length;t+=1)Ae[t]=G(M(e,Ie,t));let De=e.resume.references,Me=[];for(let t=0;t<De.length;t+=1)Me[t]=W(A(e,De,t));var Ve=[e.resume.note];let je={};for(var Ce=0;Ce<Ve.length;Ce+=1)je=v(je,Ve[Ce]);var Pe=new I({props:je});return{c(){t=i("div"),a=i("div"),n=l(he),x=h(),D=i("div"),V=l(pe),C=h(),N=i("div");for(let e=0;e<ve.length;e+=1)ve[e].c();T=h(),ke&&ke.c(),B=h(),H=i("div");for(let e=0;e<be.length;e+=1)be[e].c();F=h(),K=i("div"),q=i("div"),J=l("Work Experience"),Z=h();for(let e=0;e<we.length;e+=1)we[e].c();_=h(),ee=i("div");for(let e=0;e<xe.length;e+=1)xe[e].c();te=h(),ae=i("div"),ne=i("div"),re=l("Education"),se=h();for(let e=0;e<Ae.length;e+=1)Ae[e].c();ie=h(),le=i("div"),oe=i("div"),ce=l("References"),me=h();for(let e=0;e<Me.length;e+=1)Me[e].c();ue=h(),fe=i("div"),Pe.$$.fragment.c(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var r=c(t);a=o(r,"DIV",{class:!0},!1);var i=c(a);n=m(i,he),i.forEach(s),x=p(r),D=o(r,"DIV",{class:!0},!1);var l=c(D);V=m(l,pe),l.forEach(s),C=p(r),N=o(r,"DIV",{class:!0},!1);var u=c(N);for(let e=0;e<ve.length;e+=1)ve[e].l(u);u.forEach(s),T=p(r),ke&&ke.l(r),B=p(r),H=o(r,"DIV",{class:!0},!1);var f=c(H);for(let e=0;e<be.length;e+=1)be[e].l(f);f.forEach(s),F=p(r),K=o(r,"DIV",{class:!0},!1);var d=c(K);q=o(d,"DIV",{class:!0},!1);var h=c(q);J=m(h,"Work Experience"),h.forEach(s),Z=p(d);for(let e=0;e<we.length;e+=1)we[e].l(d);d.forEach(s),_=p(r),ee=o(r,"DIV",{class:!0},!1);var g=c(ee);for(let e=0;e<xe.length;e+=1)xe[e].l(g);g.forEach(s),te=p(r),ae=o(r,"DIV",{class:!0},!1);var v=c(ae);ne=o(v,"DIV",{class:!0},!1);var k=c(ne);re=m(k,"Education"),k.forEach(s),se=p(v);for(let e=0;e<Ae.length;e+=1)Ae[e].l(v);v.forEach(s),ie=p(r),le=o(r,"DIV",{class:!0},!1);var y=c(le);oe=o(y,"DIV",{class:!0},!1);var b=c(oe);ce=m(b,"References"),b.forEach(s),me=p(y);for(let e=0;e<Me.length;e+=1)Me[e].l(y);y.forEach(s),ue=p(r),fe=o(r,"DIV",{class:!0},!1);var E=c(fe);Pe.$$.fragment.l(E),E.forEach(s),r.forEach(s),this.h()},h(){u(a,"class","Name svelte-1mofus"),u(D,"class","Title svelte-1mofus"),u(N,"class","svelte-1mofus"),u(H,"class","svelte-1mofus"),u(q,"class","Center SectionHeader svelte-1mofus"),u(K,"class","svelte-1mofus"),u(ee,"class","svelte-1mofus"),u(ne,"class","Center SectionHeader svelte-1mofus"),u(ae,"class","svelte-1mofus"),u(oe,"class","Center SectionHeader svelte-1mofus"),u(le,"class","svelte-1mofus"),u(fe,"class","Note svelte-1mofus"),u(t,"class","Resume svelte-1mofus")},m(e,s){r(e,t,s),f(t,a),f(a,n),f(t,x),f(t,D),f(D,V),f(t,C),f(t,N);for(let e=0;e<ve.length;e+=1)ve[e].m(N,null);f(t,T),ke&&ke.m(t,null),f(t,B),f(t,H);for(let e=0;e<be.length;e+=1)be[e].m(H,null);f(t,F),f(t,K),f(K,q),f(q,J),f(K,Z);for(let e=0;e<we.length;e+=1)we[e].m(K,null);f(t,_),f(t,ee);for(let e=0;e<xe.length;e+=1)xe[e].m(ee,null);f(t,te),f(t,ae),f(ae,ne),f(ne,re),f(ae,se);for(let e=0;e<Ae.length;e+=1)Ae[e].m(ae,null);f(t,ie),f(t,le),f(le,oe),f(oe,ce),f(le,me);for(let e=0;e<Me.length;e+=1)Me[e].m(le,null);f(t,ue),f(t,fe),k(Pe,fe,null),de=!0},p(e,a){if(de&&!e.resume||he===(he=a.resume.name+"")||d(n,he),de&&!e.resume||pe===(pe=a.resume.title+"")||d(V,pe),e.contactsMap){let t;for(ge=a.contactsMap,t=0;t<ge.length;t+=1){const n=R(a,ge,t);ve[t]?ve[t].p(e,n):(ve[t]=L(n),ve[t].c(),ve[t].m(N,null))}for(;t<ve.length;t+=1)ve[t].d(1);ve.length=ge.length}if(a.showSummary?ke?ke.p(e,a):((ke=O(a)).c(),ke.m(t,B)):ke&&(ke.d(1),ke=null),e.resume){let t;for(ye=a.resume.skills.filter(Q),t=0;t<ye.length;t+=1){const n=$(a,ye,t);be[t]?be[t].p(e,n):(be[t]=Y(n),be[t].c(),be[t].m(H,null))}for(;t<be.length;t+=1)be[t].d(1);be.length=ye.length}if(e.resume){let t;for(Ee=a.resume.experiences,t=0;t<Ee.length;t+=1){const n=P(a,Ee,t);we[t]?we[t].p(e,n):(we[t]=U(n),we[t].c(),we[t].m(K,null))}for(;t<we.length;t+=1)we[t].d(1);we.length=Ee.length}if(e.resume){let t;for(Se=a.resume.skills.filter(X),t=0;t<Se.length;t+=1){const n=j(a,Se,t);xe[t]?xe[t].p(e,n):(xe[t]=z(n),xe[t].c(),xe[t].m(ee,null))}for(;t<xe.length;t+=1)xe[t].d(1);xe.length=Se.length}if(e.resume){let t;for(Ie=a.resume.education,t=0;t<Ie.length;t+=1){const n=M(a,Ie,t);Ae[t]?Ae[t].p(e,n):(Ae[t]=G(n),Ae[t].c(),Ae[t].m(ae,null))}for(;t<Ae.length;t+=1)Ae[t].d(1);Ae.length=Ie.length}if(e.resume){let t;for(De=a.resume.references,t=0;t<De.length;t+=1){const n=A(a,De,t);Me[t]?Me[t].p(e,n):(Me[t]=W(n),Me[t].c(),Me[t].m(le,null))}for(;t<Me.length;t+=1)Me[t].d(1);Me.length=De.length}var r=e.resume?y(Ve,[b(a.resume.note)]):{};Pe.$set(r)},i(e){de||(E(Pe.$$.fragment,e),de=!0)},o(e){w(Pe.$$.fragment,e),de=!1},d(e){e&&s(t),g(ve,e),ke&&ke.d(),g(be,e),g(we,e),g(xe,e),g(Ae,e),g(Me,e),S(Pe)}}}const Q=e=>"Key Projects"!==e.name,X=e=>"Key Projects"===e.name;function Z(e,t,a){let{resume:n={},showSummary:r=!1}=t;const s=["address","Phone (US)","email","linkedin"].map(e=>n.contacts.find(t=>t.name===e));return e.$set=(e=>{"resume"in e&&a("resume",n=e.resume),"showSummary"in e&&a("showSummary",r=e.showSummary)}),{resume:n,showSummary:r,contactsMap:s}}class _ extends e{constructor(e){super(),t(this,e,Z,J,a,["resume","showSummary"])}}var ee={name:"Suellan Leelawardana",title:"Enterprise Risk Management Consultant, Senior Manager",contacts:[{name:"Phone (US)",href:"tel:+16462494640",display:"+1 (646) 249-4640"},{name:"linkedin",href:"https://linkedin.com/in/suellan-leelawardana",display:"linkedin.com/in/suellan-leelawardana"},{name:"email",href:"mailto:suellan.leelawardana@gmail.com",display:"suellan.leelawardana@gmail.com"},{name:"address",display:"New York, New York"}],experiences:[{title:"Senior Manager",place:"EY",location:"Melbourne, Australia",from:"10/18",to:"present",details:["Subject Matter Resource for enterprise risk management for First Line and Second Line functions","This has involved supporting clients to develop and sustain their enterprise risk management programs, including reviewing their risk monitoring and reporting approaches, risk appetite and tolerance definition, and designing integrated risk management solutions","In this role I lead business development and sales, through building strategic relationships across multiple industries to secure future pipeline","I also lead formalised employee performance management and professional development programs, for five employees within the Risk Advisory team"]},{title:"Manager",place:"EY",location:"Melbourne, Australia",from:"10/17",to:"10/18",details:["As project manager on projects for public and private sector clients, led multiple teams to execute: enterprise risk management maturity evaluations, risk management process uplift programs, operational and strategic risk identification and assessment workshops, risk appetite definition, internal audit planning and internal audit reviews"]},{title:"Consultant - Senior Consultant",place:"EY",location:"Melbourne, Australia",from:"02/14",to:"10/17",details:["Performed internal audit reviews for public sector and private sector organizations","Conducted operational and compliance reviews to identify business improvements, and support execution of risk-based compliance programs","Documented high-quality reports for Audit Committee and Board audiences","Co-facilitated and documented risk identification and assessment workshops with Executive Management and Boards, as well as operational teams"]}],education:[{title:"Admitted as an Australian Lawyer",place:"Supreme Court of Victoria",location:"Melbourne, Australia",to:"2019"},{title:"Graduate Diploma in Legal Practice",place:"College of Law",location:"Melbourne, Australia",to:"2017"},{title:"Bachelor of Laws",place:"Australian National University",location:"Canberra, Australia",to:"2013",details:["ANU School of Law Exchange program to University of Alabama, Tuscaloosa"]},{title:"Bachelor of Finance (Major in Capital Markets)",place:"Australian National University",location:"Canberra, Australia",to:"2013"}],note:{text:"Note: I am eligible to work in the U.S. on an E-3 visa, which is a two-year visa available only to Australians and which can be renewed indefinitely. The process to obtain the visa is straightforward and is summarized ",extraText:"This visa does not require sponsorship and can be self-funded by the applicant.",linkText:"here",href:"https://static1.squarespace.com/static/5d24cbfb75f55e000100967f/t/5db43b192ca7a63a6d405c38/1572092697712/jonkarolczak.com+-+Summary+of+E-3+Visa+Process+for+Employers.pdf"},skills:[{name:"Personal profile",list:["A Senior Manager and team leader with Big Four management consulting experience, advising private and public sector organizations to:","improve, design and implement their enterprise risk management programs;","design and execute internal audit programs; and","better manage compliance to their legislative, regulatory and contractual obligations."]},{name:"Career highlights",list:["Consistently met Senior Manager business development and sales Key Performance Indicators, including for FY20. Repeatedly recognized for top performance through fast-tracked out-of-cycle promotions (Senior Consultant to Senior Manager within three years).","Consistently demonstrated ability to adapt to new contexts, by delivering positive client outcomes across four EY Risk Advisory sub-competencies: enterprise risk management, internal audit, technology risk and cybersecurity.","Maintained momentum through interstate office transfer from Canberra to Melbourne in 2014, as demonstrated by exceeding all individual Key Performance Indicators for FY15. This is despite entering a new team, advisory competency and market.","Several EY Advisory awards for high quality work, involvement in EY’s charity and volunteering foundation, and performance in pursuits.","In March 2019, admitted as an Australian Lawyer within the Australian State of Victoria."]},{name:"Key Projects",list:["Agile programme stream lead (Product Owner) for leading Health Insurer's global Information Security Transformation Programme to uplift its Cybersecurity Governance, Risk and Compliance function.","Project lead for multi-national, 40,000+ employee logistics company to develop its enterprise risk management framework, risk and internal audit operating model, and internal audit plan, involving consultation with Executive Leadership and Board.","Project lead for risk appetite definition with the Executive and Board of Australia's leading science and research organization to support effective decision-making.","Subject Matter Resource and Internal Audit lead for Internal Audit program for State government departments and public agencies.","Team member supporting delivery of a framework, to help the State Department of Education and Training to manage privacy risks associated with providing student and staff personal information to third party vendors."]}],references:[{name:"Mark Dingle",position:"Deloitte, Partner, Risk Advisory",relationship:"Supervisor",mobile:"+61 (0) 438 379 262",email:"markrdingle@gmail.com",linkedin:"linkedin.com/in/markdingle"},{name:"John Koo",position:"EY, Director, Digital Risk Advisory",relationship:"Supervisor",mobile:"+61 (0) 407 949 124",email:"john.koo@au.ey.com",linkedin:"linkedin.com/in/john-koo-70bab242"},{name:"Catherine Friday",position:"EY, Managing Partner, Oceania Government and Health Services",relationship:"Supervisor",mobile:"+61 (0) 438 379 262",email:"catherine.friday@au.ey.com",linkedin:"linkedin.com/in/catherine-friday"},{name:"Sonya Mischefski",position:"Bupa, Delivery Manager, Security Transformation Programme",relationship:"Client",mobile:"+61 (0) 424 593 430",email:"sonya.mischefski@bupa.com.au",linkedin:"linkedin.com/in/sonya-mischefski-55b76866"}]};function te(e){var t,a=new _({props:{resume:ee}});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,n){k(a,e,n),t=!0},p:x,i(e){t||(E(a.$$.fragment,e),t=!0)},o(e){w(a.$$.fragment,e),t=!1},d(e){S(a,e)}}}export default class extends e{constructor(e){super(),t(this,e,null,te,a,[])}}
