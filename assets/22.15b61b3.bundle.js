"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22],{81(g,b,a){a.r(b),a.d(b,{default:()=>E});var h,i,j=a(1),d=a(2),e=a(4),k=a(83),l=a(3),f=Object.assign||function(d){for(var a=1,e=arguments.length;a<e;a++){var b=arguments[a];for(var c in b)(0,l.fO)(b,c)&&(d[c]=b[c])}return d};let m=f;var n=a(88),o=a(5);function p(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}var c=function(a){var i=a.className,j=a.actions,l=a.fields,b=a.header,q=a.csrfToken,c=a.formComponent,s=a.hasError,u=a.unHandle,t=(0,n.Z)(a,["className","actions","fields","header","csrfToken","formComponent","hasError","unHandle"]),f=null,g=null;s&&(g="error"),b&&(f=d.createElement(e.h4,{style:r.header},b));var h=d.createElement(e.iX,null,d.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",defaultValue:q}),f,d.createElement(e.VY,{style:r.content},l.map(function(a,f){var g,h,i=[a.id],j=null,k=null;a.errors&&(g=d.createElement(e.v0,{messageType:"error"},d.createElement(e.dk,null,a.errors)));var b=a.input;if(b){var c=b.type;if("hidden"===c)return d.createElement("input",m({},b,{type:"hidden"}));"password"!==c||b.autoComplete||(b.autoComplete="current-password");var n=(0,e.Jx)({checkbox:"checkbox"===c,required:b.required,error:a.errors});j=d.createElement(e.gN,m({key:f+"-field-"+(0,o.ZP)(b,["name"]),fieldClassName:n,label:a.label,atom:"input"},b))}else i.push("field"),k=d.createElement("label",null,a.label);var l=null;if(a.others){var p=u(a);l=a.others.map(function(a,b){return p(a,b)})}return a.helps&&(h=d.createElement(e.dk,{style:r.help},a.helps)),d.createElement(e.iX,{className:i.join(" "),key:f,style:r.row},k,j,l,h,g)})),d.createElement(e.aV,{type:"actions",style:r.actions},j));return c?(0,d.cloneElement)(c,function(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?p(b,!0).forEach(function(a){(0,k.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):p(b).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}({},t,{className:(0,e.Jx)(g,i)}),h):h};c.defaultProps={formComponent:d.createElement(e.l0,null),unHandle:function(a){return function(a,f){var g=a.nodeName,h=a.src,i=a.outerHTML;if("SCRIPT"!==g.toUpperCase())return d.createElement(e.ER,{key:f},i);var b=document,c=b.createElement("script");return c.src=h,b.body.appendChild(c),null}},method:"post"};let q=c;var r={header:{textAlign:"center"},content:{marginBottom:10},actions:{textAlign:"right"},help:{fontSize:"0.7rem",color:"#999"},row:{marginBottom:15,paddingBottom:15,borderBottom:"1px solid #eee"}};a(7);var s=Object.keys,t=function(a){var b=[];return a.querySelectorAll("li").forEach(function(a){return b.push(a.innerText)}),b},u=function(a,e){var b={},c=a.querySelector("label");c&&(b.label=c.innerText,b.id=c.getAttribute("for"),e&&a.removeChild(c));var f=a.querySelector(".errorlist");f&&(b.errors=t(f),e&&a.removeChild(f));var d=a.querySelector(".helptext");if(d){var g=d.querySelector("ul");b.helps=g?t(g):[d.innerText],e&&a.removeChild(d)}return b},v={maxlength:"maxLength",autofocus:"autoFocus",value:"defaultValue",autocomplete:"autoComplete"},w=function(b,k,e,l){b.input={};var c=!0,f=!1,g=void 0;try{for(var h,d=e.attributes[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var i=h.value,j=i.nodeValue,a=i.nodeName;v[a]&&(a=v[a]),b.input[a]=!j||j}}catch(m){f=!0,g=m}finally{try{c||null==d.return||d.return()}finally{if(f)throw g}}return l&&k.removeChild(e),b},x=function(a,c){var b=c.querySelectorAll("li > *");return b.length&&(a.others=Array.from(b)),a},y=function(b){var f,a=document.createElement("div");a.innerHTML=b;var c=Array.from(a.querySelectorAll("div > *")),d=!1,e=[];return c.forEach(function(a){if("LI"===a.nodeName.toUpperCase()){(f=u(a,!0)).errors&&(d=!0);var b=a.querySelector("input");b&&w(f,a,b,!0),x(f,a),e.push(f)}}),{fields:e,hasError:d}};let z=function(a){var b={};return s(a).forEach(function(c){return b[c]=y(a[c])}),b};var A=a(17),B=a(54),C=a(0),D=function(a){console.log(a);var b=a.form,c=a.csrfToken,d=z({form:b}).form;return(0,C.jsx)(q,(0,j.Z)({csrfToken:c,style:F.form,actions:h||(h=(0,C.jsx)(e.zx,{type:"submit",children:"O.K."}))},d))};let E=function(a){return(0,C.jsx)(B.Z,{body:(0,C.jsx)(A.z1,{initStates:["form","csrfToken"],children:i||(i=(0,C.jsx)(D,{}))})})};var F={form:{maxWidth:"50%",padding:50,background:"#ffe",margin:"0 auto"}}}}])