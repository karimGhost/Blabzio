exports.id = 9253;
exports.ids = [9253,8849,1271,5422,8138];
exports.modules = {

/***/ 4372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qc: () => (/* binding */ isActived),
/* harmony export */   bG: () => (/* binding */ logow),
/* harmony export */   jY: () => (/* binding */ logo),
/* harmony export */   zh: () => (/* binding */ isActive)
/* harmony export */ });
/* unused harmony exports Links, lik, login, logi, nav, Humberger, Linksbar, navcolor, Con, logsin, navDrawer, fixit, av */
// Exports
var Links = "navbar-module--Links--03509";
var lik = "navbar-module--lik--3a0ac";
var logo = "navbar-module--logo--26390";
var login = "navbar-module--login--5bc25";
var logi = "navbar-module--logi--ca449";
var nav = "navbar-module--nav--b3330";
var Humberger = "navbar-module--Humberger--94687";
var Linksbar = "navbar-module--Linksbar--30faa";
var navcolor = "navbar-module--navcolor--f6024";
var Con = "navbar-module--Con--6e090";
var logow = "navbar-module--logow--3a9d2";
var logsin = "navbar-module--logsin--8ddad";
var navDrawer = "navbar-module--navDrawer--780e8";
var fixit = "navbar-module--fixit--e0cac";
var av = "navbar-module--av--fc378";
var isActived = "navbar-module--isActived--bd989";
var isActive = "navbar-module--isActive--66644";


/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__=Component=>Component;

/***/ }),

