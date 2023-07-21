"use strict";
exports.id = 8942;
exports.ids = [8942];
exports.modules = {

/***/ 33578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36232);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70982);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59417);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28777);
const Stocks=()=>{const{0:stocks,1:setStocks}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Fetch data from the Alpha Vantage API
const fetchData=async()=>{try{const response=await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=2XIOQNKU3KUAHAJE");const{data}=response;// Extract the top gainers and losers from the API response
const{top_gainers,top_losers}=data;// Add the isGainer property to each stock in the gainers array
const gainers=top_gainers.map(stock=>({...stock,isGainer:true}));// Add the isGainer property to each stock in the losers array
const losers=top_losers.map(stock=>({...stock,isGainer:false}));// Combine gainers and losers and randomize the order
const combinedStocks=shuffle([...gainers,...losers]);setStocks(combinedStocks);}catch(error){console.error("Error fetching data:",error);}};fetchData();},[]);// Shuffle an array using Fisher-Yates algorithm
const shuffle=array=>{const newArray=[...array];for(let i=newArray.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[newArray[i],newArray[j]]=[newArray[j],newArray[i]];}return newArray;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__/* .CarouselProvider */ .sj,{naturalSlideWidth:100,naturalSlideHeight:30,totalSlides:stocks.length,visibleSlides:3,autoPlay:true,interval:1000,className:"carousel"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__/* .Slider */ .iR,{className:"slider"},stocks.map((stock,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__/* .Slide */ .Mi,{index:index,key:index,className:"slided"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"sizes",style:{width:"100%",color:stock.isGainer?"green":"red",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"10px"}},stock.ticker," - ",stock.price,stock.isGainer?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__/* .faArrowUp */ .FPD,style:{marginLeft:"0.5rem"}}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__/* .faArrowDown */ .r5q,style:{marginLeft:"0.5rem"}}))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stocks);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-stocks-js.js.map