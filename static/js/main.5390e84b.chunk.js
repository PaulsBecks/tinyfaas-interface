(this["webpackJsonptinyfaas-interface"]=this["webpackJsonptinyfaas-interface"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(8),i=n.n(s),l=(n(15),n(3)),o=n.n(l),j=n(5),u=n(2);function d(e){var t=e.setTinyFaasIp,n=Object(r.useState)(""),a=Object(u.a)(n,2),s=a[0],i=a[1];return Object(c.jsxs)("div",{className:"tfi-form",children:[Object(c.jsx)("h2",{children:"Set Ip"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"ip",children:"Host"}),Object(c.jsx)("input",{name:"ip",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(c.jsx)("button",{onClick:function(){return t(s)},children:"Save"})]})}var b=n(4),h=n(7);function p(e){var t=e.upload,n=e.uploadWaiting,a=Object(r.useState)({name:"",threads:2,environment:{},subfolder_path:"",base64_encoded:!1}),s=Object(u.a)(a,2),i=s[0],l=s[1],o=function(e,t){return l(Object(h.a)(Object(h.a)({},i),{},Object(b.a)({},t,e.target.value)))};return Object(c.jsxs)("div",{className:"tfi-form",children:[Object(c.jsx)("h2",{children:"Deploy new function"}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"url",children:"URL"}),Object(c.jsx)("input",{name:"url",value:i.url,onChange:function(e){return o(e,"url")}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{value:i.name,onChange:function(e){return o(e,"name")}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"subfolder_path",children:"Subfolder path"}),Object(c.jsx)("input",{value:i.subfolder_path,onChange:function(e){return o(e,"subfolder_path")}})]}),n?Object(c.jsx)("div",{class:"loader"}):Object(c.jsx)("button",{onClick:function(){return t(i)},children:"Upload"})]})]})}var f=n(9);var O=function(){var e=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),c=Object(u.a)(n,2),a=c[0],s=c[1];return[a,function(t){try{var n=t instanceof Function?t(a):t;s(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){console.log(c)}}]}(),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(u.a)(s,2),l=i[0],b=i[1],h=Object(r.useState)([]),O=Object(u.a)(h,2),x=O[0],v=O[1],m=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n+":8080/list");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,v(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,fetch(n+":8080/uploadFromUrl",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify(t)});case 4:m(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:b(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n+":8080/delete",{method:"POST",mode:"cors",redirect:"follow",body:t});case 3:m(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(!n)return[];m()}),[n]),n?Object(c.jsxs)("div",{className:"tfi-page-wrapper",children:[Object(c.jsx)("nav",{className:"tfi-navigation",children:Object(c.jsx)("h1",{children:"TinyFaas Interface"})}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Connected to tinyFaas at ",Object(c.jsx)("span",{className:"tfi-host-label",children:n})]}),Object(c.jsx)("button",{onClick:function(){return a()},children:"disconnect"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Functions Running"}),0===x.length?Object(c.jsx)("p",{children:"No functions are running currently."}):"",Object(c.jsx)("div",{className:"tfi-functions-card-wrapper",children:x.map((function(e){return Object(c.jsxs)("div",{className:"tfi-function-card",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Name:"})," ",e.name]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Threads:"})," ",e.threads]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Resource:"})," ",e.resource]}),Object(c.jsx)("button",{onClick:function(){return S(e.name)},children:"delete"})]})}))})]}),Object(c.jsx)("div",{children:Object(c.jsx)(p,{upload:g,uploadWaiting:l})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Public functions"}),Object(c.jsx)("div",{className:"tfi-functions-card-wrapper",children:f.map((function(e){return Object(c.jsxs)("div",{className:"tfi-function-card",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Name:"})," ",e.name]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"URL:"})," ",e.url]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Threads:"})," ",e.threads]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Env:"})," ",JSON.stringify(e.environment)]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"subfolder_path:"})," ",e.subfolder_path]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Base64 encoded:"})," ",e.base64_encoded?"True":"False"]}),l?Object(c.jsx)("div",{class:"loader"}):Object(c.jsx)("button",{onClick:function(){return g(e)},children:"deploy"})]})}))})]})]}):Object(c.jsx)(d,{setTinyFaasIp:a})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),x()},9:function(e){e.exports=JSON.parse('[{"url":"https://github.com/PaulsBecks/binance-trading-pair-price-faas/archive/main.zip","name":"ETHUSDT","threads":2,"environment":{"TRADING_PAIR":"ETHUSDT"},"subfolder_path":"/binance-trading-pair-price-faas-main","base64_encoded":false},{"url":"https://github.com/PaulsBecks/binance-trading-pair-price-faas/archive/main.zip","name":"BTCUSDT","threads":2,"environment":{"TRADING_PAIR":"BTCUSDT"},"subfolder_path":"/binance-trading-pair-price-faas-main","base64_encoded":false}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.5390e84b.chunk.js.map