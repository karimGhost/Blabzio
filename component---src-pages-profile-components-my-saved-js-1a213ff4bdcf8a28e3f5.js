(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[9520],{7056:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var s=a(3433),i=a(3218),n=a.n(i),r=a(7294),l=a(7500),o=a(4866),u=a(4405),c=a(3386),p=a(3416),d=a(3869),f=(a(6118),a(1019),a(982)),m=a(2073),g=(a(4473),a(1405)),b=a(9403),h=(a(1976),a(7489)),v=a(8447),y=a(2861),C=a(9417);a(6953);const k={apiKey:"AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",authDomain:"compo-57c97.firebaseapp.com",databaseURL:"https://compo-57c97-default-rtdb.firebaseio.com",projectId:"compo-57c97",storageBucket:"compo-57c97.appspot.com",messagingSenderId:"475037571261",appId:"1:475037571261:web:9db4f4bdd540a72bbb3fd4"},P={apiKey:"AIzaSyBh8ygMi8nTJ7WVcA9amKSwABs_NzJZQk4",authDomain:"chatszen.firebaseapp.com",databaseURL:"https://chatszen-default-rtdb.firebaseio.com",projectId:"chatszen",storageBucket:"chatszen.appspot.com",messagingSenderId:"83570132385",appId:"1:83570132385:web:b9d0772699726c7bb4f7e0",measurementId:"G-4S4BTTXP48"},w={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"},_={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"},x={apiKey:"AIzaSyAlILFCEiJQQJsQB2a0uidx61r9zfEVLWc",authDomain:"notifications-a1743.firebaseapp.com",databaseURL:"https://notifications-a1743-default-rtdb.firebaseio.com",projectId:"notifications-a1743",storageBucket:"notifications-a1743.appspot.com",messagingSenderId:"624660139679",appId:"1:624660139679:web:a73fd504b5ba8e7b005caa",measurementId:"G-BCF42GY6H1"};function E(){const e=(0,p.x0)(),{user:t}=(0,u.a)(),{0:a,1:i}=(0,r.useState)([]),{0:E,1:N}=(0,r.useState)(!0);o.Z.initializeApp(w,"app111");const O=o.Z.app("app111");o.Z.initializeApp(P,"app1312");const{0:S,1:j}=(0,r.useState)(!1),L=o.Z.app("app1312"),I=(o.Z.initializeApp(_,"app200"),o.Z.app("app200")),D=(o.Z.initializeApp(x,"app9"),o.Z.app("app9")),z=L.database(),T=t&&z.ref("savedNews/"+t.uid);o.Z.initializeApp(k,"app1819").database();(0,r.useEffect)((()=>{if(!T)return;const e=e=>{const t=e.val();if(t){i(t)}else i({})};return T.on("value",e),()=>{T.off("value",e)}}),[t]);const{0:M}=(0,r.useState)(40),{0:R,1:Z}=(0,r.useState)(1),A=a?Math.ceil(n()(a)&&Object.keys(a).length/M):0;console.log("totalpages "+A),console.log("currentPages "+R),console.log("itemsperpage "+M);const F=a&&Object.values(a).slice((R-1)*M,R*M),{0:B,1:G}=(0,r.useState)("Ent"),{0:U,1:V}=(0,r.useState)(!1),{0:q,1:J}=(0,r.useState)(!1),{0:K,1:W}=(0,r.useState)(!1),{0:Q,1:Y}=(0,r.useState)({}),{0:H,1:X}=(0,r.useState)([]),{0:$,1:ee}=(0,r.useState)(!1);(0,r.useEffect)((()=>{Q.id&&j(Q.id)}),[Q]),Q&&console.log("wateve",Q);const{0:te,1:ae}=(0,r.useState)({}),se=a=>{Y({id:e,message:a,font:"sans-serif",showCommentBox:"",liked:"0",disliked:"1",profile:ie,user:oe,datePosted:new Date,mail:t.email,userId:t.uid}),j(Q.id),ae(a),X({id:e,message:a,userid:t.uid,user:oe,datePosted:new Date}),ee(!0),N(!1),console.log("tis is te loo",Q)},{0:ie,1:ne}=(0,r.useState)(d.Z),{0:re,1:le}=(0,r.useState)({useris:null,userData:null}),oe=re.useris;(0,r.useEffect)((()=>{t&&t.email&&I.database().ref("profile").orderByChild("email").equalTo(t.email).once("value").then((e=>{if(e.exists()){const t=Object.keys(e.val()),a=e.val()[t];a&&a.username&&(a.username||alert("please finish setting up you account settings /profile"),le((e=>({...e,useris:a.username}))))}}))}),[t]),(0,r.useEffect)((()=>{t&&I.database().ref("profile/"+t.uid+"/profileImg").on("value",(e=>{if(console.log(JSON.stringify(e.val())),e.val())if("object"==typeof e.val()){const t=e.val();ne(t.profileImg)}else ne(e.val());else console.log("Snapshot value is null or undefined")}))}),[t]);const{0:ue,1:ce}=(0,r.useState)(!1),{0:pe,1:de}=(0,r.useState)(""),fe=e=>{!async function(e){try{const t=await O.database().ref("comments").orderByChild("id").equalTo(e).once("value");t&&t.exists()?(await O.database().ref("comments/cards/").update({...Q}),ee(!0),$&&Y({}),$&&ae({})):(O.database().ref("comments/cards/").push({...Q}),$&&Y({}),ee(!0))}catch(a){console.log(a)}I.database().ref("profile/").once("value",(e=>{e.forEach((e=>{const a=e.child("followers").val();if(a&&Object.keys(a).includes(t.uid)){const a=e.key;console.log("User with ID ",a," has ",t.uid," in their followers"),t.uid,t.uid;const s=D.database().ref("users/"+a+"/posts/");if(s.child("message")===H.message||s.child("message/title")===H.message.title)return;s.push().set({userId:a,cardid:H}).then((()=>{console.log("Post added successfully"),X([])})).catch((e=>{console.error("Error adding post:",e)}))}}))}))}(e),N(!0),alert(e),ee(!0),$&&j(!1)};function me(e){ce(e)}const ge=e=>null!==e.match(/\.(jpeg|jpg|gif|png)$/),be=e=>null!==e.match(/^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/),he=e=>{const t=e.match(/^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);return t?t[3]:""},ve=e=>{const t=new URLSearchParams;return t.set("title",e.title),t.set("imageSrc",e.images&&e.images[3]||m.Z),t.set("paragraphs",JSON.stringify(e.paragraphs)),t.toString()};return r.createElement(g.Z,null,r.createElement(h.Z,{light:q,setLight:J,off:U,setoff:V,da:B}),r.createElement("div",{className:"containe"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12"},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body "+(q&&"backframe")},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12"},r.createElement("h1",{className:"font-weight-600 mb-4"},"SavedNews"))),r.createElement("div",{className:"column"},r.createElement("div",{className:"row"},S?r.createElement("div",{className:"pp d-flex paddin jusify-center",style:{background:"",width:"95vw",backdropFilter:"blur(25px)",zIndex:"105",position:"fixed",top:"10px",left:"0",right:"0"}},r.createElement("div",{className:"fineEditor",style:{marginLeft:"19%",position:"relative"}},r.createElement(c.M,{value:"",onTextChange:e=>((e,t)=>{const a=Q.map((a=>a.id===e?{...a,message:t}:a));Y(a);const s=H.map((a=>a.id===e?{...a,message:t}:a));X(s)})(Q.id,e.htmlValue),onPaste:async e=>{const t=(e.clipboardData||window.clipboardData).getData("Text");if(ge(t))try{const e=await y.Z.get(t,{responseType:"blob"}),a=URL.createObjectURL(e.data);de(pe+('<img src="'+a+'" alt="Pasted Image" />'))}catch(a){console.error("Failed to fetch image:",a)}if(be(t)){const e=he(t);de(pe+('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+e+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'))}},placeholder:"Add Subject or leave blank",className:"ql-snow ql-editor-custom customed",style:{height:"320px",overflow:"scroll",width:"100%",marginLeft:"auto",marginRight:"auto"}}),r.createElement(b.z,{label:S?"post":"Edit",icon:"pi pi-upload",style:{zIndex:"3",position:"absolute",right:"0"},className:" p-button-dark p-button p-mt-2 p-2 bg-dark",onClick:()=>fe(Q.id)}),r.createElement(b.z,{icon:"pi pi-times",className:"p-button-danger p-button p-mt-2 p-0 m-0 exitbuttons",style:{zIndex:"3",position:"absolute",top:"0",right:"0"},onClick:()=>(Q.id,void($&&(Y({}),j(!1),ae({}),X([]))))}))):r.createElement(r.Fragment,null," "),F&&F.slice(0,10).map(((e,t)=>r.createElement("div",{key:t,className:"col-sm-6 col-lg-4 grid-margin"},r.createElement("div",{className:"col-sm- grid-margin"},r.createElement(l.Link,null,r.createElement("div",{onClick:()=>se(e),icon:ue===e&&"pi-file-export",onMouseEnter:()=>me(e),onMouseLeave:()=>me(!1),onMouseOVer:()=>me(e),onMouseDown:()=>me(!1),className:(!ue&&"image-container")+"  img-fluid image-container"},r.createElement(b.z,{style:{fontSize:"1.5rem",cursor:"pointer",position:"absolute",top:"0",left:"0",zIndex:"10",color:"slateblue",margin:"auto",width:"100%",height:"100%",background:"transparent",border:"none"},icon:"pi pi-file-export",onClick:()=>se(e)},r.createElement("span",{style:{}},"Share")),r.createElement("img",{style:{position:"relative",zIndex:"9"},src:e.images&&e.images[3]||m.Z,alt:"bannerImg",width:400,height:200,onClick:()=>{}})))),r.createElement("div",{className:"col-sm-8 grid-margin"},r.createElement(l.Link,{to:"/profileComponents/ReadingModeComponent?"+ve(e)}," ",r.createElement("h2",{className:"font-weight-600 mb-2 ",style:{width:"100%"},onClick:()=>{}},e.title.length>30?e.title.slice(0,33):e.title)),r.createElement("p",{className:"fs-13 text-muted mb-0"},r.createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),r.createElement("button",{onClick:()=>{!function(e){T.child(e).remove();const t=a.indexOf(e);-1!==t&&a.splice(t,1),a.push(e),i((0,s.Z)(a))}(Object.keys(a).find((t=>a[t]===e)))},style:{color:a[e.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},r.createElement(f.G,{icon:C.G8P,className:"savedit",style:{color:a[e.title]?"tomato":"orange"}})," remove "),r.createElement(l.Link,{to:"/profileComponents/ReadingModeComponent?"+ve(e)},r.createElement("p",{className:"fs-15",style:{width:"100%"},onClick:()=>{}},e.paragraphs[0].slice(0,200)+"...ReadMore"))))))))))))),r.createElement(v.Z,{totalPages:A,currentPage:R,handlePageChange:e=>{e<=A&&Z(e)}}))}},1976:function(e,t,a){"use strict";a.r(t);var s=a(7294),i=(a(7896),a(7056),a(2073));t.default=e=>{let{location:t}=e;const a=new URLSearchParams(t.search),n=a.get("title"),r=a.get("imageSrc"),l=JSON.parse(a.get("paragraphs")),{0:o,1:u}=(0,s.useState)([]);return s.createElement("div",{className:"container"},s.createElement("div",{style:{display:"none"}}),s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-8 offset-lg-2"},s.createElement("h2",{className:"text-center titled"},n),s.createElement("img",{className:"img-fluid",src:r||r?r:i.Z,alt:"Image"}),l&&l.map(((e,t)=>s.createElement("p",{key:t},e))))))}},2778:function(e){function t(e,a){if(!(this instanceof t))return new t(e,a);this.per_page=e||25,this.length=a||10}e.exports=t,t.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var s=Math.max(1,t-Math.floor(this.length/2)),i=Math.min(a,t+Math.floor(this.length/2));i-s+1<this.length&&(t<a/2?i=Math.min(a,i+(this.length-(i-s))):s=Math.max(1,s-(this.length-(i-s)))),i-s+1>this.length&&(t>a/2?s++:i--);var n=this.per_page*(t-1);n<0&&(n=0);var r=this.per_page*t-1;return r<0&&(r=0),r>Math.max(e-1,0)&&(r=Math.max(e-1,0)),{total_pages:a,pages:Math.min(i-s+1,a),current_page:t,first_page:s,last_page:i,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(r-n+1,e),first_result:n,last_result:r}}},9865:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=s?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(a,i,n):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(7294)),i=r(a(5697)),n=r(a(4184));function r(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,p(t).apply(this,arguments))}var a,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(i=[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,s=t.pageNumber;e.preventDefault(),a||this.props.onClick(s)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,i=(t.pageNumber,t.activeClass),r=t.itemClass,l=t.linkClass,o=t.activeLinkClass,u=t.disabledClass,c=t.isActive,p=t.isDisabled,d=t.href,m=t.ariaLabel,g=(0,n.default)(r,(f(e={},i,c),f(e,u,p),e)),b=(0,n.default)(l,f({},o,c));return s.default.createElement("li",{className:g,onClick:this.handleClick.bind(this)},s.default.createElement("a",{className:b,href:d,"aria-label":m},a))}}])&&u(a.prototype,i),r&&u(a,r),t}(s.Component);t.default=m,f(m,"propTypes",{pageText:i.default.oneOfType([i.default.string,i.default.element]),pageNumber:i.default.number.isRequired,onClick:i.default.func.isRequired,isActive:i.default.bool.isRequired,isDisabled:i.default.bool,activeClass:i.default.string,activeLinkClass:i.default.string,itemClass:i.default.string,linkClass:i.default.string,disabledClass:i.default.string,href:i.default.string}),f(m,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})},8447:function(e,t,a){"use strict";t.Z=void 0;var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=s?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(a,i,n):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(7294)),i=o(a(5697)),n=o(a(2778)),r=o(a(9865)),l=o(a(4184));function o(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function p(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var a,i,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(i=[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,i=t.pageRangeDisplayed,o=t.activePage,u=t.prevPageText,c=t.nextPageText,p=t.firstPageText,d=t.lastPageText,f=t.totalItemsCount,m=t.onChange,g=t.activeClass,b=t.itemClass,h=t.itemClassFirst,v=t.itemClassPrev,y=t.itemClassNext,C=t.itemClassLast,k=t.activeLinkClass,P=t.disabledClass,w=(t.hideDisabled,t.hideNavigation,t.linkClass),_=t.linkClassFirst,x=t.linkClassPrev,E=t.linkClassNext,N=t.linkClassLast,O=(t.hideFirstLastPages,t.getPageUrl),S=new n.default(a,i).build(f,o),j=S.first_page;j<=S.last_page;j++)e.push(s.default.createElement(r.default,{isActive:j===o,key:j,href:O(j),pageNumber:j,pageText:j+"",onClick:m,itemClass:b,linkClass:w,activeClass:g,activeLinkClass:k,ariaLabel:"Go to page number ".concat(j)}));return this.isPrevPageVisible(S.has_previous_page)&&e.unshift(s.default.createElement(r.default,{key:"prev"+S.previous_page,href:O(S.previous_page),pageNumber:S.previous_page,onClick:m,pageText:u,isDisabled:!S.has_previous_page,itemClass:(0,l.default)(b,v),linkClass:(0,l.default)(w,x),disabledClass:P,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(S.has_previous_page)&&e.unshift(s.default.createElement(r.default,{key:"first",href:O(1),pageNumber:1,onClick:m,pageText:p,isDisabled:!S.has_previous_page,itemClass:(0,l.default)(b,h),linkClass:(0,l.default)(w,_),disabledClass:P,ariaLabel:"Go to first page"})),this.isNextPageVisible(S.has_next_page)&&e.push(s.default.createElement(r.default,{key:"next"+S.next_page,href:O(S.next_page),pageNumber:S.next_page,onClick:m,pageText:c,isDisabled:!S.has_next_page,itemClass:(0,l.default)(b,y),linkClass:(0,l.default)(w,E),disabledClass:P,ariaLabel:"Go to next page"})),this.isLastPageVisible(S.has_next_page)&&e.push(s.default.createElement(r.default,{key:"last",href:O(S.total_pages),pageNumber:S.total_pages,onClick:m,pageText:d,isDisabled:S.current_page===S.total_pages,itemClass:(0,l.default)(b,C),linkClass:(0,l.default)(w,N),disabledClass:P,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return s.default.createElement("ul",{className:this.props.innerClass},e)}}])&&p(a.prototype,i),o&&p(a,o),t}(s.default.Component);t.Z=b,g(b,"propTypes",{totalItemsCount:i.default.number.isRequired,onChange:i.default.func.isRequired,activePage:i.default.number,itemsCountPerPage:i.default.number,pageRangeDisplayed:i.default.number,prevPageText:i.default.oneOfType([i.default.string,i.default.element]),nextPageText:i.default.oneOfType([i.default.string,i.default.element]),lastPageText:i.default.oneOfType([i.default.string,i.default.element]),firstPageText:i.default.oneOfType([i.default.string,i.default.element]),disabledClass:i.default.string,hideDisabled:i.default.bool,hideNavigation:i.default.bool,innerClass:i.default.string,itemClass:i.default.string,itemClassFirst:i.default.string,itemClassPrev:i.default.string,itemClassNext:i.default.string,itemClassLast:i.default.string,linkClass:i.default.string,activeClass:i.default.string,activeLinkClass:i.default.string,linkClassFirst:i.default.string,linkClassPrev:i.default.string,linkClassNext:i.default.string,linkClassLast:i.default.string,hideFirstLastPages:i.default.bool,getPageUrl:i.default.func}),g(b,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"⟨",firstPageText:"«",nextPageText:"⟩",lastPageText:"»",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})}}]);
//# sourceMappingURL=component---src-pages-profile-components-my-saved-js-1a213ff4bdcf8a28e3f5.js.map