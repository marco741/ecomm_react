(this.webpackJsonpecomm_react=this.webpackJsonpecomm_react||[]).push([[0],{21:function(e,t,a){e.exports=a(43)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),i=(a(26),a(14)),l=(a(27),a(28),a(29),a(7));var m=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"header__container"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(l.b,{to:"/"},"E-COMMERCE")),c.a.createElement("div",{className:"header__menu"},c.a.createElement(l.b,{to:"/"},"Home"),c.a.createElement(l.b,{to:"/shop"},"Shop"),c.a.createElement(l.b,{to:"/carrello"},"Carrello"))))};var u=function(e){return c.a.createElement("div",{className:"carrello__item"},c.a.createElement("p",{className:"carrello__item__counter"},"Quantit\xe0 prodotto: ".concat(e.quantity)),c.a.createElement("div",null,c.a.createElement("button",{className:"carrello__item__add",onClick:function(){return e.buyItem(e.index)}},"+"),c.a.createElement("button",{className:"carrello__item__remove",onClick:function(){return e.removeItem(e.index)}},"-")))};var s=function(e){return c.a.createElement("div",{className:"carrello__totale"},"Totale: ".concat(e.totale," \u20ac"),c.a.createElement("button",{className:"carrello__totale__checkout",type:"submit",onClick:function(){return e.checkout()}},"Checkout"))};var d=function(e){var t=e.items;return console.log(e.totale),c.a.createElement("div",{className:"carrello"},c.a.createElement("div",{className:"carrello__item__container"},t.map((function(t,a){return c.a.createElement(u,{index:a,key:a,quantity:t.quantity,buyItem:e.buyItem,removeItem:e.removeItem})}))),c.a.createElement(s,{checkout:e.checkout,totale:e.totale}))};var p=function(e){var t=e.item,a=t.img,n=t.text,r=t.price,o=t.quantity;return c.a.createElement("div",{className:"shop__item"},c.a.createElement("img",{src:a,alt:"img"}),c.a.createElement("p",null,"Descrizione: ".concat(n)),c.a.createElement("p",{className:"shop__item__price"},"Price: ".concat(r," \u20ac")),c.a.createElement("button",{className:"shop__item__add",onClick:function(){return e.buyItem(e.index)}},"Aggiungi al carrello"),c.a.createElement("div",{className:"shop__item__box"},c.a.createElement("p",null,"Quantit\xe0 prodotto".concat(e.index+1,": ").concat(o)),c.a.createElement("button",{className:"shop__item__remove",onClick:function(){return e.removeItem(e.index)}},"-")))};var _=function(e){var t=e.items;return c.a.createElement("div",{className:"shop"},t.map((function(t,a){return c.a.createElement(p,{index:a,key:a,item:t,buyItem:e.buyItem,removeItem:e.removeItem})})))},E=a(20),v=["https://source.unsplash.com/collection/190727/1000x400","https://source.unsplash.com/collection/190728/1000x400"],h={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,scale:.4,arrows:!0},f=function(){return c.a.createElement("div",{className:"slide-container"},c.a.createElement(E.Zoom,h,v.map((function(e,t){return c.a.createElement("img",{key:t,style:{width:"100%"},src:e,alt:"img"})}))))},y=a(6);var g=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([{img:"https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",text:"Questa \xe8 la prima descrizione",price:"10.00",quantity:0},{img:"https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",text:"Questa \xe8 la seconda descrizione",price:"20.00",quantity:0},{img:"https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",text:"Questa \xe8 la terza descrizione",price:"14.99",quantity:0},{img:"https://i.kym-cdn.com/entries/icons/original/000/021/807/4d7.png",text:"Questa \xe8 la quarta descrizione",price:"7.89",quantity:0}]),u=Object(i.a)(o,2),s=u[0],p=u[1],E=function(e){var t=s.map((function(t,a){return a===e&&(t.quantity++,console.log("".concat(a,": ").concat(t.quantity))),t}));p(t),h()},v=function(e){var t=s.map((function(t,a){return a===e&&t.quantity>0&&(t.quantity--,console.log("".concat(a,": ").concat(t.quantity))),t}));p(t),h()},h=function(){var e=0;s.forEach((function(t){e+=t.quantity*t.price})),e=Math.abs(e.toFixed(2)),r(e)},g=function(){var e=s.map((function(e){return e.quantity=0,e}));p(e),r(0)};return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement(m,null),c.a.createElement(y.a,{exact:!0,path:"/",render:function(){return c.a.createElement(f,null)}}),c.a.createElement(y.a,{path:"/carrello",render:function(){return c.a.createElement(d,{totale:a,items:s,buyItem:E,removeItem:v,checkout:g})}}),c.a.createElement(y.a,{path:"/shop",render:function(){return c.a.createElement(_,{items:s,buyItem:E,removeItem:v})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5e11da30.chunk.js.map