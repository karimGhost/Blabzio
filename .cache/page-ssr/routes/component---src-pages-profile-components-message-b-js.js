"use strict";
exports.id = 3310;
exports.ids = [3310];
exports.modules = {

/***/ 94405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88965);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75159);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9016);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67815);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30359);
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function useAuth(){firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app05');const app05=firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.app('app05');const apps=app05;const{0:user,1:setUser}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const unsubscribe=app05.auth().onAuthStateChanged(firebaseUser=>{if(firebaseUser){setUser(firebaseUser);setLoading(true);}else{setUser(null);setLoading(false);}});return()=>unsubscribe();},[]);function signInWithEmailAndPassword(email,password){return app05.auth().signInWithEmailAndPassword(email,password);}function signOut(){setUser("");return app05.auth().signOut();}return{apps,user,setUser,app05,loading,signInWithEmailAndPassword,signOut};}

/***/ }),

/***/ 36099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageB)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94405);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88965);
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25043);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57076);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30359);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70982);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25935);
// import from fas compat version
const firebaseConfig019={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function MessageB(props){const{0:zoom,1:setzoom}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const setFullSizeImage=props.setFullSizeImage;const fullSizeImage=props.fullSizeImage;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const images=document.querySelectorAll(".resizedImages");images.forEach(image=>{image.addEventListener("click",handleImageClick);return()=>{image.removeEventListener("click",handleImageClick);};});},[]);function handleImageClick(event){const clickedEl=event.target;if(clickedEl.tagName==="IMG"){// Do something with the clicked image youtube
setFullSizeImage(clickedEl.src);}}const ifZomed={position:zoom&&"absolute",top:zoom&&"0",left:zoom&&"0",right:zoom&&"0",bottom:zoom&&"0",zIndex:zoom&&"20",backgroundColor:zoom&&"rgba(0,0,0,0.11)"};// const handleImageOrVide = props.handleImageOrVideo;
const newMessage=props.message;const handleImageOrVideo=url=>{const fileExtension=url.split('.').pop().toLowerCase();if(fileExtension==='jpg'||fileExtension==='png'||fileExtension==='jpeg'||fileExtension==='gif'||fileExtension==='img'){// If the URL is pointing to an image
return`<div class="card p-image-preview-container flex justify-content-center"><Image className="sized resizedImages" id="resizedImages"   src="${url}" zoomSrc="${url}" alt="Image" class="resizedImages" width="250"   /></div>`;}else if(fileExtension==='mp4'){// If the URL is pointing to a video
return`<video src="${url}" controls>Your browser does not support the video tag.</video>`;}else if(fileExtension==='mp3'){// If the URL is pointing to an audio file
return`<audio src="${url}" controls>Your browser does not support the audio tag.</audio>`;}else{// If the URL is not pointing to an image, video, or audio file, check if it's a YouTube link
// const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/;
const match=url.match();if(match){// If the URL is a YouTube link, extract the video id
const videoId=match[5];return` <div height={300}> <div className="Fit" id="Fit" style="position: relative; padding-bottom: 56.25%; height: auto, width: 50%"><iframe src="https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"  allowfullscreen></iframe></div></div>`;}else{// If the URL is not pointing to an image, video, or YouTube link, return the URL
return url;}}};const generateMarkup=()=>{if(!newMessage){return null;// Or any default value or error handling you want
}const words=newMessage.split(' ');const elements=[];words.forEach((word,index)=>{if(word.startsWith('http')||word.startsWith('https')){const element=handleImageOrVideo(word)||/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:word,target:"_blank",rel:"noopener noreferrer"},word);elements.push(element);}else if(word.startsWith("data:image/")){// If the word is a base64-encoded image data URL, create an <img> tag i
elements.push(`<div class="p-image-preview-container wid card flex justify-content-center"><Image id="resizedImages"  className="sized resizedImages" src="${word}" zoomSrc="${word}" alt="Image" class="p-image-preview resizedImages" width="250"  /></div>`);}else{elements.push(word+' ');}});return elements.join('');};function resizeImage(){const htmlString=generateMarkup();const regex=/<img [^>]*>/g;const matches=htmlString?htmlString.match(regex)||[]:[];let modifiedHtmlString=htmlString;for(const match of matches){const widthRegex=/width="(\d+)"/;const heightRegex=/height="(\d+)"/;const srcRegex=/src="([^"]+)"/;// add regex to extract src attribute
const widthMatch=match.match(widthRegex);const heightMatch=match.match(heightRegex);const srcMatch=match.match(srcRegex);// match src attribute
const width=widthMatch?parseInt(widthMatch[1]):undefined;const height=heightMatch?parseInt(heightMatch[1]):undefined;const newWidth=width?Math.floor(width/2):undefined;const newHeight=height?Math.floor(height/2):undefined;const widthAttr=newWidth?` width="${newWidth}"`:"";const heightAttr=newHeight?` height="${newHeight}"`:"";const src=srcMatch?srcMatch[1]:'';// extract the src value from the match
const newTag=`<Image src="${src}" id="resizedImages" style="width:100%; max-width:300px" class="resizedImages p-image-preview p-image-mask" width="250" preview  />`;modifiedHtmlString=modifiedHtmlString.replace(match,`<div class=" p-image-preview-container card flex justify-content-center imagewraper d-flex-column">${newTag}</div>`);}return modifiedHtmlString;}const resizedHtml=resizeImage();const parsedHtml=typeof resizedHtml==='string'?(0,html_react_parser__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(resizedHtml,{decodeEntities:false}):null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"message info "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__.Link,{to:`/profileComponents/Profiles/?id=${props.personid}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{alt:props.named&&props.named,className:"img-circle medium-image",src:props.pic&&props.pic})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"message-body "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"message-info"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4",null," ",props.named&&props.named," ",props.id," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5",null,"  ",props.time)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"message-text d-flex"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:zoom?ifZomed:{overflow:"hidden",msTextOverflow:"ellipsis",whiteSpace:"pre-wrap",width:"fit-content",maxWidth:"100",wordBreak:"break-all",overflowWrap:"break-all",display:"flex",flexDirection:"column"},className:"w-100 message-text d-flex-column dflex"},parsedHtml," ")),fullSizeImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"full-size-image-overlay",onClick:()=>setFullSizeImage(null)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:fullSizeImage,alt:"Full-size Image"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null)));}

/***/ }),

/***/ 99184:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ActionCodeOperation, ActionCodeURL, AuthCredential, AuthErrorCodes, EmailAuthCredential, EmailAuthProvider, FacebookAuthProvider, FactorId, GithubAuthProvider, GoogleAuthProvider, OAuthCredential, OAuthProvider, OperationType, PhoneAuthCredential, PhoneAuthProvider, PhoneMultiFactorGenerator, ProviderId, RecaptchaVerifier, SAMLAuthProvider, SignInMethod, TotpMultiFactorGenerator, TotpSecret, TwitterAuthProvider, applyActionCode, beforeAuthStateChanged, browserLocalPersistence, browserPopupRedirectResolver, browserSessionPersistence, checkActionCode, confirmPasswordReset, connectAuthEmulator, createUserWithEmailAndPassword, debugErrorMap, deleteUser, fetchSignInMethodsForEmail, getAdditionalUserInfo, getAuth, getIdToken, getIdTokenResult, getMultiFactorResolver, getRedirectResult, inMemoryPersistence, indexedDBLocalPersistence, initializeAuth, initializeRecaptchaConfig, isSignInWithEmailLink, linkWithCredential, linkWithPhoneNumber, linkWithPopup, linkWithRedirect, multiFactor, onAuthStateChanged, onIdTokenChanged, parseActionCodeURL, prodErrorMap, reauthenticateWithCredential, reauthenticateWithPhoneNumber, reauthenticateWithPopup, reauthenticateWithRedirect, reload, sendEmailVerification, sendPasswordResetEmail, sendSignInLinkToEmail, setPersistence, signInAnonymously, signInWithCredential, signInWithCustomToken, signInWithEmailAndPassword, signInWithEmailLink, signInWithPhoneNumber, signInWithPopup, signInWithRedirect, signOut, unlink, updateCurrentUser, updateEmail, updatePassword, updatePhoneNumber, updateProfile, useDeviceLanguage, verifyBeforeUpdateEmail, verifyPasswordResetCode

// EXTERNAL MODULE: ./node_modules/@firebase/auth/dist/node-esm/totp-e47c784e.js + 1 modules
var totp_e47c784e = __webpack_require__(22549);
// EXTERNAL MODULE: ./node_modules/@firebase/util/dist/node-esm/index.node.esm.js
var index_node_esm = __webpack_require__(7917);
// EXTERNAL MODULE: ./node_modules/@firebase/app/dist/esm/index.esm2017.js + 2 modules
var index_esm2017 = __webpack_require__(10389);
// EXTERNAL MODULE: ./node_modules/@firebase/component/dist/esm/index.esm2017.js
var esm_index_esm2017 = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@firebase/auth/node_modules/node-fetch/lib/index.mjs
var lib = __webpack_require__(8333);
// EXTERNAL MODULE: ./node_modules/@firebase/logger/dist/esm/index.esm2017.js
var dist_esm_index_esm2017 = __webpack_require__(53333);
;// CONCATENATED MODULE: ./node_modules/@firebase/auth/dist/node-esm/index.js







//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/firebase/auth/dist/index.mjs

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 25043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
var h = Object.defineProperty;
var u = (n, t, e) => t in n ? h(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var c = (n, t, e) => (u(n, typeof t != "symbol" ? t + "" : t, e), e);

const p = (n, t) => typeof getComputedStyle < "u" ? getComputedStyle(n, null).getPropertyValue(t) : n.style.getPropertyValue(t), y = (n) => p(n, "overflow") + p(n, "overflow-y") + p(n, "overflow-x"), w = (n) => {
  if (!(n instanceof HTMLElement))
    return window;
  let t = n;
  for (; t && !(t === document.body || t === document.documentElement || !t.parentNode); ) {
    if (/(scroll|auto)/.test(y(t)))
      return t;
    t = t.parentNode;
  }
  return window;
};
class g extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(e) {
    super(e);
    c(this, "elementObserver");
    c(this, "wrapper");
    c(this, "lazyLoadHandler", (e) => {
      var o, i;
      const {
        onContentVisible: s
      } = this.props, [r] = e, {
        isIntersecting: l
      } = r;
      if (l) {
        this.setState({
          visible: !0
        }, () => {
          s && s();
        });
        const a = (o = this.wrapper) == null ? void 0 : o.current;
        a && a instanceof HTMLElement && ((i = this.elementObserver) == null || i.unobserve(a));
      }
    });
    this.elementObserver = null, this.wrapper = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.state = {
      visible: !1
    };
  }
  componentDidMount() {
    var o;
    this.getEventNode();
    const {
      offset: e,
      threshold: s
    } = this.props, r = {
      rootMargin: typeof e == "number" ? `${e}px` : e || "0px",
      threshold: s || 0
    };
    this.elementObserver = new IntersectionObserver(this.lazyLoadHandler, r);
    const l = (o = this.wrapper) == null ? void 0 : o.current;
    l instanceof HTMLElement && this.elementObserver.observe(l);
  }
  shouldComponentUpdate(e, s) {
    return s.visible;
  }
  componentWillUnmount() {
    var s, r;
    const e = (s = this.wrapper) == null ? void 0 : s.current;
    e && e instanceof HTMLElement && ((r = this.elementObserver) == null || r.unobserve(e));
  }
  getEventNode() {
    var e;
    return w((e = this.wrapper) == null ? void 0 : e.current);
  }
  render() {
    const {
      children: e,
      className: s,
      height: r,
      width: l,
      elementType: o
    } = this.props, {
      visible: i
    } = this.state, a = {
      height: r,
      width: l
    }, d = `LazyLoad${i ? " is-visible" : ""}${s ? ` ${s}` : ""}`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(o || "div", {
      className: d,
      style: a,
      ref: this.wrapper
    }, i && react__WEBPACK_IMPORTED_MODULE_0__.Children.only(e));
  }
}
c(g, "defaultProps", {
  elementType: "div",
  className: "",
  offset: 0,
  threshold: 0,
  width: null,
  onContentVisible: null,
  height: null
});



/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-components-message-b-js.js.map