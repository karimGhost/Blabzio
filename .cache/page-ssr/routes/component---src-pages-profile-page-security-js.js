"use strict";
exports.id = 3630;
exports.ids = [3630];
exports.modules = {

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

/***/ }),

/***/ 96550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ Security)
});

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(57076);
// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.mjs
var dist = __webpack_require__(75159);
// EXTERNAL MODULE: ./src/Accounts/useAuth.js
var useAuth = __webpack_require__(94405);
// EXTERNAL MODULE: ./node_modules/firebase/compat/auth/dist/index.mjs + 3 modules
var auth_dist = __webpack_require__(67815);
// EXTERNAL MODULE: ./src/images/proxy.jpeg
var proxy = __webpack_require__(83869);
// EXTERNAL MODULE: ./src/pages/ProfilePage/Navbared.js
var Navbared = __webpack_require__(7043);
// EXTERNAL MODULE: ./node_modules/primereact/password/password.esm.js + 2 modules
var password_esm = __webpack_require__(93367);
// EXTERNAL MODULE: ./node_modules/primereact/toast/toast.esm.js
var toast_esm = __webpack_require__(74420);
// EXTERNAL MODULE: ./node_modules/primereact/confirmdialog/confirmdialog.esm.js
var confirmdialog_esm = __webpack_require__(40424);
// EXTERNAL MODULE: ./node_modules/primereact/hooks/hooks.esm.js
var hooks_esm = __webpack_require__(13308);
// EXTERNAL MODULE: ./node_modules/primereact/tooltip/tooltip.esm.js
var tooltip_esm = __webpack_require__(57074);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.esm.js
var utils_esm = __webpack_require__(13643);
;// CONCATENATED MODULE: ./node_modules/primereact/radiobutton/radiobutton.esm.js





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var RadioButtonBase = {
  defaultProps: {
    __TYPE: 'RadioButton',
    autoFocus: false,
    checked: false,
    className: null,
    disabled: false,
    id: null,
    inputId: null,
    inputRef: null,
    name: null,
    onChange: null,
    onClick: null,
    required: false,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    value: null,
    children: undefined
  },
  getProps: function getProps(props) {
    return utils_esm/* ObjectUtils */.gb.getMergedProps(props, RadioButtonBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return utils_esm/* ObjectUtils */.gb.getDiffProps(props, RadioButtonBase.defaultProps);
  }
};

var RadioButton = /*#__PURE__*/index_js_.memo( /*#__PURE__*/index_js_.forwardRef(function (inProps, ref) {
  var props = RadioButtonBase.getProps(inProps);
  var _React$useState = index_js_.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focusedState = _React$useState2[0],
    setFocusedState = _React$useState2[1];
  var elementRef = index_js_.useRef(null);
  var inputRef = index_js_.useRef(props.inputRef);
  var select = function select(event) {
    onClick(event);
  };
  var onClick = function onClick(event) {
    if (props.disabled) {
      return;
    }
    if (props.onChange || props.onClick) {
      var checked = props.checked;
      var radioClicked = event.target instanceof HTMLDivElement;
      var inputClicked = event.target === inputRef.current;
      var isInputToggled = inputClicked && event.target.checked !== checked;
      var isRadioToggled = radioClicked && (utils_esm/* DomHandler */.p7.hasClass(elementRef.current, 'p-radiobutton-checked') === checked ? !checked : false);
      if (isInputToggled || isRadioToggled) {
        var value = !checked;
        var eventData = {
          originalEvent: event,
          value: props.value,
          checked: value,
          stopPropagation: function stopPropagation() {
            event.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.preventDefault();
          },
          target: {
            type: 'radio',
            name: props.name,
            id: props.id,
            value: props.value,
            checked: value
          }
        };
        props.onClick && props.onClick(eventData);

        // do not continue if the user defined click wants to prevent
        if (event.defaultPrevented) {
          return;
        }
        props.onChange && props.onChange(eventData);
        if (isRadioToggled) {
          inputRef.current.checked = value;
        }
      }
      utils_esm/* DomHandler */.p7.focus(inputRef.current);
      event.preventDefault();
    }
  };
  var onFocus = function onFocus() {
    setFocusedState(true);
  };
  var onBlur = function onBlur() {
    setFocusedState(false);
  };
  var onKeyDown = function onKeyDown(event) {
    if (event.code === 'Space' || event.key === ' ') {
      // event.key is for Android support
      onClick(event);
    }
  };
  index_js_.useEffect(function () {
    if (inputRef.current) {
      inputRef.current.checked = props.checked;
    }
  }, [props.checked]);
  index_js_.useEffect(function () {
    utils_esm/* ObjectUtils */.gb.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  (0,hooks_esm/* useMountEffect */.nw)(function () {
    if (props.autoFocus) {
      utils_esm/* DomHandler */.p7.focus(inputRef.current, props.autoFocus);
    }
  });
  index_js_.useImperativeHandle(ref, function () {
    return {
      props: props,
      select: select,
      focus: function focus() {
        return utils_esm/* DomHandler */.p7.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  var hasTooltip = utils_esm/* ObjectUtils */.gb.isNotEmpty(props.tooltip);
  var otherProps = RadioButtonBase.getOtherProps(props);
  var ariaProps = utils_esm/* ObjectUtils */.gb.reduceKeys(otherProps, utils_esm/* DomHandler */.p7.ARIA_PROPS);
  var className = (0,utils_esm/* classNames */.AK)('p-radiobutton p-component', {
    'p-radiobutton-checked': props.checked,
    'p-radiobutton-disabled': props.disabled,
    'p-radiobutton-focused': focusedState
  }, props.className);
  var boxClassName = (0,utils_esm/* classNames */.AK)('p-radiobutton-box', {
    'p-highlight': props.checked,
    'p-disabled': props.disabled,
    'p-focus': focusedState
  });
  return /*#__PURE__*/index_js_.createElement(index_js_.Fragment, null, /*#__PURE__*/index_js_.createElement("div", _extends({
    ref: elementRef,
    id: props.id,
    className: className,
    style: props.style
  }, otherProps, {
    onClick: onClick
  }), /*#__PURE__*/index_js_.createElement("div", {
    className: "p-hidden-accessible"
  }, /*#__PURE__*/index_js_.createElement("input", _extends({
    ref: inputRef,
    id: props.inputId,
    type: "radio",
    name: props.name,
    defaultChecked: props.checked,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    disabled: props.disabled,
    required: props.required,
    tabIndex: props.tabIndex
  }, ariaProps))), /*#__PURE__*/index_js_.createElement("div", {
    className: boxClassName
  }, /*#__PURE__*/index_js_.createElement("div", {
    className: "p-radiobutton-icon"
  }))), hasTooltip && /*#__PURE__*/index_js_.createElement(tooltip_esm/* Tooltip */.u, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
RadioButton.displayName = 'RadioButton';



// EXTERNAL MODULE: ./node_modules/primereact/inputnumber/inputnumber.esm.js + 2 modules
var inputnumber_esm = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/pages/ProfilePage/DeleteAccountButton.js
var DeleteAccountButton = __webpack_require__(77464);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(19755);
// EXTERNAL MODULE: ./node_modules/primereact/componentbase/componentbase.esm.js
var componentbase_esm = __webpack_require__(23652);
;// CONCATENATED MODULE: ./node_modules/primereact/progressspinner/progressspinner.esm.js




var ProgressSpinnerBase = componentbase_esm/* ComponentBase */.V.extend({
  defaultProps: {
    __TYPE: 'ProgressSpinner',
    id: null,
    style: null,
    className: null,
    strokeWidth: '2',
    fill: 'none',
    animationDuration: '2s',
    children: undefined
  }
});

var ProgressSpinner = /*#__PURE__*/index_js_.memo( /*#__PURE__*/index_js_.forwardRef(function (inProps, ref) {
  var props = ProgressSpinnerBase.getProps(inProps);
  var elementRef = index_js_.useRef(null);
  var className = (0,utils_esm/* classNames */.AK)('p-progress-spinner', props.className);
  var _ProgressSpinnerBase$ = ProgressSpinnerBase.setMetaData({
      props: props
    }),
    ptm = _ProgressSpinnerBase$.ptm;
  index_js_.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = (0,utils_esm/* mergeProps */.dG)({
    id: props.id,
    ref: elementRef,
    style: props.style,
    className: className,
    role: 'alert',
    'aria-busy': true
  }, ptm('spinner'));
  var spinnerProps = (0,utils_esm/* mergeProps */.dG)({
    className: 'p-progress-spinner-svg',
    viewBox: '25 25 50 50',
    style: {
      animationDuration: props.animationDuration
    }
  }, ptm('spinner'));
  var circleProps = (0,utils_esm/* mergeProps */.dG)({
    className: 'p-progress-spinner-circle',
    cx: '50',
    cy: '50',
    r: '20',
    fill: props.fill,
    strokeWidth: props.strokeWidth,
    strokeMiterlimit: '10'
  }, ptm('circle'));
  return /*#__PURE__*/index_js_.createElement("div", rootProps, /*#__PURE__*/index_js_.createElement("svg", spinnerProps, /*#__PURE__*/index_js_.createElement("circle", circleProps)));
}));
ProgressSpinner.displayName = 'ProgressSpinner';



;// CONCATENATED MODULE: ./src/pages/ProfilePage/Security.js
//import { initializeApp } from "firebase/app";
//import Language from '../Language';
//import { useTranslation , Trans} from 'react-i18next' ./Profile;
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function Security(){const{user,setUser,loading,signOut}=(0,useAuth/* useAuth */.a)();dist/* default */.Z.initializeApp(firebaseConfig2,'app011');const toast=(0,index_js_.useRef)(null);const{0:clear,1:setClear}=(0,index_js_.useState)(false);const rejectFunc=()=>{toast.current.show({severity:'warn',summary:'Rejected',detail:'you canceled',life:3000});};const app4=dist/* default */.Z.app('app011');const database=app4.database();const{0:language,1:setLanguage}=(0,index_js_.useState)('');const{0:favorites,1:setFavorites}=(0,index_js_.useState)([]);const{0:profileImg,1:setProfileImg}=(0,index_js_.useState)(proxy/* default */.Z);const{0:currentPassword,1:setCurrentPassword}=(0,index_js_.useState)('');const{0:newPassword,1:setnewPassword}=(0,index_js_.useState)('');const{0:newPassword2,1:setnewPassword2}=(0,index_js_.useState)('');const sub=()=>{const auth=app4.auth();const credential=dist/* default */.Z.auth.EmailAuthProvider.credential(user.email,currentPassword);if(newPassword2===newPassword){user.reauthenticateWithCredential(credential).then(()=>{// User re-authenticated successfully, now change password
user.updatePassword(newPassword).then(()=>{// Password updated successfully
toast.current.show({severity:'success',summary:'Success',detail:'you have succesfully changed your password',life:4000});}).catch(error=>{// An error occurred while updating the password
toast.current.show({severity:'error',summary:'incorrect',detail:'An error occured check current password and try again',life:4000});});}).catch(error=>{// An error occurred while re-authenticating the user
toast.current.show({severity:'error',summary:'incorrect',detail:'password change rejected. please check current password',life:4000});});}else{toast.current.show({severity:'warn',summary:'Warning password missmatch',detail:'please check  passwords does not match',life:6000});}};function isActive({isCurrent}){return isCurrent?{classNameName:'active'}:null;}const confirm=()=>{(0,confirmdialog_esm/* confirmDialog */.V)({message:'Do you want to proceed ?',header:'Confirmation',icon:'pi pi-exclamation-triangle',accept:()=>sub(),reject:()=>rejectFunc()});};const{0:ifPrivate,1:setIfPrivate}=(0,index_js_.useState)(null);const{0:crashreport,1:setCrashReport}=(0,index_js_.useState)(null);const{0:twofactor,1:settwoFactor}=(0,index_js_.useState)(null);const{0:sms,1:setSms}=(0,index_js_.useState)(551234567);async function dataset(){if(user&&user.uid){const userRef=app4.database().ref('profile/'+user.uid);try{await userRef.update({isprivate:ifPrivate||false,crashreport:crashreport||true,twofactors:twofactor||false,sms:sms||"+"});}catch(error){console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error: '+error.message,life:9000});}}}const{0:Darks,1:setDarks}=(0,index_js_.useState)(false);(0,index_js_.useEffect)(()=>{if(user&&user.email){app4.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];snapshotval.darkmode&&setDarks(snapshotval.darkmode);setIfPrivate(snapshotval.isprivate);setCrashReport(snapshotval.crashreport);settwoFactor(snapshotval.twofactors);setSms((snapshotval===null||snapshotval===void 0?void 0:snapshotval.sms)||0);// setSms(snapshotvals.sms); // make sure this function is defined
}setClear(true);}).catch(error=>{console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error: '+error.message,life:3000});});}else{// handle the case where user is not defined or does not have a uid property
//   toast.current.show({
//   severity: 'warn',
// summary: 'Warning',
//  detail: 'User UID is not defined',
//life: 6000,
// });
}},[user]);(0,index_js_.useEffect)(()=>{dataset();},[ifPrivate]);(0,index_js_.useEffect)(()=>{dataset();},[crashreport]);(0,index_js_.useEffect)(()=>{dataset();},[twofactor]);const boo=()=>{toast.current.show({severity:'success',summary:'Success',detail:'succesfully updated',life:6000});dataset();};//delete acc 
if(!clear){return/*#__PURE__*/index_js_default().createElement("div",{style:{alignItems:"center",justifyItems:"center",paddingTop:"25%"},className:`card flex justify-content-center align-content-center ${Darks&&"darken"}`},/*#__PURE__*/index_js_default().createElement(ProgressSpinner,{className:"text-dark"}," ",/*#__PURE__*/index_js_default().createElement("h1",{className:"text-danger"},"Blabzio ")," "));}return/*#__PURE__*/index_js_default().createElement("div",{className:`${Darks&&"darken"}`},/*#__PURE__*/index_js_default().createElement(toast_esm/* Toast */.F,{ref:toast}),/*#__PURE__*/index_js_default().createElement("div",{className:`${Darks&&"darken"}container-xl px-4 mt-4 `},/*#__PURE__*/index_js_default().createElement(Navbared["default"],{setDarks:setDarks}),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-8"},/*#__PURE__*/index_js_default().createElement("div",{className:"card mb-4",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{className:"card-header",style:{color:"red"}},"Change Password"),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body"},/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"mb-3"},/*#__PURE__*/index_js_default().createElement("label",{className:"small mb-1",htmlFor:"form1"}),/*#__PURE__*/index_js_default().createElement(password_esm/* Password */.r,{feedback:false,className:"pass mb-4  center",id:"form1",value:currentPassword,onChange:event=>{setCurrentPassword(pre=>event.target.value);},placeholder:"Enter current password",toggleMask:true})),/*#__PURE__*/index_js_default().createElement("div",{className:"mb-3"},/*#__PURE__*/index_js_default().createElement("label",{className:"small mb-1",htmlFor:"form2"}),/*#__PURE__*/index_js_default().createElement(password_esm/* Password */.r,{className:"pass mb-4  center",id:"form2",value:newPassword,onChange:event=>{setnewPassword(pre=>event.target.value);},placeholder:"New Password",toggleMask:true})),/*#__PURE__*/index_js_default().createElement("div",{className:"mb-3"},/*#__PURE__*/index_js_default().createElement("label",{className:"small mb-1",htmlFor:"form3"}),/*#__PURE__*/index_js_default().createElement(password_esm/* Password */.r,{className:"pass mb-4  center",id:"form3",value:newPassword2,onChange:event=>{setnewPassword2(pre=>event.target.value);},placeholder:"Confirm Password",toggleMask:true})),/*#__PURE__*/index_js_default().createElement("button",{onClick:confirm,className:"btn btn-primary",type:"button"},"change password"),/*#__PURE__*/index_js_default().createElement(confirmdialog_esm/* ConfirmDialog */.Q,null)))),/*#__PURE__*/index_js_default().createElement("div",{className:"card mb-4",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{className:"card-header",style:{color:Darks&&"silver",fontWeight:"bold"}},"Security Preferences ",crashreport),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-1",style:{color:"orange",fontWeight:"bold"}},"Account Privacy"),/*#__PURE__*/index_js_default().createElement("p",{className:"smal text-muted mb-3 papol"},"By setting your account to private, your profile information and posts will not be visible to users outside of your user groups."),/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-4"},/*#__PURE__*/index_js_default().createElement(RadioButton,{inputId:"public",value:true,className:"mr-1 ",id:"radioPrivacy1",type:"radio",name:"radioPrivacy",onChange:event=>setIfPrivate(event.target.value),checked:ifPrivate===true}),/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"radioPrivacy1",style:{color:Darks&&"silver"},className:"form-check-label mb-3"},"Public (posts are available to all users)")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check"},/*#__PURE__*/index_js_default().createElement(RadioButton,{inputId:"public1",value:false,className:"mr-1 ",id:"radioPrivacy1",type:"radio",name:"radioPrivacy1",onChange:event=>setIfPrivate(event.target.value),checked:ifPrivate===false}),/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"public1",style:{color:Darks&&"silver"},className:"form-check-label mb-4",for:"radioPrivacy2"},"Private (posts are available to only users in your groups)"))),/*#__PURE__*/index_js_default().createElement("hr",{className:"my-6 mt-3"}),/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-1",style:{color:"orange",fontWeight:"bold"}},"Data Sharing"),/*#__PURE__*/index_js_default().createElement("p",{className:"small text-muted mb-2 papol",style:{color:"purple"}},"Sharing usage data can help us to improve our products and better serve our users as they navigate through our application. When you agree to share usage data with us, crash reports and usage analytics will be automatically sent to our development team for investigation."),/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-6"},/*#__PURE__*/index_js_default().createElement(RadioButton,{inputId:"public1",onClick:dataset,value:true,className:"mr-1 ",id:"radioPrivacy1",type:"radio",name:"radioPrivacy1",onChange:event=>setCrashReport(event.target.value),checked:crashreport===true}),/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"radioUsage1",className:"form-check-label",style:{color:Darks&&"silver"}},"Yes, share data and crash reports with app developers")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mt-5"},/*#__PURE__*/index_js_default().createElement(RadioButton,{inputId:"public1",onClick:dataset,value:false,className:"mr-1 ",id:"radioPrivacy1",type:"radio",name:"radioPrivacy1",onChange:event=>setCrashReport(event.target.value),checked:crashreport===false}),/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"radioUsage2",className:"form-check-label",style:{color:Darks&&"silver"}},"No, limit my data sharing with app developers")))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"card mb-4",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{className:"card-header",style:{color:"orange",fontWeight:"bold"}},"Two-Factor Authentication"),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body"},/*#__PURE__*/index_js_default().createElement("p",{style:{color:"purple"}},"Add another level of security to your account by enabling two-factor authentication. We will send you a text message to verify your login attempts on unrecognized devices and browsers."),/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-2"},/*#__PURE__*/index_js_default().createElement(RadioButton,{inputId:"public1",value:true,className:"mr-1 ",id:"radioPrivacy1",type:"radio",name:"radioPrivacy1",onChange:event=>settwoFactor(event.target.value),checked:twofactor===true}),/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"twoFactorOn",className:"form-check-label"},"On")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-2"},/*#__PURE__*/index_js_default().createElement(RadioButton,{inputId:"public1",value:false,className:"mr-1 ",id:"radioPrivacy1",type:"radio",name:"radioPrivacy1",onChange:event=>settwoFactor(event.target.value),checked:twofactor===false}),/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"twoFactorOff",className:"form-check-label"},"Off")),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-4"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"number-input",className:"small mb-1"},"SMS Number"),/*#__PURE__*/index_js_default().createElement(inputnumber_esm/* InputNumber */.R,{disabled:!twofactor,id:"number-input",value:sms,onValueChange:event=>setSms(event.target.value)})),/*#__PURE__*/index_js_default().createElement("button",{className:"btn btn-dark",style:{marginTop:"10px"},onClick:boo},"Save changes")))),/*#__PURE__*/index_js_default().createElement("div",{className:"card mb-4",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{className:"card-header",style:{color:"red"}},"Delete Account"),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body"},/*#__PURE__*/index_js_default().createElement("p",{style:{color:Darks&&"silver"}},"Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below."),/*#__PURE__*/index_js_default().createElement(DeleteAccountButton["default"],{toastRef:toast})))))));}const Head=()=>/*#__PURE__*/index_js_default().createElement("title",null,"Security");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-page-security-js.js.map