"use strict";
exports.id = 2691;
exports.ids = [2691];
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

/***/ 77464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94405);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99403);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57076);
//import { ButtonToolbar } from 'react-bootstrap';
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};const firebaseConfig922={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};function DeleteAccountButton({toastRef}){const one=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app0155');const two=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig922,'app01922');const{user,setUser,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app0155');const app44=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app01922');const{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:toast,1:setToast}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const handleDeleteAccount=async()=>{if(user){setLoading(true);try{const userId=user.uid;// Get the user ID before deleting the account
await user.delete();await signOut();(0,gatsby__WEBPACK_IMPORTED_MODULE_3__.navigate)('/');toastRef.current.show({severity:'success',summary:'Account deleted',detail:'Your account has been successfully deleted.'});await handleUserDeletion(userId);// Pass the user ID to the function
await handleUserDeleteData(userId);}catch(error){if(error.code==='auth/requires-recent-login'){await signOut();toastRef.current.show({severity:'warn',summary:'Session expired',detail:'You need to sign in again to delete your account.'});}else{toastRef.current.show({severity:'error',summary:'Error deleting account',detail:error.message});}}finally{setLoading(false);}}};const handleUserDeletion=async userId=>{try{// Reference the comments path in the Realtime Database
const commentsRef=app44.database().ref('comments/cards');// Query the comments where userId matches the user ID
const snapshot=await commentsRef.orderByChild('userId').equalTo(userId).once('value');// Create an object to store the updates
const updates={};// Iterate through each comment
snapshot.forEach(childSnapshot=>{updates[childSnapshot.key]=null;});// Update the comments with null values to delete them
await commentsRef.update(updates);}catch(error){console.error('Error deleting user data:',error);}};const handleUserDeleteData=async userId=>{try{// Reference the profile path in the Realtime Database
const profileRef=app4.database().ref('profile');// Query the profile data once
const snapshot=await profileRef.once('value');// Create an object to store the updates
const updates={};// Iterate through each profile entry
snapshot.forEach(childSnapshot=>{// Check if the key (ID) matches the user ID
if(childSnapshot.key===userId){updates[childSnapshot.key]=null;}});// Update the profile data with null values to delete the entry
await profileRef.update(updates);}catch(error){console.error('Error deleting user data:',error);}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z,{style:{backgroundColor:'red',outline:"red"},severity:"danger",label:"I understand, delete my account",onClick:handleDeleteAccount,disabled:loading}));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteAccountButton);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-page-delete-account-button-js.js.map