"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[2886],{4127:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(5785),r=n(7294),o=(n.p,n(4854)),l=n(1001),s=n(2552);var i=function(e){const t=e.videoplay,n=e.user,{0:i,1:c}=(0,r.useState)([{userName:"Mescudi",timePosted:"Just now",profilePhoto:"https://media.timeout.com/images/105653190/image.jpg",comment:"It's a Akrapovic exhaust!!! Follow them for info 😎"},{userName:"Wes",timePosted:"3 mins ago",profilePhoto:"https://yeezymafia.com/content/images/2019/08/Kanye-West-adidas-Yeezy-Basketball-Shoe-YZY-BSKTBL.png",comment:"Love the color, whats the color code!"},{userName:"traviScott",timePosted:"48 mins ago",profilePhoto:"https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ.jpg",comment:"💘💗💚💕🖤"},{userName:"mr305",timePosted:"2hrs ago",profilePhoto:"https://www.extremecustoms.com/inc.store/images/gallery/2008-gmc-sierra-2500-hd-with-leveling-kit-gear-alloy-big-block-726mb-22x12--44-offset-22-by-12-inch-wide-wheel-toyo-proxes-st-305-40r22-tire-pic4.jpg",comment:"I need one right now"},{userName:"its50",timePosted:"Just now",profilePhoto:"https://media.npr.org/assets/music/sotd/2009/11/50cent-606653ff4067b3c2488559211d4adddf497a103b-s800-c85.jpg",comment:"What wheels are those?"},{userName:"ciciFlores",timePosted:"12 mins ago",profilePhoto:"https://post.healthline.com/wp-content/uploads/2021/06/1336289-The-10-Best-Self-Help-Books-for-Women-in-2021-732x549-Feature.jpg",comment:"WOW love the wheel set up"},{userName:"boldJet",timePosted:"1 day ago",profilePhoto:"https://worldarchery.sport/sites/default/files/styles/header_desktop/https/photos.smugmug.com/OLYMPIC-GAMES/TOKYO-2020/23-JULY-QUALIFICATION/i-K2L7PfT/0/125fcb9f/X3/X21_7255-X3.jpg?h=2e8ccfe0&itok=fkr_S58k",comment:"Nice !!!"}]);(0,r.useState)((()=>{console.log("if these are the comments ",i)}),[i]);const{0:m,1:u}=(0,r.useState)(""),p=(0,r.useRef)(null),f=(0,r.useRef)(null),d=(0,r.useRef)(null),g=(0,r.useRef)(null),h=(0,r.useRef)(null),v=(0,r.useRef)(null),y=(0,r.useRef)(null),b=(0,r.useRef)(null),E=(0,r.useRef)(null),N=(0,r.useRef)(null),w=(0,r.useRef)(null),x=(0,r.useRef)(null),k=(0,r.useRef)(null),{0:P,1:O}=(0,r.useState)(null);(0,r.useEffect)((()=>(C(),O(null===P),p.current.addEventListener("timeupdate",j),()=>{p.current.removeEventListener("timeupdate",j)})),[]);const S=e=>{const t=Math.floor(e/60);let n=Math.floor(e%60);return n=n<=9?"0"+n:n,t+":"+n},j=()=>{p.current&&f.current&&d.current&&(f.current.style.width=p.current.currentTime/p.current.duration*100+"%",d.current&&d.current.textContent&&(d.current.textContent=S(p.current.currentTime)+" : "+S(p.current.duration)))},C=()=>{y.current.innerHTML="",y.current&&h.current.textContent&&(h.current.textContent=i.length+" comments",v.current.textContent=""+i.length),i.forEach((e=>{const t='\n          <div className="comments-item">\n            <span className="comment-top">\n              <span className="comment-top-logo" style={{ backgroundImage: `url(${comment.profilePhoto})` }}></span>\n              <span className="comment-top-details">\n             \n              <div style={{display:"flex", flexDirection:"column"}}>\n              <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center bg-transparent  justify-content-center mr-2" shape="circle" />\n              <span className="user-name">'+e.userName+'</span>\n              </div>\n\n                <span style={{fontSize:"0.80rem"}} className="user-time ">'+e.timePosted+'</span>\n\n                <span className="user-comment">'+e.comment+"</span>\n\n             \n            </span>\n          </div>";y.current.insertAdjacentHTML("afterbegin",t)})),u(Number(x.current.dataset.likes))},A=(0,r.useRef)(null),{0:I,1:R}=(0,r.useState)({userName:"mr305",timePosted:"2hrs ago",profilePhoto:"https://www.extremecustoms.com/inc.store/images/gallery/2008-gmc-sierra-2500-hd-with-leveling-kit-gear-alloy-big-block-726mb-22x12--44-offset-22-by-12-inch-wide-wheel-toyo-proxes-st-305-40r22-tire-pic4.jpg",comment:""}),{0:K,1:z}=(0,r.useState)(!0);return r.createElement("div",{style:{background:A.current?"black":"white"},className:"ConBod "},r.createElement("div",{className:"containered"},P&&r.createElement("div",{className:"overlay",ref:b},r.createElement("div",{className:"howto"},r.createElement("div",{className:"explain"},r.createElement("ul",{className:"explain-list"},r.createElement("li",{className:"explain-details"},r.createElement("h2",{className:"explain-details-head"},"Likes"),r.createElement("span",{className:"icocolor explain-details-desc"},"Click the ",r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:""}))," to set a like on the video.")),r.createElement("li",{className:"explain-details"},r.createElement("h2",{className:"explain-details-head"},"Comments"),r.createElement("span",{className:"explain-details-desc icocolor"},"Click the ",r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:""})),"view comments."))),r.createElement("div",{className:"explain-video"},r.createElement("h2",{className:"explain-details-head explain-video"},"Video"),r.createElement("div",{className:"explain-video-bar"},r.createElement("div",{className:"explain-video-bar-w"})),r.createElement("span",{className:"explain-details-desc icocolor"},"Click through the video to navigate to a specific timeline."))),r.createElement("button",{onClick:function(){O(!1)},className:"howto-close",ref:E},"Got it"))),r.createElement("div",{className:"comments-container",ref:N},r.createElement("div",{className:"comments-head"},r.createElement("span",{className:"comments-head-label",ref:h}),r.createElement("span",{onClick:()=>{p.current.pause&&(N.current.classList.remove("comments-active"),p.current.play(),p.current.style.cursor="default")},className:"comments-head-close",ref:w},"✕")),r.createElement("div",{className:"comments-list",ref:y}),r.createElement("div",{style:{position:"relative",height:"fit-content",width:"fit-content"}},r.createElement(s.g,{value:I.comment,onChange:e=>R((t=>({...t,comment:e.target.value}))),rows:25,cols:100}),r.createElement("button",{onClick:function(){c((e=>[].concat((0,a.Z)(e),[I])))},style:{position:"absolute",bottom:"0",right:"0"}},"comment"))),r.createElement("video",{src:t,className:"video",playsInline:!0,autoPlay:!0,loop:!0,onClick:()=>{p.current&&(K?p.current.pause():p.current.play(),z(!K))},ref:p}),r.createElement("div",{style:{position:"absolute",top:"10px",left:"50px"},className:"flex-auto float-left ml-auto top "},r.createElement(l.q,{image:"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp",className:"flex align-items-center bg-transparent  justify-content-center mr-2",size:"large",shape:"circle"}),r.createElement("h5",null,n)),r.createElement("div",{className:"right"},r.createElement("div",{onClick:()=>{m>=1e3||(k.current.src="https://assets.codepen.io/2629920/heart+%281%29.png",u(m+1),x.current&&x.current.textContent&&(x.current.textContent=999===m?"1K":m+1))},className:"icons-item right-icon"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/heart.png",alt:"",id:"likes-icon",ref:k})),r.createElement("span",{className:"icon-label likes right-label","data-likes":"999",ref:x},"999")),r.createElement("div",{onClick:()=>{N.current.classList.add("comments-active"),p.current.pause(),p.current.pause&&(p.current.style.cursor="pointer")},className:"icons-item right-icon"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/chat.png",alt:"",id:"comments-icon"})),r.createElement("span",{className:"icon-label comments right-label"})),r.createElement("div",{className:"icons-item right-icon"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/share.png",alt:""})),r.createElement("span",{className:"icon-label shares right-label"},"94"))),r.createElement("div",{className:"bottom"},r.createElement("span",{className:"progress-duration",ref:d}),r.createElement("div",{className:"progress-range",title:"seek",ref:g,onClick:e=>{const t=e.nativeEvent.offsetX/g.current.offsetWidth;p.current.currentTime=t*p.current.duration}},r.createElement("div",{className:"progress-bar",ref:f})),r.createElement("div",{className:"icons"},r.createElement("div",{onClick:()=>(0,o.navigate)("/"),className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/home.png",alt:""})),r.createElement("span",{className:"icon-label"},"Home")),r.createElement("div",{className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/search_1.png",alt:""})),r.createElement("span",{className:"icon-label"},"Discover")),r.createElement("div",{className:"icons-item"},r.createElement("div",{className:"icons-item-add"},r.createElement("span",{className:"icon",style:{display:"flex"}},r.createElement("img",{src:"https://assets.codepen.io/2629920/add.png",alt:""})))),r.createElement("div",{className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/comment.png",alt:""})),r.createElement("span",{className:"icon-label"},"Inbox")),r.createElement("div",{onClick:()=>(0,o.navigate)("/profileComponents/Myprofile"),className:"icons-item"},r.createElement("span",{className:"icon"},r.createElement("img",{src:"https://assets.codepen.io/2629920/user+%281%29.png",alt:""})),r.createElement("span",{className:"icon-label"},"Me"))))))}},1001:function(e,t,n){n.d(t,{q:function(){return g}});var a=n(7294),r=n(3643),o=n(3652),l=n(6367);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function i(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==s(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function c(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,l,s=[],i=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=o.call(n)).done)&&(s.push(a.value),s.length!==t);i=!0);}catch(m){c=!0,r=m}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw r}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=o.V.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0}});function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=a.forwardRef((function(e,t){var n=a.useContext(l.Ou),o=f.getProps(e,n),s=a.useRef(null),i=p(a.useState(!1),2),u=i[0],g=i[1],h=f.setMetaData({props:o,state:{imageFailed:u}}).ptm,v=function(e){"default"===o.imageFallback?o.onImageError||(g(!0),e.target.src=null):e.target.src=o.imageFallback,o.onImageError&&o.onImageError(e)};a.useImperativeHandle(t,(function(){return{props:o,getElement:function(){return s.current}}}));var y=(0,r.AK)("p-avatar p-component",{"p-avatar-image":r.gb.isNotEmpty(o.image)&&!u,"p-avatar-circle":"circle"===o.shape,"p-avatar-lg":"large"===o.size,"p-avatar-xl":"xlarge"===o.size,"p-avatar-clickable":!!o.onClick},o.className),b=(0,r.dG)({ref:s,style:o.style,className:y},f.getOtherProps(o),h("root")),E=o.template?r.gb.getJSXElement(o.template,o):function(){if(r.gb.isNotEmpty(o.image)&&!u){var e=(0,r.dG)({src:o.image,onError:v},h("image"));return a.createElement("img",m({alt:o.imageAlt},e))}if(o.label){var t=(0,r.dG)({className:"p-avatar-text"},h("label"));return a.createElement("span",t,o.label)}if(o.icon){var n=(0,r.dG)({className:"p-avatar-icon"},h("icon"));return r.Cz.getJSXIcon(o.icon,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),{props:o})}return null}();return a.createElement("div",b,E,o.children)}));g.displayName="Avatar"},2552:function(e,t,n){n.d(t,{g:function(){return u}});var a=n(7294),r=n(411),o=n(7074),l=n(3643),s=n(3652),i=n(6367);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var m=s.V.extend({defaultProps:{__TYPE:"InputTextarea",autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0}}),u=a.memo(a.forwardRef((function(e,t){var n=a.useContext(i.Ou),s=m.getProps(e,n),u=a.useRef(t),p=a.useRef(0),f=m.setMetaData({props:s}).ptm,d=function(e){var t=u.current;t&&l.p7.isVisible(t)&&(p.current||(p.current=t.scrollHeight,t.style.overflow="hidden"),(p.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",p.current=t.scrollHeight))};a.useEffect((function(){l.gb.combinedRefs(u,t)}),[u,t]),a.useEffect((function(){s.autoResize&&d(!0)}),[s.autoResize]);var g=a.useMemo((function(){return l.gb.isNotEmpty(s.value)||l.gb.isNotEmpty(s.defaultValue)}),[s.value,s.defaultValue]),h=l.gb.isNotEmpty(s.tooltip),v=(0,l.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":s.disabled,"p-filled":g,"p-inputtextarea-resizable":s.autoResize},s.className),y=(0,l.dG)({ref:u,className:v,onFocus:function(e){s.autoResize&&d(),s.onFocus&&s.onFocus(e)},onBlur:function(e){s.autoResize&&d(),s.onBlur&&s.onBlur(e)},onKeyUp:function(e){s.autoResize&&d(),s.onKeyUp&&s.onKeyUp(e)},onKeyDown:function(e){s.onKeyDown&&s.onKeyDown(e),s.keyfilter&&r.F.onKeyPress(e,s.keyfilter,s.validateOnly)},onBeforeInput:function(e){s.onBeforeInput&&s.onBeforeInput(e),s.keyfilter&&r.F.onBeforeInput(e,s.keyfilter,s.validateOnly)},onInput:function(e){var t=e.target;s.autoResize&&d(l.gb.isEmpty(t.value)),s.onInput&&s.onInput(e),l.gb.isNotEmpty(t.value)?l.p7.addClass(t,"p-filled"):l.p7.removeClass(t,"p-filled")},onPaste:function(e){s.onPaste&&s.onPaste(e),s.keyfilter&&r.F.onPaste(e,s.keyfilter,s.validateOnly)}},m.getOtherProps(s),f("root"));return a.createElement(a.Fragment,null,a.createElement("textarea",y),h&&a.createElement(o.u,c({target:u,content:s.tooltip},s.tooltipOptions,{pt:f("tooltip")})))})));u.displayName="InputTextarea"},411:function(e,t,n){n.d(t,{F:function(){return l}});var a=n(3643);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return l.DEFAULT_MASKS[e]?l.DEFAULT_MASKS[e]:e},onBeforeInput:function(e,t,n){!n&&a.p7.isAndroid()&&this.validateKey(e,e.data,t)},onKeyPress:function(e,t,n){n||a.p7.isAndroid()||e.ctrlKey||e.altKey||this.validateKey(e,e.key,t)},onPaste:function(e,t,n){if(!n){var a=this.getRegex(t);o(e.clipboardData.getData("text")).forEach((function(t){if(!a.test(t))return e.preventDefault(),!1}))}},validateKey:function(e,t,n){null!=t&&(1===t.length&&(this.getRegex(n).test(t)||e.preventDefault()))},validate:function(e,t){var n=e.target.value,a=!0,r=this.getRegex(t);return n&&!r.test(n)&&(a=!1),a}}}}]);
//# sourceMappingURL=component---src-pages-news-videoplayer-js-9ab243caeb22a0c9741d.js.map