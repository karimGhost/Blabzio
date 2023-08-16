"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[1476],{3328:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m},default:function(){return i}});var n=a(5785),s=a(7294),r=a(4127),l=a(6109),o=(a(1405),a(4473)),c=(a(4405),a(3869));function i(){const{0:e,1:t}=(0,s.useState)(null),a=(0,s.useRef)(null),{0:i,1:m}=(0,s.useState)([]),{0:d,1:u}=(0,s.useState)(!1),{0:p,1:f}=(0,s.useState)(null),g=(0,s.useRef)(null),{0:h,1:E}=(0,s.useState)(!1),{0:v,1:y}=(0,s.useState)("user");(0,s.useEffect)((()=>{console.log("these are the recorded videos ",i)}),[i]);const b=async()=>{if(f(null),"MediaRecorder"in window)try{const e={audio:!0,video:{facingMode:v}},a={audio:!0},s=await navigator.mediaDevices.getUserMedia(a),r=await navigator.mediaDevices.getUserMedia(e);u(!0);const l=new MediaStream([].concat((0,n.Z)(s.getAudioTracks()),(0,n.Z)(r.getVideoTracks())));t(l),E(!0)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser."),E(!1)};(0,s.useEffect)((()=>{d&&a.current&&e&&(a.current.srcObject=e)}),[d,e]);const{0:N,1:k}=(0,s.useState)(c.Z),{0:x,1:R}=(0,s.useState)("");return s.createElement("main",{className:h&&"boxmain",style:{marginTop:"150px"}},s.createElement(o.Z,{setImg:k,setUser:R}),s.createElement("button",{onClick:b,style:{position:"fixed",top:"110px",zIndex:"5",margin:"0 20%",left:"0",right:"0",borderRadius:"15px"}},"Record Video +"),h&&s.createElement("div",{style:{zIndex:"50",height:"100vh",width:"100vw",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",background:"white"}},s.createElement(l.default,{setShowVid:E,recordedVideos:i,setRecordedVideos:m,getCameraPermission:b,stream:e,setStream:t,showVid:h,permission:d,setPermission:u,recordedVideo:p,setRecordedVideo:f,mediaRecorder:g,facingMode:v,setFacingMode:y,liveVideoFeed:a,stopCameraStream:()=>{e&&(e.getTracks().forEach((e=>e.stop())),t(null),u(!1),E(!1))}})),i&&i.reverse().map((e=>s.createElement("div",{key:e.id,className:"mtop"},s.createElement(r.default,{videoplay:e.recordedVideo&&e.recordedVideo,user:e.user&&e.user,setRecordedVideo:m,likes:e.likes,shares:e.shares,comments:e.comments,id:e.id,recordedVideos:i,setImg:k,setUser:R,Image:N,Useris:x})))))}const m=()=>s.createElement("title",null,"TheWall")},6109:function(e,t,a){a.r(t);var n=a(5785),s=a(7294),r=a(4405),l=a(3416);t.default=e=>{const t="video/webm",{user:a}=(0,r.a)(),{0:o,1:c}=(0,s.useState)("inactive"),{0:i,1:m}=(0,s.useState)([]),d=e.facingMode,u=e.setFacingMode,p=e.stream,f=e.setStream,g=e.liveVideoFeed,h=e.permission,E=e.setPermission,v=e.recordedVideo,y=e.setRecordedVideo,b=e.mediaRecorder;(0,s.useEffect)((()=>{h&&g.current&&p&&(g.current.srcObject=p)}),[h,p]);e.recordedVideos;const N=e.setRecordedVideos;return s.createElement("div",null,s.createElement("main",{className:e.showVid&&" boxmain"},s.createElement("div",{className:"video-controls"}),h&&g?s.createElement("div",{style:{position:"relative"},className:"video-player"},"recording"===o&&s.createElement("span",{style:{color:"red"}}," ",s.createElement("ul",null,s.createElement("li",{style:{color:"red",position:"absolute",zIndex:"20"},className:"recordmode"},o))),s.createElement("video",{className:"live-player  m-50",ref:g,autoPlay:!0,playsInline:!0}),h&&"inactive"===o?s.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",background:"transparent",border:"2px solid green",borderRadius:"50%",width:"3rem",height:"3rem"},onClick:async()=>{c("recording");const e=new MediaRecorder(p,{mimeType:t});b.current=e,b.current.start();let a=[];b.current.ondataavailable=e=>{void 0!==e.data&&0!==e.data.size&&a.push(e.data)},m(a)},type:"button"},s.createElement("i",{style:{display:"block",width:"2rem",height:"2rem",padding:"4px",background:"red",borderRadius:"50%",margin:"1px auto"}},"s")):null,"recording"===o?s.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",background:"transparent",border:"2px solid red",borderRadius:"50%",width:"3rem",height:"3rem"},onClick:()=>{E(!1),c("inactive"),b.current.stop(),b.current.onstop=()=>{const e=new Blob(i,{type:t}),a=URL.createObjectURL(e);y(a),m([])}},type:"button"},s.createElement("i",{style:{display:"block",width:"2rem",height:"2rem",padding:"4px",background:"green",borderRadius:"50%",margin:"1px auto"}},"p")):null,"inactive"===o&&s.createElement("button",{style:{position:"absolute",zIndex:"20",top:"0",right:"0"},type:"button",onClick:async()=>{p&&p.getTracks().forEach((e=>e.stop()));u("user"===d?"environment":"user"),await getCameraPermission()}}," switchcam ")):null,!h&&v?s.createElement("div",{className:"video-player"},s.createElement("video",{className:"recorded-player",src:v,controls:!0,autoPlay:!0}),s.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"}},s.createElement("button",{onClick:()=>{const t={user:a.uid,id:(0,l.x0)(),recordedVideo:v,likes:"",shares:"",comments:[]};N((e=>[].concat((0,n.Z)(e),[t]))),y([]),e.stopCameraStream(),e.setShowVid(!1),f(null)}},"post Video"),s.createElement("button",{onClick:e.getCameraPermission},"retake video"))):null))}},4127:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(5785),s=a(7294),r=a(3416),l=(a.p,a(4854)),o=a(1001),c=a(2552),i=a(4405);var m=function(e){const{user:t}=(0,i.a)(),a=(e.setImg,e.setUser,e.videoplay),{0:m,1:d}=(0,s.useState)(""),u=(0,s.useRef)(null),p=(0,s.useRef)(null),f=(0,s.useRef)(null),g=(0,s.useRef)(null),h=(0,s.useRef)(null),E=((0,s.useRef)(null),(0,s.useRef)(null)),v=(0,s.useRef)(null),y=(0,s.useRef)(null),b=(0,s.useRef)(null),N=(0,s.useRef)(null),k=(0,s.useRef)(null),x=(0,s.useRef)(null),R=e.setRecordedVideo,{0:w,1:C}=(0,s.useState)(null);(0,s.useEffect)((()=>(O(),C(null===w),u.current.addEventListener("timeupdate",S),()=>{u.current.removeEventListener("timeupdate",S)})),[]);const V=e.Image,I=e.Useris,P=e=>{const t=Math.floor(e/60);let a=Math.floor(e%60);return a=a<=9?"0"+a:a,t+":"+a},S=()=>{u.current&&p.current&&f.current&&(p.current.style.width=u.current.currentTime/u.current.duration*100+"%",f.current&&f.current.textContent&&(f.current.textContent=P(u.current.currentTime)+" : "+P(u.current.duration)))},{0:z,1:M}=(0,s.useState)([]),O=()=>{M(e.comments)},F=(0,s.useRef)(null),{0:T,1:U}=(0,s.useState)({userName:I,timePosted:"2hrs ago",profilePhoto:V,comment:"",userid:t?t.uid:"",id:(0,r.x0)()}),{0:B,1:D}=(0,s.useState)(!0);return s.createElement("div",{style:{background:F.current?"black":"white"},className:"ConBod "},s.createElement("div",{className:"containered"},w&&s.createElement("div",{className:"overlay",ref:v},s.createElement("div",{className:"howto"},s.createElement("div",{className:"explain"},s.createElement("ul",{className:"explain-list"},s.createElement("li",{className:"explain-details"},s.createElement("h2",{className:"explain-details-head"},"Likes"),s.createElement("span",{className:"icocolor explain-details-desc"},"Click the ",s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:""}))," to set a like on the video.")),s.createElement("li",{className:"explain-details"},s.createElement("h2",{className:"explain-details-head"},"Comments"),s.createElement("span",{className:"explain-details-desc icocolor"},"Click the ",s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:""})),"view comments."))),s.createElement("div",{className:"explain-video"},s.createElement("h2",{className:"explain-details-head explain-video"},"Video"),s.createElement("div",{className:"explain-video-bar"},s.createElement("div",{className:"explain-video-bar-w"})),s.createElement("span",{className:"explain-details-desc icocolor"},"Click through the video to navigate to a specific timeline."))),s.createElement("button",{onClick:function(){C(!1)},className:"howto-close",ref:y},"Got it"))),s.createElement("div",{className:"comments-container",style:{zIndex:"4"},ref:b},s.createElement("div",{className:"comments-head"},s.createElement("span",{className:"comments-head-label",ref:h}),s.createElement("span",{onClick:()=>{u.current.pause&&(b.current.classList.remove("comments-active"),u.current.play(),u.current.style.cursor="default")},className:"comments-head-close",ref:N},"✕")),s.createElement("div",{className:"comments-list"},s.createElement("span",{ref:h},"Comments: ",e.comments&&e.comments.length),s.createElement("div",{ref:E},e.comments&&e.comments.reverse().map((e=>s.createElement("div",{key:e.id,className:"comments-item"},s.createElement("span",{className:"comment-top"},s.createElement("span",{className:"comment-top-logo",style:{backgroundImage:"url("+e.profilePhoto+")"}}),s.createElement("span",{className:"comment-top-details"},s.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.createElement("span",{className:"user-name"},e.userName&&e.userName)),s.createElement("span",{style:{fontSize:"0.80rem"},className:"user-time "},e.timePosted&&e.timePosted),s.createElement("span",{className:"user-comment"},e.comment&&e.comment)))))))),s.createElement("div",{style:{position:"relative",height:"fit-content",width:"fit-content"}},s.createElement(c.g,{style:{width:"100%"},value:T.comment,onChange:e=>U((t=>({...t,comment:e.target.value}))),rows:3,cols:70}),s.createElement("button",{onClick:()=>{return t=e.id,R((e=>e.map((e=>e.id===t?{...e,comments:[].concat((0,n.Z)(e.comments),[T])}:e)))),console.log("values as is ",e.recordedVideos),void U((e=>({...e,comment:""})));var t},style:{position:"absolute",bottom:"0",right:"0"}},"comment"))),s.createElement("video",{src:a,className:"video",playsInline:!0,autoPlay:!0,loop:!0,onClick:()=>{u.current&&(B?u.current.pause():u.current.play(),D(!B))},ref:u}),s.createElement("div",{style:{position:"absolute",top:"10px",width:"100%",paddingLeft:"5px"},className:"flex-auto float-left ml-auto top "},s.createElement(o.q,{image:V&&V,className:"flex align-items-center bg-transparent  justify-content-center mr-2",size:"large",shape:"circle"}),s.createElement("h5",null,I&&I)),s.createElement("div",{className:"right"},s.createElement("div",{onClick:()=>{return a=e.id,void R((e=>e.map((e=>{if(e.id===a){const a=(0,n.Z)(e.likes);if(a.includes(t.uid)){const n=a.filter((e=>e!==t.uid));return x.current&&(x.current.src="https://assets.codepen.io/2629920/heart.png"),{...e,likes:n}}return x.current.src="https://assets.codepen.io/2629920/heart+%281%29.png",{...e,likes:[].concat((0,n.Z)(a),[t.uid])}}return e}))));var a},className:"icons-item right-icon"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:"",id:"likes-icon",ref:x})),s.createElement("span",{className:"icon-label likes right-label","data-likes":e.likes&&e.likes.length,ref:k},e.likes&&e.likes.length)),s.createElement("div",{onClick:()=>{b.current.classList.add("comments-active"),u.current.pause(),u.current.pause&&(u.current.style.cursor="pointer")},className:"icons-item right-icon"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:"",id:"comments-icon"})),s.createElement("span",{className:"icon-label comments right-label"},e.comments&&e.comments.length)),s.createElement("div",{className:"icons-item right-icon"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/share.png",alt:""})),s.createElement("span",{className:"icon-label shares right-label"},"94"))),s.createElement("div",{className:"bottom"},s.createElement("span",{className:"progress-duration",ref:f}),s.createElement("div",{className:"progress-range",title:"seek",ref:g,onClick:e=>{const t=e.nativeEvent.offsetX/g.current.offsetWidth;u.current.currentTime=t*u.current.duration}},s.createElement("div",{className:"progress-bar",ref:p})),s.createElement("div",{className:"icons"},s.createElement("div",{onClick:()=>(0,l.navigate)("/"),className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/home.png",alt:""})),s.createElement("span",{className:"icon-label"},"Home")),s.createElement("div",{className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/search_1.png",alt:""})),s.createElement("span",{className:"icon-label"},"Discover")),s.createElement("div",{className:"icons-item"},s.createElement("div",{className:"icons-item-add"},s.createElement("span",{className:"icon",style:{display:"flex"}},s.createElement("img",{src:"https://assets.codepen.io/2629920/add.png",alt:""})))),s.createElement("div",{className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/comment.png",alt:""})),s.createElement("span",{className:"icon-label"},"Inbox")),s.createElement("div",{onClick:()=>(0,l.navigate)("/profileComponents/Myprofile"),className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/user+%281%29.png",alt:""})),s.createElement("span",{className:"icon-label"},"Me"))))))}},2552:function(e,t,a){a.d(t,{g:function(){return d}});var n=a(7294),s=a(411),r=a(7074),l=a(3643),o=a(3652),c=a(6367);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var m=o.V.extend({defaultProps:{__TYPE:"InputTextarea",autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0}}),d=n.memo(n.forwardRef((function(e,t){var a=n.useContext(c.Ou),o=m.getProps(e,a),d=n.useRef(t),u=n.useRef(0),p=m.setMetaData({props:o}).ptm,f=function(e){var t=d.current;t&&l.p7.isVisible(t)&&(u.current||(u.current=t.scrollHeight,t.style.overflow="hidden"),(u.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",u.current=t.scrollHeight))};n.useEffect((function(){l.gb.combinedRefs(d,t)}),[d,t]),n.useEffect((function(){o.autoResize&&f(!0)}),[o.autoResize]);var g=n.useMemo((function(){return l.gb.isNotEmpty(o.value)||l.gb.isNotEmpty(o.defaultValue)}),[o.value,o.defaultValue]),h=l.gb.isNotEmpty(o.tooltip),E=(0,l.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":o.disabled,"p-filled":g,"p-inputtextarea-resizable":o.autoResize},o.className),v=(0,l.dG)({ref:d,className:E,onFocus:function(e){o.autoResize&&f(),o.onFocus&&o.onFocus(e)},onBlur:function(e){o.autoResize&&f(),o.onBlur&&o.onBlur(e)},onKeyUp:function(e){o.autoResize&&f(),o.onKeyUp&&o.onKeyUp(e)},onKeyDown:function(e){o.onKeyDown&&o.onKeyDown(e),o.keyfilter&&s.F.onKeyPress(e,o.keyfilter,o.validateOnly)},onBeforeInput:function(e){o.onBeforeInput&&o.onBeforeInput(e),o.keyfilter&&s.F.onBeforeInput(e,o.keyfilter,o.validateOnly)},onInput:function(e){var t=e.target;o.autoResize&&f(l.gb.isEmpty(t.value)),o.onInput&&o.onInput(e),l.gb.isNotEmpty(t.value)?l.p7.addClass(t,"p-filled"):l.p7.removeClass(t,"p-filled")},onPaste:function(e){o.onPaste&&o.onPaste(e),o.keyfilter&&s.F.onPaste(e,o.keyfilter,o.validateOnly)}},m.getOtherProps(o),p("root"));return n.createElement(n.Fragment,null,n.createElement("textarea",v),h&&n.createElement(r.u,i({target:d,content:o.tooltip},o.tooltipOptions,{pt:p("tooltip")})))})));d.displayName="InputTextarea"}}]);
//# sourceMappingURL=component---src-pages-news-the-wall-js-2ffc8e1705045813d9ea.js.map