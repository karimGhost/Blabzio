"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[2886],{4405:function(e,t,n){n.d(t,{a:function(){return o}});var r=n(7294),a=(n(6118),n(1019),n(4866));n(9319),n(6267),n(6953);const l={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function o(){a.Z.initializeApp(l,"app05");const e=a.Z.app("app05"),t=e,{0:n,1:o}=(0,r.useState)(null),{0:s,1:i}=(0,r.useState)();return(0,r.useEffect)((()=>{const t=e.auth().onAuthStateChanged((e=>{e?(o(e),i(!0)):(o(null),i(!1))}));return()=>t()}),[]),{apps:t,user:n,setUser:o,app05:e,loading:s,signInWithEmailAndPassword:function(t,n){return e.auth().signInWithEmailAndPassword(t,n)},signOut:function(){return o(""),e.auth().signOut()}}}},4127:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(5785),a=n(7294),l=n(3416),o=(n.p,n(4854)),s=n(1001),i=n(2552),c=n(4405);var u=function(e){const{user:t}=(0,c.a)(),n=(e.setImg,e.setUser,e.videoplay),{0:u,1:m}=(0,a.useState)(""),p=(0,a.useRef)(null),f=(0,a.useRef)(null),d=(0,a.useRef)(null),g=(0,a.useRef)(null),v=(0,a.useRef)(null),y=((0,a.useRef)(null),(0,a.useRef)(null)),h=(0,a.useRef)(null),b=(0,a.useRef)(null),E=(0,a.useRef)(null),N=(0,a.useRef)(null),x=(0,a.useRef)(null),k=(0,a.useRef)(null),O=e.setRecordedVideo,{0:S,1:w}=(0,a.useState)(null);(0,a.useEffect)((()=>(z(),w(null===S),p.current.addEventListener("timeupdate",A),()=>{p.current.removeEventListener("timeupdate",A)})),[]);const I=e.Image,P=e.Useris,R=e=>{const t=Math.floor(e/60);let n=Math.floor(e%60);return n=n<=9?"0"+n:n,t+":"+n},A=()=>{p.current&&f.current&&d.current&&(f.current.style.width=p.current.currentTime/p.current.duration*100+"%",d.current&&d.current.textContent&&(d.current.textContent=R(p.current.currentTime)+" : "+R(p.current.duration)))},{0:C,1:j}=(0,a.useState)([]),z=()=>{j(e.comments)},D=(0,a.useRef)(null),{0:K,1:F}=(0,a.useState)({userName:P,timePosted:"2hrs ago",profilePhoto:I,comment:"",userid:t?t.uid:"",id:(0,l.x0)()}),{0:T,1:U}=(0,a.useState)(!0),{0:M,1:B}=(0,a.useState)(!1);return a.createElement("div",null,a.createElement("div",{style:{background:D.current?"black":"white"},className:"ConBod "},a.createElement("div",{className:"containered"},S&&a.createElement("div",{className:"overlay",ref:h},a.createElement("div",{className:"howto"},a.createElement("div",{className:"explain"},a.createElement("ul",{className:"explain-list"},a.createElement("li",{className:"explain-details"},a.createElement("h2",{className:"explain-details-head"},"Likes"),a.createElement("span",{className:"icocolor explain-details-desc"},"Click the ",a.createElement("span",{className:"icon"},a.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:""}))," to set a like on the video.")),a.createElement("li",{className:"explain-details"},a.createElement("h2",{className:"explain-details-head"},"Comments"),a.createElement("span",{className:"explain-details-desc icocolor"},"Click the ",a.createElement("span",{className:"icon"},a.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:""})),"view comments."))),a.createElement("div",{className:"explain-video"},a.createElement("h2",{className:"explain-details-head explain-video"},"Video"),a.createElement("div",{className:"explain-video-bar"},a.createElement("div",{className:"explain-video-bar-w"})),a.createElement("span",{className:"explain-details-desc icocolor"},"Click through the video to navigate to a specific timeline."))),a.createElement("button",{onClick:function(){w(!1)},className:"howto-close",ref:b},"Got it"))),a.createElement("div",{className:"comments-container",style:{zIndex:"4"},ref:E},a.createElement("div",{className:"comments-head"},a.createElement("span",{className:"comments-head-label",ref:v}),a.createElement("span",{onClick:()=>{p.current.pause&&(E.current.classList.remove("comments-active"),p.current.play(),p.current.style.cursor="default")},className:"comments-head-close",ref:N},"✕")),a.createElement("div",{className:"comments-list"},a.createElement("span",{ref:v},"Comments: ",e.comments&&e.comments.length),a.createElement("div",{ref:y},e.comments&&e.comments.reverse().map((e=>a.createElement("div",{key:e.id,className:"comments-item"},a.createElement("span",{className:"comment-top"},a.createElement("span",{className:"comment-top-logo",style:{backgroundImage:"url("+e.profilePhoto+")"}}),a.createElement("span",{className:"comment-top-details"},a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.createElement("span",{className:"user-name"},e.userName&&e.userName)),a.createElement("span",{style:{fontSize:"0.80rem"},className:"user-time "},e.timePosted&&e.timePosted),a.createElement("span",{className:"user-comment"},e.comment&&e.comment)))))))),a.createElement("div",{style:{position:"relative",height:"fit-content",width:"fit-content"}},a.createElement(i.g,{style:{width:"100%"},value:K.comment,onChange:e=>F((t=>({...t,comment:e.target.value}))),rows:3,cols:70}),a.createElement("button",{onClick:()=>{return t=e.id,O((e=>e.map((e=>e.id===t?{...e,comments:[].concat((0,r.Z)(e.comments),[K])}:e)))),console.log("values as is ",e.recordedVideos),void F((e=>({...e,comment:""})));var t},style:{position:"absolute",bottom:"0",right:"0"}},"comment"))),a.createElement("video",{src:n,className:"video",style:{position:"relative"},playsInline:!0,loop:!0,onClick:()=>{p.current&&(T?p.current.pause():p.current.play(),U(!T))},ref:p}," ",a.createElement("i",{onMouseOver:()=>B(!0),onMouseLeave:()=>B(!1),className:"pi pi-caret-right over ",style:{display:M?"flex":"none ",zIndex:"5",fontSize:"2.5rem",position:"absolute"}})),a.createElement("div",{className:"icons"},a.createElement("div",{className:"right"},a.createElement("div",{onClick:()=>{return n=e.id,void O((e=>e.map((e=>{if(e.id===n){const n=(0,r.Z)(e.likes);if(n.includes(t.uid)){const r=n.filter((e=>e!==t.uid));return k.current&&(k.current.src="https://assets.codepen.io/2629920/heart.png"),{...e,likes:r}}return k.current.src="https://assets.codepen.io/2629920/heart+%281%29.png",{...e,likes:[].concat((0,r.Z)(n),[t.uid])}}return e}))));var n},className:"icons-item right-icon"},a.createElement("span",{className:"icon"},a.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:"",id:"likes-icon",ref:k})),a.createElement("span",{className:"icon-label likes right-label","data-likes":e.likes&&e.likes.length,ref:x},e.likes&&e.likes.length)),a.createElement("div",{onClick:()=>{E.current.classList.add("comments-active"),p.current.pause(),p.current.pause&&(p.current.style.cursor="pointer")},className:"icons-item right-icon"},a.createElement("span",{className:"icon"},a.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:"",id:"comments-icon"})),a.createElement("span",{className:"icon-label comments right-label"},e.comments&&e.comments.length)),a.createElement("div",{className:"icons-item right-icon"},a.createElement("span",{className:"icon"},a.createElement("img",{src:"https://assets.codepen.io/2629920/share.png",alt:""})),a.createElement("span",{className:"icon-label shares right-label"},"4"))),a.createElement("div",{className:"bottom"},a.createElement("span",{className:"progress-duration",ref:d}),a.createElement("div",{className:"progress-range",title:"seek",ref:g,onClick:e=>{const t=e.nativeEvent.offsetX/g.current.offsetWidth;p.current.currentTime=t*p.current.duration}},a.createElement("div",{className:"progress-bar",ref:f}))))),a.createElement("div",{className:"bottomTitle",onClick:()=>(0,o.navigate)("/profileComponents/Myprofile"),style:{display:"flex"}},a.createElement("span",{className:"icon"},a.createElement(s.q,{image:I&&I,className:"flex align-items-center bg-transparent  justify-content-center mr-2",size:"large",shape:"circle"})),a.createElement("h2",null,"Title"))))}},1001:function(e,t,n){n.d(t,{q:function(){return g}});var r=n(7294),a=n(3643),l=n(3652),o=n(6367);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function i(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function c(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,s=[],i=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(s.push(r.value),s.length!==t);i=!0);}catch(u){c=!0,a=u}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=l.V.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0}});function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=r.forwardRef((function(e,t){var n=r.useContext(o.Ou),l=f.getProps(e,n),s=r.useRef(null),i=p(r.useState(!1),2),m=i[0],g=i[1],v=f.setMetaData({props:l,state:{imageFailed:m}}).ptm,y=function(e){"default"===l.imageFallback?l.onImageError||(g(!0),e.target.src=null):e.target.src=l.imageFallback,l.onImageError&&l.onImageError(e)};r.useImperativeHandle(t,(function(){return{props:l,getElement:function(){return s.current}}}));var h=(0,a.AK)("p-avatar p-component",{"p-avatar-image":a.gb.isNotEmpty(l.image)&&!m,"p-avatar-circle":"circle"===l.shape,"p-avatar-lg":"large"===l.size,"p-avatar-xl":"xlarge"===l.size,"p-avatar-clickable":!!l.onClick},l.className),b=(0,a.dG)({ref:s,style:l.style,className:h},f.getOtherProps(l),v("root")),E=l.template?a.gb.getJSXElement(l.template,l):function(){if(a.gb.isNotEmpty(l.image)&&!m){var e=(0,a.dG)({src:l.image,onError:y},v("image"));return r.createElement("img",u({alt:l.imageAlt},e))}if(l.label){var t=(0,a.dG)({className:"p-avatar-text"},v("label"));return r.createElement("span",t,l.label)}if(l.icon){var n=(0,a.dG)({className:"p-avatar-icon"},v("icon"));return a.Cz.getJSXIcon(l.icon,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),{props:l})}return null}();return r.createElement("div",b,E,l.children)}));g.displayName="Avatar"},2552:function(e,t,n){n.d(t,{g:function(){return m}});var r=n(7294),a=n(411),l=n(7074),o=n(3643),s=n(3652),i=n(6367);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var u=s.V.extend({defaultProps:{__TYPE:"InputTextarea",autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0}}),m=r.memo(r.forwardRef((function(e,t){var n=r.useContext(i.Ou),s=u.getProps(e,n),m=r.useRef(t),p=r.useRef(0),f=u.setMetaData({props:s}).ptm,d=function(e){var t=m.current;t&&o.p7.isVisible(t)&&(p.current||(p.current=t.scrollHeight,t.style.overflow="hidden"),(p.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",p.current=t.scrollHeight))};r.useEffect((function(){o.gb.combinedRefs(m,t)}),[m,t]),r.useEffect((function(){s.autoResize&&d(!0)}),[s.autoResize]);var g=r.useMemo((function(){return o.gb.isNotEmpty(s.value)||o.gb.isNotEmpty(s.defaultValue)}),[s.value,s.defaultValue]),v=o.gb.isNotEmpty(s.tooltip),y=(0,o.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":s.disabled,"p-filled":g,"p-inputtextarea-resizable":s.autoResize},s.className),h=(0,o.dG)({ref:m,className:y,onFocus:function(e){s.autoResize&&d(),s.onFocus&&s.onFocus(e)},onBlur:function(e){s.autoResize&&d(),s.onBlur&&s.onBlur(e)},onKeyUp:function(e){s.autoResize&&d(),s.onKeyUp&&s.onKeyUp(e)},onKeyDown:function(e){s.onKeyDown&&s.onKeyDown(e),s.keyfilter&&a.F.onKeyPress(e,s.keyfilter,s.validateOnly)},onBeforeInput:function(e){s.onBeforeInput&&s.onBeforeInput(e),s.keyfilter&&a.F.onBeforeInput(e,s.keyfilter,s.validateOnly)},onInput:function(e){var t=e.target;s.autoResize&&d(o.gb.isEmpty(t.value)),s.onInput&&s.onInput(e),o.gb.isNotEmpty(t.value)?o.p7.addClass(t,"p-filled"):o.p7.removeClass(t,"p-filled")},onPaste:function(e){s.onPaste&&s.onPaste(e),s.keyfilter&&a.F.onPaste(e,s.keyfilter,s.validateOnly)}},u.getOtherProps(s),f("root"));return r.createElement(r.Fragment,null,r.createElement("textarea",h),v&&r.createElement(l.u,c({target:m,content:s.tooltip},s.tooltipOptions,{pt:f("tooltip")})))})));m.displayName="InputTextarea"},411:function(e,t,n){n.d(t,{F:function(){return o}});var r=n(3643);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return o.DEFAULT_MASKS[e]?o.DEFAULT_MASKS[e]:e},onBeforeInput:function(e,t,n){!n&&r.p7.isAndroid()&&this.validateKey(e,e.data,t)},onKeyPress:function(e,t,n){n||r.p7.isAndroid()||e.ctrlKey||e.altKey||this.validateKey(e,e.key,t)},onPaste:function(e,t,n){if(!n){var r=this.getRegex(t);l(e.clipboardData.getData("text")).forEach((function(t){if(!r.test(t))return e.preventDefault(),!1}))}},validateKey:function(e,t,n){null!=t&&(1===t.length&&(this.getRegex(n).test(t)||e.preventDefault()))},validate:function(e,t){var n=e.target.value,r=!0,a=this.getRegex(t);return n&&!a.test(n)&&(r=!1),r}}},3416:function(e,t,n){n.d(t,{x0:function(){return r}});let r=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")}}]);
//# sourceMappingURL=component---src-pages-news-videoplayer-js-3fa80f1cb4263f677714.js.map