"use strict";
exports.id = 4676;
exports.ids = [4676];
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

/***/ 77512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Technology)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51333);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57076);
/* harmony import */ var _components_PagesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37489);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12868);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88965);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75159);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9016);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67815);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30359);
/* harmony import */ var _components_Loadings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80221);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2711);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91072);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8665);
/* harmony import */ var _components_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12751);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94405);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70982);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59417);
//import requests from "../../requests";
//import axio from '../../axios';
//import axios from 'axios'
//import { initializeApp } from "firebase/app";
const firebaseConfig7={apiKey:"AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",authDomain:"zenaitsworld.firebaseapp.com",projectId:"zenaitsworld",storageBucket:"zenaitsworld.appspot.com",messagingSenderId:"752059821465",appId:"1:752059821465:web:a892347312cbfad858f708",measurementId:"G-GEMHBSGYPY"};const firebaseConfig16196={// Your Firebase configuration here
apiKey:"AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",authDomain:"compo-57c97.firebaseapp.com",databaseURL:"https://compo-57c97-default-rtdb.firebaseio.com",projectId:"compo-57c97",storageBucket:"compo-57c97.appspot.com",messagingSenderId:"475037571261",appId:"1:475037571261:web:9db4f4bdd540a72bbb3fd4"};const firebaseConfig14125={apiKey:"AIzaSyBh8ygMi8nTJ7WVcA9amKSwABs_NzJZQk4",authDomain:"chatszen.firebaseapp.com",databaseURL:"https://chatszen-default-rtdb.firebaseio.com",projectId:"chatszen",storageBucket:"chatszen.appspot.com",messagingSenderId:"83570132385",appId:"1:83570132385:web:b9d0772699726c7bb4f7e0",measurementId:"G-4S4BTTXP48"};function Technology(){const{user,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_15__/* .useAuth */ .a)();firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.initializeApp(firebaseConfig7,'app7');const app7=firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.app('app7');(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{aos__WEBPACK_IMPORTED_MODULE_11___default().init();},[]);const{0:saved,1:setSaved}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.initializeApp(firebaseConfig14125,'app1312');const app1212=firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.app('app1312');const databaseSavedNews=app1212.database();const savedItemsRef=user&&databaseSavedNews.ref(`savedNews/${user.uid}`);const app1919=firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.initializeApp(firebaseConfig16196,'app1819');const database=app1919.database();function saveit(item,urls){const dats=urls;const val=item.title.replace(/[.#$\[\]]/g," ");const isSaved=saved[val]||false;setSaved({...saved,[val]:!isSaved});const sanitizedLink=dats.replace(/[.#$[\]]/g,'_');database.ref(sanitizedLink).on('value',snapshot=>{const snap=snapshot.val();savedItemsRef.child(val).once('value',snapshot=>{if(snapshot.exists()){savedItemsRef.child(val).remove();}else{savedItemsRef.child(val).set(snap);}});});}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!savedItemsRef){return;}const onDataChange=snapshot=>{const savedData=snapshot.val();if(savedData){const titles=savedData;setSaved(titles);}else{setSaved({});}};savedItemsRef.on('value',onDataChange);return()=>{savedItemsRef.off('value',onDataChange);};},[user]);const isBloged=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);/*

  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const vr = "http://localhost:8080/"
  const API_KEY = "94044cd2f55546cc9a5703814c9ca1a6";
  const date = new Date().toISOString().slice(0, 10);
  const dats = `https://newsapi.org/v2/everything?q=Entertainment&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;

// Setup Firebase realtime for data Realtime Database
  
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
      await firebase.database().ref('Entertainment').remove();

      // Fetch the new data
      const articles = await getContent(link);
  
      // Iterate over the articles and set them to the Firebase database
      articles.forEach(article => {
        const key = firebase.database().ref('Entertainment').push().key;
  
        firebase.database().ref('Entertainment').child(key).update({
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
   */ //End of settingup realtime firebase 
const{0:news,1:setNews}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{app7.database().ref('Technology').on('value',snapshot=>{setNews(snapshot.val());});},[]);const{0:itemsPerPage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(40);// number of items to display per page
const{0:currentPage,1:setCurrentPage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);// current page number
const totalPages=news?Math.ceil(Object.keys(news).length/itemsPerPage):0;console.log(`totalpages ${totalPages}`);console.log(`currentPages ${currentPage}`);console.log(`itemsperpage ${itemsPerPage}`);// Method for handling page changes
const handlePageChange=page=>{if(page<=totalPages){setCurrentPage(page);}};// Get the news items for the current page
const currentNews=news&&Object.values(news).slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);// Get the news items for the current page
const{0:da,1:setda}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Ent');const{0:off,1:setoff}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);function locale(ne){setda(ne);/* localStorage.setItem('data', JSON.stringify(ne)) */setoff(true);//localStorage.setItem('data', JSON.stringify(ne))
}const{0:lang,1:setLang}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const{0:language,1:setLanguage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const{0:lag,1:setLag}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:la,1:setLa}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');console.log(`$the object is as ${lag}`);const{0:v,1:setv}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app7.database().ref(`users/${user.uid}`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){setLag(true);console.log("Snapshot value is null or undefined");return;}setLag(false);// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();_components_i18n__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.changeLanguage(val.language);}else{_components_i18n__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.changeLanguage(snapshot.val());}});}},[user]);function handleLanguageChange(event){const newLanguage=event.target.value;setLanguage(newLanguage);_components_i18n__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.changeLanguage(newLanguage);app7.database().ref(`users/${user.uid}`).set({language:newLanguage});// localStorage.setItem('lag', JSON.stringify(newLanguage));
}const{0:light,1:setLight}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:dark,1:setDark}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);if(!news){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Loadings__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{head:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_12__/* .Trans */ .cC,null,"Technology")});}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{isBloged:isBloged,setDark:setDark,setLight:setLight,light:light,lag:lag,off:off,handleLanguageChange:handleLanguageChange,language:language},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PagesData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{light:light,setLight:setLight,off:off,setoff:setoff,da:da}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`content-wrapper ${light&&"back"}  `},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card","data-aos":"fade-up"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`card-body  ${light&&"backframe"} `},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"font-weight-600 mb-4"},"TECHNOLOGY"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-lg-8"},currentNews&&currentNews.slice(0,10).map((newss,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:index,className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-4 grid-margin"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-8 grid-margin"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"font-weight-600 mb-2",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__/* .faDownload */ .q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"fs-15",onClick:()=>locale(newss.url)},newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').length>=120?newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').slice(0,110):newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,''))))),currentNews&&currentNews.slice(10,20).map((newss,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:index,className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-4 grid-margin"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-8 grid-margin"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"font-weight-600 mb-2",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__/* .faDownload */ .q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"fs-15",onClick:()=>locale(newss.url)},newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').length>=120?newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'').slice(0,110):newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g,'')))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-lg-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"mb-4 text-primary font-weight-600"},"Latest news"),currentNews&&currentNews.length>=20&&currentNews.slice(20,30).map((newss,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:index,className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"border-bottom pb-4 pt-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5",{className:"font-weight-600 mb-1",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__/* .faDownload */ .q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," ")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-sm-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)})))))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"trending"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"mb-4 text-primary font-weight-600"},"Trending"),currentNews&&currentNews.slice(30,40).map((newss,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:index,className:"mb-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"rotate-img",onClick:()=>locale(newss.url)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:newss.urlToImage,alt:"banner",className:"img-fluid",onClick:()=>locale(newss.url)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"mt-3 font-weight-600",onClick:()=>locale(newss.url)},newss.title.length>30?newss.title.slice(0,33):newss.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"fs-13 text-muted mb-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:()=>saveit(newss,newss.url),style:{color:saved[newss.title]?"tomato":"yellowgreen",border:"none",width:"fit-content",height:"fit-content"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__/* .FontAwesomeIcon */ .G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__/* .faDownload */ .q7m,className:"savedit",style:{color:saved[newss.title]?"tomato":"yellowgreen"}})," ",saved[newss.title]?'saved':"save"," "))))))))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"],{totalPages:totalPages,currentPage:currentPage,handlePageChange:handlePageChange}));}const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"Technology");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-morenews-technology-js.js.map