/***/ 51333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Navbar.js + 3 modules
var Navbar = __webpack_require__(78931);
;// CONCATENATED MODULE: ./src/components/NavbarDrawer.js
function NavbarDrawer(){return/*#__PURE__*/React.createElement("div",null);}
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(91072);
// EXTERNAL MODULE: ./src/components/i18n.js + 5 modules
var i18n = __webpack_require__(12751);
// EXTERNAL MODULE: ./src/pages/Language.js
var Language = __webpack_require__(8665);
// EXTERNAL MODULE: ./src/pages/profileComponents/Profiles.js
var Profiles = __webpack_require__(60506);
// EXTERNAL MODULE: ./locales/en.json
var en = __webpack_require__(59748);
;// CONCATENATED MODULE: ./src/components/Lang.js
function Lang(props){const{language,handleLanguageChange}=props;const{t}=(0,es/* useTranslation */.$G)();const{0:F,1:setF}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("div",{className:"LangContainer"},/*#__PURE__*/index_js_default().createElement("div",{id:"lag"},/*#__PURE__*/index_js_default().createElement("h3",{className:"h1Lang"},"Choose Your Language"),/*#__PURE__*/index_js_default().createElement("select",{className:F?'selected':'',value:language,onChange:handleLanguageChange},/*#__PURE__*/index_js_default().createElement("option",{style:{color:"red",fontSize:"2rem"},className:'option'},/*#__PURE__*/index_js_default().createElement("p",{style:{color:"red"}},/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"Language"))),/*#__PURE__*/index_js_default().createElement("option",{className:'option',value:"en"},/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"English ")),/*#__PURE__*/index_js_default().createElement("option",{value:"am"},/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"Amharic")),/*#__PURE__*/index_js_default().createElement("option",{value:"es"},/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"Spanish")),/*#__PURE__*/index_js_default().createElement("option",{value:"ar"},/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"Arabic")),/*#__PURE__*/index_js_default().createElement("option",{value:"sw"},/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"Swahili")),/*#__PURE__*/index_js_default().createElement("option",{value:"fr"},/*#__PURE__*/index_js_default().createElement(es/* Trans */.cC,null,"French"))))));}
// EXTERNAL MODULE: external "process"
var external_process_ = __webpack_require__(39369);
// EXTERNAL MODULE: ./node_modules/firebase/database/dist/index.mjs
var dist = __webpack_require__(88965);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.mjs
var app_dist = __webpack_require__(75159);
// EXTERNAL MODULE: ./node_modules/firebase/compat/database/dist/index.mjs + 1 modules
var database_dist = __webpack_require__(9016);
// EXTERNAL MODULE: ./node_modules/firebase/compat/auth/dist/index.mjs + 3 modules
var auth_dist = __webpack_require__(67815);
// EXTERNAL MODULE: ./node_modules/firebase/compat/firestore/dist/index.mjs + 3 modules
var firestore_dist = __webpack_require__(30359);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 1 modules
var firebase_auth_dist = __webpack_require__(99184);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js + 4 modules
var index_esm = __webpack_require__(91871);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(57076);
// EXTERNAL MODULE: ./node_modules/primereact/password/password.esm.js + 2 modules
var password_esm = __webpack_require__(93367);
// EXTERNAL MODULE: ./node_modules/primereact/divider/divider.esm.js
var divider_esm = __webpack_require__(58918);
// EXTERNAL MODULE: ./src/Accounts/useAuth.js
var Accounts_useAuth = __webpack_require__(94405);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/InputGroup.js
var InputGroup = __webpack_require__(62318);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(35005);
// EXTERNAL MODULE: ./node_modules/primereact/toast/toast.esm.js
var toast_esm = __webpack_require__(74420);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(25692);
// EXTERNAL MODULE: ./node_modules/primereact/row/row.esm.js
var row_esm = __webpack_require__(28722);
;// CONCATENATED MODULE: ./src/images/1558314.jpg
/* harmony default export */ const _1558314 = ("/static/1558314-4d7062d172bb27c129cf9c6d96cb6b95.jpg");
;// CONCATENATED MODULE: ./src/Accounts/ZenaAccSignUp.js
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};const firebaseConfig0444={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};function ZenaAccSignUp_ZenaAccSignUp(props){const f1=app_dist/* default */.Z.initializeApp(firebaseConfig2,'app04');const f2=app_dist/* default */.Z.initializeApp(firebaseConfig0444,'app0444');const app04=app_dist/* default */.Z.app('app04');const app0444=app_dist/* default */.Z.app('app0444');const msgs=(0,index_js_.useRef)(null);const{0:Logindata,1:setLoginData}=(0,index_js_.useState)({acc:'',pass1:'',pass2:'',username:''});const{0:value3,1:setValue3}=(0,index_js_.useState)('');const{0:value4,1:setValue4}=(0,index_js_.useState)('');console.log(Logindata);const{0:error,1:setError}=(0,index_js_.useState)('');async function handleSubmit(event){event.preventDefault();const form=event.target;const acc=form.elements.form1.value;const pass1=Logindata.pass1;const pass2=Logindata.pass2;const username=form.elements.form4.value;if(!acc||!pass1||!pass2){if(!acc){msgs.current.show({severity:'warn',summary:'Email Comon!',detail:'Email field is required',life:3000});return;}if(!pass1){msgs.current.show({severity:'warn',summary:'did you Fill 1 Password ',detail:'First Password field is required',life:3000});return;}if(!pass2){msgs.current.show({severity:'warn',summary:'did you miss the second One :(',detail:'Second Password field is required',life:3000});return;}if(pass1!==pass2){msgs.current.show({severity:'warn',summary:'Fill all Man!',detail:'Fill all password fields',life:3000});return;}if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(acc)){msgs.current.show({severity:'warn',summary:' invalid Email',detail:'Please enter a valid email address',life:3000});return;}if(pass1.length<6){msgs.current.show({severity:'warn',summary:'please check',detail:'Password must be at least 6 characters long',life:3000});return;}if(!/[A-Z]/.test(pass1)||!/[a-z]/.test(pass1)||!/[0-9]/.test(pass1)){msgs.current.show({severity:'warn',summary:'please Be sure',detail:'Password must contain at least one uppercase letter, one lowercase letter, and one number',life:3000});return;}return;}setError('');const normalizedUsername=username.trim().toLowerCase();const normalizedEmail=acc.trim().toLowerCase();try{// Check if a user with that username already exists in the database
const snapshot1=await app04.database().ref('profile').orderByChild('username').equalTo(normalizedUsername).once('value');if(snapshot1.exists()){// A user with that username already exists
// Prompt the user to choose a different username
msgs.current.show({severity:'error',summary:'Error',detail:'username already exists. Please choose another one.',life:3000});const snapshot2=await app0444.database().ref('comments/cards').orderByChild('user').equalTo(normalizedUsername).once('value');if(snapshot2.exists()){msgs.current.show({severity:'error',summary:'Error',detail:'username already exists. Please choose another one.',life:3000});}}else if(pass1!==pass2){msgs.current.show({severity:'warn',summary:'Please check',detail:'passwords do not match!!',life:3000});return;}else{// The username is available
//  setError('username is available :)');
// Create a new user account with the normalized username
const userCredential=await app04.auth().createUserWithEmailAndPassword(acc,pass1);const user=userCredential.user;// Update the user's display name
await user.updateProfile({displayName:username});// Store the normalized username in the database
await app04.database().ref('profile/'+user.uid).set({username:normalizedUsername,email:normalizedEmail,text:"<div>Hello World!</div>",status:"write Something here....",followers:"1",following:"1",side:'to bottom',colors:["ghostwhite"]});// User data saved to the database
msgs.current.show({severity:'success',summary:'Success',detail:'You have Successfully Created your Account.'});// Navigate to the success page
props.setReady(true);}}catch(error){switch(error.code){case'auth/email-already-in-use':msgs.current.show({severity:'error',summary:'Error',detail:'This email is already in use.',life:3000});break;case'auth/invalid-email':msgs.current.show({severity:'error',summary:'Error',detail:'Invalid email address.',life:3000});break;case'auth/weak-password':msgs.current.show({severity:'error',summary:'Error',detail:'Password is too weak.',life:3000});break;default:msgs.current.show({severity:'error',summary:'Error',detail:'An error occurred.',life:3000});console.error(error);}}}const footer=/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(divider_esm/* Divider */.i,null),/*#__PURE__*/index_js_default().createElement("p",{className:"p-mt-2"},"Suggestions"),/*#__PURE__*/index_js_default().createElement("ul",{className:"p-pl-2 p-ml-2 p-mt-0",style:{lineHeight:'1.5'}},/*#__PURE__*/index_js_default().createElement("li",null,"At least one lowercase"),/*#__PURE__*/index_js_default().createElement("li",null,"At least one uppercase"),/*#__PURE__*/index_js_default().createElement("li",null,"At least one numeric"),/*#__PURE__*/index_js_default().createElement("li",null,"Minimum 8 characters")));const{0:user2,1:setUser2}=(0,index_js_.useState)('');return/*#__PURE__*/index_js_default().createElement("div",{className:"container containersmall Signup",fluid:true},/*#__PURE__*/index_js_default().createElement(toast_esm/* Toast */.F,{ref:msgs}),/*#__PURE__*/index_js_default().createElement("div",{className:"pt-2 bg-image",style:{backgroundImage:`${_1558314}`}}),/*#__PURE__*/index_js_default().createElement(Card/* default */.Z,{className:"mx-5 mb-5 p-5 shadow-5 ",id:"cardSign",style:{marginTop:'',backgroundImage:`${_1558314}`,backdropFilter:'blur(30px)'}},/*#__PURE__*/index_js_default().createElement(Card/* default */.Z.Body,{className:"p-4 text-center psmall"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex flex-row ps-5 pb-2",style:{justifyContent:"center"}},/*#__PURE__*/index_js_default().createElement(index_esm/* FaDragon */.wBX,{fas:true,icon:" fa-3x me-3 ",style:{color:"purple",divor:'#709085'}}),/*#__PURE__*/index_js_default().createElement("span",{className:"h1 fw-bold mb-0 text-center",style:{color:"whitesmoke"}},"Blab",/*#__PURE__*/index_js_default().createElement("b",{style:{color:"purple",fontFamily:"sans-serif"}},"Z"),"io ")),/*#__PURE__*/index_js_default().createElement("h2",{className:"fw-bold mb-5"},"Sign up "),error&&/*#__PURE__*/index_js_default().createElement("p",{className:"error-messag"},error),/*#__PURE__*/index_js_default().createElement("form",{onSubmit:handleSubmit,style:{width:"fit-content"},className:" pl-5 justify mx-auto  ml5"},/*#__PURE__*/index_js_default().createElement(row_esm/* Row */.X,{className:"rowed "},/*#__PURE__*/index_js_default().createElement(InputGroup/* default */.Z,{className:"mb-3 "},/*#__PURE__*/index_js_default().createElement(Form/* default */.Z.Control,{placeholder:"Choose  username","aria-label":"Choose username",className:" ml-5 mls5 bg-dark",style:{borderRadius:"5px",color:"white"},"aria-describedby":"basic-addon1",wrapperClass:"mb-4  p-0 w-100",value:Logindata.username,label:"Choose desired username",id:"form4",type:"text",onChange:event=>setLoginData({...Logindata,username:event.target.value})})),/*#__PURE__*/index_js_default().createElement(InputGroup/* default */.Z,{className:"mb-3 "},/*#__PURE__*/index_js_default().createElement(Form/* default */.Z.Control,{placeholder:"Email","aria-label":"Email",style:{borderRadius:"5px"},"aria-describedby":"basic-addon1",className:"em w-100 ml-5 bg-dark text-light mls5",wrapperClass:"mb-4  center mx-auto",label:"Email",id:"form1",type:"email",value:Logindata.acc,onChange:event=>{if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){setError('Please enter a valid email address');}else{setError('');}setLoginData(pre=>{return{...pre,acc:event.target.value};});},autoComplete:"off"}))),/*#__PURE__*/index_js_default().createElement(row_esm/* Row */.X,{className:"rowed"},/*#__PURE__*/index_js_default().createElement(password_esm/* Password */.r,{placeholder:"password",style:{width:"100%"},className:" passs mb-4 pr-1 center  pl-5 pls5",id:"form2",value:Logindata.pass1,onChange:event=>setLoginData(pre=>{return{...pre,pass1:event.target.value};}),toggleMask:true}),/*#__PURE__*/index_js_default().createElement(password_esm/* Password */.r,{className:"passs mb-4 pl-5 pls5",placeholder:"repeat-password ",style:{width:"100%"},id:"form3",value:Logindata.pass2,onChange:event=>setLoginData({...Logindata,pass2:event.target.value}),toggleMask:true,footer:footer})),/*#__PURE__*/index_js_default().createElement(Button/* default */.Z,{type:"submit",style:{background:"rgb(20,21,21)",width:"90%"},className:"w-50 mb-4 ",size:"md"},"sign up")),/*#__PURE__*/index_js_default().createElement("div",{className:"text-center"},/*#__PURE__*/index_js_default().createElement("p",null,"Already have An Account ? ",/*#__PURE__*/index_js_default().createElement("button",{className:"bgdark  mb-5",style:{cursor:"pointer",background:"none",border:"none",color:"black"},onClick:()=>props.setReady(true)},"Login")),/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex flex-row ps-5 pb-2 ",style:{justifyContent:"right",fontSize:"1.5rem"}},/*#__PURE__*/index_js_default().createElement(index_esm/* FaDragon */.wBX,{fas:true,icon:" fa-3x me-3 ",style:{color:"purple",divor:'#709085',fontSize:"0.95rem"}}),/*#__PURE__*/index_js_default().createElement("span",{className:"h1 fw-bold mb-0 text-center ",style:{color:"whitesmoke",fontSize:"1.5rem"}},"Blab",/*#__PURE__*/index_js_default().createElement("b",{style:{color:"purple",fontFamily:"sans-serif",fontSize:"1.5rem"}},"Z"),"io "))))));}
// EXTERNAL MODULE: ./node_modules/react-google-recaptcha/lib/esm/index.js + 3 modules
var esm = __webpack_require__(77678);
// EXTERNAL MODULE: ./src/pages/ProfilePage/ProfileSettup.js
var ProfileSettup = __webpack_require__(66844);
;// CONCATENATED MODULE: ./src/Accounts/ForgotPassword.js
const firebaseConfigq={apiKey:"AIzaSyAxMN4OQLOisY94cVCgR96o3-HoY0l6ZQk",authDomain:"zenanewstoday.firebaseapp.com",projectId:"zenanewstoday",storageBucket:"zenanewstoday.appspot.com",messagingSenderId:"1042837214412",appId:"1:1042837214412:web:ac14f71cb3f41e21719e69",measurementId:"G-V8VEEWMFR9"};function ForgotPassword_ForgotPassword(props){firebase.initializeApp(firebaseConfigq,'appq');const appq=firebase.app('appq');const{0:email,1:setEmail}=useState('');const{0:error,1:setError}=useState(null);const{0:success,1:setSuccess}=useState(false);const{0:isLoading,1:setLoading}=useState(false);const{0:captchaValue,1:setCaptchaValue}=useState('');const handleSubmit=async e=>{e.preventDefault();if(!captchaValue){setError("Please verify that you're human");return;}try{setLoading(true);const actionCodeSettings={url:'https://zenanewstoday.web.app',handleCodeInApp:true};await appq.auth().sendPasswordResetEmail(email,actionCodeSettings);setSuccess(true);setLoading(false);}catch(err){setLoading(false);switch(err.code){case'auth/user-not-found':setError('This email address is not associated with any account.');break;case'auth/invalid-email':setError('Invalid email address.');break;default:setError('An error occurred, please try again later.');}}};return/*#__PURE__*/React.createElement("form",{className:"fom",onSubmit:handleSubmit},/*#__PURE__*/React.createElement("h1",{className:"heads1"},"Zena Reset Password"),success&&!error&&/*#__PURE__*/React.createElement("p",{id:"block",style:{color:'black',fontWeight:'bold'},className:"reds"},alert('A password reset email has been sent to your email address'),"A password reset email has been sent to your email address."),/*#__PURE__*/React.createElement("input",{className:"ipu",type:"email",placeholder:"Email",value:email,id:"rese",onChange:e=>setEmail(e.target.value)}),/*#__PURE__*/React.createElement(ReCAPTCHA,{id:"reseted",sitekey:"6LcrTAwkAAAAAE4cE3PhorjOdxsc0QfEEwIwMsXv",onChange:value=>setCaptchaValue(value),size:window.innerWidth>334?'normal':'compact'}),/*#__PURE__*/React.createElement("button",{className:"btu",type:"submit",disabled:isLoading},isLoading?'Loading...':'Send Password Reset Email'),error&&/*#__PURE__*/React.createElement("p",{className:"reds"},error),/*#__PURE__*/React.createElement("p",null,"Already have an account? ",/*#__PURE__*/React.createElement("button",{style:{cursor:"pointer",background:"none",fontWeight:"bold",color:"black"},onClick:()=>props.setUse(true)}," Log in")));}
;// CONCATENATED MODULE: ./src/Accounts/GoogleSignIn.js
const GoogleSignIn_firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function GoogleSignIn_GoogleSignIn(){/* firebase.initializeApp(firebaseConfig2, 'app1');
const app1 = firebase.app('app1'); */const{user,setUser}=useAuth();const{0:appInitialized,1:setAppInitialized}=useState(false);const{0:app,1:setApp}=useState();useEffect(()=>{if(!appInitialized){firebase.initializeApp(GoogleSignIn_firebaseConfig2,'app06');setApp(firebase.app('app06'));setAppInitialized(true);}},[appInitialized]);function GoogleS(){const provider=new firebase.auth.GoogleAuthProvider();app.auth().signInWithRedirect(provider).then(result=>{setUser(null);setUser(result.user);}).catch(error=>{setUser(null);});}return/*#__PURE__*/React.createElement(React.Fragment,null);}
// EXTERNAL MODULE: ./node_modules/primereact/button/button.esm.js
var button_esm = __webpack_require__(99403);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(59417);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(70982);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(31555);
// EXTERNAL MODULE: ./node_modules/randomstring/index.js
var randomstring = __webpack_require__(60749);
;// CONCATENATED MODULE: ./src/Accounts/ZenaAcc.js
//import 'firebase/auth';
const ZenaAcc_firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function ZenaAcc(props){const msgs=(0,index_js_.useRef)("");app_dist/* default */.Z.initializeApp(ZenaAcc_firebaseConfig2,'app05');const app05=app_dist/* default */.Z.app('app05');const{user,setUser}=(0,Accounts_useAuth/* useAuth */.a)();const{0:appInitialized,1:setAppInitialized}=(0,index_js_.useState)(false);const{0:app,1:setApp}=(0,index_js_.useState)();(0,index_js_.useEffect)(()=>{if(!appInitialized){app_dist/* default */.Z.initializeApp(ZenaAcc_firebaseConfig2,'app05');setApp(app_dist/* default */.Z.app('app05'));setAppInitialized(true);}},[appInitialized]);const{0:userData,1:setUserData}=(0,index_js_.useState)({username:'',email:''});function GoogleS(){const provider=new app_dist/* default */.Z.auth.GoogleAuthProvider();app05.auth().signInWithPopup(provider).then(result=>{const gmailUsername=result.user.displayName;const gmailEmail=result.user.email;const normalizedUsername=gmailUsername.trim().toLowerCase();const normalizedEmail=gmailEmail.trim().toLowerCase();const usersRef=app05.database().ref('profile');// Check if the user already exists
usersRef.once('value',snapshot=>{const users=snapshot.val();if(!users&&result.user.uid){app05.database().ref('profile/'+result.user.uid).set({username:normalizedUsername,email:normalizedEmail,text:"<div>Hello World!</div>",status:"Write something here...",followers:"1",following:"1",side:'to bottom',colors:["ghostwhite"]});}else if(users){let existingUserKey=Object.keys(users).find(key=>users[key].email===normalizedEmail);if(existingUserKey){// User already exists, handle accordingly
console.log('User already exists:',users[existingUserKey]);const existingUser=users[existingUserKey];// Check if the user has an existing username
if(existingUser.username){return;}else{usersRef.child(existingUserKey).update({username:normalizedUsername,text:"<div>Hello World!</div>",status:"Write something here...",followers:"1",following:"1",side:'to bottom',colors:["ghostwhite"]});}}else{app05.database().ref('profile/'+result.user.uid).set({username:normalizedUsername,email:normalizedEmail,text:"<div>Hello World!</div>",status:"Write something here...",followers:"1",following:"1",side:'to bottom',colors:["ghostwhite"]});}}else{const password=randomstring.generate({length:12,// specify the desired length of the password
charset:'alphanumeric'// include both letters and numbers
});console.log(password);// Create a new user and save user data
app05.auth().createUserWithEmailAndPassword(gmailEmail,password).then(userCredential=>{const newUser=userCredential.user;app05.database().ref('profile/'+newUser.uid).set({username:normalizedUsername,email:normalizedEmail,text:"<div>Hello World!</div>",status:"Write something heree...",followers:"1",following:"1",side:'to bottom',colors:["ghostwhite"]});setUser(result.user);}).catch(error=>{// Handle error while creating a new user
});}});}).catch(error=>{setUser(null);});}const{0:sta,1:setsta}=(0,index_js_.useState)(false);const{0:showed,1:setShowed}=(0,index_js_.useState)(false);const{0:use,1:setUse}=(0,index_js_.useState)(true);const{0:Logindata,1:setLoginData}=(0,index_js_.useState)({user2:'',pass3:''});const{0:user2,1:setUser2}=(0,index_js_.useState)('');const{0:vv,1:setvv}=(0,index_js_.useState)(false);(0,index_js_.useEffect)(()=>{let userData=localStorage.getItem('user');if(userData){let js=userData;const jj=js.slice(0,5);console.log(jj);// Use the parsed data here
}},[]);const{0:value3,1:setValue3}=(0,index_js_.useState)('');function Logins({event}){const logs=event.target.value;setLoginData(pre=>{return{...pre,user2:logs.user2,pass3:logs.pass3};});}console.log(Logindata);const{0:pass,1:setpass}=(0,index_js_.useState)("password");const{0:eye,1:setEye}=(0,index_js_.useState)(true);const{0:type,1:setType}=(0,index_js_.useState)(false);const Eye=()=>{if(pass=="password"){setpass("text");setEye(false);setType(true);}else{setpass("password");setEye(true);setType(false);}};const{0:error,1:setError}=(0,index_js_.useState)('');const{0:person,1:setPerson}=(0,index_js_.useState)('');function handleSubmit(event){event.preventDefault();const form=event.target;const user2=form.elements.formControlLg.value;const pass3=form.elements.formControl.value;if(!user2){msgs.current.show({severity:'warn',summary:'Warning',detail:'User field is required',life:3000});}if(!pass3){msgs.current.show({severity:'warn',summary:'Warning',detail:'Password field is required',life:3000});return;}setError('');// Check if the user2 is an email address
if(/\S+@\S+\.\S+/.test(user2)){// Authenticate using email
app05.auth().signInWithEmailAndPassword(user2,pass3).then(userCredential=>{// User authenticated
const user=userCredential.user;console.log("User authenticated with email:",user.email);}).catch(error=>{console.log(error);msgs.current.show({severity:'error',summary:'Error',detail:'An error occurred while signing in. Please check your credentials and try again.',life:3000});});}else{// Normalize the username
const normalizedUsername=user2.trim().toLowerCase();// Authenticate using username
app05.database().ref('profile').orderByChild('username').equalTo(normalizedUsername).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val())[0];const email=snapshot.val()[userId].email;app05.auth().signInWithEmailAndPassword(email,pass3).then(userCredential=>{// User authenticated
setPerson(userCredential.user);console.log("User authenticated with username:",normalizedUsername);msgs.current.show({severity:'success',summary:'Success',detail:`Welcome ${normalizedUsername}`,life:3000});}).catch(error=>{console.log(error);if(msgs.current){msgs.current.show({severity:'error',summary:'Error',detail:'An error occurred while signing in. Please check your credentials and try again.',life:3000});}});}else{msgs.current.show({severity:'error',summary:'Error',detail:'User not found. Please check your credentials and try again.',life:3000});}}).catch(error=>{console.log(error);msgs.current.show({severity:'error',summary:'Error',detail:'An error occurred while signing in. Please check your credentials and try again.',life:3000});if(error.code==='auth/wrong-password'){msgs.current.show({severity:'error',summary:'Error',detail:'Password is incorrect.',life:3000});}else if(error.code==='auth/user-not-found'){msgs.current.show({severity:'error',summary:'Error',detail:'Email/User is incorrect.',life:3000});}if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user2)){msgs.current.show({severity:'error',summary:'Error',detail:'Please enter a valid email',life:3000});}});}};////
return/*#__PURE__*/index_js_default().createElement("div",{className:"container containersmall",onSubmit:handleSubmit,fluid:true},/*#__PURE__*/index_js_default().createElement(row_esm/* Row */.X,{className:"d-flex"},/*#__PURE__*/index_js_default().createElement(toast_esm/* Toast */.F,{ref:msgs}),/*#__PURE__*/index_js_default().createElement("div",{className:"w-50"},/*#__PURE__*/index_js_default().createElement(Col/* default */.Z,{className:"Cols"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex flex-row ps-5 pt-5 "},/*#__PURE__*/index_js_default().createElement(index_esm/* FaDragon */.wBX,{fas:true,icon:" fa-3x me-3 ",style:{color:"purple",divor:'#709085'}}),/*#__PURE__*/index_js_default().createElement("span",{className:"h1 fw-bold mb-0",style:{color:"whitesmoke"}},"Blab",/*#__PURE__*/index_js_default().createElement("b",{style:{color:"purple",fontFamily:"sans-serif"}},"Z"),"io ")),/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex flex-column justify-content-center h-custom-2 w-80 pt-4"},/*#__PURE__*/index_js_default().createElement("h3",{className:"fw-normal mb-3 ps-5 pb-3",style:{letterSpacing:'1px'}}," ",error?/*#__PURE__*/index_js_default().createElement("p",{className:"error-message"},error):'Log in'),/*#__PURE__*/index_js_default().createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/index_js_default().createElement(InputGroup/* default */.Z,{className:"mb-3 "},/*#__PURE__*/index_js_default().createElement(Form/* default */.Z.Control,{placeholder:"User/Email","aria-label":"User/Email","aria-describedby":"basic-addon1",wrapperClass:"mb-4 mx-5 w-100",label:"Email/user",id:"formControlLg",type:"text",value:Logindata.user,onChange:event=>setLoginData(event.target.value),autoComplete:"off"})),/*#__PURE__*/index_js_default().createElement(InputGroup/* default */.Z,{className:"mb-3 w-100"},/*#__PURE__*/index_js_default().createElement(Form/* default */.Z.Control,{placeholder:"Password",style:{position:"relative"},wrapperClass:"mb-4 mx-5 w-100",label:"Password",id:"formControl",type:pass,size:"lg",className:"pass3",value:Logindata.pass3,onChange:event=>setLoginData(event.target.value),autoComplete:"off"}),/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{style:{cursor:"pointer",position:"absolute",top:"35%",right:'25px',marginRight:"auto",zIndex:"20"},onClick:Eye,icon:eye?free_solid_svg_icons/* faEye */.Mdf:free_solid_svg_icons/* faEyeSlash */.Aq})),/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{style:{background:"rgb(20,21,21)",color:"white"},className:"mb-4 px-5 mx-3 ",color:"info",size:"sm"},"Login")),/*#__PURE__*/index_js_default().createElement("p",{className:"small mb-5 pb-lg-3 ms-5"},/*#__PURE__*/index_js_default().createElement("a",{class:"text-muted"},"Forgot password?")),/*#__PURE__*/index_js_default().createElement("p",{className:"ms-5"},"Don't have an account? ",/*#__PURE__*/index_js_default().createElement("button",{className:"aquad",style:{cursor:"pointer",background:"none",border:"none",color:"aqua"},onClick:()=>props.setReady(false),class:"link-info"},"Register here")),/*#__PURE__*/index_js_default().createElement("div",{className:"divider d-flex justify-content-center align-items-center w-75 my-4 mx-8"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-center mx-auto  fw-bold mx-5 mb-0"},"OR")),/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{onClick:GoogleS,style:{backgroundColor:'#dd4b39',marginLeft:"-120px"},className:"mb-4 px-1 w-100 mx-1  w-100",color:"info",size:"lg"},/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{style:{fontWeight:"bold",fontSize:"2rem"},className:"text-bold px-2",icon:free_solid_svg_icons/* faG */.mdI})," signup with Google")))),/*#__PURE__*/index_js_default().createElement(Col/* default */.Z,{sm:"6",className:"d-none d-sm-block pl-5 w-50"},/*#__PURE__*/index_js_default().createElement("img",{src:_1558314,alt:"Login image",className:"",style:{height:'120vh',maxHeight:" 100%",objectFit:'cover',objectPosition:"right"}}))));}/* harmony default export */ const Accounts_ZenaAcc = (ZenaAcc);
;// CONCATENATED MODULE: ./src/Accounts/Effects.js
function Effects_Effects(){const{user}=useAuth();useEffect(()=>{let inputs=document.querySelectorAll("input");inputs.forEach(input=>{input.addEventListener('focusin',e=>{document.querySelector(`label[for="${e.target.id}"]`).classList.add('ups');});input.addEventListener('focusout',e=>{if(e.target.value.length===0){document.querySelector(`label[for="${e.target.id}"]`).classList.remove('ups');}});});return()=>{inputs.forEach(input=>{input.removeEventListener('focusin',()=>{document.querySelector(`label[for="${input.target.id}"]`).classList.remove('ups');});input.removeEventListener('focusout',()=>{document.querySelector(`label[for="${input.target.id}"]`).classList.remove('ups');});});};},[user]);return/*#__PURE__*/React.createElement("div",null);}
;// CONCATENATED MODULE: ./src/Accounts/L.js
const L_firebaseConfig2={apiKey:"AIzaSyAxMN4OQLOisY94cVCgR96o3-HoY0l6ZQk",authDomain:"zenanewstoday.firebaseapp.com",projectId:"zenanewstoday",storageBucket:"zenanewstoday.appspot.com",messagingSenderId:"1042837214412",appId:"1:1042837214412:web:ac14f71cb3f41e21719e69",measurementId:"G-V8VEEWMFR9"};function L(props){firebase.initializeApp(L_firebaseConfig2,'app1');const app1=firebase.app('app1');const{0:sta,1:setsta}=useState(false);const{0:showed,1:setShowed}=useState(false);const{0:use,1:setUse}=useState(true);const{0:Logindata,1:setLoginData}=useState({user2:'',pass3:''});const{user}=useAuth();const{0:user2,1:setUser2}=useState('');useEffect(()=>{let userData=localStorage.getItem('user');if(userData){let js=userData;const jj=js.slice(0,5);console.log(jj);// Use the parsed data here
}},[]);function Logins({event}){const logs=event.target.value;setLoginData(pre=>{return{...pre,user2:logs.user2,pass3:logs.pass3};});}console.log(Logindata);const{0:error,1:setError}=useState('');function handleSubmit(event){event.preventDefault();const form=event.target;const user2=form.elements.user2.value;const pass3=form.elements.pass3.value;if(!user2||!pass3){if(!user2){setError('User field is required');}if(!pass3){setError('Password field is required');}return;}setError('');app1.auth().signInWithEmailAndPassword(user2,pass3).then(result=>{console.log('Successfully logged in!');setError("sucess");JSON.stringify(localStorage.setItem('user',user2));// Redirect or show a message
}).catch(error=>{console.error(error);if(error.code==='auth/wrong-password'){setError('Password is incorrect');}else if(error.code==='auth/user-not-found'){setError('Email is incorrect');}if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user2)){setError('Please enter a valid email');}});}/*!showed && <button  id={log.ti} className='times'>&times;</button> */return/*#__PURE__*/React.createElement("div",{className:log.ContainerLogA},/*#__PURE__*/React.createElement("div",{className:log.ContainerForm},/*#__PURE__*/React.createElement(Effects,null),!showed&&use&&/*#__PURE__*/React.createElement("div",{id:log.form,className:log.form},/*#__PURE__*/React.createElement("div",null,/*#__PURE__*/React.createElement("h3",{className:log.head},"Login To Zena Account"),error&&/*#__PURE__*/React.createElement("p",{className:"error-message"},error),/*#__PURE__*/React.createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/React.createElement("div",{id:log.Big,className:log.Big},/*#__PURE__*/React.createElement("div",{className:log.formInputs},/*#__PURE__*/React.createElement("label",{id:"b1",className:"bob",htmlFor:"user2"},"Email"),/*#__PURE__*/React.createElement("input",{type:"text",value:Logindata.user,onChange:event=>setLoginData(event.target.value),className:"bb1",id:"user2",autoComplete:"off"})),/*#__PURE__*/React.createElement("div",{className:log.formInputs},/*#__PURE__*/React.createElement("label",{id:"b2",className:"bob",htmlFor:"pass3"},"password"),/*#__PURE__*/React.createElement("input",{type:"password",value:Logindata.pass3,onChange:event=>setLoginData(event.target.value),id:"pass3",autoComplete:"off"}))),/*#__PURE__*/React.createElement("div",{className:log.sigco},/*#__PURE__*/React.createElement("button",{onClick:()=>setUse(false),className:log.forgot},"Forgot password?"),/*#__PURE__*/React.createElement("button",{className:log.sign},"SignIn")))),/*#__PURE__*/React.createElement("div",null,/*#__PURE__*/React.createElement("div",{className:log.start}),/*#__PURE__*/React.createElement("p",{className:log.U},"OR"),/*#__PURE__*/React.createElement("div",{className:log.end})),/*#__PURE__*/React.createElement("div",{className:log.Signupsg},/*#__PURE__*/React.createElement("button",{id:"email-btn",onClick:()=>setShowed(true)},/*#__PURE__*/React.createElement(FaEnvelope,{id:"bg"}),"Signup with email"),/*#__PURE__*/React.createElement(GoogleSignIn,null))),!use&&/*#__PURE__*/React.createElement(ForgotPassword,{setUse:setUse})),showed&&/*#__PURE__*/React.createElement(ZenaAccSignUp,{setShowed:setShowed}),/*#__PURE__*/React.createElement(Profile,null));}
// EXTERNAL MODULE: ./src/pages/articles/Welcome.js
var Welcome = __webpack_require__(85191);
// EXTERNAL MODULE: ./src/components/Loadings.js
var Loadings = __webpack_require__(80221);
// EXTERNAL MODULE: ./src/pages/Market.js
var Market = __webpack_require__(19819);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(87896);
// EXTERNAL MODULE: ./src/components/PagesData.js
var PagesData = __webpack_require__(37489);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(2711);
;// CONCATENATED MODULE: ./src/components/Footer.js
//import requests from "../../requests";
//import axio from '../../axios';
//import { initializeApp } from "firebase/app";
//import i18n from "../components/i18n"
const firebaseConfig6={apiKey:"AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",authDomain:"zenaitsworld.firebaseapp.com",projectId:"zenaitsworld",storageBucket:"zenaitsworld.appspot.com",messagingSenderId:"752059821465",appId:"1:752059821465:web:a892347312cbfad858f708",measurementId:"G-GEMHBSGYPY"};function Footer(){app_dist/* default */.Z.initializeApp(firebaseConfig6,'app6');const app6=app_dist/* default */.Z.app('app6');const location=(0,index_modern.useLocation)();const{0:news,1:setNews}=(0,index_js_.useState)();(0,index_js_.useEffect)(()=>{app6.database().ref('Business').on('value',snapshot=>{setNews(snapshot.val());});},[]);const{0:itemsPerPage}=(0,index_js_.useState)(10);// number of items to display per page
const{0:currentPage,1:setCurrentPage}=(0,index_js_.useState)(1);// current page number
const totalPages=news?Math.ceil(Object.keys(news).length/itemsPerPage):0;console.log(`totalpages ${totalPages}`);console.log(`currentPages ${currentPage}`);console.log(`itemsperpage ${itemsPerPage}`);// Method for handling page changes
const handlePageChange=page=>{if(page<=totalPages){setCurrentPage(page);}};let isActive;if(location.pathname.startsWith('/profileComponents/Myprofile')){isActive=true;}else if(location.pathname.startsWith('/profileComponents/Profiles')){isActive=true;}else{isActive=false;}// Get the news items for the current page
const currentNews=news&&Object.values(news).slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);const{0:da,1:setda}=(0,index_js_.useState)('Buss');const{0:off,1:setoff}=(0,index_js_.useState)(false);function locale(ne){setda(ne);/* localStorage.setItem('data', JSON.stringify(ne)) */setoff(true);//localStorage.setItem('data', JSON.stringify(ne))
}const{user,loading,signOut}=(0,Accounts_useAuth/* useAuth */.a)();const{0:lang,1:setLang}=(0,index_js_.useState)("");const{0:language,1:setLanguage}=(0,index_js_.useState)("");const{0:lag,1:setLag}=(0,index_js_.useState)('');const{0:la,1:setLa}=(0,index_js_.useState)('');console.log(`$the object is as ${lag}`);const{0:v,1:setv}=(0,index_js_.useState)();const{0:light,1:setLight}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement("div",null,"  ",!isActive&&/*#__PURE__*/index_js_default().createElement("footer",null,/*#__PURE__*/index_js_default().createElement("div",{style:{backgroundColor:"#141515",color:"silver"},className:"footer-top"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-5"},/*#__PURE__*/index_js_default().createElement("h1",null,"Blabzio"),/*#__PURE__*/index_js_default().createElement("h5",{className:"font-weight-normal mt-4 mb-5"},"Blub/zio .... Did You Find  AnyThing to Bluber :) ?"),/*#__PURE__*/index_js_default().createElement("ul",{className:"social-media mb-3"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{style:{color:"black"}},/*#__PURE__*/index_js_default().createElement(index_esm/* FaFacebook */.Am9,null),"B")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{style:{color:"black"}},"L")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{style:{color:"black"}},"A")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{style:{color:"black"}},"b")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{style:{color:"black"}},"z")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{style:{color:"black"}},"i")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{style:{color:"black"}},"o"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{marginBottom:"10px",color:"gray"},to:""},"About us")," ",/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{marginBottom:"10px",color:"gray"},to:""},"Terms & Conditions"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{marginBottom:"5px",color:"gray"},to:""},"Privacy Policy ")),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-4"},/*#__PURE__*/index_js_default().createElement("h3",{className:"font-weight-bold mb-3"},"RECENT POSTS"),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-3"},/*#__PURE__*/index_js_default().createElement("img",{src:currentNews&&currentNews[1].urlToImage,onClick:()=>locale(currentNews&&currentNews[1].url),alt:"thumb",className:"img-fluid"})),/*#__PURE__*/index_js_default().createElement("div",{className:"col-9"},/*#__PURE__*/index_js_default().createElement("h5",{onClick:()=>locale(currentNews&&currentNews[1].url),className:"font-weight-600"},currentNews&&currentNews[1].title>=5?currentNews.title[1].slice(0,10)+'...':currentNews&&currentNews[1].title)))))),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-3"},/*#__PURE__*/index_js_default().createElement("img",{src:currentNews&&currentNews[2].urlToImage,onClick:()=>locale(currentNews&&currentNews[2].url),alt:"thumb",className:"img-fluid"})),/*#__PURE__*/index_js_default().createElement("div",{className:"col-9"},/*#__PURE__*/index_js_default().createElement("h5",{className:"font-weight-600",onClick:()=>locale(currentNews&&currentNews[2].url)},currentNews&&currentNews[2].title>=5?currentNews.title[2].slice(0,10)+'...':currentNews&&currentNews[2].title)))))),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-3"},/*#__PURE__*/index_js_default().createElement("img",{src:currentNews&&currentNews[3].urlToImage,onClick:()=>locale(currentNews&&currentNews[3].url),alt:"thumb",className:"img-fluid"})),/*#__PURE__*/index_js_default().createElement("div",{className:"col-9"},/*#__PURE__*/index_js_default().createElement("h5",{className:"font-weight-600",onClick:()=>locale(currentNews&&currentNews[3].url)},currentNews&&currentNews[3].title>=5?currentNews.title[3].slice(0,10)+'...':currentNews&&currentNews[3].title))))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-3"},/*#__PURE__*/index_js_default().createElement("h3",{className:"font-weight-bold mb-3"},"CATEGORIES"),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"}," ",/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"},"Magazine ")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"},"Business ")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{style:{color:"silver"},className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"}," Sports")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"}," Arts")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"}," ")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"}," Entertainment")," "),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"},"Magazine")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"}," Travel")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-border-bottom pb-2 pt-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("h5",{className:"mb-0 font-weight-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{color:"silver"},to:"/"},"Technology")),/*#__PURE__*/index_js_default().createElement("div",{className:"count"},"1"))))))),/*#__PURE__*/index_js_default().createElement("div",{style:{backgroundColor:"#000"},className:"footer-bottom"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-sm-12"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-sm-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("div",{style:{color:"grey"},className:"fs-14 font-weight-600 text-silver"},"\xA9 2022 - ",new Date().getFullYear()," @  ",/*#__PURE__*/index_js_default().createElement("a",{href:"",target:"_blank",className:"text-white"}," Blabzio"),". All rights reserved."),/*#__PURE__*/index_js_default().createElement("div",{style:{color:"goldenyellow"},className:"fs-14 font-weight-600 text-silver"},"Made  by ",/*#__PURE__*/index_js_default().createElement("a",{href:"",target:"_blank",className:"text-white"},"Abdulkarim ")))))))));}/*



  useEffect(() => {
  // Only run the effect if the user object is defined
  if (user) {
    app6.database().ref(`users/${user.uid}`).on('value', snapshot => {
      console.log(JSON.stringify(snapshot.val()))
      if (!snapshot.val()) {
        setLag(true);
        console.log("Snapshot value is null or undefined");
        return;
      }
      setLag(false);
      // check if snapshot.val() is an object
      if(typeof snapshot.val() === 'object'){
        const val = snapshot.val();
        i18n.changeLanguage(val.language);
      } else {
        i18n.changeLanguage(snapshot.val());
      }
    });
  }
  }, [user]);
  
  function handleLanguageChange(event) {
  const newLanguage = event.target.value;
  setLanguage(newLanguage);
  i18n.changeLanguage(newLanguage);
  
  
  app6.database().ref(`users/${user.uid}`).set({ language: newLanguage })
  
  
  // localStorage.setItem('lag', JSON.stringify(newLanguage));
  }
  
  
  /*
  if(!news ){
    return <div style={{ color: "black"}}>Loading data please wait !!!</div>
  }
  */
;// CONCATENATED MODULE: ./src/components/Recive.js
const Recive_firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function Recive(props){const{user,loading,signOut}=(0,Accounts_useAuth/* useAuth */.a)();return/*#__PURE__*/index_js_default().createElement("div",null);}
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 20 modules
var Modal = __webpack_require__(84509);
// EXTERNAL MODULE: ./src/pages/profileComponents/Notifications.js
var Notifications = __webpack_require__(10246);
// EXTERNAL MODULE: ./src/pages/news/Posted/Post.js
var Post = __webpack_require__(92265);
// EXTERNAL MODULE: ./node_modules/primereact/resources/themes/lara-light-indigo/theme.css
var theme = __webpack_require__(7827);
// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.min.css
var primereact_min = __webpack_require__(13196);
;// CONCATENATED MODULE: ./src/components/Layout.js
//import Celeb from '../pages/news/Politics';
//core
const firebaseConfig16={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};app_dist/* default */.Z.initializeApp(firebaseConfig16,'app16');const app16=app_dist/* default */.Z.app('app16');function Layout({setLig,theLight,dark,setDark,setdark,setTheLight,userId,isBloged,onHide,setProfile,setUser,navbars,setLoads,light,setLight,lag,off,children,trendings,language,handleLanguageChange}){const{user,loading,signOut}=(0,Accounts_useAuth/* useAuth */.a)();const{0:usernames,1:setUsernames}=(0,index_js_.useState)({useris:null});const{0:userProfile,1:setUserProfile}=(0,index_js_.useState)('');const username=usernames.useris;const{0:topRightModal,1:setTopRightModal}=(0,index_js_.useState)(false);const location=(0,index_modern.useLocation)();let isBlogActive;if(location.pathname.startsWith('/profileComponents/Myprofile')){isBlogActive=true;}else{isBlogActive=false;}const toggleShow=()=>{setTopRightModal(!topRightModal);};(0,index_js_.useEffect)(()=>{if(user&&user.email){app16.database().ref('prof').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){setTopRightModal(false);setUsernames(pre=>{return{...pre,useris:snapshotval.username};});}if(!snapshotval&&!snapshotval.username){setTimeout(()=>setTopRightModal(true),6000);}}});}else{// handle the case where user is not defined or does not have an email property
}},[usernames]);const{0:Ready,1:setReady}=(0,index_js_.useState)(true);//const handleLanguageChange = props.handleLanguageChange;
const{0:isOpen,1:setIsOpen}=(0,index_js_.useState)(false);//const [lan,SetLang] = useState(true); 
const{0:isTrue,1:setIsTrue}=(0,index_js_.useState)(true);(0,index_js_.useEffect)(()=>{const handleResize=()=>{if(window.innerWidth<=904){setIsTrue(false);}else{setIsTrue(true);}};window.addEventListener('resize',handleResize);return()=>{window.removeEventListener('resize',handleResize);};},[isTrue]);const{0:val,1:setVal}=(0,index_js_.useState)(true);const{0:names,1:setnames}=(0,index_js_.useState)('');const{0:its,1:setits}=(0,index_js_.useState)(true);(0,index_js_.useEffect)(()=>{let userData=localStorage.getItem('user');if(userData){let js=userData;const jj=js.slice(0,5);setnames(jj);// Use the parsed data here
setVal(false);}let gg=JSON.parse(sessionStorage.getItem('true'));if(gg){setits(false);}},[names]);const{0:loaded,1:setLoaded}=(0,index_js_.useState)();(0,index_js_.useEffect)(()=>{/*  if (!loading && user) {
      // Redirect to a different page or show a different component
setLoaded(true)
    }
*/if(loading&&!user){setLoaded(false);}else{setLoaded(true);}},[user,loading]);const{0:offed,1:setoffed}=(0,index_js_.useState)(true);function Timed(){setoffed(false);JSON.stringify(sessionStorage.setItem('true',true));}(0,index_js_.useEffect)(()=>{setTimeout(Timed,7000);},[]);const{0:hideit,1:setHideit}=(0,index_js_.useState)(false);const{0:bu,1:setBu}=(0,index_js_.useState)(true);const{0:greeting,1:setGreeting}=(0,index_js_.useState)('');(0,index_js_.useEffect)(()=>{const currentHour=new Date().getHours();switch(currentHour){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:setGreeting('Good morning');break;case 12:case 13:case 14:case 15:case 16:case 17:setGreeting('Good afternoon');break;case 18:case 19:case 20:case 21:case 22:case 23:setGreeting(`Good Evening`);break;}},[]);/* if (!user) {
    return <Loadings />;
  }

 */ //document.querySelector(".footerrBod")
