"use strict";
exports.id = 9554;
exports.ids = [9554];
exports.modules = {

/***/ 3481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(98078));
var stores_1 = __webpack_require__(14965);
var utils_1 = __webpack_require__(78808);
var Animator = function (props) {
    var _a, _b;
    var children = props.children, animation = props.animation, style = props.style, className = props.className;
    var _c = (0, react_1.useContext)(stores_1.ScrollDataContext), currentPage = _c.currentPage, currentProgress = _c.currentProgress;
    var page = (0, react_1.useContext)(stores_1.ScrollPageContext).page;
    var _d = (0, react_1.useState)(true), isSSR = _d[0], setIsSSR = _d[1];
    (0, react_1.useEffect)(function () { return (typeof window !== "undefined" ? setIsSSR(false) : undefined); }, []);
    var calculatedStyle = (0, react_1.useMemo)(function () {
        var _a, _b;
        return isSSR
            ? style
            : currentPage === page // for current (out)
                ? __assign(__assign({}, (0, utils_1.computeStyle)((_a = animation === null || animation === void 0 ? void 0 : animation.out) === null || _a === void 0 ? void 0 : _a.style, currentProgress)), style)
                : currentPage === page - 1 // for next (in)
                    ? __assign(__assign({}, (0, utils_1.computeStyle)((_b = animation === null || animation === void 0 ? void 0 : animation.in) === null || _b === void 0 ? void 0 : _b.style, currentProgress)), style)
                    : { display: "none" };
    }, [
        isSSR,
        currentPage,
        page,
        (_a = animation === null || animation === void 0 ? void 0 : animation.out) === null || _a === void 0 ? void 0 : _a.style,
        (_b = animation === null || animation === void 0 ? void 0 : animation.in) === null || _b === void 0 ? void 0 : _b.style,
        currentProgress,
        style
    ]);
    return (react_1.default.createElement("div", { suppressHydrationWarning: true, style: calculatedStyle, className: className }, children));
};
exports["default"] = Animator;


/***/ }),

/***/ 97976:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(98078));
var constants_1 = __webpack_require__(94931);
var stores_1 = __webpack_require__(14965);
var utils_1 = __webpack_require__(78808);
var _window = typeof window !== "undefined" ? window : undefined;
var ScrollContainer = function (props) {
    var _a = props.snap, snap = _a === void 0 ? "none" : _a, children = props.children, _scrollParent = props.scrollParent, style = props.style, className = props.className;
    var scrollParent = _scrollParent || _window;
    var _b = (0, react_1.useState)(constants_1.initialScrollData), scrollData = _b[0], setScrollData = _b[1];
    var scrollTimer = (0, react_1.useRef)();
    var scrollEvent = (0, react_1.useCallback)(function () {
        if (snap !== "none" && scrollTimer.current)
            clearTimeout(scrollTimer.current);
        var currentY = scrollParent === window
            ? window.pageYOffset
            : scrollParent.scrollTop;
        var viewportHeight = scrollParent === window
            ? utils_1.environment.height
            : scrollParent.clientHeight;
        var totalPage = Array.isArray(children) ? children === null || children === void 0 ? void 0 : children.length : 1;
        var totalHeight = totalPage * (viewportHeight - 1);
        var totalProgress = currentY / totalHeight; // 전체 페이지 진행률 0 ~ 1
        var realPage = currentY / viewportHeight; // 실수 페이지
        var currentPage = Math.floor(realPage); // 정수 페이지
        var currentProgress = realPage - currentPage; // 현재 페이지 진행률
        setScrollData(function (scrollData) {
            return (__assign(__assign({}, scrollData), { currentY: currentY, viewportHeight: viewportHeight, totalPage: totalPage, totalHeight: totalHeight, totalProgress: totalProgress, realPage: realPage, currentPage: currentPage, currentProgress: currentProgress }));
        });
        if (snap !== "none") {
            scrollTimer.current = setTimeout(function () {
                var newCurrentPage = Math.round(realPage);
                var newCurrentY = currentY;
                if (snap === "mandatory" || Math.abs(newCurrentPage - realPage) < 0.3)
                    newCurrentY = newCurrentPage * viewportHeight;
                if (newCurrentY !== currentY)
                    window.scrollTo({
                        top: newCurrentY,
                        behavior: "smooth",
                    });
            }, 50);
        }
    }, [children, scrollParent, snap, setScrollData]);
    (0, react_1.useEffect)(function () {
        if (scrollParent) {
            scrollEvent();
            scrollParent.addEventListener("scroll", scrollEvent);
            scrollParent.addEventListener("resize", scrollEvent);
            return function () { return scrollParent.removeEventListener("scroll", scrollEvent); };
        }
    }, [scrollEvent, scrollParent]);
    return (react_1.default.createElement("div", { style: __assign({ margin: 0, padding: 0, userSelect: "none" }, style), className: className },
        react_1.default.createElement(stores_1.ScrollDataContext.Provider, { value: scrollData }, (Array.isArray(children) &&
            children.map(function (child, index) { return (react_1.default.createElement(stores_1.ScrollPageContext.Provider, { value: { page: index }, key: "scroll-page-".concat(index) }, child)); })) || (react_1.default.createElement(stores_1.ScrollPageContext.Provider, { value: { page: 0 } }, children)))));
};
exports["default"] = ScrollContainer;


