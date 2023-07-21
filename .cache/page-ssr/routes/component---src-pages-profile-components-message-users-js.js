"use strict";
exports.id = 2979;
exports.ids = [2979];
exports.modules = {

/***/ 63377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75159);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88965);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83869);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57076);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30359);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70982);
/* harmony import */ var primereact_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7730);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59417);
//import { useAuth } from '../../Accounts/useAuth';
//import { nanoid } from 'nanoid';
// import from compat version
//import ReactHtmlParser, { Comment } from "html-react-parser";
//import parse from 'html-react-parser';
//import { Carousel } from 'primereact/carousel fas';  youtube
const firebaseConfig019={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function Users(props){const setCreatemesage=props.setCreatemesage;const selectedUser=props.selectedUser;const{0:users,1:setUsers}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);const{0:uids,1:setuids}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);const{0:selectedAcc,1:setSelectedAcc}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);const{0:filteredUsers,1:setFilteredUsers}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);console.log("this s the selected Acc",selectedAcc);console.log("as you type logs data is",users.id);firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig019,'app0999');const app0999=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.app('app0999');//const {user} = useAuth(); typeof user.user === 'string' && 
const debouncedHandleChange=lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(event=>{let _filteredUsers;if(!users)return;if(!event.query.trim().length){_filteredUsers=[...users];}else{_filteredUsers=users.filter(useri=>{return useri&&useri.useri&&useri.useri.toLowerCase().startsWith(event.query.toLowerCase());});}setFilteredUsers(_filteredUsers);},100);const search=event=>{debouncedHandleChange(event);};function rest(){setCreatemesage(false);selectedAcc&&props.setId(uids);props.setShowTextArea(true);alert(uids);}const itemTemplate=users=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"flex align-items-center",onClick:rest},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img",{alt:"dP",src:users&&users.profileImg//className={`flag flag-${item.code.toLowerCase()} mr-2`} youtube 
,style:{width:'28px'}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{color:"black"}},users&&users.useri));};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(typeof selectedAcc==='object'){return;}app0999.database().ref('profile').orderByChild('username').equalTo(selectedAcc).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val())[0];const userData=snapshot.val()[userId];const useri={id:userId,useri:userData.username,profileImg:userData.profileImg?userData.profileImg:_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z};setUsers([useri]);setuids(useri.id);console.log("if this shows why is it id",useri.id);}else{setUsers([]);}});},[selectedAcc]);function setSearch(){if(!selectedAcc||selectedAcc.length<1){setCreatemesage(false);}if(typeof selectedAcc==='object'){return;}app0999.database().ref('profile').orderByChild('username').equalTo(selectedAcc).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val())[0];const userData=snapshot.val()[userId];const useri={id:userId,useri:userData.username,profileImg:userData.profileImg?userData.profileImg:_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z};setUsers([useri]);setuids(useri.id);console.log("if this shows why is it id",useri.id);}else{setUsers([]);}});}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_autocomplete__WEBPACK_IMPORTED_MODULE_9__/* .AutoComplete */ .Q,{field:"name",value:selectedAcc,suggestions:filteredUsers,placeholder:"Send message to...",className:"borderradius mt-1",style:{borderTopRightRadius:"0",borderBottomRightRadius:"0"},completeMethod:search,onChange:e=>setSelectedAcc(e.value),itemTemplate:itemTemplate}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button",{style:{background:"white",border:"none",fontSize:selectedAcc&&selectedAcc.length>0?"1rem":" 1.5rem",marginLeft:"-5px",marginTop:"-1px",padding:"10px",borderTopLeftRadius:"0",borderBottomLeftRadius:"0",paddingTop:selectedAcc&&selectedAcc.length>0&&"14px",paddingBottom:selectedAcc&&selectedAcc.length>0&&"14px"},onClick:setSearch,className:"btn btn-danger close-new-message"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{icon:selectedAcc&&selectedAcc.length>0?_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__/* .faSearch */ .wn1:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__/* .faTimes */ .NBC,style:{cursor:"pointer",color:selectedAcc&&selectedAcc.length>0?"yellowgreen":"red"},type:"submit"})));}

/***/ }),

/***/ 83869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/proxy-d399bc692ed8a689928018ed3b8a9403.jpeg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-components-message-users-js.js.map