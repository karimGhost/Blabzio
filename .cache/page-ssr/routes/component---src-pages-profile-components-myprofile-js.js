"use strict";
exports.id = 7849;
exports.ids = [7849];
exports.modules = {

/***/ 98731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ Myprofile)
});

// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js + 11 modules
var Layout = __webpack_require__(51333);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 1 modules
var dist = __webpack_require__(99184);
// EXTERNAL MODULE: ./node_modules/firebase/database/dist/index.mjs
var database_dist = __webpack_require__(88965);
// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.mjs
var app_dist = __webpack_require__(75159);
// EXTERNAL MODULE: ./node_modules/firebase/compat/database/dist/index.mjs + 1 modules
var compat_database_dist = __webpack_require__(9016);
// EXTERNAL MODULE: ./node_modules/firebase/compat/auth/dist/index.mjs + 3 modules
var auth_dist = __webpack_require__(67815);
// EXTERNAL MODULE: ./node_modules/firebase/compat/firestore/dist/index.mjs + 3 modules
var firestore_dist = __webpack_require__(30359);
// EXTERNAL MODULE: ./src/Accounts/useAuth.js
var useAuth = __webpack_require__(94405);
// EXTERNAL MODULE: ./node_modules/primereact/divider/divider.esm.js
var divider_esm = __webpack_require__(58918);
// EXTERNAL MODULE: ./src/images/proxy.jpeg
var proxy = __webpack_require__(83869);
// EXTERNAL MODULE: ./node_modules/primereact/editor/editor.esm.js
var editor_esm = __webpack_require__(73386);
// EXTERNAL MODULE: ./node_modules/primereact/toast/toast.esm.js
var toast_esm = __webpack_require__(74420);
// EXTERNAL MODULE: ./node_modules/html-react-parser/index.mjs
var html_react_parser = __webpack_require__(25935);
// EXTERNAL MODULE: ./node_modules/primereact/button/button.esm.js
var button_esm = __webpack_require__(99403);
// EXTERNAL MODULE: ./node_modules/primereact/api/api.esm.js
var api_esm = __webpack_require__(66367);
// EXTERNAL MODULE: ./node_modules/primereact/hooks/hooks.esm.js
var hooks_esm = __webpack_require__(13308);
// EXTERNAL MODULE: ./node_modules/primereact/icons/chevrondown/index.esm.js
var index_esm = __webpack_require__(92285);
// EXTERNAL MODULE: ./node_modules/primereact/overlayservice/overlayservice.esm.js
var overlayservice_esm = __webpack_require__(50519);
// EXTERNAL MODULE: ./node_modules/primereact/tooltip/tooltip.esm.js
var tooltip_esm = __webpack_require__(57074);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.esm.js
var utils_esm = __webpack_require__(13643);
// EXTERNAL MODULE: ./node_modules/primereact/componentbase/componentbase.esm.js
var componentbase_esm = __webpack_require__(23652);
// EXTERNAL MODULE: ./node_modules/primereact/csstransition/csstransition.esm.js + 1 modules
var csstransition_esm = __webpack_require__(94052);
// EXTERNAL MODULE: ./node_modules/primereact/portal/portal.esm.js
var portal_esm = __webpack_require__(24951);
;// CONCATENATED MODULE: ./node_modules/primereact/splitbutton/splitbutton.esm.js












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

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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

var SplitButtonBase = componentbase_esm/* ComponentBase */.V.extend({
  defaultProps: {
    __TYPE: 'SplitButton',
    id: null,
    label: null,
    icon: null,
    loading: false,
    loadingIcon: null,
    model: null,
    disabled: null,
    style: null,
    className: null,
    buttonClassName: null,
    menuStyle: null,
    menuClassName: null,
    menuButtonClassName: null,
    buttonProps: null,
    menuButtonProps: null,
    tabIndex: null,
    severity: null,
    rounded: false,
    raised: false,
    outlined: false,
    text: false,
    size: null,
    appendTo: null,
    tooltip: null,
    tooltipOptions: null,
    buttonTemplate: null,
    transitionOptions: null,
    dropdownIcon: null,
    onClick: null,
    onShow: null,
    onHide: null,
    children: undefined
  }
});

var SplitButtonItem = /*#__PURE__*/index_js_.memo(function (props) {
  var onClick = function onClick(e) {
    if (props.menuitem.command) {
      props.menuitem.command({
        originalEvent: e,
        item: props.menuitem
      });
    }
    if (props.onItemClick) {
      props.onItemClick(e);
    }
    e.preventDefault();
  };
  var createSeparator = function createSeparator() {
    return /*#__PURE__*/index_js_.createElement("li", {
      className: "p-menu-separator",
      role: "separator"
    });
  };
  var createMenuitem = function createMenuitem() {
    if (props.menuitem.visible === false) {
      return null;
    }
    var _props$menuitem = props.menuitem,
      disabled = _props$menuitem.disabled,
      _icon = _props$menuitem.icon,
      _label = _props$menuitem.label,
      template = _props$menuitem.template,
      url = _props$menuitem.url,
      target = _props$menuitem.target,
      _className = _props$menuitem.className;
    var className = (0,utils_esm/* classNames */.AK)('p-menuitem-link', _className, {
      'p-disabled': disabled
    });
    var iconClassName = (0,utils_esm/* classNames */.AK)('p-menuitem-icon', _icon);
    var icon = utils_esm/* IconUtils */.Cz.getJSXIcon(_icon, {
      className: 'p-menuitem-icon'
    }, {
      props: props.splitButtonProps
    });
    var label = _label && /*#__PURE__*/index_js_.createElement("span", {
      className: "p-menuitem-text"
    }, _label);
    var content = /*#__PURE__*/index_js_.createElement("a", {
      href: url || '#',
      role: "menuitem",
      className: className,
      target: target,
      onClick: onClick,
      "aria-label": _label
    }, icon, label);
    if (template) {
      var defaultContentOptions = {
        onClick: onClick,
        className: className,
        labelClassName: 'p-menuitem-text',
        iconClassName: iconClassName,
        element: content,
        props: props
      };
      content = utils_esm/* ObjectUtils */.gb.getJSXElement(template, props.menuitem, defaultContentOptions);
    }
    return /*#__PURE__*/index_js_.createElement("li", {
      className: "p-menuitem",
      role: "none"
    }, content);
  };
  var createItem = function createItem() {
    return props.menuitem.separator ? createSeparator() : createMenuitem();
  };
  var item = createItem();
  return item;
});
SplitButtonItem.displayName = 'SplitButtonItem';

