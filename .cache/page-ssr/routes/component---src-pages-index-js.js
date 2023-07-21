"use strict";
exports.id = 9678;
exports.ids = [9678,1462,8942];
exports.modules = {

/***/ 66905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cloud)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*

import React, { useEffect, useState } from 'react';
import { startTransition } from 'react-dom';
async function getContent(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title').textContent;
    const paragraphs = Array.from(doc.querySelectorAll('p')).map((p) => p.textContent);
    return {
      title,
      paragraphs,
    };
  } catch (error) {
    console.error(error);
  }
}

function Cloud(props) {
  const [data, setData] = useState(null);
  const {url} = props;

  useEffect(() => {
    getContent(url).then((data) => {
      setData(data);
    });
  }, [url]);

 
  if (!data) {
    return <div>Loading...</div>;
  }

 
  return (
    <div>
      <h1>{data.title}</h1>
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Cloud;

*/function Cloud(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null);}

/***/ }),

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

/***/ }),

/***/ 96576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ IndexPage)
});

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(57076);
// EXTERNAL MODULE: ./src/components/Layout.js + 11 modules
var Layout = __webpack_require__(51333);
// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(36232);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(19755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./src/components/Loadings.js
var Loadings = __webpack_require__(80221);
;// CONCATENATED MODULE: ./src/images/sunrise.jpg
/* harmony default export */ const sunrise = ("/static/sunrise-f16176dcad3eead18652c12e0800fcec.jpg");
;// CONCATENATED MODULE: ./src/images/sunset.png
/* harmony default export */ const sunset = ("/static/sunset-076363d952cca3f0d56b90cdc56055b0.png");
// EXTERNAL MODULE: ./src/pages/Cloud.js
var Cloud = __webpack_require__(66905);
// EXTERNAL MODULE: ./src/components/PagesData.js
var PagesData = __webpack_require__(37489);
// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.mjs
var dist = __webpack_require__(75159);
// EXTERNAL MODULE: ./node_modules/firebase/compat/database/dist/index.mjs + 1 modules
var database_dist = __webpack_require__(9016);
// EXTERNAL MODULE: ./node_modules/firebase/compat/auth/dist/index.mjs + 3 modules
var auth_dist = __webpack_require__(67815);
// EXTERNAL MODULE: ./node_modules/firebase/compat/firestore/dist/index.mjs + 3 modules
var firestore_dist = __webpack_require__(30359);
// EXTERNAL MODULE: ./src/pages/Pagination.js
var Pagination = __webpack_require__(12868);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var app_dist = __webpack_require__(79286);
// EXTERNAL MODULE: ./node_modules/firebase/database/dist/index.mjs
var firebase_database_dist = __webpack_require__(88965);
// EXTERNAL MODULE: ./src/pages/Language.js
var Language = __webpack_require__(8665);
// EXTERNAL MODULE: ./src/Accounts/useAuth.js
var useAuth = __webpack_require__(94405);
// EXTERNAL MODULE: ./node_modules/pure-react-carousel/dist/index.es.js
var index_es = __webpack_require__(28777);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var react_fontawesome_index_es = __webpack_require__(70982);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(59417);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(2711);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ./src/images/no-image.jpg
var no_image = __webpack_require__(42073);
// EXTERNAL MODULE: ./src/pages/Stocks.js
var Stocks = __webpack_require__(33578);
// EXTERNAL MODULE: ./node_modules/react-scroll-motion/dist/index.js
var react_scroll_motion_dist = __webpack_require__(89554);
;// CONCATENATED MODULE: ./src/pages/index.js
/* provided dependency */ var fetch = __webpack_require__(31515);
//import { useTranslation , Trans} from 'react-i18next Data';
//import i18n from "../components/i18n";
const firebaseConfig0={apiKey:"AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",authDomain:"zenaitsworld.firebaseapp.com",projectId:"zenaitsworld",storageBucket:"zenaitsworld.appspot.com",messagingSenderId:"752059821465",appId:"1:752059821465:web:a892347312cbfad858f708",measurementId:"G-GEMHBSGYPY"};const firebaseConfig1919={// Your Firebase configuration here
apiKey:"AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",authDomain:"compo-57c97.firebaseapp.com",databaseURL:"https://compo-57c97-default-rtdb.firebaseio.com",projectId:"compo-57c97",storageBucket:"compo-57c97.appspot.com",messagingSenderId:"475037571261",appId:"1:475037571261:web:9db4f4bdd540a72bbb3fd4"};const firebaseConfig1212={apiKey:"AIzaSyBh8ygMi8nTJ7WVcA9amKSwABs_NzJZQk4",authDomain:"chatszen.firebaseapp.com",databaseURL:"https://chatszen-default-rtdb.firebaseio.com",projectId:"chatszen",storageBucket:"chatszen.appspot.com",messagingSenderId:"83570132385",appId:"1:83570132385:web:b9d0772699726c7bb4f7e0",measurementId:"G-4S4BTTXP48"};function IndexPage(){const{user,loading,signOut}=(0,useAuth/* useAuth */.a)();const isBloged=(0,index_js_.useRef)(true);////data base update PAth Started
dist/* default */.Z.initializeApp(firebaseConfig0,'app0');const app0=dist/* default */.Z.app('app0');dist/* default */.Z.initializeApp(firebaseConfig1212,'app1212');const app1212=dist/* default */.Z.app('app1212');(0,index_js_.useEffect)(()=>{aos_default().init();},[]);const{0:isPlaying,1:setIsPlaying}=(0,index_js_.useState)(true);const handleNext=()=>{setIsPlaying(false);setTimeout(()=>{setIsPlaying(true);},5000);};/*

  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const vr = "http://localhost:8080/"
  const API_KEY = "94044cd2f55546cc9a5703814c9ca1a6";
  const date = new Date().toISOString().slice(0, 10);
  const dats = `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;

  // Use a CORS proxy to bypass the CORS restrictions

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
    await firebase.database().ref('articles').remove();

    // Fetch the new data
    const articles = await getContent(link);

      // Iterate over the articles and set them to the Firebase database
        articles.forEach(article => {
      const key = firebase.database().ref('articles').push().key;

      firebase.database().ref('articles').child(key).update({
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

  */ //data base update PAth Finised
const app1919=dist/* default */.Z.initializeApp(firebaseConfig1919,'app1919');const database=app1919.database();const{0:data,1:setData}=(0,index_js_.useState)(null);const databaseSavedNews=app1212.database();const savedItemsRef=user&&databaseSavedNews.ref(`savedNews/${user.uid}`);const{0:saved,1:setSaved}=(0,index_js_.useState)([]);function saveIt(item,urls){const dats=urls;const val=item.title.replace(/[.#$\[\]]/g," ");const isSaved=saved[val]||false;setSaved({...saved,[val]:!isSaved});const sanitizedLink=dats.replace(/[.#$[\]]/g,'_');database.ref(sanitizedLink).on('value',snapshot=>{const snap=snapshot.val();savedItemsRef.child(val).once('value',snapshot=>{if(snapshot.exists()){savedItemsRef.child(val).remove();}else{savedItemsRef.child(val).set(snap);}});});}(0,index_js_.useEffect)(()=>{if(!savedItemsRef){return;}const onDataChange=snapshot=>{const savedData=snapshot.val();if(savedData){const titles=savedData;setSaved(titles);}else{setSaved({});}};savedItemsRef.on('value',onDataChange);return()=>{savedItemsRef.off('value',onDataChange);};},[user]);const{0:lives,1:setLives}=(0,index_js_.useState)([]);const apiToken='1ef10a75c8cd42e893cabb664c484a68';const apiUrl='https://api.football-data.org/v4/matches';function vaar(){fetch(apiUrl,{headers:{'X-Auth-Token':apiToken}}).then(response=>response.json()).then(data=>{setLives(data);console.log("football datr",data);}).catch(error=>{console.error('Error fetching live matches:',error);});}const{0:location,1:setLocation}=(0,index_js_.useState)('');const ur=`http://api.openweathermap.org/data/2.5/weather/?q=${location}&units=imperial&limit=1&appid=536e0c73b73421c0bd19b557f230e2e2`;const{0:isOpen,1:setIsOpen}=(0,index_js_.useState)(true);const currentHour=new Date().getHours();const styled={background:currentHour<=16?`url(${sunrise})`:`url(${sunset})`,backgroundRepeat:'norepeat',backgroundPosition:'center',backgroundSize:'cover',boxShadow:'0px 0px 10px 5px rgba(0,0,0,0.1)'};const{0:trendin,1:setTrendings}=(0,index_js_.useState)(null);const{0:trendit,1:setTrendingst}=(0,index_js_.useState)(null);const{0:trendib,1:setTrendingsb}=(0,index_js_.useState)(null);const{0:trendiT,1:setTrendingsT}=(0,index_js_.useState)(null);const{0:loaded,1:setLoaded}=(0,index_js_.useState)(false);const{0:dark,1:setDark}=(0,index_js_.useState)(false);const{0:Loads,1:setLoads}=(0,index_js_.useState)(true);(0,index_js_.useEffect)(()=>{const fetchData=async()=>{try{const snapshot=await app0.database().ref('Entertainment').once('value');const data=snapshot.val();const snapshotT=await app0.database().ref('articles').once('value');const snapshotb=await app0.database().ref('Business').once('value');const snapshotech=await app0.database().ref('Technology').once('value');const dataT=snapshotT.val();const datab=snapshotb.val();const datatech=snapshotech.val();if(data){// Convert the object to an array and store it in the state
const dataArray=Object.values(data);setTrendings(dataArray);}if(dataT&&datab&&datatech){// Convert the object to an array and store it in the state
const dataArrayT=Object.values(dataT);const dataArrayb=Object.values(datab);const dataArraytech=Object.values(datatech);setTrendingsT(dataArrayT);setTrendingsb(dataArrayb);setTrendingst(dataArraytech);}}catch(error){console.error(error);}};fetchData();},[]);const trendings=trendin&&trendin;const Technology=trendiT&&trendiT;const business=trendib&&trendib;const trending=trendit&&trendit;const{0:itemsPerPage}=(0,index_js_.useState)(4);// number of items to display per page
const{0:currentPage,1:setCurrentPage}=(0,index_js_.useState)(1);// current page number
const totalPages=trendings?Math.ceil(Object.keys(trendings).length/itemsPerPage):0;console.log(`totalpages ${totalPages}`);console.log(`currentPages ${currentPage}`);console.log(`itemsperpage ${itemsPerPage}`);// Method for handling page changes
const handlePageChange=page=>{if(page<=totalPages){setCurrentPage(page);}};// Get the news items for the current page
const currentNews=trendings&&Object.values(trendings).slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);const currentNewT=trending&&Object.values(trending).slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);const currentNewB=business&&Object.values(business).slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);const currentNewt=Technology&&Object.values(Technology).slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);const{0:local,1:setlocal}=(0,index_js_.useState)(false);const{0:da,1:setda}=(0,index_js_.useState)(null);const{0:off,1:setoff}=(0,index_js_.useState)(false);const{0:lang,1:setLang}=(0,index_js_.useState)("");const{0:language,1:setLanguage}=(0,index_js_.useState)("");const{0:lag,1:setLag}=(0,index_js_.useState)('');const{0:la,1:setLa}=(0,index_js_.useState)('');console.log(`$the object is as ${lag}`);const{0:v,1:setv}=(0,index_js_.useState)();//const compo = <MyComponent  dats ={da} />
//const regex = '/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?$/';
/*
  
  if (!trendings) {
    return <div style={{color: "black", fontSize: "3rem", justifySelf:"center", textAlign: "center", fontWeight: "bold"}}>Getting there ... Please wait!</div>;
      }
    
  */const{0:datas,1:setdata}=(0,index_js_.useState)({});const searchLocation=event=>{if(event.key==='Enter'){axios/* default */.Z.get(ur).then(response=>{setdata(response.data);console.log(response.data);});setLocation('');}};console.log(datas);const isBrowser=typeof window!=="undefined";if(isBrowser){window.setInterval(rollback,10000);function rollback(){let first=jquery_default()("#caro").find("div:first");let width=first.width();first.animate({marginLeft:-width},6000,function(){let last=jquery_default()("#caro").find("div:last");last.after(first);first.css({marginLeft:0});});}}const{0:light,1:setLight}=(0,index_js_.useState)(false);/*
if(!news){
  return(
    <div>...Getting ready,Please Be Patient</div>
  )
  }
*/if(!trendin){return/*#__PURE__*/index_js_default().createElement(Loadings/* default */.Z,{head:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,"News")});}if(!Loads){return/*#__PURE__*/index_js_default().createElement(Loadings/* default */.Z,{head:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null)});}const handleLanguageChange=()=>{};function locale(ne){setda(ne);/* localStorage.setItem('data', JSON.stringify(ne)) */setoff(true);handleNext();//localStorage.setItem('data', JSON.stringify(ne))
setlocal(pre=>!pre);}return/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,{isBloged:isBloged,setDark:setDark,setLoads:setLoads,light:light,setLight:setLight,className:"container-scroller",off:off,lag:lag,trendings:trendings,handleLanguageChange:handleLanguageChange,language:language},/*#__PURE__*/index_js_default().createElement(PagesData/* default */.Z,{light:light,setLight:setLight,off:off,setoff:setoff,da:da}),/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:"px"},className:"main-panel"},/*#__PURE__*/index_js_default().createElement("div",{className:""},/*#__PURE__*/index_js_default().createElement(Cloud["default"],null),/*#__PURE__*/index_js_default().createElement("div",{className:`content-wrapper ${light&&"back"}  `},/*#__PURE__*/index_js_default().createElement("div",{className:" container"},/*#__PURE__*/index_js_default().createElement("div",{style:{borderRadius:"10px"}},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{style:{borderRadius:"10px"},className:"col-xl-8 stretch-card grid-margin "},/*#__PURE__*/index_js_default().createElement("div",{className:"card",style:{borderRadius:"10px"}},/*#__PURE__*/index_js_default().createElement("div",{style:{borderRadius:"10px"},className:`banner-content col-xl-12 card-body cont ${light&&"backframe"}  position-relative `},/*#__PURE__*/index_js_default().createElement(index_es/* CarouselProvider */.sj,{className:`heigh ${light&&"backframe"}`,style:{backgroundColor:light?"rgb(20,21,21)":'#fff',padding:'1px',margin:'15px',boxShadow:'0px 0px 10px 5px rgba(0,0,0,0.1)',overflowY:"hidden",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",textAlign:"bottom"},naturalSlideWidth:1,naturalSlideHeight:1,totalSlides:Object.keys(trending?trending:'0').length,isPlaying:isPlaying,autoPlay:true,interval:5000},/*#__PURE__*/index_js_default().createElement("div",{style:{background:"black"}},/*#__PURE__*/index_js_default().createElement(index_es/* Slider */.iR,null,Object.values(trending?trending:"").map((news,index)=>/*#__PURE__*/index_js_default().createElement(index_es/* Slide */.Mi,{onClick:()=>locale(news.url),key:index,style:{backgroundImage:`url(${news.urlToImage})`,backgroundSize:'contain',objectFit:"cover",backgroundRepeat:'no-repeat',height:"500px",position:"relative"},className:`img-fluid heighimg vh-100 col-xl-8 `,index:index},/*#__PURE__*/index_js_default().createElement("figcaption",{className:"bottoms",style:{position:"absolute",left:"10px",right:"10px",bottom:"50%",zIndex:"10"}},/*#__PURE__*/index_js_default().createElement("div",{className:"badge badge-danger    fs-12 font-weight-bold mb-3"},"Trending news"),/*#__PURE__*/index_js_default().createElement("h1",{style:{textAlign:"center"},className:"mt-20 color-dark"},news.title?news.title.length>20?news.title.slice(0,6)+'...':news.title:news.title),/*#__PURE__*/index_js_default().createElement("h1",{style:{fontSize:"1.2rem"},className:"mb-2 s-13 color-dark"},news.content?news.content.length>100?news.content.slice(0,100)+'...':news.content:news.content,"... Read More"),/*#__PURE__*/index_js_default().createElement("div",{className:"fs-12"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2 mb-0 color-dark"},"Photo "),news.publishedAt>13?news.publishedAt.slice(0,10):news.publishedAt))))),/*#__PURE__*/index_js_default().createElement(index_es/* ButtonBack */.jp,{onClick:handleNext,className:"back-button"}," ",/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faChevronLeft */.A35})),/*#__PURE__*/index_js_default().createElement(index_es/* ButtonNext */.P1,{onClick:handleNext,lockOnWindowScroll:true,className:"next-button"},"  ",/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faChevronRight */._tD})))),/*#__PURE__*/index_js_default().createElement("div",{style:{padingTop:"20%",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",color:"blue",left:"48px",right:"48px",bottom:"0",background:"black",position:"absolute",zIndex:"5",overflow:"scroll"},className:"stock"},/*#__PURE__*/index_js_default().createElement(Stocks["default"],null))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-4 stretch-card grid-margin"},/*#__PURE__*/index_js_default().createElement("div",{className:`card ${light?"backframe":"bg-dark"} text-white`},/*#__PURE__*/index_js_default().createElement("div",{className:"card-body"},/*#__PURE__*/index_js_default().createElement("h2",null,"Latest news"),currentNewT&&currentNewT.map((newss,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index,className:`d-flex hovered ${light?"bottom-white":"border-bottom-blue"}   pb-4 pt-4 align-items-center justify-content-between`},/*#__PURE__*/index_js_default().createElement("div",{className:"pr-3 boxin"},/*#__PURE__*/index_js_default().createElement("h5",{onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,30)+'...':newss.title),/*#__PURE__*/index_js_default().createElement("div",{className:"fs-12"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo ")," ",newss.publishedAt),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveIt(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," ")),/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/index_js_default().createElement("img",{id:"colmg",className:"img-fluid img-lg g",src:newss.urlToImage?newss.urlToImage:no_image/* default */.Z,alt:"thumb",onClick:()=>locale(newss.url)})))))))),/*#__PURE__*/index_js_default().createElement("div",{className:`content-wrapper ${light&&"back"}`},/*#__PURE__*/index_js_default().createElement("div",{className:"row  rounded","data-aos":"fade-up"},/*#__PURE__*/index_js_default().createElement("div",{className:" col-lg-3 stretch-card grid-margin"},/*#__PURE__*/index_js_default().createElement("div",{className:"card"},/*#__PURE__*/index_js_default().createElement("div",{className:`card-body ${light&&"backframe"}`},/*#__PURE__*/index_js_default().createElement("h2",null,"Category"),/*#__PURE__*/index_js_default().createElement("ul",{className:"vertical-menu"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/Business"},"Business")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Entertainent")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Sports")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Technology")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Politics")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Trending")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Magazine")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Art")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/news/"},"Travel")))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-9 stretch-card grid-margin"},/*#__PURE__*/index_js_default().createElement("div",{className:"card"},/*#__PURE__*/index_js_default().createElement("div",{className:`card-body ${light&&"backframe"}`},currentNewt&&currentNewt.map((newss,key)=>/*#__PURE__*/index_js_default().createElement("div",{key:key,className:"row hovered"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-4 grid-margin"},/*#__PURE__*/index_js_default().createElement("div",{className:"position-relative"},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/index_js_default().createElement("img",{src:newss.urlToImage?newss.urlToImage:no_image/* default */.Z,alt:"thumb",className:"img-fluid",onClick:()=>locale(newss.url)})),/*#__PURE__*/index_js_default().createElement("div",{className:"badge-positioned"},/*#__PURE__*/index_js_default().createElement("span",{className:` badge badge-dark ${light&&"darks"} mb font-weight-bold`}," Zena updates")))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-8  grid-margin"},/*#__PURE__*/index_js_default().createElement("h2",{className:"mb-2 font-weight-600",onClick:()=>locale(newss.url)},newss.title),/*#__PURE__*/index_js_default().createElement("div",{className:"fs-13 mb-2"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),newss.publishedAt),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveIt(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-0",onClick:()=>locale(newss.url)},newss.content,"...Read More"))))))))),/*#__PURE__*/index_js_default().createElement("div",{className:"row","data-aos":"fade-up"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",{className:"card"},/*#__PURE__*/index_js_default().createElement("div",{className:`card-body ${light&&"backframe"}`},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-title"},"Spot light News"),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-6 col-lg-8 col-sm-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(currentNews&&currentNews[1].url)},/*#__PURE__*/index_js_default().createElement("img",{src:currentNews&&currentNews[1].urlToImage?currentNews[1].urlToImage:no_image/* default */.Z,alt:"thumb",className:"img-fluid",onClick:()=>locale(currentNews&&currentNews[1].url)})),/*#__PURE__*/index_js_default().createElement("h2",{className:"mt-3 text-primary mb-2",onClick:()=>locale(currentNews&&currentNews[1].url)},currentNews&&currentNews[1].title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 mb-1 text-muted",onClick:()=>locale(currentNews&&currentNews[1].url)},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>currentNews&&saveIt(currentNews[1],currentNews[1].url),style:{color:saved[currentNews[1].title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[currentNews[1].title]?"tomato":"yellowgreen"}})," ",saved[currentNews[1].title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("p",{className:"my-3 fs-15",onClick:()=>locale(currentNews&&currentNews[1].url)},currentNews&&currentNews[1].content),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"font-weight-600 fs-16 text-dark"},"Read more")),/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-6 col-lg-4 col-sm-6"},currentNewB&&currentNewB.map((news,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index,className:"border-bottom pb-3 mb-3"},/*#__PURE__*/index_js_default().createElement("h3",{className:"font-weight-600 mb-0",onClick:()=>locale(news.url)},news.title?news.title.length>10?news.title.slice(0,9)+'...':news.title:news.title,"."),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveIt(news,news.url),style:{color:saved[news.title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[news.title]?"tomato":"yellowgreen"}})," ",saved[news.title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-0",onClick:()=>locale(news.url)},news.content?news.content.length>20?news.content.slice(0,20)+'...':news.content:news.content,".Read More")))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-title"},"Sport light Celebrity"),/*#__PURE__*/index_js_default().createElement("div",{className:"border-bottom pb-3"},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(currentNewB&&currentNewB[1].url)},/*#__PURE__*/index_js_default().createElement("img",{src:currentNewB&&currentNewB[1].urlToImage?currentNewB[1]:no_image/* default */.Z,onClick:()=>locale(currentNewB&&currentNewB[1].url),alt:"thumb",className:"img-fluid"})),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-16 font-weight-600 mb-0 mt-3",onClick:()=>locale(currentNewB&&currentNewB[1].url)},currentNewB&&currentNewB[1].title>=5?currentNewB.title[1].slice(0,10)+'...':currentNewB&&currentNewB[1].title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>currentNewB&&saveIt(currentNewB[1],currentNewB[1].url),style:{color:saved[currentNewB&&currentNewB[1].title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[currentNewB&&currentNewB[1].title]?"tomato":"yellowgreen"}})," ",saved[currentNewB&&currentNewB[1].title]?'saved':"save"," ")),/*#__PURE__*/index_js_default().createElement("div",{className:"pt-3 pb-3",onClick:()=>locale(currentNews&&currentNews[3].url)},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img"},/*#__PURE__*/index_js_default().createElement("img",{src:currentNews&&currentNews[3].urlToImage?currentNews[3].urlToImage:no_image/* default */.Z,alt:"thumb",className:"img-fluid",onClick:()=>locale(currentNews&&currentNews[3].url)})),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-16 font-weight-600 mb-0 mt-3"},currentNews&&currentNews[3].title>=5?currentNews[3].title.slice(0,10)+'...':currentNews&&currentNews[3].title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>currentNews&&saveIt(currentNews[3],currentNews[3].url),style:{color:saved[currentNews[3].title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[currentNews[3].title]?"tomato":"yellowgreen"}})," ",saved[currentNews[3].title]?'saved':"save"," "))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-title"},"Celebrity news"),currentNewT&&currentNewT.map((newss,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index,className:"row hovered"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",{className:"border-bottom pt-3"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-5 pr-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/index_js_default().createElement("img",{src:newss.urlToImage?newss.urlToImage:no_image/* default */.Z,alt:"thumb",className:"img-fluid w-100",onClick:()=>locale(newss.url)}))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-7 pl-2"},/*#__PURE__*/index_js_default().createElement("p",{className:"fs-16 font-weight-600 mb-0",onClick:()=>locale(newss.url)},newss.title?newss.title.length>10?newss.title.slice(0,9)+'...':newss.title:newss.title,"."),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>saveIt(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(react_fontawesome_index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-0 fs-13",onClick:()=>locale(newss.url)},newss.content?newss.content.length>20?newss.content.slice(0,20)+'...':newss.content:newss.content,".Read More")))))))))))))))))))));};const Head=()=>/*#__PURE__*/index_js_default().createElement("title",null,/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,"Home Page"));{/*
                           <div className="row" data-aos="fade-up">

              <div className="col-sm-12 grid-margin">


 <div className="card">
 <div className="card-body">
                    <div className="row">
                      <div className="col-lg-8">

                        <div className="card-title">
                          Vide
                        </div>
                        <div className="row">

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_7.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>

                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Lifestyle</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_8.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >National News</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="row">
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_9.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Lifestyle</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_10.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >National News</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
................................ col vidd 2 ................................
                      <div className="col-lg-4">
                        <div
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="card-title">
                            Latest Video
                          </div>
                          <p className="mb-3">See all</p>
                        </div>

                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_11.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Apple Introduces Apple Watch
                          </h3>
                        </div>

                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_12.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            SEO Strategy & Google Search
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_13.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Cycling benefit & disadvantag
                          </h3>
                        </div>


                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_14.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600">
                            The Major Health Benefits of
                          </h3>
                        </div>



                        <div
                          className="d-flex justify-content-between align-items-center pt-3"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_15.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Powerful Moments of Peace
                          </h3>
                        </div>
  </div>  
    </div>
              </div>
            </div>
 */}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map