/*
  console.log(`$the object is as ${lag}`)
*/{/*   its && offed &&  

*/}console.log("the user loogged as ths",user);return/*#__PURE__*/index_js_default().createElement("div",{className:`bg-dark ${dark&&"darken"}`,style:{overflow:!onHide&&"hidden"}},/*#__PURE__*/index_js_default().createElement(Modal/* default */.Z,{animationDirection:"right",show:topRightModal,tabIndex:"-1",setShow:setTopRightModal},/*#__PURE__*/index_js_default().createElement(Modal/* default */.Z.Header,{position:"top-right",side:true},/*#__PURE__*/index_js_default().createElement(Modal/* default */.Z.Title,null,/*#__PURE__*/index_js_default().createElement(Modal/* default */.Z.Header,{className:"bg-dark text-white"},/*#__PURE__*/index_js_default().createElement(Modal/* default */.Z.Title,null,"Finish setting Account"),/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{color:"none",className:"btn-close btn-close-white",onClick:toggleShow})),/*#__PURE__*/index_js_default().createElement(Modal/* default */.Z.Body,null,/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-3 text-center"},/*#__PURE__*/index_js_default().createElement("i",{className:"fas fa-shopping-cart fa-4x text-info"})),/*#__PURE__*/index_js_default().createElement("div",{className:"col-12"},/*#__PURE__*/index_js_default().createElement("p",{style:{fontSize:"1rem",textAlign:"center"},className:"bold"},"Please Finish setting Up your Account!")))),/*#__PURE__*/index_js_default().createElement(Modal/* default */.Z.Footer,null,/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{color:"dark",onClick:()=>(0,gatsby_browser_entry.navigate)('/ProfilePage/Profile')},"yea sure!"),/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{outline:true,color:"danger",onClick:toggleShow},"Close"))))),/*#__PURE__*/index_js_default().createElement("div",{style:{overflow:!onHide&&"hidden"},className:isOpen||off||lag?'lay':'layedout'},/*#__PURE__*/index_js_default().createElement(Recive,null),/*#__PURE__*/index_js_default().createElement(Post["default"],{dark:dark}),user?its&&offed&&/*#__PURE__*/index_js_default().createElement(Welcome["default"],{user:user.email,greeting:greeting}):Ready?/*#__PURE__*/index_js_default().createElement(Accounts_ZenaAcc,{setReady:setReady,setVal:setVal}):/*#__PURE__*/index_js_default().createElement(ZenaAccSignUp_ZenaAccSignUp,{setReady:setReady,setVal:setVal}),user&&/*#__PURE__*/index_js_default().createElement(Navbar/* default */.Z,{setdark:setdark,setDark:setDark,setLig:setLig,userId:userId,navbars:navbars,setLoads:setLoads,hideit:hideit,setHideit:setHideit,setReady:setReady,light:light,setLight:setLight}),lag?/*#__PURE__*/index_js_default().createElement(Lang,{language:language,handleLanguageChange:handleLanguageChange}):" ",user&&children,user&&isBloged&&/*#__PURE__*/index_js_default().createElement(Footer,null)));}

/***/ }),

/***/ 80221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Loadings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91072);
function Loadings(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"glitch await","data-text":"glitch",style:{color:"black"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null," BlabZio ",props.head," Loading"));}

/***/ }),

