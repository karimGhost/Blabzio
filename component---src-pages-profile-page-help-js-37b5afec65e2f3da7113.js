"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[4831],{1204:function(e,a,t){t.r(a),t.d(a,{Head:function(){return i},default:function(){return o}});var l=t(7294),r=t(4866),n=t(4405),m=t(3869),s=(t(3977),t(8665),t(7500),t(7043));const c={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function o(e){r.Z.initializeApp(c,"app014");const a=r.Z.app("app014"),{user:t,setUser:o,loading:i,signOut:d}=(0,n.a)(),u=(a.auth(),a.database()),{0:p,1:E}=(0,l.useState)(""),{0:b,1:f}=(0,l.useState)([]),{0:v,1:N}=(0,l.useState)(m.Z),{0:y,1:h}=(0,l.useState)(!1);(0,l.useEffect)((()=>{a.auth().onAuthStateChanged((e=>{e&&(o(e),u.ref("users/"+e.uid).on("value",(e=>{e.val()&&(N(e.val().profileImg),E(e.val().language),f(e.val().favorites))})))}))}),[]),(0,l.useEffect)((()=>{t&&a.database().ref("profiles/"+t.uid).on("value",(e=>{if(console.log(JSON.stringify(e.val())),e.val())if("object"==typeof e.val()){const a=e.val();N(a.profileImg)}else N(e.val());else console.log("Snapshot value is null or undefined")}))}),[t]),console.log("ìtsb "+v),(0,l.useEffect)((()=>{let e=document.getElementById("#va");t&&e.addEventListener("mouseover",(()=>{alert("h"),document.querySelector(".profileimg").classNameNameList.add("propo")}))}),[]);const g=e.actives;e.setBu,e.bu;return l.createElement("div",null,!t&&!g&&l.createElement("img",{src:v,className:"round dr mt-2",style:{borderRadius:"50%"},height:"50",alt:"profile",loading:"lazy"}),l.createElement("div",{style:{height:"100%",overflowY:"scroll"},className:"{"+(y&&"darken")+" 'Bgg' }"},l.createElement("div",{class:"container-xl px-4 mt-4"},l.createElement(s.default,{setDarks:h}),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-xl-4"},l.createElement("div",{className:"card mb-4 mb-xl-0"},l.createElement("div",{className:"card-header"},"Profile Picture"),l.createElement("div",{className:"card-body text-center"},l.createElement("img",{className:"img-account-profile rounded-circle mb-2",src:v,alt:""}),l.createElement("div",{className:"small font-italic text-muted mb-4"},"JPG or PNG no larger than 5 MB"),l.createElement("button",{className:"btn btn-primary",type:"button"},"Upload new image")))),l.createElement("div",{className:"col-xl-8"},l.createElement("div",{className:"card mb-4"},l.createElement("div",{className:"card-header"},"Account Details"),l.createElement("div",{className:"card-body"},l.createElement("form",null,l.createElement("div",{className:"mb-3"},l.createElement("label",{className:"small mb-1",for:"inputUsername"},"Username (how your name will appear to other users on the site)"),l.createElement("input",{className:"form-control",id:"inputUsername",type:"text",placeholder:"Enter your username",value:"username"})),l.createElement("div",{className:"row gx-3 mb-3"},l.createElement("div",{className:"col-md-6"},l.createElement("label",{className:"small mb-1",for:"inputFirstName"},"First name"),l.createElement("input",{className:"form-control",id:"inputFirstName",type:"text",placeholder:"Enter your first name",value:"Valerie"})),l.createElement("div",{className:"col-md-6"},l.createElement("label",{className:"small mb-1",for:"inputLastName"},"Last name"),l.createElement("input",{className:"form-control",id:"inputLastName",type:"text",placeholder:"Enter your last name",value:"Luna"}))),l.createElement("div",{className:"row gx-3 mb-3"},l.createElement("div",{className:"col-md-6"},l.createElement("label",{className:"small mb-1",for:"inputOrgName"},"Organization name"),l.createElement("input",{className:"form-control",id:"inputOrgName",type:"text",placeholder:"Enter your organization name",value:"Start Bootstrap"})),l.createElement("div",{className:"col-md-6"},l.createElement("label",{className:"small mb-1",for:"inputLocation"},"Location"),l.createElement("input",{className:"form-control",id:"inputLocation",type:"text",placeholder:"Enter your location",value:"San Francisco, CA"}))),l.createElement("div",{className:"mb-3"},l.createElement("label",{className:"small mb-1",for:"inputEmailAddress"},"Email address"),l.createElement("input",{className:"form-control",id:"inputEmailAddress",type:"email",placeholder:"Enter your email address",value:"name@example.com"})),l.createElement("div",{className:"row gx-3 mb-3"},l.createElement("div",{className:"col-md-6"},l.createElement("label",{className:"small mb-1",for:"inputPhone"},"Phone number"),l.createElement("input",{className:"form-control",id:"inputPhone",type:"tel",placeholder:"Enter your phone number",value:"555-123-4567"})),l.createElement("div",{className:"col-md-6"},l.createElement("label",{className:"small mb-1",for:"inputBirthday"},"Birthday"),l.createElement("input",{className:"form-control",id:"inputBirthday",type:"text",name:"birthday",placeholder:"Enter your birthday",value:"06/10/1988"}))),l.createElement("button",{className:"btn btn-primary",type:"button"},"Save changes")))))))))}const i=()=>l.createElement("title",null,"Profile")}}]);
//# sourceMappingURL=component---src-pages-profile-page-help-js-37b5afec65e2f3da7113.js.map