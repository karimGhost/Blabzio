"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[6681],{1290:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var r=a(3433),s=a(3279),i=a.n(s),o=a(7294),n=a(5935),l=a(6002),d=a(4420),c=a(8052),p=a(5795),m=a(3416),u=a(4051),f=a(9583),h=a(9403),g=a(4866),b=a(4405),y=a(5692),k=a(7896),v=a(7500),w=(a(5980),a(9417)),x=a(982),E=a(2073);const N={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};function I(e){const t=e.match(/<img [^>]*>/g)||[];for(const a of t){const t=/width="(\d+)"/,r=/height="(\d+)"/,s=a.match(t),i=a.match(r),o=s?parseInt(s[1]):void 0,n=i?parseInt(i[1]):void 0,l=o?Math.floor(o/2):void 0,d=n?Math.floor(n/2):void 0,c=l?' width="'+l+'"':"",p=d?' height="'+d+'"':"",m=a.replace(/\/?>/,""+c+p+' class="resized-imaged cursor-zoom">');e=e.replace(a,m)}return e=(e=(e=e.replace(/<p\b[^>]*>/gi,'<p class={` ${props.dark ?   "resizeded-p" : "resized-P" }`}>')).replace(/<code\b[^>]*>/gi,'<code class={` ${props.dark ?   "resizeded-p"  : "resized-P"}`} style={{color: props.dark ? "white" : "black"}}>')).replace(/<h1\b[^>]*>/gi,'<p class={` ${props.dark ?   "resizeded-p" : "resized-P" }`}>')}function z(e){const t=(0,o.useRef)(null),{0:a,1:s}=(e.dark,(0,o.useState)([])),{0:z,1:C}=(0,o.useState)(""),{user:S,setUser:j,loading:A,signOut:R}=(0,b.a)();g.Z.initializeApp(N,"app1515");const B=g.Z.app("app1515"),{0:O,1:P}=(0,o.useState)(!1);e.profileImg;const Z=e.username,{0:L,1:M}=(0,o.useState)([]),{0:D,1:T}=(0,o.useState)({upvote:0,downvote:0,userVote:0}),{0:q,1:_}=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=B.database().ref("Ratings"),t=e.on("value",(e=>{const t=e.val();if(!t)return void _([]);const a=Object.entries(t).map((e=>{let[t,a]=e;return{...a,id:t}}));_(a)}));return()=>e.off("value",t)}),[S]);const{0:W,1:F}=(0,o.useState)(!0),{0:H,1:G}=(0,o.useState)([]),{0:V,1:Y}=(0,o.useState)("0"),{0:$,1:U}=(0,o.useState)(!1),{0:K,1:J}=(0,o.useState)(!1);const{0:X,1:Q}=(0,o.useState)("center"),ee=o.createElement("div",null,o.createElement(h.z,{label:"No",icon:"pi pi-times",onClick:()=>J(!1),className:"p-button-text pi-text-help"}),o.createElement(h.z,{className:"p-button-warning",severity:"warning",label:"YEP!",icon:"pi pi-check",onClick:function(){e.handleCommen(),J(!1)},autoFocus:!0})),{0:te,1:ae}=(0,o.useState)(!1);async function re(e){!async function(e){try{const t=B.database().ref("Replies/replied");(await t.orderByChild("ip").equalTo(e).once("value")).forEach((a=>{a.val().ip===e&&t.child(a.key).remove()}))}catch(t){console.log(t)}}(e);try{const t=B.database().ref("commentpost");(await t.orderByChild("id").equalTo(e).once("value")).forEach((a=>{a.val().id===e&&t.child(a.key).remove()}))}catch(t){console.log(t)}}const{0:se,1:ie}=(0,o.useState)("center"),oe=o.createElement("div",null,o.createElement(h.z,{label:"No",icon:"pi pi-times",onClick:()=>ae(!1),className:"p-button-text pi-text-help"}),o.createElement(h.z,{style:{background:"red"},className:"p-button-error",severity:"error",label:"confirm",icon:"pi pi-check",onClick:()=>{return t=e.ids,e.handleDismiss(t),void J(!1);var t},autoFocus:!0})),{0:ne,1:le}=(0,o.useState)([]);function de(){t.current.value=""}const{0:ce,1:pe}=(0,o.useState)(!0);async function me(e){(0,m.x0)();Y((t=>({...t,[e]:!0}))),de();try{if((await B.database().ref("Replies/").orderByChild("ip").equalTo(e).once("value")).exists())await B.database().ref("Replies/").update({replied:H});else{B.database().ref("Replies/").set({replied:H})}}catch(t){console.log(t)}P((e=>!e))}(0,o.useEffect)((()=>{if(S){const e=B.database().ref("Replies/"),t=e.on("value",(e=>{if(e.exists()){const t=Object.values(e.val().replied),a=t.reduce(((e,t)=>(e[t.id]=!0,e)),{});Y(a),G(t)}}));return()=>e.off("value",t)}}),[S]);const{0:ue,1:fe}=(0,o.useState)(null),he=[{label:"Add",icon:"pi pi-pencil",size:"sm",buttonClassName:"p-button-warning bold border-non  w-2rem h-2rem p-button-outlined sm m- p-button-rounded p-mt-2 p-0",command:()=>{(e=>{Q(e),J(!0)})("top-left")}},{label:"Delete",icon:"pi pi-trash",size:"sm",color:"danger",style:{backgroundColor:"red",color:"white"},className:"my-danger-class",command:()=>{ie(X),ae(!0)}},{label:"Share",icon:"pi pi-external-link",size:"sm",command:()=>{e.snoop()}}],ge=[{label:"share",icon:"pi pi-external-link",size:"sm",command:()=>{e.snoop()}},{label:"Report",icon:"pi pi-exclamation-triangle",size:"sm",severity:"danger",command:()=>{alert("reported")}}],{0:be,1:ye}=(0,o.useState)(2);const{0:ke,1:ve}=(0,o.useState)(0),{0:we,1:xe}=(0,o.useState)(2),{0:Ee,1:Ne}=(0,o.useState)(!1),Ie=()=>{Ne(!Ee)},{0:ze,1:Ce}=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=B.database().ref("Reply"),t=e.on("value",(e=>{const t=e.val();if(!t)return void Ce([]);const a=Object.entries(t).map((e=>{let[t,a]=e;return{...a,id:t}}));Ce(a)}));return()=>e.off("value",t)}),[S]);const{0:Se,1:je}=(0,o.useState)(""),Ae=()=>{const e=Se.split(" "),t=[];return e.forEach(((e,a)=>{if(e.startsWith("http")||e.startsWith("https")){const a=(e=>{const t=e.split(".").pop().toLowerCase();if("jpg"===t||"png"===t||"jpeg"===t||"gif"===t||"img"===t)return'<div class="card flex w-50 justify-content-center"><Image class="sized"   src="'+e+'" zoomSrc="'+e+'" alt="Image" class="resizedImages" width="250"  preview /></div>';if("mp4"===t)return'<video src="'+e+'" controls>Your browser does not support the video tag.</video>';if("mp3"===t)return'<audio src="'+e+'" controls>Your browser does not support the audio tag.</audio>';{const t=/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/,a=e.match(t);return a?'<div className="Fit" style="position: relative; padding-bottom: 56.25%; height: 300px, width: 300px"><iframe src="https://www.youtube.com/embed/'+a[5]+'?controls=0&modestbranding=1" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':e}})(e)||o.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e);t.push(a)}else e.startsWith("data:image/")&&t.push('<div class="card flex justify-content-center"><Image className="sized" src="'+e+'" zoomSrc="'+e+'" alt="Image" class="resizedImages" width="250" preview /></div>')})),t.join("")},{0:Re,1:Be}=(0,o.useState)(!1),{0:Oe,1:Pe}=(0,o.useState)(!0),Ze=(0,o.useRef)(null),Le=e.setFullSizeImage,Me=(e.fullSizeImage,(0,o.useRef)(null)),{0:De,1:Te}=(0,o.useState)(!0);(0,o.useEffect)((()=>{const e=new ResizeObserver((function(){if(Me.current){Me.current.getBoundingClientRect().height>=120?(Me.current.style.height="60vh",Ze.current.style.display="flex"):(Me.current.style.height="fit-content",Ze.current.style.display="none")}}));return Me.current&&e.observe(Me.current),()=>{Me.current&&e.unobserve(Me.current)}}),[]),(0,o.useEffect)((()=>{document.querySelectorAll(".resized-imaged").forEach((e=>(e.addEventListener("click",We),()=>{e.removeEventListener("click",We)})))}),[]);const qe=i()((e=>{var t;t=e,Me.current||t!==Me.current.id||(Me.current.style.height="100%")}),300);function _e(e){Me.current||e!==Me.current.id||(Me.current.style.height="100%",Pe(!1))}function We(e){if(!0===De){const t=e.target;"IMG"===t.tagName&&Le(t.src)}}(0,o.useEffect)((()=>{if(S){const e=B.database().ref("commentpost/");return e.on("value",(e=>{if(!e.val())return;const t=Object.values(e.val());s(t)})),()=>e.off("value")}}),[S]),(0,o.useEffect)((()=>{if(e.posted&&"object"!=typeof e.posted){const t=I(e.posted);je(t)}else e.posted&&"object"==typeof e.posted&&je("<div>\n\n    <h6> From News Content</h6>\n    <h5>"+e.posted.title+"</h5>\n      <img src="+(e.posted.images[3]?e.posted.images[3]:E.Z)+" />\n     \n      <p>"+e.posted.paragraphs+"</p>\n    </div>")}),[e.posted]);const{0:Fe,1:He}=(0,o.useState)("");(0,o.useEffect)((()=>{if(e.copied&&"object"!=typeof e.copied[0].message){const t=I(e.copied[0].message);He(t)}else e.copied&&"object"==typeof e.copied[0].message&&He('<div class="bggray">\n   \n      <img class="bgimg" src='+(e.copied[0].message.images[3]?e.copied[0].message.images[3]:E.Z)+' />\n      <h1 class="bgh1">'+e.copied[0].message.title+'</h1>\n      <p class="bgp">'+e.copied[0].message.paragraphs+"</p>\n    </div>")}),[e.copied]);const Ge=e=>{if(!e)return"";const t=new Date-new Date(e),a=Math.floor(t/1e3);if(a<60)return a+" sec ago";const r=Math.floor(a/60);if(r<60)return r+" min ago";const s=Math.floor(r/60);if(s<24)return s+" h ago";const i=Math.floor(s/24);if(i<30)return i+" day ago";const o=Math.floor(i/30);if(o<12)return o+" mo ago";return Math.floor(o/12)+" yr ago"},Ve=e.copied;e.user;let Ye;return Ye=!!(0,k.useLocation)().pathname.startsWith("/profileComponents/Myprofile"),o.createElement("section",{className:" zIndex-2 "+(e.dark&&"darke"),style:{height:"fit-content",width:""}},o.createElement("div",null,o.createElement(d.F,{ref:t}),!e.shared&&o.createElement("div",{className:"py-1 "},o.createElement(u.Z,{style:{background:"transparent"},className:"justify-content-center "},o.createElement("div",{style:{width:"100%"},md:"12",lg:"10",xl:"10",className:" w-100 p-0 "},o.createElement(y.Z,{id:"wsmall",className:'"p-0  carded  " '+(e.dark?"bb":"pp"),style:{color:e.dark?"silver":"black",background:e.dark?"#141515":"white",width:"65%",padding:"0",marginLeft:"25%"}},o.createElement(y.Z.Body,{style:{boxShadow:!e.dark&&"4px 4px 8px -2px rgba(242,242,242,0.53)",webkitBoxShadow:!e.dark&&"4px 4px 8px -2px rgba(242,242,242,0.53)"},className:" p-0"},o.createElement(y.Z.Body,null,e.user===Z?o.createElement(l.V,{showIcon:"",outlined:!0,buttonClassName:(Ee?"pi pi-times":"pi pi-ellipsis-h")+" p-button-warning bold border-non p-button-outlined    sm   p-mt-2 p-0 p-2",model:he,visible:Ee,onShow:Ie,onHide:Ie,direction:"down",style:{padding:"2px",paddingLeft:"4px",zIndex:"3",position:"absolute",top:"0",left:"0",color:"black",fontWeight:"bold"}}):o.createElement(l.V,{showIcon:"",outlined:!0,buttonClassName:"  "+(Ee?" pi pi-times":"pi pi-ellipsis-h")+"   p-button-success bold border-non  w-2rem h-2rem p-button-outlined sm   p-mt-1   p-2  '",model:ge,visible:Ee,onShow:Ie,onHide:Ie,direction:"down",style:{padding:"2px",paddingLeft:"4px",zIndex:"3",position:"absolute",top:"0",left:"0",color:"black",fontWeight:"bold"}}),o.createElement("div",{className:"card"},o.createElement(c.V,{header:"Please Confrim",visible:K,position:X,style:{width:"50vw"},onHide:()=>J(!1),footer:ee,draggable:!1,resizable:!1},o.createElement("p",{className:"m-0"},"Are you sure you want to Edit your post!")),o.createElement(c.V,{header:"Please Confrim",visible:te,position:se,style:{width:"50vw"},onHide:()=>ae(!1),footer:oe,draggable:!1,resizable:!1},o.createElement("p",{style:{fontSize:"1.4rem"},className:"m-0 "},"Are you sure you want to delete Your post ?"))),o.createElement("div",{style:{marginBottom:"-30px"},className:"d-flex flex-start align-items-center "},o.createElement(v.Link,{to:e.username===e.user?"/profileComponents/Myprofile":e.username?"/profileComponents/Profiles?id="+e.userId:""},o.createElement(y.Z.Img,{className:"rounded-circle shadow-1-strong me-3  imgs",src:e.profileImg,style:{width:"50px",height:"50px"},alt:e.username,width:"60",height:"60"})),o.createElement("div",null,o.createElement(v.Link,{to:e.username===e.user?"/profileComponents/Myprofile":e.username?"/profileComponents/Profiles?id="+e.userId:""},o.createElement("h5",{className:"fw-bold fsize  mb-1 ml-2",style:{color:e.dark?"silver":"black"}},e.username?e.username:"Deleted User")),o.createElement("p",{className:"text-muted small mb-0 ml-2"}," ",e.datePosted)))),o.createElement("div",{className:"w-auto p-0 ",style:{color:e.dark?"white":"black",marginLeft:"auto",marginRight:"auto",padding:"0px",width:"100%"}},o.createElement("div",{onClick:()=>_e(e.ids),ref:Me,className:"ppp "+(e.dark&&"ppr"),id:e.ids,style:{position:"relative",background:"transparent",cursor:"pointer",overflow:"hidden",boxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",webkitBoxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",moZboxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",marginLeft:"90px",marginRight:" 50px"}},(0,n.ZP)(function(){const e=Ae(),t=/<pre [^>]*>/g,a=e.match(/<img [^>]*>/g)||[];let r=Se;for(const s of a){const a=/width="(\d+)"/,i=/height="(\d+)"/,o=/src="([^"]+)"/,n=s.match(a),l=s.match(i),d=s.match(o),c=n?parseInt(n[1]):void 0,p=l?parseInt(l[1]):void 0,m=(c&&Math.floor(c/2),p&&Math.floor(p/2),'<Image src="'+(d?d[1]:"")+'" id="resizedImages" style="width:100%; max-width:300px" class="resizedImages p-image-preview p-image-mask" width="250" preview  />');e.match(t);r=r.replace(s,'<div class=" p-image-preview-container card flex justify-content-center imagewraper d-flex-column">'+m+"</div>")}return r}(),{decodeEntities:!1})),Oe&&o.createElement("div",{id:e.ids,ref:Ze,onClick:()=>{return _e(t=e.ids),void qe(t);var t},style:{height:"fit-content",display:"flex",flexDirection:"column",cursor:"pointer",background:"rgba(0,0,0,0.19)",color:"purple",fontSize:"1rem"}},o.createElement(x.G,{"fa-fade":!0,style:{color:"orange"},className:"bounce-fadeds",icon:w.ptq}),"   ",o.createElement("span",{style:{textAlign:"center",fontSize:"0.80rem"}},"Show More")," "),o.createElement("p",{className:"text-dark"},Ve&&Ve.user),e.copied&&e.copied.length>0&&o.createElement("div",{style:{width:"100%",background:e.dark&&"#141515"}},o.createElement("div",{style:{alignItems:"center",width:"50%",margin:"auto",background:e.dark?"#141515":"rgba(0,0,0,0.11)"}},o.createElement("p",{style:{textAlign:"center",color:"green",fontWeight:"bold",fontFamily:"cursive",background:"black"}},"reposted content"),o.createElement("div",{style:{display:"flex"}},o.createElement(v.Link,{to:"/profileComponents/Profiles?id="+e.copied[0].userId},"     ",o.createElement(y.Z.Img,{className:"rounded-circle shadow-1-strong me-3",src:Ve[0].profile,alt:Ve[0].user,width:"60",height:"60"})),o.createElement("div",{style:{display:""}},o.createElement(v.Link,{to:"/profileComponents/Profiles?id="+e.copied[0].userId},"  ",o.createElement("h5",{className:"fw-bold text-dark  mb-1"},Ve[0].user)),o.createElement("p",{className:"text-muted small ml-1 pl-1 mb-0"}," ",Ge(Ve[0].datePosted)))),o.createElement("div",{className:"w-auto ppp p-0  "+(e.dark&&"darke"),style:{color:e.dark?"white":"black",marginLeft:"auto",marginRight:"auto",padding:"0px",width:"200%"}},(0,n.ZP)(Fe))))),o.createElement(y.Z.Body,{style:{background:e.dark&&""},className:" "+(e.dark&&"#141515")+" px-1 "},o.createElement("div",{className:"small d-flex justify-content-start w-100  mx-0 "},o.createElement("div",{className:"thumbs-container p-grid mt-2 pt-1"},o.createElement("div",{style:{zIndex:Ee?"1":"3"},className:"thumb p-col-6 px-1  "},o.createElement(h.z,{onClick:()=>async function(t){if(!e.user)return;const a="card-"+t+"-"+e.user;_((r=>{const s=r.map((e=>e.cardId===a?{...e,liked:!0,userId:S.uid,disliked:!1}:e));return s.some((t=>t.cardId===a&&t.user===e.user))||s.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:S.uid,date:new Date}),s}));try{const r=await B.database().ref("Ratings").orderByChild("cardId").equalTo(a).once("value");if(r.exists()){const e=Object.keys(r.val())[0],t=r.val()[e];await B.database().ref("Ratings/"+e).update({liked:!t.liked,userId:S.uid,disliked:!1})}else{const r=B.database().ref("Ratings");await r.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:S.uid,date:new Date})}}catch(r){console.error("Error updating:",r)}}(e.ids),style:{background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"},className:""+(q&&Array.isArray(q)&&q.some((t=>t.ip===e.ids&&!0===t.liked)),e.dark&&"darken")},o.createElement("i",{className:"fot pi pi-thumbs-up p-overlay-badge",style:{textShadow:"none",fontSize:Array.isArray(q)&&L.id&&L[e.ids].some((e=>e.disliked))&&"1.4rem"}},o.createElement(p.C,{style:{background:"transparent",color:"green"},className:"badged pl-2",severity:"s",value:q&&Array.isArray(q)&&q.some((t=>t.ip===e.ids&&!0===t.liked))&&q.filter((t=>t.ip===e.ids)).filter((e=>!0===e.liked)).length})))),o.createElement("div",{className:"thumb p-col-6 p-3 mx-0 "},o.createElement(h.z,{onClick:()=>async function(t,a){if(!e.user)return;const r="card-"+t+"-"+e.user;_((a=>{const s=a.map((e=>e.cardId===r?{...e,disliked:!0,liked:!1}:e));return s.some((t=>t.cardId===r&&t.user===e.user))||s.push({cardId:r,user:e.user,liked:!1,disliked:!0,ip:t,userId:S.uid}),s}));try{const a=await B.database().ref("Ratings").orderByChild("cardId").equalTo(r).once("value");if(a.exists()){const e=Object.keys(a.val())[0],t=a.val()[e];await B.database().ref("Ratings/"+e).update({disliked:!t.disliked,liked:!1})}else{const a=B.database().ref("Ratings");await a.push({cardId:r,user:e.user,liked:!1,disliked:!0,ip:t,userId:S.uid,date:new Date})}}catch(s){console.error("Error updating:",s)}a.stopPropagation()}(e.ids),style:{background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"},className:""+(q&&Array.isArray(q)&&q.some((t=>t.ip===e.ids&&!0===t.disliked)),e.dark&&"darken")},o.createElement("i",{className:" fot pi pi-thumbs-down p-overlay-badge",style:{textShadow:"none",fontSize:Array.isArray(L)&&L.id&&L[e.ids].some((e=>e.disliked))&&"1.4rem"}},o.createElement(p.C,{style:{background:"transparent",color:"red"},className:"badged pl-2",severity:"s",value:q&&Array.isArray(q)&&q.some((t=>t.ip===e.ids&&!0===t.disliked))&&q.filter((t=>t.ip===e.ids)).filter((e=>!0===e.disliked)).length}))))),e.showCommentBox?o.createElement("div",{onClick:()=>{de(),e.handlecancel()},className:"card",style:{background:e.dark?"#141515":"white"}},o.createElement("button",{style:{textShadow:e.dark&&" none",marginTop:" 2.0rem",border:"none",color:"#868686",background:e.dark?"#141515":"white"},className:"d-flex align-items-center me-3 "},o.createElement(f.DCG,{style:{color:"#868686"}}),o.createElement("p",{className:"mb-0"},"Close ",o.createElement("span",null,"   (",Array.isArray(a)&&a.filter((t=>t.ip===e.ids)).length,")")))):o.createElement("div",{onClick:e.handleComment,className:"card",style:{background:e.dark?"#141515":"white"}},o.createElement("button",{style:{background:e.dark?"#141515":"white",marginTop:" 2.0rem",border:"none",boxShadow:"1px 2px 2px 1px rgba(0,0,0,0.11)",textShadow:e.dark&&" none",color:"#868686"},className:"d-flex align-items-center me-3  "},o.createElement(f.DCG,{style:{color:"#868686"}}),o.createElement("p",{className:"mb-0"},"Comment ",o.createElement("span",null," (",Array.isArray(a)&&a.filter((t=>t.ip===e.ids)).length,")"))))))),e.showCommentBox&&o.createElement(y.Z.Footer,{className:"py-3 border-0",style:{backgroundColor:e.dark?"#141515":"#f8f9fa"}},o.createElement("div",{className:"d-flex flex-start w-100"},o.createElement(v.Link,{to:"/profileComponents/Profiles?id="+e.userId},o.createElement(y.Z.Img,{className:"rounded-circle shadow-1-strong me-3 mr-1",src:e.profileImg,alt:e.username,width:"40",height:"40",style:{marginLeft:"-4px"}})),o.createElement("div",{className:"textarea-wrapper"},o.createElement("textarea",{onChange:function(e){const t=e.target.rows;e.target.rows=2;const a=Math.ceil((e.target.scrollHeight-24)/24);a===t?e.target.rows=a:(e.target.rows=a,ye(a)),C(e.target.value)},placeholder:"add Comment..",style:{height:24*be+"px",padding:"10px",borderRadius:"20px",border:"1px solid grey"},className:"w-100",id:"area",ref:t,value:z}))),o.createElement("div",{className:"float-end mt-2 pt-1"},o.createElement(h.z,{style:{borderRadius:"15px",background:"black"},size:"sm",className:"me-1  sizeis ",onClick:()=>async function(t){const i=(0,m.x0)();if(""!==z.trim())try{(await B.database().ref("commentpost").orderByChild("ip").equalTo(t).once("value")).exists()?await B.database().ref("commentpost/"+i).update({id:i,ip:t,message:z.trim(),profile:e.profileuser,username:e.user,font:"sans-serif",showCommentBox:"",cardm:a.length,isactive:!0,liked:"0",disliked:"1",userId:S.uid,date:new Date}):(s([].concat((0,r.Z)(a),[{id:i,ip:t,message:z.trim(),profile:e.profileuser,username:e.user,font:"sans-serif",showCommentBox:"",cardm:a.length,isactive:!0,liked:"0",disliked:"1",userId:S.uid,date:new Date}])),B.database().ref("commentpost/"+i).set({id:i,ip:t,message:z.trim(),profile:e.profileuser,username:e.user,font:"sans-serif",showCommentBox:"",cardm:a.length,isactive:!0,liked:"0",disliked:"1",userId:S.uid,date:new Date}))}catch(o){console.log(o)}finally{C("")}}(e.ids)},"post"))),e.showCommentBox&&o.createElement("section",{style:{height:"fit-content",zIndex:"1",marginBottom:""},className:"gradient-custom   mb-3 zIndex-3 h-100 "},o.createElement("div",{className:"py-5",style:{maxWidth:"1000px",background:e.dark&&"#141515"}},o.createElement(u.Z,{className:"justify-content-center"},o.createElement("div",{className:"col",md:"12",lg:"10",xl:"8"},o.createElement(y.Z,null,o.createElement(y.Z.Body,{className:"p-2 m-0 ",style:{background:e.dark&&"#141515"}},o.createElement("p",{tag:"h4",className:"text-center mb-4 pb-2"},"comments ",H&&H.message),Array.isArray(a)&&a&&a.slice().reverse().map((t=>t.ip===e.ids&&o.createElement(u.Z,{style:{width:"100%",justifyContent:" center"},key:t.id},o.createElement("div",null,o.createElement("div",{className:" d-flex flex-start"},o.createElement(v.Link,{to:"/profileComponents/Profiles?id="+t.userId},o.createElement(y.Z.Img,{className:"rounded-circle shadow-1-strong me-3 ",src:t.profile,alt:"card.user",width:"55",height:"55"})," "),o.createElement("div",{className:"flex-grow-1 flex-shrink-1"},o.createElement("div",null,o.createElement("div",{className:"d-flex  justify-content-between align-items-cente"},o.createElement(v.Link,{to:"/profileComponents/Profiles?id="+t.userId}," ",o.createElement("p",{className:"mb-1"},o.createElement("span",{className:"small",style:{wordBreak:"keep-all",whiteSpace:"nowrap"}},o.createElement("p",null,t.username," "," "," ",o.createElement("i",null,"-",Ge(t.date))," "),"  "))),e.user&&o.createElement(l.V,{showIcon:"pi pi-ellipsis-h",hideIcon:"pi pi-times",outlined:!0,size:"sm",buttonClassName:(t.username===e.user?"p-button-warning":e.username?"p-button-secondary":"p-button-success")+"  bold border-non  w-2rem h-2rem p-button-outlined sm m- p-button-rounded p-mt-4 mt-5 p-0 mr-5",model:t.username===e.user?[{label:"delete",icon:"pi pi-trash",size:"sm",command:()=>{re(t.id)}}]:e.user===e.username?[{label:"delete",icon:"pi pi-trash",size:"sm",command:()=>{re(t.id)}},{label:"Report",icon:"pi pi-exclamation-triangle",size:"sm",command:()=>{}}]:e.user===e.username&&t.username===e.username?[{label:"delete",icon:"pi pi-trash",size:"sm",command:()=>{re(t.id)}}]:t.username!==e.user&&e.username!==e.user&&[{label:"Report",icon:"pi pi-exclamation-triangle",size:"sm",command:()=>{alert("reported")}}],onShow:Ie,onHide:Ie,direction:"down",style:{zIndex:"3",position:"absolute",top:"0",right:"-30px",border:"none",color:"black",fontWeight:"bold"}}),o.createElement("div",{className:"d-flex align-items-center mb-1"})),o.createElement("div",{className:"ppp",style:{marginBottom:"-10px",margin:"auto",paddingBottom:"0"}},o.createElement("p",{style:{fontSize:"1rem",fontFamily:"monospace"},className:" break small bold italic mb-0 break-word "},(0,n.ZP)(t.message))),o.createElement("div",{className:"thumbs-container p-grid",style:{marginLeft:"-40px"}},o.createElement("div",{className:"thumb p-col-6 pr-2"},o.createElement(h.z,{onClick:()=>async function(t){if(!e.user)return;const a="card-"+t+"-"+e.user;Ce((r=>{const s=r.map((e=>e.cardId===a?{...e,liked:!0,userId:S.uid,disliked:!1}:e));return s.some((t=>t.cardId===a&&t.user===e.user))||s.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:S.uid,date:new Date}),s}));try{const r=await B.database().ref("Reply").orderByChild("cardId").equalTo(a).once("value");if(r.exists()){const e=Object.keys(r.val())[0],t=r.val()[e];await B.database().ref("Reply/"+e).update({liked:!t.liked,disliked:!1})}else{const r=B.database().ref("Reply");await r.push({cardId:a,user:e.user,liked:!0,disliked:!1,ip:t,userId:S.uid,date:new Date})}}catch(r){console.error("Error updating:",r)}}(t.id),style:{paddingTop:"5px",paddingBottom:"5px",background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"},className:"'fot '  "+(ze&&Array.isArray(ze)&&ze.some((e=>e.ip===t.id&&!0===e.liked))?"selected":"")},o.createElement("i",{className:"pi pi-thumbs-up p-overlay-badge",style:{fontSize:Array.isArray(ze)&&ze.id&&ze[t.id].some((e=>e.disliked))&&"1.4rem"}},o.createElement(p.C,{style:{background:"transparent",color:"green"},className:"badged pl-2",severity:"s",value:ze&&Array.isArray(ze)&&ze.some((e=>e.ip===t.id&&!0===e.liked))&&ze.filter((e=>e.ip===t.ip)).filter((e=>!0===e.liked)).length})))),o.createElement("div",{className:"thumb p-col-6 p-3 "},o.createElement(h.z,{onClick:()=>async function(t){if(!e.user)return;const a="card-"+t+"-"+e.user;Ce((r=>{const s=r.map((e=>e.cardId===a?{...e,disliked:!0,userId:S.uid,liked:!1}:e));return s.some((t=>t.cardId===a&&t.user===e.user))||s.push({cardId:a,user:e.user,liked:!1,disliked:!0,ip:t,date:new Date,userId:S.uid}),s}));try{const r=await B.database().ref("Reply").orderByChild("cardId").equalTo(a).once("value");if(r.exists()){const e=Object.keys(r.val())[0],t=r.val()[e];await B.database().ref("Reply/"+e).update({disliked:!t.disliked,liked:!1})}else{const r=B.database().ref("Reply");await r.push({cardId:a,user:e.user,liked:!1,disliked:!0,ip:t,userId:S.uid,date:new Date})}}catch(r){console.error("Error updating:",r)}}(t.id),className:"'fot' "+(ze&&Array.isArray(ze)&&ze.some((e=>e.ip===t.id&&!0===e.disliked))?"selectedr":""),style:{paddingTop:"5px",paddingBottom:"5px",background:e.dark?"#141515":"white",backgroundColor:e.dark?"#141515":"white",border:"none",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",color:e.dark?"silver":"gray"}},o.createElement("i",{className:"pi pi-thumbs-down p-overlay-badge",style:{fontSize:Array.isArray(ze)&&ze.id&&ze[t.id].some((e=>e.disliked))&&"1.4rem"}},o.createElement(p.C,{style:{background:"transparent",color:"red"},className:"badged pl-2",severity:"s",value:ze&&Array.isArray(ze)&&ze.some((e=>e.ip===t.id&&!0===e.disliked))&&ze.filter((e=>e.ip===t.id)).filter((e=>!0===e.disliked)).length})))),o.createElement("div",{style:{display:"flex",flexDirection:"column"},className:"mb-0 btomrr pb-0 "},o.createElement(h.z,{className:"small btomr fot p-1 bg-dark  "+(t.isactive&&H?"mb-1 mt-3":"mb-3 mt-5"),style:{width:"fit-content"},onClick:()=>{return e=t.id,s((t=>t.map((t=>t.id===e?{...t,isactive:!t.isactive}:t)))),void a.map((t=>t.id===e&&t.isactive?pe(!1):!(t.id===e&&!t.isactive)||pe(!0)));var e},icon:H.filter((e=>e.ip===t.id)).length,label:(t.isactive?H&&")Hidereplies":"Showreplies")+" "}),t.isactive&&H&&o.createElement(h.z,{style:{fontWeight:"bold",marginBottom:"-30px",fontSize:"1rem",cursor:"pointer",wordBreak:"keep-all",whiteSpace:"nowrap"},className:"fot m-1 btom text-dark bold  small p-1 ",icon:"pi pi-reply",onClick:()=>async function(t){const i=(0,m.x0)();a.some((e=>e.id===t))&&(G((a=>[].concat((0,r.Z)(a),[{ip:t,id:i,message:"",font:"sans-serif",showCommentBox:"",isactive:!0,leng:"i",likes:null,profile:e.profileuser,username:e.user,userId:S.uid,date:new Date}]))),s((e=>e.map((e=>e.id===t?{...e,isactive:!0}:e)))))}(t.id),label:"reply"}))),o.createElement("div",{className:"col-sm-flex-column"})),H.slice().reverse().map((a=>a.ip===t.id&&o.createElement("div",{key:a.id,className:"d-flex flex-start w-100 wrap mt-4"},t.isactive?o.createElement("div",null,o.createElement(v.Link,{to:"/profileComponents/"+a.userId},o.createElement(y.Z.Img,{className:"w-20 rounded-circle shadow-1-strong me-3",src:a.profile,style:{width:"40px",height:"40px"},alt:"avatar",width:"65",height:"65"})),o.createElement("div",{className:"flex-grow-1 flex-shrink-1"},o.createElement("div",null,o.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.createElement(v.Link,{to:"/profileComponents/"+a.userId},"   ",o.createElement("p",{style:{color:e.dark?"ghostwhite":"black"},className:"mb-1"},a.username," ",o.createElement("span",{className:"small"},"-",Ge(a.date)))," ")),V[a.id]?o.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.createElement("p",{className:"small mb-0 "},a.message)):o.createElement("div",null,o.createElement("textarea",{placeholder:"add reply...",style:{height:24*be+"px",padding:"10px",borderRadius:"20px",border:"1px solid grey"},onChange:e=>((e,t)=>{const a=t.target.rows;t.target.rows=2;const r=Math.ceil((t.target.scrollHeight-24)/24);r===a?t.target.rows=r:(t.target.rows=r,ye(r)),G((a=>a.map((a=>a.id===e?{...a,message:t.target.value}:a))))})(a.id,e)}),o.createElement(h.z,{className:" bg-dark  p-1 mr-3",onClick:()=>me(a.id)},"post"),o.createElement(h.z,{className:"bg-danger p-1",onClick:()=>{return a.ip===t.id&&(a.ip,e=a.id,void G((t=>t.filter((t=>t.id!==e)))));var e}},"cancel"))))):o.createElement(o.Fragment,null))))))),o.createElement("div",{style:{borderBottom:"1px solid black",margin:"auto",width:"100%",padding:"0px"}}))))))))))))))))}},5980:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),i=n(a(7294)),o=n(a(5697));function n(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.displayName="FontAwesome",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.border,a=e.cssModule,s=e.className,o=e.fixedWidth,n=e.flip,l=e.inverse,d=e.name,c=e.pulse,p=e.rotate,m=e.size,u=e.spin,f=e.stack,h=e.tag,g=void 0===h?"span":h,b=e.ariaLabel,y=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),k=b?{"aria-label":b}:{"aria-hidden":!0},v=[];return a?(v.push(a.fa),v.push(a["fa-"+d]),m&&v.push(a["fa-"+m]),u&&v.push(a["fa-spin"]),c&&v.push(a["fa-pulse"]),t&&v.push(a["fa-border"]),o&&v.push(a["fa-fw"]),l&&v.push(a["fa-inverse"]),n&&v.push(a["fa-flip-"+n]),p&&v.push(a["fa-rotate-"+p]),f&&v.push(a["fa-stack-"+f])):(v.push("fa"),v.push("fa-"+d),m&&v.push("fa-"+m),u&&v.push("fa-spin"),c&&v.push("fa-pulse"),t&&v.push("fa-border"),o&&v.push("fa-fw"),l&&v.push("fa-inverse"),n&&v.push("fa-flip-"+n),p&&v.push("fa-rotate-"+p),f&&v.push("fa-stack-"+f)),s&&v.push(s),i.default.createElement(g,r({},y,k,{className:v.join(" ")}))}}]),t}(i.default.Component);l.propTypes={ariaLabel:o.default.string,border:o.default.bool,className:o.default.string,cssModule:o.default.object,fixedWidth:o.default.bool,flip:o.default.oneOf(["horizontal","vertical"]),inverse:o.default.bool,name:o.default.string.isRequired,pulse:o.default.bool,rotate:o.default.oneOf([90,180,270]),size:o.default.oneOf(["lg","2x","3x","4x","5x"]),spin:o.default.bool,stack:o.default.oneOf(["1x","2x"]),tag:o.default.string},t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=54a0dbd686671d272525594866c34f5761bbb546-348f2267ff7ff36e7bba.js.map