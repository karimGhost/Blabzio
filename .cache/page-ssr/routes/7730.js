"use strict";
exports.id = 7730;
exports.ids = [7730];
exports.modules = {

/***/ 7730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ AutoComplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66367);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99403);
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13308);
/* harmony import */ var primereact_icons_chevrondown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92285);
/* harmony import */ var primereact_icons_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95807);
/* harmony import */ var primereact_icons_timescircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54506);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6094);
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50519);
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57074);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13643);
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94052);
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24951);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69868);
/* harmony import */ var primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70243);
















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

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var AutoCompleteBase = {
  defaultProps: {
    __TYPE: 'AutoComplete',
    id: null,
    appendTo: null,
    autoFocus: false,
    autoHighlight: false,
    className: null,
    completeMethod: null,
    delay: 300,
    disabled: false,
    dropdown: false,
    dropdownAriaLabel: null,
    dropdownAutoFocus: true,
    dropdownIcon: null,
    dropdownMode: 'blank',
    emptyMessage: null,
    field: null,
    forceSelection: false,
    inputClassName: null,
    inputId: null,
    inputRef: null,
    inputStyle: null,
    itemTemplate: null,
    loadingIcon: null,
    maxLength: null,
    minLength: 1,
    multiple: false,
    name: null,
    onBlur: null,
    onChange: null,
    onClear: null,
    onClick: null,
    onContextMenu: null,
    onDblClick: null,
    onDropdownClick: null,
    onFocus: null,
    onHide: null,
    onKeyPress: null,
    onKeyUp: null,
    onMouseDown: null,
    onSelect: null,
    onShow: null,
    onUnselect: null,
    optionGroupChildren: null,
    optionGroupLabel: null,
    optionGroupTemplate: null,
    panelClassName: null,
    panelFooterTemplate: null,
    panelStyle: null,
    placeholder: null,
    readOnly: false,
    removeTokenIcon: null,
    scrollHeight: '200px',
    selectedItemTemplate: null,
    selectionLimit: null,
    showEmptyMessage: false,
    size: null,
    style: null,
    suggestions: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    type: 'text',
    value: null,
    virtualScrollerOptions: null,
    children: undefined
  },
  getProps: function getProps(props) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getMergedProps(props, AutoCompleteBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getDiffProps(props, AutoCompleteBase.defaultProps);
  }
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var AutoCompletePanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var getOptionGroupRenderKey = function getOptionGroupRenderKey(optionGroup) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var createFooter = function createFooter() {
    if (props.panelFooterTemplate) {
      var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-autocomplete-footer"
      }, content);
    }
    return null;
  };
  var createGroupChildren = function createGroupChildren(optionGroup, i, style) {
    var groupChildren = props.getOptionGroupChildren(optionGroup);
    return groupChildren.map(function (item, j) {
      var key = i + '_' + j;
      var selected = props.selectedItem === item;
      var content = props.itemTemplate ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.itemTemplate, item, j) : props.field ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.resolveFieldData(item, props.field) : item;
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-autocomplete-item', {
        'p-disabled': item.disabled
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: key,
        role: "option",
        "aria-selected": selected,
        className: className,
        style: style,
        onClick: function onClick(e) {
          return props.onItemClick(e, item);
        },
        "data-group": i,
        "data-index": j
      }, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__/* .Ripple */ .H, null));
    });
  };
  var createItem = function createItem(suggestion, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined
    };
    if (props.optionGroupLabel) {
      var content = props.optionGroupTemplate ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.optionGroupTemplate, suggestion, index) : props.getOptionGroupLabel(suggestion);
      var childrenContent = createGroupChildren(suggestion, index, style);
      var key = index + '_' + getOptionGroupRenderKey(suggestion);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "p-autocomplete-item-group",
        style: style
      }, content), childrenContent);
    } else {
      var _content = props.itemTemplate ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.itemTemplate, suggestion, index) : props.field ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.resolveFieldData(suggestion, props.field) : suggestion;
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-autocomplete-item', {
        'p-disabled': suggestion.disabled
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: index,
        role: "option",
        "aria-selected": props.selectedItem === suggestion,
        className: className,
        style: style,
        onClick: function onClick(e) {
          return props.onItemClick(e, suggestion);
        }
      }, _content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__/* .Ripple */ .H, null));
    }
  };
  var createItems = function createItems() {
    return props.suggestions ? props.suggestions.map(createItem) : null;
  };
  var createContent = function createContent() {
    if (props.showEmptyMessage && primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isEmpty(props.suggestions)) {
      var emptyMessage = props.emptyMessage || (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__/* .localeOption */ .qJ)('emptyMessage');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "p-autocomplete-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "p-autocomplete-item"
      }, emptyMessage));
    }
    if (props.virtualScrollerOptions) {
      var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions), {
        style: _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        autoSize: true,
        items: props.suggestions,
        itemTemplate: function itemTemplate(item, options) {
          return item && createItem(item, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-autocomplete-items', options.className);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
            ref: options.contentRef,
            style: options.style,
            className: className,
            role: "listbox",
            id: props.listId
          }, options.children);
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_4__/* .VirtualScroller */ .J, _extends({
        ref: props.virtualScrollerRef
      }, virtualScrollerProps));
    } else {
      var items = createItems();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-autocomplete-items-wrapper",
        style: {
          maxHeight: props.scrollHeight || 'auto'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "p-autocomplete-items",
        role: "listbox",
        id: props.listId
      }, items));
    }
  };
  var createElement = function createElement() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-autocomplete-panel p-component', props.panelClassName, {
      'p-input-filled': primereact_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.inputStyle === 'filled',
      'p-ripple-disabled': primereact_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.ripple === false
    });
    var style = _objectSpread$1({}, props.panelStyle || {});
    var content = createContent();
    var footer = createFooter();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_5__/* .CSSTransition */ .K, {
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
      onEntering: props.onEntering,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: ref,
      className: className,
      style: style,
      onClick: props.onClick
    }, content, footer));
  };
  var element = createElement();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_6__/* .Portal */ .h, {
    element: element,
    appendTo: props.appendTo
  });
}));
AutoCompletePanel.displayName = 'AutoCompletePanel';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var AutoComplete = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (inProps, ref) {
  var props = AutoCompleteBase.getProps(inProps);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    idState = _React$useState2[0],
    setIdState = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    searchingState = _React$useState4[0],
    setSearchingState = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    focusedState = _React$useState6[0],
    setFocusedState = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    overlayVisibleState = _React$useState8[0],
    setOverlayVisibleState = _React$useState8[1];
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var overlayRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props.inputRef);
  var multiContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var virtualScrollerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var timeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var selectedItem = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var _useOverlayListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useOverlayListener */ .gq)({
      target: elementRef,
      overlay: overlayRef,
      listener: function listener(event, _ref) {
        var type = _ref.type,
          valid = _ref.valid;
        if (valid) {
          type === 'outside' ? !isInputClicked(event) && hide() : hide();
        }
      },
      when: overlayVisibleState
    }),
    _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
    bindOverlayListener = _useOverlayListener2[0],
    unbindOverlayListener = _useOverlayListener2[1];
  var isInputClicked = function isInputClicked(event) {
    return props.multiple ? event.target === multiContainerRef.current || multiContainerRef.current.contains(event.target) : event.target === inputRef.current;
  };
  var onInputChange = function onInputChange(event) {
    //Cancel the search request if user types within the timeout
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    var query = event.target.value;
    if (!props.multiple) {
      updateModel(event, query);
    }
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isEmpty(query)) {
      hide();
      props.onClear && props.onClear(event);
    } else {
      if (query.length >= props.minLength) {
        timeout.current = setTimeout(function () {
          search(event, query, 'input');
        }, props.delay);
      } else {
        hide();
      }
    }
  };
  var search = function search(event, query, source) {
    //allow empty string but not undefined or null
    if (query === undefined || query === null) {
      return;
    }

    //do not search blank values on input change
    if (source === 'input' && query.trim().length === 0) {
      return;
    }
    if (props.completeMethod) {
      setSearchingState(true);
      props.completeMethod({
        originalEvent: event,
        query: query
      });
    }
  };
  var selectItem = function selectItem(event, option, preventInputFocus) {
    if (props.multiple) {
      inputRef.current.value = '';
      if (!isSelected(option)) {
        // allows empty value/selectionlimit and within sectionlimit
        if (!props.value || !props.selectionLimit || props.value.length < props.selectionLimit) {
          var newValue = props.value ? [].concat(_toConsumableArray(props.value), [option]) : [option];
          updateModel(event, newValue);
        }
      }
    } else {
      updateInputField(option);
      updateModel(event, option);
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        value: option
      });
    }
    if (!preventInputFocus) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.focus(inputRef.current);
      hide();
    }
  };
  var updateModel = function updateModel(event, value) {
    // #2176 only call change if value actually changed
    if (selectedItem && primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.deepEquals(selectedItem.current, value)) {
      return;
    }
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value: value,
        stopPropagation: function stopPropagation() {
          event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event.preventDefault();
        },
        target: {
          name: props.name,
          id: idState,
          value: value
        }
      });
    }
    selectedItem.current = value;
  };
  var formatValue = function formatValue(value) {
    if (value) {
      if (typeof value === 'string') {
        return value;
      } else if (props.selectedItemTemplate) {
        var resolvedFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.selectedItemTemplate, value);
        return resolvedFieldData ? resolvedFieldData : value;
      } else if (props.field) {
        var _resolvedFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.resolveFieldData(value, props.field);
        return _resolvedFieldData !== null && _resolvedFieldData !== undefined ? _resolvedFieldData : value;
      } else {
        return value;
      }
    }
    return '';
  };
  var updateInputField = function updateInputField(value) {
    inputRef.current.value = formatValue(value);
  };
  var show = function show() {
    setOverlayVisibleState(true);
  };
  var hide = function hide() {
    setOverlayVisibleState(false);
    setSearchingState(false);
  };
  var onOverlayEnter = function onOverlayEnter() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ZIndexUtils */ .P9.set('overlay', overlayRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.zIndex['overlay']);
    alignOverlay();
  };
  var onOverlayEntering = function onOverlayEntering() {
    if (props.autoHighlight && props.suggestions && props.suggestions.length) {
      var element = getScrollableElement().firstChild.firstChild;
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.addClass(element, 'p-highlight');
    }
  };
  var onOverlayEntered = function onOverlayEntered() {
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited() {
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ZIndexUtils */ .P9.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay() {
    var target = props.multiple ? multiContainerRef.current : inputRef.current;
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.alignOverlay(overlayRef.current, target, props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.appendTo);
  };
  var onPanelClick = function onPanelClick(event) {
    primereact_overlayservice__WEBPACK_IMPORTED_MODULE_8__/* .OverlayService */ .F.emit('overlay-click', {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var onDropdownClick = function onDropdownClick(event) {
    if (props.dropdownAutoFocus) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.focus(inputRef.current, props.dropdownAutoFocus);
    }
    if (props.dropdownMode === 'blank') search(event, '', 'dropdown');else if (props.dropdownMode === 'current') search(event, inputRef.current.value, 'dropdown');
    if (props.onDropdownClick) {
      props.onDropdownClick({
        originalEvent: event,
        query: inputRef.current.value
      });
    }
  };
  var removeItem = function removeItem(event, index) {
    var removedValue = props.value[index];
    var newValue = props.value.filter(function (_, i) {
      return index !== i;
    });
    updateModel(event, newValue);
    if (props.onUnselect) {
      props.onUnselect({
        originalEvent: event,
        value: removedValue
      });
    }
  };
  var onInputKeyDown = function onInputKeyDown(event) {
    if (overlayVisibleState) {
      var highlightItem = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.findSingle(overlayRef.current, 'li.p-highlight');
      switch (event.which) {
        //down
        case 40:
          if (highlightItem) {
            var nextElement = findNextItem(highlightItem);
            if (nextElement) {
              primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.addClass(nextElement, 'p-highlight');
              primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.removeClass(highlightItem, 'p-highlight');
              primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.scrollInView(getScrollableElement(), nextElement);
            }
          } else {
            highlightItem = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.findSingle(overlayRef.current, 'li');
            if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.hasClass(highlightItem, 'p-autocomplete-item-group')) {
              highlightItem = findNextItem(highlightItem);
            }
            if (highlightItem) {
              primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.addClass(highlightItem, 'p-highlight');
            }
          }
          event.preventDefault();
          break;

        //up
        case 38:
          if (highlightItem) {
            var previousElement = findPrevItem(highlightItem);
            if (previousElement) {
              primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.addClass(previousElement, 'p-highlight');
              primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.removeClass(highlightItem, 'p-highlight');
              primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.scrollInView(getScrollableElement(), previousElement);
            }
          }
          event.preventDefault();
          break;

        //enter
        case 13:
          if (highlightItem) {
            selectHighlightItem(event, highlightItem);
            hide();
            event.preventDefault();
          }
          break;

        //escape
        case 27:
          hide();
          event.preventDefault();
          break;

        //tab
        case 9:
          if (highlightItem) {
            selectHighlightItem(event, highlightItem);
          }
          hide();
          break;
      }
    }
    if (props.multiple) {
      switch (event.which) {
        //backspace
        case 8:
          if (props.value && props.value.length && !inputRef.current.value) {
            var removedValue = props.value[props.value.length - 1];
            var newValue = props.value.slice(0, -1);
            updateModel(event, newValue);
            if (props.onUnselect) {
              props.onUnselect({
                originalEvent: event,
                value: removedValue
              });
            }
          }
          break;
      }
    }
  };
  var selectHighlightItem = function selectHighlightItem(event, item) {
    if (props.optionGroupLabel) {
      var optionGroup = props.suggestions[item.dataset.group];
      selectItem(event, getOptionGroupChildren(optionGroup)[item.dataset.index]);
    } else {
      selectItem(event, props.suggestions[primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.index(item)]);
    }
  };
  var findNextItem = function findNextItem(item) {
    var nextItem = item.nextElementSibling;
    return nextItem ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.hasClass(nextItem, 'p-autocomplete-item-group') ? findNextItem(nextItem) : nextItem : null;
  };
  var findPrevItem = function findPrevItem(item) {
    var prevItem = item.previousElementSibling;
    return prevItem ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.hasClass(prevItem, 'p-autocomplete-item-group') ? findPrevItem(prevItem) : prevItem : null;
  };
  var onInputFocus = function onInputFocus(event) {
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };
  var forceItemSelection = function forceItemSelection(event) {
    if (props.multiple) {
      inputRef.current.value = '';
      return;
    }
    var inputValue = event.target.value.trim();
    var item = (props.suggestions || []).find(function (it) {
      var value = props.field ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.resolveFieldData(it, props.field) : it;
      return value && inputValue === value.trim();
    });
    if (item) {
      selectItem(event, item, true);
    } else {
      inputRef.current.value = '';
      updateModel(event, null);
      props.onClear && props.onClear(event);
    }
  };
  var onInputBlur = function onInputBlur(event) {
    setFocusedState(false);
    if (props.forceSelection) {
      forceItemSelection(event);
    }
    props.onBlur && props.onBlur(event);
  };
  var onMultiContainerClick = function onMultiContainerClick(event) {
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.focus(inputRef.current);
    props.onClick && props.onClick(event);
  };
  var onMultiInputFocus = function onMultiInputFocus(event) {
    onInputFocus(event);
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.addClass(multiContainerRef.current, 'p-focus');
  };
  var onMultiInputBlur = function onMultiInputBlur(event) {
    onInputBlur(event);
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.removeClass(multiContainerRef.current, 'p-focus');
  };
  var isSelected = function isSelected(val) {
    return props.value ? props.value.some(function (v) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.equals(v, val);
    }) : false;
  };
  var getScrollableElement = function getScrollableElement() {
    return virtualScrollerRef.current ? overlayRef.current.firstChild : overlayRef.current;
  };
  var getOptionGroupLabel = function getOptionGroupLabel(optionGroup) {
    return props.optionGroupLabel ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.resolveFieldData(optionGroup, props.optionGroupLabel) : optionGroup;
  };
  var getOptionGroupChildren = function getOptionGroupChildren(optionGroup) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.resolveFieldData(optionGroup, props.optionGroupChildren);
  };
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useMountEffect */ .nw)(function () {
    if (!idState) {
      setIdState((0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .UniqueComponentId */ .Th)());
    }
    if (props.autoFocus) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.focus(inputRef.current, props.autoFocus);
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useUpdateEffect */ .rf)(function () {
    if (searchingState) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isNotEmpty(props.suggestions) || props.showEmptyMessage ? show() : hide();
      setSearchingState(false);
    }
  }, [props.suggestions]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useUpdateEffect */ .rf)(function () {
    if (inputRef.current && !props.multiple) {
      updateInputField(props.value);
    }
    if (overlayVisibleState) {
      alignOverlay();
    }
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useUnmountEffect */ .zq)(function () {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ZIndexUtils */ .P9.clear(overlayRef.current);
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      search: search,
      show: show,
      hide: hide,
      focus: function focus() {
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      },
      getVirtualScroller: function getVirtualScroller() {
        return virtualScrollerRef.current;
      }
    };
  });
  var createSimpleAutoComplete = function createSimpleAutoComplete() {
    var value = formatValue(props.value);
    var ariaControls = overlayVisibleState ? idState + '_list' : null;
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-autocomplete-input', props.inputClassName, {
      'p-autocomplete-dd-input': props.dropdown
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_inputtext__WEBPACK_IMPORTED_MODULE_9__/* .InputText */ .o, _extends({
      ref: inputRef,
      id: props.inputId,
      type: props.type,
      name: props.name,
      defaultValue: value,
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-controls": ariaControls,
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      className: className,
      style: props.inputStyle,
      autoComplete: "off",
      readOnly: props.readOnly,
      disabled: props.disabled,
      placeholder: props.placeholder,
      size: props.size,
      maxLength: props.maxLength,
      tabIndex: props.tabIndex,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      onChange: onInputChange,
      onMouseDown: props.onMouseDown,
      onKeyUp: props.onKeyUp,
      onKeyDown: onInputKeyDown,
      onKeyPress: props.onKeyPress,
      onContextMenu: props.onContextMenu,
      onClick: props.onClick,
      onDoubleClick: props.onDblClick
    }, ariaProps));
  };
  var createChips = function createChips() {
    if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isNotEmpty(props.value)) {
      return props.value.map(function (val, index) {
        var key = index + 'multi-item';
        var iconProps = {
          className: 'p-autocomplete-token-icon',
          onClick: function onClick(e) {
            return removeItem(e, index);
          }
        };
        var icon = props.removeTokenIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_icons_timescircle__WEBPACK_IMPORTED_MODULE_10__/* .TimesCircleIcon */ .x, iconProps);
        var removeTokenIcon = !props.disabled && primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .IconUtils */ .Cz.getJSXIcon(icon, _objectSpread({}, iconProps), {
          props: props
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: key,
          className: "p-autocomplete-token p-highlight"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "p-autocomplete-token-label"
        }, formatValue(val)), removeTokenIcon);
      });
    }
    return null;
  };
  var createMultiInput = function createMultiInput() {
    var ariaControls = overlayVisibleState ? idState + '_list' : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "p-autocomplete-input-token"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
      ref: inputRef,
      type: props.type,
      disabled: props.disabled,
      placeholder: props.placeholder,
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-controls": ariaControls,
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      autoComplete: "off",
      readOnly: props.readOnly,
      tabIndex: props.tabIndex,
      onChange: onInputChange,
      id: props.inputId,
      name: props.name,
      style: props.inputStyle,
      className: props.inputClassName,
      maxLength: props.maxLength,
      onKeyUp: props.onKeyUp,
      onKeyDown: onInputKeyDown,
      onKeyPress: props.onKeyPress,
      onFocus: onMultiInputFocus,
      onBlur: onMultiInputBlur
    }, ariaProps)));
  };
  var createMultipleAutoComplete = function createMultipleAutoComplete() {
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-autocomplete-multiple-container p-component p-inputtext', {
      'p-disabled': props.disabled
    });
    var tokens = createChips();
    var input = createMultiInput();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      ref: multiContainerRef,
      className: className,
      onContextMenu: props.onContextMenu,
      onMouseDown: props.onMouseDown,
      onClick: onMultiContainerClick,
      onDoubleClick: props.onDblClick
    }, tokens, input);
  };
  var createDropdown = function createDropdown() {
    if (props.dropdown) {
      var ariaLabel = props.dropdownAriaLabel || props.placeholder || (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__/* .localeOption */ .qJ)('choose');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .z, {
        type: "button",
        icon: props.dropdownIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_icons_chevrondown__WEBPACK_IMPORTED_MODULE_12__/* .ChevronDownIcon */ .v, null),
        className: "p-autocomplete-dropdown",
        disabled: props.disabled,
        onClick: onDropdownClick,
        "aria-label": ariaLabel
      });
    }
    return null;
  };
  var createLoader = function createLoader() {
    if (searchingState) {
      var iconClassName = 'p-autocomplete-loader p-icon-spin';
      var icon = props.loadingIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_icons_spinner__WEBPACK_IMPORTED_MODULE_13__/* .SpinnerIcon */ .L, {
        className: iconClassName
      });
      var loaderIcon = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .IconUtils */ .Cz.getJSXIcon(icon, {
        className: iconClassName
      }, {
        props: props
      });
      return loaderIcon;
    }
    return null;
  };
  var createInput = function createInput() {
    return props.multiple ? createMultipleAutoComplete() : createSimpleAutoComplete();
  };
  var listId = idState + '_list';
  var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isNotEmpty(props.tooltip);
  var otherProps = AutoCompleteBase.getOtherProps(props);
  var ariaProps = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.reduceKeys(otherProps, primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.ARIA_PROPS);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-autocomplete p-component p-inputwrapper', {
    'p-autocomplete-dd': props.dropdown,
    'p-autocomplete-multiple': props.multiple,
    'p-inputwrapper-filled': props.value,
    'p-inputwrapper-focus': focusedState
  }, props.className);
  var loader = createLoader();
  var input = createInput();
  var dropdown = createDropdown();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({
    ref: elementRef,
    id: idState,
    style: props.style,
    className: className
  }, otherProps), input, loader, dropdown, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AutoCompletePanel, _extends({
    ref: overlayRef,
    virtualScrollerRef: virtualScrollerRef
  }, props, {
    listId: listId,
    onItemClick: selectItem,
    selectedItem: selectedItem,
    onClick: onPanelClick,
    getOptionGroupLabel: getOptionGroupLabel,
    getOptionGroupChildren: getOptionGroupChildren,
    "in": overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntering: onOverlayEntering,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited
  }))), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_14__/* .Tooltip */ .u, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
