(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,c,t){},46:function(e,c,t){},79:function(e,c,t){},80:function(e,c,t){},81:function(e,c,t){},82:function(e,c,t){"use strict";t.r(c);var s=t(3),n=t(37),j=t.n(n),a=(t(45),t.p+"static/media/logo.6ce24c58.svg"),i=(t(46),t(1)),l=function(){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("img",{src:a,className:"header__logo",alt:"logo"}),Object(i.jsx)("h1",{className:"header__title",children:"#ChatWithMarta"}),Object(i.jsx)("img",{src:a,className:"header__logo header__logo--bottom",alt:"logo"})]})},r=t(14),b=t(10),o=t(38),O=t.n(o),d=(t(79),t(0)),x=t(2),h="\u041a \u043d\u0430\u043c \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u0442\u0441\u044f",m="\u041d\u0430\u0441 \u043f\u043e\u043a\u0438\u0434\u0430\u0435\u0442",u={reg:Object(i.jsx)(x.m,{}),wink:Object(i.jsx)(x.n,{}),laugh:Object(i.jsx)(x.j,{}),rofl:Object(i.jsx)(x.f,{}),kiss:Object(i.jsx)(x.i,{}),love:Object(i.jsx)(x.e,{}),tongue:Object(i.jsx)(x.g,{}),rolling:Object(i.jsx)(x.k,{}),flushed:Object(i.jsx)(x.d,{}),sad:Object(i.jsx)(x.l,{}),angry:Object(i.jsx)(x.c,{}),heart:Object(i.jsx)(x.h,{})},f=function(){var e=Object(s.useState)(null),c=Object(b.a)(e,2),t=c[0],n=c[1],j=Object(s.useState)(null),a=Object(b.a)(j,2),l=a[0],o=a[1],f=Object(s.useState)(0),_=Object(b.a)(f,2),g=_[0],p=_[1],v=Object(s.useState)([]),N=Object(b.a)(v,2),k=N[0],C=N[1],w=Object(s.useState)(""),y=Object(b.a)(w,2),S=y[0],D=y[1];Object(s.useEffect)((function(){var e=O()();return n(e),e.on("message",(function(e){p(e)})),e.on("name",(function(e){C([].concat(Object(r.a)(k),[{name:e,text:h}]))})),e.on("msg",(function(e){C([].concat(Object(r.a)(k),[e]))})),e.on("smile",(function(e){C([].concat(Object(r.a)(k),[e]))})),e.on("leave",(function(e){C([].concat(Object(r.a)(k),[{name:e,text:m}]))})),function(){return e.disconnect()}}),[k]);var F=Object(s.useCallback)((function(e){e.preventDefault(),D(e.target.value)}),[]),J=Object(s.useCallback)((function(e){e.preventDefault(),l&&(console.log(e.target),t.emit("smile",{name:l,smile:e.target.id}))}),[t,l]),E=Object(s.useCallback)((function(e){if(e.preventDefault(),!l)return t.emit("name",S),o(S),void D("");t.emit("msg",{name:l,text:S}),D("")}),[l,t,S]);return Object(i.jsxs)("section",{className:"chat",children:[Object(i.jsxs)("div",{className:"chat__wrapper",children:[Object(i.jsx)("div",{className:"chat__icon",children:Object(i.jsxs)("p",{children:["Online: ",Object(i.jsx)("span",{children:g})]})}),Object(i.jsxs)("div",{className:"chat__dashboard",children:[Object(i.jsxs)("form",{className:"chat__form",onSubmit:E,children:[Object(i.jsx)("input",{type:"text",placeholder:l?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435":"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?",value:S,required:!0,onChange:F}),Object(i.jsx)("button",{className:"chat__button",type:"submit",children:l?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c":"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0447\u0430\u0442"})]}),Object(i.jsx)("div",{className:"chat__smiles",children:Object(i.jsxs)(d.b.Provider,{value:{className:"chat__smile"},children:[Object(i.jsx)("span",{id:"reg",onClick:J,children:Object(i.jsx)(x.m,{})}),Object(i.jsx)("span",{id:"wink",onClick:J,children:Object(i.jsx)(x.n,{})}),Object(i.jsx)("span",{id:"laugh",onClick:J,children:Object(i.jsx)(x.j,{})}),Object(i.jsx)("span",{id:"rofl",onClick:J,children:Object(i.jsx)(x.f,{})}),Object(i.jsx)("span",{id:"kiss",onClick:J,children:Object(i.jsx)(x.i,{})}),Object(i.jsx)("span",{id:"love",onClick:J,children:Object(i.jsx)(x.e,{})}),Object(i.jsx)("span",{id:"tongue",onClick:J,children:Object(i.jsx)(x.g,{})}),Object(i.jsx)("span",{id:"rolling",onClick:J,children:Object(i.jsx)(x.k,{})}),Object(i.jsx)("span",{id:"flushed",onClick:J,children:Object(i.jsx)(x.d,{})}),Object(i.jsx)("span",{id:"sad",onClick:J,children:Object(i.jsx)(x.l,{})}),Object(i.jsx)("span",{id:"angry",onClick:J,children:Object(i.jsx)(x.c,{})}),Object(i.jsx)("span",{id:"heart",onClick:J,children:Object(i.jsx)(x.h,{})})]})})]})]}),Object(i.jsxs)("ul",{className:"chat__messages",children:[0===k.length&&Object(i.jsx)("li",{className:"chat__message",children:"\u0412 \u0447\u0430\u0442\u0435 \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u043e."}),k.map((function(e,c){return Object(i.jsx)("li",{className:"chat__message ".concat(e.text===h||e.text===m?"chat__message--server":""),children:e.smile?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("span",{children:[e.name,":"]})," ",u[e.smile]]}):e.text===h||e.text===m?Object(i.jsxs)(i.Fragment,{children:[e.text," ",Object(i.jsx)("span",{children:e.name})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("span",{children:[e.name,":"]})," ",e.text]})},c+1)}))]})]})},_=t(39),g=t(40),p=(t(80),function(){return Object(i.jsxs)("footer",{className:"footer",children:[Object(i.jsxs)("div",{className:"footer__copyright",children:[Object(i.jsxs)("p",{children:["made with ",Object(i.jsx)(_.a,{className:"footer__icon"})," by ",Object(i.jsx)("b",{children:"Julia Nabiulina"})]}),Object(i.jsx)("p",{children:"\xa9 2021"})]}),Object(i.jsxs)("div",{className:"footer__created",children:[Object(i.jsx)("p",{children:"created with:"}),Object(i.jsx)(x.a,{className:"footer__icon"}),Object(i.jsx)(x.b,{className:"footer__icon"}),Object(i.jsx)(g.a,{className:"footer__icon"})]})]})}),v=(t(81),function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(l,{}),Object(i.jsx)(f,{}),Object(i.jsx)(p,{})]})});j.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.dfa00134.chunk.js.map