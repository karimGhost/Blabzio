"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[3251],{4405:function(e,t,n){n.d(t,{a:function(){return i}});var a=n(7294),l=(n(6118),n(1019),n(4866));n(9319),n(6267),n(6953);const r={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function i(){l.Z.initializeApp(r,"app05");const e=l.Z.app("app05"),t=e,{0:n,1:i}=(0,a.useState)(null),{0:s,1:o}=(0,a.useState)();return(0,a.useEffect)((()=>{const t=e.auth().onAuthStateChanged((e=>{e?(i(e),o(!0)):(i(null),o(!1))}));return()=>t()}),[]),{apps:t,user:n,setUser:i,app05:e,loading:s,signInWithEmailAndPassword:function(t,n){return e.auth().signInWithEmailAndPassword(t,n)},signOut:function(){return i(""),e.auth().signOut()}}}},7477:function(e,t,n){n.r(t);var a=n(5785),l=n(7294),r=n(5212),i=n.n(r),s=n(4866),o=n(3416),c=n(9583),u=n(4405);const m={apiKey:"AIzaSyChFGTB5YEugUKho-YqcWVZtKJG3PIrtt0",authDomain:"thewall-10a4a.firebaseapp.com",databaseURL:"https://thewall-10a4a-default-rtdb.firebaseio.com",projectId:"thewall-10a4a",storageBucket:"thewall-10a4a.appspot.com",messagingSenderId:"221023885061",appId:"1:221023885061:web:bc550d03edd2fbf60e496c",measurementId:"G-7V80059NF7"};t.default=()=>{const{user:e,setUser:t,loading:n,signOut:r}=(0,u.a)();s.Z.initializeApp(m,"app212121");const d=s.Z.app("app212121"),{0:p,1:f}=(0,l.useState)(!1),{0:h,1:b}=(0,l.useState)(null),{0:v,1:g}=(0,l.useState)([]),{0:E,1:y}=(0,l.useState)(""),k=(0,l.useRef)(null),w=(0,l.useRef)(null);(0,l.useEffect)((()=>{const e=d.ref("comments");return e.on("value",(e=>{const t=e.val();if(t){const e=Object.keys(t).map((e=>({id:e,...t[e]})));g(e)}})),()=>e.off("value")}),[]);return l.createElement("div",{className:"container mt-4"},l.createElement("h1",null," welll should iot function fnfnkingr"),l.createElement("video",{className:"video-player",ref:w,src:h,controls:!0}),l.createElement("div",null,l.createElement("button",{onClick:async()=>{if(p)k.current.stopRecording((()=>{const e=k.current.getBlob(),t=URL.createObjectURL(e);b(t)}));else{const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0}),t=new(i())(e,{type:"video",mimeType:"video/webm"});k.current=t,t.startRecording()}f(!p)},className:"btn btn-primary mr-2"},p?l.createElement(c.JuG,null):l.createElement(c.gmG,null)),h&&l.createElement("button",{onClick:()=>{if(!e)return;const t=(0,o.x0)(),n=e.uid;d.ref("videos").child(t).set({videoUrl:h,userId:n,likes:0,dislikes:0,comments:[]}),f(!1),b(null)},className:"btn btn-success"},l.createElement(c.l_A,null)," Publish")),l.createElement("div",null,l.createElement("h2",null,"Comments"),l.createElement("div",{className:"comment-section"},v.map((e=>l.createElement("div",{key:e.id},l.createElement("p",null,e.text),l.createElement("div",null,l.createElement("button",{onClick:()=>(e=>{const t=v.map((t=>t.id===e?{...t,likes:t.likes+1}:t));g(t),d.ref("comments").child(e).update({likes:s.Z.database.ServerValue.increment(1)})})(e.id)},l.createElement(c.spm,null)," ",e.likes),l.createElement("button",{onClick:()=>(e=>{const t=v.map((t=>t.id===e?{...t,dislikes:t.dislikes+1}:t));g(t),d.ref("comments").child(e).update({dislikes:s.Z.database.ServerValue.increment(1)})})(e.id)},l.createElement(c.bGJ,null)," ",e.dislikes),l.createElement("button",{onClick:()=>(e=>{const t=v.map((t=>t.id===e?{...t,showReplies:!t.showReplies}:t));g(t)})(e.id)},l.createElement(c.Bjt,null)," ",e.replies.length," Replies")),e.replies.length>0&&l.createElement("div",null,e.replies.map((e=>l.createElement("p",{key:e.id},e.text)))),e.showReplies&&l.createElement("div",null,l.createElement("input",{type:"text",value:E,onChange:e=>y(e.target.value),placeholder:"Reply to this comment"}),l.createElement("button",{onClick:()=>((e,t)=>{const n=v.map((n=>n.id===e?{...n,replies:[].concat((0,a.Z)(n.replies),[{id:(0,o.x0)(),text:t}])}:n));g(n),d.ref("comments").child(e).child("replies").push({id:(0,o.x0)(),text:t})})(e.id,E)},l.createElement(c.Bjt,null)," Reply"))))),l.createElement("div",null,l.createElement("input",{type:"text",value:E,onChange:e=>y(e.target.value),placeholder:"Add a comment"}),l.createElement("button",{onClick:()=>{if(e&&""!==E.trim()){const t=(0,o.x0)(),n=e.uid,a={text:E,userId:n,likes:0,dislikes:0,replies:[]};d.ref("comments").child(t).set(a),y("")}}},"Add Comment")))))}},7090:function(e,t,n){n.d(t,{w_:function(){return c}});var a=n(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(l),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},i.apply(this,arguments)},s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};function o(e){return e&&e.map((function(e,t){return a.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return a.createElement(u,i({attr:i({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var n,l=e.attr,r=e.size,o=e.title,c=s(e,["attr","size","title"]),u=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,c,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==r?a.createElement(r.Consumer,null,(function(e){return t(e)})):t(l)}},6118:function(e,t,n){n(1435),n(4444),n(389),n(3333),n(8463)},3416:function(e,t,n){n.d(t,{x0:function(){return a}});let a=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")}}]);
//# sourceMappingURL=component---src-pages-news-video-uploader-js-c48c4e26c6eed1fe75a2.js.map