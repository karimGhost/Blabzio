"use strict";
exports.id = 8849;
exports.ids = [8849];
exports.modules = {

/***/ 19819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36232);
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {const{0:market,1:setmarket}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({data:null,color:'green'});const{0:market2,1:setmarket2}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({data:null,color:'red'});const{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const fetchUrl2='https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=f8ff84c0ba20f4e45161f78360babf5c';const fetchUrl='https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=f8ff84c0ba20f4e45161f78360babf5c';(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{async function fetchData(){try{const response=await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get(fetchUrl);setmarket(prevState=>({...prevState,data:response.data}));}catch(error){setError(error);}}fetchData();},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{async function fetchData(){try{const response=await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get(fetchUrl2);console.log(`bad ${response}`);setmarket2(prevState=>({...prevState,data:response.data}));}catch(error){console.log(error);setmarket2('getting market');}}fetchData();},[]);const{0:shufle,1:setshufle}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();const dat=market.data?market.data.map(obj=>({...obj,color:'green'})):null;const dat2=market2.data?market2.data.map(obj1=>({...obj1,color:'red'})):null;const va=market.data?dat.concat(dat2):null;//shuffling  using fisheryets method
const shuffleArray=arr=>{const shuffledArr=market.data&&market2.data?arr.slice():null;for(let i=market.data&&market2.data?shuffledArr.length-1:null;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffledArr[i],shuffledArr[j]]=[shuffledArr[j],shuffledArr[i]];}return shuffledArr;};let vaa=market2.data?shuffleArray(va):null;console.log(vaa);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{window.setInterval(rollback,100);function rollback(){let first=jquery__WEBPACK_IMPORTED_MODULE_1___default()("#card").find("div:first");let width=first.width();first.animate({marginLeft:-width},9000,function(){let last=jquery__WEBPACK_IMPORTED_MODULE_1___default()("#card").find("div:last");last.after(first);first.css({marginLeft:0});});}},[va]);if(error){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{color:"black"}},"An error occurred:getting market Data ");}if(!market.data){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,"Loading...");}if(!market2.data){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,"Loading...");}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{id:"card"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"marketContainer"},vaa.map(da=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{color:"white"},key:da.name},da.name," ",da.changesPercentage.toFixed()," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{color:da.color==='green'?'rgb(46, 197, 16)':'rgb(252, 60, 60)'}},da.color==='green'?"+":"",da.change,"%")," "))));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-market-js.js.map