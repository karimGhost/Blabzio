"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[2886],{4405:function(e,t,n){n.d(t,{a:function(){return s}});var a=n(7294),r=(n(6118),n(1019),n(4866));n(9319),n(6267),n(6953);const l={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function s(){r.Z.initializeApp(l,"app05");const e=r.Z.app("app05"),t=e,{0:n,1:s}=(0,a.useState)(null),{0:o,1:i}=(0,a.useState)();return(0,a.useEffect)((()=>{const t=e.auth().onAuthStateChanged((e=>{e?(s(e),i(!0)):(s(null),i(!1))}));return()=>t()}),[]),{apps:t,user:n,setUser:s,app05:e,loading:o,signInWithEmailAndPassword:function(t,n){return e.auth().signInWithEmailAndPassword(t,n)},signOut:function(){return s(""),e.auth().signOut()}}}},4127:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(5785),r=n(7294),l=n(3416),s=(n.p,n(4854)),o=n(1001),i=n(2552),c=n(4405);var u=function(e){const{user:t}=(0,c.a)(),n=(e.setImg,e.setUser,e.videoplay),{0:u,1:m}=(0,r.useState)(""),p=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useRef)(null),g=(0,r.useRef)(null),v=(0,r.useRef)(null),y=((0,r.useRef)(null),(0,r.useRef)(null)),h=(0,r.useRef)(null),E=(0,r.useRef)(null),b=(0,r.useRef)(null),N=(0,r.useRef)(null),x=(0,r.useRef)(null),k=(0,r.useRef)(null),w=e.setRecordedVideo,{0:O,1:S}=(0,r.useState)(null);(0,r.useEffect)((()=>(z(),S(null===O),p.current.addEventListener("timeupdate",A),()=>{p.current.removeEventListener("timeupdate",A)})),[]);const P=e.Image,I=e.Useris,R=e=>{const t=Math.floor(e/60);let n=Math.floor(e%60);return n=n<=9?"0"+n:n,t+":"+n},A=()=>{p.current&&d.current&&f.current&&(d.current.style.width=p.current.currentTime/p.current.duration*100+"%",f.current&&f.current.textContent&&(f.current.textContent=R(p.current.currentTime)+" : "+R(p.current.duration)))},{0:C,1:j}=(0,r.useState)([]),z=()=>{j(e.comments)},D=(0,r.useRef)(null),{0:K,1:F}=(0,r.useState)({userName:I,timePosted:"2hrs ago",profilePhoto:P,comment:"",userid:t?t.uid:"",id:(0,l.x0)()}),{0:U,1:M}=(0,r.useState)(!0);return r.createElement("div",{style:{background:D.current?"black":"white"},className:"ConBod "},r.createElement("div",{className:"containered"},O&&r.createElement("div",{className:"overlay",ref:h},r.createElement("div",{className:"howto"},r.createElement("div",{className:"explain"},r.createElement("ul",{className:"explain-list"},r.createElement("li",{className:"explain-details"},r.createElement("h2",{className:"explain-details-head"},"Likes"),r.createElement("span",{className:"icocolor explain-details-desc"},"Click the ",r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:""}))," to set a like on the video.")),r.createElement("li",{className:"explain-details"},r.createElement("h2",{className:"explain-details-head"},"Comments"),r.createElement("span",{className:"explain-details-desc icocolor"},"Click the ",r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:""})),"view comments."))),r.createElement("div",{className:"explain-video"},r.createElement("h2",{className:"explain-details-head explain-video"},"Video"),r.createElement("div",{className:"explain-video-bar"},r.createElement("div",{className:"explain-video-bar-w"})),r.createElement("span",{className:"explain-details-desc icocolor"},"Click through the video to navigate to a specific timeline."))),r.createElement("button",{onClick:function(){S(!1)},className:"howto-close",ref:E},"Got it"))),r.createElement("div",{className:"comments-container",style:{zIndex:"auto"},ref:b},r.createElement("div",{className:"comments-head"},r.createElement("span",{className:"comments-head-label",ref:v}),r.createElement("span",{onClick:()=>{p.current.pause&&(b.current.classList.remove("comments-active"),p.current.play(),p.current.style.cursor="default")},className:"comments-head-close",ref:N},"✕")),r.createElement("div",{className:"comments-list"},r.createElement("span",{ref:v},"Comments: ",e.comments&&e.comments.length),r.createElement("div",{ref:y},e.comments&&e.comments.map((e=>r.createElement("div",{key:e.id,className:"comments-item"},r.createElement("span",{className:"comment-top"},r.createElement("span",{className:"comment-top-logo",style:{backgroundImage:"url("+e.profilePhoto+")"}}),r.createElement("span",{className:"comment-top-details"},r.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.createElement(o.q,{image:"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp",className:"flex align-items-center bg-transparent justify-content-center mr-2",shape:"circle"}),r.createElement("span",{className:"user-name"},e.userName&&e.userName)),r.createElement("span",{style:{fontSize:"0.80rem"},className:"user-time "},e.timePosted&&e.timePosted),r.createElement("span",{className:"user-comment"},e.comment&&e.comment)))))))),r.createElement("div",{style:{position:"relative",height:"fit-content",width:"fit-content"}},r.createElement(i.g,{value:K.comment,onChange:e=>F((t=>({...t,comment:e.target.value}))),rows:3,cols:70}),r.createElement("button",{onClick:()=>{return t=e.id,w((e=>e.map((e=>e.id===t?{...e,comments:[].concat((0,a.Z)(e.comments),[K])}:e)))),console.log("values as is ",e.recordedVideos),void F((e=>({...e,comment:""})));var t},style:{position:"absolute",bottom:"0",right:"0"}},"comment"))),r.createElement("video",{src:n,className:"video",playsInline:!0,autoPlay:!0,loop:!0,onClick:()=>{p.current&&(U?p.current.pause():p.current.play(),M(!U))},ref:p}),r.createElement("div",{style:{position:"absolute",top:"10px",width:"100%",paddingLeft:"5px"},className:"flex-auto float-left ml-auto top "},r.createElement(o.q,{image:P&&P,className:"flex align-items-center bg-transparent  justify-content-center mr-2",size:"large",shape:"circle"}),r.createElement("h5",null,I&&I)),r.createElement("div",{className:"right"},r.createElement("div",{onClick:()=>{return n=e.id,void w((e=>e.map((e=>{if(e.id===n){const n=(0,a.Z)(e.likes);if(n.includes(t.uid)){const a=n.filter((e=>e!==t.uid));return k.current&&(k.current.src="https://assets.codepen.io/2629920/heart.png"),{...e,likes:a}}return k.current.src="https://assets.codepen.io/2629920/heart+%281%29.png",{...e,likes:[].concat((0,a.Z)(n),[t.uid])}}return e}))));var n},className:"icons-item right-icon"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:"",id:"likes-icon",ref:k})),r.createElement("span",{className:"icon-label likes right-label","data-likes":e.likes&&e.likes.length,ref:x},e.likes)),r.createElement("div",{onClick:()=>{b.current.classList.add("comments-active"),p.current.pause(),p.current.pause&&(p.current.style.cursor="pointer")},className:"icons-item right-icon"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:"",id:"comments-icon"})),r.createElement("span",{className:"icon-label comments right-label"},e.comments&&e.comments.length)),r.createElement("div",{className:"icons-item right-icon"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/share.png",alt:""})),r.createElement("span",{className:"icon-label shares right-label"},"94"))),r.createElement("div",{className:"bottom"},r.createElement("span",{className:"progress-duration",ref:f}),r.createElement("div",{className:"progress-range",title:"seek",ref:g,onClick:e=>{const t=e.nativeEvent.offsetX/g.current.offsetWidth;p.current.currentTime=t*p.current.duration}},r.createElement("div",{className:"progress-bar",ref:d})),r.createElement("div",{className:"icons"},r.createElement("div",{onClick:()=>(0,s.navigate)("/"),className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/home.png",alt:""})),r.createElement("span",{className:"icon-label"},"Home")),r.createElement("div",{className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/search_1.png",alt:""})),r.createElement("span",{className:"icon-label"},"Discover")),r.createElement("div",{className:"icons-item"},r.createElement("div",{className:"icons-item-add"},r.createElement("span",{className:"icon",style:{display:"flex"}},r.createElement("img",{src:"https://assets.codepen.io/2629920/add.png",alt:""})))),r.createElement("div",{className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/comment.png",alt:""})),r.createElement("span",{className:"icon-label"},"Inbox")),r.createElement("div",{onClick:()=>(0,s.navigate)("/profileComponents/Myprofile"),className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/user+%281%29.png",alt:""})),r.createElement("span",{className:"icon-label"},"Me"))))))}},1001:function(e,t,n){n.d(t,{q:function(){return g}});var a=n(7294),r=n(3643),l=n(3652),s=n(6367);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function c(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,s,o=[],i=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=l.call(n)).done)&&(o.push(a.value),o.length!==t);i=!0);}catch(u){c=!0,r=u}finally{try{if(!i&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=l.V.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0}});function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=a.forwardRef((function(e,t){var n=a.useContext(s.Ou),l=d.getProps(e,n),o=a.useRef(null),i=p(a.useState(!1),2),m=i[0],g=i[1],v=d.setMetaData({props:l,state:{imageFailed:m}}).ptm,y=function(e){"default"===l.imageFallback?l.onImageError||(g(!0),e.target.src=null):e.target.src=l.imageFallback,l.onImageError&&l.onImageError(e)};a.useImperativeHandle(t,(function(){return{props:l,getElement:function(){return o.current}}}));var h=(0,r.AK)("p-avatar p-component",{"p-avatar-image":r.gb.isNotEmpty(l.image)&&!m,"p-avatar-circle":"circle"===l.shape,"p-avatar-lg":"large"===l.size,"p-avatar-xl":"xlarge"===l.size,"p-avatar-clickable":!!l.onClick},l.className),E=(0,r.dG)({ref:o,style:l.style,className:h},d.getOtherProps(l),v("root")),b=l.template?r.gb.getJSXElement(l.template,l):function(){if(r.gb.isNotEmpty(l.image)&&!m){var e=(0,r.dG)({src:l.image,onError:y},v("image"));return a.createElement("img",u({alt:l.imageAlt},e))}if(l.label){var t=(0,r.dG)({className:"p-avatar-text"},v("label"));return a.createElement("span",t,l.label)}if(l.icon){var n=(0,r.dG)({className:"p-avatar-icon"},v("icon"));return r.Cz.getJSXIcon(l.icon,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),{props:l})}return null}();return a.createElement("div",E,b,l.children)}));g.displayName="Avatar"},2552:function(e,t,n){n.d(t,{g:function(){return m}});var a=n(7294),r=n(411),l=n(7074),s=n(3643),o=n(3652),i=n(6367);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var u=o.V.extend({defaultProps:{__TYPE:"InputTextarea",autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0}}),m=a.memo(a.forwardRef((function(e,t){var n=a.useContext(i.Ou),o=u.getProps(e,n),m=a.useRef(t),p=a.useRef(0),d=u.setMetaData({props:o}).ptm,f=function(e){var t=m.current;t&&s.p7.isVisible(t)&&(p.current||(p.current=t.scrollHeight,t.style.overflow="hidden"),(p.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",p.current=t.scrollHeight))};a.useEffect((function(){s.gb.combinedRefs(m,t)}),[m,t]),a.useEffect((function(){o.autoResize&&f(!0)}),[o.autoResize]);var g=a.useMemo((function(){return s.gb.isNotEmpty(o.value)||s.gb.isNotEmpty(o.defaultValue)}),[o.value,o.defaultValue]),v=s.gb.isNotEmpty(o.tooltip),y=(0,s.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":o.disabled,"p-filled":g,"p-inputtextarea-resizable":o.autoResize},o.className),h=(0,s.dG)({ref:m,className:y,onFocus:function(e){o.autoResize&&f(),o.onFocus&&o.onFocus(e)},onBlur:function(e){o.autoResize&&f(),o.onBlur&&o.onBlur(e)},onKeyUp:function(e){o.autoResize&&f(),o.onKeyUp&&o.onKeyUp(e)},onKeyDown:function(e){o.onKeyDown&&o.onKeyDown(e),o.keyfilter&&r.F.onKeyPress(e,o.keyfilter,o.validateOnly)},onBeforeInput:function(e){o.onBeforeInput&&o.onBeforeInput(e),o.keyfilter&&r.F.onBeforeInput(e,o.keyfilter,o.validateOnly)},onInput:function(e){var t=e.target;o.autoResize&&f(s.gb.isEmpty(t.value)),o.onInput&&o.onInput(e),s.gb.isNotEmpty(t.value)?s.p7.addClass(t,"p-filled"):s.p7.removeClass(t,"p-filled")},onPaste:function(e){o.onPaste&&o.onPaste(e),o.keyfilter&&r.F.onPaste(e,o.keyfilter,o.validateOnly)}},u.getOtherProps(o),d("root"));return a.createElement(a.Fragment,null,a.createElement("textarea",h),v&&a.createElement(l.u,c({target:m,content:o.tooltip},o.tooltipOptions,{pt:d("tooltip")})))})));m.displayName="InputTextarea"},411:function(e,t,n){n.d(t,{F:function(){return s}});var a=n(3643);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return s.DEFAULT_MASKS[e]?s.DEFAULT_MASKS[e]:e},onBeforeInput:function(e,t,n){!n&&a.p7.isAndroid()&&this.validateKey(e,e.data,t)},onKeyPress:function(e,t,n){n||a.p7.isAndroid()||e.ctrlKey||e.altKey||this.validateKey(e,e.key,t)},onPaste:function(e,t,n){if(!n){var a=this.getRegex(t);l(e.clipboardData.getData("text")).forEach((function(t){if(!a.test(t))return e.preventDefault(),!1}))}},validateKey:function(e,t,n){null!=t&&(1===t.length&&(this.getRegex(n).test(t)||e.preventDefault()))},validate:function(e,t){var n=e.target.value,a=!0,r=this.getRegex(t);return n&&!r.test(n)&&(a=!1),a}}},3416:function(e,t,n){n.d(t,{x0:function(){return a}});let a=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")}}]);
//# sourceMappingURL=component---src-pages-news-videoplayer-js-e4c0ad5d57cb061812ee.js.map