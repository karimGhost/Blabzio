"use strict";
exports.id = 5963;
exports.ids = [5963];
exports.modules = {

/***/ 94405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88965);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75159);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9016);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67815);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30359);
const firebaseConfig2={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function useAuth(){firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app05');const app05=firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.app('app05');const apps=app05;const{0:user,1:setUser}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const unsubscribe=app05.auth().onAuthStateChanged(firebaseUser=>{if(firebaseUser){setUser(firebaseUser);setLoading(true);}else{setUser(null);setLoading(false);}});return()=>unsubscribe();},[]);function signInWithEmailAndPassword(email,password){return app05.auth().signInWithEmailAndPassword(email,password);}function signOut(){setUser("");return app05.auth().signOut();}return{apps,user,setUser,app05,loading,signInWithEmailAndPassword,signOut};}

/***/ }),

/***/ 88682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 83869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/proxy-d399bc692ed8a689928018ed3b8a9403.jpeg");

/***/ }),

/***/ 33220:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x0: () => (/* binding */ nanoid)
});

// UNUSED EXPORTS: customAlphabet, customRandom, random, urlAlphabet

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(34347);
;// CONCATENATED MODULE: ./node_modules/nanoid/url-alphabet/index.js
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

;// CONCATENATED MODULE: ./node_modules/nanoid/index.js



const POOL_SIZE_MULTIPLIER = 128
let pool, poolOffset
let fillPool = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)
    ;(0,external_crypto_.randomFillSync)(pool)
    poolOffset = 0
  } else if (poolOffset + bytes > pool.length) {
    (0,external_crypto_.randomFillSync)(pool)
    poolOffset = 0
  }
  poolOffset += bytes
}
let random = bytes => {
  fillPool((bytes -= 0))
  return pool.subarray(poolOffset - bytes, poolOffset)
}
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let i = step
      while (i--) {
        id += alphabet[bytes[i] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  fillPool((size -= 0))
  let id = ''
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63]
  }
  return id
}


/***/ })

};
;
//# sourceMappingURL=component---src-pages-profile-components-message-js.js.map