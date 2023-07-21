"use strict";
exports.id = 1477;
exports.ids = [1477];
exports.modules = {

/***/ 22858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ Notifications)
});

// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.mjs
var dist = __webpack_require__(75159);
// EXTERNAL MODULE: ./src/Accounts/useAuth.js
var useAuth = __webpack_require__(94405);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(57076);
// EXTERNAL MODULE: ./node_modules/primereact/toast/toast.esm.js
var toast_esm = __webpack_require__(74420);
// EXTERNAL MODULE: ./node_modules/primereact/hooks/hooks.esm.js
var hooks_esm = __webpack_require__(13308);
// EXTERNAL MODULE: ./node_modules/primereact/icons/check/index.esm.js
var index_esm = __webpack_require__(59513);
// EXTERNAL MODULE: ./node_modules/primereact/tooltip/tooltip.esm.js
var tooltip_esm = __webpack_require__(57074);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.esm.js
var utils_esm = __webpack_require__(13643);
;// CONCATENATED MODULE: ./node_modules/primereact/checkbox/checkbox.esm.js






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

var CheckboxBase = {
  defaultProps: {
    __TYPE: 'Checkbox',
    autoFocus: false,
    checked: false,
    className: null,
    disabled: false,
    falseValue: false,
    icon: null,
    id: null,
    inputId: null,
    inputRef: null,
    name: null,
    onChange: null,
    onClick: null,
    onContextMenu: null,
    onMouseDown: null,
    readOnly: false,
    required: false,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    trueValue: true,
    value: null,
    children: undefined
  },
  getProps: function getProps(props) {
    return utils_esm/* ObjectUtils */.gb.getMergedProps(props, CheckboxBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return utils_esm/* ObjectUtils */.gb.getDiffProps(props, CheckboxBase.defaultProps);
  }
};

var Checkbox = /*#__PURE__*/index_js_.memo( /*#__PURE__*/index_js_.forwardRef(function (inProps, ref) {
  var props = CheckboxBase.getProps(inProps);
  var _React$useState = index_js_.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focusedState = _React$useState2[0],
    setFocusedState = _React$useState2[1];
  var elementRef = index_js_.useRef(null);
  var inputRef = index_js_.useRef(props.inputRef);
  var onClick = function onClick(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (props.onChange || props.onClick) {
      var _checked = isChecked();
      var checkboxClicked = event.target instanceof HTMLDivElement || event.target instanceof HTMLSpanElement || event.target instanceof Object;
      var isInputToggled = event.target === inputRef.current;
      var isCheckboxToggled = checkboxClicked && event.target.checked !== _checked;
      if (isInputToggled || isCheckboxToggled) {
        var value = _checked ? props.falseValue : props.trueValue;
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
            type: 'checkbox',
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
  var isChecked = function isChecked() {
    return props.checked === props.trueValue;
  };
  index_js_.useImperativeHandle(ref, function () {
    return {
      props: props,
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
  index_js_.useEffect(function () {
    utils_esm/* ObjectUtils */.gb.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  (0,hooks_esm/* useUpdateEffect */.rf)(function () {
    inputRef.current.checked = isChecked();
  }, [props.checked, props.trueValue]);
  (0,hooks_esm/* useMountEffect */.nw)(function () {
    if (props.autoFocus) {
      utils_esm/* DomHandler */.p7.focus(inputRef.current, props.autoFocus);
    }
  });
  var checked = isChecked();
  var hasTooltip = utils_esm/* ObjectUtils */.gb.isNotEmpty(props.tooltip);
  var otherProps = CheckboxBase.getOtherProps(props);
  var ariaProps = utils_esm/* ObjectUtils */.gb.reduceKeys(otherProps, utils_esm/* DomHandler */.p7.ARIA_PROPS);
  var className = (0,utils_esm/* classNames */.AK)('p-checkbox p-component', {
    'p-checkbox-checked': checked,
    'p-checkbox-disabled': props.disabled,
    'p-checkbox-focused': focusedState
  }, props.className);
  var boxClass = (0,utils_esm/* classNames */.AK)('p-checkbox-box', {
    'p-highlight': checked,
    'p-disabled': props.disabled,
    'p-focus': focusedState
  });
  var iconClassName = 'p-checkbox-icon p-c';
  var icon = checked ? props.icon || /*#__PURE__*/index_js_.createElement(index_esm/* CheckIcon */.n, {
    className: iconClassName
  }) : null;
  var checkboxIcon = utils_esm/* IconUtils */.Cz.getJSXIcon(icon, {
    className: iconClassName
  }, {
    props: props,
    checked: checked
  });
  return /*#__PURE__*/index_js_.createElement(index_js_.Fragment, null, /*#__PURE__*/index_js_.createElement("div", _extends({
    ref: elementRef,
    id: props.id,
    className: className,
    style: props.style
  }, otherProps, {
    onClick: onClick,
    onContextMenu: props.onContextMenu,
    onMouseDown: props.onMouseDown
  }), /*#__PURE__*/index_js_.createElement("div", {
    className: "p-hidden-accessible"
  }, /*#__PURE__*/index_js_.createElement("input", _extends({
    ref: inputRef,
    type: "checkbox",
    id: props.inputId,
    name: props.name,
    tabIndex: props.tabIndex,
    defaultChecked: checked,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    disabled: props.disabled,
    readOnly: props.readOnly,
    required: props.required
  }, ariaProps))), /*#__PURE__*/index_js_.createElement("div", {
    className: boxClass
  }, checkboxIcon)), hasTooltip && /*#__PURE__*/index_js_.createElement(tooltip_esm/* Tooltip */.u, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
Checkbox.displayName = 'Checkbox';



// EXTERNAL MODULE: ./src/pages/ProfilePage/Navbared.js
var Navbared = __webpack_require__(7043);
// EXTERNAL MODULE: ./node_modules/primereact/inputnumber/inputnumber.esm.js + 2 modules
var inputnumber_esm = __webpack_require__(94871);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(19755);
;// CONCATENATED MODULE: ./src/pages/ProfilePage/Notifications.js
//import { initializeApp } from "firebase/app";
//import Language from '../Language';
//import { useTranslation , Trans} from 'react-i18next';
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function Notifications(){const toast=(0,index_js_.useRef)(null);function isActive({isCurrent}){return isCurrent?{classNameName:'active'}:null;}dist/* default */.Z.initializeApp(firebaseConfig2,'app012');const app4=dist/* default */.Z.app('app012');const{user,setUser,loading,signOut}=(0,useAuth/* useAuth */.a)();const auth=app4.auth();const database=app4.database();const{0:disable,1:setdisabled}=(0,index_js_.useState)(true);const{0:emaildisable,1:setEmaildisable}=(0,index_js_.useState)(true);const{0:notifications,1:setNotifications}=(0,index_js_.useState)({ChangesMadeToAcc:false,ChangesMadeToGroup:false,SecurityAlert:false,somoneComments:false,somoneshares:false,Userfollows:false,newPostMadeinGroup:false,ReciveMessage:false,AutoSubscribeGroupnotif:false,AutoSubscribetonews:false,setSms:12});const handleNotificationsChange=event=>{const{name,value,checked}=event.target;setNotifications(prevState=>({...prevState,[name]:!prevState[name]}));};async function dataIsSet(){if(user&&user.uid){const userRef=app4.database().ref('profile/'+user.uid);try{await userRef.update({ChangesMadeToAcc:notifications.ChangesMadeToAcc,ChangesMadeToGroup:notifications.ChangesMadeToGroup,SecurityAlert:notifications.SecurityAlert,somoneComments:notifications.somoneComments,somoneshares:notifications.somoneshares,Userfollows:notifications.Userfollows,newPostMadeinGroup:notifications.newPostMadeinGroup,ReciveMessage:notifications.ReciveMessage,AutoSubscribeGroupnotif:notifications.AutoSubscribeGroupnotif,AutoSubscribetonews:notifications.AutoSubscribetonews});}catch(error){console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error is as: '+error.message,life:9000});}}}console.log(notifications.Userfollows);(0,index_js_.useEffect)(()=>{dataIsSet();},[notifications]);const{0:clear,1:setClear}=(0,index_js_.useState)(false);const{0:Darks,1:setDarks}=(0,index_js_.useState)(false);(0,index_js_.useEffect)(()=>{if(user&&user.email){app4.database().ref('prof').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];setClear(true);snapshotval.darkmode&&setDarks(snapshotval.darkmode);setNotifications(prevState=>({...prevState,ChangesMadeToAcc:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.ChangesMadeToAcc)||false,ChangesMadeToGroup:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.ChangesMadeToGroup)||false,SecurityAlert:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.SecurityAlert)||false,somoneComments:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.somoneComments)||false,somoneshares:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.somoneshares)||false,Userfollows:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.Userfollows)||false,newPostMadeinGroup:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.newPostMadeinGroup)||false,ReciveMessage:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.ReciveMessage)||false,AutoSubscribeGroupnotif:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.AutoSubscribeGroupnotif)||false,AutoSubscribetonews:(snapshotval===null||snapshotval===void 0?void 0:snapshotval.AutoSubscribetonews)||false,setSms:snapshotval.sms}));// setSms(snapshotvals.sms); // make sure this function is defined
}}).catch(error=>{console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error: '+error.message,life:3000});});}else{// handle the case where user is not defined or does not have a uid property
//  toast.current.show({
//  severity: 'info',
//summary: 'info',
//detail: 'Auto confirm',
//life: 6000,
//});
}},[user]);(0,index_js_.useEffect)(()=>{notifications.somoneshares===true?setdisabled(false):notifications.somoneComments===true?setdisabled(false):notifications.Userfollows===true?setdisabled(false):notifications.newPostMadeinGroup===true?setdisabled(false):notifications.ReciveMessage===true?setdisabled(false):setdisabled(true);notifications.ChangesMadeToAcc===true?setButton(false):notifications.ChangesMadeToGroup===true?setButton(false):notifications.SecurityAlert===true?setButton(false):notifications.somoneComments===true?setButton(false):notifications.somoneshares===true?setButton(false):notifications.Userfollows===true?setButton(false):notifications.newPostMadeinGroup===true?setButton(false):notifications.ReciveMessage===true?setButton(false):notifications.AutoSubscribeGroupnotif===true?setButton(false):notifications.AutoSubscribetonews===true?setButton(false):setButton(true);},[notifications]);const{0:Button,1:setButton}=(0,index_js_.useState)(false);const Unsub=()=>{setNotifications(prevState=>({...prevState,ChangesMadeToAcc:false,ChangesMadeToGroup:false,SecurityAlert:false,somoneComments:false,somoneshares:false,Userfollows:false,newPostMadeinGroup:false,ReciveMessage:false,AutoSubscribeGroupnotif:false,AutoSubscribetonews:false}));toast.current.show({severity:'Success',summary:'Success',detail:'You have been successfuly unsubscribed',life:6000});};if(clear){return/*#__PURE__*/index_js_default().createElement("div",{style:{alignItems:"center",justifyItems:"center",paddingTop:"25%"},className:"card flex justify-content-center align-content-center "});}return/*#__PURE__*/index_js_default().createElement("div",{style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement(toast_esm/* Toast */.F,{ref:toast}),/*#__PURE__*/index_js_default().createElement("div",{className:`container-xl px-4 mt-4 ${Darks&&'darken'}`},/*#__PURE__*/index_js_default().createElement(Navbared["default"],{setDarks:setDarks}),/*#__PURE__*/index_js_default().createElement("div",{className:`${Darks&&'darken'}row`},/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-8"},/*#__PURE__*/index_js_default().createElement("div",{className:"card card-header-actions mb-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-header",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{className:"form-check form-switch",style:{background:Darks&&"#141515",marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"emailNotifications",style:{color:"orange",marginTop:"-10px",fontSize:"-20px",fontWeight:"bold"}},"Email notifications"))),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"mb-3",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("label",{className:"small mb-1",htmlFor:"inputNotificationEmail"},"Default notification email"),/*#__PURE__*/index_js_default().createElement("input",{className:"form-control",id:"inputNotificationEmail",type:"email",value:user&&user.email,onChange:handleNotificationsChange,disabled:true})),/*#__PURE__*/index_js_default().createElement("div",{className:"mb-0"},/*#__PURE__*/index_js_default().createElement("div",{className:" mb-3 pb-3"},/*#__PURE__*/index_js_default().createElement("label",{className:"small papol",style:{color:"purple"}},"Choose which types of email updates you receive")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-6 mt-6",style:{marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"ChangesMadeToAcc",name:"ChangesMadeToAcc",value:true,className:"mr-1  p-success P-button-success p-checkbox-success",id:"flexSwitchCheckChecked",onChange:handleNotificationsChange,checked:notifications.ChangesMadeToAcc===true}),/*#__PURE__*/index_js_default().createElement("label",{className:"form-check-label",style:{color:Darks&&"silver"},htmlFor:"ChangesMadeToAcc"},"Changes made to your account")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-4",style:{marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"ChangesMadeToGroup",name:"ChangesMadeToGroup",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",onChange:handleNotificationsChange,checked:notifications.ChangesMadeToGroup===true}),/*#__PURE__*/index_js_default().createElement("label",{className:"form-check-label",style:{color:Darks&&"silver"},htmlFor:"ChangesMadeToGroup"},"Changes are made to groups you're part of")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check",style:{marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{name:"SecurityAlert",inputId:"checkSecurity",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",onChange:handleNotificationsChange,checked:notifications.SecurityAlert===true}),/*#__PURE__*/index_js_default().createElement("label",{style:{color:Darks&&"silver"},className:"form-check-label",htmlFor:"checkSecurity"},"Security alerts")))))),/*#__PURE__*/index_js_default().createElement("div",{className:"card card-header-actions mb-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-header",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{className:"form-check form-switch",style:{background:Darks&&"#141515",marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement("label",{style:{color:"orange",marginTop:"-10px",fontSize:"-20px",fontWeight:"bold"},className:"form-check-label ml-4",htmlFor:"smsToggleSwitch"}," Push Notifications"))),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("form",null,/*#__PURE__*/index_js_default().createElement("div",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("label",{style:{color:Darks&&"silver"},className:"small mb-1",htmlFor:"inputNotificationSms"},"Default SMS number"),/*#__PURE__*/index_js_default().createElement(inputnumber_esm/* InputNumber */.R,{label:"default-sms-Number",disabled:true,id:"number-input",value:notifications.setSms,onValueChange:handleNotificationsChange})),/*#__PURE__*/index_js_default().createElement("div",{className:"mb-0"},/*#__PURE__*/index_js_default().createElement("div",{className:"mb-5 pb-2"},/*#__PURE__*/index_js_default().createElement("label",{className:"small mb-2 pupol",style:{color:Darks&&"silver"}},"Choose which types of push notifications you receive")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-3",style:{background:Darks&&"#141515",marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"somoneComments",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"somoneComments",onChange:handleNotificationsChange,checked:notifications.somoneComments===true}),/*#__PURE__*/index_js_default().createElement("label",{className:"form-check-label",style:{color:Darks&&"silver"},htmlFor:"somoneComments"},"Someone comments on your post")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-3",style:{marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"somoneshares",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"somoneshares",onChange:handleNotificationsChange,checked:notifications.somoneshares===true}),/*#__PURE__*/index_js_default().createElement("label",{style:{color:Darks&&"silver"},className:"form-check-label",htmlFor:"somoneshares"},"Someone shares your post")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-3",style:{marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"userfollow",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"Userfollows",onChange:handleNotificationsChange,checked:notifications.Userfollows===true}),/*#__PURE__*/index_js_default().createElement("label",{style:{color:Darks&&"silver"},className:"form-check-label",htmlFor:"userfollow"},"A user follows your account")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check mb-3",style:{marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"newPostMadeinGroup",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"newPostMadeinGroup",onChange:handleNotificationsChange,checked:notifications.newPostMadeinGroup===true}),/*#__PURE__*/index_js_default().createElement("label",{style:{color:Darks&&"silver"},className:"form-check-label",htmlFor:"newPostMadeinGroup"},"New posts are made in groups you're part of")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-check",style:{marginBottom:"15px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"ReciveMessage",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"ReciveMessage",onChange:handleNotificationsChange,checked:notifications.ReciveMessage===true}),/*#__PURE__*/index_js_default().createElement("label",{style:{color:Darks&&"silver"},className:"form-check-label",htmlFor:"ReciveMessage"},"You receive a  message"))))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"card",style:{background:Darks&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{style:{color:"orange",fontSize:"-20px",fontWeight:"bold"},className:"card-header"},"Notification Preferences"),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body"},/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"form-chec mb-7 ",style:{background:Darks&&"#141515",marginBottom:"38px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"AutoSubscribeGroupnotif",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"AutoSubscribeGroupnotif",onChange:handleNotificationsChange,checked:notifications.AutoSubscribeGroupnotif===true}),/*#__PURE__*/index_js_default().createElement("label",{style:{fontSize:"1rem",color:Darks&&"silver"},className:"form-check-label mb-4",htmlFor:"AutoSubscribeGroupnotif"},"Automatically subscribe to group notifications")),/*#__PURE__*/index_js_default().createElement("div",{className:"form-chec mb-6 mt-7",style:{background:Darks&&"#141515",marginBottom:"25px"}},/*#__PURE__*/index_js_default().createElement(Checkbox,{inputId:"AutoSubscribetonews",value:true,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"AutoSubscribetonews",onChange:handleNotificationsChange,checked:notifications.AutoSubscribetonews===true}),/*#__PURE__*/index_js_default().createElement("label",{style:{color:Darks&&"silver"},className:"form-check-label mb-4 mt-",htmlFor:"AutoSubscribetonews"},"Automatically subscribe to new notifications")),/*#__PURE__*/index_js_default().createElement("button",{disabled:Button,onClick:Unsub,className:"btn btn-danger-soft btn-dark text-white mb-4 mt-6"},"Unsubscribe from all notifications"))))))));}const Head=()=>/*#__PURE__*/index_js_default().createElement("title",null,"Notifications");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-page-notifications-js.js.map