"use strict";
exports.id = 8810;
exports.ids = [8810];
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

/***/ 85191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94405);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91871);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75159);
const firebaseConfig2={apiKey:"AIzaSyAxMN4OQLOisY94cVCgR96o3-HoY0l6ZQk",authDomain:"zenanewstoday.firebaseapp.com",projectId:"zenanewstoday",storageBucket:"zenanewstoday.appspot.com",messagingSenderId:"1042837214412",appId:"1:1042837214412:web:ac14f71cb3f41e21719e69",measurementId:"G-V8VEEWMFR9"};function Welcome(props){const{user,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();const{0:usernames,1:setUsernames}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app1');const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.app('app1');(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user&&user.email){app4.database().ref('prof').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){setUsernames(snapshotval.username);}}});}else{// handle the case where user is not defined or does not have an email property
setUsernames('anoonymous');}},[user&&user]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:props.greeting==="Good morning"||props.greeting==="Good afternoon"?"welcomePage":"welcomePageU"},user&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{id:"head1",class:"header"},props.greeting," ",props.greeting==="Good morning"||props.greeting==="Good afternoon"?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaSun */ .Mei,{style:{color:"#FCE570",fontSize:'4rem'}}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaMoon */ .TLr,{style:{color:"#F6F1D5"}})," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{id:"head2",class:"header"},"it's ",new Date().getHours()+':'+(new Date().getMinutes()<10?'0':'')+(new Date().getMinutes()+1)+" "+(new Date().getHours()<12?"Am":"Pm")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{id:"head3",class:"header"},"Welcome Back ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{color:"rgb(61, 30, 20)"}},user&&usernames)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x1"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x3"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x5"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x6"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x7"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x9"}))," ");}

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


/***/ })

};
;
//# sourceMappingURL=component---src-pages-articles-welcome-js.js.map