"use strict";
exports.id = 2060;
exports.ids = [2060,2359];
exports.modules = {

/***/ 12868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91072);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8665);
//import i18n from "../components/i18n";
const Pagination=({totalPages,currentPage,handlePageChange})=>{// Generate an array of page numbers
const pageNumbers=Array.from(Array(totalPages).keys()).map(i=>i+1);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination"},currentPage>1?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{id:"btp",className:"btn1",onClick:()=>handlePageChange(currentPage-1)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Previous")," "):null,pageNumbers.map(number=>// Only render a button if there are items to display on that page
number<=totalPages?// Only render the current page button and the buttons for the two pages before and after the current page
number===currentPage||number===currentPage-1||number===currentPage+1||number===totalPages?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{style:{color:'black'},className:number===currentPage?"current ":"btnum",key:number,onClick:()=>handlePageChange(number)},number===1?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"1"):number===2?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"2"):number===3?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"3"):number===4?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"4"):number===5?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"5"):number===6?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"6"):number===7?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"7"):number===8?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"8"):number===9?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"9"):number===10?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"10"):number):null:null),currentPage<totalPages?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{id:"btp",className:"btn2",onClick:()=>handlePageChange(currentPage+1)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Next")," "):null);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ 91598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Currency)
});

// NAMESPACE OBJECT: ./src/styles/Currency.module.css
var Currency_module_namespaceObject = {};
__webpack_require__.r(Currency_module_namespaceObject);
__webpack_require__.d(Currency_module_namespaceObject, {
  yY: () => (btn),
  nP: () => (heading),
  DH: () => (main)
});

// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/styles/Currency.module.css
// Exports
var heading = "Currency-module--heading--61004";
var main = "Currency-module--main--f8388";
var btn = "Currency-module--btn--bcb8c";
var finalAmount = "Currency-module--finalAmount--c5741";
var finalValue = "Currency-module--finalValue--79831";