/***/ 78931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(57076);
// EXTERNAL MODULE: external "/home/karim/Desktop/blabzio 1/node_modules/react/index.js"
var index_js_ = __webpack_require__(98078);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/styles/navbar.module.css
var navbar_module = __webpack_require__(4372);
// EXTERNAL MODULE: ./src/components/i18n.js + 5 modules
var i18n = __webpack_require__(12751);
// EXTERNAL MODULE: ./locales/en.json
var en = __webpack_require__(59748);
// EXTERNAL MODULE: ./src/pages/ProfilePage/ProfileSettup.js
var ProfileSettup = __webpack_require__(66844);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(91072);
// EXTERNAL MODULE: ./src/Accounts/useAuth.js
var useAuth = __webpack_require__(94405);
// EXTERNAL MODULE: ./node_modules/react-fontawesome/lib/index.js
var lib = __webpack_require__(75980);
;// CONCATENATED MODULE: ./src/styles/search.module.css
// Exports
var searchcontainer = "search-module--searchcontainer--85ab7";
var searchcontain = "search-module--searchcontain--b8d28";
var searchicon = "search-module--searchicon--c3ed1";
var searchbutton = "search-module--searchbutton--b5ef1";
var search_module_open = "search-module--open--0ebdc";
var i = "search-module--i--3b9ba";
var searchButton = "search-module--searchButton--e77d5";
var searchinput = "search-module--searchinput--a54a5";
var bfr = "search-module--bfr--cef80";
var gr = "search-module--gr--be88d";
var searchinputactive = "search-module--searchinputactive--b60ee";
var searchbuttonactive = "search-module--searchbuttonactive--1f550";
var searched = "search-module--searched--b8a75";
var searche = "search-module--searche--4d5c5";
var searchbutto = "search-module--searchbutto--152e5";
var OFF = "search-module--OFF--6bdae";
var ope = "search-module--ope--9d274";

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(70982);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Dropdown.js + 7 modules
var Dropdown = __webpack_require__(5717);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(76909);
// EXTERNAL MODULE: ./node_modules/primereact/autocomplete/autocomplete.esm.js
var autocomplete_esm = __webpack_require__(7730);
// EXTERNAL MODULE: ./src/components/PagesData.js
var PagesData = __webpack_require__(37489);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(59417);
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
// EXTERNAL MODULE: ./src/components/Layout.js + 11 modules
var Layout = __webpack_require__(51333);
;// CONCATENATED MODULE: ./src/components/SearchBar.js
const firebaseConfig7={apiKey:"AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",authDomain:"zenaitsworld.firebaseapp.com",projectId:"zenaitsworld",storageBucket:"zenaitsworld.appspot.com",messagingSenderId:"752059821465",appId:"1:752059821465:web:a892347312cbfad858f708",measurementId:"G-GEMHBSGYPY"};function SearchBar(props){app_dist/* default */.Z.initializeApp(firebaseConfig7,'app7');const app7=app_dist/* default */.Z.app('app7');/* Object search*/const{0:news,1:setNews}=(0,index_js_.useState)();const{0:da,1:setda}=(0,index_js_.useState)('Ent');const{0:off,1:setoff}=(0,index_js_.useState)(false);const{0:saved,1:setSaved}=(0,index_js_.useState)([]);function saveit(item){setSaved({...saved,[item.title]:!saved[item.title]});}function locale(ne){setda(ne);/* localStorage.setItem('data', JSON.stringify(ne)) */setoff(true);//localStorage.setItem('data', JSON.stringify(ne))
}const{0:newsValues,1:setnewsValues}=(0,index_js_.useState)([]);const{0:selectedCountry,1:setSelectedCountry}=(0,index_js_.useState)(null);const{0:filteredCountries,1:setFilteredCountries}=(0,index_js_.useState)(null);const search=event=>{let newsValues;if(news){newsValues=Object.values(news);}// Timeout to emulate a network connection
setTimeout(()=>{let _filteredCountries;if(!event.query.trim().length){_filteredCountries=[...newsValues];}else{_filteredCountries=newsValues.filter(e=>{return e.title.toLowerCase().startsWith(event.query.toLowerCase());});}setFilteredCountries(_filteredCountries);},250);};(0,index_js_.useEffect)(()=>{app7.database().ref('Entertainment').on('value',snapshot=>{setNews(snapshot.val());});},[]);/*Object Search */const{0:wid,1:setwid}=(0,index_js_.useState)();const{0:searchValue,1:setSearchValue}=(0,index_js_.useState)("");const isOpen=props.isOpe;const setIsOpen=props.setIsOpe;const handleSearchInputChanges=e=>{setSearchValue(e.target.value);};const resetInputField=()=>{setSearchValue("");};const callSearchFunction=e=>{e.preventDefault();console.log(searchValue);resetInputField();};const toggleSearc=e=>{setIsOpen(true);props.setBu(false);e.preventDefault();};const closed=e=>{setIsOpen(false);e.preventDefault();props.setBu(true);};const closes=e=>{setIsOpen(false);e.preventDefault();props.setBu(true);};const margi={marginRight:wid+'px'};const{0:searchData,1:setSearchData}=(0,index_js_.useState)('');const hideit=props.hideit;const setHideit=props.setHideit;if(typeof window!=='undefined'){hideit?document.body.style.overflow='hidden':document.body.style.overflow='';}const itemtemp=item=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"flex align-items-center"},/*#__PURE__*/index_js_default().createElement("img",{alt:item.title,src:item.urlToImage,style:{width:"18px"}}),/*#__PURE__*/index_js_default().createElement("div",null,item.title));};return/*#__PURE__*/index_js_default().createElement("div",{id:"sixseve",style:{justifyContent:"center"},className:isOpen?searchcontain:searchcontainer},/*#__PURE__*/index_js_default().createElement(PagesData/* default */.Z,{off:off,setoff:setoff,da:da}),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z,{className:hideit&&'hid',style:{width:hideit&&"100vw",margin:hideit&&"auto",position:hideit&&"relative",left:hideit&&"0",right:hideit&&"0",top:hideit&&"0"}},/*#__PURE__*/index_js_default().createElement("button",{className:"hidden-arrow searchbarico h-20 bord b-dark bg-none ",style:{border:"none",display:hideit&&"none",height:"fit-content",width:"fit-content",padding:"0 10px",background:"transparent",marginTop:"5px"},id:"navbarDropdown.MenuLink",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false",onClick:()=>props.setHideit(true)},props.HideSearch&&/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{className:"bgsearc fontSearch fotSize",style:{fontSize:"2.5rem",width:"1rem"},icon:free_solid_svg_icons/* faSearch */.wn1})),hideit&&/*#__PURE__*/index_js_default().createElement("div",{style:{marginLeft:"auto",marginRight:"auto"},className:"input-grou mt-2   bg-dark"},/*#__PURE__*/index_js_default().createElement("div",{style:{marginLeft:"auto",marginRight:"auto"},className:" display-flex justify-center center form-outline  mx-auto "},/*#__PURE__*/index_js_default().createElement("div",{className:"card flex justify-content-center w-100 styleAuto"},/*#__PURE__*/index_js_default().createElement(autocomplete_esm/* AutoComplete */.Q,{style:{position:"relative"},field:"title",value:selectedCountry,suggestions:filteredCountries,completeMethod:search,onChange:e=>setSelectedCountry(e.value),itemTemplate:itemtemp}),/*#__PURE__*/index_js_default().createElement("label",{style:{width:"fit-content",zIndex:"22",position:"absolute",left:"12%",top:"10px",height:"100%",padding:"0",border:'none'},className:"form-label fom itsfom",Htmlfor:"form1"},!selectedCountry?/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Item,{onClick:()=>setHideit(pre=>!pre),style:{width:"fit-content",padding:"0px"}}," ",/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{onClick:()=>setSelectedCountry(null),"aria-labelledby":"navbarDropdown.MenuLink","data-toggle":"navbarDropdown.MenuLink",style:{color:"greenyellow",width:"fit-content",height:"30px",cursor:"pointer",marginLeft:"px",marginTop:"px",fontSize:"1.4rem"},icon:free_solid_svg_icons/* faTimesCircle */.nYk})):/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{className:"ligh ",style:margi,icon:free_solid_svg_icons/* faSearch */.wn1}))),selectedCountry&&/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-8 col-lg-8 col-sm-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"rotate-img",onClick:()=>locale(selectedCountry&&selectedCountry.url)},/*#__PURE__*/index_js_default().createElement("img",{src:selectedCountry&&selectedCountry.urlToImage,alt:"thumb",className:"img-fluid",onClick:()=>locale(selectedCountry&&selectedCountry.url)})),/*#__PURE__*/index_js_default().createElement("h2",{className:"mt-3 text-primary mb-2",onClick:()=>locale(selectedCountry&&selectedCountry.url)},selectedCountry&&selectedCountry.title),/*#__PURE__*/index_js_default().createElement("p",{className:"fs-13 mb-1 text-muted",onClick:()=>locale(selectedCountry&&selectedCountry.url)},/*#__PURE__*/index_js_default().createElement("span",{className:"mr-2"},"Photo "),"10 Minutes ago"),/*#__PURE__*/index_js_default().createElement("button",{onClick:()=>selectedCountry&&saveit(selectedCountry),style:{color:saved[selectedCountry&&selectedCountry.title]?"tomato":"yellowgreen",border:"none"}},/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faDownload */.q7m,className:"savedit",style:{color:saved[selectedCountry&&selectedCountry.title]?"tomato":"yellowgreen"}})," ",saved[selectedCountry&&selectedCountry.title]?'saved':"save"," "),/*#__PURE__*/index_js_default().createElement("p",{className:"my-3 fs-15",onClick:()=>locale(selectedCountry&&selectedCountry.url)},selectedCountry&&selectedCountry.content),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"font-weight-600 fs-16 text-dark"},"Read more")))),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Menu,{className:` ${hideit&&'hi'} mt-6 ${props.light&&"backframe"}`,"aria-labelledby":"navbarDropdown.MenuLink mt-3"},/*#__PURE__*/index_js_default().createElement("hr",{className:"dropdown-divider"}),/*#__PURE__*/index_js_default().createElement("div",null))),hideit&&/*#__PURE__*/index_js_default().createElement(StyledBackdrop,{onClick:()=>setHideit(pre=>!pre)}));}/* harmony default export */ const components_SearchBar = (SearchBar);/*  form-control rounded     */const StyledBackdrop=styled_components_esm/* default */.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-out, visibility 0s 0.3s ease-out;
  z-index: 2;

  ${props=>!props.hideit&&`
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-out;
  `}
`;
// EXTERNAL MODULE: ./node_modules/primereact/button/button.esm.js
var button_esm = __webpack_require__(99403);
// EXTERNAL MODULE: ./node_modules/react-flags-select/build/index.esm.js
var index_esm = __webpack_require__(33987);
// EXTERNAL MODULE: ./node_modules/primereact/badge/badge.esm.js
var badge_esm = __webpack_require__(45795);
// EXTERNAL MODULE: ./node_modules/primereact/resources/themes/lara-light-indigo/theme.css
var theme = __webpack_require__(7827);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(87896);
// EXTERNAL MODULE: ./src/pages/WeatherComponent.js
var WeatherComponent = __webpack_require__(86951);
// EXTERNAL MODULE: ./src/components/Loadings.js
var Loadings = __webpack_require__(80221);
// EXTERNAL MODULE: ./src/pages/ProfilePage/Navbared.js
var Navbared = __webpack_require__(7043);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js + 4 modules
var fa_index_esm = __webpack_require__(91871);
;// CONCATENATED MODULE: ./src/components/SideDrawerNavbar.js
const SideDrawerNavbar=props=>{const{0:showDrawer,1:setShowDrawer}=(0,index_js_.useState)(false);const light=props.light;const setHideSearch=props.setHideSearch;const HideSearch=props.HideSearch;const setLight=props.setLight;const toggleDrawer=()=>{setShowDrawer(!showDrawer);setHideSearch(!HideSearch);};const{0:hiddenav,1:setHidenav}=(0,index_js_.useState)(false);function handleSethiddenav(isActive){if(isActive){setHidenav(true);}else{setHidenav(false);}}if(typeof window!=='undefined'){showDrawer?document.body.style.overflow='hidden':document.body.style.overflow='';}const location=(0,index_modern.useLocation)();let isBlogActive;if(location.pathname.startsWith('/news/Posted/Postit')){isBlogActive=true;}else if(location.pathname.startsWith('/profileComponents/Myprofile')){isBlogActive=true;}else{isBlogActive=false;}return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(fa_index_esm/* FaThLarge */.xyo,{style:{zIndex:"12"},onClick:toggleDrawer,className:"barsp ml1  color-light ml-5"}),/*#__PURE__*/index_js_default().createElement(StyledDrawer,{style:{zIndex:"12",backgroundColor:props.light?"#121212":"white"},show:showDrawer},/*#__PURE__*/index_js_default().createElement(StyledLogo,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",id:"logo",style:{color:" whitesmoke"}}," Blab",/*#__PURE__*/index_js_default().createElement("b",{style:{color:"purple",fontFamily:"sans-serif"}},"Z"),"io  ")),/*#__PURE__*/index_js_default().createElement(StyledNav,null,/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},"news")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Buisness"},"Business")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Sports"},"Sports")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Technology"},"Technology")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Entertainment"},"Entertainment")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Politics"},"Politics")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Trending"},"Trending")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Magazine"},"Magazine")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Art"},"Art"))),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/morenews/Travel"},"Travel")),/*#__PURE__*/index_js_default().createElement(StyledNavItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:({isActive})=>({onClick:()=>handleSethiddenav(isActive)}),className:`${isBlogActive&&navbar_module/* isActive */.zh} nav-link`,to:"/news/Posted/Postit"},"ALL POSTS")),/*#__PURE__*/index_js_default().createElement(StyledFoot,null,/*#__PURE__*/index_js_default().createElement(StyledNavList,null,"About"),/*#__PURE__*/index_js_default().createElement(StyledNavList,null,"privacy"),/*#__PURE__*/index_js_default().createElement(StyledNavList,null,"terms"),/*#__PURE__*/index_js_default().createElement(StyledNavList,null,"Contacts"),/*#__PURE__*/index_js_default().createElement(StyledNavList,null," \xA9 Blabzio 2022 - ",new Date().getFullYear()," "))),/*#__PURE__*/index_js_default().createElement(StyledFooter,{onClick:toggleDrawer},/*#__PURE__*/index_js_default().createElement(fa_index_esm/* FaChevronLeft */.bUI,null))),/*#__PURE__*/index_js_default().createElement(SideDrawerNavbar_StyledBackdrop,{show:showDrawer,onClick:toggleDrawer}));};const StyledDrawer=styled_components_esm/* default */.ZP.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  height: ;
  width: 250px;
  background:   ${props=>props.light?"#121212":"white"}  ;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  z-index: 11;
 overflow: auto; 
  @media (min-width: 1000px) {
    display: none;
  }

  ${props=>props.show&&`
    transform: translateX(0);
  `}
`;const SideDrawerNavbar_StyledBackdrop=styled_components_esm/* default */.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-out, visibility 0s 0.3s ease-out;
  z-index: 9;

  ${props=>props.show&&`
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-out;
  `}
`;const StyledLogo=styled_components_esm/* default */.ZP.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
   justify-content: center;
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 1em;
  margin-left: 2px;
  color: #fdfdf7;
  text-shadow: 1px 1px 1px black;
  `;const StyledNav=styled_components_esm/* default */.ZP.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: calc(100% - 60px - 50px);
  padding-left: 25%;
 
`;const StyledNavItem=styled_components_esm/* default */.ZP.li`
  padding: 1em;
  a {
    color:   ${props=>props.light?"silver":"#333"} ;
    text-decoration: none;
    font-weight: bold;
    display: block;
    text-shadow: 1.3px 1.2px 1.4px rgba(0.0.0.0.75);
    
   
  }
`;const StyledFoot=styled_components_esm/* default */.ZP.ul`
display: grid;
grid-template-columns: auto auto ;
  padding: 0;
  margin: 0;
background-color: black;
position: absolut;
bottom: 0;
left: 0;
right: 0;
font-size: 12px;
width:250px;
margin-left: -63px ;


list-style-type: none
`;const StyledNavList=styled_components_esm/* default */.ZP.li`
  padding: 1em;
  padding-left: 25px;
  a {
    color: white;
    text-decoration: none;
    font-weight: 100;
    color: gray;
    font-size: 12px;
    padding: 3px;
 list-style: none;
    } `;const StyledFooter=styled_components_esm/* default */.ZP.div`
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  color: #333;
  font-weight: bold;
  position: absolute;
  top:0px;
  left: 210px;
 
`;/* harmony default export */ const components_SideDrawerNavbar = (SideDrawerNavbar);
// EXTERNAL MODULE: ./src/images/proxy.jpeg
var proxy = __webpack_require__(83869);
// EXTERNAL MODULE: ./node_modules/primereact/avatar/avatar.esm.js
var avatar_esm = __webpack_require__(31001);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(2711);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
;// CONCATENATED MODULE: ./src/components/Navbar.js
//core
//import { DropdownButton } from 'react-bootstrap' fas;
// import { PrimeIcons } from 'primereact/api';
//import { async } from '@firebase/util';
//import Layout from './Layout';
const firebaseConfig2={apiKey:"AIzaSyAxMN4OQLOisY94cVCgR96o3-HoY0l6ZQk",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};const firebaseConfig9099={apiKey:"AIzaSyAlILFCEiJQQJsQB2a0uidx61r9zfEVLWc",authDomain:"notifications-a1743.firebaseapp.com",databaseURL:"https://notifications-a1743-default-rtdb.firebaseio.com",projectId:"notifications-a1743",storageBucket:"notifications-a1743.appspot.com",messagingSenderId:"624660139679",appId:"1:624660139679:web:a73fd504b5ba8e7b005caa",measurementId:"G-BCF42GY6H1"};const firebaseConfig01555={// your firebase config fas
apiKey:"AIzaSyALrSOduM9yvvHS_fR14WeCcgEhH5D8oCA",authDomain:"zenaglob.firebaseapp.com",databaseURL:"https://zenaglob-default-rtdb.firebaseio.com",projectId:"zenaglob",storageBucket:"zenaglob.appspot.com",messagingSenderId:"62411931925",appId:"1:62411931925:web:6581dc5950a7a2137fa91c",measurementId:"G-KDMQLLD16X"};function Navbar(props){const useDropdownMenu=props.useDropdownMenu;const{user,setUser,loading,signOut}=(0,useAuth/* useAuth */.a)();const{0:unfilstate,1:setUnfilstate}=(0,index_js_.useState)(0);app_dist/* default */.Z.initializeApp(firebaseConfig2,'app101');const app101=app_dist/* default */.Z.app('app101');const location=(0,index_modern.useLocation)();const{0:selectedCountry,1:setSelectedCountry}=(0,index_js_.useState)('GB');const handleCountrySelect=country=>{setSelectedCountry(country);};const ueryString=location.search;const params={};if(ueryString){ueryString.substring(1).split('&').forEach(param=>{const[key,value]=param.split('=');params[key]=decodeURIComponent(value);});}const ids=params.id||null;const dropdownReff=(0,index_js_.useRef)(false);const handleDropdownToggle=()=>{};let isBlogActive;let ups;if(location.pathname.startsWith('/news/Posted/Postit')){isBlogActive=true;}else if(location.pathname.startsWith('/profileComponents/Myprofile')){isBlogActive=true;}else if(location.pathname.startsWith(`/profileComponents/Profiles`)){isBlogActive=true;}else if(location.pathname.startsWith('/profileComponents/Messages')){isBlogActive=true;ups=true;}else if(location.pathname.startsWith('/profileComponents/Notifications')){isBlogActive=true;}else if(location.pathname.startsWith('/ProfilePage/'||0)){isBlogActive=true;}else{isBlogActive=false;ups=false;}let ismessage;if(location.pathname.startsWith('/profileComponents/Messages')){ismessage=true;}else{ismessage=false;}/*const [actives, setactive] = useState(false); */ /*
 const actives = props.actives;
 const  setactive = props.setactive;
*/const{0:conversations,1:setConversations}=(0,index_js_.useState)([]);const app015=app_dist/* default */.Z.initializeApp(firebaseConfig01555,'app01555');const app01555=app_dist/* default */.Z.app('app01555');(0,index_js_.useEffect)(()=>{if(!user)return;app01555.database().ref(`chats`).on('value',snapshot=>{if(!snapshot)return;const filteredChats=[];snapshot.forEach(childSnapshot=>{const chatValues=childSnapshot.val();const chatId=childSnapshot.key;const split=chatId.split('-');const chat=Object.values(chatValues);const otherUser=split.includes(user.uid);if(otherUser){filteredChats.push(chat);}});setConversations(filteredChats);console.log("this are the filtered chats",filteredChats);});},[user]);const{0:profileImg,1:setProfileImg}=(0,index_js_.useState)(proxy/* default */.Z);(0,index_js_.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app101.database().ref(`profile/${user.uid}/profileImg`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){console.log("Snapshot value is null or undefined");return;}// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();setProfileImg(val.profileImg);}else{setProfileImg(snapshot.val());}});}},[user]);function signout(){signOut();props.setReady(true);}const setLight=props.setLight;const light=props.light;(0,index_js_.useEffect)(()=>{aos_default().init();},[]);const{0:setup,1:setSetup}=(0,index_js_.useState)(1);const{0:language,1:setLanguage}=(0,index_js_.useState)('');const{0:favorites,1:setFavorites}=(0,index_js_.useState)([]);const{0:scroll,1:setScroll}=(0,index_js_.useState)(0);(0,index_js_.useEffect)(()=>{window.addEventListener('scroll',()=>{setScroll(window.scrollY);});},[]);const{0:val,1:setVal}=(0,index_js_.useState)(false);function handleSetActive(isActive){if(isActive){setVal(true);}else{setVal(false);}}const{0:hiddenav,1:setHidenav}=(0,index_js_.useState)(false);function handleSethiddenav(isActive){if(isActive){setHidenav(true);}else{setHidenav(false);}}const Fixed={position:scroll>=4&&"fixed",left:scroll>=4&&"0",right:scroll>=4&&"0",zIndex:scroll>=5&&"9",background:scroll>=4&&"black",marginTop:scroll>=7?"50px":"70px",fontSize:scroll>=5&&"1em",height:scroll>=5&&"40px",top:scroll>=4&&"20px"};const setfixed={position:"fixed",left:"0",right:"0",zIndex:"9",background:"black",marginTop:"70px",fontSize:"1em",height:"40px",top:"20px"};const Fixes={position:scroll>=280&&"fixed",left:scroll>=150&&"0",right:scroll>=150&&"0",zIndex:scroll>=150&&"9",background:scroll>=150&&"black",marginTop:scroll>=280?"70px":"70px",fontSize:scroll>=150&&"1em",height:scroll>=150&&"40px",top:scroll>=150&&"20px"};function isActives({isCurrent}){return isCurrent?{className:navbar_module/* isActived */.Qc}:null;}function handleSet(isActive){return isActive?{className:navbar_module/* isActive */.zh}:null;}function isActive({isCurrent}){return isCurrent?{className:navbar_module/* isActive */.zh}:null;}const MenuItem=({children,href})=>/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:href,className:"px-3 py-2 block hover:bg-gray-200"},children));const drawer={height:"100%",transition:"0.40s linear",overflow:"hidden",position:"fixe"};const users=[...Object.keys(conversations)].sort((a,b)=>{const aTime=conversations[a].slice().reverse()[0].timestamp;const bTime=conversations[b].slice().reverse()[0].timestamp;return bTime-aTime;});const messoLength=users&&users.map(userId=>{var _conversations$userId,_conversations$userId2,_conversations$userId3,_conversations$userId4;return((_conversations$userId=conversations[userId])===null||_conversations$userId===void 0?void 0:(_conversations$userId2=_conversations$userId.slice().reverse())===null||_conversations$userId2===void 0?void 0:(_conversations$userId3=_conversations$userId2[0])===null||_conversations$userId3===void 0?void 0:_conversations$userId3.receiver)===user.uid&&((_conversations$userId4=conversations[userId])===null||_conversations$userId4===void 0?void 0:_conversations$userId4.slice().filter(a=>a.receiver===user.uid).filter(a=>!a.read).length)||0;});const totalLength=messoLength.reduce((total,length)=>total+(length?length:0),0);function isActive({isCurrent}){return isCurrent?{className:navbar_module/* isActive */.zh}:null;}const bu=props.bu;const setBu=props.setBu;const off=props.off;const sty={zIndex:bu?"17":"2",position:props.isOpen?"absolute":"fixed"};const{0:isOpens,1:setIsOpens}=(0,index_js_.useState)(false);const dropdownRef=(0,index_js_.useRef)(null);const handleToggle=()=>{setIsOpens(!isOpens);};const handleClickOutside=event=>{if(dropdownRef.current&&!dropdownRef.current.contains(event.target)){setIsOpens(false);}};(0,index_js_.useEffect)(()=>{document.addEventListener("mousedown",handleClickOutside);return()=>{document.removeEventListener("mousedown",handleClickOutside);};},[dropdownRef]);const tsi=props.isOpen;if(tsi){console.log("ope");}const{0:isOpe,1:setIsOpe}=(0,index_js_.useState)(false);/*
function setIsOpen(){
  props.setIsOpen(true)


}

*/const toggleSearch=e=>{setIsOpe(true);e.preventDefault();props.setBu(false);};const{0:isToggled,1:setToggled}=(0,index_js_.useState)();const setIsOpen=props.setIsOpen;(0,index_js_.useEffect)(()=>{window.onload=function(){var element=document.querySelector('Links');element.className.List.add('scrollbar-visible');};},[]);const Zena="Zena";const{0:actives,1:setactive}=(0,index_js_.useState)(false);const{0:showd,1:setshowd}=(0,index_js_.useState)(false);const{0:Me,1:setMe}=(0,index_js_.useState)(false);const isOpen=props.isOpen;const{0:docker,1:setDocker}=(0,index_js_.useState)(false);const{0:defaults,1:setDefaults}=(0,index_js_.useState)({pre:"English",sets:"",asks:"a"});const{0:flags,1:setFlags}=(0,index_js_.useState)({eg:"",its:""});async function fakeit(event){const val=event.target.value;setDefaults(pr=>{return{...pr,asks:val,sets:pr.pre};});if(defaults.pre==='English'||defaults.asks==='English'||defaults.sets==='English'){setFlags(pre=>{return{...pre,eg:"united-kingdom"};});}if(val==='polski'){setFlags(pre=>{return{...pre,its:"poland"};});}else if(val==='中文'){setFlags(pre=>{return{...pre,its:"china"};});}else if(val==='日本語'){setFlags(pre=>{return{...pre,its:"japan"};});}else if(val==='Deutsch'){setFlags(pre=>{return{...pre,its:"germany"};});}else if(val==='Français'){setFlags(pre=>{return{...pre,its:"france"};});}else if(val==='Español'){setFlags(pre=>{return{...pre,its:"spain"};});}else if(val==='Русский'){setFlags(pre=>{return{...pre,its:"russia"};});}else if(val==='Arabic'){setFlags(pre=>{return{...pre,its:"saudi-arabia"};});}else if(val==='Português'){setFlags(pre=>{return{...pre,its:"portugal"};});}else if(val==='swahili'){setFlags(pre=>{return{...pre,its:"kenya"};});}else if(val==='Amharic'){setFlags(pre=>{return{...pre,its:"ethiopia"};});}}(0,index_js_.useEffect)(()=>{fake();},[flags]);async function fake(){if(user&&user.email){try{app101.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval){const userRef=app101.database().ref(`profile/${userId}`);userRef.update({// pre:   defaults.pre,
sets:defaults.sets,asks:defaults.asks,eg:flags.eg,its:flags.its});}}}).catch(error=>{console.log(error);});}catch(error){console.log(error);}}};const{0:thelight,1:setTheLight}=(0,index_js_.useState)(false);function Toggle(){// props.setdark(pre => !pre) props.dark
}const{0:loads,1:setLoads}=(0,index_js_.useState)(false);async function Toggled(){if(thelight){setTheLight(false);setToggled(thelight);setLight(thelight);}else{setTheLight(true);setToggled(thelight);setLight(thelight);}setLoads(true);try{const snapshot=await app101.database().ref('profile').orderByChild('email').equalTo(user.email).once("value");if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];const userRef=app101.database().ref(`profile/${userId}`);userRef.update({darkmode:thelight});setLoads(false);}else{}}catch(error){console.log(error);}}const{0:usernames,1:setUsernames}=(0,index_js_.useState)({useris:null,firstname:null,lastname:null,Location:null,DOB:null});(0,index_js_.useEffect)(()=>{if(user&&user.email){app101.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){setUsernames(prevState=>({...prevState,useris:snapshotval.username,firstname:snapshotval.firstname,lastname:snapshotval.lastname,Location:snapshotval.Location,DOB:snapshotval.dob}));}}});}else{// handle the case where user is not defined or does not have an email property
}},[user&&user]);(0,index_js_.useEffect)(()=>{let unfilstateCount=0;if(usernames.useris===null||usernames.useris.trim()===''){unfilstateCount++;}if(usernames.firstname===null||usernames.firstname.trim()===''){unfilstateCount++;}if(usernames.lastname===null||usernames.lastname.trim()===''){unfilstateCount++;}if(usernames.Location===null||usernames.Location.trim()===''){unfilstateCount++;}if(usernames.DOB===null||usernames.DOB.trim()===''){unfilstateCount++;}setUnfilstate(unfilstateCount);},[user]);(0,index_js_.useEffect)(()=>{if(user&&user.email){const databaseRef=app101;app101.database().ref('profile').orderByChild('email').equalTo(user.email).once('value',snapshot=>{if(snapshot&&snapshot.exists()){const userId=Object.keys(snapshot.val())[0];const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){setDefaults(pr=>{return{...pr,pre:snapshotval.pre?snapshotval.pre:pr.pre,asks:snapshotval.asks?snapshotval.asks:pr.asks,sets:snapshotval.sets?snapshotval.sets:pr.sets};});setFlags(pre=>{return{...pre,eg:snapshotval.eg?snapshotval.eg:pre.eg,its:snapshotval.its?snapshotval.its:pre.its};});}}});}else{}},[user]);const apps9=app_dist/* default */.Z.initializeApp(firebaseConfig9099,'app099');const app099=app_dist/* default */.Z.app('app099');const{0:notifications,1:setNotifications}=(0,index_js_.useState)([]);(0,index_js_.useEffect)(()=>{// Get the notifications for the current user ID
if(!user){return;}const notificationsRef=app099.database().ref(`users/${user.uid}/posts`);notificationsRef.on('value',snapshot=>{const notifications=[];snapshot.forEach(notifSnapshot=>{const posts=notifSnapshot.val();notifications.push(posts.cardid);});setNotifications(notifications);});return()=>{notificationsRef.off('value');};},[user,app099]);const counts={};notifications.forEach(notificationArra=>{if(Array.isArray(notificationArra)){notificationArra.forEach(notification=>{const message=notification.message;counts[message]=(counts[message]||0)+1;});}});const countsArray=Object.entries(counts);const{0:HideSearch,1:setHideSearch}=(0,index_js_.useState)(true);(0,index_js_.useEffect)(()=>{if(loading!==undefined&&!loading){setTimeout(()=>{if(loading!==undefined&&!loading){window.location.href="/";}},3000);}},[loading]);const ref=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{let app=app101;if(user&&user.email){const databaseRef=app101.database().ref('profile').orderByChild('email').equalTo(user.email).on('value',snapshot=>{if(snapshot&&snapshot.exists()){const userId=Object.keys(snapshot.val())[0];const snapshotval=snapshot.val()[userId];if(snapshotval){setTheLight(snapshotval.darkmode);setToggled(snapshotval.darkmode);setLight&&setLight(snapshotval.darkmode);props.setDark&&props.setDark(snapshotval.darkmode);props.setdark&&props.setdark(snapshotval.darkmode);}}});ref.current=databaseRef;if(user){}}else{setTheLight(false);}},[user]);if(!user){/*#__PURE__*/index_js_default().createElement(Loadings/* default */.Z,null);}return/*#__PURE__*/index_js_default().createElement("header",{style:{backgroundColor:"#141515"},id:"header"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"bg-dark mb-6 px-4",style:{paddingLeft:"20px",position:"fixed",zIndex:"10",left:"0",right:"0",top:"0",height:"70px"}},/*#__PURE__*/index_js_default().createElement("div",{className:"containe row"},/*#__PURE__*/index_js_default().createElement("div",{className:"logoww",style:{marginTop:"-20px",width:"fitContent"}},/*#__PURE__*/index_js_default().createElement("button",{href:"#!",className:"ms-md-2 "})),/*#__PURE__*/index_js_default().createElement("label",{className:"toggle-container"},/*#__PURE__*/index_js_default().createElement("input",{type:"checkbox",checked:isToggled,onChange:Toggled,className:"toggle-input"}),/*#__PURE__*/index_js_default().createElement("span",{className:"toggle-slider"}),/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{style:{color:isToggled?"grey":"rgb(252, 229, 112)"},icon:isToggled?free_solid_svg_icons/* faMoon */.DBF:free_solid_svg_icons/* faSun */.enB,className:`toggle-icon ${loads&&"bg-danger"}`})),/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex flex-row ps-3 pl-1 pt-1  ",style:{zIndex:props.hideit&&"1"},id:"logow"},/*#__PURE__*/index_js_default().createElement(fa_index_esm/* FaDragon */.wBX,{className:"dragon",icon:" fa-3x me-3 ",style:{fontSize:"1rem",color:"orange",divor:'#709085'}}),/*#__PURE__*/index_js_default().createElement("span",{className:"blabzio h1 fw-bold mb-0",style:{color:"whitesmoke",fontSize:"1.4rem"}},"Blab",/*#__PURE__*/index_js_default().createElement("b",{style:{color:"purple",fontFamily:"sans-serif"}},"Z"),"io ")),/*#__PURE__*/index_js_default().createElement("div",{className:"Langue mt2 mt-0 bg-none border-none",style:{cursor:"pointer",color:"silver",background:"none",border:"none",padding:"0"},tooltip:"Language",tooltipOptions:{className:'tooltips',position:'right'}},/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z,{className:"upuup bg-none text-shadow-none bgsmal "},/*#__PURE__*/index_js_default().createElement("div",{style:{height:"30px",marginTop:"40px",marginLeft:"10px",backgroundColor:"black",textShadow:"none",color:"black",boxShadow:'none'},className:"  dropdow show lagu mt-3"},/*#__PURE__*/index_js_default().createElement(index_esm/* default */.ZP,{defaultCountry:"GB",showSelectedLabel:false,selected:selectedCountry,onSelect:handleCountrySelect,className:"hidde bord bg-none text-shadow-none text-light",countries:["GB","VN","FR",'SA',"TZ","IT",'ES','CN','DE','ET'],customLabels:{GB:"English",SA:"العربية",VN:'dân_tộc_Việt_nam',TZ:"Swahili",IT:"Italian",DE:'dɔʏtʃ',FR:'français',ES:"español",CN:"汉语",ET:"አማርኛ"},searchable:true,alignOptionsToRight:true}))),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Menu,{className:light&&"backframe"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-90 m-auto",style:{listStyle:"none",padding:"0 20px",display:"flex",flexDirection:"column",justifyItems:"space-evenly",alignItems:"center",justifyContent:"center"}},/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Item,{className:`ww ${light&&"backframe"}`,style:{background:"black",display:"flex",flexDirection:"row",color:" black"}},/*#__PURE__*/index_js_default().createElement(index_esm/* default */.ZP,{defaultCountry:"GB",selected:selectedCountry,onSelect:handleCountrySelect,className:"center m-auto text-shadow-none",countries:["GB","VN","FR",'SA',"TZ","IT",'ES','CN','DE','ET'],customLabels:{GB:"English",SA:"العربية",VN:'dân_tộc_Việt_nam',TZ:"Swahili",IT:"Italian",DE:'dɔʏtʃ',FR:'français',ES:"español",CN:"汉语",ET:"አማርኛ"},searchable:true,alignOptionsToRight:true}),/*#__PURE__*/index_js_default().createElement("span",{style:{background:"black",textShadow:"none"},className:`dropdown-item ${light&&"color-dark"}`},/*#__PURE__*/index_js_default().createElement("input",{className:light&&"color-dark",style:{border:"none",background:"transparent"},type:"button","text-success":true,onClick:fakeit,value:selectedCountry||defaults.asks}),/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faCheck */.LEp,"text-success":true,className:"ms-2"})))))),props.hideit?'':/*#__PURE__*/index_js_default().createElement(components_SideDrawerNavbar,{HideSearch:HideSearch,setHideSearch:setHideSearch,light:light,setLight:setLight}),/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:"px",position:"absolute",right:"0",height:"fit-content",background:"transparent"},className:"itsrig"},/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:"-10px",float:'right',justifyContent:"flex-end",paddingLeft:"",alignItems:"cente",alignContent:"right",justifyItems:"right",marginBottom:"400px",width:"fit-content"},className:"bg-none d-flex  m-auto justify-right  rights lazim mTop"},/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:"1.7rem"},className:"d-flex d-sm "},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{marginRight:"10px"},to:"/news/Posted/Postit"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{style:{color:"silver",background:"none",border:"none",padding:"0"},className:" mt-2  border-none bg-none p-button-outlined",tooltip:"Posts",tooltipOptions:{className:'tooltips',position:'right'}},/*#__PURE__*/index_js_default().createElement(fa_index_esm/* FaBook */.Mp$,{className:"fotSize"}))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{style:{marginLeft:"20px"},to:"/news/Posted/Postit"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{style:{color:"silver",background:"none",border:"none",padding:"0"},className:" mt-2 bg-none border-none ",tooltip:"The Wall",tooltipOptions:{className:'tooltips',position:'right'}},/*#__PURE__*/index_js_default().createElement(fa_index_esm/* FaBuilding */.m17,{className:"fotSize"})))),!ups&&/*#__PURE__*/index_js_default().createElement(components_SearchBar,{HideSearch:HideSearch,setHideSearch:setHideSearch,hideit:props.hideit,setHideit:props.setHideit,light:light}),/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{id:"bbell",onClick:()=>(0,gatsby_browser_entry.navigate)('/profileComponents/Notifications'),outline:"none",className:"mt-4 navit ml-3 bellico ",style:{border:"none",borderRadius:"50%",height:"fit-content",margin:"",padding:"",background:"transparent",borderColor:"transparent"},icon:"pi pi-bell","aria-label":"Notification",severity:"secondary",tooltip:"Notifications",tooltipOptions:{className:'tooltips',position:'bottom'}},countsArray.length===0?"":/*#__PURE__*/index_js_default().createElement(badge_esm/* Badge */.C,{className:"baga",style:{color:"black",background:'white'},value:countsArray.length})),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z,{className:"upup bg-none text-shadow-none bgsmall "},/*#__PURE__*/index_js_default().createElement("div",{style:{height:"30px",marginTop:"40px",marginLeft:"10px",backgroundColor:"black",textShadow:"none",color:"black",boxShadow:'none'},className:"dropdow show lagu mt-3"},/*#__PURE__*/index_js_default().createElement(index_esm/* default */.ZP,{defaultCountry:"GB",selected:selectedCountry,onSelect:handleCountrySelect,className:"hidde bord bg-none text-shadow-none text-light",countries:["GB","VN","FR",'SA',"TZ","IT",'ES','CN','DE','ET'],customLabels:{GB:"English",SA:"العربية",VN:'Việt_nam',TZ:"Swahili",IT:"Italian",DE:'dɔʏtʃ',FR:'français',ES:"español",CN:"汉语",ET:"አማርኛ"},searchable:true,alignOptionsToRight:true}))),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Menu,{className:light&&"backframe"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-90 m-auto",style:{listStyle:"none",padding:"0 20px",display:"flex",flexDirection:"column",justifyItems:"space-evenly",alignItems:"center",justifyContent:"center"}},/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Item,{className:`ww ${light&&"backframe"}`,style:{background:"black",display:"flex",flexDirection:"row",color:" black"}},/*#__PURE__*/index_js_default().createElement(index_esm/* default */.ZP,{selected:selectedCountry,onSelect:handleCountrySelect,className:"center m-auto text-shadow-none",defaultCountry:"GB",countries:["GB","VN","FR",'SA',"TZ","IT",'ES','CN','DE','ET'],customLabels:{GB:"English",SA:"العربية",VN:'dân_tộc_Việt_nam',TZ:"Swahili",IT:"Italian",DE:'dɔʏtʃ',FR:'français',ES:"español",CN:"汉语",ET:"አማርኛ"},searchable:true,alignOptionsToRight:true}),/*#__PURE__*/index_js_default().createElement("span",{style:{background:"black",textShadow:"none"},className:`dropdown-item ${light&&"color-dark"}`},/*#__PURE__*/index_js_default().createElement("input",{className:light&&"color-dark",style:{border:"none",background:"transparent"},type:"button","text-success":true,onClick:fakeit,value:selectedCountry||defaults.asks}),/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faCheck */.LEp,"text-success":true,className:"ms-2"})))))),/*#__PURE__*/index_js_default().createElement("div",{className:"dropdown show"},/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z,{style:{marginBottom:"-50px",border:"none",height:"fit-content"},className:"profle mt-10 bg-l "},/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Toggle,{style:{border:"none"},className:" rounded-circle shadow-none bg-transparent b-none text-reset dropdown-toggle d-flex align-items-center hidden-arrow bord",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-expanded":"false"},/*#__PURE__*/index_js_default().createElement(avatar_esm/* Avatar */.q,{style:{width:"4.5rem"},className:`${profileImg?"bg":"flex align-items-center justify-content-center mr-2"} " p-overlay-badge"`,image:profileImg?profileImg:"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp",size:"large",shape:"circle",alt:"profile"},totalLength===0&&unfilstate===0||unfilstate===0&&totalLength===0?/*#__PURE__*/index_js_default().createElement("span",null):/*#__PURE__*/index_js_default().createElement(badge_esm/* Badge */.C,{value:totalLength>0&&unfilstate>0?totalLength===0?unfilstate:totalLength+unfilstate:totalLength,className:"p-1 bg-dark p-0 m-0 badgedP",severity:"danger"}))),!actives&&/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Menu,{style:{marginTop:"-3px"},onClick:()=>setactive(true),className:` w-fi widt  ${light&&"backframe"} `},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActives,to:"/profileComponents/Myprofile",className:"nav-link  ms-0"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{getProps:({isActives})=>({onClick:()=>handleSet(isActives)}),style:{background:light?"rgb(20,21,21)":"white"},type:"button",label:"MyProfile",icon:"pi pi-user",className:`  p-1 border-none text-dark  ${light?"btn-dark8":"btn-change8 "}`,severity:"none",badgeClassName:"p-badge-danger"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActives,to:"/profileComponents/Messages",className:"nav-link  ms-0"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{getProps:({isActives})=>({onClick:()=>handleSet(isActives)}),style:{background:light?"rgb(20,21,21)":"white"},type:"button",label:"Messages",icon:"pi pi-users",className:`  p-1 border-none text-dark  ${light?"btn-dark8":"btn-change8 "}`,severity:"none",badge:totalLength,badgeClassName:"p-badge-danger"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActives,to:"/profileComponents/MySaved",className:"nav-link  ms-0"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{getProps:isActives,style:{background:light?"rgb(20,21,21)":"white"},type:"button",label:"MySaved",icon:"pi pi-folder",className:`  p-1 border-none text-dark  ${light?"btn-dark8":"btn-change8 "}`,severity:"none"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActives,to:"/ProfilePage/ProfileSettup",className:"nav-link  ms-0"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{getProps:isActives,style:{background:light?"rgb(20,21,21)":"white"},type:"button",label:"Settings",icon:"pi pi-wrench",className:` p-1   border-none text-dark  ${light?"btn-dark8":"btn-change8 "}`,severity:"none",badge:unfilstate,badgeClassName:"p-badge-danger"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActives,className:"nav-link  ms-0"},/*#__PURE__*/index_js_default().createElement(button_esm/* Button */.z,{getProps:isActives,style:{background:light?"rgb(20,21,21)":"white"},onClick:()=>signout(),type:"button",label:"Logout",icon:"pi pi-sign-out",className:`  p-1 border-none text-dark  ${light?"btn-dark8":"btn-change8 "}`,severity:"none"}))))))))),/*#__PURE__*/index_js_default().createElement("nav",{"data-aos":scroll>=140&&'fade-up',style:val?Fixes:Fixed,className:`${isBlogActive&&'setfixed'} ${ups&&'setits'} ${ismessage&&"sizeB"} mt-6 navbar avbar color-dark navbar-expand-lg navbar-light displ mttt mt--3`},/*#__PURE__*/index_js_default().createElement("div",{id:`${isBlogActive&&'d-non'}`,style:{display:val?scroll>280:scroll>30&&"none"},className:"navbar-top"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex justify-content-between align-items-center"})),/*#__PURE__*/index_js_default().createElement("div",{className:"navbar-bottom"},/*#__PURE__*/index_js_default().createElement("div",{className:"navbot d-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("div",{style:{paddingRight:scroll>=140&&"20px"},className:"navbar-collapse justify-content-center collapse ",id:"navbarSupportedContent"},/*#__PURE__*/index_js_default().createElement("ul",{style:{marginTop:isBlogActive?'2px':scroll>=2?"2px":"-21px",textAlign:isBlogActive&&'center',margin:isBlogActive&&'auto',display:isBlogActive&&'flex',justifyContent:isBlogActive&&'center',alignItems:isBlogActive&&'center',justifyItems:isBlogActive&&'center'},className:"navbar-nav d-lg-flex justify-content-between align-items-center"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("button",{className:"navbar-close"},/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:"mdi mdi-close"}))),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item active"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:({isActive})=>({onClick:()=>handleSetActive(isActive)}),className:`${val&&navbar_module/* isActive */.zh} nav-link`,to:"/"},"NEWS")),!isBlogActive&&/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,"    ",/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Business"},"BUSINESS")),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Entertainment"},"ENTERTAINMENT")),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Technology"},"TECHNOLOGY")),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Sports"},"SPORTS")),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Politics"},"POLITICS"))),isBlogActive&&/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:({isActive})=>({onClick:()=>handleSethiddenav(isActive)}),className:`${isBlogActive&&navbar_module/* isActive */.zh} nav-link`,to:"/news/Posted/Postit"},"The Wall"))),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:({isActive})=>({onClick:()=>handleSethiddenav(isActive)}),className:`${isBlogActive&&navbar_module/* isActive */.zh} nav-link`,to:"/news/Posted/Postit"},"POSTS")),!isBlogActive&&/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Toggle,{style:{height:"fit-content",width:"fit-content",padding:"0px",background:"transparent",marginTop:scroll>=140?"6px":"-5px",border:"none"}},/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement("button",{style:{background:"transparent",border:"none"},className:"nav-link"},"More_news"))),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Menu,{className:!light&&"backframe"},/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Item,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Trending"},"TRENDING")),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Item,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Magazine"},"MAGAZINE")),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Item,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Art"}," ART")),/*#__PURE__*/index_js_default().createElement(Dropdown/* default */.Z.Item,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{getProps:isActive,className:"nav-link",to:"/morenews/Travel"},"TRAVEL"))))))))))),!isBlogActive&&/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:"-30px",height:"fit-content",padding:"5px",display:val?scroll>280:scroll>2&&"none"},className:`flesh flash-news-banner ${light&&"banner"}`},/*#__PURE__*/index_js_default().createElement("div",{className:"container ",style:{height:"fit-content",padding:"5px"}},/*#__PURE__*/index_js_default().createElement("div",{style:{height:"fit-content"},className:"d-lg-flex  align-items-center justify-content-between mt-4 flexits"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex align-items-center righted"},/*#__PURE__*/index_js_default().createElement("span",{className:`leftbadge badge badge-dark ${!light&&"darks"} mr-3`},"NEWS")),/*#__PURE__*/index_js_default().createElement(WeatherComponent["default"],{light:light})))));}/*


    <div classNameNameNameNameName={props.isOpen ? "" : nav.nav}>

        <nav>

          <h1 classNameNameNameNameName={nav.logo}> <Link to="/"> <Trans>Zena</Trans>   </Link> </h1>

          <SearchBar actives={actives} setBu={props.setBu} />

          <div id="liks" classNameNameNameNameName={nav.Links}>
            <Link getProps={isActive} to="/">
              <Trans>News</Trans>
            </Link>
            <Link getProps={isActive} to="/news/Business">
              <Trans>Business</Trans>

            </Link>
            <Link getProps={isActive} to="/news/Sports">
              <Trans>Sports</Trans>
            </Link>
            <Link getProps={isActive} to="/news/Technology">
              <Trans>Technology</Trans>
            </Link>
            <Link getProps={isActive} to="/news/Entertainment">
              <Trans>Entertainment</Trans>
            </Link>
          </div>
          {user && <Profile actives={actives} setactive={setactive} bu={props.bu} setBu={props.setBu} setIsOpen={props.setIsOpen} language={props.language} handleLanguageChange={props.handleLanguageChange} />}
          {/*

    <div className={nav.login}>
      <label className='profle' htmlFor='profle'>{props.names}</label>
      <select id="profle"  value= "val" name="profle">
<option value="Settings">Settings</option>
<option value="Language">choose Language</option>

<option value="Logout">Logout</option>

      </select>
      <Link to="/" >   <Trans></Trans></Link>
      
</div> 

*/ /*




 useEffect(() => {
  app4.auth().onAuthStateChanged(currentUser => {
    if (currentUser) {
      setUser(currentUser);
      database.ref(`users/${currentUser.uid}`).on('value', snap => {
      
     if(snap.val()){
        setProfileImg(snap.val().profileImg);
        setLanguage(snap.val().language);
setFavorites(snap.val().favorites);
     }      
});
    
    }
  });




}, []);


useEffect(() => {
  // Only run the effect if the user object is defined
  if (user) {
    app4.database().ref(`users/${user.uid}`).on('value', snapshot => {
      props.setLoaded(false)
      console.log(JSON.stringify(snapshot.val()))
      if (!snapshot.val()) {
        props.setLoaded(false)
        console.log("Snapshot value is null or undefined");
        return;
      }
   

      // check if snapshot.val() is an object
      if(typeof snapshot.val() === 'object'){
        const val = snapshot.val();
       setProfileImg(val.profileImg)
       props.setLoaded(false)
      } else {
setProfileImg(snapshot.val())
props.setLoaded(false)
      }
    });
  }



}, [user]);

*/

/***/ }),

/***/ 37489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PagesData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31593);
function PagesData(props){const{da}=props;//  const {setda} = props
const{setoff}=props;const{off}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:off?"bigie":"bigieoff"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"times",style:{zIndex:"20",textAlign:"right",color:"black",fontSize:"2.5rem",padding:"20px",cursor:"pointer"},onClick:()=>setoff(false)},"\xD7"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Big"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tim",style:{zIndex:"20",display:'none',extAlign:"right",color:"black",fontSize:"3.5rem",padding:"20px",cursor:"pointer",marginTop:"10px"},onClick:()=>setoff(false)},"\xD7"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Data__WEBPACK_IMPORTED_MODULE_1__["default"],{dats:da})));}

/***/ }),

/***/ 12751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ i18n)
});

// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 15 modules
var i18next = __webpack_require__(68376);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(91072);
// EXTERNAL MODULE: ./locales/en.json
var en = __webpack_require__(59748);
;// CONCATENATED MODULE: ./locales/am.json
const am_namespaceObject = JSON.parse('{"1":"፩","2":"፪","3":"፫","4":"፬","5":"፭","6":"፮","7":"፯","8":"፰","9":"፱","10":"፲","2022":"ዓመት ፲፱፻፺፱","2023":"፪0፪፫","Zena":"Zena","News":"ዜና","Business":"ንግድ","Sports":"ስፖርት","Technology":"ቴክኖሎጂ","Entertainment":"መዝናኛ","Loading":"እባክህ ቆይ","Sign_in":"አካውንት","Weather":"የአየር ሁኔታ","Trending":"አዝማሚያ","more_news":"ተጨማሪ ዜና","Previous":"ወደ ኋላ","Next":"ቀጣይ","Copyright":"የባለቤትነት መብት","Stock":"አክሲዮን","Favorites":"የኔ ምወዳድ","Logout":"ለመውጣት ","Language":"ቋንቋ","Amharic":"አማርኛ","Spanish":"ስፓኒሽ","Arabic":"ዐርብ","Swahili":"ስዋሂሊ","French":"ፈረንሳይ","English":"እንግሊዝኛ"}');
;// CONCATENATED MODULE: ./locales/es.json
const es_namespaceObject = JSON.parse('{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","2022":"2022","Zena":"Zena","News":"Noticia","Business":"Negocio","Sports":"Deporte","Technology":"Tecnología","Entertainment":"Entretener","Loading":"Carga","Sign_in":"Iniciar sesión","Weather":"el clima","Trending":"Tendencias","more_news":"Más_noticias","previous":"anterior","Next":"Próximo","Copyright":"Derechos_de_autor","Stock":" en_stock","Favorites":"favoritos","Logout":"Cerrar sesión","Language":"lenguaje","Amharic":"amárico","Spanish":"Español","Arabic":"árabe","Swahili":"suajili","French":"francés","English":"inglés"}');
;// CONCATENATED MODULE: ./locales/ar.json
const ar_namespaceObject = JSON.parse('{"1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦ ","7":"٧","8":"٨","9":"٩","10":"١٠","2022":"٢.٢٢","Zena":"Zena","News":"أخبار","Business":"الأعمال","Sports":"رياضي","Technology":"التقنية","Entertainment":"ترفيه","Loading":"تحميل","Sign_in":"تسجيل الدخول","Weather":"طقس","Trending":"تتجه","more_news":"المزيد من الأخبار","Previous":"سابق","Next":"مقبل","Copyright":"حقوق النشر","Stock":"رصيد","Favorites":"إعجاباتي","Logout":"تسجيل الخروج","Language":"لغة","Amharic":"أمهري","Spanish":"أسباني","Arabic":"عربي","Swahili":"سواحيلي","French":"فرنسي","English":"إنجليزي"}');
;// CONCATENATED MODULE: ./locales/sw.json
const sw_namespaceObject = JSON.parse('{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","2022":"2022","Zena":"Zena","News":"Habari","Business":"Biashara","Sports":"Michezo","Technology":" Teknolojia ","Entertainment":"Burudani","Loading":"Subiri","Sign_in":"Jiwasilishe","Weather":"Hali_ya_hewa","Trending":"Mwenendo","more_news":"Habari_Zaidi","Previous":"Iliyotangulia","Next":"Ijayo","Copyright":"Hakimiliki","Favorites":"vipendwa","Logout":"kuondoka","Language":"Lugha","Stock":"Hisa","Amharic":"kiamharic","Spanish":"kihispania","Arabic":"Kiarabu","Swahili":"Kiswahili","French":"KiFaransa","English":"Kingereza"}');
;// CONCATENATED MODULE: ./locales/fr.json
const fr_namespaceObject = JSON.parse('{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","2022":"2022","Zena":"Zena","News":"Nouvelles","Business":"Entreprise","Sports":"Sportives","Technology":"Technologie","Entertainment":"Divertissement ","Loading":"Chargement","Sign_in":"S\'identifier","Weather":"Temps","Trending":"S\'orientent","more_news":"Plus_nouvelles","Previous":"précédent","Next":"prochain","Copyright":"droits d\'auteur","Favorites":"Favoris","Logout":"déconnexion","Language":"Langue","Amharic":"amharique","Spanish":"espagnol","Arabic":"arabe","Swahili":"swahili","French":"Français","English":"anglais","Stock":"Stock"}');
;// CONCATENATED MODULE: ./src/components/i18n.js
i18next/* default.use */.ZP.use(es/* initReactI18next */.Db).init({lng:'en',debug:true,fallbackLng:'en',detection:{order:['querystring','cookie','localStorage','navigator','htmlTag'],lookupQuerystring:'lng',lookupCookie:'i18next',lookupLocalStorage:'i18nextLng',caches:['localStorage','cookie']},resources:{am:{translation:am_namespaceObject},en:{translation:en},es:{translation:es_namespaceObject},ar:{translation:ar_namespaceObject},sw:{translation:sw_namespaceObject},fr:{translation:fr_namespaceObject}}});/* harmony default export */ const i18n = (i18next/* default */.ZP);

/***/ }),

/***/ 31593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Language)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12751);
/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59748);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91072);
function Language(props){const{language,handleLanguageChange}=props;const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();const{0:F,1:setF}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"LangContain"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{id:"la"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select",{className:F?'selected':'',value:language,onChange:handleLanguageChange},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{style:{color:"red",fontSize:"2rem"},className:'option'},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{color:"red"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC,null,"Language"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{className:'option',value:"en"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC,null,"English")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"am"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC,null,"Amharic")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"es"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC,null,"Spanish")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"ar"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC,null,"Arabic")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"sw"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC,null,"Swahili")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"fr"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .Trans */ .cC,null,"French"))))));}

/***/ }),

/***/ 19819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 7043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbared)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94405);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83869);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79286);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57076);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99403);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78931);
//import Language from '../Language';
//import { useTranslation , Trans} from 'react-i18next';
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function Navbared(props){firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app019');const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app019');const{user,setUser,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();const auth=app4.auth();const database=app4.database();const{0:language,1:setLanguage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:favorites,1:setFavorites}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const{0:profileImg,1:setProfileImg}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);const setDarks=props.setDarks;const actives=props.actives;/*

  useEffect(() => {
    app4.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        database.ref(`users/${currentUser.uid}`).on('value', snap => {
        
       if(snap.val()){
          setProfileImg(snap.val().profileImg);
          setLanguage(snap.val().language);
  setFavorites(snap.val().favorites);
       }      
});
      
      }
    });



 
  }, []);

*/const{0:dark,1:setdark}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user&&user.email){app4.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){snapshotval.darkmode&&setDarks(snapshotval.darkmode);snapshotval.darkmode&&setdark(snapshotval.darkmode);}}});}else{// handle the case where user is not defined or does not have an email property
}},[user&&user]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app4.database().ref(`profiles/${user.uid}`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){console.log("Snapshot value is null or undefined");return;}// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();setProfileImg(val.profileImg);}else{setProfileImg(snapshot.val());}});}},[user]);console.log(`ìtsb ${profileImg}`);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let vf=document.getElementById('#va');user&&vf.addEventListener('mouseover',()=>{alert('h');document.querySelector('.profileimg').classNameNameList.add('propo');});},[]);const handleLogout=async()=>{try{signOut();setUser(null);sessionStorage.clear();}catch(error){console.error(error);}};const handleProfileImgChange=e=>{const file=e.target.files[0];const reader=new FileReader();reader.onloadend=()=>{setProfileImg(reader.result);app4.database().ref(`users/${user.uid}`).set({profileImg:reader.result});};reader.readAsDataURL(file);};/*
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

  */const bu=props.bu;const setBu=props.setBu;function active(){props.setactive(true);setBu(false);}function setActive(){props.setactive(false);setBu(true);}/* margin-top:20px;
background-color:#f2f6fc;
color:#69707a;*/function isActive({isCurrent}){return isCurrent?{className:'active papol '}:null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .z,{className:"pi p-1 pi-home flex row bg-dark",onClick:()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_4__.navigate)('/')},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"p-1"},"Zena")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"container-xl px-4 mt-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav",{className:"nav nav-borders"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link,{getProps:isActive,to:"/ProfilePage/ProfileSettup",className:"nav-link  ms-0"},"Profile "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link,{getProps:isActive,to:"/ProfilePage/Billing",className:"nav-link"}," Billing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link,{getProps:isActive,to:"/ProfilePage/Security",className:"nav-link"},"Security"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link,{getProps:isActive,to:"/ProfilePage/Notifications",className:"nav-link"},"Notifications")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr",{className:"mt-0 mb-4"})));}

/***/ }),

/***/ 66844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Profiles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94405);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83869);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57076);
/* harmony import */ var _Navbared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7043);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40424);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74420);
/* harmony import */ var primereact_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61504);
/* provided dependency */ var fetch = __webpack_require__(31515);
//import { initializeApp } from "firebase/app";
//import Language from '../Language';
//import { useTranslation , Trans} from 'react-i18next';
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};const firebaseConfig222={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};function Profiles(props){const app3=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app0133');const app334=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig222,'app0144');const toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app0133');const app33=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app0144');const{user,setUser,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();const{0:email,1:setEmail}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:userId,1:setUserId}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:Editable,1:setEditable}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:usernames,1:setUsernames}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({useris:null,firstname:null,lastname:null,DOB:null,Location:null});const{0:vals,1:setVals}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['']);const{0:Db,1:setDb}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();const{0:fname,1:setFname}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();const{0:lname,1:setLname}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();const{0:locate,1:setLocate}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();const va=vals.length;const{0:clear,1:setClear}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:Darks,1:setDarks}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user&&user.email){app4.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){snapshotval.darkmode&&setDarks(snapshotval.darkmode);setUsernames(pre=>{return{...pre,useris:snapshotval.username,firstname:snapshotval.firstname,lastname:snapshotval.lastname,Location:snapshotval.Location,DOB:snapshotval.dob};});}}});}else{// handle the case where user is not defined or does not have an email property
setUsernames('anoonymous');}},[user&&user]);const{0:unfilstate,1:setUnfilstate}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let unfilstateCount=0;if(usernames.useris===null||usernames.useris.trim()===''){unfilstateCount++;}if(usernames.firstname===null||usernames.firstname.trim()===''){unfilstateCount++;}if(usernames.lastname===null||usernames.lastname.trim()===''){unfilstateCount++;}if(usernames.Location===null||usernames.Location.trim()===''){unfilstateCount++;}if(usernames.DOB===null||usernames.DOB.trim()===''){unfilstateCount++;}setUnfilstate(unfilstateCount);},[user]);async function dataset(){const normalizedUsername=usernames.useris;const normalizedFirstname=usernames.firstname;const normalizedLastname=usernames.lastname;const normalizedLocation=usernames.Location;const normalizedDOB=usernames.DOB;try{// Check if a user with that username already exists in the database
const snapshot1=await app4.database().ref('profile').orderByChild('username').equalTo(normalizedUsername).once('value');if(snapshot1.exists()){// A user with that username already exists
// Prompt the user to choose a different username
toast.current.show({severity:'error',summary:'Error',detail:'username already exists. Please choose another one.',life:3000});const snapshot2=await app33.database().ref('comments/cards').orderByChild('user').equalTo(normalizedUsername).once('value');if(snapshot2.exists()){toast.current.show({severity:'error',summary:'Error',detail:'username already exists. Please choose another one.',life:3000});}}else{const userRef=app4.database().ref('profile/'+user.uid);userRef.update({username:normalizedUsername,firstname:normalizedFirstname,lastname:normalizedLastname,Location:normalizedLocation,dob:normalizedDOB,email:user.email});toast.current.show({severity:'success',summary:'Success',detail:'you succesfully updated your details',life:3000});}}catch(error){console.log(error);toast.current.show({severity:'error',summary:'Error',detail:'Please Fill all the inputs',life:5000});}}/*


if(user && user.email){
  app4.database().ref('prof').orderByChild('email').equalTo( user && user.email).once('value')
  .then((snapshot) => {
    if (snapshot.exists()) {
      const snapshotval = snapshot.val();
      if(snapshotval && snapshotval.username){
        setUsernames(snapshotval.username);
    }
    }
    })

  }

*/ /*
  useEffect(()  => {
  
 const uname= document.querySelector('.uname').value ;

    const lname = document.querySelector('.lname').value;
    const fname   = document.querySelector('.fname').value;
    const DOB = document.querySelector('.DOB').value;
    const Location = document.querySelector('.Location').value;


  
    if (uname && uname === '' ) {
     setVals(pre =>   [...pre, "i" ] )  
    }  
    if (Db === '') {
      setVals(pre =>   [...pre, "i"] )  
    }  
  
     if (fname === '') {
      setVals(pre =>   [...pre, "i"] )  
    }  
     if (lname === '') {
      setVals(pre =>   [...pre, "i"] )  
    }  
  

     if (locate === '') {
      setVals(pre =>   [...pre, "i"] )  
    }  


     

  }, [])
  

   */ /*const [actives, setactive] = useState(false); */ /*
 const actives = props.actives;
 const  setactive = props.setactive;
*/const auth=app4.auth();const database=app4.database();const{0:language,1:setLanguage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:favorites,1:setFavorites}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const{0:profileImg,1:setProfileImg}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{app4.auth().onAuthStateChanged(currentUser=>{if(currentUser){setUser(currentUser);database.ref(`users/${currentUser.uid}`).on('value',snap=>{if(snap.val()){setProfileImg(snap.val().profileImg);setLanguage(snap.val().language);setFavorites(snap.val().favorites);}});}});},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app4.database().ref(`profile/${user.uid}/profileImg`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){console.log(" value is null or undefined");return;}// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();setProfileImg(val.profileImg);}else{setProfileImg(snapshot.val());}});}},[user]);console.log(`ìtsb ${profileImg}`);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let vf=document.getElementById('#va');user&&vf.addEventListener('mouseover',()=>{alert('h');document.querySelector('.profileimg').classNameNameList.add('propo');});},[]);const handleLogout=async()=>{try{signOut();setUser(null);sessionStorage.clear();}catch(error){console.error(error);}};const handleProfileImgChange=async event=>{const file=event.files[0];const reader=new FileReader();let blob=await fetch(file.objectURL).then(r=>r.blob());reader.onloadend=()=>{setProfileImg(reader.result);app4.database().ref('profile/'+user.uid).update({profileImg:reader.result});toast.current.show({severity:'info',summary:'Info',detail:'Dp updated',life:3000});};reader.readAsDataURL(blob);};/*

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
*/const myUploader=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);function active(){props.setactive(true);props.setBu(false);}function setActive(){props.setactive(false);props.setBu(true);}/* margin-top:20px;
background-color:#f2f6fc;
color:#69707a;*/const actives=props.actives;const setBu=props.setBu;const bu=props.bu;function isActive({isCurrent}){return isCurrent?{className:'active'}:null;}/*     {user && !actives && <Profile  actives={actives} setactive={setactive} bu={props.bu} setBu={props.setBu} setIsOpen={props.setIsOpen} language={props.language} handleLanguageChange={props.handleLanguageChange} />}
                               {user && !actives && <Profile  actives={actives} setactive={setactive} bu={props.bu} setBu={props.setBu} setIsOpen={props.setIsOpen} language={props.language} handleLanguageChange={props.handleLanguageChange} />}
   */const rejectFunc=()=>{toast.current.show({severity:'warn',summary:'Rejected',detail:'you canceled',life:3000});};const confirm=()=>{(0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__/* .confirmDialog */ .V)({message:'Do you wish to proceed ?',header:'Confirm',icon:'pi pi-exclamation-triangle',accept:()=>dataset(),reject:()=>rejectFunc()});};/*

{
if(user){
return(
    <div style={{alignItems:"center", justifyItems: "center", paddingTop: "25%"}} className='card flex justify-content-center align-content-center '>
         <ProgressSpinner className='text-dark'> <h1>zena </h1> </ProgressSpinner> </div>
{/* style={{width: '50px', height: '50px'}}  strokeWidth="8" fill="var(--surface-ground)" animationDuration= ".5s" */ /*
)
}

*/return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`bg-dark ${Darks&&"darken"}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_8__/* .Toast */ .F,{ref:toast}),!user&&!actives&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:profileImg,className:"round dr mt-2",style:{borderRadius:"50%"},height:"50",alt:"profile"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{height:"100%",overflowY:"scroll",background:Darks&&"#141515"},className:' Bgg'},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"container-xl px-4 mt-4 ",style:{color:Darks&&"silver",backgroundColor:Darks?"#121212":"white"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbared__WEBPACK_IMPORTED_MODULE_4__["default"],{Darks:Darks,setDarks:setDarks}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row",style:{background:Darks&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-xl-4",style:{background:Darks&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card mb-4 mb-xl-0",style:{background:Darks&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-header papol"},"Profile Picture"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-body text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{style:{width:"30%",height:'50%',borderRadius:"30%"},className:"img-account-profil  mb-2",src:profileImg,alt:""}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"small font-italic text-muted mb-4 gree",style:{color:"green"}},"JPG or PNG no larger than 5 MB"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_fileupload__WEBPACK_IMPORTED_MODULE_9__/* .FileUpload */ .p,{maxFileSize:1000000,ref:myUploader,chooseLabel:"change Dp",uploadLabel:"upload",cancelLabel:"Cancel",mode:"basic",name:"upload",url:"/api/upload",accept:"image/*",customUpload:true,uploadHandler:handleProfileImgChange}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-xl-8",style:{background:Darks&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card mb-4",style:{background:Darks&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-header papol"},"Account Details  fill ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"text-danger bold"},unfilstate)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-body",style:{background:Darks&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-3 row ",style:{background:Darks&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:`small mb-1   ${usernames.useris==null&&'controlform1 text-danger'}`,for:"inputUsername"},"Username "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:` uname form-control ${usernames.useris==null&&'controlform text-danger'}`,id:"inputUsername",type:"text",placeholder:"Enter your username",value:usernames.useris,onChange:event=>setUsernames(pre=>{return{...pre,useris:event.target.value};})})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:`small mb-1   ${usernames.email&&'controlform1 text-danger'}`,for:"inputEmailAddress"},"Email address"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:` form-control ${usernames.email&&'controlform text-danger'}`,id:"inputEmailAddress",type:"email",placeholder:"Enter your email address",value:user&&user.email,disabled:true}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row gx-3 mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:`small mb-1   ${usernames.firstname==null&&'controlform1 text-danger'}`,for:"inputFirstName"},"First name "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:`fname form-control ${usernames.firstname==null&&'controlfor text-danger'}`,id:"inputFirstName",type:"text",placeholder:"Enter your first name",value:usernames.firstname,onChange:event=>setUsernames(pre=>{return{...pre,firstname:event.target.value};})})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:`small mb-1   ${usernames.lastname==null&&'controlform1 text-danger'}`,for:"inputLastName"}," Last name "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:`lname form-control ${usernames.lastname==null&&'controlform text-danger'}`,id:"inputLastName",type:"text",placeholder:"Enter your last name",value:usernames.lastname,onChange:event=>setUsernames(pre=>{return{...pre,lastname:event.target.value};})}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row gx-3 mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:` small mb-1 ${usernames.Location==null&&'controlform text-danger'}`,for:"inputLocation"},"Location"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:`Location form-control ${usernames.Location==null&&'controlform text-danger'}`,id:"inputLocation",type:"text",placeholder:"Enter your location",value:usernames.Location&&usernames.Location,onChange:event=>setUsernames(pre=>{return{...pre,Location:event.target.value};}),required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-md-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:` small mb-1 ${usernames.DOB==null&&'controlform text-danger'}`,for:"inputBirthday"},"Birthday"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{className:`DOB form-control ${usernames.DOB==null&&'controlform text-danger'}`,id:"inputBirthday",type:"text",name:"birthday",placeholder:"Enter your birthday",value:usernames.DOB&&usernames.DOB,onChange:event=>setUsernames(pre=>{return{...pre,DOB:event.target.value};})}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:confirm,icon:"pi pi-check",className:"btn btn-primary",type:"button"},"Save changes"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmDialog */ .Q,null)))))))));}const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"ProfileSetup");{/*
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

/***/ }),

