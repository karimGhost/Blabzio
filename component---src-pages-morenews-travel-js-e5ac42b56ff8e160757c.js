"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[5563,8988],{2868:function(e,t,a){a.r(t);var l=a(7294);a(1072),a(8665);t.default=e=>{let{totalPages:t,currentPage:a,handlePageChange:n}=e;const s=Array.from(Array(t).keys()).map((e=>e+1));return l.createElement("div",{className:"pagination"},a>1?l.createElement("button",{id:"btp",className:"btn1",onClick:()=>n(a-1)},l.createElement(l.Fragment,null,"Previous")," "):null,s.map((e=>e<=t&&(e===a||e===a-1||e===a+1||e===t)?l.createElement("button",{style:{color:"black"},className:e===a?"current ":"btnum",key:e,onClick:()=>n(e)},1===e?l.createElement(l.Fragment,null,"1"):2===e?l.createElement(l.Fragment,null,"2"):3===e?l.createElement(l.Fragment,null,"3"):4===e?l.createElement(l.Fragment,null,"4"):5===e?l.createElement(l.Fragment,null,"5"):6===e?l.createElement(l.Fragment,null,"6"):7===e?l.createElement(l.Fragment,null,"7"):8===e?l.createElement(l.Fragment,null,"8"):9===e?l.createElement(l.Fragment,null,"9"):10===e?l.createElement(l.Fragment,null,"10"):e):null)),a<t?l.createElement("button",{id:"btp",className:"btn2",onClick:()=>n(a+1)},l.createElement(l.Fragment,null,"Next")," "):null)}},2981:function(e,t,a){a.r(t),a.d(t,{Head:function(){return N},default:function(){return v}});var l=a(7294),n=a(1405),s=(a(7500),a(7489)),c=a(2868),r=(a(1019),a(4866)),o=(a(9319),a(6267),a(6953),a(221)),m=a(2711),i=a.n(m),u=a(1072),g=(a(8665),a(8261)),d=a(4405),p=a(982),E=a(9417);const f={apiKey:"AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",authDomain:"zenaitsworld.firebaseapp.com",projectId:"zenaitsworld",storageBucket:"zenaitsworld.appspot.com",messagingSenderId:"752059821465",appId:"1:752059821465:web:a892347312cbfad858f708",measurementId:"G-GEMHBSGYPY"},h={apiKey:"AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",authDomain:"compo-57c97.firebaseapp.com",databaseURL:"https://compo-57c97-default-rtdb.firebaseio.com",projectId:"compo-57c97",storageBucket:"compo-57c97.appspot.com",messagingSenderId:"475037571261",appId:"1:475037571261:web:9db4f4bdd540a72bbb3fd4"},b={apiKey:"AIzaSyBh8ygMi8nTJ7WVcA9amKSwABs_NzJZQk4",authDomain:"chatszen.firebaseapp.com",databaseURL:"https://chatszen-default-rtdb.firebaseio.com",projectId:"chatszen",storageBucket:"chatszen.appspot.com",messagingSenderId:"83570132385",appId:"1:83570132385:web:b9d0772699726c7bb4f7e0",measurementId:"G-4S4BTTXP48"};function v(){const{user:e,loading:t,signOut:a}=(0,d.a)();r.Z.initializeApp(f,"app7");const m=r.Z.app("app7");(0,l.useEffect)((()=>{i().init()}),[]);const{0:v,1:N}=(0,l.useState)([]);r.Z.initializeApp(b,"app1312");const k=r.Z.app("app1312").database(),y=e&&k.ref("savedNews/"+e.uid),w=r.Z.initializeApp(h,"app1819").database();function C(e,t){const a=t,l=e.title.replace(/[.#$\[\]]/g," "),n=v[l]||!1;N({...v,[l]:!n});const s=a.replace(/[.#$[\]]/g,"_");w.ref(s).on("value",(e=>{const t=e.val();y.child(l).once("value",(e=>{e.exists()?y.child(l).remove():y.child(l).set(t)}))}))}(0,l.useEffect)((()=>{if(!y)return;const e=e=>{const t=e.val();if(t){N(t)}else N({})};return y.on("value",e),()=>{y.off("value",e)}}),[e]);const z=(0,l.useRef)(!0),{0:S,1:I}=(0,l.useState)();(0,l.useEffect)((()=>{m.database().ref("Entertainment").on("value",(e=>{I(e.val())}))}),[]);const{0:P}=(0,l.useState)(40),{0:F,1:A}=(0,l.useState)(1),T=S?Math.ceil(Object.keys(S).length/P):0;console.log("totalpages "+T),console.log("currentPages "+F),console.log("itemsperpage "+P);const Z=S&&Object.values(S).slice((F-1)*P,F*P),{0:B,1:L}=(0,l.useState)("Ent"),{0:x,1:G}=(0,l.useState)(!1);function j(e){L(e),G(!0)}const{0:M,1:D}=(0,l.useState)(""),{0:O,1:R}=(0,l.useState)(""),{0:q,1:J}=(0,l.useState)(""),{0:K,1:_}=(0,l.useState)("");console.log("$the object is as "+q);const{0:H,1:U}=(0,l.useState)();(0,l.useEffect)((()=>{e&&m.database().ref("users/"+e.uid).on("value",(e=>{if(console.log(JSON.stringify(e.val())),!e.val())return J(!0),void console.log("Snapshot value is null or undefined");if(J(!1),"object"==typeof e.val()){const t=e.val();g.Z.changeLanguage(t.language)}else g.Z.changeLanguage(e.val())}))}),[e]);const{0:V,1:$}=(0,l.useState)(!1),{0:X,1:Y}=(0,l.useState)(!1);return S?l.createElement(n.Z,{isBloged:z,setDark:Y,setLight:$,light:V,lag:q,off:x,handleLanguageChange:function(t){const a=t.target.value;R(a),g.Z.changeLanguage(a),m.database().ref("users/"+e.uid).set({language:a})},language:O},l.createElement(s.Z,{light:V,setLight:$,off:x,setoff:G,da:B}),l.createElement("div",{className:"content-wrapper "+(V&&"back")+"  "},l.createElement("div",{className:"container"},l.createElement("div",{className:"col-sm-12"},l.createElement("div",{className:"card","data-aos":"fade-up"},l.createElement("div",{className:"card-body  "+(V&&"backframe")+" "},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-sm-12"},l.createElement("h1",{className:"font-weight-600 mb-4"},"TRAVEL"))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-8"},Z&&Z.slice(0,10).map(((e,t)=>l.createElement("div",{key:t,className:"row"},l.createElement("div",{className:"col-sm-4 grid-margin"},l.createElement("div",{className:"rotate-img",onClick:()=>j(e.url)},l.createElement("img",{src:e.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>j(e.url)}))),l.createElement("div",{className:"col-sm-8 grid-margin"},l.createElement("h2",{className:"font-weight-600 mb-2",onClick:()=>j(e.url)},e.title.length>30?e.title.slice(0,33):e.title),l.createElement("p",{className:"fs-13 text-muted mb-0"},l.createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),l.createElement("button",{onClick:()=>C(e,e.url),style:{color:v[e.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},l.createElement(p.G,{icon:E.q7m,className:"savedit",style:{color:v[e.title]?"tomato":"yellowgreen"}})," ",v[e.title]?"saved":"save"," "),l.createElement("p",{className:"fs-15",onClick:()=>j(e.url)},e.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,"").length>=120?e.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,"").slice(0,110):e.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,"")))))),Z&&Z.slice(10,20).map(((e,t)=>l.createElement("div",{key:t,className:"row"},l.createElement("div",{className:"col-sm-4 grid-margin"},l.createElement("div",{className:"rotate-img",onClick:()=>j(e.url)},l.createElement("img",{src:e.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>j(e.url)}))),l.createElement("div",{className:"col-sm-8 grid-margin"},l.createElement("h2",{className:"font-weight-600 mb-2",onClick:()=>j(e.url)},e.title.length>30?e.title.slice(0,33):e.title),l.createElement("p",{className:"fs-13 text-muted mb-0"},l.createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),l.createElement("button",{onClick:()=>C(e,e.url),style:{color:v[e.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},l.createElement(p.G,{icon:E.q7m,className:"savedit",style:{color:v[e.title]?"tomato":"yellowgreen"}})," ",v[e.title]?"saved":"save"," "),l.createElement("p",{className:"fs-15",onClick:()=>j(e.url)},e.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,"").length>=120?e.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,"").slice(0,110):e.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,""))))))),l.createElement("div",{className:"col-lg-4"},l.createElement("h2",{className:"mb-4 text-primary font-weight-600"},"Latest news"),Z&&Z.length>=20&&Z.slice(20,30).map(((e,t)=>l.createElement("div",{key:t,className:"row"},l.createElement("div",{className:"col-sm-12"},l.createElement("div",{className:"border-bottom pb-4 pt-4"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-sm-8"},l.createElement("h5",{className:"font-weight-600 mb-1",onClick:()=>j(e.url)},e.title.length>30?e.title.slice(0,33):e.title),l.createElement("p",{className:"fs-13 text-muted mb-0"},l.createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),l.createElement("button",{onClick:()=>C(e,e.url),style:{color:v[e.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},l.createElement(p.G,{icon:E.q7m,className:"savedit",style:{color:v[e.title]?"tomato":"yellowgreen"}})," ",v[e.title]?"saved":"save"," ")),l.createElement("div",{className:"col-sm-4"},l.createElement("div",{className:"rotate-img",onClick:()=>j(e.url)},l.createElement("img",{src:e.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>j(e.url)}))))))))),l.createElement("div",{className:"trending"},l.createElement("h2",{className:"mb-4 text-primary font-weight-600"},"Trending"),Z&&Z.slice(30,40).map(((e,t)=>l.createElement("div",{key:t,className:"mb-4"},l.createElement("div",{className:"rotate-img",onClick:()=>j(e.url)},l.createElement("img",{src:e.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>j(e.url)})),l.createElement("h3",{className:"mt-3 font-weight-600",onClick:()=>j(e.url)},e.title.length>30?e.title.slice(0,33):e.title),l.createElement("p",{className:"fs-13 text-muted mb-0"},l.createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),l.createElement("button",{onClick:()=>C(e,e.url),style:{color:v[e.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},l.createElement(p.G,{icon:E.q7m,className:"savedit",style:{color:v[e.title]?"tomato":"yellowgreen"}})," ",v[e.title]?"saved":"save"," ")))))))))))),l.createElement(c.default,{totalPages:T,currentPage:F,handlePageChange:e=>{e<=T&&A(e)}})):l.createElement(o.Z,{head:l.createElement(u.cC,null,"Travel")})}const N=()=>l.createElement("title",null,"Travel")}}]);
//# sourceMappingURL=component---src-pages-morenews-travel-js-e5ac42b56ff8e160757c.js.map