/***/ }),

/***/ 9990:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(98078));
var stores_1 = __webpack_require__(14965);
var ScrollPage = function (props) {
    var children = props.children, _a = props.debugBorder, debugBorder = _a === void 0 ? false : _a, className = props.className, style = props.style;
    var viewportHeight = (0, react_1.useContext)(stores_1.ScrollDataContext).viewportHeight;
    var page = (0, react_1.useContext)(stores_1.ScrollPageContext).page;
    var pageStyle = __assign(__assign({ margin: 0, padding: 0, height: viewportHeight, position: "relative", boxSizing: "border-box", scrollSnapAlign: "center", overflow: "hidden" }, (debugBorder ? { border: "1px solid red" } : {})), style);
    return (react_1.default.createElement("div", { key: page, style: pageStyle, className: className }, children));
};
exports["default"] = ScrollPage;


/***/ }),

/***/ 36132:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.batch = void 0;
var callIfFunc = function (value) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return typeof value === "function" ? value.apply(void 0, params) : value;
};
var batch = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var animations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        animations[_i] = arguments[_i];
    }
    var batched = { in: { style: {} }, out: { style: {} } };
    var batchedTransform = {
        in: [],
        out: [],
    };
    for (var _o = 0, animations_1 = animations; _o < animations_1.length; _o++) {
        var animation = animations_1[_o];
        if ((_a = batched === null || batched === void 0 ? void 0 : batched.in) === null || _a === void 0 ? void 0 : _a.style)
            batched.in.style = __assign(__assign({}, (_b = batched === null || batched === void 0 ? void 0 : batched.in) === null || _b === void 0 ? void 0 : _b.style), (_c = animation === null || animation === void 0 ? void 0 : animation.in) === null || _c === void 0 ? void 0 : _c.style);
        if ((_d = batched === null || batched === void 0 ? void 0 : batched.out) === null || _d === void 0 ? void 0 : _d.style)
            batched.out.style = __assign(__assign({}, (_e = batched === null || batched === void 0 ? void 0 : batched.out) === null || _e === void 0 ? void 0 : _e.style), (_f = animation === null || animation === void 0 ? void 0 : animation.out) === null || _f === void 0 ? void 0 : _f.style);
        if ((_h = (_g = animation === null || animation === void 0 ? void 0 : animation.in) === null || _g === void 0 ? void 0 : _g.style) === null || _h === void 0 ? void 0 : _h.transform)
            batchedTransform.in.push(animation.in.style.transform);
        if ((_k = (_j = animation === null || animation === void 0 ? void 0 : animation.out) === null || _j === void 0 ? void 0 : _j.style) === null || _k === void 0 ? void 0 : _k.transform)
            batchedTransform.out.push(animation.out.style.transform);
    }
    if (batchedTransform.in.length > 0 && ((_l = batched === null || batched === void 0 ? void 0 : batched.in) === null || _l === void 0 ? void 0 : _l.style))
        batched.in.style.transform = function (value) {
            return batchedTransform.in
                .map(function (t) { return callIfFunc(t, value); })
                .join(" ");
        };
    if (batchedTransform.out.length > 0 && ((_m = batched === null || batched === void 0 ? void 0 : batched.out) === null || _m === void 0 ? void 0 : _m.style))
        batched.out.style.transform = function (value) {
            return batchedTransform.out
                .map(function (t) { return callIfFunc(t, value); })
                .join(" ");
        };
    return batched;
};
exports.batch = batch;


/***/ }),