var SplitButtonPanel = /*#__PURE__*/index_js_.forwardRef(function (props, ref) {
  var createElement = function createElement() {
    var className = (0,utils_esm/* classNames */.AK)('p-menu p-menu-overlay p-component', props.menuClassName);
    return /*#__PURE__*/index_js_.createElement(csstransition_esm/* CSSTransition */.K, {
      nodeRef: ref,
      classNames: "p-connected-overlay",
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: props.onEnter,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, /*#__PURE__*/index_js_.createElement("div", {
      ref: ref,
      className: className,
      style: props.menuStyle,
      onClick: props.onClick
    }, /*#__PURE__*/index_js_.createElement("ul", {
      id: props.menuId,
      className: "p-menu-list p-reset",
      role: "menu"
    }, props.children)));
  };
  var element = createElement();
  return /*#__PURE__*/index_js_.createElement(portal_esm/* Portal */.h, {
    element: element,
    appendTo: props.appendTo
  });
});
SplitButtonPanel.displayName = 'SplitButtonPanel';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SplitButton = /*#__PURE__*/index_js_.memo( /*#__PURE__*/index_js_.forwardRef(function (inProps, ref) {
  var _classNames;
  var props = SplitButtonBase.getProps(inProps);
  var _React$useState = index_js_.useState(props.id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    idState = _React$useState2[0],
    setIdState = _React$useState2[1];
  var _React$useState3 = index_js_.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    overlayVisibleState = _React$useState4[0],
    setOverlayVisibleState = _React$useState4[1];
  var elementRef = index_js_.useRef(null);
  var defaultButtonRef = index_js_.useRef(null);
  var overlayRef = index_js_.useRef(null);
  var _SplitButtonBase$setM = SplitButtonBase.setMetaData({
      props: props,
      state: {
        id: idState,
        overlayVisible: overlayVisibleState
      }
    }),
    ptm = _SplitButtonBase$setM.ptm;
  var _useOverlayListener = (0,hooks_esm/* useOverlayListener */.gq)({
      target: elementRef,
      overlay: overlayRef,
      listener: function listener(event, _ref) {
        var valid = _ref.valid;
        valid && hide();
      },
      when: overlayVisibleState
    }),
    _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
    bindOverlayListener = _useOverlayListener2[0],
    unbindOverlayListener = _useOverlayListener2[1];
  var onPanelClick = function onPanelClick(event) {
    overlayservice_esm/* OverlayService */.F.emit('overlay-click', {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var onDropdownButtonClick = function onDropdownButtonClick() {
    overlayVisibleState ? hide() : show();
  };
  var onItemClick = function onItemClick() {
    hide();
  };
  var show = function show() {
    setOverlayVisibleState(true);
  };
  var hide = function hide() {
    setOverlayVisibleState(false);
  };
  var onOverlayEnter = function onOverlayEnter() {
    utils_esm/* ZIndexUtils */.P9.set('overlay', overlayRef.current, api_esm/* default */.ZP.autoZIndex, api_esm/* default */.ZP.zIndex['overlay']);
    alignOverlay();
  };
  var onOverlayEntered = function onOverlayEntered() {
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited() {
    utils_esm/* ZIndexUtils */.P9.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay() {
    utils_esm/* DomHandler */.p7.alignOverlay(overlayRef.current, defaultButtonRef.current.parentElement, props.appendTo || api_esm/* default */.ZP.appendTo);
  };
  (0,hooks_esm/* useMountEffect */.nw)(function () {
    if (!idState) {
      setIdState((0,utils_esm/* UniqueComponentId */.Th)());
    }
  });
  (0,hooks_esm/* useUnmountEffect */.zq)(function () {
    utils_esm/* ZIndexUtils */.P9.clear(overlayRef.current);
  });
  index_js_.useImperativeHandle(ref, function () {
    return {
      props: props,
      show: show,
      hide: hide,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var createItems = function createItems() {
    if (props.model) {
      return props.model.map(function (menuitem, index) {
        return /*#__PURE__*/index_js_.createElement(SplitButtonItem, {
          splitButtonProps: props,
          menuitem: menuitem,
          key: index,
          onItemClick: onItemClick
        });
      });
    }
    return null;
  };
  if (props.visible === false) {
    return null;
  }
  var hasTooltip = utils_esm/* ObjectUtils */.gb.isNotEmpty(props.tooltip);
  var sizeMapping = {
    large: 'lg',
    small: 'sm'
  };
  var size = sizeMapping[props.size];
  var className = (0,utils_esm/* classNames */.AK)('p-splitbutton p-component', props.className, (_classNames = {
    'p-disabled': props.disabled,
    'p-button-loading-label-only': props.loading && !props.icon && props.label
  }, _defineProperty(_classNames, "p-button-".concat(props.severity), props.severity), _defineProperty(_classNames, 'p-button-raised', props.raised), _defineProperty(_classNames, 'p-button-rounded', props.rounded), _defineProperty(_classNames, 'p-button-text', props.text), _defineProperty(_classNames, 'p-button-outlined', props.outlined), _defineProperty(_classNames, "p-button-".concat(size), size), _classNames));
  var buttonClassName = (0,utils_esm/* classNames */.AK)('p-splitbutton-defaultbutton', props.buttonClassName);
  var menuButtonClassName = (0,utils_esm/* classNames */.AK)('p-splitbutton-menubutton', props.menuButtonClassName);
  var buttonContent = props.buttonTemplate ? utils_esm/* ObjectUtils */.gb.getJSXElement(props.buttonTemplate, props) : null;
  var items = createItems();
  var menuId = idState + '_menu';
  var dropdownIcon = function dropdownIcon() {
    var iconProps = (0,utils_esm/* mergeProps */.dG)({
      className: 'p-button-icon p-c'
    }, ptm('icon'));
    var icon = props.dropdownIcon || /*#__PURE__*/index_js_.createElement(index_esm/* ChevronDownIcon */.v, iconProps);
    var dropdownIcon = utils_esm/* IconUtils */.Cz.getJSXIcon(icon, _objectSpread({}, iconProps), {
      props: props
    });
    return dropdownIcon;
  };
  var menuButtonProps = (0,utils_esm/* mergeProps */.dG)(_objectSpread(_objectSpread({
    type: 'button',
    className: menuButtonClassName,
    icon: dropdownIcon,
    onClick: onDropdownButtonClick,
    disabled: props.disabled,
    'aria-expanded': overlayVisibleState,
    'aria-haspopup': true,
    'aria-controls': overlayVisibleState ? menuId : null
  }, props.menuButtonProps), {}, {
    pt: ptm('menuButton')
  }));
  var menuProps = (0,utils_esm/* mergeProps */.dG)({
    ref: overlayRef,
    appendTo: props.appendTo,
    menuId: menuId,
    menuStyle: props.menuStyle,
    menuClassName: props.menuClassName,
    onClick: onPanelClick,
    "in": overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    transitionOptions: props.transitionOptions
  }, ptm('menu'));
  var splitButtonProps = (0,utils_esm/* mergeProps */.dG)(_objectSpread(_objectSpread({
    ref: defaultButtonRef,
    type: 'button',
    className: buttonClassName,
    icon: props.icon,
    loading: props.loading,
    loadingIcon: props.loadingIcon,
    label: props.label,
    onClick: props.onClick,
    disabled: props.disabled,
    tabIndex: props.tabIndex
  }, props.buttonProps), {}, {
    pt: ptm('button')
  }));
  var rootProps = (0,utils_esm/* mergeProps */.dG)({
    ref: elementRef,
    id: idState,
    className: className,
    style: props.style
  }, SplitButtonBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/index_js_.createElement(index_js_.Fragment, null, /*#__PURE__*/index_js_.createElement("div", rootProps, /*#__PURE__*/index_js_.createElement(button_esm/* Button */.z, splitButtonProps, buttonContent), /*#__PURE__*/index_js_.createElement(button_esm/* Button */.z, menuButtonProps), /*#__PURE__*/index_js_.createElement(SplitButtonPanel, menuProps, items)), hasTooltip && /*#__PURE__*/index_js_.createElement(tooltip_esm/* Tooltip */.u, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
SplitButton.displayName = 'SplitButton';



// EXTERNAL MODULE: ./src/pages/news/Posted/Postit.js
var Postit = __webpack_require__(13418);
// EXTERNAL MODULE: ./node_modules/primereact/listbox/listbox.esm.js + 1 modules
var listbox_esm = __webpack_require__(5788);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js + 1 modules
var createWithBsPrefix = __webpack_require__(44680);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/PopoverBody.js

/* harmony default export */ const PopoverBody = ((0,createWithBsPrefix/* default */.Z)('popover-body'));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(76792);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/PopoverHeader.js

/* harmony default export */ const PopoverHeader = ((0,createWithBsPrefix/* default */.Z)('popover-header'));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/helpers.js

class BsPrefixComponent extends index_js_.Component {}

// Need to use this instead of typeof Component to get proper type checking.

function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;
  if (placement === 'left') {
    bsDirection = isRTL ? 'end' : 'start';
  } else if (placement === 'right') {
    bsDirection = isRTL ? 'start' : 'end';
  }
  return bsDirection;
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/getInitialPopperStyles.js
function getInitialPopperStyles(position = 'absolute') {
  return {
    position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Popover.js









const Popover = /*#__PURE__*/index_js_.forwardRef(({
  bsPrefix,
  placement = 'right',
  className,
  style,
  children,
  body,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  const decoratedBsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'popover');
  const isRTL = (0,ThemeProvider/* useIsRTL */.SC)();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ref: ref,
    role: "tooltip",
    style: computedStyle,
    "x-placement": primaryPlacement,
    className: classnames_default()(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? /*#__PURE__*/(0,jsx_runtime.jsx)(PopoverBody, {
      children: children
    }) : children]
  });
});
/* harmony default export */ const esm_Popover = (Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
}));
// EXTERNAL MODULE: ./node_modules/primereact/inputtext/inputtext.esm.js
var inputtext_esm = __webpack_require__(6094);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(57076);
;// CONCATENATED MODULE: ./src/pages/profileComponents/Myprofile.js
//import { GoogleAuthProvider } from 'firebase/auth';
//import { FaGoogle, FaEnvelope } from 'react-icons/fa';
//import { Password } from 'primereact/password';
//import {confirmDialog, ConfirmDialog} from 'primereact/confirmdialog';
//import { FileUpload} from 'primereact/fileupload';
//import {ProgressSpinner} from 'primereact/progressspinner';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { ColorPicker } from 'primereact/colorpicker';
const firebaseConfig2={apiKey:"AIzaSyAxMN4OQLOisY94cVCgR96o3-HoY0l6ZQk",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function resizeImage(htmlString){const regex=/<img [^>]*>/g;const matches=htmlString.match(regex)||[];for(const match of matches){const widthRegex=/width="(\d+)"/;const heightRegex=/height="(\d+)"/;const widthMatch=match.match(widthRegex);const heightMatch=match.match(heightRegex);const width=widthMatch?parseInt(widthMatch[1]):undefined;const height=heightMatch?parseInt(heightMatch[1]):undefined;const newWidth=width?Math.floor(width/2):undefined;const newHeight=height?Math.floor(height/2):undefined;const widthAttr=newWidth?` width="${newWidth}"`:"";const heightAttr=newHeight?` height="${newHeight}"`:"";const newTag=match.replace(/\/?>/,`${widthAttr}${heightAttr} class="resized-im">`);htmlString=htmlString.replace(match,newTag);}const reg=/<p\b[^>]*>/gi;htmlString=htmlString.replace(reg,'<p class="resize-P">');return htmlString;}function Myprofile(props){const op=(0,index_js_.useRef)(null);const{0:profileImg,1:setProfileImg}=(0,index_js_.useState)(proxy/* default */.Z);app_dist/* default */.Z.initializeApp(firebaseConfig2,'app09999');const toast=(0,index_js_.useRef)(null);const app09=app_dist/* default */.Z.app('app09999');const{user}=(0,useAuth/* useAuth */.a)();//const [userId, setUserId] = useState('')
//const [Editable, setEditable] = useState(false)
const{0:usernames,1:setUsernames}=(0,index_js_.useState)({useris:null,firstname:null,lastname:null,DOB:null,Location:null});const{0:vals}=(0,index_js_.useState)(['']);// const [Db, setDb] = useState()
// const [fname, setFname] = useState()
//const [lname, setLname] = useState()
//const [locate, setLocate] = useState();
//const va = vals.length;
// const  [clear, setClear] = useState(false)
const ref=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{if(user&&user.email){const databaseRef=app09;app09.database().ref('profile').orderByChild('email').equalTo(user.email).once('value',snapshot=>{if(snapshot&&snapshot.exists()){const userId=Object.keys(snapshot.val())[0];const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){setUsernames(pre=>({...pre,useris:snapshotval.username||'',DOB:snapshotval.dob||''}));}}});}else{setUsernames({useris:'anonymous'});}},[user,app09]);async function dataset(){const normalizedUsername=usernames.useris;const normalizedFirstname=usernames.firstname;const normalizedLastname=usernames.lastname;const normalizedLocation=usernames.Location;const normalizedDOB=usernames.DOB;try{// Check if a user with that username already exists in the database
const snapshot=await app09.database().ref('profile').orderByChild('username').equalTo(normalizedUsername).once('value');if(snapshot.exists()){// A user with that username already exists
// Prompt the user to choose a different username
toast.current.show({severity:'error',summary:'Error',detail:'username already exists. Please choose another one.',life:3000});}else{const userRef=app09.database().ref('profile/'+user.uid);userRef.update({username:normalizedUsername,firstname:normalizedFirstname,lastname:normalizedLastname,Location:normalizedLocation,dob:normalizedDOB,email:user.email});toast.current.show({severity:'success',summary:'Success',detail:'you succesfully updated your Bio',life:3000});}}catch(error){console.log(error);toast.show({severity:'error',summary:'Error',detail:'error try again',life:3000});}}const menu=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app09.database().ref(`profile/${user.uid}/profileImg`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){console.log("Snapshot value is null or undefined");return;}// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();setProfileImg(val.profileImg);}else{setProfileImg(snapshot.val());}});}},[user]);/*
  const handleProfileImgChange = async (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob());
    reader.onloadend =() => {
      setProfileImg(reader.result);
      app09.database().ref('profile/' + user.uid).update({ profileImg:reader.result })
      
      toast.current.show({severity: 'info', summary: 'Info', detail: 'Dp updated', life: 3000 })
  
    };
    reader.readAsDataURL(blob);
  
  }
  */const{0:loading,1:setLoading}=(0,index_js_.useState)(false);const{0:Edits,1:setEdits}=(0,index_js_.useState)(true);/// Editor ///
const{0:text,1:setText}=(0,index_js_.useState)('<div>Hello World!</div>');//const [text2, setText2] = useState('');
const renderHeader=()=>{return/*#__PURE__*/index_js_default().createElement("span",{className:"ql-formats"},/*#__PURE__*/index_js_default().createElement("button",{className:"ql-bold","aria-label":"Bold"}),/*#__PURE__*/index_js_default().createElement("button",{className:"ql-italic","aria-label":"Italic"}),/*#__PURE__*/index_js_default().createElement("button",{className:"ql-underline","aria-label":"Underline"}));};//const header = renderHeader();
const{0:htmlString,1:setHtmlString}=(0,index_js_.useState)("");/*  useEffect(() => {
      if (text) {
        const resizedHtmlString = resizeImage(text);
        setHtmlString(resizedHtmlString);
      }
    }, [text]); */const{0:textopen,1:setTextOpen}=(0,index_js_.useState)(false);const{0:editable,1:setEdit}=(0,index_js_.useState)(false);const{0:Bio,1:setBio}=(0,index_js_.useState)({text:"<div>Hello World!</div>",status:"write Something here....",followers:"1",following:"1",side:'to bottom',colors:["ghostwhite"],usernamed:""});const{0:userisopen,1:setuserisopen}=(0,index_js_.useState)(false);const{0:newColor,1:setNewColor}=(0,index_js_.useState)('');const{0:displayPicker,1:setDisplayPicker}=(0,index_js_.useState)(false);const{0:colorPickerTarget,1:setColorPickerTarget}=(0,index_js_.useState)(null);function handleColorChange(e){const selectedColor=e.target.value;if(Bio.colors&&!Bio.colors.includes(selectedColor)){// Add the color to the state
setBio(prevState=>{return{...prevState,colors:[...prevState.colors,selectedColor]};});}// Hide the color picker after a color is selected
setDisplayPicker(false);}console.log(Bio.colors);function handleNewColorInputChange(e){setNewColor(e.target.value);}function handleAddColor(){if(newColor!==''&&Bio.colors&&!Bio.colors.includes(newColor)){// Add the new color to the state
setBio(prevState=>{return{...prevState,colors:[...prevState.colors,newColor]};});// Clear the input field
setNewColor('');}}function handleRemoveColor(colorToRemove){setBio(prevState=>{return{...prevState,colors:[...prevState.colors.filter(color=>color!==colorToRemove)]};});}const items=[{label:'to-left',icon:'pi pi-arrow-left',command:()=>{setBio(pre=>{return{...pre,side:"to left"};});}},{label:'to-right',icon:'pi pi-arrow-right',command:()=>{setBio(pre=>{return{...pre,side:"to left"};});}},{label:'to-down',icon:'pi pi-arrow-down',command:()=>{setBio(pre=>{return{...pre,side:"to bottom"};});}},{label:'to-up',icon:'pi pi-arrow-up',command:()=>{setBio(pre=>{return{...pre,side:"to top"};});}},{label:'to-down-right',icon:'pi pi-arrow-down-right',command:()=>setBio(pre=>{return{...pre,side:"to bottom right"};})},{label:'to-down-left',icon:'pi pi-arrow-down-left',command:()=>{setBio(pre=>{return{...pre,side:"to bottom left"};});}},{label:'to-up-right',icon:'pi pi-arrow-up-right',command:()=>{setBio(pre=>{return{...pre,side:"to top right"};});}},{label:'to-up-left',icon:'pi pi-arrow-up-left',command:()=>{setBio(pre=>{return{...pre,side:"to top left"};});}}];const updatebio=()=>{setLoading(true);if(user&&user.email){try{app09.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval){const userRef=app09.database().ref(`profile/${userId}`);userRef.update({text:Bio.text,status:Bio.status,followers:Bio.followers,following:Bio.following,side:Bio.side,colors:Bio.colors,username:Bio.usernamed?Bio.usernamed:usernames.useris});toast.current.show({severity:'success',summary:'Success',detail:'You have successfully updated your details',life:3000});setEdits(true);setLoading(false);setuserisopen(false);}}}).catch(error=>{console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error occurred. Please try again.',life:3000});setLoading(false);});}catch(error){console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error occurred. Please try again.',life:3000});setLoading(false);}}};function saveValues(){setEdit(pre=>!pre);if(editable){updatebio();setTextOpen(false);}}(0,index_js_.useEffect)(()=>{let app=app09;if(user&&user.email){app.database().ref('profile').orderByChild('email').equalTo(user.email).on('value',snapshot=>{if(snapshot&&snapshot.exists()){const userId=Object.keys(snapshot.val())[0];const snapshotval=snapshot.val()[userId];if(snapshotval){setBio(pre=>{return{...pre,text:snapshotval.text?snapshotval.text:'',colors:snapshotval.colors?snapshotval.colors.map(c=>c):["ghostwhite"],status:snapshotval.status?snapshotval.status:'welcome to my profile :)',followers:snapshotval.followers?snapshotval.followers:'',following:snapshotval.following?snapshotval.following:'',side:snapshotval.side?snapshotval.side:'to bottom'};});}}});ref.current=app;if(user){}}else{setText('<div>Hello World!</div>');}},[user]);const{0:hideColors,1:sethideColors}=(0,index_js_.useState)(false);const gradient=Bio.colors&&`linear-gradient( ${Bio.side&&Bio.side}, ${Bio.colors.join(', ')})`;//const webgradient = Bio.colors && `-webkit-linear-gradient(${Bio.colors.join(', ')})`;
if(Bio.colors){console.log(" the value was read as",Bio.colors.join(', '));}function setuser(){setuserisopen(false);if(user&&user.email){try{app09.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){const userRef=app09.database().ref(`profile/${userId}`);userRef.update({username:Bio.usernamed?Bio.usernamed:usernames.useris});toast.current.show({severity:'success',summary:'username changed',detail:'You have changed your username',life:3000});setEdits(true);setLoading(false);}}}).catch(error=>{console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error occurred. Please try again.',life:3000});setLoading(false);});}catch(error){console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Error occurred. Please try again.',life:3000});setLoading(false);}}}const{0:Length,1:setLength}=(0,index_js_.useState)(null);const{0:dark,1:setdark}=(0,index_js_.useState)(false);//const [light, setLigh] = useState(false)
const setLight=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{if(Bio&&Bio.text){const resizedHtmlString=resizeImage(Bio.text);setHtmlString(resizedHtmlString);}},[Bio&&Bio.text]);const{0:followers,1:setFollowers}=(0,index_js_.useState)([]);(0,index_js_.useEffect)(()=>{if(user){const getFollowers=async()=>{// Get the follower IDs from the user's "followers" node
const snapshot=await app09.database().ref(`profile/${user.uid}/followers`).once('value');const followerIds=snapshot.val();if(!followerIds){return;}// Get the follower data for each follower ID
const followerPromises=Object.keys(followerIds).map(async followerId=>{const snapshot=await app09.database().ref(`profile/${followerId}`).once('value');return{id:followerId,...snapshot.val()};});const followerData=await Promise.all(followerPromises);setFollowers(followerData);};getFollowers();}},[user]);const editRef=(0,index_js_.useRef)(null);const{0:useref,1:setuseRef}=(0,index_js_.useState)(true);(0,index_js_.useEffect)(()=>{var _editRef$current,_editRef$current$getB;const editHeight=(_editRef$current=editRef.current)===null||_editRef$current===void 0?void 0:(_editRef$current$getB=_editRef$current.getBoundingClientRect())===null||_editRef$current$getB===void 0?void 0:_editRef$current$getB.height;if(editRef.current){if(editHeight>=12.5){editRef.current.style.height="12.5em";}else if(editHeight>=31.25){editRef.current.style.height="100vh";}else if(editHeight>=37.5){editRef.current.style.height="36em";}else if(editHeight>=5){editRef.current.style.height="5em";}else if(editHeight>=9){editRef.current.style.height="9em";}else if(editHeight>=7){editRef.current.style.height="7em";}else{editRef.current.style.height="100vh";}if(editHeight<=50){editRef.current.style.height="100%";}}},[user,app09]);function edited(){if(editRef.current){editRef.current.style.height='100%';setuseRef(false);}}//  const FollowersList = ({ userId }) => {  }
/*

<h2>Followers</h2>
<ul>
{followers.map((follower) => (
<li key={follower.id}>{follower.name}</li>
))}
</ul>
*/const profs=followers.filter(follow=>follow.email);const Flength=profs.length;const{0:following,1:setFollowing}=(0,index_js_.useState)([]);(0,index_js_.useEffect)(()=>{if(user){const getFollowing=async()=>{// Get the follow IDs from the user's "following" node
const snapshot=await app09.database().ref(`profile/${user.uid}/following`).once('value');const followIds=snapshot.val();if(!followIds){return;}// Get the follower data for each follower ID
const followPromises=Object.keys(followIds).map(async followId=>{const snapshot=await app09.database().ref(`profile/${followId}`).once('value');return{id:followId,...snapshot.val()};});const followData=await Promise.all(followPromises);setFollowing(followData);};getFollowing();}},[user,app09]);const Follow=following.filter(follow=>follow.email);const Follows=Follow.length;const{0:blocked,1:setBlockList}=(0,index_js_.useState)([]);(0,index_js_.useEffect)(()=>{if(user){const getBlock=async()=>{// Get the follow IDs from the user's "following" node
const ref=app09.database().ref(`profile/${user.uid}/blockList`);ref.on('value',snapshot=>{const followerIds=snapshot.val();if(!followerIds){return;}// Get the follower data for each follower ID
const followerPromises=Object.keys(followerIds).map(followerId=>{return app09.database().ref(`profile/${followerId}`).once('value');});Promise.all(followerPromises).then(followSnapshots=>{const followData=followSnapshots.map(snapshot=>{return{id:snapshot.key,...snapshot.val()};});setBlockList(followData);});});};getBlock();return()=>{app09.database().ref(`profile/${user.uid}/blockList`).off('value');};}},[user,app09]);const Blocked=blocked.filter(follow=>follow.email);//const Block = Blocked.length;
const{0:visibleFollowers,1:setVisibleFollowers}=(0,index_js_.useState)(false);const{0:SelectedFollower,1:setSelectedFollower}=(0,index_js_.useState)(null);const followersupdate=option=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," ",option&&/*#__PURE__*/index_js_default().createElement("div",{className:"flex align-items-center justify-space-between"},option.profileImg&&/*#__PURE__*/index_js_default().createElement("img",{style:{width:"20px"},src:option.image&&option.profileImg,alt:"prof"})," ",option.username&&/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:`/profileComponents/${option.id}`}," ",/*#__PURE__*/index_js_default().createElement("li",{key:option.id},option.username)," "))," ");};const{0:visibleFollow,1:setVisibleFollow}=(0,index_js_.useState)(false);const{0:SelectedFollow,1:setSelectedFollow}=(0,index_js_.useState)(null);const followi=option=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"flex align-items-center"},/*#__PURE__*/index_js_default().createElement("img",{style:{width:"20px"},src:option.image?option.profileImg:proxy/* default */.Z,alt:"prof"}),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:`/profileComponents/${option.id}`}," ",/*#__PURE__*/index_js_default().createElement("li",{key:option.id},option.username)," "));};const visibility=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{const handleClick=event=>{if(visibility.current&&!visibility.current.contains(event.target)){setVisibleFollowers(false);setVisibleFollow(false);}};document.addEventListener("mousedown",handleClick);return()=>{document.removeEventListener("mousedown",handleClick);};},[visibility]);(0,index_js_.useEffect)(()=>{if(!Bio&&!Bio.colors){return/*#__PURE__*/index_js_default().createElement("div",null,"Loading....");}},[user&&Bio&&dark,Bio.colors]);return/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,{setdark:setdark,username:Bio.usernamed,profileImg:profileImg},/*#__PURE__*/index_js_default().createElement("section",{className:` ${dark&&"darken"}  bg-light h-100 gradient-custom-2 mt-8 bgsm`},/*#__PURE__*/index_js_default().createElement(toast_esm/* Toast */.F,{ref:toast}),/*#__PURE__*/index_js_default().createElement("div",{className:"container  py-5 h-100"},/*#__PURE__*/index_js_default().createElement("div",{className:"row  d-flex justify-content-center align-items-center h-100"},/*#__PURE__*/index_js_default().createElement("div",{className:"col  col-lg-9 col-xl-7"},/*#__PURE__*/index_js_default().createElement("div",{className:"car "},/*#__PURE__*/index_js_default().createElement("div",{className:"tops rounded-top text-white d-flex  flex-row bg-light",style:{backdropFilter:"blur(15px)",position:"relative",height:"100px",backgroundImage:`url(${profileImg})`,height:"200px",objectFit:"cover",background:gradient,backgroundSize:"contain",marginTop:"90px"}},/*#__PURE__*/index_js_default().createElement("p",{className:"webs ",style:{fontWeight:"bold",fontSize:"1.5rem",textShadow:"1px 1px black",color:"white",textAlign:"top",margin:"0",zIndex:"1",position:"absolute",fontFamily:"cursive",background:`-webkit-linear-gradient( blue, red, gray, yellow, purple, pink, green, indigo, crimson,aqua,orange,white,silver)`,webkitBackgroundClip:"text",webkitTextFillColor:"transparent",paddingLeft:"5px"}},"My aesthetic Colors"),editable&&/*#__PURE__*/index_js_default().createElement("div",{style:{background:"rgba(0,0,0,0.11)"}}," ",/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>sethideColors(pre=>!pre),style:{background:hideColors?"white":"black",cursor:"pointer",zIndex:"5",boxShadow:hideColors?"0 2px 4px rgba(0, 0, 0, 0.2)":"0 2px 4px rgba(255, 255, 255, 0.5)",position:"absolute",right:"0",top:"5px",width:"fit-content",color:"white",fontWeight:"bold",textShadow:"1px 1px black"}},hideColors?"saveColors":"choose Colors"," ",/*#__PURE__*/index_js_default().createElement("i",{style:{color:hideColors?"orange":"white"},className:hideColors?"pi pi-minus":"pi pi-plus"})),hideColors&&/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("div",{style:{position:"absolute",right:"0",top:"150px"},className:"card flex justify-content-center"},/*#__PURE__*/index_js_default().createElement(SplitButton,{className:"bg-danger pi pi-arrow-left z-index-4 rdd h-1 ",buttonClassName:" bg-transparent b-transparent transparent w-1 p-0 m-0",severity:"warning",outlined:true,style:{backgroundColor:"yellow",zIndex:"10",color:"red",fontSize:"5px",padding:"1px"},size:"small",label:"",icon:"pi pi-arrow-left",model:items})),/*#__PURE__*/index_js_default().createElement("div",{style:{position:"absolute",right:"0",backdropFilter:"blur(15px) ",top:"30px"}},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-center"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{className:"bg-light my-1",style:{color:"black",boxShadow:"1px 1px 3px rgba(0,0,0,0.11)"},onClick:event=>{setColorPickerTarget(event.target);setDisplayPicker(true);}},"select colors"),displayPicker&&colorPickerTarget&&/*#__PURE__*/index_js_default().createElement(esm_Popover,{placement:"bottom",popover:true,clickable:true,domElement:true,isOpen:displayPicker,toggle:()=>setDisplayPicker(false),target:colorPickerTarget,ref:op,style:{width:"10px"}},/*#__PURE__*/index_js_default().createElement(PopoverBody,{style:{width:"60px",height:"50px"}},/*#__PURE__*/index_js_default().createElement("input",{className:"sized",style:{width:"100%",height:"100%"},type:"color",onChange:handleColorChange})))),/*#__PURE__*/index_js_default().createElement(divider_esm/* Divider */.i,{style:{background:"white"},align:"center"},/*#__PURE__*/index_js_default().createElement("span",{className:"bg-dark p-tag"},"or")),/*#__PURE__*/index_js_default().createElement("div",{className:"my-1"},/*#__PURE__*/index_js_default().createElement("label",{style:{color:"white",textShadow:"1px 1px black"},htmlFor:"new-color-input"},"write color:"),/*#__PURE__*/index_js_default().createElement(inputtext_esm/* InputText */.o,{id:"new-color-input",type:"text",value:newColor,onChange:handleNewColorInputChange}),newColor.length>0&&/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{className:"my-1",style:{background:"white",color:"black"},onClick:handleAddColor},"Add color")),/*#__PURE__*/index_js_default().createElement("div",{className:"inline-flex align-items-left"},/*#__PURE__*/index_js_default().createElement("b",{className:"bg-dark"},"select direction -")),/*#__PURE__*/index_js_default().createElement(divider_esm/* Divider */.i,{style:{background:"white",marginBottom:"-5px"},align:"center"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-dark"}," Selected colors:")),/*#__PURE__*/index_js_default().createElement("ul",{style:{backdropFilter:"blur(25px)",background:"rgba(0,0,0,0.11)"}},Bio.colors&&Bio.colors.map(color=>/*#__PURE__*/index_js_default().createElement("li",{style:{listStyle:"none"},key:color},/*#__PURE__*/index_js_default().createElement("p",{className:"mt-1",style:{marginBottom:"-5px",width:"50px",height:"50px",background:color}}),/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{onClick:()=>handleRemoveColor(color)},"Remove"))))))),!hideColors&&/*#__PURE__*/index_js_default().createElement("div",{className:"ms-4 mt-5 d-flex flex-column bggp",style:{width:"150px"}},/*#__PURE__*/index_js_default().createElement("img",{src:profileImg,alt:"primg ",className:"img-fluid img-thumbnail mt-4 mb-2 mx-1 ",style:{width:'150px',zIndex:'1',height:"160px"}}),/*#__PURE__*/index_js_default().createElement("button",{onClick:saveValues,type:"button",className:"btn-change5 btn editablebt btn-outline-dark","data-mdb-ripple-color":"dark",style:{zIndex:"1",textShadow:dark&&"none",color:dark&&"silver"}},editable?"Save":"Edit profile")),/*#__PURE__*/index_js_default().createElement("div",{className:"ms-3 ml-3",style:{marginTop:" 130px"}},userisopen&&/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex"}}," ",/*#__PURE__*/index_js_default().createElement(inputtext_esm/* InputText */.o,{style:{height:"fit-content"},value:Bio.usernamed,onChange:event=>setBio(pre=>{return{...pre,usernamed:event.target.value};})}," "),editable&&/*#__PURE__*/index_js_default().createElement("i",{onClick:setuser,className:"pecil text-light p-2 pi pi-pencil",style:{color:"white",backgroundColor:"rgba(0,0,0,0.40)",borderRadius:"20px",cursor:"pointer",marginRight:"0"}})),!userisopen&&/*#__PURE__*/index_js_default().createElement("h5",{style:{color:"white",textShadow:"1px 1px 0.24px black",fontWeight:"bold"}}," ",usernames.useris,"  ",editable&&/*#__PURE__*/index_js_default().createElement("i",{onClick:()=>setuserisopen(true),className:"pecil text-light p-2 pi pi-pencil",style:{color:"white",backgroundColor:"rgba(0,0,0,0.40)",borderRadius:"20px",cursor:"pointer"}})),textopen&&/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex"}}," ",/*#__PURE__*/index_js_default().createElement(inputtext_esm/* InputText */.o,{style:{height:"fit-content"},value:Bio.status,maxLength:"18",placeholder:" status max 27 char",onChange:event=>setBio(pre=>{return{...pre,status:event.target.value};})}," "),editable&&/*#__PURE__*/index_js_default().createElement("i",{onClick:()=>setTextOpen(false),className:"pecil text-light p-2 pi pi-pencil",style:{color:"white",backgroundColor:"rgba(0,0,0,0.40)",borderRadius:"20px",cursor:"pointer",marginRight:"0"}})),!textopen&&/*#__PURE__*/index_js_default().createElement("p",{style:{color:"white",textShadow:"1.2px 1.2px 0.10px black"}}," ",Bio.status,"  ",editable&&/*#__PURE__*/index_js_default().createElement("i",{onClick:()=>setTextOpen(true),className:"pecil text-light p-2 pi pi-pencil",style:{color:"white",backgroundColor:"rgba(0,0,0,0.40)",borderRadius:"20px",cursor:"pointer"}})))),/*#__PURE__*/index_js_default().createElement("div",{className:"p-4 text-black  fivetop",style:{backgroundColor:dark?"#141515":"#f8f9fa"}},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-end text-center py-1"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("p",{className:"mb-1 h5",style:{color:dark&&"silver"}},Length===0?"0":Length),/*#__PURE__*/index_js_default().createElement("p",{className:"small text-muted mb-0"},"Posts ")),/*#__PURE__*/index_js_default().createElement("div",{className:"px-3"},/*#__PURE__*/index_js_default().createElement("p",{className:"mb-1 h5",style:{color:dark&&"silver"}},Flength),/*#__PURE__*/index_js_default().createElement("button",{disabled:!Flength,style:{background:"transparent",border:"none"},onClick:()=>setVisibleFollowers(true)},/*#__PURE__*/index_js_default().createElement("p",{className:"small text-muted mb-0"},"Followers")," "),/*#__PURE__*/index_js_default().createElement("ul",null,visibleFollowers&&/*#__PURE__*/index_js_default().createElement("div",{style:{width:"fit-content",padding:"8px"},ref:visibility,className:"card flex justify-content-center"},/*#__PURE__*/index_js_default().createElement(listbox_esm/* ListBox */.w,{ref:menu,breakpoint:"767px",value:SelectedFollower,onChange:e=>setSelectedFollower(e.value),options:followers,optionLabel:"name",itemTemplate:followi,style:{width:"fit-content"},className:"w-full md:w-14rem",listStyle:{maxHeight:'250px'}})))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("p",{className:"mb-1 h5",style:{color:dark&&"silver"}},Follows),/*#__PURE__*/index_js_default().createElement("button",{disabled:!following,style:{background:"transparent",border:"none"},onClick:()=>setVisibleFollow(true)},"  ",/*#__PURE__*/index_js_default().createElement("p",{className:"small text-muted mb-0"},"Following")," "),/*#__PURE__*/index_js_default().createElement("ul",{style:{zIndex:"2",position:"absolute"}},visibleFollow&&/*#__PURE__*/index_js_default().createElement("div",{style:{width:"fit-content",padding:"8px"},ref:visibility,className:"card flex justify-content-center "},"\xB4",/*#__PURE__*/index_js_default().createElement(listbox_esm/* ListBox */.w,{ref:menu,breakpoint:"767px",value:SelectedFollow,onChange:e=>setSelectedFollower(e.value),options:following,optionLabel:"name",itemTemplate:followersupdate,style:{width:"fit-content"},className:"w-full md:w-14rem",listStyle:{maxHeight:'250px'}})))))),/*#__PURE__*/index_js_default().createElement("div",{className:"card-body p-4 ",style:{color:dark?"silver":"black",backgroundColor:dark&&"#141515"}},/*#__PURE__*/index_js_default().createElement("div",{className:"mb-5"},/*#__PURE__*/index_js_default().createElement("p",{className:"lead fw-normal mb-1"},"Profile Bio  ",/*#__PURE__*/index_js_default().createElement("i",{className:"pecil text-light p-2 pi pi-pencil",onClick:()=>setEdits(false),style:{color:"white",backgroundColor:dark?"#141515":"rgba(0,0,0,0.40)",borderRadius:"20px",cursor:"pointer"}})),/*#__PURE__*/index_js_default().createElement("div",{className:"p-4",style:{backgroundColor:"#f8f9fa;"}},Edits?/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{ref:editRef,onClick:edited,className:"mb-0  ",id:"Edits",style:{height:"100%",cursor:"pointer",overflow:"hidden",boxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",webkitBoxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",moZboxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)"}},/*#__PURE__*/index_js_default().createElement("div",{className:"mb-0 "},(0,html_react_parser/* default */.ZP)(htmlString))),useref&&/*#__PURE__*/index_js_default().createElement("button",{onClick:edited,style:{display:Length===0&&"none",background:"rgba(1,1,1,0.11)",border:"none "}},"show more...")):/*#__PURE__*/index_js_default().createElement("div",null," ",/*#__PURE__*/index_js_default().createElement(editor_esm/* Editor */.M,{value:Bio.text,onTextChange:e=>setBio(pre=>{return{...pre,text:e.htmlValue};}),style:{height:'320px'}}),/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{style:{background:"black",height:"fit-content",padding:"3px",paddingRight:"10px"},label:"save",icon:"pi pi-check",loading:loading,onClick:updatebio}," ")))),/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center mb-4"},/*#__PURE__*/index_js_default().createElement("p",{className:"lead fw-normal mb-0"},"My posts"),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-0"},/*#__PURE__*/index_js_default().createElement("a",{href:"#!",className:"text-muted"},"Show all"))),/*#__PURE__*/index_js_default().createElement(Postit["default"],{setLight:setLight,dark:dark,setdark:setdark,setLen:setLength,users:usernames.useris}))))))));}const Head=()=>/*#__PURE__*/index_js_default().createElement("title",null,"Mprofile");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-components-myprofile-js.js.map