AutoComplete.displayName = 'AutoComplete';




/***/ }),

/***/ 92285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ ChevronDownIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_iconbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4320);



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

var ChevronDownIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (inProps, ref) {
  var pti = primereact_iconbase__WEBPACK_IMPORTED_MODULE_1__/* .IconBase */ .A.getPTI(inProps);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    ref: ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }));
}));
ChevronDownIcon.displayName = 'ChevronDownIcon';




/***/ }),

/***/ 6094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ InputText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_keyfilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30411);
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57074);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13643);





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

var InputTextBase = {
  defaultProps: {
    __TYPE: 'InputText',
    keyfilter: null,
    validateOnly: false,
    tooltip: null,
    tooltipOptions: null,
    onInput: null,
    onKeyDown: null,
    onPaste: null,
    children: undefined
  },
  getProps: function getProps(props) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getMergedProps(props, InputTextBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getDiffProps(props, InputTextBase.defaultProps);
  }
};

var InputText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (inProps, ref) {
  var props = InputTextBase.getProps(inProps);
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(ref);
  var onKeyDown = function onKeyDown(event) {
    props.onKeyDown && props.onKeyDown(event);
    if (props.keyfilter) {
      primereact_keyfilter__WEBPACK_IMPORTED_MODULE_2__/* .KeyFilter */ .F.onKeyPress(event, props.keyfilter, props.validateOnly);
    }
  };
  var onInput = function onInput(event) {
    var target = event.target;
    var validatePattern = true;
    if (props.keyfilter && props.validateOnly) {
      validatePattern = primereact_keyfilter__WEBPACK_IMPORTED_MODULE_2__/* .KeyFilter */ .F.validate(event, props.keyfilter);
    }
    props.onInput && props.onInput(event, validatePattern);

    // for uncontrolled changes
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isNotEmpty(target.value) ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.addClass(target, 'p-filled') : primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.removeClass(target, 'p-filled');
  };
  var onPaste = function onPaste(event) {
    props.onPaste && props.onPaste(event);
    if (props.keyfilter) {
      primereact_keyfilter__WEBPACK_IMPORTED_MODULE_2__/* .KeyFilter */ .F.onPaste(event, props.keyfilter, props.validateOnly);
    }
  };
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  var isFilled = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isNotEmpty(props.value) || primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isNotEmpty(props.defaultValue);
  }, [props.value, props.defaultValue]);
  var hasTooltip = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.isNotEmpty(props.tooltip);
  var otherProps = InputTextBase.getOtherProps(props);
  var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-inputtext p-component', {
    'p-disabled': props.disabled,
    'p-filled': isFilled
  }, props.className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    ref: elementRef
  }, otherProps, {
    className: className,
    onInput: onInput,
    onKeyDown: onKeyDown,
    onPaste: onPaste
  })), hasTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
