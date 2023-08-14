"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[1476,5691],{3328:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i},default:function(){return c}});var n=a(5785),s=a(7294),r=a(4127),o=a(6109),l=(a(1405),a(4473));function c(){const{0:e,1:t}=(0,s.useState)(null),a=(0,s.useRef)(null),{0:c,1:i}=(0,s.useState)(!1),{0:m,1:u}=(0,s.useState)(null),d=(0,s.useRef)(null),{0:p,1:f}=(0,s.useState)(!1),{0:g,1:h}=(0,s.useState)("user");return(0,s.useEffect)((()=>{c&&a.current&&e&&(a.current.srcObject=e)}),[c,e]),s.createElement("main",{style:{marginTop:"150px"}},s.createElement(l.Z,null),s.createElement("button",{onClick:async()=>{if(u(null),"MediaRecorder"in window)try{const e={audio:!0,video:{facingMode:g}},a={audio:!0},s=await navigator.mediaDevices.getUserMedia(a),r=await navigator.mediaDevices.getUserMedia(e);i(!0);const o=new MediaStream([].concat((0,n.Z)(s.getAudioTracks()),(0,n.Z)(r.getVideoTracks())));t(o),f(!0)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser."),f(!1)},style:{position:"fixed",top:"110px",zIndex:"5",margin:"0 20%",left:"0",right:"0",borderRadius:"15px"}},"Record Video +"),!p&&s.createElement(o.default,{stream:e,setStream:t,permission:c,setPermission:i,recordedVideo:m,setRecordedVideo:u,mediaRecorder:d,facingMode:g,setFacingMode:h,liveVideoFeed:a}),s.createElement("div",{className:'mtop width:"fit-content ", height:"fit-content ", marginTop:"50px"'},s.createElement(r.default,null)))}const i=()=>s.createElement("title",null,"TheWall")},6109:function(e,t,a){a.r(t);var n=a(7294);t.default=e=>{const t="video/webm",{0:a,1:s}=(0,n.useState)("inactive"),{0:r,1:o}=(0,n.useState)([]),l=e.facingMode,c=e.setFacingMode,i=e.stream,m=(e.setStream,e.liveVideoFeed),u=e.permission,d=e.setPermission,p=e.recordedVideo,f=e.setRecordedVideo,g=e.mediaRecorder;(0,n.useEffect)((()=>{u&&m.current&&i&&(m.current.srcObject=i)}),[u,i]);return n.createElement("div",null,n.createElement("main",null,n.createElement("div",{className:"video-controls"}),u&&m?n.createElement("div",{style:{position:"relative"},className:"video-player"},"recording"===a&&n.createElement("span",{style:{color:"red"}}," ",n.createElement("ul",null,n.createElement("li",{style:{color:"red",position:"absolute",zIndex:"20"},className:"recordmode"},a))),n.createElement("video",{className:"live-player w-100 m-50",ref:m,autoPlay:!0,playsInline:!0}),u&&"inactive"===a?n.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"0",color:"red",borderRadius:"50%",width:"3rem",height:"3rem",background:"transparent",border:"2px solid green",marginLeft:"50%",marginRight:"50%"},onClick:async()=>{s("recording");const e=new MediaRecorder(i,{mimeType:t});g.current=e,g.current.start();let a=[];g.current.ondataavailable=e=>{void 0!==e.data&&0!==e.data.size&&a.push(e.data)},o(a)},type:"button"},n.createElement("i",{style:{marginLeft:"50%",marginRight:"50%",width:"5rem",height:"5rem",padding:"4px",background:"green",borderRadius:"50%"}},"s")):null,"recording"===a?n.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"0",color:"red",borderRadius:"50%",width:"3rem",height:"3rem",background:"transparent",border:"2px solid red",marginLeft:"50%",marginRight:"50%"},onClick:()=>{d(!1),s("inactive"),g.current.stop(),g.current.onstop=()=>{const e=new Blob(r,{type:t}),a=URL.createObjectURL(e);f(a),o([])}},type:"button"},n.createElement("i",{style:{marginLeft:"50%",marginRight:"50%",width:"5rem",height:"5rem",padding:"4px",background:"green",borderRadius:"50%"}},"p")):null,"inactive"===a&&n.createElement("button",{style:{position:"absolute",zIndex:"20",top:"0",right:"0"},type:"button",onClick:async()=>{i&&i.getTracks().forEach((e=>e.stop()));c("user"===l?"environment":"user"),await getCameraPermission()}}," switchcam ")):null,!u&&p?n.createElement("div",{className:"video-player"},n.createElement("video",{className:"recorded-player",src:p,controls:!0,autoPlay:!0}),n.createElement("a",{download:!0,href:p},"Download Recording")):null))}},4127:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(5785),s=a(7294),r=(a.p,a(4854)),o=a(1001),l=a(2552);var c=function(){const{0:e,1:t}=(0,s.useState)([{userName:"Mescudi",timePosted:"Just now",profilePhoto:"https://media.timeout.com/images/105653190/image.jpg",comment:"It's a Akrapovic exhaust!!! Follow them for info 😎"},{userName:"Wes",timePosted:"3 mins ago",profilePhoto:"https://yeezymafia.com/content/images/2019/08/Kanye-West-adidas-Yeezy-Basketball-Shoe-YZY-BSKTBL.png",comment:"Love the color, whats the color code!"},{userName:"traviScott",timePosted:"48 mins ago",profilePhoto:"https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ.jpg",comment:"💘💗💚💕🖤"},{userName:"mr305",timePosted:"2hrs ago",profilePhoto:"https://www.extremecustoms.com/inc.store/images/gallery/2008-gmc-sierra-2500-hd-with-leveling-kit-gear-alloy-big-block-726mb-22x12--44-offset-22-by-12-inch-wide-wheel-toyo-proxes-st-305-40r22-tire-pic4.jpg",comment:"I need one right now"},{userName:"its50",timePosted:"Just now",profilePhoto:"https://media.npr.org/assets/music/sotd/2009/11/50cent-606653ff4067b3c2488559211d4adddf497a103b-s800-c85.jpg",comment:"What wheels are those?"},{userName:"ciciFlores",timePosted:"12 mins ago",profilePhoto:"https://post.healthline.com/wp-content/uploads/2021/06/1336289-The-10-Best-Self-Help-Books-for-Women-in-2021-732x549-Feature.jpg",comment:"WOW love the wheel set up"},{userName:"boldJet",timePosted:"1 day ago",profilePhoto:"https://worldarchery.sport/sites/default/files/styles/header_desktop/https/photos.smugmug.com/OLYMPIC-GAMES/TOKYO-2020/23-JULY-QUALIFICATION/i-K2L7PfT/0/125fcb9f/X3/X21_7255-X3.jpg?h=2e8ccfe0&itok=fkr_S58k",comment:"Nice !!!"}]),{0:a,1:c}=(0,s.useState)(""),i=(0,s.useRef)(null),m=(0,s.useRef)(null),u=(0,s.useRef)(null),d=(0,s.useRef)(null),p=(0,s.useRef)(null),f=(0,s.useRef)(null),g=(0,s.useRef)(null),h=(0,s.useRef)(null),v=(0,s.useRef)(null),E=(0,s.useRef)(null),y=(0,s.useRef)(null),b=(0,s.useRef)(null),N=(0,s.useRef)(null),{0:w,1:x}=(0,s.useState)(null);(0,s.useEffect)((()=>(P(),x(null===w),i.current.addEventListener("timeupdate",R),()=>{i.current.removeEventListener("timeupdate",R)})),[]);const k=e=>{const t=Math.floor(e/60);let a=Math.floor(e%60);return a=a<=9?"0"+a:a,t+":"+a},R=()=>{i.current&&m.current&&u.current&&(m.current.style.width=i.current.currentTime/i.current.duration*100+"%",u.current&&u.current.textContent&&(u.current.textContent=k(i.current.currentTime)+" : "+k(i.current.duration)))},P=()=>{g.current.innerHTML="",g.current&&p.current.textContent&&(p.current.textContent=e.length+" comments",f.current.textContent=""+e.length),e.forEach((e=>{const t='\n          <div className="comments-item">\n            <span className="comment-top">\n              <span className="comment-top-logo" style={{ backgroundImage: `url(${comment.profilePhoto})` }}></span>\n              <span className="comment-top-details">\n             \n              <div style={{display:"flex", flexDirection:"column"}}>\n              <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center bg-transparent  justify-content-center mr-2" shape="circle" />\n              <span className="user-name">'+e.userName+'</span>\n              </div>\n\n                <span style={{fontSize:"0.80rem"}} className="user-time ">'+e.timePosted+'</span>\n\n                <span className="user-comment">'+e.comment+"</span>\n\n             \n            </span>\n          </div>";g.current.insertAdjacentHTML("afterbegin",t)})),c(Number(b.current.dataset.likes))},C=(0,s.useRef)(null),{0:I,1:z}=(0,s.useState)({userName:"mr305",timePosted:"2hrs ago",profilePhoto:"https://www.extremecustoms.com/inc.store/images/gallery/2008-gmc-sierra-2500-hd-with-leveling-kit-gear-alloy-big-block-726mb-22x12--44-offset-22-by-12-inch-wide-wheel-toyo-proxes-st-305-40r22-tire-pic4.jpg",comment:""});return s.createElement("div",{style:{background:C.current?"black":"white"},className:"ConBod "},s.createElement("div",{className:"containered"},w&&s.createElement("div",{className:"overlay",ref:h},s.createElement("div",{className:"howto"},s.createElement("div",{className:"explain"},s.createElement("ul",{className:"explain-list"},s.createElement("li",{className:"explain-details"},s.createElement("h2",{className:"explain-details-head"},"Likes"),s.createElement("span",{className:"icocolor explain-details-desc"},"Click the ",s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:""}))," to set a like on the video.")),s.createElement("li",{className:"explain-details"},s.createElement("h2",{className:"explain-details-head"},"Comments"),s.createElement("span",{className:"explain-details-desc icocolor"},"Click the ",s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:""})),"view comments."))),s.createElement("div",{className:"explain-video"},s.createElement("h2",{className:"explain-details-head explain-video"},"Video"),s.createElement("div",{className:"explain-video-bar"},s.createElement("div",{className:"explain-video-bar-w"})),s.createElement("span",{className:"explain-details-desc icocolor"},"Click through the video to navigate to a specific timeline."))),s.createElement("button",{onClick:function(){x(!1)},className:"howto-close",ref:v},"Got it"))),s.createElement("div",{className:"comments-container",ref:E},s.createElement("div",{className:"comments-head"},s.createElement("span",{className:"comments-head-label",ref:p}),s.createElement("span",{onClick:()=>{i.current.pause&&(E.current.classList.remove("comments-active"),i.current.play(),i.current.style.cursor="default")},className:"comments-head-close",ref:y},"✕")),s.createElement("div",{className:"comments-list",ref:g}),s.createElement("div",{style:{position:"relative",height:"fit-content",width:"fit-content"}},s.createElement(l.g,{value:I.comment,onChange:e=>z((t=>({...t,comment:e.target.value}))),rows:100,cols:30}),s.createElement("button",{onClick:function(){t((e=>[].concat((0,n.Z)(e),[I]))),z((e=>({...e,comment:""})))},style:{position:"absolute",bottom:"0",right:"0"}},"comment"))),s.createElement("video",{src:"https://assets.codepen.io/2629920/gt3.mp4",className:"video",playsInline:!0,autoPlay:!0,loop:!0,muted:!0,ref:i}),s.createElement("div",{style:{position:"absolute",top:"10px",left:"50px"},className:"flex-auto float-left ml-auto top "},s.createElement(o.q,{image:"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp",className:"flex align-items-center bg-transparent  justify-content-center mr-2",size:"large",shape:"circle"}),s.createElement("h5",null,"User")),s.createElement("div",{className:"right"},s.createElement("div",{onClick:()=>{a>=1e3||(N.current.src="https://assets.codepen.io/2629920/heart+%281%29.png",c(a+1),b.current&&b.current.textContent&&(b.current.textContent=999===a?"1K":a+1))},className:"icons-item right-icon"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:"",id:"likes-icon",ref:N})),s.createElement("span",{className:"icon-label likes right-label","data-likes":"999",ref:b},"999")),s.createElement("div",{onClick:()=>{E.current.classList.add("comments-active"),i.current.pause(),i.current.pause&&(i.current.style.cursor="pointer")},className:"icons-item right-icon"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:"",id:"comments-icon"})),s.createElement("span",{className:"icon-label comments right-label"})),s.createElement("div",{className:"icons-item right-icon"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/share.png",alt:""})),s.createElement("span",{className:"icon-label shares right-label"},"94"))),s.createElement("div",{className:"bottom"},s.createElement("span",{className:"progress-duration",ref:u}),s.createElement("div",{className:"progress-range",title:"seek",ref:d,onClick:e=>{const t=e.nativeEvent.offsetX/d.current.offsetWidth;i.current.currentTime=t*i.current.duration}},s.createElement("div",{className:"progress-bar",ref:m})),s.createElement("div",{className:"icons"},s.createElement("div",{onClick:()=>(0,r.navigate)("/"),className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/home.png",alt:""})),s.createElement("span",{className:"icon-label"},"Home")),s.createElement("div",{className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/search_1.png",alt:""})),s.createElement("span",{className:"icon-label"},"Discover")),s.createElement("div",{className:"icons-item"},s.createElement("div",{className:"icons-item-add"},s.createElement("span",{className:"icon",style:{display:"flex"}},s.createElement("img",{src:"https://assets.codepen.io/2629920/add.png",alt:""})))),s.createElement("div",{className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/comment.png",alt:""})),s.createElement("span",{className:"icon-label"},"Inbox")),s.createElement("div",{onClick:()=>(0,r.navigate)("/profileComponents/Myprofile"),className:"icons-item"},s.createElement("span",{className:"icon"},s.createElement("img",{src:"https://assets.codepen.io/2629920/user+%281%29.png",alt:""})),s.createElement("span",{className:"icon-label"},"Me"))))))}},2552:function(e,t,a){a.d(t,{g:function(){return u}});var n=a(7294),s=a(411),r=a(7074),o=a(3643),l=a(3652),c=a(6367);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var m=l.V.extend({defaultProps:{__TYPE:"InputTextarea",autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0}}),u=n.memo(n.forwardRef((function(e,t){var a=n.useContext(c.Ou),l=m.getProps(e,a),u=n.useRef(t),d=n.useRef(0),p=m.setMetaData({props:l}).ptm,f=function(e){var t=u.current;t&&o.p7.isVisible(t)&&(d.current||(d.current=t.scrollHeight,t.style.overflow="hidden"),(d.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",d.current=t.scrollHeight))};n.useEffect((function(){o.gb.combinedRefs(u,t)}),[u,t]),n.useEffect((function(){l.autoResize&&f(!0)}),[l.autoResize]);var g=n.useMemo((function(){return o.gb.isNotEmpty(l.value)||o.gb.isNotEmpty(l.defaultValue)}),[l.value,l.defaultValue]),h=o.gb.isNotEmpty(l.tooltip),v=(0,o.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":l.disabled,"p-filled":g,"p-inputtextarea-resizable":l.autoResize},l.className),E=(0,o.dG)({ref:u,className:v,onFocus:function(e){l.autoResize&&f(),l.onFocus&&l.onFocus(e)},onBlur:function(e){l.autoResize&&f(),l.onBlur&&l.onBlur(e)},onKeyUp:function(e){l.autoResize&&f(),l.onKeyUp&&l.onKeyUp(e)},onKeyDown:function(e){l.onKeyDown&&l.onKeyDown(e),l.keyfilter&&s.F.onKeyPress(e,l.keyfilter,l.validateOnly)},onBeforeInput:function(e){l.onBeforeInput&&l.onBeforeInput(e),l.keyfilter&&s.F.onBeforeInput(e,l.keyfilter,l.validateOnly)},onInput:function(e){var t=e.target;l.autoResize&&f(o.gb.isEmpty(t.value)),l.onInput&&l.onInput(e),o.gb.isNotEmpty(t.value)?o.p7.addClass(t,"p-filled"):o.p7.removeClass(t,"p-filled")},onPaste:function(e){l.onPaste&&l.onPaste(e),l.keyfilter&&s.F.onPaste(e,l.keyfilter,l.validateOnly)}},m.getOtherProps(l),p("root"));return n.createElement(n.Fragment,null,n.createElement("textarea",E),h&&n.createElement(r.u,i({target:u,content:l.tooltip},l.tooltipOptions,{pt:p("tooltip")})))})));u.displayName="InputTextarea"}}]);
//# sourceMappingURL=component---src-pages-news-the-wall-js-3103f056aa2590b85434.js.map