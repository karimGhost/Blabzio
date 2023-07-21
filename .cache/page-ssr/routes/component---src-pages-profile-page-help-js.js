"use strict";
exports.id = 4831;
exports.ids = [4831];
exports.modules = {

/***/ 21204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94405);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83869);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79286);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8665);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57076);
/* harmony import */ var _Navbared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7043);
//import { useTranslation , Trans} from 'react-i18next';
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function Profile(props){firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app014');/*const [actives, setactive] = useState(false); */ /*
 const actives = props.actives;
 const  setactive = props.setactive;
*/const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app014');const{user,setUser,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();const auth=app4.auth();const database=app4.database();const{0:language,1:setLanguage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:favorites,1:setFavorites}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const{0:profileImg,1:setProfileImg}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);const{0:Darks,1:setDarks}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{app4.auth().onAuthStateChanged(currentUser=>{if(currentUser){setUser(currentUser);database.ref(`users/${currentUser.uid}`).on('value',snap=>{if(snap.val()){setProfileImg(snap.val().profileImg);setLanguage(snap.val().language);setFavorites(snap.val().favorites);}});}});},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app4.database().ref(`profiles/${user.uid}`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){console.log("Snapshot value is null or undefined");return;}// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();setProfileImg(val.profileImg);}else{setProfileImg(snapshot.val());}});}},[user]);console.log(`ìtsb ${profileImg}`);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let vf=document.getElementById('#va');user&&vf.addEventListener('mouseover',()=>{alert('h');document.querySelector('.profileimg').classNameNameList.add('propo');});},[]);const handleLogout=async()=>{try{signOut();setUser(null);sessionStorage.clear();}catch(error){console.error(error);}};const handleProfileImgChange=e=>{const file=e.target.files[0];const reader=new FileReader();reader.onloadend=()=>{setProfileImg(reader.result);app4.database().ref(`profile/${user.uid}`).set({profileImg:reader.result});};reader.readAsDataURL(file);};/*

  useEffect(() => {
    if (!user || !actives) return;
    const v8 = document.querySelector(".v8");
    const vh = document.querySelector('#dp');
    vh.addEventListener('mouseover', () => {
    
      v8.classNameNameList.add("vjj");
    });

  
      vh.addEventListener('mouseout', () => {
        v8.classNameNameList.remove("vjj");
      })
    if(actives){

    }

  }, [actives]);
  /*
  const bu = props.bu;
  const setBu =  props.setBu;
*/function active(){props.setactive(true);props.setBu(false);}function setActive(){props.setactive(false);props.setBu(true);}/* margin-top:20px;
background-color:#f2f6fc;
color:#69707a;*/const actives=props.actives;const setBu=props.setBu;const bu=props.bu;function isActive({isCurrent}){return isCurrent?{className:'active'}:null;}/*     {user && !actives && <Profile  actives={actives} setactive={setactive} bu={props.bu} setBu={props.setBu} setIsOpen={props.setIsOpen} language={props.language} handleLanguageChange={props.handleLanguageChange} />}
                               {user && !actives && <Profile  actives={actives} setactive={setactive} bu={props.bu} setBu={props.setBu} setIsOpen={props.setIsOpen} language={props.language} handleLanguageChange={props.handleLanguageChange} />}
   */return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,!user&&!actives&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:profileImg,className:"round dr mt-2",style:{borderRadius:"50%"},height:"50",alt:"profile",loading:"lazy"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{height:"100%",overflowY:"scroll"},className:`{${Darks&&"darken"} 'Bgg' }`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"container-xl px-4 mt-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbared__WEBPACK_IMPORTED_MODULE_6__["default"],{setDarks:setDarks}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-xl-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card mb-4 mb-xl-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-header"},"Profile Picture"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-body text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"img-account-profile rounded-circle mb-2",src:profileImg,alt:""}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"small font-italic text-muted mb-4"},"JPG or PNG no larger than 5 MB"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-primary",type:"button"},"Upload new image")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-xl-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card mb-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-header"},"Account Details"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-body"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputUsername"},"Username (how your name will appear to other users on the site)"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputUsername",type:"text",placeholder:"Enter your username",value:"username"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row gx-3 mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputFirstName"},"First name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputFirstName",type:"text",placeholder:"Enter your first name",value:"Valerie"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputLastName"},"Last name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputLastName",type:"text",placeholder:"Enter your last name",value:"Luna"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row gx-3 mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputOrgName"},"Organization name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputOrgName",type:"text",placeholder:"Enter your organization name",value:"Start Bootstrap"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputLocation"},"Location"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputLocation",type:"text",placeholder:"Enter your location",value:"San Francisco, CA"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputEmailAddress"},"Email address"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputEmailAddress",type:"email",placeholder:"Enter your email address",value:"name@example.com"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row gx-3 mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputPhone"},"Phone number"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputPhone",type:"tel",placeholder:"Enter your phone number",value:"555-123-4567"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"small mb-1",for:"inputBirthday"},"Birthday"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:"form-control",id:"inputBirthday",type:"text",name:"birthday",placeholder:"Enter your birthday",value:"06/10/1988"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-primary",type:"button"},"Save changes")))))))));}const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"Profile");{/*
{/*{/*


<div  style={{zIndex: "19"}} classNameName="container  bg-white mt-5 mb-5">
    <div classNameName="row">
        <div classNameName="col-md-3 border-right">
            <div classNameName="d-flex flex-column align-items-center text-center p-3 py-5">{user && <div id={pro.container} classNameNameName="container" >
 <div> <img  src={profileImg}  alt={user.displayName}  classNameNameName="profileimg" /> </div> 
  <p  classNameNameName='v8'>+</p>
  <input   classNameNameName='v'id="dp"  type="file"  onChange={handleProfileImgChange} />  
 alt={user.displayName}

</div>}<span classNameName="font-weight-bold">                <h1 style={{fontWeight: "bold" ,margin: '0 auto', textAlign: "center" }} classNameNameName='PP'>{ user &&  user.email.split("@")[0].replace(/[0-9]/g, "").length > 8 ? user && user.email.slice(0, 8).charAt(0).toUpperCase().concat(user && user.email.slice(1, 10)) : user && user.email.split("@")[0].replace(/[0-9]/g, "").charAt(0).toUpperCase().concat(user && user.email.split("@")[0].replace(/[0-9]/g, ""))  } </h1>
</span><span classNameName="text-black-50">{user && user.email}</span><span> </span></div>
        </div>
        <div classNameName="col-md-5 border-right">
            <div classNameName="p-3 py-5">
                <div classNameName="d-flex justify-content-between align-items-center mb-3">
                    <h4 classNameName="text-right">Profile Settings</h4>
                </div>

                <div classNameName="row mt-2">
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='ame' classNameName="labels">Name</label> <input type="text" id="ame" classNameName="form-control" placeholder="first name" value="" /></div>
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='Sur' classNameName="labels">Surname</label><input type="text" id="Sur" classNameName="form-control" value="" placeholder="surname"/></div>
                </div>
                <div classNameName="row mt-3">
                    <div classNameName="col-md-12"> <label htmlFor="" htmlFor='Add' classNameName="labels">Address Line 1</label><input type="text" classNameName="form-control" placeholder="enter address line 1" value=""/></div>
                    <div classNameName="col-md-12"> <label htmlFor="" htmlFor='emal' classNameName="labels">Email ID</label><input type="text" id='emal' classNameName="form-control" placeholder="enter email id" value=""/></div>
                </div>
                <div classNameName="row mt-3">
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='co' classNameName="labels">Country</label><input id='co' type="text" classNameName="form-control" placeholder="country" value=""/></div>
                    <div classNameName="col-md-6"> <label htmlFor="" htmlFor='st' classNameName="labels">State/Region</label><input id="st" type="text" classNameName="form-control" value="" placeholder="state"/></div>
                </div>
                <div classNameName="mt-5 text-center"><button classNameName="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div classNameName="col-md-4">
            <div classNameName="p-3 py-5">
                <div classNameName="col-md-12"> <label htmlFor="" htmlFor='addi' classNameName="labels">Additional Details</label><input type="text" id="addi" classNameName="form-control" placeholder="additional details" value=""/></div>
            </div>
     
        <div classNameNameName={pro.lague}>
     <Language classNameNameName={pro.lague} language={props.language} handleLanguageChange={props.handleLanguageChange} /> 
     </div>

        <div classNameNameName={pro.favoritescontainer}>
            <h2><Trans>Favorites</Trans>:</h2>
            <ul>

              { /*favorites.map(favorite => (
                
<li key={favorite}>{favorite}</li>
              )) 
</ul>
</div> /</div> } */}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-page-help-js.js.map