InputText.displayName = 'InputText';




/***/ }),

/***/ 30411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ KeyFilter)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var KeyFilter = {
  /* eslint-disable */
  DEFAULT_MASKS: {
    pint: /[\d]/,
    "int": /[\d\-]/,
    pnum: /[\d\.]/,
    money: /[\d\.\s,]/,
    num: /[\d\-\.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_\.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i
  },
  /* eslint-enable */getRegex: function getRegex(keyfilter) {
    return KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;
  },
  onKeyPress: function onKeyPress(e, keyfilter, validateOnly) {
    if (validateOnly) {
      return;
    }
    if (e.ctrlKey || e.altKey) {
      return;
    }
    var isPrintableKey = e.key.length === 1;
    if (!isPrintableKey) {
      return;
    }
    var regex = this.getRegex(keyfilter);
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  },
  onPaste: function onPaste(e, keyfilter, validateOnly) {
    if (validateOnly) {
      return;
    }
    var regex = this.getRegex(keyfilter);
    var clipboard = e.clipboardData.getData('text');

    // loop over each letter pasted and if any fail prevent the paste
    _toConsumableArray(clipboard).forEach(function (c) {
      if (!regex.test(c)) {
        e.preventDefault();
        return false;
      }
    });
  },
  validate: function validate(e, keyfilter) {
    var value = e.target.value,
      validatePattern = true;
    var regex = this.getRegex(keyfilter);
    if (value && !regex.test(value)) {
      validatePattern = false;
    }
    return validatePattern;
  }
};




/***/ }),

