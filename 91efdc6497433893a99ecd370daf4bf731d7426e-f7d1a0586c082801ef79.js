"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[4896],{3668:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var r=a(5785),s=a(3279),i=a.n(s),l=a(7294),n=a(5935),o=a(9015),d=a(8745),c=a(8052),m=a(5795),p=a(3416),u=a(9417),g=a(982),f=a(5692),b=a(2073),h=a(4051),y=a(9403),k=a(4866),w=a(4405),v=a(7896),x=a(4854),E=a(9583);const N={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};function C(e){const t=e.match(/<img [^>]*>/g)||[];for(const a of t){const t=/width="(\d+)"/,r=/height="(\d+)"/,s=a.match(t),i=a.match(r),l=s?parseInt(s[1]):void 0,n=i?parseInt(i[1]):void 0,o=l?Math.floor(l/2):void 0,d=n?Math.floor(n/2):void 0,c=o?' width="'+o+'"':"",m=d?' height="'+d+'"':"",p=a.replace(/\/?>/,""+c+m+' class="resized-imaged">');e=e.replace(a,p)}return e=(e=(e=e.replace(/<p\b[^>]*>/gi,'<p class={` ${props.dark ?   "resizeded-p" : "resized-P" }`}>')).replace(/<code\b[^>]*>/gi,'<code class={` ${props.dark ?   "resizeded-p"  : "resized-P"}`} style={{color: props.dark ? "white" : "black"}}>')).replace(/<h1\b[^>]*>/gi,'<p class={` ${props.dark ?   "resizeded-p" : "resized-P" }`}>')}function I(e){var t,a;const s=(0,l.useRef)(null),{0:I,1:z}=(0,l.useState)([]),{0:S,1:A}=(0,l.useState)(""),{user:B,setUser:R,loading:Z,signOut:j}=(0,w.a)();k.Z.initializeApp(N,"app15");const D=k.Z.app("app15"),{0:L,1:P}=(0,l.useState)(!1);e.profileImg;const M=e.username,{0:q,1:F}=(0,l.useState)([]),{0:T,1:O}=(0,l.useState)({upvote:0,downvote:0,userVote:0}),{0:H,1:W}=(0,l.useState)([]);(0,l.useEffect)((()=>{const e=D.database().ref("Ratings"),t=e.on("value",(e=>{const t=e.val();if(!t)return void W([]);const a=Object.entries(t).map((e=>{let[t,a]=e;return{...a,id:t}}));W(a)}));return()=>e.off("value",t)}),[B]);const{0:G,1:V}=(0,l.useState)(!0),{0:$,1:K}=(0,l.useState)([]),{0:U,1:Y}=(0,l.useState)("0"),{0:J,1:X}=(0,l.useState)(!1),{0:_,1:Q}=(0,l.useState)(!1);const{0:ee,1:te}=(0,l.useState)("center"),ae=l.createElement("div",null,l.createElement(y.z,{label:"No",icon:"pi pi-times",onClick:()=>Q(!1),className:"p-button-text pi-text-help"}),l.createElement(y.z,{className:"p-button-warning",severity:"warning",label:"YEP!",icon:"pi pi-check",onClick:function(){e.handleCommen(),Q(!1)},autoFocus:!0})),{0:re,1:se}=(0,l.useState)(!1);async function ie(e){!async function(e){try{const t=D.database().ref("Replies/replied");(await t.orderByChild("ip").equalTo(e).once("value")).forEach((a=>{a.val().ip===e&&t.child(a.key).remove()}))}catch(t){console.log(t)}}(e);try{const t=D.database().ref("commentpost");(await t.orderByChild("id").equalTo(e).once("value")).forEach((a=>{a.val().id===e&&t.child(a.key).remove()}))}catch(t){console.log(t)}}const{0:le,1:ne}=(0,l.useState)("center"),oe=l.createElement("div",null,l.createElement(y.z,{label:"No",icon:"pi pi-times",onClick:()=>se(!1),className:"p-button-text pi-text-help"}),l.createElement(y.z,{style:{background:"red"},className:"p-button-error",severity:"error",label:"confirm",icon:"pi pi-check",onClick:()=>{return t=e.ids,e.handleDismiss(t),void Q(!1);var t},autoFocus:!0})),de=e=>{ne(ee),se(!0)},{0:ce,1:me}=(0,l.useState)([]);function pe(){s.current.value=""}const{0:ue,1:ge}=(0,l.useState)(!0);async function fe(e){(0,p.x0)();Y((t=>({...t,[e]:!0}))),pe();try{if((await D.database().ref("Replies/").orderByChild("ip").equalTo(e).once("value")).exists())await D.database().ref("Replies/").update({replied:$});else{D.database().ref("Replies/").set({replied:$})}}catch(t){console.log(t)}P((e=>!e))}(0,l.useEffect)((()=>{if(B){const e=D.database().ref("Replies/"),t=e.on("value",(e=>{if(e.exists()){const t=Object.values(e.val().replied),a=t.reduce(((e,t)=>(e[t.id]=!0,e)),{});Y(a),K(t)}}));return()=>e.off("value",t)}}),[B]);const{0:be,1:he}=(0,l.useState)(null),ye=[{label:"Add",icon:"pi pi-pencil",size:"sm",buttonClassName:"p-button-warning bold border-non  w-2rem h-2rem p-button-outlined sm m- p-button-rounded p-mt-2 p-0",command:()=>{(e=>{te(e),Q(!0)})("top-left")}},{label:"Delete",icon:"pi pi-trash",size:"sm",color:"danger",style:{backgroundColor:"red",color:"white"},className:"my-danger-class",command:()=>{de()}},{label:"Share",icon:"pi pi-external-link",size:"sm",command:()=>{e.snoop()}}],ke=[{label:"share",icon:"pi pi-external-link",size:"sm",command:()=>{e.snoop()}},{label:"Report",icon:"pi pi-exclamation-triangle",size:"sm",severity:"danger",command:()=>{de()}}],{0:we,1:ve}=(0,l.useState)(2);const{0:xe,1:Ee}=(0,l.useState)(0),{0:Ne,1:Ce}=(0,l.useState)(2),{0:Ie,1:ze}=(0,l.useState)(!1),Se=()=>{ze(!Ie)},{0:Ae,1:Be}=(0,l.useState)([]);(0,l.useEffect)((()=>{const e=D.database().ref("Reply"),t=e.on("value",(e=>{const t=e.val();if(!t)return void Be([]);const a=Object.entries(t).map((e=>{let[t,a]=e;return{...a,id:t}}));Be(a)}));return()=>e.off("value",t)}),[B]);const{0:Re,1:Ze}=(0,l.useState)("");(0,l.useEffect)((()=>{if(B){const e=D.database().ref("commentpost/");return e.on("value",(e=>{if(!e.val())return;const t=Object.values(e.val());z(t)})),()=>e.off("value")}}),[B]),(0,l.useEffect)((()=>{if(e.posted&&"object"!=typeof e.posted){const t=C(e.posted);Ze(t)}else e.posted&&"object"==typeof e.posted&&Ze("<div>\n\n    <h6> From News Content</h6>\n    <h5>"+e.posted.title+"</h5>\n      <img src="+(e.posted.images[3]?e.posted.images[3]:b.Z)+" />\n     \n      <p>"+e.posted.paragraphs+"</p>\n    </div>")}),[e.posted]);const{0:je,1:De}=(0,l.useState)("");function Le(){Fe.current&&(Fe.current.style.height="100%",Oe(!1))}(0,l.useEffect)((()=>{if(e.copied&&"object"!=typeof e.copied[0].message){const t=C(e.copied[0].message);De(t)}else e.copied&&"object"==typeof e.copied[0].message&&De('<div class="bggray">\n   \n      <img class="bgimg" src='+(e.copied[0].message.images[3]?e.copied[0].message.images[3]:b.Z)+' />\n      <h1 class="bgh1">'+e.copied[0].message.title+'</h1>\n      <p class="bgp">'+e.copied[0].message.paragraphs+"</p>\n    </div>")}),[e.copied]);e.setFullSizeImage,e.fullSizeImage;const{0:Pe,1:Me}=(0,l.useState)(!0),qe=(0,l.useRef)(null),Fe=(0,l.useRef)(null),{0:Te,1:Oe}=(0,l.useState)(!0),He=null===(t=Fe.current)||void 0===t||null===(a=t.getBoundingClientRect())||void 0===a?void 0:a.height;Fe.current&&(He>=120?(Fe.current.style.height="60vh",qe.current.style.display="flex"):(Fe.current.style.height="fit-content",qe.current.style.display="none"));const We=i()((e=>{var t;t=e,null!==Fe.current&&t===Fe.current.id&&(console.log("it's fogginggggggggggggggggggggg second"),Fe.current.style.height="100%")}),300);function Le(e){console.log("it's fogginggggggggggggggggggggg first"),null!==Fe.current&&e===Fe.current.id&&(console.log("it's fogginggggggggggggggggggggg third"),Fe.current.style.height="100%",Me(!1))}const Ge=e=>{if(!e)return"";const t=new Date-new Date(e),a=Math.floor(t/1e3);if(a<60)return a+" sec ago";const r=Math.floor(a/60);if(r<60)return r+" min ago";const s=Math.floor(r/60);if(s<24)return s+" h ago";const i=Math.floor(s/24);if(i<30)return i+" day ago";const l=Math.floor(i/30);if(l<12)return l+" mo ago";return Math.floor(l/12)+" yr ago"},Ve=e.copied,$e=(e.user,(0,v.useLocation)());let Ke,Ue;return Ke=!!$e.pathname.startsWith("/profileComponents/Myprofile"),Ue=!!$e.pathname.startsWith("/profileComponents/Profiles"),l.createElement("section",{className:" zIndex-2 "+(e.dark&&"darken"),style:{height:"fit-content",width:"100%",marginLeft:"auto",marginRight:"auto"}},e.user===M&&l.createElement(l.Fragment,null,Ke&&e.user===M||e.Bio===M?l.createElement("div",null,l.createElement(d.F,{ref:s}),!e.shared&&l.createElement("div",{className:"py-1 mx-auto px-0 m "+(e.dark?"bgswhiteBlack":"bgswhite"),style:{}},l.createElement(h.Z,{style:{background:"transparent"},className:"justify-content-center m-0 p-0"},l.createElement("div",{style:{width:"100%"},md:"12",lg:"10",xl:"10",className:" w-100 p-0 mx-0 px-0"},l.createElement(f.Z,{className:'"p-0  carde  m-auto"   '+(e.dark?"bb":"pp"),style:{color:e.dark?"silver":"black",background:e.dark&&"#141515",width:"100%",padding:"0"}},l.createElement(f.Z.Body,{className:" p-0"},l.createElement(f.Z.Body,null,e.user===M?l.createElement(o.V,{showIcon:"",outlined:!0,buttonClassName:(Ie?"pi pi-times":"pi pi-ellipsis-h")+" p-button-warning bold border-non p-button-outlined    sm   p-mt-2 p-0 p-2 w-2rem h-2rem",model:ye,visible:Ie,onShow:Se,onHide:Se,direction:"down",style:{padding:"2px",paddingLeft:"4px",zIndex:"3",position:"absolute",top:"0",left:"0",color:"black",fontWeight:"bold"}}):l.createElement(o.V,{showIcon:"",outlined:!0,buttonClassName:"  "+(Ie?" pi pi-times":"pi pi-ellipsis-h")+"   p-button-success bold border-non  w-2rem h-2rem p-button-outlined sm   p-mt-1   p-2  '",model:ke,visible:Ie,onShow:Se,onHide:Se,direction:"down",style:{padding:"2px",paddingLeft:"4px",zIndex:"3",position:"absolute",top:"0",left:"0",color:"black",fontWeight:"bold"}}),l.createElement("div",{className:"card"},l.createElement(c.V,{header:"Please Confrim",visible:_,position:ee,style:{width:"50vw"},onHide:()=>Q(!1),footer:ae,draggable:!1,resizable:!1},l.createElement("p",{className:"m-0"},"Are you sure you want to Edit your post!")),l.createElement(c.V,{header:"Please Confrim",visible:re,position:le,style:{width:"50vw"},onHide:()=>se(!1),footer:oe,draggable:!1,resizable:!1},l.createElement("p",{style:{fontSize:"1.4rem"},className:"m-0 "},"Are you sure you want to delete Your post ?"))),l.createElement("div",{style:{marginBottom:"-30px"},className:"d-flex flex-start align-items-center "},l.createElement(x.Link,{to:"/profileComponents/Profiles?id="+e.userId},l.createElement(f.Z.Img,{className:"rounded-circle shadow-1-strong me-3",src:e.profileImg,alt:e.username,style:{width:"50px",height:"50px"},width:"60",height:"60"})),l.createElement("div",null,l.createElement(x.Link,{to:e.username===e.user?"/profileComponents/Myprofile":"/profileComponents/Profiles?id="+e.userId},l.createElement("h5",{className:"fw-bold   mb-1 ml-2",style:{color:e.dark?"silver":"black"}},e.username,e.userId)),l.createElement("p",{className:"text-muted small mb-0 ml-2"}," ",e.datePosted)))),l.createElement("div",{className:"w-auto p-0 ",style:{color:e.dark?"white":"black",marginLeft:"15%",marginRight:"10%",padding:"0px",width:"200%"}},l.createElement("div",{ref:Fe,className:"ppp",onClick:()=>Le(e.ids),id:e.ids,style:{background:"transparent",cursor:"pointer",overflow:"hidden"}},(0,n.ZP)(Re)),Pe&&l.createElement("div",{id:e.ids,ref:qe,onClick:()=>{return t=e.ids,Le(t),void We(t);var t},style:{height:"fit-content",display:"flex",flexDirection:"column",cursor:"pointer",background:"rgba(0,0,0,0.19)",color:"purple",fontSize:"1rem"}},l.createElement(g.G,{"fa-fade":!0,style:{color:"orange"},className:"bounce-fadeds",icon:u.ptq}),"   ",l.createElement("span",{style:{textAlign:"center",fontSize:"0.80rem"}},"Show More")," "),l.createElement("p",{className:"text-dark"},Ve&&Ve.user),e.copied&&e.copied.length>0&&l.createElement("div",{style:{width:"100%",background:e.dark&&"#141515"}},l.createElement("div",{style:{alignItems:"center",width:"50%",margin:"auto",background:e.dark?"#141515":"rgba(0,0,0,0.11)"}},l.createElement("p",{style:{textAlign:"center",color:"green",fontWeight:"bold",fontFamily:"cursive",background:"black"}},"reposted content"),l.createElement("div",{style:{display:"flex"}},l.createElement(x.Link,{to:e.username===e.user?"/profileComponents/Myprofile":"/profileComponents/"+e.copied[0].userId},"     ",l.createElement(f.Z.Img,{className:"rounded-circle shadow-1-strong me-3",src:Ve[0].profile,alt:Ve[0].user,width:"60",height:"60"})," "),l.createElement("div",{style:{display:""}},l.createElement(x.Link,{to:e.username===e.user?"/profileComponents/Myprofile":"/profileComponents/"+e.copied[0].userId},"  ",l.createElement("h5",{className:"fw-bold text-dark  mb-1"},Ve[0].user)),l.createElement("p",{className:"text-muted small ml-1 pl-1 mb-0"}," ",Ge(Ve[0].datePosted)))),l.createElement(l.Fragment,null,l.createElement("div",{ref:Fe,onClick:()=>Le(e.ids),className:"mb-0 Edits ",id:e.ids,style:{cursor:"pointer",overflow:"hidden",boxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",webkitBoxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",moZboxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)"}},l.createElement("div",{className:"w-auto p-0 ppp",style:{color:e.dark?"white":"black",marginLeft:"auto",marginRight:"auto",padding:"0px",width:"200%"}},(0,n.ZP)(je))),Te&&l.createElement("button",{onClick:()=>Le(e.ids),style:{background:"rgba(1,1,1,0.11)",border:"none "}},"show more..."))))),l.createElement(f.Z.Body,{style:{background:e.dark&&""},className:" "+(e.dark&&"#141515")+" px-1 "},l.createElement("div",{className:"small d-flex justify-content-start w-100  mx-0 "},l.createElement("div",{className:"thumbs-container p-grid mt-2 pt-1"},l.createElement("div",{style:{zIndex:Ie?"1":"3"},className:"thumb p-col-6 px-1  "},l.createElement(y.z,{onClick:()=>async function(t){if(!e.user)return;const a="card-"+t+"-"+e.user;W((r=>{const s=r.map((e=>e.cardId===a?{...e,liked:!0,userId:B.uid,disliked:!1}:e));return s.some((t=>t.cardId===a&&t.user===e.user))||s.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:B.uid,date:new Date}),s}));try{const r=await D.database().ref("Ratings").orderByChild("cardId").equalTo(a).once("value");if(r.exists()){const e=Object.keys(r.val())[0],t=r.val()[e];await D.database().ref("Ratings/"+e).update({liked:!t.liked,userId:B.uid,disliked:!1})}else{const r=D.database().ref("Ratings");await r.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:B.uid,date:new Date})}}catch(r){console.error("Error updating:",r)}}(e.ids),style:{background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"},className:""+(H&&Array.isArray(H)&&H.some((t=>t.ip===e.ids&&!0===t.liked)),e.dark&&"darken")},l.createElement("i",{className:"fot pi pi-thumbs-up p-overlay-badge",style:{textShadow:"none",fontSize:Array.isArray(H)&&q.id&&q[e.ids].some((e=>e.disliked))&&"1.4rem"}},l.createElement(m.C,{style:{background:"transparent",color:"green"},className:"badged pl-2",severity:"s",value:H&&Array.isArray(H)&&H.some((t=>t.ip===e.ids&&!0===t.liked))&&H.filter((t=>t.ip===e.ids)).filter((e=>!0===e.liked)).length})))),l.createElement("div",{className:"thumb p-col-6 p-3 mx-0 "},l.createElement(y.z,{onClick:()=>async function(t){if(!e.user)return;const a="card-"+t+"-"+e.user;W((r=>{const s=r.map((e=>e.cardId===a?{...e,disliked:!0,liked:!1}:e));return s.some((t=>t.cardId===a&&t.user===e.user))||s.push({cardId:a,user:e.user,liked:!1,disliked:!0,ip:t,userId:B.uid}),s}));try{const r=await D.database().ref("Ratings").orderByChild("cardId").equalTo(a).once("value");if(r.exists()){const e=Object.keys(r.val())[0],t=r.val()[e];await D.database().ref("Ratings/"+e).update({disliked:!t.disliked,liked:!1})}else{const r=D.database().ref("Ratings");await r.push({cardId:a,user:e.user,liked:!1,disliked:!0,ip:t,userId:B.uid,date:new Date})}}catch(r){console.error("Error updating:",r)}}(e.ids),style:{background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"},className:""+(H&&Array.isArray(H)&&H.some((t=>t.ip===e.ids&&!0===t.disliked)),e.dark&&"darken")},l.createElement("i",{className:" fot pi pi-thumbs-down p-overlay-badge",style:{textShadow:"none",fontSize:Array.isArray(q)&&q.id&&q[e.ids].some((e=>e.disliked))&&"1.4rem"}},l.createElement(m.C,{style:{background:"transparent",color:"red"},className:"badged pl-2",severity:"s",value:H&&Array.isArray(H)&&H.some((t=>t.ip===e.ids&&!0===t.disliked))&&H.filter((t=>t.ip===e.ids)).filter((e=>!0===e.disliked)).length}))))),e.showCommentBox?l.createElement("div",{onClick:()=>{pe(),e.handlecancel()},className:"card",style:{background:e.dark?"#141515":"white"}},l.createElement("button",{style:{textShadow:e.dark&&" none",marginTop:" 2.0rem",border:"none",color:"#868686",background:e.dark?"#141515":"white"},className:"d-flex align-items-center me-3 "},l.createElement(E.DCG,{style:{color:"#868686"}}),l.createElement("p",{className:"mb-0"},"Close ",l.createElement("span",null,"   (",Array.isArray(I)&&I.filter((t=>t.ip===e.ids)).length,")")))):l.createElement("div",{onClick:e.handleComment,className:"card",style:{background:e.dark?"#141515":"white"}},l.createElement("button",{style:{background:e.dark?"#141515":"white",marginTop:" 2.0rem",border:"none",boxShadow:"1px 2px 2px 1px rgba(0,0,0,0.11)",textShadow:e.dark&&" none",color:"#868686"},className:"d-flex align-items-center me-3  "},l.createElement(E.DCG,{style:{color:"#868686"}}),l.createElement("p",{className:"mb-0"},"Comment ",l.createElement("span",null," (",Array.isArray(I)&&I.filter((t=>t.ip===e.ids)).length,")"))))))),e.showCommentBox&&l.createElement(f.Z.Footer,{className:"py-3 border-0",style:{backgroundColor:e.dark?"#141515":"#f8f9fa"}},l.createElement("div",{className:"d-flex flex-start w-100"},l.createElement(x.Link,{to:"/pagesprofileComponents/Profiles?id="+e.userId},l.createElement(f.Z.Img,{className:"rounded-circle shadow-1-strong me-3 mr-1",src:e.profileImg,alt:e.username,width:"40",height:"40",style:{marginLeft:"-4px"}})),l.createElement("div",{className:"textarea-wrapper"},l.createElement("textarea",{onChange:function(e){const t=e.target.rows;e.target.rows=2;const a=Math.ceil((e.target.scrollHeight-24)/24);a===t?e.target.rows=a:(e.target.rows=a,ve(a)),A(e.target.value)},placeholder:"add Comment..",style:{height:24*we+"px",padding:"10px",borderRadius:"20px",border:"1px solid grey"},className:"w-100",id:"area",ref:s,value:S}))),l.createElement("div",{className:"float-end mt-2 pt-1"},l.createElement(y.z,{style:{borderRadius:"15px",background:"black"},size:"sm",className:"me-1  sizeis ",onClick:()=>async function(t){const a=(0,p.x0)();if(""!==S.trim())try{(await D.database().ref("commentpost").orderByChild("ip").equalTo(t).once("value")).exists()?await D.database().ref("commentpost/"+a).update({id:a,ip:t,message:S.trim(),profile:e.profileuser,username:e.user,font:"sans-serif",showCommentBox:"",cardm:I.length,isactive:!0,liked:"0",disliked:"1",userId:B.uid,date:new Date}):(z([].concat((0,r.Z)(I),[{id:a,ip:t,message:S.trim(),profile:e.profileuser,username:e.user,font:"sans-serif",showCommentBox:"",cardm:I.length,isactive:!0,liked:"0",disliked:"1",userId:B.uid,date:new Date}])),D.database().ref("commentpost/"+a).set({id:a,ip:t,message:S.trim(),profile:e.profileuser,username:e.user,font:"sans-serif",showCommentBox:"",cardm:I.length,isactive:!0,liked:"0",disliked:"1",userId:B.uid,date:new Date}))}catch(s){console.log(s)}finally{A("")}}(e.ids)},"post"))),e.showCommentBox&&l.createElement("section",{style:{height:"fit-content",zIndex:"1",marginBottom:""},className:"gradient-custom   mb-3 zIndex-3 h-100 "},l.createElement("div",{className:"py-5",style:{maxWidth:"1000px",background:e.dark&&"#141515"}},l.createElement(h.Z,{className:"justify-content-center"},l.createElement("div",{className:"col",md:"12",lg:"10",xl:"8"},l.createElement(f.Z,null,l.createElement(f.Z.Body,{className:"p-2 m-0 ",style:{background:e.dark&&"#141515"}},l.createElement("p",{tag:"h4",className:"text-center mb-4 pb-2"},"comments ",$&&$.message),Array.isArray(I)&&I&&I.slice().reverse().map((t=>t.ip===e.ids&&l.createElement(h.Z,{style:{width:"100%",justifyContent:" center"},key:t.id},l.createElement("div",null,l.createElement("div",{className:" d-flex flex-start"},l.createElement(x.Link,{to:"/profileComponents/Profiles?id="+t.userId},l.createElement(f.Z.Img,{className:"rounded-circle shadow-1-strong me-3 ",src:t.profile,alt:"card.user",width:"55",height:"55"})," "),l.createElement("div",{className:"flex-grow-1 flex-shrink-1"},l.createElement("div",null,l.createElement("div",{className:"d-flex  justify-content-between align-items-cente"},l.createElement(x.Link,{to:"/profileComponents/Profiles?id="+t.userId}," ",l.createElement("p",{className:"mb-1"},l.createElement("span",{className:"small",style:{wordBreak:"keep-all",whiteSpace:"nowrap"}},l.createElement("p",null,t.username," "," "," ",l.createElement("i",null,"-",Ge(t.date))," "),"  "))),e.user&&l.createElement(o.V,{showIcon:"pi pi-ellipsis-h",hideIcon:"pi pi-times",outlined:!0,size:"sm",buttonClassName:(t.username===e.user?"p-button-warning":e.username?"p-button-secondary":"p-button-success")+"  bold border-non  w-2rem h-2rem p-button-outlined sm m- p-button-rounded p-mt-4 mt-5 p-0 mr-5",model:t.username===e.user?[{label:"delete",icon:"pi pi-trash",size:"sm",command:()=>{ie(t.id)}}]:e.user===e.username?[{label:"delete",icon:"pi pi-trash",size:"sm",command:()=>{ie(t.id)}},{label:"Report",icon:"pi pi-exclamation-triangle",size:"sm",command:()=>{}}]:e.user===e.username&&t.username===e.username?[{label:"delete",icon:"pi pi-trash",size:"sm",command:()=>{ie(t.id)}}]:t.username!==e.user&&e.username!==e.user&&[{label:"Report",icon:"pi pi-exclamation-triangle",size:"sm",command:()=>{de()}}],onShow:Se,onHide:Se,direction:"down",style:{zIndex:"3",position:"absolute",top:"0",right:"-30px",border:"none",color:"black",fontWeight:"bold"}}),l.createElement("div",{className:"d-flex align-items-center mb-1"})),l.createElement("div",{style:{marginBottom:"-10px",margin:"auto",paddingBottom:"0"}},l.createElement("p",{style:{fontSize:"1rem",fontFamily:"monospace"},className:"break small bold italic mb-0 break-word "},(0,n.ZP)(t.message))),l.createElement("div",{className:"thumbs-container p-grid",style:{marginLeft:"-40px"}},l.createElement("div",{className:"thumb p-col-6 pr-2"},l.createElement(y.z,{onClick:()=>async function(t){if(!e.user)return;const a="card-"+t+"-"+e.user;Be((r=>{const s=r.map((e=>e.cardId===a?{...e,liked:!0,userId:B.uid,disliked:!1}:e));return s.some((t=>t.cardId===a&&t.user===e.user))||s.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:B.uid,date:new Date}),s}));try{const r=await D.database().ref("Reply").orderByChild("cardId").equalTo(a).once("value");if(r.exists()){const e=Object.keys(r.val())[0],t=r.val()[e];await D.database().ref("Reply/"+e).update({liked:!t.liked,disliked:!1})}else{const r=D.database().ref("Reply");await r.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:B.uid,date:new Date})}}catch(r){console.error("Error updating:",r)}}(t.id),style:{paddingTop:"5px",paddingBottom:"5px",background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"},className:"'fot '  "+(Ae&&Array.isArray(Ae)&&Ae.some((e=>e.ip===t.id&&!0===e.liked))?"selected":"")},l.createElement("i",{className:"pi pi-thumbs-up p-overlay-badge",style:{fontSize:Array.isArray(Ae)&&Ae.id&&Ae[t.id].some((e=>e.disliked))&&"1.4rem"}},l.createElement(m.C,{style:{background:"transparent",color:"green"},className:"badged pl-2",severity:"s",value:Ae&&Array.isArray(Ae)&&Ae.some((e=>e.ip===t.id&&!0===e.liked))&&Ae.filter((e=>e.ip===t.ip)).filter((e=>!0===e.liked)).length})))),l.createElement("div",{className:"thumb p-col-6 p-3 "},l.createElement(y.z,{onClick:()=>async function(t){if(!e.user)return;const a="card-"+t+"-"+e.user;Be((r=>{const s=r.map((e=>e.cardId===a?{...e,disliked:!0,userId:B.uid,liked:!1}:e));return s.some((t=>t.cardId===a&&t.user===e.user))||s.push({cardId:a,user:e.user,liked:!1,disliked:!0,ip:t,date:new Date,userId:B.uid}),s}));try{const r=await D.database().ref("Reply").orderByChild("cardId").equalTo(a).once("value");if(r.exists()){const e=Object.keys(r.val())[0],t=r.val()[e];await D.database().ref("Reply/"+e).update({disliked:!t.disliked,liked:!1})}else{const r=D.database().ref("Reply");await r.push({cardId:a,user:e.user,liked:!1,disliked:!0,ip:t,userId:B.uid,date:new Date})}}catch(r){console.error("Error updating:",r)}}(t.id),className:"'fot' "+(Ae&&Array.isArray(Ae)&&Ae.some((e=>e.ip===t.id&&!0===e.disliked))?"selectedr":""),style:{paddingTop:"5px",paddingBottom:"5px",background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"}},l.createElement("i",{className:"pi pi-thumbs-down p-overlay-badge",style:{fontSize:Array.isArray(Ae)&&Ae.id&&Ae[t.id].some((e=>e.disliked))&&"1.4rem"}},l.createElement(m.C,{style:{background:"transparent",color:"red"},className:"badged pl-2",severity:"s",value:Ae&&Array.isArray(Ae)&&Ae.some((e=>e.ip===t.id&&!0===e.disliked))&&Ae.filter((e=>e.ip===t.id)).filter((e=>!0===e.disliked)).length})))),l.createElement("div",{style:{display:"flex",flexDirection:"column"},className:"mb-0 btomrr pb-0 "},l.createElement(y.z,{className:"small btomr fot p-1 bg-dark  "+(t.isactive&&$?"mb-1 mt-3":"mb-3 mt-5"),style:{width:"fit-content"},onClick:()=>{return e=t.id,z((t=>t.map((t=>t.id===e?{...t,isactive:!t.isactive}:t)))),void I.map((t=>t.id===e&&t.isactive?ge(!1):!(t.id===e&&!t.isactive)||ge(!0)));var e},icon:$.filter((e=>e.ip===t.id)).length,label:(t.isactive?$&&")Hidereplies":"Showreplies")+" "}),t.isactive&&$&&l.createElement(y.z,{style:{fontWeight:"bold",marginBottom:"-30px",fontSize:"1rem",cursor:"pointer",wordBreak:"keep-all",whiteSpace:"nowrap"},className:"fot m-1 btom text-dark bold  small p-1 ",icon:"pi pi-reply",onClick:()=>async function(t){const a=(0,p.x0)();I.some((e=>e.id===t))&&(K((s=>[].concat((0,r.Z)(s),[{ip:t,id:a,message:"",font:"sans-serif",showCommentBox:"",isactive:!0,leng:"i",likes:null,profile:e.profileuser,username:e.user,userId:B.uid,date:new Date}]))),z((e=>e.map((e=>e.id===t?{...e,isactive:!0}:e)))))}(t.id),label:"reply"}))),l.createElement("div",{className:"col-sm-flex-column"})),$.slice().reverse().map((a=>a.ip===t.id&&l.createElement("div",{key:a.id,className:"d-flex flex-start w-100 wrap mt-4"},t.isactive?l.createElement("div",null,l.createElement(x.Link,{to:"/profileComponents/"+a.userId},l.createElement(f.Z.Img,{className:"w-20 rounded-circle shadow-1-strong me-3",src:a.profile,style:{width:"40px",height:"40px"},alt:"avatar",width:"65",height:"65"})),l.createElement("div",{className:"flex-grow-1 flex-shrink-1"},l.createElement("div",null,l.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.createElement(x.Link,{to:"/profileComponents/"+a.userId},"   ",l.createElement("p",{style:{color:e.dark?"ghostwhite":"black"},className:"mb-1"},a.username," ",l.createElement("span",{className:"small"},"-",Ge(a.date)))," ")),U[a.id]?l.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.createElement("p",{className:"small mb-0 "},a.message)):l.createElement("div",null,l.createElement("textarea",{placeholder:"add reply...",style:{height:24*we+"px",padding:"10px",borderRadius:"20px",border:"1px solid grey"},onChange:e=>((e,t)=>{const a=t.target.rows;t.target.rows=2;const r=Math.ceil((t.target.scrollHeight-24)/24);r===a?t.target.rows=r:(t.target.rows=r,ve(r)),K((a=>a.map((a=>a.id===e?{...a,message:t.target.value}:a))))})(a.id,e)}),l.createElement(y.z,{className:" bg-dark  p-1 mr-3",onClick:()=>fe(a.id)},"post"),l.createElement(y.z,{className:"bg-danger p-1",onClick:()=>{return a.ip===t.id&&(a.ip,e=a.id,void K((t=>t.filter((t=>t.id!==e)))));var e}},"cancel"))))):l.createElement(l.Fragment,null))))))),l.createElement("div",{style:{borderBottom:"0.40px solid gray",margin:"auto",width:"95%",padding:"0px"}}))))))))))))))):l.createElement(l.Fragment,null)),"     ")}}}]);
//# sourceMappingURL=91efdc6497433893a99ecd370daf4bf731d7426e-f7d1a0586c082801ef79.js.map