/***/ 95179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FadeOut = exports.FadeIn = exports.Fade = void 0;
var utils_1 = __webpack_require__(78808);
var Fade = function (from, to) {
    if (from === void 0) { from = 0; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                opacity: function (value) { return (0, utils_1.SimpleInterpolation)(from, to, value); },
            },
        },
        out: {
            style: {
                opacity: function (value) { return (0, utils_1.SimpleInterpolation)(to, from, value); },
            },
        },
    });
};
exports.Fade = Fade;
var FadeIn = function (from, to) {
    if (from === void 0) { from = 0; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                opacity: function (value) { return (0, utils_1.SimpleInterpolation)(from, to, value); },
            },
        },
    });
};
exports.FadeIn = FadeIn;
var FadeOut = function (from, to) {
    if (from === void 0) { from = 0; }
    if (to === void 0) { to = 1; }
    return ({
        out: {
            style: {
                opacity: function (value) { return (0, utils_1.SimpleInterpolation)(from, to, value); },
            },
        },
    });
};
exports.FadeOut = FadeOut;


/***/ }),

/***/ 50607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveOut = exports.MoveIn = exports.Move = void 0;
var utils_1 = __webpack_require__(78808);
var Move = function (dx, dy, outDx, outDy) {
    if (dx === void 0) { dx = 0; }
    if (dy === void 0) { dy = 100; }
    if (outDx === void 0) { outDx = null; }
    if (outDy === void 0) { outDy = -100; }
    return ({
        in: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(dx, 0, value), "px, ").concat((0, utils_1.SimpleInterpolation)(dy, 0, value), "px)");
                },
            },
        },
        out: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(0, outDx || dx, value), "px, ").concat((0, utils_1.SimpleInterpolation)(0, outDy || dy, value), "px)");
                },
            },
        },
    });
};
exports.Move = Move;
var MoveIn = function (dx, dy) {
    if (dx === void 0) { dx = 0; }
    if (dy === void 0) { dy = 100; }
    return ({
        in: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(dx, 0, value), "px, ").concat((0, utils_1.SimpleInterpolation)(dy, 0, value), "px)");
                },
            },
        },
    });
};
exports.MoveIn = MoveIn;
var MoveOut = function (dx, dy) {
    if (dx === void 0) { dx = 0; }
    if (dy === void 0) { dy = -100; }
    return ({
        out: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(0, dx, value), "px, ").concat((0, utils_1.SimpleInterpolation)(0, dy, value), "px)");
                },
            },
        },
    });
};
exports.MoveOut = MoveOut;


/***/ }),

/***/ 93948:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StickyOut = exports.StickyIn = exports.Sticky = void 0;
var utils_1 = __webpack_require__(78808);
var Sticky = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
        out: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
    });
};
exports.Sticky = Sticky;
var StickyIn = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
        out: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "absolute",
            },
        },
    });
};
exports.StickyIn = StickyIn;
var StickyOut = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: "".concat((left * utils_1.environment.width) / 100, "px"),
                top: "".concat((top * utils_1.environment.height) / 100, "px"),
                transform: "translate(-50%, -50%)",
                position: "absolute",
            },
        },
        out: {
            style: {
                left: "".concat((left * utils_1.environment.width) / 100, "px"),
                top: "".concat((top * utils_1.environment.height) / 100, "px"),
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
    });
};
exports.StickyOut = StickyOut;


/***/ }),

/***/ 20784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoomOut = exports.ZoomIn = exports.Zoom = void 0;
var utils_1 = __webpack_require__(78808);
var Zoom = function (from, to) {
    if (from === void 0) { from = 10; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                transform: function (value) {
                    return "scale(".concat((0, utils_1.SimpleInterpolation)(from, to, value), ")");
                },
            },
        },
        out: {
            style: {
                transform: function (value) {
                    return "scale(".concat((0, utils_1.SimpleInterpolation)(to, from, value), ")");
                },
            },
        },
    });
};
exports.Zoom = Zoom;
var ZoomIn = function (from, to) {
    if (from === void 0) { from = 10; }
    if (to === void 0) { to = 1; }
    return ({
        in: {
            style: {
                transform: function (value) {
                    return "scale(".concat((0, utils_1.SimpleInterpolation)(from, to, value), ")");
                },
            },
        },
    });
};
exports.ZoomIn = ZoomIn;
var ZoomOut = function (from, to) {
    if (from === void 0) { from = 1; }
    if (to === void 0) { to = 10; }
    return ({
        out: {
            style: {
                transform: function (value) {
                    return "scale(".concat((0, utils_1.SimpleInterpolation)(from, to, value), ")");
                },
            },
        },
    });
};
exports.ZoomOut = ZoomOut;