/***/ 50519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ OverlayService)
/* harmony export */ });
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13643);


var OverlayService = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_0__/* .EventBus */ .Nd)();




/***/ }),

/***/ 70243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ VirtualScroller)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13308);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13643);
/* harmony import */ var primereact_icons_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95807);





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

var VirtualScrollerBase = {
  defaultProps: {
    __TYPE: 'VirtualScroller',
    id: null,
    style: null,
    className: null,
    tabIndex: 0,
    items: null,
    itemSize: 0,
    scrollHeight: null,
    scrollWidth: null,
    orientation: 'vertical',
    step: 0,
    numToleratedItems: null,
    delay: 0,
    resizeDelay: 10,
    appendOnly: false,
    inline: false,
    lazy: false,
    disabled: false,
    loaderDisabled: false,
    loadingIcon: null,
    columns: null,
    loading: undefined,
    autoSize: false,
    showSpacer: true,
    showLoader: false,
    loadingTemplate: null,
    loaderIconTemplate: null,
    itemTemplate: null,
    contentTemplate: null,
    onScroll: null,
    onScrollIndexChange: null,
    onLazyLoad: null,
    children: undefined
  },
  getProps: function getProps(props) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getMergedProps(props, VirtualScrollerBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getDiffProps(props, VirtualScrollerBase.defaultProps);
  }
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var VirtualScroller = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (inProps, ref) {
  var props = VirtualScrollerBase.getProps(inProps);
  var prevProps = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .usePrevious */ .D9)(inProps) || {};
  var vertical = props.orientation === 'vertical';
  var horizontal = props.orientation === 'horizontal';
  var both = props.orientation === 'both';
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(both ? {
      rows: 0,
      cols: 0
    } : 0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    firstState = _React$useState2[0],
    setFirstState = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(both ? {
      rows: 0,
      cols: 0
    } : 0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    lastState = _React$useState4[0],
    setLastState = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pageState = _React$useState6[0],
    setPageState = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(both ? {
      rows: 0,
      cols: 0
    } : 0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    numItemsInViewportState = _React$useState8[0],
    setNumItemsInViewportState = _React$useState8[1];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.numToleratedItems),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    numToleratedItemsState = _React$useState10[0],
    setNumToleratedItemsState = _React$useState10[1];
  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.loading || false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    loadingState = _React$useState12[0],
    setLoadingState = _React$useState12[1];
  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    loaderArrState = _React$useState14[0],
    setLoaderArrState = _React$useState14[1];
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var _contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var _spacerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var _stickyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var lastScrollPos = react__WEBPACK_IMPORTED_MODULE_0__.useRef(both ? {
    top: 0,
    left: 0
  } : 0);
  var scrollTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var resizeTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var contentStyle = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  var spacerStyle = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  var defaultWidth = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var defaultHeight = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var defaultContentWidth = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var defaultContentHeight = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var isItemRangeChanged = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var lazyLoadState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var _useResizeListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useResizeListener */ .HR)({
      listener: function listener(event) {
        return onResize();
      },
      when: !props.disabled
    }),
    _useResizeListener2 = _slicedToArray(_useResizeListener, 1),
    bindWindowResizeListener = _useResizeListener2[0];
  var _useEventListener = (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useEventListener */ .OR)({
      target: 'window',
      type: 'orientationchange',
      listener: function listener(event) {
        return onResize();
      },
      when: !props.disabled
    }),
    _useEventListener2 = _slicedToArray(_useEventListener, 1),
    bindOrientationChangeListener = _useEventListener2[0];
  var getElementRef = function getElementRef() {
    return elementRef;
  };
  var getPageByFirst = function getPageByFirst(first) {
    return Math.floor((first + numToleratedItemsState * 4) / (props.step || 1));
  };
  var setContentElement = function setContentElement(element) {
    _contentRef.current = element || _contentRef.current || primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.findSingle(elementRef.current, '.p-virtualscroller-content');
  };
  var isPageChanged = function isPageChanged(first) {
    return props.step ? pageState !== getPageByFirst(first) : true;
  };
  var scrollTo = function scrollTo(options) {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
    elementRef.current && elementRef.current.scrollTo(options);
  };
  var scrollToIndex = function scrollToIndex(index) {
    var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var _calculateNumItems = calculateNumItems(),
      numToleratedItems = _calculateNumItems.numToleratedItems;
    var contentPos = getContentPosition();
    var calculateFirst = function calculateFirst() {
      var _index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _numT = arguments.length > 1 ? arguments[1] : undefined;
      return _index <= _numT ? 0 : _index;
    };
    var calculateCoord = function calculateCoord(_first, _size, _cpos) {
      return _first * _size + _cpos;
    };
    var scrollToItem = function scrollToItem() {
      var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return scrollTo({
        left: left,
        top: top,
        behavior: behavior
      });
    };
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var isRangeChanged = false;
    if (both) {
      newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };
      scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1], contentPos.left), calculateCoord(newFirst.rows, props.itemSize[0], contentPos.top));
      isRangeChanged = firstState.rows !== newFirst.rows || firstState.cols !== newFirst.cols;
    } else {
      newFirst = calculateFirst(index, numToleratedItems);
      horizontal ? scrollToItem(calculateCoord(newFirst, props.itemSize, contentPos.left), 0) : scrollToItem(0, calculateCoord(newFirst, props.itemSize, contentPos.top));
      isRangeChanged = firstState !== newFirst;
    }
    isItemRangeChanged.current = isRangeChanged;
    setFirstState(newFirst);
  };
  var scrollInView = function scrollInView(index, to) {
    var behavior = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
    if (to) {
      var _getRenderedRange = getRenderedRange(),
        first = _getRenderedRange.first,
        viewport = _getRenderedRange.viewport;
      var scrollToItem = function scrollToItem() {
        var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return scrollTo({
          left: left,
          top: top,
          behavior: behavior
        });
      };
      var isToStart = to === 'to-start';
      var isToEnd = to === 'to-end';
      if (isToStart) {
        if (both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows - 1) * props.itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollToItem((viewport.first.cols - 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else {
          if (viewport.first - first > index) {
            var pos = (viewport.first - 1) * props.itemSize;
            horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
          }
        }
      } else if (isToEnd) {
        if (both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows + 1) * props.itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollToItem((viewport.first.cols + 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else {
          if (viewport.last - first <= index + 1) {
            var _pos2 = (viewport.first + 1) * props.itemSize;
            horizontal ? scrollToItem(_pos2, 0) : scrollToItem(0, _pos2);
          }
        }
      }
    } else {
      scrollToIndex(index, behavior);
    }
  };
  var getRows = function getRows() {
    return loadingState ? props.loaderDisabled ? loaderArrState : [] : loadedItems();
  };
  var getColumns = function getColumns() {
    if (props.columns && both || horizontal) {
      return loadingState && props.loaderDisabled ? both ? loaderArrState[0] : loaderArrState : props.columns.slice(both ? firstState.cols : firstState, both ? lastState.cols : lastState);
    }
    return props.columns;
  };
  var getRenderedRange = function getRenderedRange() {
    var calculateFirstInViewport = function calculateFirstInViewport(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var firstInViewport = firstState;
    var lastInViewport = 0;
    if (elementRef.current) {
      var _elementRef$current = elementRef.current,
        scrollTop = _elementRef$current.scrollTop,
        scrollLeft = _elementRef$current.scrollLeft;
      if (both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, props.itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, props.itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + numItemsInViewportState.rows,
          cols: firstInViewport.cols + numItemsInViewportState.cols
        };
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, props.itemSize);
        lastInViewport = firstInViewport + numItemsInViewportState;
      }
    }
    return {
      first: firstState,
      last: lastState,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  };
  var calculateNumItems = function calculateNumItems() {
    var contentPos = getContentPosition();
    var contentWidth = elementRef.current ? elementRef.current.offsetWidth - contentPos.left : 0;
    var contentHeight = elementRef.current ? elementRef.current.offsetHeight - contentPos.top : 0;
    var calculateNumItemsInViewport = function calculateNumItemsInViewport(_contentSize, _itemSize) {
      return Math.ceil(_contentSize / (_itemSize || _contentSize));
    };
    var calculateNumToleratedItems = function calculateNumToleratedItems(_numItems) {
      return Math.ceil(_numItems / 2);
    };
    var numItemsInViewport = both ? {
      rows: calculateNumItemsInViewport(contentHeight, props.itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, props.itemSize[1])
    } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, props.itemSize);
    var numToleratedItems = numToleratedItemsState || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport: numItemsInViewport,
      numToleratedItems: numToleratedItems
    };
  };
  var calculateOptions = function calculateOptions() {
    var _calculateNumItems2 = calculateNumItems(),
      numItemsInViewport = _calculateNumItems2.numItemsInViewport,
      numToleratedItems = _calculateNumItems2.numToleratedItems;
    var calculateLast = function calculateLast(_first, _num, _numT) {
      var _isCols = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      return getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    };
    var last = both ? {
      rows: calculateLast(firstState.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(firstState.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(firstState, numItemsInViewport, numToleratedItems);
    setNumItemsInViewportState(numItemsInViewport);
    setNumToleratedItemsState(numToleratedItems);
    setLastState(last);
    if (props.showLoader) {
      setLoaderArrState(both ? Array.from({
        length: numItemsInViewport.rows
      }).map(function () {
        return Array.from({
          length: numItemsInViewport.cols
        });
      }) : Array.from({
        length: numItemsInViewport
      }));
    }
    if (props.lazy) {
      Promise.resolve().then(function () {
        lazyLoadState.current = {
          first: props.step ? both ? {
            rows: 0,
            cols: firstState.cols
          } : 0 : firstState,
          last: Math.min(props.step ? props.step : last, props.items.length)
        };
        props.onLazyLoad && props.onLazyLoad(lazyLoadState.current);
      });
    }
  };
  var calculateAutoSize = function calculateAutoSize(loading) {
    if (props.autoSize && !loading) {
      Promise.resolve().then(function () {
        if (_contentRef.current) {
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = 'auto';
          _contentRef.current.style.position = 'relative';
          elementRef.current.style.contain = 'none';

          /*const [contentWidth, contentHeight] = [DomHandler.getWidth(contentRef.current), DomHandler.getHeight(contentRef.current)];
           contentWidth !== defaultContentWidth.current && (elementRef.current.style.width = '');
          contentHeight !== defaultContentHeight.current && (elementRef.current.style.height = '');*/

          var _ref = [primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getWidth(elementRef.current), primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getHeight(elementRef.current)],
            width = _ref[0],
            height = _ref[1];
          (both || horizontal) && (elementRef.current.style.width = (width < defaultWidth.current ? width : props.scrollWidth || defaultWidth.current) + 'px');
          (both || vertical) && (elementRef.current.style.height = (height < defaultHeight.current ? height : props.scrollHeight || defaultHeight.current) + 'px');
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = '';
          _contentRef.current.style.position = '';
          elementRef.current.style.contain = '';
        }
      });
    }
  };
  var getLast = function getLast() {
    var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var isCols = arguments.length > 1 ? arguments[1] : undefined;
    return props.items ? Math.min(isCols ? (props.columns || props.items[0]).length : props.items.length, last) : 0;
  };
  var getContentPosition = function getContentPosition() {
    if (_contentRef.current) {
      var style = getComputedStyle(_contentRef.current);
      var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  };
  var setSize = function setSize() {
    if (elementRef.current) {
      var parentElement = elementRef.current.parentElement;
      var width = props.scrollWidth || "".concat(elementRef.current.offsetWidth || parentElement.offsetWidth, "px");
      var height = props.scrollHeight || "".concat(elementRef.current.offsetHeight || parentElement.offsetHeight, "px");
      var setProp = function setProp(_name, _value) {
        return elementRef.current.style[_name] = _value;
      };
      if (both || horizontal) {
        setProp('height', height);
        setProp('width', width);
      } else {
        setProp('height', height);
      }
    }
  };
  var setSpacerSize = function setSpacerSize() {
    var items = props.items;
    if (items) {
      var contentPos = getContentPosition();
      var setProp = function setProp(_name, _value, _size) {
        var _cpos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        return spacerStyle.current = _objectSpread(_objectSpread({}, spacerStyle.current), _defineProperty({}, "".concat(_name), (_value || []).length * _size + _cpos + 'px'));
      };
      if (both) {
        setProp('height', items, props.itemSize[0], contentPos.y);
        setProp('width', props.columns || items[1], props.itemSize[1], contentPos.x);
      } else {
        horizontal ? setProp('width', props.columns || items, props.itemSize, contentPos.x) : setProp('height', items, props.itemSize, contentPos.y);
      }
    }
  };
  var setContentPosition = function setContentPosition(pos) {
    if (_contentRef.current && !props.appendOnly) {
      var first = pos ? pos.first : firstState;
      var calculateTranslateVal = function calculateTranslateVal(_first, _size) {
        return _first * _size;
      };
      var setTransform = function setTransform() {
        var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        _stickyRef.current && (_stickyRef.current.style.top = "-".concat(_y, "px"));
        contentStyle.current = _objectSpread(_objectSpread({}, contentStyle.current), {
          transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
        });
      };
      if (both) {
        setTransform(calculateTranslateVal(first.cols, props.itemSize[1]), calculateTranslateVal(first.rows, props.itemSize[0]));
      } else {
        var translateVal = calculateTranslateVal(first, props.itemSize);
        horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  };
  var onScrollPositionChange = function onScrollPositionChange(event) {
    var target = event.target;
    var contentPos = getContentPosition();
    var calculateScrollPos = function calculateScrollPos(_pos, _cpos) {
      return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    };
    var calculateCurrentIndex = function calculateCurrentIndex(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var calculateTriggerIndex = function calculateTriggerIndex(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    var calculateFirst = function calculateFirst(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    var calculateLast = function calculateLast(_currentIndex, _first, _last, _num, _numT, _isCols) {
      var lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }
      return getLast(lastValue, _isCols);
    };
    var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var newLast = lastState;
    var isRangeChanged = false;
    var newScrollPos = lastScrollPos.current;
    if (both) {
      var isScrollDown = lastScrollPos.current.top <= scrollTop;
      var isScrollRight = lastScrollPos.current.left <= scrollLeft;
      if (!props.appendOnly || props.appendOnly && (isScrollDown || isScrollRight)) {
        var currentIndex = {
          rows: calculateCurrentIndex(scrollTop, props.itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, props.itemSize[1])
        };
        var triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], true)
        };
        isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols || isItemRangeChanged.current;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      var scrollPos = horizontal ? scrollLeft : scrollTop;
      var isScrollDownOrRight = lastScrollPos.current <= scrollPos;
      if (!props.appendOnly || props.appendOnly && isScrollDownOrRight) {
        var _currentIndex2 = calculateCurrentIndex(scrollPos, props.itemSize);
        var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newFirst = calculateFirst(_currentIndex2, _triggerIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newLast = calculateLast(_currentIndex2, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
        isRangeChanged = newFirst !== firstState || newLast !== lastState || isItemRangeChanged.current;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged: isRangeChanged,
      scrollPos: newScrollPos
    };
  };
  var onScrollChange = function onScrollChange(event) {
    var _onScrollPositionChan = onScrollPositionChange(event),
      first = _onScrollPositionChan.first,
      last = _onScrollPositionChan.last,
      isRangeChanged = _onScrollPositionChan.isRangeChanged,
      scrollPos = _onScrollPositionChan.scrollPos;
    if (isRangeChanged) {
      var newState = {
        first: first,
        last: last
      };
      setContentPosition(newState);
      setFirstState(first);
      setLastState(last);
      lastScrollPos.current = scrollPos;
      props.onScrollIndexChange && props.onScrollIndexChange(newState);
      if (props.lazy && isPageChanged(first)) {
        var newLazyLoadState = {
          first: props.step ? Math.min(getPageByFirst(first) * props.step, props.items.length - props.step) : first,
          last: Math.min(props.step ? (getPageByFirst(first) + 1) * props.step : last, props.items.length)
        };
        var isLazyStateChanged = !lazyLoadState.current || lazyLoadState.current.first !== newLazyLoadState.first || lazyLoadState.current.last !== newLazyLoadState.last;
        isLazyStateChanged && props.onLazyLoad && props.onLazyLoad(newLazyLoadState);
        lazyLoadState.current = newLazyLoadState;
      }
    }
  };
  var onScroll = function onScroll(event) {
    props.onScroll && props.onScroll(event);
    if (props.delay) {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (isPageChanged(firstState)) {
        if (!loadingState && props.showLoader) {
          var _onScrollPositionChan2 = onScrollPositionChange(event),
            isRangeChanged = _onScrollPositionChan2.isRangeChanged;
          var changed = isRangeChanged || (props.step ? isPageChanged(firstState) : false);
          changed && setLoadingState(true);
        }
        scrollTimeout.current = setTimeout(function () {
          onScrollChange(event);
          if (loadingState && props.showLoader && (!props.lazy || props.loading === undefined)) {
            setLoadingState(false);
            setPageState(getPageByFirst(firstState));
          }
        }, props.delay);
      }
    } else {
      onScrollChange(event);
    }
  };
  var onResize = function onResize() {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }
    resizeTimeout.current = setTimeout(function () {
      if (elementRef.current) {
        var _ref2 = [primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getWidth(elementRef.current), primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getHeight(elementRef.current)],
          width = _ref2[0],
          height = _ref2[1];
        var isDiffWidth = width !== defaultWidth.current,
          isDiffHeight = height !== defaultHeight.current;
        var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
        if (reinit) {
          setNumToleratedItemsState(props.numToleratedItems);
          defaultWidth.current = width;
          defaultHeight.current = height;
          defaultContentWidth.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getWidth(_contentRef.current);
          defaultContentHeight.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getHeight(_contentRef.current);
        }
      }
    }, props.resizeDelay);
  };
  var getOptions = function getOptions(renderedIndex) {
    var count = (props.items || []).length;
    var index = both ? firstState.rows + renderedIndex : firstState + renderedIndex;
    return {
      index: index,
      count: count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props: props
    };
  };
  var loaderOptions = function loaderOptions(index, extOptions) {
    var count = loaderArrState.length;
    return _objectSpread({
      index: index,
      count: count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props: props
    }, extOptions);
  };
  var loadedItems = function loadedItems() {
    var items = props.items;
    if (items && !loadingState) {
      if (both) return items.slice(props.appendOnly ? 0 : firstState.rows, lastState.rows).map(function (item) {
        return props.columns ? item : item.slice(props.appendOnly ? 0 : firstState.cols, lastState.cols);
      });else if (horizontal && props.columns) return items;else return items.slice(props.appendOnly ? 0 : firstState, lastState);
    }
    return [];
  };
  var viewInit = function viewInit() {
    if (elementRef.current && primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.isVisible(elementRef.current)) {
      setContentElement(_contentRef.current);
      init();
      bindWindowResizeListener();
      bindOrientationChangeListener();
      defaultWidth.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getWidth(elementRef.current);
      defaultHeight.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getHeight(elementRef.current);
      defaultContentWidth.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getWidth(_contentRef.current);
      defaultContentHeight.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .DomHandler */ .p7.getHeight(_contentRef.current);
    }
  };
  var init = function init() {
    if (!props.disabled) {
      setSize();
      calculateOptions();
      setSpacerSize();
    }
  };
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMountEffect */ .nw)(function () {
    viewInit();
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateEffect */ .rf)(function () {
    init();
  }, [props.itemSize, props.scrollHeight, props.scrollWidth]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateEffect */ .rf)(function () {
    if (props.numToleratedItems !== numToleratedItemsState) {
      setNumToleratedItemsState(props.numToleratedItems);
    }
  }, [props.numToleratedItems]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateEffect */ .rf)(function () {
    if (props.numToleratedItems === numToleratedItemsState) {
      init(); // reinit after resizing
    }
  }, [numToleratedItemsState]);
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateEffect */ .rf)(function () {
    if (!prevProps.items || prevProps.items.length !== (props.items || []).length) {
      init();
    }
    var loading = loadingState;
    if (props.lazy && prevProps.loading !== props.loading && props.loading !== loadingState) {
      setLoadingState(props.loading);
      loading = props.loading;
    }
    calculateAutoSize(loading);
  });
  (0,primereact_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateEffect */ .rf)(function () {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
  }, [props.orientation]);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElementRef: getElementRef,
      scrollTo: scrollTo,
      scrollToIndex: scrollToIndex,
      scrollInView: scrollInView,
      getRenderedRange: getRenderedRange
    };
  });
  var createLoaderItem = function createLoaderItem(index) {
    var extOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = loaderOptions(index, extOptions);
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.loadingTemplate, options);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, content);
  };
  var createLoader = function createLoader() {
    var iconClassName = 'p-virtualscroller-loading-icon';
    var icon = props.loadingIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_icons_spinner__WEBPACK_IMPORTED_MODULE_3__/* .SpinnerIcon */ .L, {
      className: iconClassName,
      spin: true
    });
    var loadingIcon = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .IconUtils */ .Cz.getJSXIcon(icon, {
      className: iconClassName
    }, {
      props: props
    });
    if (!props.loaderDisabled && props.showLoader && loadingState) {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-virtualscroller-loader', {
        'p-component-overlay': !props.loadingTemplate
      });
      var content = loadingIcon;
      if (props.loadingTemplate) {
        content = loaderArrState.map(function (_, index) {
          return createLoaderItem(index, both && {
            numCols: numItemsInViewportState.cols
          });
        });
      } else if (props.loaderIconTemplate) {
        var defaultContentOptions = {
          iconClassName: iconClassName,
          element: content,
          props: props
        };
        content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: className
      }, content);
    }
    return null;
  };
  var createSpacer = function createSpacer() {
    if (props.showSpacer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: _spacerRef,
        style: spacerStyle.current,
        className: "p-virtualscroller-spacer"
      });
    }
    return null;
  };
  var createItem = function createItem(item, index) {
    var options = getOptions(index);
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.itemTemplate, item, options);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: options.index
    }, content);
  };
  var createItems = function createItems() {
    var items = loadedItems();
    return items.map(createItem);
  };
  var createContent = function createContent() {
    var items = createItems();
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-virtualscroller-content', {
      'p-virtualscroller-loading': loadingState
    });
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: _contentRef,
      style: contentStyle.current,
      className: className
    }, items);
    if (props.contentTemplate) {
      var defaultOptions = {
        style: contentStyle.current,
        className: className,
        spacerStyle: spacerStyle.current,
        contentRef: function contentRef(el) {
          return _contentRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getRefElement(el);
        },
        spacerRef: function spacerRef(el) {
          return _spacerRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getRefElement(el);
        },
        stickyRef: function stickyRef(el) {
          return _stickyRef.current = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getRefElement(el);
        },
        items: loadedItems(),
        getItemOptions: function getItemOptions(index) {
          return getOptions(index);
        },
        children: items,
        element: content,
        props: props,
        loading: loadingState,
        getLoaderOptions: function getLoaderOptions(index, ext) {
          return loaderOptions(index, ext);
        },
        loadingTemplate: props.loadingTemplate,
        itemSize: props.itemSize,
        rows: getRows(),
        columns: getColumns(),
        vertical: vertical,
        horizontal: horizontal,
        both: both
      };
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.contentTemplate, defaultOptions);
    }
    return content;
  };
  if (props.disabled) {
    var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUtils */ .gb.getJSXElement(props.contentTemplate, {
      items: props.items,
      rows: props.items,
      columns: props.columns
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.children, content);
  } else {
    var otherProps = VirtualScrollerBase.getOtherProps(props);
    var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)('p-virtualscroller', {
      'p-virtualscroller-inline': props.inline,
      'p-virtualscroller-both p-both-scroll': both,
      'p-virtualscroller-horizontal p-horizontal-scroll': horizontal
    }, props.className);
    var loader = createLoader();
    var _content = createContent();
    var spacer = createSpacer();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      ref: elementRef,
      className: className,
      tabIndex: props.tabIndex,
      style: props.style
    }, otherProps, {
      onScroll: onScroll
    }), _content, spacer, loader);
  }
}));
VirtualScroller.displayName = 'VirtualScroller';




/***/ })

};
;
//# sourceMappingURL=7730.js.map