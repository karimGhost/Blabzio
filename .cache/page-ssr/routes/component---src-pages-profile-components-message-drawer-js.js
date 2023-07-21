"use strict";
exports.id = 8175;
exports.ids = [8175];
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

/***/ 34266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94405);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88965);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83869);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57076);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30359);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70982);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25935);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59417);
/* harmony import */ var primereact_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4710);
// import fa from compat version
const firebaseConfig019={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function MessageDrawer(props){const{user}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig019,'app019');const app019=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app019');const SetupidA=props.SetupidA;const SetupidB=props.SetupidB;const SetsetupDp=props.SetsetupDp;const searchval=props.searchval;const setSearchId=props.setSearchId;const BlockedMe=props.BlockedMe;const setBlockedMe=props.setBlockedMe;const{0:Muted,1:setMuted}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const setlockedmeUsers=props.setlockedmeUsers;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!user)return;const db=app019.database().ref('profile');const otherUserIds=Array.isArray(props.idA)?props.idA:[props.idA];const filteredChats=[];const didblockme=[];const onValue=snapshot=>{snapshot.forEach(childSnapshot=>{const chatValues=childSnapshot.val();const chatId=childSnapshot.key;const hasOtherUserId=otherUserIds.some(id=>chatId.includes(id));if(chatId.includes(user.uid)){didblockme.push(chatValues);}if(hasOtherUserId){filteredChats.push(chatValues);}});const filteredEmails=filteredChats.map(obj=>obj.username);const blockedME=filteredChats.map(obj=>obj.blockedMe!==undefined&&Object.keys(obj.blockedMe)[0]&&obj.username);//const blockedthem = filteredChats.map(obj => obj.blockList && obj.blockList);
blockedME&&setBlockedMe(blockedME);const Mute=filteredChats.map(obj=>obj.Muted!==undefined&&Object.keys(obj.Muted)[0]&&obj.username);setMuted(Mute);console.log("i blocked these people",blockedME);console.log("peps are",filteredChats);// console.log("i blocked this person ", blockedthem)
const filteredDp=filteredChats.map(obj=>obj.profileImg?obj.profileImg:_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);SetupidA(filteredEmails);SetsetupDp(filteredDp);const chatIds=Object.keys(snapshot.val()||{});const chatIdWithUserUid=chatIds.find(id=>id.includes((user===null||user===void 0?void 0:user.uid)||''));if(chatIdWithUserUid){const chatValue=snapshot.val()[chatIdWithUserUid];props.setmyuser(Object.values(chatValue.username||"You"));props.setmypic(Object.values(chatValue.profileImg||{im: _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z}));}setlockedmeUsers(didblockme.map(obj=>obj.blockedMe!==undefined&&Object.keys(obj.blockedMe)[0]));//console.log( 'show those who blocked me ', didblockme  )
};db.on('value',onValue);return()=>{db.off('value',onValue);};},[user,props.idA,props.setmyuser,SetupidA,SetsetupDp]);const{0:showed,1:setShowed}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);/*
useEffect(() => {
 if(!props.setup) return;
searchval == props.setup && props.setup[props.setupidA] &&
props.setSearchId("jjj")

setmyUser

if(searchval && searchval.toLowerCase() === props.setup && props.setup[props.setupidA].toLowerCase()){
  console.log("if this two are equal props shows good", searchval && searchval.toLowerCase() === props.setup && props.setup[props.setupidA].toLowerCase()  )
}


}, [ props.setup && props.setup, searchval && searchval])

*/const BlockUser=async userId=>{// Remove the user ID from the "following" node of the current user
if(user){const userI=userId[0]===user.uid?userId[1]:userId[0];// Update the state with the modified followers array
await app019.database().ref(`profile/${user.uid}/following/${userI}`).remove();await app019.database().ref(`profile/${userI}/following/${user.uid}`).remove();// Remove the current user's ID from the "followers" node of the user being unfollowed
await app019.database().ref(`profile/${userI}/followers/${user.uid}`).remove();await app019.database().ref(`profile/${user.uid}/followers/${userI}`).remove();await app019.database().ref(`profile/${userI}/blockedMe/${user.uid}`).set(true);//    await app019.database().ref(`profile/${user.uid}/blockList/${userId.value}`).set(true);
alert("Blocked");}};const MuteUser=async userId=>{if(user){await app019.database().ref(`profile/${userId[0]===user.uid?userId[1]:userId[0]}/Muted/${user.uid}`).set(true);//    await app019.database().ref(`profile/${user.uid}/blockList/${userId.value}`).set(true);
alert("Muted");}};const setshowmuted=props.setshowmuted;const UnmuteUser=async(userId,mu)=>{if(user){await app019.database().ref(`profile/${userId[0]===user.uid?userId[1]:userId[0]}/Muted/${user.uid}`).remove();const newMutedUsers=Muted.filter(mutedUserId=>mutedUserId!==mu);setMuted(newMutedUsers);alert("unmuted",{mu});//    await app019.database().ref(ofile/${user.uid}/blockList/${userId.value}`).set(true);
}};const showmuted=props.showmuted;if(!user||!app019.database().ref('profile')||!props.setup){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_skeleton__WEBPACK_IMPORTED_MODULE_10__/* .Skeleton */ .O,{shape:"circle",size:"4rem",className:"mr-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_skeleton__WEBPACK_IMPORTED_MODULE_10__/* .Skeleton */ .O,{width:"5rem",className:"mb-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_skeleton__WEBPACK_IMPORTED_MODULE_10__/* .Skeleton */ .O,{width:"0rem",className:"mb-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_skeleton__WEBPACK_IMPORTED_MODULE_10__/* .Skeleton */ .O,{width:"2rem",className:"mb-2 ",style:{float:" right"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_skeleton__WEBPACK_IMPORTED_MODULE_10__/* .Skeleton */ .O,{width:"1rem",className:"mb-2 ",style:{float:" right"}})));}if(showmuted){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,props.setup&&BlockedMe&&BlockedMe.includes(props.setup[props.setupidA])?"":props.setup&&Muted.includes(props.setup[props.setupidA])&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{style:{borderLeftColor:props.Ref&&props.Ref>0?"green":"black"},"data-toggle":"tab","data-target":"#inbox-message-1",className:"active"},props.Ref&&props.Ref>0?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"message-count bg-success"}," ",props.Ref&&props.Ref>0&&props.Ref," "):"",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{style:{marginTop:"-65px"},alt:props.setup&&props.setup,className:"img-circle medium-image",src:props.setupDp&&props.setupDp[props.setupidA]}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"vcentered info-combo"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"no-margin-bottom name"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__.Link,{style:{fontSize:"1rem",fontWeight:"bold",fontFamily:"monospace",textShadow:props.Ref&&props.Ref>0?"1px 1px 0.20px black":"1px 1px 0.10px Highlight",color:"black"},to:`profileComponents/Profiles/?id=${props.personid}`},props.setup&&props.setup[props.setupidA]," ")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5",{style:{fontWeight:props.Ref&&props.Ref>0&&"bold",color:props.Ref&&props.Ref>0&&"black",textShadow:props.Ref&&props.Ref>0&&"1px 1px 0.25px Highlight"}},props.text),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:e=>{e.stopPropagation();setShowed(pre=>!pre);},style:{background:"transparent",border:"none",color:"black",float:"right",zIndex:"100"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faEllipsis */ .S6C,style:{marginTop:"5px",float:"right"}}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"contacts-add mt-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"message-time mt-1",style:{display:"flex"}},props.Ref&&props.Ref>0?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{style:{marginTop:"5px"},icon:props.time.includes("days")?_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faCalendarDay */ .$nv:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faUserClock */ .hnx}):"","   ",props.time," "),showed&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginLeft:"auto",marginRight:"auto",padding:"5px 20px",width:"100%"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:e=>{e.stopPropagation();BlockUser(props.idA);},style:{background:"transparent",border:"none",color:"tomato"},tooltip:"Block"}," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{className:"mx-2",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faBan */ .gPx,style:{marginTop:"5px"}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:e=>{e.stopPropagation();UnmuteUser(props.idA,props.setup&&props.setup[props.setupidA]);},tooltip:"Mute",style:{background:"transparent",border:"none",color:"black"}},"    ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{className:"mx-2",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faVolumeHigh */ .AQZ,style:{marginTop:"5px"}})," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{style:{background:"transparent",border:"none",color:"red"},tooltip:"report"},"  ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{className:"mx-2",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faFlag */ .RrC,style:{marginTop:"5px"}})," ")))));}else{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,props.setup&&BlockedMe&&BlockedMe.includes(props.setup[props.setupidA])?"":props.setup&&Muted.includes(props.setup[props.setupidA])?"":/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{style:{borderLeftColor:props.Ref&&props.Ref>0?"green":"black"},"data-toggle":"tab","data-target":"#inbox-message-1",className:"active"},props.Ref&&props.Ref>0?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"message-count bg-success"}," ",props.Ref&&props.Ref>0&&props.Ref," "):"",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{style:{marginTop:"-65px"},alt:"no Dp!",className:"img-circle medium-image",src:props.setupDp&&props.setupDp[props.setupidA]?props.setupDp[props.setupidA]:_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"vcentered info-combo"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"no-margin-bottom name"},props.setup&&props.setup[props.setupidA]?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__.Link,{style:{fontSize:"1rem",fontWeight:"bold",fontFamily:"monospace",textShadow:props.Ref&&props.Ref>0?"1px 1px 0.20px black":"1px 1px 0.10px Highlight",color:"black"},to:`/profileComponents/Profiles/?id=${props.personid}`},props.setup&&props.setup[props.setupidA]," "):"Deleted user"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5",{style:{fontWeight:props.Ref&&props.Ref>0&&"bold",color:props.Ref&&props.Ref>0&&"black",textShadow:props.Ref&&props.Ref>0&&"1px 1px 0.25px Highlight"}},props.text),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:e=>{e.stopPropagation();setShowed(pre=>!pre);},style:{background:"transparent",border:"none",color:"black",float:"right",zIndex:"100"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faEllipsis */ .S6C,style:{marginTop:"5px",float:"right"}}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"contacts-add mt-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"message-time mt-1",style:{display:"flex"}},props.Ref&&props.Ref>0?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{style:{marginTop:"5px"},icon:props.time.includes("days")?_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faCalendarDay */ .$nv:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faUserClock */ .hnx}):"","   ",props.time," "),showed&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginLeft:"auto",marginRight:"auto",padding:"5px 20px",width:"100%"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:e=>{e.stopPropagation();BlockUser(props.idA);},style:{background:"transparent",border:"none",color:"tomato"}}," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{className:"mx-2",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faBan */ .gPx,style:{marginTop:"5px"}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:e=>{e.stopPropagation();MuteUser(props.idA);},style:{background:"transparent",border:"none",color:"black"}},"   ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{className:"mx-2",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faVolumeMute */ .YLJ,style:{marginTop:"5px"}})," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{style:{background:"transparent",border:"none",color:"red"}},"  ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .G,{className:"mx-2",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faFlag */ .RrC,style:{marginTop:"5px"}})," ")))));}}

/***/ }),

/***/ 4710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13643);
/* harmony import */ var primereact_componentbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23652);




var SkeletonBase = primereact_componentbase__WEBPACK_IMPORTED_MODULE_1__/* .ComponentBase */ .V.extend({
  defaultProps: {
    __TYPE: 'Skeleton',
    shape: 'rectangle',
    size: null,
    width: '100%',
    height: '1rem',
    borderRadius: null,
    animation: 'wave',
    style: null,
    className: null,
    children: undefined
  }
});

var Skeleton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (inProps, ref) {
  var props = SkeletonBase.getProps(inProps);
  var _SkeletonBase$setMeta = SkeletonBase.setMetaData({
      props: props
    }),
    ptm = _SkeletonBase$setMeta.ptm;
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var style = props.size ? {
    width: props.size,
    height: props.size,
    borderRadius: props.borderRadius
  } : {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius
  };
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)('p-skeleton p-component', {
    'p-skeleton-circle': props.shape === 'circle',
    'p-skeleton-none': props.animation === 'none'
  }, props.className);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .dG)({
    ref: elementRef,
    className: className,
    style: style
  }, SkeletonBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", rootProps);
}));
Skeleton.displayName = 'Skeleton';




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
//# sourceMappingURL=component---src-pages-profile-components-message-drawer-js.js.map