;// CONCATENATED MODULE: ./src/pages/currencyConv/Currency.js
/* provided dependency */ var fetch = __webpack_require__(31515);
const options=(/* unused pure expression or super */ null && (['USD','']));function Currency(){const api="https://api.exchangerate-api.com/v4/latest/USD";//// eve
const{0:resultFrom,1:setResultFrom}=(0,index_js_.useState)('');const{0:resultTo,1:setResultTo}=(0,index_js_.useState)('');const{0:searchValue,1:setSearchValue}=(0,index_js_.useState)('');const handleFromCurrencyChange=event=>{setResultFrom(event.target.value);};const handleToCurrencyChange=event=>{setResultTo(event.target.value);};const handleInputChange=e=>{setSearchValue(e.target.value);};const{0:convertedValue,1:setConvertedValue}=(0,index_js_.useState)('');const handleConvert=()=>{fetch(`${api}`).then(response=>response.json()).then(data=>{const fromRate=data.rates[resultFrom];const toRate=data.rates[resultTo];const convertedValue=(toRate/fromRate*searchValue).toFixed(2);setConvertedValue(convertedValue);});};const clearVal=()=>{alert("clear");setSearchValue('');setResultFrom(' ');setResultTo('');setConvertedValue('');};return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("h1",{className:`${heading} text-center display-2`},"Currency Converter"),/*#__PURE__*/index_js_default().createElement("hr",{className:Currency_module_namespaceObject.hr}),/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:main},/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex"}},/*#__PURE__*/index_js_default().createElement("div",{className:"form-group"},/*#__PURE__*/index_js_default().createElement("label",{style:{marginTop:"-30px",background:"transparent",padding:"0"},className:`${main} `,htmlFor:"oamount"},"Amount to Convert:"),/*#__PURE__*/index_js_default().createElement("input",{type:"number",className:"form-control searchBox",onChange:handleInputChange,placeholder:"0.00",id:"oamount"})),/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:"-23px",width:" 100%",marginLeft:"3px"}},/*#__PURE__*/index_js_default().createElement("span",{style:{width:"100%"}},"Converted :"),/*#__PURE__*/index_js_default().createElement("input",{disabled:true,value:convertedValue,className:"form-control searchBox",style:{color:"green",width:"100%"}}))),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"input-group mb-3"},/*#__PURE__*/index_js_default().createElement("div",{className:"input-group-prepend"},/*#__PURE__*/index_js_default().createElement("span",{className:"input-group-text"},"From")),/*#__PURE__*/index_js_default().createElement("select",{className:"form-control from",onChange:handleFromCurrencyChange,id:"sel1"},/*#__PURE__*/index_js_default().createElement("option",{style:{width:"100%"},value:""},"Select One \u2026"),/*#__PURE__*/index_js_default().createElement("option",{value:"USD"},"USD"),/*#__PURE__*/index_js_default().createElement("option",{value:"AED"},"AED"),/*#__PURE__*/index_js_default().createElement("option",{value:"ARS"},"ARS"),/*#__PURE__*/index_js_default().createElement("option",{value:"AUD"},"AUD"),/*#__PURE__*/index_js_default().createElement("option",{value:"BGN"},"BGN"),/*#__PURE__*/index_js_default().createElement("option",{value:"BRL"},"BRL"),/*#__PURE__*/index_js_default().createElement("option",{value:"BSD"},"BSD"),/*#__PURE__*/index_js_default().createElement("option",{value:"CAD"},"CAD"),/*#__PURE__*/index_js_default().createElement("option",{value:"CHF"},"CHF"),/*#__PURE__*/index_js_default().createElement("option",{value:"CLP"},"CLP"),/*#__PURE__*/index_js_default().createElement("option",{value:"CNY"},"CNY"),/*#__PURE__*/index_js_default().createElement("option",{value:"COP"},"COP"),/*#__PURE__*/index_js_default().createElement("option",{value:"CZK"},"CZK"),/*#__PURE__*/index_js_default().createElement("option",{value:"DKK"},"DKK"),/*#__PURE__*/index_js_default().createElement("option",{value:"DOP"},"DOP"),/*#__PURE__*/index_js_default().createElement("option",{value:"EGP"},"EGP"),/*#__PURE__*/index_js_default().createElement("option",{value:"EUR"},"EUR"),/*#__PURE__*/index_js_default().createElement("option",{value:"FJD"},"FJD"),/*#__PURE__*/index_js_default().createElement("option",{value:"GBP"},"GBP"),/*#__PURE__*/index_js_default().createElement("option",{value:"GTQ"},"GTQ"),/*#__PURE__*/index_js_default().createElement("option",{value:"HKD"},"HKD"),/*#__PURE__*/index_js_default().createElement("option",{value:"HRK"},"HRK"),/*#__PURE__*/index_js_default().createElement("option",{value:"HUF"},"HUF"),/*#__PURE__*/index_js_default().createElement("option",{value:"IDR"},"IDR"),/*#__PURE__*/index_js_default().createElement("option",{value:"ILS"},"ILS"),/*#__PURE__*/index_js_default().createElement("option",{value:"INR"},"INR"),/*#__PURE__*/index_js_default().createElement("option",{value:"ISK"},"ISK"),/*#__PURE__*/index_js_default().createElement("option",{value:"JPY"},"JPY"),/*#__PURE__*/index_js_default().createElement("option",{value:"KRW"},"KRW"),/*#__PURE__*/index_js_default().createElement("option",{value:"KZT"},"KZT"),/*#__PURE__*/index_js_default().createElement("option",{value:"MVR"},"MVR"),/*#__PURE__*/index_js_default().createElement("option",{value:"MXN"},"MXN"),/*#__PURE__*/index_js_default().createElement("option",{value:"MYR"},"MYR"),/*#__PURE__*/index_js_default().createElement("option",{value:"NOK"},"NOK"),/*#__PURE__*/index_js_default().createElement("option",{value:"NZD"},"NZD"),/*#__PURE__*/index_js_default().createElement("option",{value:"PAB"},"PAB"),/*#__PURE__*/index_js_default().createElement("option",{value:"PEN"},"PEN"),/*#__PURE__*/index_js_default().createElement("option",{value:"PHP"},"PHP"),/*#__PURE__*/index_js_default().createElement("option",{value:"PKR"},"PKR"),/*#__PURE__*/index_js_default().createElement("option",{value:"PLN"},"PLN"),/*#__PURE__*/index_js_default().createElement("option",{value:"PYG"},"PYG"),/*#__PURE__*/index_js_default().createElement("option",{value:"RON"},"RON"),/*#__PURE__*/index_js_default().createElement("option",{value:"RUB"},"RUB"),/*#__PURE__*/index_js_default().createElement("option",{value:"SAR"},"SAR"),/*#__PURE__*/index_js_default().createElement("option",{value:"SEK"},"SEK"),/*#__PURE__*/index_js_default().createElement("option",{value:"SGD"},"SGD"),/*#__PURE__*/index_js_default().createElement("option",{value:"THB"},"THB"),/*#__PURE__*/index_js_default().createElement("option",{value:"TRY"},"TRY"),/*#__PURE__*/index_js_default().createElement("option",{value:"TWD"},"TWD"),/*#__PURE__*/index_js_default().createElement("option",{value:"UAH"},"UAH"),/*#__PURE__*/index_js_default().createElement("option",{value:"UYU"},"UYU"),/*#__PURE__*/index_js_default().createElement("option",{value:"ZAR"},"ZAR")))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"input-group mb-3"},/*#__PURE__*/index_js_default().createElement("div",{className:"input-group-prepend"},/*#__PURE__*/index_js_default().createElement("span",{className:"input-group-text"},"To")),/*#__PURE__*/index_js_default().createElement("select",{className:"form-control to",onChange:handleToCurrencyChange,id:"sel2"},/*#__PURE__*/index_js_default().createElement("option",{style:{width:"fit-content"},value:""},"Select One \u2026"),/*#__PURE__*/index_js_default().createElement("option",{value:"USD"},"USD"),/*#__PURE__*/index_js_default().createElement("option",{value:"AED"},"AED"),/*#__PURE__*/index_js_default().createElement("option",{value:"ARS"},"ARS"),/*#__PURE__*/index_js_default().createElement("option",{value:"AUD"},"AUD"),/*#__PURE__*/index_js_default().createElement("option",{value:"BGN"},"BGN"),/*#__PURE__*/index_js_default().createElement("option",{value:"BRL"},"BRL"),/*#__PURE__*/index_js_default().createElement("option",{value:"BSD"},"BSD"),/*#__PURE__*/index_js_default().createElement("option",{value:"CAD"},"CAD"),/*#__PURE__*/index_js_default().createElement("option",{value:"CHF"},"CHF"),/*#__PURE__*/index_js_default().createElement("option",{value:"CLP"},"CLP"),/*#__PURE__*/index_js_default().createElement("option",{value:"CNY"},"CNY"),/*#__PURE__*/index_js_default().createElement("option",{value:"COP"},"COP"),/*#__PURE__*/index_js_default().createElement("option",{value:"CZK"},"CZK"),/*#__PURE__*/index_js_default().createElement("option",{value:"DKK"},"DKK"),/*#__PURE__*/index_js_default().createElement("option",{value:"DOP"},"DOP"),/*#__PURE__*/index_js_default().createElement("option",{value:"EGP"},"EGP"),/*#__PURE__*/index_js_default().createElement("option",{value:"EUR"},"EUR"),/*#__PURE__*/index_js_default().createElement("option",{value:"FJD"},"FJD"),/*#__PURE__*/index_js_default().createElement("option",{value:"GBP"},"GBP"),/*#__PURE__*/index_js_default().createElement("option",{value:"GTQ"},"GTQ"),/*#__PURE__*/index_js_default().createElement("option",{value:"HKD"},"HKD"),/*#__PURE__*/index_js_default().createElement("option",{value:"HRK"},"HRK"),/*#__PURE__*/index_js_default().createElement("option",{value:"HUF"},"HUF"),/*#__PURE__*/index_js_default().createElement("option",{value:"IDR"},"IDR"),/*#__PURE__*/index_js_default().createElement("option",{value:"ILS"},"ILS"),/*#__PURE__*/index_js_default().createElement("option",{value:"INR"},"INR"),/*#__PURE__*/index_js_default().createElement("option",{value:"ISK"},"ISK"),/*#__PURE__*/index_js_default().createElement("option",{value:"JPY"},"JPY"),/*#__PURE__*/index_js_default().createElement("option",{value:"KRW"},"KRW"),/*#__PURE__*/index_js_default().createElement("option",{value:"KZT"},"KZT"),/*#__PURE__*/index_js_default().createElement("option",{value:"MVR"},"MVR"),/*#__PURE__*/index_js_default().createElement("option",{value:"MXN"},"MXN"),/*#__PURE__*/index_js_default().createElement("option",{value:"MYR"},"MYR"),/*#__PURE__*/index_js_default().createElement("option",{value:"NOK"},"NOK"),/*#__PURE__*/index_js_default().createElement("option",{value:"NZD"},"NZD"),/*#__PURE__*/index_js_default().createElement("option",{value:"PAB"},"PAB"),/*#__PURE__*/index_js_default().createElement("option",{value:"PEN"},"PEN"),/*#__PURE__*/index_js_default().createElement("option",{value:"PHP"},"PHP"),/*#__PURE__*/index_js_default().createElement("option",{value:"PKR"},"PKR"),/*#__PURE__*/index_js_default().createElement("option",{value:"PLN"},"PLN"),/*#__PURE__*/index_js_default().createElement("option",{value:"PYG"},"PYG"),/*#__PURE__*/index_js_default().createElement("option",{value:"RON"},"RON"),/*#__PURE__*/index_js_default().createElement("option",{value:"RUB"},"RUB"),/*#__PURE__*/index_js_default().createElement("option",{value:"SAR"},"SAR"),/*#__PURE__*/index_js_default().createElement("option",{value:"SEK"},"SEK"),/*#__PURE__*/index_js_default().createElement("option",{value:"SGD"},"SGD"),/*#__PURE__*/index_js_default().createElement("option",{value:"THB"},"THB"),/*#__PURE__*/index_js_default().createElement("option",{value:"TRY"},"TRY"),/*#__PURE__*/index_js_default().createElement("option",{value:"TWD"},"TWD"),/*#__PURE__*/index_js_default().createElement("option",{value:"UAH"},"UAH"),/*#__PURE__*/index_js_default().createElement("option",{value:"UYU"},"UYU"),/*#__PURE__*/index_js_default().createElement("option",{value:"ZAR"},"ZAR"))))),/*#__PURE__*/index_js_default().createElement("div",{className:"text-center"},/*#__PURE__*/index_js_default().createElement("button",{className:`${btn}btn btn-primary convert m-2`,type:"button",onClick:handleConvert},"Convert"),/*#__PURE__*/index_js_default().createElement("button",{className:`${btn} btn btn-primary m-2`,onClick:clearVal},"Reset"))))));}

