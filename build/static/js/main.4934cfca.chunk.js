(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{225:function(e,t){},227:function(e,t){},237:function(e,t){},239:function(e,t){},266:function(e,t){},268:function(e,t){},269:function(e,t){},274:function(e,t){},276:function(e,t){},282:function(e,t){},284:function(e,t){},303:function(e,t){},315:function(e,t){},318:function(e,t){},346:function(e,t,n){"use strict";n.r(t);var c=n(50),i=n(51),s=n(55),o=n(54),a=n(0),j=n.n(a),u=n(13),r=n.n(u),l=n(156),b=n(17),O=n(53),d=n(84),h=function(e){var t=Object(a.useState)({}),n=Object(b.a)(t,2),c=n[0],i=n[1];return{handleChange:function(e){e.persist(),console.log("CHANGE",e.target.name),i((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t.preventDefault(),e(c)},values:c}},m=n(352),f=n(351),x=n(21),p=n(2),g=j.a.createContext();var v=function(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(3),o=Object(b.a)(s,2),j=o[0],u=o[1],r=Object(a.useState)(""),l=Object(b.a)(r,2),O=l[0],d=l[1];return Object(p.jsx)(g.Provider,{value:{hide:c,numItems:j,sort:O,setHide:i,setNumItems:u,setSort:d},children:e.children})},C=(n(220),function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),s=Object(b.a)(i,2),o=s[0],j=s[1],u=h((function(e){console.log(e),e.id=Object(m.a)(),e.complete=!1,c([].concat(Object(l.a)(n),[e]))})),r=u.handleChange,O=u.handleSubmit,d=Object(a.useContext)(g),v=Object(a.useState)(0),C=Object(b.a)(v,2),I=C[0],S=C[1],y=Object(a.useState)(d.numItems),k=Object(b.a)(y,2),T=k[0],A=k[1];return Object(a.useEffect)((function(){var e=n.filter((function(e){return!e.complete}));j(e)}),[n]),Object(a.useEffect)((function(){S(0),A(d.numItems)}),[d.numItems]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsxs)("h1",{children:["To Do List: ",o.length," items pending"]})}),Object(p.jsxs)("form",{onSubmit:O,children:[Object(p.jsx)("h2",{children:"Add To Do Item"}),Object(p.jsxs)(f.c,{children:[Object(p.jsx)("span",{children:"To Do Item"}),Object(p.jsx)("input",{onChange:r,name:"text",type:"text",placeholder:"Item Details"})]}),Object(p.jsxs)(f.c,{children:[Object(p.jsx)("span",{children:"Assigned To"}),Object(p.jsx)("input",{onChange:r,name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(p.jsxs)(f.c,{children:[Object(p.jsx)("span",{children:"Difficulty"}),Object(p.jsx)("input",{onChange:r,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]}),Object(p.jsx)(f.c,{children:Object(p.jsx)(f.a,{type:"submit",children:"Add Item"})}),Object(p.jsx)(f.c,{children:Object(p.jsx)(f.d,{onChange:function(){d.setHide(!d.hide)},children:" Hide Completed Tasks "})})]}),function(){var e=o.slice(I,T);return console.log(o),console.log(e,I,T),e}().map((function(e,t){return Object(p.jsx)(f.b,{interactive:!0,elevation:x.a.TWO,children:!1===d.hide||!1===e.complete?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:e.text}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(p.jsx)("p",{}),Object(p.jsxs)("div",{onClick:function(){return function(e){var t=n.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));c(t)}(e.id)},children:["Complete: ",e.complete.toString()]}),Object(p.jsx)("hr",{})]}):null},Object(m.a)())})),Object(p.jsx)(f.a,{onClick:function(){I>0&&(S(I-d.numItems),A(T-d.numItems))},children:"Previous"}),Object(p.jsx)(f.a,{onClick:function(){T<=o.length&&(S(I+d.numItems),A(T+d.numItems))},children:"NEXT"})]})}),I=(n(345),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(v,{children:Object(p.jsx)(C,{})})}}]),n}(j.a.Component)),S=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(I,{})}}]),n}(j.a.Component),y=document.getElementById("root");r.a.render(Object(p.jsx)(S,{}),y)}},[[346,1,2]]]);
//# sourceMappingURL=main.4934cfca.chunk.js.map