/***/ 86951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var fetch = __webpack_require__(31515);
const WeatherComponent=props=>{const{0:location,1:setLocation}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({latitude:null,longitude:null,country:null,city:null});const{0:temperature,1:setTemperature}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:date,1:setDate}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:weatherCondition,1:setWeatherCondition}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const fetchWeatherData=async()=>{try{const{latitude,longitude}=location;if(latitude&&longitude){const response=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true`);if(response.ok){const data=await response.json();const hourlyData=data.hourly;setTemperature(hourlyData.temperature_2m[0]);setWeatherCondition(hourlyData.weathercode[0]);setDate(hourlyData.time[0]);console.log(data);console.log("this is the data",hourlyData.weathercode[0]);}else{console.error('Failed to fetch weather data');}}}catch(error){console.error(error);}finally{setLoading(false);}};fetchWeatherData();},[location]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{fetch('https://ipapi.co/json/').then(response=>response.json()).then(data=>{console.log("this is your cords",data);setLocation({latitude:data.latitude,longitude:data.longitude,country:data.country,city:data.city.slice(0,2)});}).catch(error=>{console.error('Error:',error);});},[]);const light=props.light;if(loading){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,"Loading...");}const formattedDate=date?new Date(date).toLocaleDateString():'';const weatherIcon=getWeatherIcon(weatherCondition);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"weather",style:{display:'flex',color:'red'}},temperature&&date&&weatherIcon?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{style:{display:"flex",listStyle:"none"},className:"bodweather pl-1 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{marginTop:"-5px",fontFamily:"fantasy",color:"orange"},className:`pforcast pweather mb-0 color-dark ${light?"color-light":"#141515"}`},"Forecast"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"pr-2 pl-3 pweather"},formattedDate,"/  ")," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:" pweather pr-2"},temperature,"\xB0C  "),"  ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"pr-3 pweather"},weatherIcon," "),"  ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"pr-1 pweather"}," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"locat"},"Location:")," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"locat"},location.country,",")," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"locat"},location.city)," ")):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-danger pweather"},"24\xB0C"));};// Helper function to get the weather icon based on the weather code
const getWeatherIcon=weatherCode=>{const weatherIcons={0:'⛈️',1:'⛈️',2:'⛈️',3:'⛈️',4:'⛈️',5:'⛈️',6:'⛈️',7:'⛈️',8:'⛈️',9:'❄️',10:'❄️',11:'❄️',12:'⛈️',13:'⛈️',14:'⛈️',15:'🌬️',16:'🌬️',17:'🌬️',18:'🌬️',19:'🌬️',20:'☁️',21:'☁️',22:'⛈️',23:'⛈️',24:'⛈️',25:'⛈️',26:'⛈️',27:'⛈️',28:'⛈️',29:'⛈️',30:'⛈️',31:'⛈️',32:'⛈️',33:'⛈️',34:'⛈️',35:'❄️',36:'❄️',37:'❄️',38:'❄️',39:'❄️',40:'⛈️',41:'⛈️',42:'⛈️',43:'⛈️',44:'⛈️',45:'⛈️',46:'⛈️',47:'⛈️',48:'⛈️',49:'⛈️',50:'⛈️',51:'⛈️',52:'⛈️',53:'⛈️',54:'⛈️',55:'⛈️',56:'⛈️',57:'⛈️',58:'⛈️',59:'⛈️',60:'❄️',61:'☁️',62:'❄️',63:'❄️',64:'⛈️',65:'⛈️',66:'⛈️',67:'⛈️',68:'⛈️',69:'⛈️',70:'⛈️',71:'⛈️',72:'⛈️',73:'⛈️',74:'⛈️',75:'⛈️',76:'⛈️',77:'⛈️',78:'⛈️',79:'⛈️',80:'⛈️',81:'⛈️',82:'⛈️',83:'⛈️',84:'⛈️',85:'⛈️',86:'🌬️',87:'⛈️',88:'⛈️',89:'⛈️',90:'⛈️',91:'⛈️',92:'⛈️',93:'⛈️',94:'⛈️',95:'⛈️',96:'⛈️',97:'⛈️',98:'⛈️',99:'⛈️',100:'⛈️',101:'⛈️',102:'⛈️',103:'❄️',104:'❄️',105:'❄️',106:'⛈️',107:'⛈️',108:'⛈️',109:'🌬️',110:'🌬️',111:'🌬️',112:'⛈️',113:'⛈️',114:'⛈️',115:'⛈️',116:'⛈️',117:'⛈️',118:'⛈️',119:'⛈️',120:'⛈️',121:'🌬️',122:'🌬️',123:'🌬️',124:'🌬️',125:'🌬️',126:'🌬️',127:'⛈️',128:'⛈️',129:'⛈️',130:'⛈️',131:'⛈️',132:'⛈️',133:'⛈️',134:'⛈️',135:'⛈️',136:'⛈️',137:'⛈️',138:'⛈️',139:'⛈️',140:'⛈️',141:'⛈️',142:'⛈️',143:'⛈️',144:'⛈️',145:'⛈️',146:'❄️',147:'❄️',148:'❄️',149:'⛈️',150:'⛈️',151:'⛈️',152:'⛈️',153:'⛈️',154:'⛈️',155:'❄️',156:'❄️',157:'❄️',158:'❄️',159:'❄️',160:'❄️',161:'⛈️',162:'⛈️',163:'⛈️',164:'⛈️',165:'⛈️',166:'⛈️',167:'⛈️',168:'⛈️',169:'⛈️',170:'⛈️',171:'⛈️',172:'⛈️',173:'⛈️',174:'⛈️',175:'⛈️',176:'⛈️',177:'⛈️',178:'⛈️',179:'⛈️',180:'⛈️',181:'⛈️',182:'⛈️',183:'⛈️',184:'⛈️',185:'⛈️',186:'⛈️',187:'⛈️',188:'⛈️',189:'⛈️',190:'⛈️',191:'⛈️',192:'⛈️',193:'⛈️',194:'⛈️',195:'⛈️',196:'⛈️',197:'⛈️',198:'⛈️',199:'⛈️'};return weatherIcons[weatherCode]||'';};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherComponent);

/***/ }),

/***/ 85191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94405);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91871);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75159);
const firebaseConfig2={apiKey:"AIzaSyAxMN4OQLOisY94cVCgR96o3-HoY0l6ZQk",authDomain:"zenanewstoday.firebaseapp.com",projectId:"zenanewstoday",storageBucket:"zenanewstoday.appspot.com",messagingSenderId:"1042837214412",appId:"1:1042837214412:web:ac14f71cb3f41e21719e69",measurementId:"G-V8VEEWMFR9"};function Welcome(props){const{user,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();const{0:usernames,1:setUsernames}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app1');const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.app('app1');(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user&&user.email){app4.database().ref('prof').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){setUsernames(snapshotval.username);}}});}else{// handle the case where user is not defined or does not have an email property
setUsernames('anoonymous');}},[user&&user]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:props.greeting==="Good morning"||props.greeting==="Good afternoon"?"welcomePage":"welcomePageU"},user&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{id:"head1",class:"header"},props.greeting," ",props.greeting==="Good morning"||props.greeting==="Good afternoon"?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaSun */ .Mei,{style:{color:"#FCE570",fontSize:'4rem'}}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaMoon */ .TLr,{style:{color:"#F6F1D5"}})," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{id:"head2",class:"header"},"it's ",new Date().getHours()+':'+(new Date().getMinutes()<10?'0':'')+(new Date().getMinutes()+1)+" "+(new Date().getHours()<12?"Am":"Pm")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{id:"head3",class:"header"},"Welcome Back ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{color:"rgb(61, 30, 20)"}},user&&usernames)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x1"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x3"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x5"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x6"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x7"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{class:"light x9"}))," ");}

/***/ }),

/***/ 92265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const firebaseConfig9={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};const firebaseConfig010={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};function Post(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null);}const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"posts");

/***/ }),

/***/ 13418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Postit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51333);
/* harmony import */ var _components_PagesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37489);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2711);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75159);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9016);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67815);
/* harmony import */ var _components_Loadings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80221);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87896);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97047);
/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7827);
/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13196);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94405);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83869);
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97369);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59417);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70982);
//import { Link } from 'gatsby'
//import requests from "../../requests";
//import axio from '../../axios';
//import axios from 'axios'
//import { initializeApp } from "firebase/app";
//core
//import {  Trans} from 'react-i18next';
//import i18n from "../../../components/i18n";
//import ReactHtmlParser from 'html-react-parser';
//import Recive from '../../../components/Recive'
//icons
//import { Button } from 'primereact/button';
//import { InputText } from 'primereact/inputtext';
//import { Checkbox } from 'primereact/checkbox';
//import { URLSearchParams } from 'url';
//import { navigate } from 'gatsby';
const firebaseConfig9={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function Postit({location,...props}){const locatio=(0,_reach_router__WEBPACK_IMPORTED_MODULE_8__.useLocation)();const queryString=locatio.search;const params={};if(queryString){queryString.substring(1).split('&').forEach(param=>{const[key,value]=param.split('=');params[key]=decodeURIComponent(value);});}const ids=params.id||null;console.log("this is locatiiii",locatio);console.log("this is locat",location);firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.initializeApp(firebaseConfig9,'app10');const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.app('app10');const{0:onHide,1:setonHide}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const{user,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .a)();const{0:profileImg,1:setProfileImg}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z);const{0:usernames,1:setUsernames}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({useris:null,userData:null});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Only run the effect if the user object is defined
if(user){app4.database().ref(`profile/${user.uid}/profileImg`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){console.log("Snapshot value is null or undefined");return;}// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();setProfileImg(val.profileImg);}else{setProfileImg(snapshot.val());}});}},[user]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(loading!==undefined&&!loading){setTimeout(()=>{if(loading!==undefined&&!loading){window.location.href="/";}},3000);}},[loading]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user&&user.email){app4.database().ref('profile').orderByChild('email').equalTo(user.email).once('value').then(snapshot=>{if(snapshot.exists()){const userId=Object.keys(snapshot.val());const snapshotval=snapshot.val()[userId];if(snapshotval&&snapshotval.username){if(!snapshotval.username){alert("please finish setting up you account settings /profile");}setUsernames(pre=>{return{...pre,useris:snapshotval.username};});}}});}else{// handle the case where user is not defined or does not have an email property
}},[user]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(props.userId){const db=app4.database().ref('profile');const userRef=db.child(props.userId);userRef.once('value',snapshot=>{if(snapshot.exists()){const userData=snapshot.val();setUsernames(pre=>{return{...pre,userData:userData.username&&userData.username};});}else{alert("user was deleted");}});return()=>{userRef.off();};}},[props.userId]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{aos__WEBPACK_IMPORTED_MODULE_3___default().init();},[user]);const{0:off,1:setoff}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const renderHeader=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"ql-formats"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"ql-bold","aria-label":"Bold"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"ql-italic","aria-label":"Italic"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"ql-underline","aria-label":"Underline"}));};const header=renderHeader();function sets(i){setProfileImg(i);}const{0:zoom,1:setzoom}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:fullSizeImage,1:setFullSizeImage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const images=document.querySelectorAll(".resized-imaged");images.forEach(image=>{image.addEventListener("click",handleImageClick);return()=>{image.removeEventListener("click",handleImageClick);};});},[handleImageClick]);function handleImageClick(event){const clickedEl=event.target;if(clickedEl.tagName==="IMG"){// Do something with the clicked image
setFullSizeImage(clickedEl.src);}}const{0:zoomLevel,1:setZoomLevel}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);const zoomIn=()=>{setZoomLevel(zoomLevel+0.1);};const zoomOut=()=>{if(zoomLevel>1){setZoomLevel(zoomLevel-0.1);}};const ifZomed={position:zoom&&"absolute",top:zoom&&"0",left:zoom&&"0",right:zoom&&"0",bottom:zoom&&"0",zIndex:zoom&&"20",backgroundColor:zoom&&"rgba(0,0,0,0.11)"};const{0:light,1:setLight}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:navbars,1:setnavbars}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);let isBlogActive;if(locatio.pathname.startsWith('/profileComponents/Myprofile')){isBlogActive=true;}else if(locatio.pathname.startsWith(`/profileComponents/${props.userId}`)){isBlogActive=true;}else{isBlogActive=false;}let isprof;if(locatio.pathname.startsWith('/profileComponents/Profiles')){isprof=true;}else{isprof=false;}const{0:dark,1:setdark}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(light);if(!user){/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Loadings__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{dark:dark,setdark:setdark,setDark:props.setdark,setLig:props.setLight,setLight:setLight,userId:props.userId,isBloged:isBlogActive,users:props.users,style:{overflow:!onHide&&"hidden"},onHide:onHide,light:light,off:off},fullSizeImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{id:"myModal",className:`"moda" ${dark&&"darken"}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{onClick:()=>setFullSizeImage(null),className:"close"},"\xD7"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{marginBottom:"100px",width:"100%",height:"100%",margin:"auto",alignItems:"center",display:"flex",flexDirection:"column"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{display:"inline-block",float:"right",marginTop:"-45px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{onClick:zoomIn,style:{cursor:"pointer"},className:"m-3  text-light "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__/* .FontAwesomeIcon */ .G,{className:"hover-text-light",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__/* .faMagnifyingGlassPlus */ .q9v})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{onClick:zoomOut,style:{cursor:"pointer",color:zoomLevel>1&&"white"},className:"m-3 hover-text-light "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__/* .FontAwesomeIcon */ .G,{className:"",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__/* .faMagnifyingGlassMinus */ .Wq6}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{style:{width:`${50*zoomLevel}%`,textAlign:"center",justifySelf:"center",marginLeft:"auto",marginRight:"auto"},zoomSrc:fullSizeImage,src:fullSizeImage,alt:"Full-size Image",preview:true}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PagesData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{off:off}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main",{id:"mai mt-6 ",className:` ${(dark&&"darken bgdar",isprof&&"proff")}`,style:{marginTop:!onHide&&"0",overflow:!onHide&&"hidden",position:!onHide&&"fixed",top:"0",bottom:"0",zIndex:"10",background:dark?"#121212":"rgba(250, 250, 250, 250)",margin:isBlogActive&&" 0px",padding:isBlogActive&&"0px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:`${dark&&"darken"} single-post-content mt-6 `},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:` ${onHide&&"container"}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{width:isBlogActive&&"100%"},className:` ${onHide&&'col-md-9 post-content  '}   ${isBlogActive&&"w-100 col-md-12 p-0 m-0"}   ${isprof&&"col-md-12  prr"} ${!dark&&"prs"} `},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Posts__WEBPACK_IMPORTED_MODULE_13__["default"],{userId:props.userId,id:ids,fullSizeImage:fullSizeImage,setFullSizeImage:setFullSizeImage,dark:dark,setLe:props.setLen,setLength:props.setLength,fits:props.fits,users:props.users,Bio:props.Bio,isBlog:isBlogActive,onHide:onHide,setonHide:setonHide,app4:app4,profileImg:profileImg,username:usernames.useris,userData:usernames.userData})))))));}const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"post");

/***/ }),

/***/ 97369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Posts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25935);
/* harmony import */ var primereact_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73386);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99403);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51290);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75159);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74420);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33220);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94405);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57076);
/* harmony import */ var primereact_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31001);
/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7827);
/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36232);
/* harmony import */ var _images_no_image_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42073);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13196);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProfileComments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13668);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87896);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84509);
//import BootstrapButton from "react-bootstrap/Button";
const firebaseConfig2={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};const firebaseConfig019={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};const firebaseConfig909={apiKey:"AIzaSyAlILFCEiJQQJsQB2a0uidx61r9zfEVLWc",authDomain:"notifications-a1743.firebaseapp.com",databaseURL:"https://notifications-a1743-default-rtdb.firebaseio.com",projectId:"notifications-a1743",storageBucket:"notifications-a1743.appspot.com",messagingSenderId:"624660139679",appId:"1:624660139679:web:a73fd504b5ba8e7b005caa",measurementId:"G-BCF42GY6H1"};function Posts(props){const toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const id=props.id;const profileImg=props.profileImg;const username=props.username;const{0:cards,1:setCards}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const{0:Edits,1:setEdits}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const{0:editing,1:setEditing}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});const{0:CommentIt,1:setCommentIt}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{user,setUser,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();const onHide=props.onHide;const setonHide=props.setonHide;firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app11');const app4=firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.app('app11');//const app4 = app4.database();
const nano=(0,nanoid__WEBPACK_IMPORTED_MODULE_10__/* .nanoid */ .x0)();async function handleoffed(id){try{const commentRef=app4.database().ref("Replies/replied");const snapshot=await commentRef.orderByChild("ip").equalTo(id).once("value");snapshot.forEach(childSnapshot=>{// Check if the child has a matching ID and delete it if it does
if(childSnapshot.val().ip===id){commentRef.child(childSnapshot.key).remove();}});}catch(error){console.log(error);}};async function handleDelete(id){try{const commentRef=app4.database().ref("commentpost");const snapshot=await commentRef.orderByChild("ip").equalTo(id).once("value");snapshot.forEach(childSnapshot=>{// Check if the child has a matching ID and delete it if it does
if(childSnapshot.val().ip===id){commentRef.child(childSnapshot.key).remove();}if(childSnapshot.val().ip===id){handleoffed(childSnapshot.val().id);}});setonHide(true);}catch(error){console.log(error);}}async function handleDismiss(id){handleDelete(id);try{const commentRef=app4.database().ref("comments/cards");const snapshot=await commentRef.orderByChild("id").equalTo(id).once("value");snapshot.forEach(childSnapshot=>{// Check if the child has a matching ID and delete it if it does
if(childSnapshot.val().id===id){commentRef.child(childSnapshot.key).remove();}});}catch(error){console.log(error);}};const handlexits=id=>{setCards(cards=>cards.filter(card=>card.id!==id));setcardid(cardid=>cardid.filter(car=>car.id!==id));setEditing(editing=>{const{[id]:_,...rest}=editing;return rest;});setonHide(true);setHasdata({});};const apps2=firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.initializeApp(firebaseConfig019,'app2');const app2=firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.app('app2');const nansid=(0,nanoid__WEBPACK_IMPORTED_MODULE_10__/* .nanoid */ .x0)();const apps9=firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.initializeApp(firebaseConfig909,'app9');const app9=firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.app('app9');const{0:cardid,1:setcardid}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);async function handledata(id){try{const snapshot=await app4.database().ref("comments").orderByChild("id").equalTo(id).once("value");if(snapshot&&snapshot.exists()){await app4.database().ref(`comments/`).update({cards});//console.log(exists)
// Retrieve the list of followers for the user who posted the new item
}else{const userRef=app4.database().ref(`comments/`);userRef.update({cards});//console.log(success)
}}catch(error){console.log(error);//console.log(error)
}const profilesRef=app2.database().ref(`profile/`);profilesRef.once('value',snapshot=>{snapshot.forEach(profileSnapshot=>{const followers=profileSnapshot.child('followers').val();if(followers&&Object.keys(followers).includes(user.uid)){const userId=profileSnapshot.key;console.log("User with ID ",userId," has ",user.uid," in their followers");// Do something with the userId here
// Add a new notification for this follower
const notification={receive:userId,usersend:user.uid,cardid,content:`${user.uid} posted a new message: ${cardid}`,viewed:false};const postsRef=app9.database().ref(`users/${userId}/posts/`);const newPostRef=postsRef.push();newPostRef.set({userId,cardid}).then(()=>{console.log("Post added successfully");setcardid([]);}).catch(error=>{console.error("Error adding post:",error);});}});});}const handleClick=()=>{setCards(cards=>[...cards,{id:nano,message:"",font:"sans-serif",showCommentBox:"",liked:"0",disliked:"1",profile:profileImg,user:username,datePosted:new Date(),mail:user.email,userId:user.uid}]);setcardid(cardid=>[...cardid,{id:nano,message:"",userid:user.uid,user:username,datePosted:new Date()}]);setEditing(editing=>({...editing,[cards.length]:true}));setonHide(false);};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const comments=app4.database().ref("comments");const comment=comments.on('value',snapshot=>{const data=snapshot.val();if(!data){setCards([]);return;}if(data&&data.cards){const cardArray=Object.values(data.cards);const updatedCardArray=cardArray.map(card=>{return{...card,showCommentBox:false};});setCards(updatedCardArray);if(user){updatedCardArray.forEach(card=>{if(card.mail===user.email){card.profile=profileImg;card.user=username;}});if(id){const cardWithId=updatedCardArray.find(card=>card.id===id);if(cardWithId){updatedCardArray.push(cardWithId);}}}const editingObject=Object.fromEntries(cardArray.map(card=>[card.id,true]));setEditing(editingObject);}});},[user,profileImg,username]);// console.log('How are there the the hare these commets ',cards)
const handleComment=id=>{setCards(cards=>cards.map(card=>card.id===id?{...card,showCommentBox:true}:card));handledata(id);};const handlecancel=id=>{setCards(cards=>cards.map(card=>card.id===id?{...card,showCommentBox:false}:card));};const handleEdit=(id,newMessage)=>{setCards(cards=>cards.map(card=>card.id===id?{...card,message:newMessage}:card));setcardid(cardid=>cardid.map(car=>car.id===id?{...car,message:newMessage}:car));};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{cards.forEach(async card=>{if(!card.user){const userId=card.userid;// Get the userId from the card object
const commentRef=app4.database().ref("comments/cards");try{const snapshot=await commentRef.orderByChild("userId").equalTo(userId).once("value");const updates={};snapshot.forEach(childSnapshot=>{updates[childSnapshot.key]=null;});await commentRef.update(updates);}catch(error){console.error("Error deleting card data:",error);}}});},[cards]);const handleCommen=id=>{setEditing(editing=>({...editing,[id]:false}));};const handlePost=id=>{setEditing(editing=>({...editing,[id]:true}));handledata(id);setonHide(true);setHasdata({});};const formatDate=date=>{if(!date){return"";}const timeDiffMs=new Date()-new Date(date);const timeDiffSec=Math.floor(timeDiffMs/1000);if(timeDiffSec<60){return`${timeDiffSec} sec ago`;}const timeDiffMin=Math.floor(timeDiffSec/60);if(timeDiffMin<60){return`${timeDiffMin} min ago`;}const timeDiffHr=Math.floor(timeDiffMin/60);if(timeDiffHr<24){return`${timeDiffHr} h ago`;}const timeDiffDay=Math.floor(timeDiffHr/24);if(timeDiffDay<30){return`${timeDiffDay} day ago`;}const timeDiffMo=Math.floor(timeDiffDay/30);if(timeDiffMo<12){return`${timeDiffMo} mo ago`;}const timeDiffYr=Math.floor(timeDiffMo/12);return`${timeDiffYr} yr ago`;};const{0:topRightModal,1:setTopRightModal}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const toggleShow=()=>{setTopRightModal(!topRightModal);};const{0:hasdata,1:setHasdata}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");async function snoop(id){const comments=app4.database().ref("comments/cards").orderByChild("id").equalTo(id).once('value').then(snapshot=>{if(snapshot.exists()){const comments=[];snapshot.forEach(childSnapshot=>{const comment=childSnapshot.val();comments.push(comment);});if(comments){setHasdata(comments[0].message);}setCards(cards=>[...cards,{id:(0,nanoid__WEBPACK_IMPORTED_MODULE_10__/* .nanoid */ .x0)(),message:"",copied:comments,font:"sans-serif",showCommentBox:"",liked:"0",disliked:"1",profile:profileImg,user:username,datePosted:new Date(),userId:user.uid,mail:user.email}]);setcardid(cardid=>[...cardid,{id:(0,nanoid__WEBPACK_IMPORTED_MODULE_10__/* .nanoid */ .x0)(),message:"",copied:comments,profile:profileImg,user:username,datePosted:new Date(),userId:user.uid}]);setEditing(editing=>({...editing,[cards.length]:true}));setonHide(false);}});}if(hasdata){console.log("hasdata",hasdata);}const{0:editorHtml,1:setEditorHtml}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const handleImagePaste=async event=>{const clipboardData=event.clipboardData||window.clipboardData;const pastedData=clipboardData.getData('Text');// Check if the pasted data is an image URL
if(isImageUrl(pastedData)){// Fetch the image URL and convert it to an HTML image tag
try{const response=await axios__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.get(pastedData,{responseType:'blob'});const imageUrl=URL.createObjectURL(response.data);const imgTag=`<img src="${imageUrl}" alt="Pasted Image" />`;// Insert the image tag into the editor
const newEditorHtml=editorHtml+imgTag;setEditorHtml(newEditorHtml);}catch(error){console.error('Failed to fetch image:',error);}}// Check if the pasted data is a YouTube link
if(isYoutubeLink(pastedData)){// Extract the YouTube video ID from the link
const videoId=extractYoutubeVideoId(pastedData);// Create an HTML iframe tag for embedding the YouTube video
const iframeTag=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;// Insert the iframe tag into the editor
const newEditorHtml=editorHtml+iframeTag;setEditorHtml(newEditorHtml);}};// Helper function to check if a string is a valid image URL
const isImageUrl=url=>{return url.match(/\.(jpeg|jpg|gif|png)$/)!==null;};// Helper function to check if a string is a valid YouTube link
const isYoutubeLink=link=>{return link.match(/^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)!==null;};// Helper function to extract the YouTube video ID from a link
const extractYoutubeVideoId=link=>{const videoIdMatch=link.match(/^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);if(videoIdMatch){return videoIdMatch[3];}return'';};const location=(0,_reach_router__WEBPACK_IMPORTED_MODULE_9__.useLocation)();let isBlogActive;if(location.pathname.startsWith(`/profileComponents/${props.userId}`)){isBlogActive=true;}else{isBlogActive=false;}let bg;if(location.pathname.startsWith('/profileComponents/Profiles')){bg=true;}else{bg=false;}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(cards){if(props.Bio){const profs=cards.filter(card=>props.Bio===card.user);const legth=profs.length;props.setLength(legth);}}},[cards]);const overflowWrap={overflowWrap:"break-word",wordBreak:"break-word"};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(props.isBlog){const val=cards.filter(card=>props.isBlog&&props.users===card.user);const vv=val.length;vv&&props.setLe(vv);}},[cards,props.isBlog]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`pad ${props.dark&&"darken"}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{animationDirection:"right",show:topRightModal,tabIndex:"-1",setShow:setTopRightModal},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Dialog,{position:"top-right",side:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Body,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Header,{className:"bg-dark text-white"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Title,null,"Finish setting Account"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z,{color:"none",className:"btn-close btn-close-white",onClick:toggleShow})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Body,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-3 text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i",{className:"fas fa-shopping-cart fa-4x text-info"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:"1rem",textAlign:"center"},className:"bold"},"Please Finish setting Up your Account!")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Footer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z,{color:"dark",onClick:()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_5__.navigate)('/ProfilePage/Profile')},"yea sure!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z,{outline:true,color:"danger",onClick:toggleShow},"Close"))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"App ",style:{margin:"auto"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_14__/* .Toast */ .F,{ref:toast}),!isBlogActive&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,"      ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-4 mt-5",style:{width:"80%",margin:"auto",height:"50px",justifyContent:"center",display:"flex",marginLeft:"15%"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_avatar__WEBPACK_IMPORTED_MODULE_15__/* .Avatar */ .q,{className:"rounded-circle shadow-1-strong me-3 smally mr-2 ",image:profileImg,alt:"avatar",size:"large",shape:"circle",style:{display:bg&&"none ",marginTop:" -5px"}}),"     ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{disabled:!user,className:"bgpost",style:{textShadow:"none",zIndex:"5",width:"80%",height:"40px",borderRadius:"20px",color:"gray",border:props.dark?"1px solid black":"1px solid gray",background:props.dark&&"#141515",display:bg&&"none "},onClick:handleClick}," Whatchu wanna blab! "))),cards.slice().reverse().map(card=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:card.id,style:{marginLeft:"auto",marginRight:"auto"}},!editing[card.id]?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"pp d-flex jusify-center",style:{background:"",width:"95vw",backdropFilter:"blur(25px)",zIndex:"105",position:"relative",top:"10px",left:"0",right:"0"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{marginLeft:"19%",position:"relative"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_editor__WEBPACK_IMPORTED_MODULE_16__/* .Editor */ .M,{onPaste:handleImagePaste,value:card.message+typeof hasdata==="object"?`<br/> <br/> <span className="bg-dark disabled bgeditor w-100 h-100"> <h1 style=${overflowWrap} className="h1Edit bg-dark"> ${hasdata.title&&hasdata.title}</h1> <img  className="m-auto" src= ${hasdata.images[3]?hasdata.images[3]:_images_no_image_jpg__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z}/>  <br/>   <p style=${overflowWrap} className="textEdi">${hasdata.paragraphs&&hasdata.paragraphs}</p> </span>`:hasdata,onTextChange:e=>handleEdit(card.id,e.htmlValue),className:"ql-snow ql-editor-custom customed ",style:{height:"320px",overflow:"scroll",width:"100%",marginLeft:"auto",marginRight:"auto"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z,{label:editing[card.id]?"Edit":"post",icon:"pi pi-upload",style:{zIndex:"3",position:"absolute",right:"0",bottom:"0"},className:" p-button-dark p-button p-mt-2 p-2 bg-dark",onClick:()=>handlePost(card.id)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z,{icon:"pi pi-times",className:"p-button-danger p-button p-mt-2 p-0 m-0",style:{zIndex:"3",position:"absolute",top:"0",right:"0"},onClick:()=>handlexits(card.id)}))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null," "),!onHide&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{onClick:()=>handlexits(card.id),style:{background:"rgba(250, 247, 247, 0.16)",position:"fixed",top:"0",left:"0",right:"0",bottom:'0',zIndex:"100",backgroundColor:"rgba(100,100,100,0.21)",display:"flex",justifyContent:"center",width:"100vw",marginRight:"-10px"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-2  mx-0"},props.isBlog&&props.users===card.user||props.Bio===card.user?username&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProfileComments__WEBPACK_IMPORTED_MODULE_8__["default"],{idd:props.userId,fullSizeImage:props.fullSizeImage,setFullSizeImage:props.setFullSizeImage,dark:props.dark,Bio:props.Bio,userData:props.userData,userId:card.userid,copied:card.copied,shared:card.shared,snoop:()=>snoop(card.id),datePosted:formatDate(card.datePosted),ids:card.id,profileuser:profileImg,user:username?username:"Anonymous",profileImg:card.profile,username:card.user,liked:card.liked,handleCommen:()=>handleCommen(card.id),handlePost:()=>handlePost(card.id),handleDismiss:()=>handleDismiss(card.id),card:card.font,showCommentBox:card.showCommentBox,handlecancel:()=>handlecancel(card.id),handleComment:()=>handleComment(card.id),posted:card.message}):null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-2  w-100"},!props.isBlog&&!props.Bio&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comments__WEBPACK_IMPORTED_MODULE_2__["default"],{fullSizeImage:props.fullSizeImage,setFullSizeImage:props.setFullSizeImage,useruid:user.uid,dark:props.dark,userId:card.userId,copied:card.copied,shared:card.shared,snoop:()=>snoop(card.id),datePosted:formatDate(card.datePosted),ids:card.id,profileuser:profileImg,user:username?username:"Anonymous",profileImg:card.profile,username:card.user,liked:card.liked,handleCommen:()=>handleCommen(card.id),handlePost:()=>handlePost(card.id),handleDismiss:()=>handleDismiss(card.id),card:card.font,showCommentBox:card.showCommentBox,handlecancel:()=>handlecancel(card.id),handleComment:()=>handleComment(card.id),posted:card.message}))))));}const renderHeader=()=>{return/*#__PURE__*/React.createElement("span",{className:"ql-formats",style:{width:"70%"}},/*#__PURE__*/React.createElement("select",{className:"ql-font",defaultValue:""},/*#__PURE__*/React.createElement("option",{value:"Open Sans"},"Open Sans"),/*#__PURE__*/React.createElement("option",{value:"sans-serif"},"Sans Serif"),/*#__PURE__*/React.createElement("option",{value:"serif"},"Serif"),/*#__PURE__*/React.createElement("option",{value:"monospace"},"Monospace")),/*#__PURE__*/React.createElement("button",{className:"ql-bold","aria-label":"Bold"}),/*#__PURE__*/React.createElement("button",{className:"ql-italic","aria-label":"Italic"}),/*#__PURE__*/React.createElement("button",{className:"ql-underline","aria-label":"Underline"}));};

/***/ }),

/***/ 88682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94405);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33220);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88965);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70982);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83869);
/* harmony import */ var _emoji_mart_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26638);
/* harmony import */ var _emoji_mart_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7571);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99403);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59417);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30359);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
// import from compat version
const firebaseConfig013={apiKey:"AIzaSyALrSOduM9yvvHS_fR14WeCcgEhH5D8oCA",authDomain:"zenaglob.firebaseapp.com",databaseURL:"https://zenaglob-default-rtdb.firebaseio.com",projectId:"zenaglob",storageBucket:"zenaglob.appspot.com",messagingSenderId:"62411931925",appId:"1:62411931925:web:6581dc5950a7a2137fa91c",measurementId:"G-KDMQLLD16X"};const Message=({userid,useris,email})=>{const{0:isLoading,1:setIsLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);// add loading state
const{user,setUser,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.initializeApp(firebaseConfig013,'app013');const app013=firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.app('app013');const{0:messages,1:setMessages}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const{0:newMessage,1:setNewMessage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const chatId1=user&&`${user.uid}-${userid}`;const chatId2=user&&`${userid}-${user.uid}`;const{0:previews,1:setPreviews}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const contentEditableRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');const{0:isFocused,1:setIsFocused}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:content,1:setContent}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const handleFocus=()=>{setIsFocused(true);};const handleBlur=()=>{setIsFocused(false);};const handleChange=event=>{const inputValue=event.target.innerHTML;console.log("if this is the vals",inputValue);setNewMessage(inputValue);if(inputValue.length<=0){setNewMessage("");}};// Send message to Firebase Realtime Database
const sendMessage=event=>{event.preventDefault();const message=newMessage;const timestamp=new Date().getTime();if(!user)return;const chatRef=app013.database().ref(`chats/${chatId1}`);chatRef.once('value',snapshot=>{if(snapshot.exists()){// Chat exists, push the new message
chatRef.push({message,sender:user.uid,receiver:userid,timestamp,username:useris,textid:(0,nanoid__WEBPACK_IMPORTED_MODULE_9__/* .nanoid */ .x0)(),email:email,read:false});}else{// Chat doesn't exist, check if chatId2 exists
const chatRef2=app013.database().ref(`chats/${chatId2}`);chatRef2.once('value',snapshot=>{if(snapshot.exists()){// Chat exists, push the new message
chatRef2.push({message,sender:user.uid,receiver:userid,timestamp,username:useris,textid:(0,nanoid__WEBPACK_IMPORTED_MODULE_9__/* .nanoid */ .x0)(),email:email,read:false});}else{// Chat doesn't exist, create a new chat with chatId1
chatRef.push({message,sender:user.uid,receiver:userid,timestamp,email:email,textid:(0,nanoid__WEBPACK_IMPORTED_MODULE_9__/* .nanoid */ .x0)(),read:false});}});}});event.target.reset();setNewMessage("");if(newMessage===""){contentEditableRef.current.innerHTML="";}event.target.innerHTML=" ";};/*
    // Listen for incoming messages from Firebase Realtime Database
    useEffect(() => {
      if (!user) return;
        
      app013
        .database()
        .ref(`chats`)
        .on('value', (snapshot) => {
          if (!snapshot) return;
    
          const filteredChats = [];

snapshot.forEach((childSnapshot) => {
  const chatValues = childSnapshot.val();
  const chatId = childSnapshot.key;
  const split = chatId.split("-");
  const chat = Object.values(chatValues);

  const includesUser = split.includes(user.uid);

  if (includesUser) {
    for (let i = 0; i < chat.length; i++) {
      const currentChat = chat[i];
      if (currentChat.sender === user.uid || currentChat.receiver === user.uid) {
        filteredChats.push(currentChat);
      }
    }
  }
});

    setMessages(filteredChats);
   

    console.log("this is   the FilteredChats show ", filteredChats);

        });
    }, [user]);
    */ /*
    const handleNewMessageSubmit = async (e) => {
      e.preventDefault();
      
      if (!user) return;
      
      const message = {
        sender: user.uid,
        recipient: userid,
        text: newMessage,
        timestamp: new Date() ,
      };
      
      const conversationsRef = app013.firestore().collection('messages');
      const query = conversationsRef.where('sender', '==', user.uid).where('recipient', '==', userid);
      const snapshot = await query.get();
      
      if (!snapshot.empty) {
        // Update the existing conversation
        const conversationId = snapshot.docs[0].id;
        const conversationRef = conversationsRef.doc(conversationId);
        await conversationRef.set({
          sender: user.uid,
          recipient: userid,
          text: newMessage,
          timestamp: new Date() ,
        }, { merge: true });
      } else {
        // Create a new conversation
        const newConversation = {
      
            sender: user.uid,
            recipient: userid,
            text: newMessage,
            timestamp: new Date(),
       
        
        };
        await conversationsRef.add(newConversation);
      }
      
      setNewMessage('');
    };
    */ /*
    if (isLoading) {
      return <p>Loading...</p>; // render loading state while data is being fetched
    }
  */const{0:pic,1:setpic}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:named,1:setnamed}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:mypic,1:setmypic}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z);const{0:myuser,1:setmyuser}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const fileInputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const handleImageUpload=event=>{const file=event.target.files[0];const reader=new FileReader();reader.readAsDataURL(file);reader.onloadend=()=>{const base64String=reader.result;setNewMessage(prev=>prev+" "+base64String);// append the base64-encoded image data to the existing message
setPreviews(base64String);// Set the current text to the new base64-encoded image data
inputRef.current=`<div class="card flex justify-content-center"><Image className="sized" src="${base64String}" zoomSrc="${base64String}" alt="Image" class="resizedImages" width="250" preview /></div>
`;};};const{0:showPicker,1:setShowPicker}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const pickerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleClickOutside=event=>{if(pickerRef.current&&!pickerRef.current.contains(event.target)){setShowPicker(false);}};document.addEventListener("mousedown",handleClickOutside);return()=>{document.removeEventListener("mousedown",handleClickOutside);};},[pickerRef]);const handleButtonClick=()=>{setShowPicker(!showPicker);};const handleImageOrVideos=url=>{const fileExtension=url.split('.').pop().toLowerCase();if(fileExtension==='jpg'||fileExtension==='png'||fileExtension==='jpeg'||fileExtension==='gif'||fileExtension==='img'){// If the URL is pointing to an image
return`<div class="card flex w-50 justify-content-center"><Image class="sized"   src="${url}" zoomSrc="${url}" alt="Image" class="resizedImages" width="250"  preview /></div>`;}else if(fileExtension==='mp4'){// If the URL is pointing to a video
return`<video src="${url}" controls>Your browser does not support the video tag.</video>`;}else if(fileExtension==='mp3'){// If the URL is pointing to an audio file
return`<audio src="${url}" controls>Your browser does not support the audio tag.</audio>`;}else{// If the URL is not pointing to an image, video, or audio file, check if it's a YouTube link
//  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/; 
const match=url.match();if(match){// If the URL is a YouTube link, extract the video id
const videoId=match[5];return`<div className="Fit" style="position: relative; padding-bottom: 56.25%; height: 300px, width: 300px"><iframe src="https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;}else{// If the URL is not pointing to an image, video, or YouTube link, return the URL
return url;}}};// const words = newMessage.split(' ');
const generateMarkup=()=>{const words=newMessage.split(' ');const elements=[];words.forEach((word,index)=>{if(word.startsWith('http')||word.startsWith('https')){const element=handleImageOrVideos(word)||/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:word,target:"_blank",rel:"noopener noreferrer"},word);elements.push(element);}else if(word.startsWith("data:image/")){// If the word is a base64-encoded image data URL, create an <img> tag
elements.push(`<div class="card flex justify-content-center"><Image className="sized" src="${word}" zoomSrc="${word}" alt="Image" class="resizedImages" width="250" preview /></div>`);}});return elements.join('');};const{0:BlockedMe,1:setBlockedMe}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:inputVal,1:setInputValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const handlePaste=evt=>{const pasteData=evt.clipboardData.getData("text/plain");//const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/)?([\w-]{11})(\S+)?$/i;
const match=pasteData.match();if(match){evt.preventDefault();// prevent default paste behavior
const videoId=match[5];const iframe=document.createElement('iframe');iframe.style.position='absolute';iframe.style.top=0;iframe.style.left=0;iframe.style.width='50%';iframe.style.height='50%';iframe.src=``;iframe.title='YouTube video player';iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';iframe.allowFullscreen=true;const parser=new DOMParser();const doc=parser.parseFromString(evt.clipboardData.getData('text/html'),'text/html');const pastedElement=doc.documentElement;const range=window.getSelection().getRangeAt(0);range.deleteContents();range.insertNode(iframe);range.insertNode(pastedElement);}};const handleEmojiSelect=emo=>{console.log(emo);//  setNewMessage((prevMessage) => prevMessage + emo.unified);
contentEditableRef.current.innerHTML=contentEditableRef.current.innerHTML+emo.native;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"containerPad",style:{background:"darkgrey",position:"absolute",top:"10%",left:"0",zIndex:"3",width:"fit-content"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",{onSubmit:sendMessage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{id:"containered",className:"text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2   w-100 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:mypic,alt:"user",style:{width:"40px",height:"100%"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"input-box b-dark h-100 fom-control fom-control-lg mb-2 h-auto messonew",ref:contentEditableRef,contentEditable:true,onInput:handleChange,dangerouslySetInnerHTML:{__html:generateMarkup()},spellCheck:true,style:{height:'fit-content',// minHeight: "50px",
marginLeft:'auto',minHeight:"fit-content",background:"white",marginRight:'auto',overflow:'scroll',width:"40vw",border:"1px solid grey",padding:"20px 10px",color:"black",border:"1px solid #ccc",padding:"5px"},placeholder:"Text here ...",onFocus:handleFocus,onBlur:handleBlur}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"file",accept:"image/*",onChange:handleImageUpload//onKeyDown = {ha}
,ref:fileInputRef,style:{display:'none'}// hide fas the input element initially
}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"positions",htmlFor:"file-input",onClick:()=>fileInputRef.current.click()},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__/* .FontAwesomeIcon */ .G,{style:{fontSize:"1.3rem",marginLeft:"10px",cursor:"pointer",color:"black"},icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faImages */ .l9f})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"smile_icon_small"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z,{type:"button",className:"hideit ms-0 p-1 ml-3 text-mute",style:{background:"transparent",border:"none"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__/* .FontAwesomeIcon */ .G,{onClick:handleButtonClick,style:{fontSize:"1.3rem",color:"#ffcb4d",cursor:"pointer"},icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faSmile */ .ctA})),showPicker&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:pickerRef,style:{position:"absolute"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_emoji_mart_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{data:_emoji_mart_data__WEBPACK_IMPORTED_MODULE_13__,onEmojiSelect:handleEmojiSelect,style:{position:"absolute",bottom:"100%",right:"0"}}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{style:{fontSize:"1.3rem",cursor:"pointer",background:"none",border:"none",hover:"green"},className:"hovered ms-3 text-muted"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__/* .FontAwesomeIcon */ .G,{className:"paperplaneS",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faPaperPlane */ .XCy,style:{cursor:"pointer",color:"yellowgreen"},type:"submit"})))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

