(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={message:"Message_message__3WBqd",person:"Message_person__1XwJD",time:"Message_time__1o58L",bubble:"Message_bubble__eYe_P",bubbleLeft:"Message_bubbleLeft__3MkSY",img:"Message_img__2ZG8w",aimg:"Message_aimg__3WHz3",aperson:"Message_aperson__2vAtd"}},,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1sYM4",spanInput:"SuperInputText_spanInput__28niB",errorInput:"SuperInputText_errorInput__SDXMT",error:"SuperInputText_error__2ZEwo",spanClass:"SuperInputText_spanClass__3cRop"}},,,function(e,a,t){e.exports={someClass:"Greeting_someClass__1foWw",error:"Greeting_error__1OFl-",errorMessage:"Greeting_errorMessage__26o-i",count:"Greeting_count__39Yjm"}},function(e,a,t){e.exports={body:"Error404_body__12Nv8",h:"Error404_h__1lZUP",message:"Error404_message__30tTY",error404:"Error404_error404__3Ya6q"}},,,,,,,function(e,a,t){e.exports={default:"SuperButton_default__38rKK",superButton:"SuperButton_superButton__3v8Nt"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__2A3Ni",title:"Affairs_title__1Oo08",body:"Affairs_body__1Jw9V"}},function(e,a,t){e.exports={column:"HW4_column__2Niqp"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__bk_C0",spanClassName:"SuperCheckbox_spanClassName__22cbd"}},,,,function(e,a,t){e.exports={App:"App_App__Uff3t"}},function(e,a,t){e.exports={navmenu:"HW5_navmenu__2_Tpk"}},,function(e,a,t){e.exports={superSelect:"SuperSelect_superSelect__2i0yw"}},function(e,a,t){e.exports={superRadio:"SuperRadio_superRadio__M_VId"}},function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(36),t(26)),u=t.n(o),s=t(7),i=t(27),m=t.n(i);var p=function(){return r.a.createElement("div",null,"// add NavLinks",r.a.createElement("nav",{className:m.a.navmenu},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/pre-junior"},"PreJunior"),r.a.createElement(s.b,{to:"/junior"},"Junior"),r.a.createElement(s.b,{to:"/juniorplus"},"JuniorPlus")))},d=t(1),E=t(3),f=t.n(E);function _(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("img",{className:f.a.img,src:e.avatar}),r.a.createElement("div",{className:f.a.bubble},r.a.createElement("div",{className:f.a.bubbleLeft},r.a.createElement("p",{className:f.a.person},e.name),r.a.createElement("div",null,r.a.createElement("p",null,e.message,r.a.createElement("span",{className:f.a.time},e.time))))))}function h(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("img",{className:f.a.aimg,src:e.avatar}),r.a.createElement("div",{className:f.a.bubble},r.a.createElement("div",{className:f.a.bubbleLeft},r.a.createElement("p",{className:f.a.aperson},e.name),r.a.createElement("div",null,r.a.createElement("p",null,e.message,r.a.createElement("span",{className:f.a.time},e.time))))))}var g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Masha",v="Hello, Vasya!",C="22:00",k="https://upload.wikimedia.org/wikipedia/commons/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg",N="Mark",O="Ok! Say your price.",y="07:00";var j=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:g,name:b,message:v,time:C}),r.a.createElement("hr",null),r.a.createElement(h,{avatar:k,name:N,message:O,time:y}),r.a.createElement("hr",null))},S=t(2);var w=function(e){return r.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},x=t(4),M=t(19),T=t.n(M),A=function(e){var a=e.red,t=e.className,n=Object(x.a)(e,["red","className"]),l="".concat(a?T.a.superButton:T.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var I=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(A,{red:!0,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(A,{red:!0,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(A,{red:!0,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(A,{red:!0,onClick:function(){e.setFilter("low")}},"Low"))},B=t(20),F=t.n(B),P=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(n.useState)(P),a=Object(S.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(S.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("div",{className:F.a.title},"homeworks 2"),r.a.createElement("div",{className:F.a.body},r.a.createElement(I,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}})))},R=t(14),W=t(11),H=t.n(W),U=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.setOnBlur,u=l?H.a.error:H.a.someClass;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onClick:o,onChange:t,className:u}),r.a.createElement("span",{className:H.a.errorMessage},l),r.a.createElement(A,{red:!0,onClick:n},"+"),r.a.createElement("span",{className:H.a.count},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",c))},L=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(S.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(S.a)(s,2),m=i[0],p=i[1],d=a.length;return r.a.createElement(U,{name:o,setNameCallback:function(e){u(e.currentTarget.value),p("")},addUser:function(){o.length>0&&(t(o),alert("Hello  ".concat(o," !"))),p("ERROR"),u("")},error:m,setOnBlur:function(){p("")},totalUsers:d})},Y=t(44);var G=function(){var e=Object(n.useState)([]),a=Object(S.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(L,{users:t,addUserCallback:function(e){var a={_id:Object(Y.a)(),name:e};l([a].concat(Object(R.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=t(8),D=t.n(K),Z=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(x.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(D.a.error," ").concat(u||""),m=" ".concat(D.a.superInput," ").concat(c?D.a.errorInput:""," ").concat(o||"","  ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},q=t(21),X=t.n(q),V=t(22),z=t.n(V),$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var Q=function(){var e=Object(n.useState)(""),a=Object(S.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},u=Object(n.useState)(!1),s=Object(S.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:X.a.column},r.a.createElement(Z,{value:t,onChangeText:l,onEnter:o,error:c,className:X.a.input}),r.a.createElement(A,{red:!0,onClick:o},"delete "),r.a.createElement($,{checked:i,onChangeChecked:m},"some text "),r.a.createElement($,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ee=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(x.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(S.a)(o,2),s=u[0],i=u[1],m=l||{},p=m.children,d=m.onDoubleClick,E=m.className,f=Object(x.a)(m,["children","onDoubleClick","className"]),_="".concat(D.a.spanClass," ").concat(E);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(Z,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),d&&d(e)},className:_},f),p||c.value))};function ae(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function te(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}ae("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(n.useState)(""),a=Object(S.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ee,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(A,{red:!0,onClick:function(){ae("editable-span-value",t)}},"save"),r.a.createElement(A,{red:!0,onClick:function(){l(te("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var re=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(J,null),r.a.createElement(G,null),r.a.createElement(Q,null),r.a.createElement(ne,null))},le=t(12),ce=t.n(le);var oe=function(){return r.a.createElement("div",{className:ce.a.body},r.a.createElement("h1",{className:ce.a.h},"Nice Try, Kid."),r.a.createElement("a",{className:ce.a.message},"Page not found!"),r.a.createElement("a",{className:ce.a.error404},"404"))},ue=t(29),se=t.n(ue),ie=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(x.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{value:e,key:a},e)})):[];console.log(l);return r.a.createElement("select",Object.assign({className:se.a.superSelect,onChange:function(e){n&&n(e.currentTarget.value),t&&t(e)}},l),c)},me=t(30),pe=t.n(me),de=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(x.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.currentTarget.value),l&&l(e)}),u=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{className:pe.a.superRadio,type:"radio",onChange:o,checked:e===n,name:a,value:e}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},Ee=["x","y","z"];var fe=function(){var e=Object(n.useState)(Ee[1]),a=Object(S.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ie,{options:Ee,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(de,{name:"radio",options:Ee,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},_e=function(e,a){switch(a.type){case"sort":return Object(R.a)(e).sort((function(e,t){return("up"===a.payload?e.name<=t.name:e.name>=t.name)?-1:1}));case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},he=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ge=function(){var e=Object(n.useState)(he),a=Object(S.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name,", "),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement(A,{red:!0,onClick:function(){return l(_e(he,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(A,{red:!0,onClick:function(){return l(_e(he,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(A,{red:!0,onClick:function(){return l(_e(he,{type:"check",payload:18}))}},"check 18+"),r.a.createElement("hr",null),r.a.createElement("hr",null))};function be(){return r.a.createElement("div",null,r.a.createElement(fe,null),r.a.createElement(ge,null))}function ve(){return r.a.createElement("div",null,"JuniorPlus")}var Ce="/pre-junior",ke="/junior",Ne="/juniorplus";var Oe=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:Ce})}}),r.a.createElement(d.b,{path:Ce,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(d.b,{path:ke,render:function(){return r.a.createElement(be,null)}}),r.a.createElement(d.b,{path:Ne,render:function(){return r.a.createElement(ve,null)}}),"// add routes",r.a.createElement(d.b,{render:function(){return r.a.createElement(oe,null)}})))};var ye=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(p,null),r.a.createElement(Oe,null)))};var je=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ye,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.7b6e864b.chunk.js.map