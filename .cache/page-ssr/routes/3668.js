"use strict";
exports.id = 3668;
exports.ids = [3668];
exports.modules = {

/***/ 13668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileComments)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25935);
/* harmony import */ var primereact_speeddial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56002);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74420);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78052);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45795);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33220);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59417);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70982);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25692);
/* harmony import */ var _images_no_image_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42073);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34051);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99403);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75159);
/* harmony import */ var _Accounts_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94405);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87896);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57076);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(91871);
//import { InputText } from "primereact/inputtext";
const firebaseConfig2={apiKey:"AIzaSyA4-6Spjqf7Z_ks7fak2jnGKqtJG4uRqMk",authDomain:"zenahubglob.firebaseapp.com",databaseURL:"https://zenahubglob-default-rtdb.firebaseio.com",projectId:"zenahubglob",storageBucket:"zenahubglob.appspot.com",messagingSenderId:"414119474155",appId:"1:414119474155:web:d93f733443172ecd739fae",measurementId:"G-B65PR7NNXS"};function resizeImages(htmlString){const regex=/<img [^>]*>/g;const matches=htmlString.match(regex)||[];for(const match of matches){const widthRegex=/width="(\d+)"/;const heightRegex=/height="(\d+)"/;const widthMatch=match.match(widthRegex);const heightMatch=match.match(heightRegex);const width=widthMatch?parseInt(widthMatch[1]):undefined;const height=heightMatch?parseInt(heightMatch[1]):undefined;const newWidth=width?Math.floor(width/2):undefined;const newHeight=height?Math.floor(height/2):undefined;const widthAttr=newWidth?` width="${newWidth}"`:"";const heightAttr=newHeight?` height="${newHeight}"`:"";const newTag=match.replace(/\/?>/,`${widthAttr}${heightAttr} class="resized-imaged">`);htmlString=htmlString.replace(match,newTag);}const reg=/<p\b[^>]*>/gi;htmlString=htmlString.replace(reg,'<p class={` ${props.dark ?   "resizeded-p" : "resized-P" }`}>');const rel=/<code\b[^>]*>/gi;htmlString=htmlString.replace(rel,'<code class={` ${props.dark ?   "resizeded-p"  : "resized-P"}`} style={{color: props.dark ? "white" : "black"}}>');const re=/<h1\b[^>]*>/gi;htmlString=htmlString.replace(re,'<p class={` ${props.dark ?   "resizeded-p" : "resized-P" }`}>');return htmlString;}function ProfileComments(props){var _editRef$current,_editRef$current$getB;const toast=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);const{0:cards,1:setCards}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);const{0:cardmessage,1:setCardMessage}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');const{user,setUser,loading,signOut}=(0,_Accounts_useAuth__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.initializeApp(firebaseConfig2,'app15');const app5=firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.app('app15');const{0:valid,1:setValid}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);function validated(){setValid(pre=>!pre);}const prof=props.profileImg;const username=props.username;// Rating constructon start 
const{0:Rate,1:setRate}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);const{0:vote,1:setVote}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({upvote:0,downvote:0,userVote:0// -1 for downvote, 0 for no vote, 1 for upvote
});const{0:rates,1:setRates}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);// Function to handle the user's dislike action
async function handleDislike(id){if(!props.user){return;// User is not logged in, do nothing
}const cardId=`card-${id}-${props.user}`;setRates(prevRates=>{const updatedRates=prevRates.map(rate=>{if(rate.cardId===cardId){return{...rate,disliked:true,liked:false};}return rate;});// If the user hasn't rated this card before, addig a new entry
if(!updatedRates.some(rate=>rate.cardId===cardId&&rate.user===props.user)){updatedRates.push({cardId,user:props.user,liked:false,disliked:true,ip:id,userId:user.uid});}return updatedRates;});try{const snapshot=await app5.database().ref('Ratings').orderByChild('cardId').equalTo(cardId).once('value');if(snapshot.exists()){const ratingKey=Object.keys(snapshot.val())[0];// if there's only one matching rating
const rating=snapshot.val()[ratingKey];await app5.database().ref(`Ratings/${ratingKey}`).update({disliked:!rating.disliked,liked:false});}else{const userRef=app5.database().ref('Ratings');await userRef.push({cardId,user:props.user,liked:false,disliked:true,ip:id,userId:user.uid,date:new Date()});}}catch(error){console.error('Error updating:',error);}}// Function to handle the user's like action
async function handleLike(id){if(!props.user){return;// User is not logged in, do nothing
}const cardId=`card-${id}-${props.user}`;// Update the local state
setRates(prevRates=>{const updatedRates=prevRates.map(rate=>{if(rate.cardId===cardId){return{...rate,liked:true,userId:user.uid,disliked:false};}return rate;});// If the user hasn't rated this card before, add a new entry
if(!updatedRates.some(rate=>rate.cardId===cardId&&rate.user===props.user)){updatedRates.push({cardId,user:props.user,liked:true,disliked:false,ip:id,userId:user.uid,date:new Date()});}return updatedRates;});try{const snapshot=await app5.database().ref('Ratings').orderByChild('cardId').equalTo(cardId).once('value');if(snapshot.exists()){const ratingKey=Object.keys(snapshot.val())[0];// assuming there's only one matching rating
const rating=snapshot.val()[ratingKey];await app5.database().ref(`Ratings/${ratingKey}`).update({liked:!rating.liked,userId:user.uid,disliked:false});}else{const userRef=app5.database().ref('Ratings');await userRef.push({cardId,user:props.user,liked:true,disliked:false,ip:id,userId:user.uid,date:new Date()});}}catch(error){console.error('Error updating:',error);}}(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const ratingsRef=app5.database().ref('Ratings');// Listen for changes to the user's rating data
const listener=ratingsRef.on('value',snapshot=>{const data=snapshot.val();if(!data){setRates([]);return;}const ratings=Object.entries(data).map(([key,value])=>({...value,id:key}));setRates(ratings);});// Clean up the listener when the component unmounts
return()=>ratingsRef.off('value',listener);},[user]);/*


 useEffect(() => {
      try {
        const RateRef = app5.database().ref(`Ratings/`);
    
        RateRef.on('value', (snapshot) => {
          const ratesnapshot = snapshot.val();
          if (ratesnapshot) {
            const allData = Object.values(ratesnapshot);
            setRate(allData);
          } else {
            setRate([]);
          }
        });
    
        return () => {
          RateRef.off('value')
        };
      } catch (error) {
        console.error('Error setting up Firebase listener:', error)
      }
  
  
  
}, [user]);

console.log('This are the data from Rate firebase see them ',rates)
///the Rates up
///
async function handleDisLikes(d) {
  if (props.user) {
    setRate((rate) => {
      const updatedRate = [...rate];
      const index = updatedRate.findIndex((r) => r.user === props.user);
      if (index !== -1) {
        updatedRate[index] = {
          ...updatedRate[index],
          disliked:  false,
          liked: !liked,
        };
      } else {
        updatedRate.push({
          ip: d,
          id: props.user,
          disliked: false,
          liked: true,
          user: props.user,
        });
      }
      return updatedRate;
    });

    try {
      const snapshot = await app5.database()
        .ref(`Ratings/`)
        .orderByChild('user')
        .equalTo(props.user)
        .once('value');

      if (snapshot.exists()) {
        const ratingKey = Object.keys(snapshot.val())[0]; // assuming there's only one matching rating
        const rating = snapshot.val()[ratingKey];
        await app5.database().ref(`Ratings/${ratingKey}`).update({
          liked: !rating.liked,
          disliked: rating.disliked? false : rating.disliked,
        });
      } else {
        const userRef = app5.database().ref(`Ratings/`);
  await userRef.update({
    ip: d,
    id: props.user,
    disliked: false,
    liked: true,
    user: props.user,
  });
      }
    } catch (error) {
      console.log(error);
    }
    validated();
  }
}

//Ratings Construction End

*/ //handle commenting start constuction
async function handleClick(ip){const id=(0,nanoid__WEBPACK_IMPORTED_MODULE_8__/* .nanoid */ .x0)();if(cardmessage.trim()!==''){try{const snapshot=await app5.database().ref("commentpost").orderByChild("ip").equalTo(ip).once("value");if(snapshot.exists()){await app5.database().ref(`commentpost/${id}`).update({id:id,ip:ip,message:cardmessage.trim(),profile:props.profileuser,username:props.user,font:"sans-serif",showCommentBox:'',cardm:cards.length,isactive:true,liked:'0',disliked:'1',userId:user.uid,date:new Date()});}else{setCards([...cards,{id:id,ip:ip,message:cardmessage.trim(),profile:props.profileuser,username:props.user,font:"sans-serif",showCommentBox:'',cardm:cards.length,isactive:true,liked:'0',disliked:'1',userId:user.uid,date:new Date()}]);const userRef=app5.database().ref(`commentpost/${id}`);userRef.set({id:id,ip:ip,message:cardmessage.trim(),profile:props.profileuser,username:props.user,font:"sans-serif",showCommentBox:'',cardm:cards.length,isactive:true,liked:'0',disliked:'1',userId:user.uid,date:new Date()});}}catch(error){console.log(error);}finally{setCardMessage('');}}}//handle commenting end construction
const{0:showreply,1:setShowReply}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);const{0:replied,1:setReplied}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);const{0:cardreply,1:setCardreply}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0');const{0:replyHid,1:setReplyHid}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);const{0:visible,1:setVisible}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);function testit(){props.handleCommen();setVisible(false);}const{0:position,1:setPosition}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('center');const footerContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{label:"No",icon:"pi pi-times",onClick:()=>setVisible(false),className:"p-button-text pi-text-help"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{className:"p-button-warning",severity:"warning",label:"YEP!",icon:"pi pi-check",onClick:testit,autoFocus:true}));const show=position=>{setPosition(position);setVisible(true);};const{0:visib,1:setVisib}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);function testdelete(id){props.handleDismiss(id);setVisible(false);}async function handleDeletereply(id){try{const commentRef=app5.database().ref("Replies/replied");const snapshot=await commentRef.orderByChild("ip").equalTo(id).once("value");snapshot.forEach(childSnapshot=>{// Check if the child has a matching ID and delete it if it does
if(childSnapshot.val().ip===id){commentRef.child(childSnapshot.key).remove();}});}catch(error){console.log(error);}}async function handleDelete(id){handleDeletereply(id);try{const commentRef=app5.database().ref("commentpost");const snapshot=await commentRef.orderByChild("id").equalTo(id).once("value");snapshot.forEach(childSnapshot=>{// Check if the child has a matching ID and delete it if it does
if(childSnapshot.val().id===id){commentRef.child(childSnapshot.key).remove();}});}catch(error){console.log(error);}}const{0:positio,1:setPositio}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('center');const footerConten=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{label:"No",icon:"pi pi-times",onClick:()=>setVisib(false),className:"p-button-text pi-text-help"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{style:{background:"red"},className:"p-button-error",severity:"error",label:"confirm",icon:"pi pi-check",onClick:()=>testdelete(props.ids),autoFocus:true}));const sho=positio=>{setPositio(position);setVisib(true);};const{0:howm,1:sethowm}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);function handleClear(){toast.current.value="";}const{0:val,1:setval}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);const handleReplyHid=d=>{setCards(prevCards=>prevCards.map(card=>card.id===d?{...card,isactive:!card.isactive}:card));cards.map(card=>card.id===d&&card.isactive?setval(false):card.id===d&&!card.isactive?setval(true):true);};const handleDismiss=id=>{setReplied(cards=>cards.filter(card=>card.id!==id));setCardreply(editing=>{const{[id]:_,...rest}=cardreply;return rest;});};//  reply coment construction start
async function handleReply(d){const ids=(0,nanoid__WEBPACK_IMPORTED_MODULE_8__/* .nanoid */ .x0)();if(cards.some(card=>card.id===d)){setReplied(cards=>[...cards,{ip:d,id:ids,message:"",font:"sans-serif",showCommentBox:"",isactive:true,leng:"i",likes:null,profile:props.profileuser,// Add new property for profile
username:props.user,userId:user.uid,date:new Date()}]);setCards(prevCards=>prevCards.map(card=>card.id===d?{...card,isactive:true}:card));}else{}};/*

     useEffect(() => {

  app5.database()
    .ref("Replies")
    .once("value")
    .then((snapshot) => {
    const Replies = snapshot.val();
    if(Replies && Replies.replied){
    const cardArray = Object.values(Replies.replied);
        setReplied(cardArray);
          console.log('are these Replies ',cardArray)
  const editingObject = Object.fromEntries(cardArray.map((card) => [card.id, true]));
     setCardreply(editingObject);
}

  


})



console.log('are these Replies ', cards)

}, [user]);
  

*/async function handlePost(id){const nano=(0,nanoid__WEBPACK_IMPORTED_MODULE_8__/* .nanoid */ .x0)();setCardreply(cardreply=>({...cardreply,[id]:true}));handleClear();try{const snapshot=await app5.database().ref(`Replies/`).orderByChild("ip").equalTo(id).once("value");if(snapshot.exists()){await app5.database().ref(`Replies/`).update({replied});}else{const Replies=app5.database().ref(`Replies/`);Replies.set({replied});}}catch(error){console.log(error);}validated();}/*



*/(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(user){const commentsRef=app5.database().ref(`Replies/`);const commentsListener=commentsRef.on('value',snapshot=>{if(snapshot.exists()){const commentsArray=Object.values(snapshot.val().replied);const editingObject=commentsArray.reduce((acc,card)=>{acc[card.id]=true;return acc;},{});setCardreply(editingObject);setReplied(commentsArray);}});// Return a cleanup function to remove the listener when the component unmounts or when the `user` state changes.
return()=>commentsRef.off('value',commentsListener);}},[user]);//end reply construct
// dismiss comment Construct start
const handlePostExit=(ip,id)=>{setReplied(cards=>cards.filter(card=>card.id!==id));};//dismised End
// Thumbs Start Construct 
const{0:selectedThumb,1:setSelectedThumb}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);const items=[{label:'Add',icon:'pi pi-pencil',size:'sm',buttonClassName:"p-button-warning bold border-non  w-2rem h-2rem p-button-outlined sm m- p-button-rounded p-mt-2 p-0",command:()=>{//  toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
show('top-left');}},{label:'Delete',icon:'pi pi-trash',size:'sm',color:'danger',style:{backgroundColor:'red',color:'white'},className:'my-danger-class',command:()=>{// toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
sho('top');}},{label:'Share',icon:'pi pi-external-link',size:'sm',command:()=>{props.snoop();}}];const List=[{label:'share',icon:'pi pi-external-link',size:'sm',command:()=>{props.snoop();}},{label:'Report',icon:'pi pi-exclamation-triangle',size:'sm',severity:'danger',command:()=>{// toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
sho('top');}}];//Thumbs Construct end
//construct Adjusting the textarea based in the values entered 
const{0:rows,1:setRows}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);function handleChange(event){const textareaLineHeight=24;// 
const previousRows=event.target.rows;event.target.rows=2;// reset the number of rows to 1
const currentRows=Math.ceil((event.target.scrollHeight-textareaLineHeight)/textareaLineHeight);if(currentRows===previousRows){event.target.rows=currentRows;}else{event.target.rows=currentRows;setRows(currentRows);}setCardMessage(event.target.value);}// ---------------------
const{0:numDislikedCardRates,1:setNumDislikedCardRates}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);const Handlecancel=()=>{handleClear();props.handlecancel();};const{0:rowe,1:setRowe}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);const handleEdit=(id,event)=>{const textareaLineHeight=24;// adjust this value based on   font-size
const previousRows=event.target.rows;event.target.rows=2;// reset the number of rows to 1
const currentRows=Math.ceil((event.target.scrollHeight-textareaLineHeight)/textareaLineHeight);if(currentRows===previousRows){event.target.rows=currentRows;}else{event.target.rows=currentRows;setRows(currentRows);}setReplied(replied=>replied.map(card=>card.id===id?{...card,message:event.target.value}:card));};const{0:isOpen,1:setIsOpen}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);const handleToggle=()=>{setIsOpen(!isOpen);};const{0:rateClick,1:setRatesClick}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const ratingsRef=app5.database().ref('Reply');// Listen for changes to the user's rating data
const listener=ratingsRef.on('value',snapshot=>{const data=snapshot.val();if(!data){setRatesClick([]);return;}const ratings=Object.entries(data).map(([key,value])=>({...value,id:key}));setRatesClick(ratings);});// Clean up the listener when the component unmounts
return()=>ratingsRef.off('value',listener);},[user]);// Function to handle the user's dislike action
async function handleDislikeClick(id){if(!props.user){return;// User is not logged in, do nothing
}const cardId=`card-${id}-${props.user}`;setRatesClick(prevRates=>{const updatedRates=prevRates.map(rate=>{if(rate.cardId===cardId){return{...rate,disliked:true,userId:user.uid,liked:false};}return rate;});// If the user hasn't rated this card before, add a new entry
if(!updatedRates.some(rate=>rate.cardId===cardId&&rate.user===props.user)){updatedRates.push({cardId,user:props.user,liked:false,disliked:true,ip:id,date:new Date(),userId:user.uid});}return updatedRates;});try{const snapshot=await app5.database().ref('Reply').orderByChild('cardId').equalTo(cardId).once('value');if(snapshot.exists()){const ratingKey=Object.keys(snapshot.val())[0];// assuming there's only one matching rating
const rating=snapshot.val()[ratingKey];await app5.database().ref(`Reply/${ratingKey}`).update({disliked:!rating.disliked,liked:false});}else{const userRef=app5.database().ref('Reply');await userRef.push({cardId,user:props.user,liked:false,disliked:true,ip:id,userId:user.uid,date:new Date()});}}catch(error){console.error('Error updating:',error);}}// Function to handle the user's like action
async function handleLikeClick(id){if(!props.user){return;// User is not logged in, do nothing
}const cardId=`card-${id}-${props.user}`;// Update the local state
setRatesClick(prevRates=>{const updatedRates=prevRates.map(rate=>{if(rate.cardId===cardId){return{...rate,liked:true,userId:user.uid,disliked:false};}return rate;});// If the user hasn't rated this card before, add a new entry
if(!updatedRates.some(rate=>rate.cardId===cardId&&rate.user===props.user)){updatedRates.push({cardId,user:props.user,liked:true,disliked:false,ip:id,userId:user.uid,date:new Date()});}return updatedRates;});try{const snapshot=await app5.database().ref('Reply').orderByChild('cardId').equalTo(cardId).once('value');if(snapshot.exists()){const ratingKey=Object.keys(snapshot.val())[0];// assuming there's only one matching rating
const rating=snapshot.val()[ratingKey];await app5.database().ref(`Reply/${ratingKey}`).update({liked:!rating.liked,disliked:false});}else{const userRef=app5.database().ref('Reply');await userRef.push({cardId,user:props.user,liked:true,disliked:false,ip:id,userId:user.uid,date:new Date()});}}catch(error){console.error('Error updating:',error);}}const{0:htmlString,1:setHtmlString}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");/*