/***/ }),

/***/ 17131:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoomOut = exports.ZoomIn = exports.Zoom = exports.StickyOut = exports.StickyIn = exports.Sticky = exports.MoveOut = exports.MoveIn = exports.Move = exports.FadeOut = exports.FadeIn = exports.Fade = exports.batch = void 0;
var AnimationTool_1 = __webpack_require__(36132);
Object.defineProperty(exports, "batch", ({ enumerable: true, get: function () { return AnimationTool_1.batch; } }));
var FadeAnimation_1 = __webpack_require__(95179);
Object.defineProperty(exports, "Fade", ({ enumerable: true, get: function () { return FadeAnimation_1.Fade; } }));
Object.defineProperty(exports, "FadeIn", ({ enumerable: true, get: function () { return FadeAnimation_1.FadeIn; } }));
Object.defineProperty(exports, "FadeOut", ({ enumerable: true, get: function () { return FadeAnimation_1.FadeOut; } }));
var MoveAnimation_1 = __webpack_require__(50607);
Object.defineProperty(exports, "Move", ({ enumerable: true, get: function () { return MoveAnimation_1.Move; } }));
Object.defineProperty(exports, "MoveIn", ({ enumerable: true, get: function () { return MoveAnimation_1.MoveIn; } }));
Object.defineProperty(exports, "MoveOut", ({ enumerable: true, get: function () { return MoveAnimation_1.MoveOut; } }));
var StickyAnimation_1 = __webpack_require__(93948);
Object.defineProperty(exports, "Sticky", ({ enumerable: true, get: function () { return StickyAnimation_1.Sticky; } }));
Object.defineProperty(exports, "StickyIn", ({ enumerable: true, get: function () { return StickyAnimation_1.StickyIn; } }));
Object.defineProperty(exports, "StickyOut", ({ enumerable: true, get: function () { return StickyAnimation_1.StickyOut; } }));
var ZoomAnimation_1 = __webpack_require__(20784);
Object.defineProperty(exports, "Zoom", ({ enumerable: true, get: function () { return ZoomAnimation_1.Zoom; } }));
Object.defineProperty(exports, "ZoomIn", ({ enumerable: true, get: function () { return ZoomAnimation_1.ZoomIn; } }));
Object.defineProperty(exports, "ZoomOut", ({ enumerable: true, get: function () { return ZoomAnimation_1.ZoomOut; } }));


/***/ }),

/***/ 94931:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initialScrollPage = exports.initialScrollData = void 0;
var initialScrollData_1 = __importDefault(__webpack_require__(20115));
exports.initialScrollData = initialScrollData_1.default;
var initialScrollPage_1 = __importDefault(__webpack_require__(62678));
exports.initialScrollPage = initialScrollPage_1.default;


/***/ }),

/***/ 20115:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var initialScrollData = {
    currentY: 0,
    viewportHeight: 0,
    totalPage: 0,
    totalHeight: 0,
    totalProgress: 0,
    realPage: 0,
    currentPage: 0,
    currentProgress: 0,
};
exports["default"] = initialScrollData;


/***/ }),

/***/ 62678:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var initialScrollPage = {
    page: 0,
};
exports["default"] = initialScrollPage;


/***/ }),

