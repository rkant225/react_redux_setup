(this.webpackJsonpredux_setup=this.webpackJsonpredux_setup||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(8),i=n.n(o),u=(n(33),n(34),n(4)),a=n(0),s=Object(u.b)((function(e){var t;return console.log("LOADER",e),{isLoading:null===e||void 0===e||null===(t=e.loaderModel)||void 0===t?void 0:t.isLoading}}),(function(e){return{}}))((function(e){var t=e.isLoading;return Object(a.jsx)(a.Fragment,{children:t&&Object(a.jsx)("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",backgroundColor:"rgba(50,50,50,.8)",color:"white"},children:"Loading..."})})})),d=(n.p,"INCREMENT"),l="DECREMENT",j=Object(u.b)((function(e){return console.log(e),{countModel:e.countModel}}),(function(e){return{increaseCounter:function(t){e(function(e){return{type:d,payload:{by:e}}}(t))},decreaseCounter:function(t){e(function(e){return{type:l,payload:{by:e}}}(t))}}}))((function(e){var t=e.countModel,n=e.decreaseCounter,c=e.increaseCounter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Redux Based Counter"}),Object(a.jsx)("button",{onClick:function(){n(1)},children:"-"}),Object(a.jsx)("span",{children:Object(a.jsx)("b",{children:t.count})}),Object(a.jsx)("button",{onClick:function(){c(1)},children:"+"}),Object(a.jsx)("hr",{})]})})),b=n(12),O=n.n(b),h=n(21),f=n(22),x=n.n(f).a.create({baseURL:"https://random-data-api.com/api/"}),p="FETCH_USER",v="ADD",g="EDIT",y="DELETE",C="START_LOADING",m="STOP_LOADING",E=Object(u.b)((function(e){return{userModel:e.userModel}}),(function(e){return{fetchUser:function(){e(function(){var e=Object(h.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:C}),e.next=3,x.get("cannabis/random_cannabis");case 3:n=e.sent,t({type:p,payload:{user:n.data}}),t({type:m});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){console.log(e);var t=e.userModel,n=e.fetchUser;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Redux thunk based API Call"}),Object(a.jsx)("button",{onClick:function(){n()},children:"Fetch User"}),Object(a.jsx)("div",{style:{margin:"auto",textAlign:"initial",width:"max-content"},children:Object(a.jsx)("pre",{children:JSON.stringify(t.user,null,4)})}),Object(a.jsx)("hr",{})]})})),w=n(23),L=n(24),M=n(28),A=n(26),R=(r.a.Component,n(27),Object(u.b)((function(e){return{store:e}}),(function(e){return{}}))((function(e){console.log(e);var t=e.store;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Redux Store"}),Object(a.jsx)("div",{style:{margin:"auto",textAlign:"initial",width:"max-content"},children:Object(a.jsx)("pre",{children:JSON.stringify(t,null,4)})}),Object(a.jsx)("hr",{})]})})));var k=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(s,{}),Object(a.jsx)(R,{}),Object(a.jsx)(j,{}),Object(a.jsx)(E,{})]})},D=n(5),N=n(25),T=n(2),I={count:0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(T.a)(Object(T.a)({},e),{},{count:e.count+1});case l:return Object(T.a)(Object(T.a)({},e),{},{count:e.count-1});default:return e}},_={isLoading:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(T.a)(Object(T.a)({},e),{},{isLoading:!0});case m:return Object(T.a)(Object(T.a)({},e),{},{isLoading:!1});default:return e}},J={user:{}},F=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(T.a)(Object(T.a)({},t),{},{user:(null===n||void 0===n||null===(e=n.payload)||void 0===e?void 0:e.user)||{}});case v:case g:case y:return Object(T.a)({},t);default:return t}},B=Object(D.b)({countModel:S,userModel:F,loaderModel:U}),G=Object(D.c)(B,Object(D.a)(N.a));i.a.render(Object(a.jsx)(u.a,{store:G,children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.0efc464a.chunk.js.map