useEffect(() => {
  if (user) {
    try {
      const RateRef = app5.database().ref(`Ratings/`);
  
      RateRef.on('value', (snapshot) => {
        const ratesnapshot = snapshot.val();
        if (ratesnapshot) {
          const RateArray = Object.values(ratesnapshot);
          setRate(RateArray);
        } else {
          setRate(null);
        }
      });
      
      return () => {
        RateRef.off('value');
      };
    } catch (error) {
      console.error('Error setting up Firebase listener:', error);
    }
  } else {
    setRate(null);
  }
}, [user]);
*/(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(user){const commentsRef=app5.database().ref(`commentpost/`);commentsRef.on('value',snapshot=>{if(!snapshot.val()){return;}const commentsArray=Object.values(snapshot.val());setCards(commentsArray);});// cleanup function to remove the listener when the component unmounts
return()=>commentsRef.off('value');}},[user]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(props.posted&&typeof props.posted!=="object"){const resizedHtmlString=resizeImages(props.posted);setHtmlString(resizedHtmlString);}else if(props.posted&&typeof props.posted==="object"){setHtmlString(`<div>

    <h6> From News Content</h6>
    <h5>${props.posted.title}</h5>
      <img src=${props.posted.images[3]?props.posted.images[3]:_images_no_image_jpg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z} />
     
      <p>${props.posted.paragraphs}</p>
    </div>`);}},[props.posted]);const{0:htmlCopied,1:setHtmlCopied}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(props.copied&&typeof props.copied[0].message!=="object"){const resizedHtmlString=resizeImages(props.copied[0].message);setHtmlCopied(resizedHtmlString);}else if(props.copied&&typeof props.copied[0].message==="object"){setHtmlCopied(`<div class="bggray">
   
      <img class="bgimg" src=${props.copied[0].message.images[3]?props.copied[0].message.images[3]:_images_no_image_jpg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z} />
      <h1 class="bgh1">${props.copied[0].message.title}</h1>
      <p class="bgp">${props.copied[0].message.paragraphs}</p>
    </div>`);}},[props.copied]);function edited(){if(editRef.current){editRef.current.style.height='100%';setuseRef(false);}}const setFullSizeImage=props.setFullSizeImage;const fullSizeImage=props.fullSizeImage;const{0:edrefs,1:setedref}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);const edref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);const editRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);const{0:useref,1:setuseRef}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);const editHeight=(_editRef$current=editRef.current)===null||_editRef$current===void 0?void 0:(_editRef$current$getB=_editRef$current.getBoundingClientRect())===null||_editRef$current$getB===void 0?void 0:_editRef$current$getB.height;if(editRef.current){if(editHeight>=120){editRef.current.style.height="60vh";edref.current.style.display="flex";}else{editRef.current.style.height="fit-content";edref.current.style.display="none";}}const debouncedHandleChange=lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(event=>{handleEd(event);},300);const edits=id=>{edited(id);debouncedHandleChange(id);};function handleEd(id){if(editRef.current!==null&&id===editRef.current.id){console.log("it's fogginggggggggggggggggggggg second");editRef.current.style.height='100%';}}function edited(id){console.log("it's fogginggggggggggggggggggggg first");if(editRef.current!==null&&id===editRef.current.id){console.log("it's fogginggggggggggggggggggggg third");editRef.current.style.height='100%';setedref(false);}}//show the user there upvotes
