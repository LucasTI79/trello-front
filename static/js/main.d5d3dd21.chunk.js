(this["webpackJsonptrello-front"]=this["webpackJsonptrello-front"]||[]).push([[0],{53:function(e,n,t){"use strict";t.r(n);var r,c,a=t(1),i=t.n(a),o=t(24),s=t.n(o),d=t(2),l=t(3),u=l.b.header(r||(r=Object(d.a)(["\n  display:flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  top:0;\n"]))),p=t(0);function x(){return Object(p.jsx)(u,{children:Object(p.jsxs)("svg",{width:"62",id:"logo-slideworks",x:"0px",y:"0px",viewBox:"0 0 172.914 86.451",children:[Object(p.jsx)("title",{children:"Logotipo da Slideworks"}),Object(p.jsx)("path",{fill:"#fff",d:"M129.688,0H43.226C19.353,0,0,19.352,0,43.225S19.353,86.45,43.226,86.45h86.462 c23.87,0,43.225-19.352,43.225-43.225S153.558,0,129.688,0 M129.688,13.726c16.265,0,29.502,13.234,29.502,29.499 c0,16.269-13.237,29.506-29.502,29.506H43.226c-16.266,0-29.503-13.237-29.503-29.506c0-16.265,13.237-29.499,29.503-29.499H129.688 z"}),Object(p.jsx)("path",{fill:"#fff",d:"M64.842,43.225c0-11.937-9.677-21.613-21.616-21.613c-11.938,0-21.613,9.676-21.613,21.613 c0,11.94,9.676,21.62,21.613,21.62C55.166,64.845,64.842,55.166,64.842,43.225"})]})})}var f,j,b,h,m,O,g,v,w,y,k,F=Object(l.a)(c||(c=Object(d.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  body {\n    align-items: center;\n    background-color: #0D0C1D;\n    color: #EFFFFA;\n    display: flex;\n    font-family: Roboto;\n    height: 100vh;\n    justify-content: center;\n    text-rendering: optimizeLegibility;\n  }\n  textarea:focus, input:focus{\n    outline: none;\n  }\n  "]))),C=t(13),E=t(5),S=t.n(E),D=t(6),z=t(7),M=t(28),R=t.n(M).a.create({baseURL:"https://trello-api-slideworks.herokuapp.com/"}),L=new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i),T=l.b.input(f||(f=Object(d.a)(["\n  width:300px;\n  height: 35px;\n  background-color:#f1f1f1;\n  border-radius:10px;\n  margin-top:2%;\n  @media(max-width: 800px) {\n    width:100%;\n  }\n"]))),B=l.b.label(j||(j=Object(d.a)(["\n  font-weight:bold;\n"]))),A=l.b.div(b||(b=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media(max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),H=l.b.div(h||(h=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content:space-around;\n  width: 60vw;\n  @media(max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),I=l.b.div(m||(m=Object(d.a)(["\n  margin-right: 5%;\n"]))),J=l.b.div(O||(O=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 3% 0 8% 0;\n"]))),N=l.b.div(g||(g=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 400px;\n  margin-top:5%;\n  @media(max-width: 800px) {\n    flex-direction: row;\n    justify-content:space-around;\n  }\n"]))),P=l.b.div(v||(v=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 5%;\n"]))),W=l.b.div(w||(w=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 250px;\n"]))),U=l.b.div(y||(y=Object(d.a)(["\n  background-color: #EFFFFA;\n  color: #0D0C1D;\n  font-size: 0.75rem;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 0 5px 5px 0; \n"]))),$=l.b.button(k||(k=Object(d.a)(["\n  color:#d2d2d2;\n  border-radius:5px;\n  padding:5px;\n  font-weight:bold;\n  background-color:#6B61ED;\n"])));function q(){var e=[],n=i.a.useRef(""),t=i.a.useRef(""),r=i.a.useRef(""),c=i.a.useState(0),a=Object(z.a)(c,2),o=a[0],s=a[1],d=i.a.useState([]),l=Object(z.a)(d,2),u=l[0],x=l[1],f=i.a.useState([]),j=Object(z.a)(f,2),b=j[0],h=j[1],m=i.a.useState([]),O=Object(z.a)(m,2),g=O[0],v=O[1],w=i.a.useState(!1),y=Object(z.a)(w,2),k=y[0],F=y[1];i.a.useLayoutEffect((function(){Object(D.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("labels");case 2:n=e.sent,v(n.data),F(!0);case 5:case"end":return e.stop()}}),e)})))()}),[]);var E=function(){var c=Object(D.a)(S.a.mark((function c(a){var i;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),(i={name:n.current.value,email:t.current.value,message:r.current.value,dropdown:o,tagsSelected:u,checkitemsSelected:b}).name){c.next=6;break}return alert("Por favor preencha o campo nome"),n.current.focus(),c.abrupt("return");case 6:if(L.exec(i.email)){c.next=10;break}return alert("Por favor preencha o campo de email corretamente"),t.current.focus(),c.abrupt("return");case 10:if(i.message){c.next=14;break}return alert("Por favor preencha o campo mensagem"),r.current.focus(),c.abrupt("return");case 14:R.post("cards",{name:i.name,desc:"".concat(i.email,"\n").concat(i.message)},{params:{idList:i.dropdown}}).then(function(){var e=Object(D.a)(S.a.mark((function e(n){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.data.idCard,u.forEach(function(){var e=Object(D.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.post("labels/add",{value:n,idCard:t}).catch((function(e){return alert("Erro ao adicionar as tags")}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=4,R.post("checklists",{idCard:t}).then((function(e){b.forEach(function(){var n=Object(D.a)(S.a.mark((function n(t){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.post("checkitems",null,{params:{idChecklist:e.id,name:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return alert("Erro ao enviar formul\xe1rio")})),alert("Dados enviados com sucesso!"),n.current.value="",t.current.value="",r.current.value="",s(0),x(e),h(e);case 22:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return k?Object(p.jsxs)(A,{children:[Object(p.jsx)("h1",{children:"Formul\xe1rio"}),Object(p.jsxs)(H,{children:[Object(p.jsxs)(I,{children:[Object(p.jsxs)(J,{children:[Object(p.jsx)(B,{htmlFor:"txtName",children:"Nome"}),Object(p.jsx)(T,{placeholder:"John Doe",id:"txtName",ref:n,type:"text",autoComplete:"false"})]}),Object(p.jsxs)(J,{children:[Object(p.jsx)(B,{htmlFor:"txtEmail",children:"Email"}),Object(p.jsx)(T,{placeholder:"email@domain.com",id:"txtEmail",ref:t,type:"email"})]}),Object(p.jsxs)(J,{children:[Object(p.jsx)(B,{htmlFor:"txtMessage",children:"Mensagem"}),Object(p.jsx)("textarea",{id:"txtMessage",rows:"9",placeholder:"Type something",style:{resize:"vertical",backgroundColor:"#f1f1f1"},ref:r})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)(J,{children:[Object(p.jsx)("span",{children:"\xa0"}),Object(p.jsx)(N,{children:[{id:0,option:"Op\xe7\xe3o 1"},{id:1,option:"Op\xe7\xe3o 2"},{id:2,option:"Op\xe7\xe3o 3"}].map((function(e){return Object(p.jsxs)(P,{onClick:function(){return function(e){if(b.findIndex((function(n){return n===e}))>=0){var n=b.filter((function(n){return n!==e}));h(n)}else h([].concat(Object(C.a)(b),[e]))}(e.id)},children:[Object(p.jsx)("input",{checked:!!b.includes(e.id),id:"".concat(e.option),type:"checkbox"}),Object(p.jsx)(B,{htmlFor:"".concat(e.option),children:e.option})]},e.id)}))})]}),Object(p.jsxs)(J,{children:[Object(p.jsx)(B,{children:"Dropdown"}),Object(p.jsxs)("select",{value:o,onChange:function(e){return s(e.target.value)},children:[Object(p.jsx)("option",{value:"0",children:"Sem experi\xeancia"}),Object(p.jsx)("option",{value:"1",children:"1-2 anos de experi\xeancia"}),Object(p.jsx)("option",{value:"2",children:"3-5 anos de experi\xeancia"}),Object(p.jsx)("option",{value:"3",children:"+ 5 anos de experi\xeancia"})]})]}),Object(p.jsxs)(J,{children:[Object(p.jsx)("h2",{style:{marginTop:-1},children:"Tags"}),Object(p.jsx)(W,{children:g.map((function(e){return Object(p.jsx)(U,{style:u.includes(e.id)?{backgroundColor:"#6B61ED",color:"#EFFFFA",fontWeight:"bold",textTransform:"uppercase"}:{backgroundColor:"#d2d2d2",fontWeight:"bold",textTransform:"uppercase"},onClick:function(){return function(e){if(u.findIndex((function(n){return n===e}))>=0){var n=u.filter((function(n){return n!==e}));x(n)}else x([].concat(Object(C.a)(u),[e]))}(e.id)},children:Object(p.jsx)("span",{children:e.name})},e.id)}))})]}),Object(p.jsx)($,{type:"reset",onClick:E,children:"Enviar"})]})]})]}):Object(p.jsx)("h1",{children:"loading..."})}var G=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F,{}),Object(p.jsx)(x,{}),Object(p.jsx)(q,{})]})};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d5d3dd21.chunk.js.map