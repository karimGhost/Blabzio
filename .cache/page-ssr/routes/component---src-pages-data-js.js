"use strict";
exports.id = 3427;
exports.ids = [3427];
exports.modules = {

/***/ 31593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9016);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67815);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30359);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79286);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88965);
function MyComponent(props){const firebaseConfig3={// Your Firebase configuration here
apiKey:"AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",authDomain:"compo-57c97.firebaseapp.com",databaseURL:"https://compo-57c97-default-rtdb.firebaseio.com",projectId:"compo-57c97",storageBucket:"compo-57c97.appspot.com",messagingSenderId:"475037571261",appId:"1:475037571261:web:9db4f4bdd540a72bbb3fd4"};firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig3,'app4');const app1=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app4');const database=app1.database();const{0:data,1:setData}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{dats}=props;/*
  const val1 = 'http://localhost:8080/'

const val2 = 'https://cors-anywhere.herokuapp.com/'
  async function getContent(url) {
    // Send a GET request to the website
   
    try {
      // Use the local CORS proxy to make the request
      const corsProxyUrl =  val1;
      const response = await axios.get(corsProxyUrl + url);

      // Load the HTML content into 
      const $ = .load(response.data);

      // Select the elements you want to extract data from
      const title = $('title').text();
      const paragraphs = $('p').map((i, element) => $(element).text()).get();
      const images = $('img').map((i, element) => $(element).attr('src')).get();
      // Return the data you extracted
      return {
        title,
        paragraphs,
        images
      };
    } catch (error) {
      console.error(error);
    }
  }

let ti = dats;
console.log(`this is the likkkk${ti}`)

  useEffect(() => {
    const link = dats;
    if (link) {
      const sanitizedLink = link.replace(/[.#\$\[\]]/g, '_');
      getContent(link).then(data => {
       
        const value = sanitizedLink || sanitizedLink.slice(0, 20).replace(':', '') ;
if(value && data !== undefined  ){
        // Save the data to the Realtime Database, replacing any previous data with the same name
        database.ref(value).set(data);      
}
      });
    }
  }, [dats]);

*/(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const link=dats;if(link){const sanitizedLink=link.replace(/[.#\$\[\]]/g,'_');app1.database().ref(sanitizedLink).on('value',snapshot=>{setData(snapshot.val());});}},[]);if(!data){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{fontSize:"3rem",color:"blue"}},"...Loading",dats);}const regex=/(https?:\/\/\S+)/;// regular expression to match a lik  console.log(`data ${data.images}`)
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{margin:"auto"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,data.title),data.images?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"pixyB",src:data.images[1]?data.images[1]:data.images[1]?data.images[1]:data.images[2]?data.images[2]:data.images[3]?data.images[3]:""}):null,data.images?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"pixyB",src:data.images?data.images:""}):null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"pixyP"}," ",data.paragraph),data.paragraphs?data.paragraphs.map((paragraph,index)=>{const match=paragraph.match(regex);// get the first link i the paragraph
if(match){const imageUrl=match[1];// get the link from the match
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"pixyBig",src:imageUrl,key:index});}else{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"pixyP",key:index},paragraph);}}):"");}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComponent);

/***/ }),

/***/ 79286:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10389);



var name = "firebase";
var version = "9.22.1";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');
//# sourceMappingURL=index.mjs.map


/***/ })

};
;
//# sourceMappingURL=component---src-pages-data-js.js.map