/*

useEffect(() => {
  if (!props.user) {
    setRates([]);
    return;
  }

  const ratingsRef = app5.database().ref('Ratings');

  // Listen for changes to the user's rating data
  const listener = ratingsRef.orderByChild('user').equalTo(props.user).on('value', (snapshot) => {
    const data = snapshot.val();

    if (!data) {
      setRates([]);
      return;
    }

    const ratings = Object.entries(data).map(([key, value]) => ({
      ...value,
      id: key,
    }));

    setRates(ratings);
  });

  // Clean up the listener when the component unmounts
  return () => ratingsRef.off('value', listener);
}, [props.user]);


////the Top
useEffect(() => {
  if (user) {
    try {
      const RateRef = app5.database().ref(`Ratings/`);
  
      RateRef.on('value', (snapshot) => {
        const ratesnapshot = snapshot.val();
        if (ratesnapshot) {
          const rateObj = {};
          Object.keys(ratesnapshot).forEach((key) => {
            const rate = ratesnapshot[key];
            const cardId = rate.ip;
            if (!rateObj[cardId]) {
              rateObj[cardId] = [];
            }
            rateObj[cardId].push(rate);
          });
          setRate(rateObj);
        } else {
          setRate({});
        }
      });
      
      return () => {
        RateRef.off('value');
      };
    } catch (error) {
      console.error('Error setting up Firebase listener:', error);
    }
  } else {
    setRate({});
  }
}, [user]);
*/ //end of user upvotes show
const formatDate=date=>{if(!date){return"";}const timeDiffMs=new Date()-new Date(date);const timeDiffSec=Math.floor(timeDiffMs/1000);if(timeDiffSec<60){return`${timeDiffSec} sec ago`;}const timeDiffMin=Math.floor(timeDiffSec/60);if(timeDiffMin<60){return`${timeDiffMin} min ago`;}const timeDiffHr=Math.floor(timeDiffMin/60);if(timeDiffHr<24){return`${timeDiffHr} h ago`;}const timeDiffDay=Math.floor(timeDiffHr/24);if(timeDiffDay<30){return`${timeDiffDay} day ago`;}const timeDiffMo=Math.floor(timeDiffDay/30);if(timeDiffMo<12){return`${timeDiffMo} mo ago`;}const timeDiffYr=Math.floor(timeDiffMo/12);return`${timeDiffYr} yr ago`;};const copied=props.copied;const used=props.user;const location=(0,_reach_router__WEBPACK_IMPORTED_MODULE_6__.useLocation)();let isBlogActive;if(location.pathname.startsWith('/profileComponents/Myprofile')){isBlogActive=true;}else{isBlogActive=false;}let bg;if(location.pathname.startsWith('/profileComponents/Profiles')){bg=true;}else{bg=false;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section",{className:` zIndex-2 ${props.dark&&"darken"}`,style:{height:"fit-content",width:'100%',marginLeft:"auto",marginRight:"auto"}},props.user===username&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null,isBlogActive&&props.user===username||props.Bio===username?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_11__/* .Toast */ .F,{ref:toast}),!props.shared&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:`py-1 mx-auto px-0 m ${props.dark?"bgswhiteBlack":"bgswhite"}`,style:{}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{style:{background:"transparent"},className:"justify-content-center m-0 p-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{width:"100%"},md:"12",lg:"10",xl:"10",className:" w-100 p-0 mx-0 px-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{className:`"p-0  carde  m-auto"   ${props.dark?"bb":'pp'}`,style:{color:props.dark?"silver":"black",background:props.dark&&"#141515",width:"100%",padding:"0"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Body,{className:" p-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Body,null,props.user===username?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_speeddial__WEBPACK_IMPORTED_MODULE_14__/* .SpeedDial */ .V,{showIcon:"",outlined:true,buttonClassName:`${isOpen?'pi pi-times':'pi pi-ellipsis-h'} p-button-warning bold border-non p-button-outlined    sm   p-mt-2 p-0 p-2 w-2rem h-2rem`,model:items,visible:isOpen,onShow:handleToggle,onHide:handleToggle,direction:"down",style:{padding:"2px",paddingLeft:"4px",zIndex:"3",position:"absolute",top:"0",left:"0",color:"black",fontWeight:"bold"}}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_speeddial__WEBPACK_IMPORTED_MODULE_14__/* .SpeedDial */ .V,{showIcon:"",outlined:true,buttonClassName:`  ${isOpen?' pi pi-times':'pi pi-ellipsis-h'}   p-button-success bold border-non  w-2rem h-2rem p-button-outlined sm   p-mt-1   p-2  '`,model:List,visible:isOpen,onShow:handleToggle,onHide:handleToggle,direction:"down",style:{padding:"2px",paddingLeft:"4px",zIndex:"3",position:"absolute",top:"0",left:"0",color:"black",fontWeight:"bold"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"card"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_dialog__WEBPACK_IMPORTED_MODULE_15__/* .Dialog */ .V,{header:"Please Confrim",visible:visible,position:position,style:{width:'50vw'},onHide:()=>setVisible(false),footer:footerContent,draggable:false,resizable:false},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"m-0"},"Are you sure you want to Edit your post!")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_dialog__WEBPACK_IMPORTED_MODULE_15__/* .Dialog */ .V,{header:"Please Confrim",visible:visib,position:positio,style:{width:'50vw'},onHide:()=>setVisib(false),footer:footerConten,draggable:false,resizable:false},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{style:{fontSize:"1.4rem"},className:"m-0 "},"Are you sure you want to delete Your post ?"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{marginBottom:"-30px"},className:"d-flex flex-start align-items-center "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:`/profileComponents/Profiles?id=${props.userId}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Img,{className:"rounded-circle shadow-1-strong me-3",src:props.profileImg,alt:props.username,style:{width:"50px",height:"50px"},width:"60",height:"60"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:props.username===props.user?`/profileComponents/Myprofile`:`/profileComponents/Profiles?id=${props.userId}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h5",{className:"fw-bold   mb-1 ml-2",style:{color:props.dark?"silver":"black"}},props.username,props.userId)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"text-muted small mb-0 ml-2"}," ",props.datePosted)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"w-auto p-0 ",style:{color:props.dark?"white":"black",marginLeft:"15%",marginRight:"10%",padding:"0px",width:"200%"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{ref:editRef,className:"ppp",onClick:()=>edited(props.ids),id:props.ids,style:{background:"transparent",cursor:"pointer",overflow:"hidden"}},(0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(htmlString)),edrefs&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{id:props.ids,ref:edref,onClick:()=>edits(props.ids),style:{height:"fit-content",display:"flex",flexDirection:"column",cursor:"pointer",background:"rgba(0,0,0,0.19)",color:"purple",fontSize:"1rem"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__/* .FontAwesomeIcon */ .G,{"fa-fade":true,style:{color:"orange"},className:"bounce-fadeds",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__/* .faChevronDown */ .ptq}),"   ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",{style:{textAlign:"center",fontSize:"0.80rem"}},"Show More")," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"text-dark"},copied&&copied.user),props.copied&&props.copied.length>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{width:"100%",background:props.dark&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{alignItems:"center",width:"50%",margin:"auto",background:props.dark?"#141515":'rgba(0,0,0,0.11)'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{style:{textAlign:"center",color:"green",fontWeight:"bold",fontFamily:"cursive",background:"black"}},"reposted content"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{display:"flex"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:props.username===props.user?`/profileComponents/Myprofile`:`/profileComponents/${props.copied[0].userId}`},"     ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Img,{className:"rounded-circle shadow-1-strong me-3",src:copied[0].profile,alt:copied[0].user,width:"60",height:"60"})," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{display:""}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:props.username===props.user?`/profileComponents/Myprofile`:`/profileComponents/${props.copied[0].userId}`},"  ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h5",{className:"fw-bold text-dark  mb-1"},copied[0].user)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"text-muted small ml-1 pl-1 mb-0"}," ",formatDate(copied[0].datePosted)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{ref:editRef,onClick:()=>edited(props.ids),className:"mb-0 Edits ",id:props.ids,style:{cursor:"pointer",overflow:"hidden",boxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",webkitBoxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)",moZboxShadow:"inset 0px -28px 17px 1px rgba(0,0,0,0.19)"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"w-auto p-0 ppp",style:{color:props.dark?"white":"black",marginLeft:"auto",marginRight:"auto",padding:"0px",width:"200%"}},(0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(htmlCopied))),useref&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button",{onClick:()=>edited(props.ids),style:{background:"rgba(1,1,1,0.11)",border:"none "}},"show more..."))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Body,{style:{background:props.dark&&""},className:` ${props.dark&&"#141515"} px-1 `},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"small d-flex justify-content-start w-100  mx-0 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"thumbs-container p-grid mt-2 pt-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{zIndex:isOpen?"1":"3"},className:"thumb p-col-6 px-1  "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{onClick:()=>handleLike(props.ids),style:{background:props.dark?"#141515":"white",backgroundColor:props.dark?"#141515":"white",border:"none",boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.2)',color:props.dark?"silver":"gray"},className:`${(rates&&Array.isArray(rates)&&rates.some(c=>c.ip===props.ids&&c.liked===true)?"selected":'',props.dark&&"darken")}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i",{className:"fot pi pi-thumbs-up p-overlay-badge",style:{textShadow:"none",fontSize:Array.isArray(rates)&&Rate.id&&Rate[props.ids].some(c=>c.disliked)&&"1.4rem"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_badge__WEBPACK_IMPORTED_MODULE_17__/* .Badge */ .C,{style:{background:"transparent",color:"green"},className:"badged pl-2",severity:"s",value:rates&&Array.isArray(rates)&&rates.some(c=>c.ip===props.ids&&c.liked===true)&&rates.filter(rate=>rate.ip===props.ids).filter(rate=>rate.liked===true).length})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"thumb p-col-6 p-3 mx-0 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{onClick:()=>handleDislike(props.ids),style:{background:props.dark?"#141515":"white",backgroundColor:props.dark?"#141515":"white",border:"none",boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.2)',color:props.dark?"silver":"gray"},className:`${(rates&&Array.isArray(rates)&&rates.some(c=>c.ip===props.ids&&c.disliked===true)?"selectedr":"",props.dark&&"darken")}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i",{className:" fot pi pi-thumbs-down p-overlay-badge",style:{textShadow:"none",fontSize:Array.isArray(Rate)&&Rate.id&&Rate[props.ids].some(c=>c.disliked)&&"1.4rem"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_badge__WEBPACK_IMPORTED_MODULE_17__/* .Badge */ .C,{style:{background:"transparent",color:"red"},className:"badged pl-2",severity:"s",value:rates&&Array.isArray(rates)&&rates.some(c=>c.ip===props.ids&&c.disliked===true)&&rates.filter(rate=>rate.ip===props.ids).filter(rate=>rate.disliked===true).length}))))),!props.showCommentBox?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{onClick:props.handleComment,className:"card",style:{background:props.dark?"#141515":"white"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button",{style:{background:props.dark?"#141515":"white",marginTop:" 2.0rem",border:"none",boxShadow:"1px 2px 2px 1px rgba(0,0,0,0.11)",textShadow:props.dark&&" none",color:"#868686"},className:"d-flex align-items-center me-3  "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_18__/* .FaComment */ .DCG,{style:{color:"#868686"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"mb-0"},"Comment ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",null," (",Array.isArray(cards)&&cards.filter(card=>card.ip===props.ids).length,")")))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{onClick:Handlecancel,className:"card",style:{background:props.dark?"#141515":"white"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button",{style:{textShadow:props.dark&&" none",marginTop:" 2.0rem",border:"none",color:"#868686",background:props.dark?"#141515":"white"},className:"d-flex align-items-center me-3 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_18__/* .FaComment */ .DCG,{style:{color:"#868686"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"mb-0"},"Close ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",null,"   (",Array.isArray(cards)&&cards.filter(card=>card.ip===props.ids).length,")"))))))),props.showCommentBox&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Footer,{className:"py-3 border-0",style:{backgroundColor:props.dark?"#141515":"#f8f9fa"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"d-flex flex-start w-100"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:`/pagesprofileComponents/Profiles?id=${props.userId}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Img,{className:"rounded-circle shadow-1-strong me-3 mr-1",src:props.profileImg,alt:props.username,width:"40",height:"40",style:{marginLeft:"-4px"}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"textarea-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea",{onChange:handleChange,placeholder:"add Comment..",style:{height:rows*24+'px',padding:"10px",borderRadius:"20px",border:"1px solid grey"}// adjust this value based on your font-
,className:"w-100",id:"area",ref:toast,value:cardmessage}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"float-end mt-2 pt-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{style:{borderRadius:"15px",background:"black"},size:"sm",className:"me-1  sizeis ",onClick:()=>handleClick(props.ids)},"post"))),props.showCommentBox&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section",{style:{height:'fit-content',zIndex:'1',marginBottom:""},className:"gradient-custom   mb-3 zIndex-3 h-100 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"py-5",style:{maxWidth:"1000px",background:props.dark&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{className:"justify-content-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"col",md:"12",lg:"10",xl:"8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Body,{className:"p-2 m-0 ",style:{background:props.dark&&"#141515"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{tag:"h4",className:"text-center mb-4 pb-2"},"comments ",replied&&replied.message),Array.isArray(cards)&&cards&&cards.slice().reverse().map(card=>card.ip===props.ids&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{style:{width:"100%",justifyContent:" center"},key:card.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:" d-flex flex-start"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:`/profileComponents/Profiles?id=${card.userId}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Img,{className:"rounded-circle shadow-1-strong me-3 ",src:card.profile,alt:"card.user",width:"55",height:"55"})," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"flex-grow-1 flex-shrink-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"d-flex  justify-content-between align-items-cente"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:`/profileComponents/Profiles?id=${card.userId}`}," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"mb-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",{className:"small",style:{wordBreak:"keep-all",whiteSpace:"nowrap"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",null,card.username," "," "," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i",null,"-",formatDate(card.date))," "),"  "))),props.user&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_speeddial__WEBPACK_IMPORTED_MODULE_14__/* .SpeedDial */ .V,{showIcon:"pi pi-ellipsis-h",hideIcon:"pi pi-times",outlined:true,size:"sm",buttonClassName:`${card.username===props.user?"p-button-warning":props.username?"p-button-secondary":"p-button-success"}  bold border-non  w-2rem h-2rem p-button-outlined sm m- p-button-rounded p-mt-4 mt-5 p-0 mr-5`,model:card.username===props.user?[{label:'delete',icon:'pi pi-trash',size:'sm',command:()=>{handleDelete(card.id);}}]:props.user===props.username?[{label:'delete',icon:'pi pi-trash',size:'sm',command:()=>{handleDelete(card.id);}},{label:'Report',icon:'pi pi-exclamation-triangle',size:'sm',command:()=>{// toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
}}]:props.user===props.username&&card.username===props.username?[{label:'delete',icon:'pi pi-trash',size:'sm',command:()=>{handleDelete(card.id);}}]:card.username!==props.user&&props.username!==props.user&&[{label:'Report',icon:'pi pi-exclamation-triangle',size:'sm',command:()=>{// toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
sho('top');}}],onShow:handleToggle,onHide:handleToggle,direction:"down",style:{zIndex:"3",position:"absolute",top:"0",right:"-30px",border:"none",color:"black",fontWeight:"bold"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"d-flex align-items-center mb-1"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{marginBottom:"-10px",margin:"auto",paddingBottom:"0"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{style:{fontSize:"1rem",fontFamily:"monospace"},className:"break small bold italic mb-0 break-word "},(0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(card.message))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"thumbs-container p-grid",style:{marginLeft:"-40px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"thumb p-col-6 pr-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{onClick:()=>handleLikeClick(card.id),style:{paddingTop:"5px",paddingBottom:"5px",background:props.dark?"#141515":"white",backgroundColor:props.dark?"#141515":"white",border:"none",boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.2)',color:props.dark?"silver":"gray"},className:`'fot '  ${rateClick&&Array.isArray(rateClick)&&rateClick.some(c=>c.ip===card.id&&c.liked===true)?"selected":''}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i",{className:"pi pi-thumbs-up p-overlay-badge",style:{fontSize:Array.isArray(rateClick)&&rateClick.id&&rateClick[card.id].some(c=>c.disliked)&&"1.4rem"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_badge__WEBPACK_IMPORTED_MODULE_17__/* .Badge */ .C,{style:{background:"transparent",color:"green"},className:"badged pl-2",severity:"s",value:rateClick&&Array.isArray(rateClick)&&rateClick.some(c=>c.ip===card.id&&c.liked===true)&&rateClick.filter(rateClick=>rateClick.ip===card.ip).filter(rateClick=>rateClick.liked===true).length})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"thumb p-col-6 p-3 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{onClick:()=>handleDislikeClick(card.id),className:`'fot' ${rateClick&&Array.isArray(rateClick)&&rateClick.some(c=>c.ip===card.id&&c.disliked===true)?"selectedr":''}`,style:{paddingTop:"5px",paddingBottom:"5px",background:props.dark?"#141515":"white",backgroundColor:props.dark?"#141515":"white",border:"none",boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.2)',color:props.dark?"silver":"gray"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i",{className:"pi pi-thumbs-down p-overlay-badge",style:{fontSize:Array.isArray(rateClick)&&rateClick.id&&rateClick[card.id].some(c=>c.disliked)&&"1.4rem"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_badge__WEBPACK_IMPORTED_MODULE_17__/* .Badge */ .C,{style:{background:"transparent",color:"red"},className:"badged pl-2",severity:"s",value:rateClick&&Array.isArray(rateClick)&&rateClick.some(c=>c.ip===card.id&&c.disliked===true)&&rateClick.filter(rateClick=>rateClick.ip===card.id).filter(rateClick=>rateClick.disliked===true).length})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{display:"flex",flexDirection:"column"},className:"mb-0 btomrr pb-0 "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{className:`small btomr fot p-1 bg-dark  ${card.isactive&&replied?"mb-1 mt-3":"mb-3 mt-5"}`,style:{width:"fit-content"},onClick:()=>handleReplyHid(card.id),icon:replied.filter(reply=>reply.ip===card.id).length,label:`${card.isactive?replied&&')Hidereplies':'Showreplies'} `}),card.isactive&&replied&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{style:{fontWeight:"bold",marginBottom:"-30px",fontSize:"1rem",cursor:"pointer",wordBreak:"keep-all",whiteSpace:"nowrap"},className:"fot m-1 btom text-dark bold  small p-1 ",icon:"pi pi-reply",onClick:()=>handleReply(card.id),label:"reply"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"col-sm-flex-column"})),replied.slice().reverse().map(car=>car.ip===card.id&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{key:car.id,className:"d-flex flex-start w-100 wrap mt-4"},card.isactive?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:`/profileComponents/${car.userId}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.Img,{className:"w-20 rounded-circle shadow-1-strong me-3",src:car.profile,style:{width:"40px",height:"40px"},alt:"avatar",width:"65",height:"65"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"flex-grow-1 flex-shrink-1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link,{to:`/profileComponents/${car.userId}`},"   ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{style:{color:props.dark?"ghostwhite":"black"},className:"mb-1"},car.username," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",{className:"small"},"-",formatDate(car.date)))," ")),!cardreply[car.id]?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea",{placeholder:"add reply...",style:{height:rows*24+'px',padding:"10px",borderRadius:"20px",border:"1px solid grey"}// adjust this value based on your font-
,onChange:event=>handleEdit(car.id,event)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{className:" bg-dark  p-1 mr-3",onClick:()=>handlePost(car.id)},"post"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(primereact_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z,{className:"bg-danger p-1",onClick:()=>car.ip===card.id&&handlePostExit(car.ip,car.id)},"cancel")):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{className:"d-flex justify-content-between align-items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p",{className:"small mb-0 "},car.message))))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null)))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div",{style:{borderBottom:"0.40px solid gray",margin:"auto",width:"95%",padding:"0px"}})))))))))))))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null)),"     ");}

/***/ })

};
;
//# sourceMappingURL=3668.js.map