/***/ }),

/***/ 10246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34051);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31555);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25692);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78931);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75159);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88965);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94405);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57076);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25935);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83869);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99403);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51333);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87896);
const firebaseConfig2={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};const firebaseConfig019={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};const firebaseConfig909={apiKey:"AIzaSyAlILFCEiJQQJsQB2a0uidx61r9zfEVLWc",authDomain:"notifications-a1743.firebaseapp.com",databaseURL:"https://notifications-a1743-default-rtdb.firebaseio.com",projectId:"notifications-a1743",storageBucket:"notifications-a1743.appspot.com",messagingSenderId:"624660139679",appId:"1:624660139679:web:a73fd504b5ba8e7b005caa",measurementId:"G-BCF42GY6H1"};function NotificationCard(){const{user,setUser,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();const apps15=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app15');const app15=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.app('app15');const apps2=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig019,'app2');const app2=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.app('app2');//const app8 = app9.database().ref(`notifications/`)
const followersRef=app2.database().ref(`profile/followers/`);const postsRef=app15.database().ref(`comments/cards/`);const postreplies=app15.database().ref(`Reply/`);const postreplied=app15.database().ref(`Replies/replied`);const postratings=app15.database().ref(`Ratings/`);const apps9=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig909,'app9');const app9=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.app('app9');function toView(id){}const{0:notifications,1:setNotifications}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const onViewNotification=notificationId=>{const notificationRef=app9.database().ref(`users/${user.uid}/posts`);notificationRef.once('value',snapshot=>{snapshot.forEach(postSnapshot=>{const post=postSnapshot.val();// Check if any object in the cardid array has a matching id
const foundPost=post&&post.cardid&&post.cardid.find(card=>card.id===notificationId);if(foundPost){// Delete the post from the database
postSnapshot.ref.remove();}});});};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Get the notifications for the current user ID
if(!user){return;}const notificationsRef=app9.database().ref(`users/${user.uid}/posts`);notificationsRef.on('value',snapshot=>{const notifications=[];snapshot.forEach(notifSnapshot=>{const posts=notifSnapshot.val();notifications.push(posts.cardid);});setNotifications(notifications);});return()=>{notificationsRef.off('value');};},[user,app9]);const{0:showNotification,1:setShowNotification}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:profileImages,1:setProfileImages}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user){const imageObjects=[];if(notifications){notifications.forEach(notificationArra=>{if(notificationArra){notificationArra.forEach(notification=>{const id=notification.userid;const imageObj={id:id,image:null};imageObjects.push(imageObj);app2.database().ref(`profile/${id}/profileImg`).on('value',snapshot=>{console.log(JSON.stringify(snapshot.val()));if(!snapshot.val()){console.log("Snapshot value is null or undefined");return;}// check if snapshot.val() is an object
if(typeof snapshot.val()==='object'){const val=snapshot.val();imageObj.image=val.profileImg;}else{imageObj.image=snapshot.val();}setProfileImages(prevState=>[...prevState]);});});}});}}},[notifications]);function handleButtonClick(){setShowNotification(true);}if(notifications){console.log("this are the offof",notifications.message);}const counts={};notifications.forEach(notificationArra=>{if(Array.isArray(notificationArra)){notificationArra.forEach(notification=>{const message=notification.message;counts[message]=(counts[message]||0)+1;});}});const countsArray=Object.entries(counts);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{length:countsArray.length}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{style:{backgroundColor:"#f7f6f6",marginTop:"100px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"py-5 text-dark",style:{maxWidth:"1000px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{className:"justify-content-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{md:"12",lg:"10",xl:"8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"d-flex justify-content-between align-items-center mb-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{tag:"h4",className:"text-dark mb-0"},"Unread comments (",countsArray.length,")"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Body,{className:"p-2 d-flex align-items-center"}))),notifications&&notifications.map((notificationArra,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:index,className:"d-flex"},notificationArra&&notificationArra.map((notification,innerIndex)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{className:"mb-3",key:innerIndex},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Body,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{marginLeft:"auto"},className:"d-flex row w-100"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"d-flex row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"w-100 ml-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"  align-items-center mb-3 d-flex"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__.Link,{to:`/profileComponents/Profiles?id=${notification.userid}`},"    ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Img,{className:"rounded-circle  shadow-1-strong  ",src:profileImages.find(imageObj=>imageObj.id===notification.userid)?profileImages.find(imageObj=>imageObj.id===notification.userid).image:_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,alt:"avatar",style:{width:"50px",height:"50px"},width:"20",height:"20"})," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{tag:"h6",className:"text-primary fw-bold mb-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__.Link,{to:`/profileComponents/Profiles?id=${notification.userid}`},"  ",notification.user),"  ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i",{style:{fontSize:"10px",color:"grey"}},"from people you follow has a new post"," "," ")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:"0.65rem",color:"blueviolet"},className:"mb-5 mr-auto"},"2 days ago")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"text-dark  mx-4 pl-5 pr-5"},notification.message.includes("<p>")&&(0,html_react_parser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(notification.message))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{marginLeft:" auto",marginRight:"auto",width:"100%"},className:"d-flex justify-content-between  mx-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"small mb-0",style:{color:"#aaa"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z,{onClick:()=>onViewNotification(notification.id),style:{backgroundColor:"none",border:"none",float:"left",color:"red"},outlined:true,className:"link-grey  p-2 py-1 mx-1 bg-none"},"Remove")," ","\u2022",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__.Link,{to:`/news/Posted/Postit?id=${notification.id}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z,{style:{backgroundColor:"none",border:"none",color:"green"},outlined:true,className:"link-grey p-2 mx-1 bg-none"},"View")," ")))))))))))))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationCard);