/***/ }),

/***/ 1140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ Business)
});

// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js + 11 modules
var Layout = __webpack_require__(51333);
;// CONCATENATED MODULE: ./src/styles/Business.module.css
// Exports
var containerRate = "Business-module--containerRate--45048";
var H1 = "Business-module--H1--f054d";
var size1 = "Business-module--size1--398eb";
var size2 = "Business-module--size2--6e02b";
var textf = "Business-module--textf--692c3";
var textf1 = "Business-module--textf1--2557a";
var div = "Business-module--div--561b9";
var bigcontainer = "Business-module--bigcontainer--cd467";
var Containercurrency = "Business-module--Containercurrency--e7261";

// EXTERNAL MODULE: ./src/pages/Market.js
var Market = __webpack_require__(19819);
// EXTERNAL MODULE: ./src/pages/currencyConv/Currency.js + 1 modules
var Currency = __webpack_require__(91598);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(57076);
// EXTERNAL MODULE: ./src/components/PagesData.js
var PagesData = __webpack_require__(37489);
// EXTERNAL MODULE: ./src/Accounts/useAuth.js
var useAuth = __webpack_require__(94405);
// EXTERNAL MODULE: ./src/pages/Pagination.js
var Pagination = __webpack_require__(12868);
// EXTERNAL MODULE: ./node_modules/firebase/database/dist/index.mjs
var dist = __webpack_require__(88965);
// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.mjs
var app_dist = __webpack_require__(75159);
// EXTERNAL MODULE: ./node_modules/firebase/compat/database/dist/index.mjs + 1 modules
var database_dist = __webpack_require__(9016);
// EXTERNAL MODULE: ./node_modules/firebase/compat/auth/dist/index.mjs + 3 modules
var auth_dist = __webpack_require__(67815);
// EXTERNAL MODULE: ./node_modules/firebase/compat/firestore/dist/index.mjs + 3 modules
var firestore_dist = __webpack_require__(30359);
// EXTERNAL MODULE: ./src/pages/Language.js
var Language = __webpack_require__(8665);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(91072);
// EXTERNAL MODULE: ./src/components/i18n.js + 5 modules
var i18n = __webpack_require__(12751);
// EXTERNAL MODULE: ./src/components/Loadings.js
var Loadings = __webpack_require__(80221);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(2711);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(70982);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(59417);
;// CONCATENATED MODULE: ./src/pages/morenews/Business.js
//import requests from "../../requests";
//import axio from '../../axios';
//import axios from 'axios'
//import { initializeApp } from "firebase/app";
const firebaseConfig6={apiKey:"AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",authDomain:"zenaitsworld.firebaseapp.com",projectId:"zenaitsworld",storageBucket:"zenaitsworld.appspot.com",messagingSenderId:"752059821465",appId:"1:752059821465:web:a892347312cbfad858f708",measurementId:"G-GEMHBSGYPY"};const firebaseConfig1719={// Your Firebase configuration here
apiKey:"AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",authDomain:"compo-57c97.firebaseapp.com",databaseURL:"https://compo-57c97-default-rtdb.firebaseio.com",projectId:"compo-57c97",storageBucket:"compo-57c97.appspot.com",messagingSenderId:"475037571261",appId:"1:475037571261:web:9db4f4bdd540a72bbb3fd4"};const firebaseConfig1412={apiKey:"AIzaSyBh8ygMi8nTJ7WVcA9amKSwABs_NzJZQk4",authDomain:"chatszen.firebaseapp.com",databaseURL:"https://chatszen-default-rtdb.firebaseio.com",projectId:"chatszen",storageBucket:"chatszen.appspot.com",messagingSenderId:"83570132385",appId:"1:83570132385:web:b9d0772699726c7bb4f7e0",measurementId:"G-4S4BTTXP48"};function Business(){const{user,loading,signOut}=(0,useAuth/* useAuth */.a)();app_dist/* default */.Z.initializeApp(firebaseConfig6,'app6');const app6=app_dist/* default */.Z.app('app6');(0,index_js_.useEffect)(()=>{aos_default().init();},[]);const{0:saved,1:setSaved}=(0,index_js_.useState)([]);app_dist/* default */.Z.initializeApp(firebaseConfig1412,'app1312');const app1212=app_dist/* default */.Z.app('app1312');const databaseSavedNews=app1212.database();const savedItemsRef=user&&databaseSavedNews.ref(`savedNews/${user.uid}`);const app1919=app_dist/* default */.Z.initializeApp(firebaseConfig1719,'app1819');const database=app1919.database();function saveit(item,urls){const dats=urls;const val=item.title.replace(/[.#$\[\]]/g," ");const isSaved=saved[val]||false;setSaved({...saved,[val]:!isSaved});const sanitizedLink=dats.replace(/[.#$?[\]]/g,'_');database.ref(sanitizedLink).on('value',snapshot=>{const snap=snapshot.val();const val=item.title.replace(/[.#$\[\]]/g," ");savedItemsRef.child(val).once('value',snapshot=>{alert(val);if(snapshot.exists()){savedItemsRef.child(val).remove();}else{savedItemsRef.child(val).set(snap);}});});}(0,index_js_.useEffect)(()=>{if(!savedItemsRef){return;}const onDataChange=snapshot=>{const savedData=snapshot.val();if(savedData){const titles=savedData;setSaved(titles);}else{setSaved({});}};savedItemsRef.on('value',onDataChange);return()=>{savedItemsRef.off('value',onDataChange);};},[user]);const isBloged=(0,index_js_.useRef)(true);/*

  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const vr = "http://localhost:8080/"
  const API_KEY = "94044cd2f55546cc9a5703814c9ca1a6";
  const date = new Date().toISOString().slice(0, 10);
  const dats = `https://newsapi.org/v2/everything?q=Business&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;


  /// Start to set up Real time database fetch data from api

  async function getContent(url) {
    try {
      // Use the CORS proxy to make the request to the News API
      const response = await axios.get(url);
  
      // Return the data from the News API
      return response.data.articles;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  async function updateDatabase(link) {
  
    try {
      // Clear the existing data in the database
      await firebase.database().ref('Business').remove();
  
      // Fetch the new data
      const articles = await getContent(link);
  
      // Iterate over the articles and set them to the Firebase database
      articles.forEach(article => {
        const key = firebase.database().ref('Business').push().key;
  
        firebase.database().ref('Business').child(key).update({
              title: article.title,
              description: article.description,
              urlToImage: article.urlToImage,
              content: article.content,
              publishedAt: article.publishedAt,
              url: article.url
            });
      })
        } catch (error) {
          console.error(error);
        }
  }
  
  
  
  useEffect(() => {
    updateDatabase(dats);
  
  }, []);  

  */ //End of setup data 
//const request =  "https://financialmodelingprep.com/api/v3";
const{0:news,1:setNews}=(0,index_js_.useState)();(0,index_js_.useEffect)(()=>{app6.database().ref('Business').on('value',snapshot=>{setNews(snapshot.val());});},[]);const{0:itemsPerPage}=(0,index_js_.useState)(40);// number of items to display per page
const{0:currentPage,1:setCurrentPage}=(0,index_js_.useState)(1);// current page number
const totalPages=news?Math.ceil(Object.keys(news).length/itemsPerPage):0;console.log(`totalpages ${totalPages}`);console.log(`currentPages ${currentPage}`);console.log(`itemsperpage ${itemsPerPage}`);// Method for handling page changes
const handlePageChange=page=>{if(page<=totalPages){setCurrentPage(page);}};// Get the news items for the current page
const currentNews=news&&Object.values(news).slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);const{0:da,1:setda}=(0,index_js_.useState)('Buss');const{0:off,1:setoff}=(0,index_js_.useState)(false);function locale(ne){setda(ne);/* localStorage.setItem('data', JSON.stringify(ne)) */setoff(true);//localStorage.setItem('data', JSON.stringify(ne))
}const{0:lang,1:setLang}=(0,index_js_.useState)("");const{0:language,1:setLanguage}=(0,index_js_.useState)("");const{0:lag,1:setLag}=(0,index_js_.useState)('');const{0:la,1:setLa}=(0,index_js_.useState)('');console.log(`$the object is as ${lag}`);const{0:v,1:setv}=(0,index_js_.useState)();(0,index_js_.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app6.database().ref(`users/${user.uid}`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){setLag(true);console.log("Snapshot value is null or undefined");return;}setLag(false);// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();i18n/* default */.Z.changeLanguage(val.language);}else{i18n/* default */.Z.changeLanguage(snapshot.val());}});}},[user]);function handleLanguageChange(event){const newLanguage=event.target.value;setLanguage(newLanguage);i18n/* default */.Z.changeLanguage(newLanguage);app6.database().ref(`users/${user.uid}`).set({language:newLanguage});// localStorage.setItem('lag', JSON.stringify(newLanguage));
}/*
  if(!news ){
    return <div style={{ color: "black"}}>Loading data please wait !!!</div>
  }
  */const{0:light,1:setLight}=(0,index_js_.useState)(false);const{0:dark,1:setDark}=(0,index_js_.useState)(false);if(!news){return/*#__PURE__*/index_js_default().createElement(Loadings/* default */.Z,{head:/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"Business")});}return/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,{isBloged:isBloged,setDark:setDark,setLight:setLight,light:setLight,lag:lag,off:off,handleLanguageChange:handleLanguageChange,language:language},/*#__PURE__*/index_js_default().createElement(PagesData/* default */.Z,{light:light,setLight:setLight,off:off,setoff:setoff,da:da}),/*#__PURE__*/index_js_default().createElement("div",{className:"container-scrolle "},/*#__PURE__*/index_js_default().createElement("div",{className:"main-pane "},/*#__PURE__*/index_js_default().createElement("div",{className:`flash-news-banner ${light&&"back"}`},/*#__PURE__*/index_js_default().createElement(Market["default"],null),/*#__PURE__*/index_js_default().createElement("div",{className:" d-lg-flex align-items-center justify-content-between"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex align-items-center"},/*#__PURE__*/index_js_default().createElement("div",{className:Containercurrency},/*#__PURE__*/index_js_default().createElement(Currency["default"],null),/*#__PURE__*/index_js_default().createElement(Pagination["default"],null))))))),/*#__PURE__*/index_js_default().createElement("div",{className:`content-wrapper ${light&&"back"}  `},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",{className:"card","data-aos":"fade-up"},/*#__PURE__*/index_js_default().createElement("div",{className:`card-body  ${light&&"backframe"} `},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("h1",{className:"font-weight-600 mb-4"},"BUSINESS"))),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-8"},currentNews&&currentNews.slice(0,10).map((newss,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index,className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-4 grid-margin"},/*#__PURE__*/index_js_default().createElement("div",{onClick:()=>locale(newss.url),className:"rotate-img"},/*#__PURE__*/index_js_default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)}))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-8 grid-margin"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-weight-600 mb-2",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-15",onClick:()=>locale(newss.url)},newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').length>=120?newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').slice(0,110):newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,''))))),currentNews&&currentNews.slice(10,20).map((newss,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index,className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-4 grid-margin"},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/index_js_default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)}))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-8 grid-margin"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-weight-600 mb-2",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}}," ",/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-15",onClick:()=>locale(newss.url)},newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').length>=120?newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').slice(0,110):newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'')))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"mb-4 text-primary font-weight-600"},"Latest news"),currentNews&&currentNews.slice(20,30).map((newss,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index,className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",{className:"border-bottom pb-4 pt-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-8"},/*#__PURE__*/index_js_default().createElement("h5",{className:"font-weight-600 mb-1",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago")),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-4",onClick:()=>locale(newss.url)},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/index_js_default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)})))))))),/*#__PURE__*/index_js_default().createElement("div",{className:"trending"},/*#__PURE__*/index_js_default().createElement("h2",{className:"mb-4 text-primary font-weight-600"},"Trending"),currentNews&&currentNews.slice(30,40).map((newss,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index,className:"mb-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/index_js_default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)})),/*#__PURE__*/index_js_default().createElement("h3",{className:"mt-3 font-weight-600",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "))))))))))),/*#__PURE__*/index_js_default().createElement(Pagination["default"],{totalPages:totalPages,currentPage:currentPage,handlePageChange:handlePageChange}));}const Head=()=>/*#__PURE__*/index_js_default().createElement("title",null,"Business");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-morenews-business-js.js.map