/***/ 89554:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoomOut = exports.ZoomIn = exports.Zoom = exports.StickyOut = exports.StickyIn = exports.Sticky = exports.MoveOut = exports.MoveIn = exports.Move = exports.FadeOut = exports.FadeIn = exports.Fade = exports.batch = exports.ScrollPage = exports.ScrollContainer = exports.Animator = void 0;
var animations_1 = __webpack_require__(17131);
Object.defineProperty(exports, "batch", ({ enumerable: true, get: function () { return animations_1.batch; } }));
Object.defineProperty(exports, "Fade", ({ enumerable: true, get: function () { return animations_1.Fade; } }));
Object.defineProperty(exports, "FadeIn", ({ enumerable: true, get: function () { return animations_1.FadeIn; } }));
Object.defineProperty(exports, "FadeOut", ({ enumerable: true, get: function () { return animations_1.FadeOut; } }));
Object.defineProperty(exports, "Move", ({ enumerable: true, get: function () { return animations_1.Move; } }));
Object.defineProperty(exports, "MoveIn", ({ enumerable: true, get: function () { return animations_1.MoveIn; } }));
Object.defineProperty(exports, "MoveOut", ({ enumerable: true, get: function () { return animations_1.MoveOut; } }));
Object.defineProperty(exports, "Sticky", ({ enumerable: true, get: function () { return animations_1.Sticky; } }));
Object.defineProperty(exports, "StickyIn", ({ enumerable: true, get: function () { return animations_1.StickyIn; } }));
Object.defineProperty(exports, "StickyOut", ({ enumerable: true, get: function () { return animations_1.StickyOut; } }));
Object.defineProperty(exports, "Zoom", ({ enumerable: true, get: function () { return animations_1.Zoom; } }));
Object.defineProperty(exports, "ZoomIn", ({ enumerable: true, get: function () { return animations_1.ZoomIn; } }));
Object.defineProperty(exports, "ZoomOut", ({ enumerable: true, get: function () { return animations_1.ZoomOut; } }));
var Animator_1 = __importDefault(__webpack_require__(3481));
exports.Animator = Animator_1.default;
var ScrollContainer_1 = __importDefault(__webpack_require__(97976));
exports.ScrollContainer = ScrollContainer_1.default;
var ScrollPage_1 = __importDefault(__webpack_require__(9990));
exports.ScrollPage = ScrollPage_1.default;


/***/ }),

/***/ 27111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrollDataContext = void 0;
var react_1 = __webpack_require__(98078);
var constants_1 = __webpack_require__(94931);
exports.ScrollDataContext = (0, react_1.createContext)(constants_1.initialScrollData);


/***/ }),

/***/ 21891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrollPageContext = void 0;
var react_1 = __webpack_require__(98078);
var constants_1 = __webpack_require__(94931);
exports.ScrollPageContext = (0, react_1.createContext)(constants_1.initialScrollPage);


/***/ }),

/***/ 14965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrollPageContext = exports.ScrollDataContext = void 0;
var ScrollDataContext_1 = __webpack_require__(27111);
Object.defineProperty(exports, "ScrollDataContext", ({ enumerable: true, get: function () { return ScrollDataContext_1.ScrollDataContext; } }));
var ScrollPageContext_1 = __webpack_require__(21891);
Object.defineProperty(exports, "ScrollPageContext", ({ enumerable: true, get: function () { return ScrollPageContext_1.ScrollPageContext; } }));


/***/ }),

/***/ 65143:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var computeStyle = function (style) {
    var _a;
    if (style === void 0) { style = {}; }
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var computedStyle = __assign({}, style);
    for (var key in computedStyle)
        if (typeof computedStyle[key] === "function")
            computedStyle[key] = (_a = computedStyle)[key].apply(_a, params);
    return computedStyle;
};
exports["default"] = computeStyle;


/***/ }),

/***/ 92268:
/***/ ((__unused_webpack_module, exports) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isIphone = typeof window !== "undefined"
    ? /iPhone/.test((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) !== null && _b !== void 0 ? _b : "")
    : false;
var isSafari = typeof window !== "undefined"
    ? /Safari/.test((_d = (_c = window.navigator) === null || _c === void 0 ? void 0 : _c.userAgent) !== null && _d !== void 0 ? _d : "")
    : false;
var environment = new Proxy({ width: 0, height: 0 }, {
    get: function (target, key) {
        if (typeof window === "undefined")
            return undefined;
        if (key === "height") {
            if (isIphone && isSafari)
                return window.screen.height - 80;
            return window.innerHeight;
        }
        if (key === "width") {
            if (isIphone && isSafari)
                return window.screen.width;
            return window.innerWidth;
        }
        return undefined;
    },
});
exports["default"] = environment;


/***/ }),

/***/ 78808:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.computeStyle = exports.SimpleInterpolation = exports.environment = void 0;
var computeStyle_1 = __importDefault(__webpack_require__(65143));
exports.computeStyle = computeStyle_1.default;
var environment_1 = __importDefault(__webpack_require__(92268));
exports.environment = environment_1.default;
var interpolation_1 = __webpack_require__(34925);
Object.defineProperty(exports, "SimpleInterpolation", ({ enumerable: true, get: function () { return interpolation_1.SimpleInterpolation; } }));


/***/ }),

/***/ 34925:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimpleInterpolation = void 0;
var SimpleInterpolation = function (from, to, value) {
    return from * (1 - value) + to * value;
};
exports.SimpleInterpolation = SimpleInterpolation;


/***/ })

};
;
//# sourceMappingURL=9554.js.map