/***/ }),

/***/ 60506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Profiles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57076);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75159);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9016);
/* harmony import */ var primereact_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51020);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94405);
/* harmony import */ var _images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83869);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25935);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99403);
/* harmony import */ var _news_Posted_Postit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13418);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88682);
/* harmony import */ var primereact_listbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5788);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78931);
//import Layout from '../../components/Layout'
//import { Password } from 'primereact/password';
//import { Divider } from 'primereact/divider';
//import { Editor } from 'primereact/editor';
//import {confirmDialog, ConfirmDialog} from 'primereact/confirmdialog';
//import { Toast } from 'primereact/toast';
//import { FileUpload} from 'primereact/fileupload';
//import {ProgressSpinner} from 'primereact/progressspinner';
//import { SplitButton } from 'primereact/splitbutton' alert();
const firebaseConfig010={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function resizeImage(htmlString){const regex=/<img [^>]*>/g;const matches=htmlString.match(regex)||[];for(const match of matches){const widthRegex=/width="(\d+)"/;const heightRegex=/height="(\d+)"/;const widthMatch=match.match(widthRegex);const heightMatch=match.match(heightRegex);const width=widthMatch?parseInt(widthMatch[1]):undefined;const height=heightMatch?parseInt(heightMatch[1]):undefined;const newWidth=width?Math.floor(width/2):undefined;const newHeight=height?Math.floor(height/2):undefined;const widthAttr=newWidth?` width="${newWidth}"`:"";const heightAttr=newHeight?` height="${newHeight}"`:"";const newTag=match.replace(/\/?>/,`${widthAttr}${heightAttr} class="resized-im">`);htmlString=htmlString.replace(match,newTag);}const reg=/<p\b[^>]*>/gi;htmlString=htmlString.replace(reg,'<p class="resize-P">');return htmlString;}function Profiles({location}){const menu=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const queryString=location.search;const params={};if(queryString){queryString.substring(1).split('&').forEach(param=>{const[key,value]=param.split('=');params[key]=decodeURIComponent(value);});}const userId=params.id||null;// Query the profile data for the specific userconsole.log("here is the id para", userId)
const{0:htmlString,1:setHtmlString}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const{0:profileImg,1:setProfileImg}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig010,'app1010');const app1010=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.app('app1010');const{user}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();//const [userData, setUserData] = useState(null);
//const { username, email } = data.profile ? data.profile : {};
const{0:profile,1:setProfile}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:Bio,1:setBio}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({text:"<div>Hello World!</div>",status:"welcome to my profile :)",side:'to bottom',colors:[],usernamed:"",email:''});const followUser=async()=>{await app1010.database().ref(`profile/${user.uid}/following/${userId}`).set(true);await app1010.database().ref(`profile/${userId}/followers/${user.uid}`).set(true);};const{0:followers,1:setFollowers}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const getFollowers=async()=>{// Get the follower IDs from the user's "followers" node
const ref=app1010.database().ref(`profile/${userId}/followers`);ref.on('value',snapshot=>{const followerIds=snapshot.val();if(!followerIds){return;}// Get the follower data for each follower ID
const followerPromises=Object.keys(followerIds).map(followerId=>{return app1010.database().ref(`profile/${followerId}`).once('value');});Promise.all(followerPromises).then(followSnapshots=>{const followerData=followSnapshots.map(snapshot=>{return{id:snapshot.key,...snapshot.val()};});setFollowers(followerData);});});};getFollowers();return()=>{app1010.database().ref(`profile/${userId}/followers`).off('value');};},[userId,app1010]);//  const FollowersList = ({ userId }) => {  }
/*

<h2>Followers</h2>
    <ul>
      {followers.map((follower) => (
        <li key={follower.id}>{follower.name}</li>
      ))}
    </ul>
      */const profs=followers.filter(follow=>follow.email);const legth=profs.length;const{0:following,1:setFollowing}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const getFollowing=async()=>{// Get the follow IDs from the user's "following" node
const ref=app1010.database().ref(`profile/${userId}/following`);ref.on('value',snapshot=>{const followerIds=snapshot.val();if(!followerIds){return;}// Get the follower data for each follower ID
const followerPromises=Object.keys(followerIds).map(followerId=>{return app1010.database().ref(`profile/${followerId}`).once('value');});Promise.all(followerPromises).then(followSnapshots=>{const followData=followSnapshots.map(snapshot=>{return{id:snapshot.key,...snapshot.val()};});setFollowing(followData);});});};getFollowing();return()=>{app1010.database().ref(`profile/${userId}/following`).off('value');};},[userId,app1010]);const Follow=following.filter(follow=>follow.email);const Follows=Follow.length;const unfollowUser=async()=>{// Remove the user ID from the "following" node of the current user
// await app1010.database().ref(`profile/${user.uid}/followig/${userId}`).remove();
const updatedFollowers=followers.filter(follower=>follower.id!==user.uid);// Update the state with the modified followers array
setFollowers(updatedFollowers);// Remove the current user's ID from the "followers" node of the user being unfollowed
await app1010.database().ref(`profile/${userId}/followers/${user.uid}`).remove();};const BlockUser=async()=>{// Remove the user ID from the "following" node of the current user
if(user){const updatedFollowers=followers.filter(follower=>follower.id!==user.uid);// Update the state with the modified followers array
setFollowers(updatedFollowers);await app1010.database().ref(`profile/${user.uid}/following/${userId}`).remove();await app1010.database().ref(`profile/${userId}/following/${user.uid}`).remove();// Remove the current user's ID from the "followers" node of the user being unfollowed
await app1010.database().ref(`profile/${userId}/followers/${user.uid}`).remove();await app1010.database().ref(`profile/${user.uid}/followers/${userId}`).remove();await app1010.database().ref(`profile/${userId}/blockedMe/${user.uid}`).set(true);// await app1010.database().ref(`profile/${user.uid}/blockList/${userId}`).set(true);
}};const{0:blocked,1:setBlockList}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user){const getBlock=async()=>{// Get the follow IDs from the user's "following" node
const ref=app1010.database().ref(`profile/${user.uid}/blockedMe`);ref.on('value',snapshot=>{const followerIds=snapshot.val();if(!followerIds){return;}// Get the follower data for each follower ID
const followerPromises=Object.keys(followerIds).map(followerId=>{return app1010.database().ref(`profile/${followerId}`).once('value');});Promise.all(followerPromises).then(followSnapshots=>{const followData=followSnapshots.map(snapshot=>{return{id:snapshot.key,...snapshot.val()};});setBlockList(followData);});});};getBlock();return()=>{app1010.database().ref(`profile/${user.uid}/blockedMe`).off('value');};}},[user,app1010]);const{0:message,1:setMessage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const Blocked=blocked.filter(follow=>follow.email);const Block=Blocked.length;const{0:blockedme,1:setBlockListMe}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const{0:mutedme,1:setMutedme}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const UnBlockUser=async()=>{await app1010.database().ref(`profile/${userId}/blockedMe/${user.uid}`).remove();// await app1010.database().ref(`profile/${user.uid}/blockList/${userId}`).remove();
// const uBlock = blocked.filter((follower) => follower.id !== user.uid);
const uBlockme=blockedme.filter(follower=>follower.id!==user.uid);const uBlock=blocked.filter(follower=>follower.id!==userId);// Update the state with the modified followers array
// setBlockList(uBlock);
setBlockListMe(uBlockme);setBlockList(uBlock);};const{0:deleted,1:setDeleted}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({isdeleted:null,deletedname:null});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(user){const getBlock=async()=>{// Get the follow IDs from the user's "following" node
const ref=app1010.database().ref(`profile/${userId}/blockedMe`);ref.on('value',snapshot=>{const followerIds=snapshot.val();if(!followerIds){return;}// Get the follower data for each follower ID
const followerPromises=Object.keys(followerIds).map(followerId=>{return app1010.database().ref(`profile/${followerId}`).once('value');});Promise.all(followerPromises).then(followSnapshots=>{const followData=followSnapshots.map(snapshot=>{return{id:snapshot.key,...snapshot.val()};});setBlockListMe(followData);});});};getBlock();return()=>{app1010.database().ref(`profile/${userId}/blockedMe`).off('value');};}},[user,app1010]);const BlockedMe=blockedme.filter(follow=>follow.email);//  const Blocks = BlockedMe.length;
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const db=app1010.database().ref('profile');const userRef=db.child(userId);userRef.once('value',snapshot=>{if(snapshot.exists()){const userData=snapshot.val();setProfile(userData);setBio(pre=>{return{...pre,text:userData.text?userData.text:'',colors:userData.colors?userData.colors.map(c=>c):["ghostwhite"],status:userData.status?userData.status:'Welcome to my Profile :)',followers:userData.followers?userData.followers:'',following:userData.following?userData.following:'',side:userData.side?userData.side:'to bottom',usernamed:userData.username?userData.username:'',email:userData.email?userData.email:''};});}else{alert("user was deleted");setDeleted(pre=>{return{...pre,deletedname:"Anonymous",isdeleted:true};});}});return()=>{userRef.off();};},[userId,app1010]);const item=[{label:blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?"unBlock":'Block',icon:'pi pi-ban',command:()=>{blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?UnBlockUser():BlockUser();}},{label:blocked&&blocked.some(blocked=>blocked.id===userId)?"Ask To unBlock":'',icon:'pi pi-beg',command:()=>{}}];let items;if(blockedme&&blockedme.some(blocked=>blocked.id===user.uid)){items=[{label:blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?"unBlock":'Block',icon:'pi pi-ban',command:()=>{blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?UnBlockUser():BlockUser();}}];}else{items=[blocked&&blocked.some(blocked=>blocked.id===userId)?"":{label:'Message',icon:'pi pi-envelope',command:()=>{setMessage(true);}},blocked&&blocked.some(blocked=>blocked.id===userId)?"":{label:'mute',icon:mutedme&&mutedme.some(mute=>mute.id===user.uid)?'pi pi-volume-on':'pi pi-volume-off',command:()=>{mutedme&&mutedme.some(mute=>mute.id===user.uid)?unMuteUser():MuteUser();}},{label:blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?"unBlock":'Block',icon:'pi pi-ban',command:()=>{blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?UnBlockUser():BlockUser();}},blocked&&blocked.some(blocked=>blocked.id===user.uid)?"":{label:'report',icon:'pi pi-exclamation-circle',command:()=>{}}];}const MuteUser=async()=>{// Remove the user ID from the "following" node of the current user
if(user){// Update the state with the modified followers array
await app1010.database().ref(`profile/${userId.value}/Muted/${user.uid}`).set(true);//    await app019.database().ref(`profile/${user.uid}/blockList/${userId.value}`).set(true);
}};const unMuteUser=async()=>{// Remove the user ID from the "following" node of the current user
if(user){// Update the state with the modified followers array
await app1010.database().ref(`profile/${userId.value}/Muted/${user.uid}`).remove(true);//    await app019.database().ref(`profile/${user.uid}/blockList/${userId.value}`).set(true);
}};//const [editable, setEdit] = useState(false);
const{0:Le,1:setLe}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:userisopen,1:setuserisopen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);//    const [newColor, setNewColor] = useState('');
//  const [displayPicker, setDisplayPicker] = useState(false);
//const [colorPickerTarget, setColorPickerTarget] = useState(null);
const{0:dark,1:setdark}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!Bio){return;}if(Bio.text){const resizedHtmlString=resizeImage(Bio.text);setHtmlString(resizedHtmlString);}},[Bio&&Bio.text]);const pickerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleClickOutside=event=>{if(pickerRef.current&&!pickerRef.current.contains(event.target)){setMessage(false);}};document.addEventListener("mousedown",handleClickOutside);return()=>{document.removeEventListener("mousedown",handleClickOutside);};},[pickerRef]);const visibility=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleClick=event=>{if(visibility.current&&!visibility.current.contains(event.target)){setVisibleFollowers(false);setVisibleFollow(false);}};document.addEventListener("mousedown",handleClick);return()=>{document.removeEventListener("mousedown",handleClick);};},[visibility]);const{0:visibleFollowers,1:setVisibleFollowers}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:SelectedFollower,1:setSelectedFollower}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const followersupdate=option=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex align-items-center justify-space-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{style:{width:"20px"},src:option.image?option.profileImg:_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,alt:"prof"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/profileComponents/${option.id}`}," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{key:option.id},option.username)," "));};console.log("if you see the",followers);const{0:visibleFollow,1:setVisibleFollow}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:SelectedFollow,1:setSelectedFollow}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const followi=option=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex align-items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{style:{width:"20px"},src:option.image?option.profileImg:_images_proxy_jpeg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,alt:"prof"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/profileComponents/${option.id}`}," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{key:option.id},option.username)," "));};const gradient=Bio.colors&&`linear-gradient( ${Bio.side&&Bio.side}, ${Bio.colors.join(', ')})`;const{0:Length,1:setLength}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const{0:light,1:setLight}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:` h-100 gradient-custom-2 mt-8 ${dark&&"darken"}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{marginTop:"100px"},className:`container mt-7 py-5 h-100 ${blockedme&&blockedme.some(blocked=>blocked.id===userId)?'blocked':''} ${dark?'darken':''}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"row  d-flex justify-content-center align-items-center h-100"},message&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:pickerRef,style:{marginTop:"0",position:"fixed",top:"20%",zIndex:"30",left:"10%"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Message__WEBPACK_IMPORTED_MODULE_7__["default"],{onClick:e=>e.stopPropagation(),email:Bio.email,currentUser:user&&user,useris:Bio&&Bio.usernamed,userid:userId})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col col-lg-9 col-xl-7"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"iflex rounded-top text-white d-flex  flex-row ",style:{background:dark?"#141515":"white",height:"20px",marginTop:"-15px",backdropFilter:"blur(15px) ",position:"relative",height:"100px",backgroundImage:`url(${profileImg})`,height:"200px",objectFit:"cover",background:gradient,backgroundSize:"contain"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"d-flex sizesm  flex-row",style:{position:"absolute",backdropFilter:"blur(8px)",background:dark?"rgba(0,0,0,0.20)":"rgba(255,255,255,0.31)"}}," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"webs",style:{height:"100%",fontSize:"1.5rem",textShadow:"1px 1px black",color:"white",textAlign:"top",margin:"0",zIndex:"1",fontFamily:"cursive",background:`-webkit-linear-gradient( blue, red, gray, yellow, purple, pink, green, indigo, crimson,aqua,orange,white,silver)`,webkitBackgroundClip:"text",webkitTextFillColor:"transparent",paddingLeft:"5px"}},Bio.usernamed?Bio.usernamed:"it's No 1","\xB4s_aesthetic_color")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"d-flex "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ms-4 mt-7 ",style:{width:"150px",marginTop:"30px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:profileImg,alt:"Gep",className:"img-fluid img-thumbnail mt-5 mb-2",style:{width:'150px',zIndex:'1'}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:" fitcotet  ml-1 ",style:{backdropFilter:"blur(8px)",background:dark?"rgba(0,0,0,0.20)":"rgba(0,0,0,0.11)",borderRadius:"10px",marginTop:"90px",width:"fit-content"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"fitstatus "},!userisopen&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5",{style:{color:"white",fontWeight:"bold",fontSize:"1.5rem",textShadow:"1px 1px 0.24px black"}}," ",Bio.usernamed?Bio.usernamed:deleted.isdeleted&&deleted.deletedname," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{color:"white",textShadow:"1.2px 1.2px 0.10px black"}},!deleted.isdeleted&&Bio.status?Bio.status:"It's only Memories "))))),!deleted.isdeleted&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:" smalldisplay ml-9  mt-4 mx-auto"},blocked&&blocked.some(blocked=>blocked.id===userId)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z,{className:"bg-danger h-fit-content",label:`${Bio&&Bio.usernamed} "Blocked You"`,disabled:true}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z,{disabled:blocked&&blocked.some(blocked=>blocked.id===userId)||blockedme&&blockedme.some(blocked=>blocked.id===user.uid),label:followers.some(follow=>user&&user.uid&&follow.id===user.uid)?"unFollow":following.some(follow=>user&&user.uid&&follow.id===user.uid)?"followBack":blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?"Blocked":"follow",onClick:followers.some(follow=>user&&user.uid&&follow.id===user.uid)?unfollowUser:followUser,severity:"secondary",outlined:"true",icon:"pi pi-user-plus",className:`changefrom mx-1 ${followers.some(follow=>user&&user.uid&&follow.id===user.uid)?"bgdar":blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?"bgred":"whited"}`,style:{backgroundColor:followers.some(follow=>user&&user.uid&&follow.id===user.uid)&&"black",padding:"5px",color:"white"}}),blocked&&blocked.some(blocked=>blocked.id===userId||blockedme&&blockedme.some(blocked=>blocked.id===user.uid))?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z,{label:"notify_me",severity:"secondary",outlined:"true",icon:"pi pi-bell",className:"changefrom mx-1 useracc",style:{padding:"5px",color:"white"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_menu__WEBPACK_IMPORTED_MODULE_11__/* .Menu */ .v,{model:blockedme&&blockedme.some(blocked=>blocked.id===user.uid)?items:blocked&&blocked.some(blocked=>blocked.id===userId)?item:items,className:`${dark&&"bg-dark"}`,popup:true,ref:menu}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z,{icon:"pi pi-ellipsis-h",className:"trans p-0 text-dark outline-none useracc",outlined:false,style:{border:"none",backgroundColor:"transparent"},onClick:e=>menu.current.toggle(e)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"p-4 text-black mt3",style:{backgroundColor:dark?"#141515":"#f8f9fa"}},!deleted.isdeleted&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"d-flex justify-content-end text-center py-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"mb-1 h5",style:{color:dark&&"silver"}},Length-1),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"small text-muted mb-0"},"Posts")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"px-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"mb-1 h5",style:{color:dark&&"silver"}},legth),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{disabled:!legth,style:{background:"transparent",border:"none"},onClick:()=>setVisibleFollowers(true)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{textShadow:'none'},className:"small text-muted mb-0"},"Followers")," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",null,visibleFollowers&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{position:"absolute",zIndex:"100",width:"fit-content",padding:"8px"},ref:visibility,className:"card flex justify-content-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_listbox__WEBPACK_IMPORTED_MODULE_12__/* .ListBox */ .w,{ref:menu,breakpoint:"767px",value:SelectedFollower,onChange:e=>setSelectedFollower(e.value),options:followers,optionLabel:"name",itemTemplate:followi,style:{width:"fit-content"},className:"w-full md:w-14rem",listStyle:{maxHeight:'250px'}})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"mb-1 h5",style:{color:dark&&"silver"}},Follows),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{disabled:!Follows,style:{background:"transparent",border:"none"},onClick:()=>setVisibleFollow(true)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{textShadow:'none'},className:"small text-muted mb-0"},"Following")," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",null,visibleFollow&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:visibility,style:{position:"absolute",zIndex:"100"},className:"card flex justify-content-center "},"\xB4",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(primereact_listbox__WEBPACK_IMPORTED_MODULE_12__/* .ListBox */ .w,{ref:menu,breakpoint:"767px",value:SelectedFollow,onChange:e=>setSelectedFollower(e.value),options:following,optionLabel:"name",itemTemplate:followersupdate,style:{width:"fit-content"},className:"w-full md:w-14rem",listStyle:{maxHeight:'250px'}})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`card-body p-4 ${dark&&"darken"}`,style:{background:dark&&"",color:dark?"silver":"black"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"lead fw-normal mb-1"},"About"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`p-4 ${dark&&"darken"}`,style:{backgroundColor:dark&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mb-0"},(0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(htmlString)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"d-flex justify-content-between align-items-center mb-4 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"lead fw-normal mb-0"},Bio.usernamed?Bio.usernamed:deleted.deletedname&&deleted.deletedname,"'s_posts"),Length>6&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"mb-0 p-0 bg-transparent color-dark"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"text-muted"},"Show all"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_news_Posted_Postit__WEBPACK_IMPORTED_MODULE_6__["default"],{setLight:setLight,dark:dark,setdark:setdark,setLen:setLe,setLength:setLength,Bio:Bio.usernamed,userId:userId}))))))));}const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"profile");

/***/ }),

/***/ 83869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/proxy-d399bc692ed8a689928018ed3b8a9403.jpeg");

/***/ }),

/***/ 59748:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","2022":"2022","Zena":"Zena","News":"News","Business":"Business","Sports":"Sports","Technology":"Technology","Entertainment":"Entertainment","Loading":"Loading","Sign_in":"Sign_in","Weather":"Weather","Trending":"Trending","more_news":"more_news","Previous":"previous","Next":"next","Copyright":"Copyright","Stock":"Stock","Language":"Language","Favorites":"Favorites","Logout":"Logout","Amharic":"Amharic","Spanish":"Spanish","Arabic":"Arabic","Swahili":"Swahili","French":"French","English":"English"}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-news-posted-postit-js.js.map