(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a,r,i=n(1),o=n.n(i),c=n(18),s=n.n(c),b=(n(37),n(28)),l=n(19),u=n(20),d=n(30),m=n(29),x=n(31),h=n(11),f=n(12),p=f.a.div(a||(a=Object(h.a)(["\nwidth: 900px;\nbackground: #FFFFFF;\nbox-shadow: 0px 4px 10px #2196f3;\nmargin: 20px auto;\npadding: 25px;\n"]))),j=f.a.h2(r||(r=Object(h.a)(["\nmargin-bottom: 25px;\n"]))),g=n(2);var O=function(e){var t=e.title;return Object(g.jsx)(j,{children:t})},v=n(21),y=n(22),w=n(4);var C=Object(w.a)("ul",{target:"e1f359252"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),S=Object(w.a)("li",{target:"e1f359251"})({name:"rfc8ve",styles:"display:flex;justify-content:space-between;align-items:center;margin-bottom:25px;max-width:450px;& svg{width:18px;height:18px;}"}),k=Object(w.a)("button",{target:"e1f359250"})({name:"7smd10",styles:"display:flex;align-items:center;justify-content:center;min-width:200px;padding:2px 32px;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.15);border-radius:4px;border-style:none;cursor:pointer;font-weight:bold;font-size:16px;line-height:1.88;letter-spacing:0.06em;color:#ffffff;background-color:#2196f3;& svg{color:#fff;height:18px;width:18px;margin-right:10px;}"});var z=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(g.jsx)(C,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(g.jsxs)(S,{children:[Object(g.jsx)(v.a,{}),a,": ",r,Object(g.jsxs)(k,{onClick:function(){return n(t)},children:[Object(g.jsx)(y.a,{}),"Delete"]})]},t)}))})},F=n(25),A=n(27);var L=Object(w.a)("form",{target:"eh9hzte3"})(""),D=Object(w.a)("label",{target:"eh9hzte2"})({name:"1bxhhbb",styles:"display:flex;flex-direction:column;max-width:400px;margin-bottom:25px"}),J=Object(w.a)("input",{target:"eh9hzte1"})({name:"1n2s3mw",styles:"border:1px solid lightblue;border-radius:4px;font-size:20px;&:focus{outline:none;border:1px solid #2196f3;}"}),N=Object(w.a)("button",{target:"eh9hzte0"})({name:"1vnx97q",styles:"display:flex;align-items:center;justify-content:center;margin-bottom:25px;min-width:200px;padding:2px 32px;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.15);border-radius:4px;border-style:none;cursor:pointer;font-weight:bold;font-size:16px;line-height:1.88;letter-spacing:0.06em;color:#ffffff;background-color:#2196f3;& svg{height:18px;width:18px;margin-right:10px;}"});function V(e){var t=e.onSubmit;return Object(g.jsx)(A.a,{initialValues:{name:"",number:""},validate:function(e){var t={};return e.name?e.number?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(e.name)?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(e.number)||(t.number="\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"):t.name="\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.":t.number="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":t.name="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",t},onSubmit:function(e,n){var a=n.setSubmitting,r=n.resetForm;t(e),a(!1),r()},children:function(e){var t=e.values,n=e.errors,a=e.touched,r=e.handleChange,i=e.handleSubmit,o=e.isSubmitting;return Object(g.jsxs)(L,{onSubmit:i,children:[Object(g.jsxs)(D,{children:[" Name",Object(g.jsx)(J,{type:"text",name:"name",onChange:r,value:t.name})]}),n.name&&a.name&&n.name,Object(g.jsxs)(D,{children:[" Number",Object(g.jsx)(J,{type:"tel",name:"number",onChange:r,value:t.number})]}),n.number&&a.number&&n.number,Object(g.jsxs)(N,{type:"submit",disabled:o,children:[Object(g.jsx)(F.a,{}),"Add contact"]})]})}})}var Z=function(e){var t=e.value,n=e.onChange;return Object(g.jsxs)(D,{children:["Find contacts by name",Object(g.jsx)(J,{type:"text",value:t,onChange:n})]})},E=n(26),q=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:E,filter:""},e.addContact=function(t){var n=t.name,a=t.number;if(e.state.contacts.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts"));else{var r={id:Object(x.a)(5),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(b.a)(t))}}))}},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContact=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContact();return Object(g.jsxs)(p,{children:[Object(g.jsx)(O,{title:"Phonebook"}),Object(g.jsx)(V,{onSubmit:this.addContact}),Object(g.jsx)(Z,{value:e,onChange:this.changeFilter}),Object(g.jsx)(O,{title:"Contacts"}),Object(g.jsx)(z,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(i.Component);s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8c3ed70d.chunk.js.map