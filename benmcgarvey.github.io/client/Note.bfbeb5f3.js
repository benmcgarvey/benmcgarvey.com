import{S as e,i as t,s as x,e as s,t as a,x as r,c as n,a as i,b as h,y as f,d as l,f as T,g as c,h as o,j as k,n as d}from"./index.8f88dd1c.js";function u(e){var t,x,u,p,v,m,j,E=e.extraText||"";return{c(){t=s("p"),x=a(e.text),u=r(),p=s("a"),v=a(e.linkText),m=r(),j=a(E),this.h()},l(s){t=n(s,"P",{class:!0},!1);var a=i(t);x=h(a,e.text),u=f(a),p=n(a,"A",{href:!0,class:!0},!1);var r=i(p);v=h(r,e.linkText),r.forEach(l),m=f(a),j=h(a,E),a.forEach(l),this.h()},h(){T(p,"href",e.href),T(p,"class","svelte-s85een"),T(t,"class","Note svelte-s85een")},m(e,s){c(e,t,s),o(t,x),o(t,u),o(t,p),o(p,v),o(t,m),o(t,j)},p(e,t){e.text&&k(x,t.text),e.linkText&&k(v,t.linkText),e.href&&T(p,"href",t.href),e.extraText&&E!==(E=t.extraText||"")&&k(j,E)},i:d,o:d,d(e){e&&l(t)}}}function p(e,t,x){let{text:s,linkText:a,href:r,extraText:n}=t;return e.$set=(e=>{"text"in e&&x("text",s=e.text),"linkText"in e&&x("linkText",a=e.linkText),"href"in e&&x("href",r=e.href),"extraText"in e&&x("extraText",n=e.extraText)}),{text:s,linkText:a,href:r,extraText:n}}class v extends e{constructor(e){super(),t(this,e,p,u,x,["text","linkText","href","extraText"])}}export{v as N};