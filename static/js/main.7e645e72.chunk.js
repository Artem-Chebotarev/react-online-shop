(this["webpackJsonpreact-online-shop"]=this["webpackJsonpreact-online-shop"]||[]).push([[0],{17:function(e,t,n){e.exports={overlay:"Cart_overlay__1xerd",overlayVisible:"Cart_overlayVisible__1FNVZ",cart:"Cart_cart__3wtkF",items:"Cart_items__2K-vD"}},18:function(e,t,n){e.exports={card:"Card_card__35wN0",favourite:"Card_favourite__2vU3w",plus:"Card_plus__3MF9E"}},30:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(23),i=n.n(a),s=(n(30),n(31),n(11)),o=n.n(s),l=n(15),j=n(4),d=n(7),u=n(9),b=n(0),h=Object(c.createContext)(),f=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(j.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(!1),f=Object(j.a)(s,2),m=f[0],x=f[1],O=Object(c.useState)([]),p=Object(j.a)(O,2),C=p[0],v=p[1],g=Object(c.useState)([]),N=Object(j.a)(g,2),y=N[0],w=N[1],k=Object(c.useState)(""),I=Object(j.a)(k,2),S=I[0],T=I[1],B=Object(c.useState)(!0),L=Object(j.a)(B,2),_=L[0],E=L[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,c,r,a,s,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([fetch("https://6117822b30022f0017a05e3f.mockapi.io/cart"),fetch("https://6117822b30022f0017a05e3f.mockapi.io/favourites"),fetch("https://6117822b30022f0017a05e3f.mockapi.io/items")]);case 3:return t=e.sent,n=Object(j.a)(t,3),c=n[0],r=n[1],a=n[2],e.next=10,c.json();case 10:return s=e.sent,e.next=13,r.json();case 13:return l=e.sent,e.next=16,a.json();case 16:d=e.sent,E(!1),v(s),w(l),i(d),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)(h.Provider,{value:{searchValue:S,items:a,isCartOpened:m,itemsInCart:C,itemsInFavourites:y,isLoading:_,onChangeSearchInput:function(e){T(e.target.value)},clearSearchInput:function(){T("")},handleCart:function(){x(!m)},addToCart:function(e){var t=e.id,n=C.find((function(e){return Number(e.parentId)===Number(t)}));n?(v((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t)}))})),fetch("https://6117822b30022f0017a05e3f.mockapi.io/cart/".concat(n.id),{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({id:n.id})})):(v((function(t){return[].concat(Object(u.a)(t),[e])})),fetch("https://6117822b30022f0017a05e3f.mockapi.io/cart",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return v((function(t){return t.map((function(t){return t.parentId===e.parentId?Object(d.a)(Object(d.a)({},t),{},{id:e.id}):t}))}))})).catch((function(){return alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")})))},removeFromCart:function(e){v((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))})),fetch("https://6117822b30022f0017a05e3f.mockapi.io/cart/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({id:e})})},addToFavourites:function(e){var t=e.id,n=y.find((function(e){return Number(e.parentId)===Number(t)}));n?(w((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t)}))})),fetch("https://6117822b30022f0017a05e3f.mockapi.io/favourites/".concat(n.id),{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({id:n.id})})):(w((function(t){return[].concat(Object(u.a)(t),[e])})),fetch("https://6117822b30022f0017a05e3f.mockapi.io/favourites",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return w((function(t){return t.map((function(t){return t.parentId===e.parentId?Object(d.a)(Object(d.a)({},t),{},{id:e.id}):t}))}))})).catch((function(){return alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b")})))},isItemAdded:function(e){return C.some((function(t){return Number(t.parentId)===Number(e)}))},isItemFavourite:function(e){return y.some((function(t){return Number(t.parentId)===Number(e)}))},setItemsInCart:v,setIsCartOpened:x},children:t})},m=function(){return Object(c.useContext)(h)},x=function(){var e=m(),t=e.itemsInCart,n=e.setItemsInCart,c=t.reduce((function(e,t){return e+t.price}),0);return{itemsInCart:t,setItemsInCart:n,totalPrice:c}};var O=function(e){var t=e.image,n=e.title,c=e.description,r=m().setIsCartOpened;return Object(b.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(b.jsx)("img",{className:"mb-20",width:"120px",src:t,alt:"Empty"}),Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{className:"opacity-6",children:c}),Object(b.jsxs)("button",{onClick:function(){return r(!1)},className:"greenButton",children:[Object(b.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},p=n(17),C=n.n(p),v=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))};var g=function(e){var t=e.handleCart,n=e.opened,r=x(),a=r.itemsInCart,i=r.setItemsInCart,s=r.totalPrice,d=m().removeFromCart,u=Object(c.useState)(!1),h=Object(j.a)(u,2),f=h[0],p=h[1],g=Object(c.useState)(null),N=Object(j.a)(g,2),y=N[0],w=N[1],k=Object(c.useState)(!1),I=Object(j.a)(k,2),S=I[0],T=I[1];function B(){return(B=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!0),fetch("https://6117822b30022f0017a05e3f.mockapi.io/orders",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({items:a})}).then((function(e){return e.json()})).then((function(e){return w(e.id)})).catch((function(){return alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437")})),p(!0),t=0;case 4:if(!(t<a.length)){e.next=13;break}return n=a[t],e.next=8,fetch("https://6117822b30022f0017a05e3f.mockapi.io/cart/".concat(n.id),{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({id:n.id})});case 8:return e.next=10,v(500);case 10:t++,e.next=4;break;case 13:i([]),T(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"".concat(C.a.overlay," ").concat(n?C.a.overlayVisible:""),children:Object(b.jsxs)("div",{className:C.a.cart,children:[Object(b.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(b.jsx)("img",{className:"cu-p",onClick:t,src:"img/btn-remove.svg",alt:"Close"})]}),a.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"items flex",children:a.map((function(e,t){return Object(b.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl)},className:"cartItemImg"}),Object(b.jsxs)("div",{className:"mr-20 flex",children:[Object(b.jsx)("p",{className:"mb-5",children:e.title}),Object(b.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(b.jsx)("img",{className:"removeBtn",onClick:function(){return d(e.id)},src:"img/btn-remove.svg",alt:"Remove"})]},t)}))}),Object(b.jsxs)("div",{className:"cartTotalBlock",children:[Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(b.jsx)("div",{}),Object(b.jsxs)("b",{children:[s," \u0440\u0443\u0431."]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%"}),Object(b.jsx)("div",{}),Object(b.jsxs)("b",{children:[Math.round(s/100*5)," \u0440\u0443\u0431."]})]})]}),Object(b.jsxs)("button",{disabled:S,onClick:function(){return B.apply(this,arguments)},className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(b.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(b.jsx)(O,{title:f?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:f?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(y," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:f?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},N=n(12);var y=function(e){var t=e.handleCart,n=x().totalPrice;return Object(b.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(b.jsx)(N.b,{to:"",children:Object(b.jsxs)("div",{className:"d-flex align-center",children:[Object(b.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"Logo"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(b.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(b.jsxs)("ul",{className:"d-flex",children:[Object(b.jsxs)("li",{className:"mr-30 cu-p",onClick:t,children:[Object(b.jsxs)("svg",{className:"mr-15",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("path",{d:"M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9117 7.99735 16.5454 7.54548 16.5454C7.09361 16.5454 6.72729 16.9117 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z",stroke:"#9B9B9B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9117 16.9973 16.5454 16.5455 16.5454C16.0936 16.5454 15.7273 16.9117 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z",stroke:"#9B9B9B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091",stroke:"#9B9B9B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(b.jsxs)("span",{children:[n," \u0440\u0443\u0431."]})]}),Object(b.jsx)("li",{className:"mr-20 cu-p",children:Object(b.jsx)(N.b,{to:"favourites",children:Object(b.jsx)("svg",{width:"22",height:"19",viewBox:"0 0 22 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z",fill:"#9B9B9B"})})})}),Object(b.jsx)("li",{children:Object(b.jsx)(N.b,{to:"orders",children:Object(b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z",fill:"#9B9B9B"})})})})]})]})},w=n(2),k=n(25),I=n(18),S=n.n(I);var T=function(e){var t=e.loading,n=e.id,c=e.title,r=e.price,a=e.imageUrl,i=e.addToCart,s=e.addToFavourites,o=m(),l=o.isItemAdded,j=o.isItemFavourite,d={id:n,parentId:n,title:c,price:r,imageUrl:a};return Object(b.jsx)("div",{className:S.a.card,children:t?Object(b.jsxs)(k.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(b.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(b.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(b.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(b.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(b.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(b.jsxs)(b.Fragment,{children:[s&&Object(b.jsx)("div",{className:S.a.favourite,children:Object(b.jsx)("img",{onClick:function(){s(d)},src:j(n)?"img/liked.svg":"img/unliked.svg",alt:"Like"})}),Object(b.jsx)("img",{width:133,height:112,src:a,alt:"Sneaker"}),Object(b.jsx)("h5",{children:c}),Object(b.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(b.jsxs)("div",{className:"d-flex flex-column",children:[Object(b.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(b.jsxs)("b",{children:[r," \u0440\u0443\u0431."]})]}),i&&Object(b.jsx)("img",{className:S.a.plus,onClick:function(){i(d)},src:l(n)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})};var B=function(){var e=m(),t=e.isLoading,n=e.items,c=e.addToCart,r=e.addToFavourites,a=e.searchValue,i=e.onChangeSearchInput,s=e.clearSearchInput;return Object(b.jsxs)("div",{className:"content p-40",children:[Object(b.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(b.jsx)("h1",{children:a?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(a,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(b.jsxs)("div",{className:"search-block",children:[Object(b.jsx)("img",{src:"img/search.svg",alt:"Search"}),a&&Object(b.jsx)("img",{className:"clear cu-p",onClick:s,src:"img/btn-remove.svg",alt:"Clear"}),Object(b.jsx)("input",{onChange:i,value:a,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(b.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=n.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return(t?Object(u.a)(Array(8)):e).map((function(e,n){return Object(b.jsx)(T,Object(d.a)(Object(d.a)({},e),{},{loading:t,addToCart:function(e){return c(e)},addToFavourites:function(e){return r(e)}}),n)}))}()})]})};var L=function(){var e=m(),t=e.addToCart,n=e.addToFavourites,r=Object(c.useState)([]),a=Object(j.a)(r,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){fetch("https://6117822b30022f0017a05e3f.mockapi.io/favourites").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(b.jsxs)("div",{className:"content p-40",children:[Object(b.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(b.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(b.jsx)("div",{className:"d-flex flex-wrap",children:i.length?i.map((function(e,c){return Object(b.jsx)(T,Object(d.a)({addToCart:function(e){return t(e)},isItemFavourite:!0,addToFavourites:function(e){return n(e)}},e),c)})):Object(b.jsx)("p",{children:"\u0412 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0430\u0445 \u043d\u0435\u0442 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})})]})};var _=function(){var e=Object(c.useState)(!0),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){r(!0),fetch("https://6117822b30022f0017a05e3f.mockapi.io/orders").then((function(e){return e.json()})).then((function(e){return o(e.map((function(e){return e.items})).flat())})).catch((function(){return alert("\u041d\u0435 \u0434\u0443\u043b\u0430\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b")})),r(!1)}),[]),Object(b.jsxs)("div",{className:"content p-40",children:[Object(b.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(b.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),s.length?Object(b.jsx)("div",{className:"d-flex flex-wrap",children:(n?Object(u.a)(Array(8)):s).map((function(e,t){return Object(b.jsx)(T,Object(d.a)({loading:n},e),t)}))}):Object(b.jsx)("p",{children:"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"})]})};var E=function(){var e=m(),t=e.isCartOpened,n=e.handleCart;return Object(b.jsx)("div",{className:"wrapper clear",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)(g,{handleCart:n,opened:t}),Object(b.jsx)(y,{handleCart:n}),Object(b.jsx)(w.a,{exact:!0,path:"",children:Object(b.jsx)(B,{})}),Object(b.jsx)(w.a,{exact:!0,path:"favourites",children:Object(b.jsx)(L,{})}),Object(b.jsx)(w.a,{exact:!0,path:"orders",children:Object(b.jsx)(_,{})})]})})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{children:Object(b.jsx)(E,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7e645e72.chunk.js.map