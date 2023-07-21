"use strict";
exports.id = 1476;
exports.ids = [1476];
exports.modules = {

/***/ 43328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88965);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33220);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75159);
// Initialize Firebase
const firebaseConfig121212={apiKey:"AIzaSyChFGTB5YEugUKho-YqcWVZtKJG3PIrtt0",authDomain:"thewall-10a4a.firebaseapp.com",databaseURL:"https://thewall-10a4a-default-rtdb.firebaseio.com",projectId:"thewall-10a4a",storageBucket:"thewall-10a4a.appspot.com",messagingSenderId:"221023885061",appId:"1:221023885061:web:bc550d03edd2fbf60e496c",measurementId:"G-7V80059NF7"};firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.initializeApp(firebaseConfig121212);const database=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.database();class VideoUploader extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component){constructor(...args){super(...args);this.state={videoFile:null,isRecording:false,recordedVideo:null,videos:[]};this.loadVideos=()=>{const videosRef=database.ref('videos');videosRef.on('value',snapshot=>{const videos=[];snapshot.forEach(childSnapshot=>{const video={id:childSnapshot.key,...childSnapshot.val()};videos.push(video);});this.setState({videos});});};this.handleFileChange=e=>{const file=e.target.files[0];if(file&&file.size<5000000){// Maximum allowed file size is 5MB
this.setState({videoFile:file});}else{alert('Please select a short video file (less than 5MB).');}};this.handleRecordClick=()=>{if(!this.state.isRecording){navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{const mediaRecorder=new MediaRecorder(stream);const chunks=[];mediaRecorder.addEventListener('dataavailable',event=>{chunks.push(event.data);});mediaRecorder.addEventListener('stop',()=>{const recordedBlob=new Blob(chunks,{type:'video/webm'});this.setState({recordedVideo:recordedBlob});});mediaRecorder.start();this.setState({isRecording:true,mediaRecorder,recordedChunks:chunks});}).catch(error=>{console.error('Error accessing video stream:',error);});}else{this.state.mediaRecorder.stop();this.setState({isRecording:false});}};this.handleUploadClick=()=>{const{videoFile,recordedVideo}=this.state;if(videoFile||recordedVideo){const storageRef=firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.storage().ref();const videoRef=storageRef.child(videoFile?videoFile.name:'recorded_video.webm');const uploadTask=videoRef.put(videoFile||recordedVideo);uploadTask.on('state_changed',snapshot=>{// Handle progress updates
const progress=snapshot.bytesTransferred/snapshot.totalBytes*100;console.log(`Upload progress: ${progress}%`);// Update progress in UI 
},error=>{// Handle upload error
console.error('Upload error:',error);// Display error message or perform error handling in UI
},()=>{// Upload complete
uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=>{// Save the video details in the database
const videoId=(0,nanoid__WEBPACK_IMPORTED_MODULE_3__/* .nanoid */ .x0)();// Generate a unique ID for the video
database.ref('videos/'+videoId).set({url:downloadURL,likes:0,dislikes:0,comments:[]});});});}};this.handleLike=videoId=>{database.ref('videos/'+videoId).transaction(video=>{if(video){video.likes=(video.likes||0)+1;}return video;});};this.handleDislike=videoId=>{database.ref('videos/'+videoId).transaction(video=>{if(video){video.dislikes=(video.dislikes||0)+1;}return video;});};this.handleComment=(videoId,comment)=>{const newComment={id:(0,nanoid__WEBPACK_IMPORTED_MODULE_3__/* .nanoid */ .x0)(),text:comment};database.ref('videos/'+videoId+'/comments').push(newComment);};this.handleDelete=videoId=>{const confirmDelete=window.confirm('Are you sure you want to delete this video?');if(confirmDelete){database.ref('videos/'+videoId).remove();}};}componentDidMount(){this.loadVideos();}render(){const{videos}=this.state;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,"Video Uploader"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"form-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"file",accept:"video/*",onChange:this.handleFileChange})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"form-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-primary",onClick:this.handleRecordClick},this.state.isRecording?'Stop Recording':'Start Recording')),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"form-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-success",onClick:this.handleUploadClick},"Upload")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr",null),videos.map(video=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:video.id,className:"card mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card-body"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video",{src:video.url,controls:true,style:{width:'100%',cursor:'pointer'},onMouseEnter:e=>e.target.play(),onMouseLeave:e=>e.target.pause()}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"text-muted mt-2"},"Likes: ",video.likes||0," | Dislikes: ",video.dislikes||0),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"my-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-sm btn-primary mr-2",onClick:()=>this.handleLike(video.id)},"Like"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-sm btn-danger",onClick:()=>this.handleDislike(video.id)},"Dislike")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5",null,"Comments:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:"list-unstyled"},Object.values(video.comments||[]).map(comment=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{key:comment.id},comment.text))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"input-group mb-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",className:"form-control",placeholder:"Add a comment...","aria-label":"Add a comment","aria-describedby":"button-addon2",onChange:e=>this.setState({commentInput:e.target.value})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"input-group-append"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:()=>this.handleComment(video.id,this.state.commentInput)},"Post")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"btn btn-danger btn-sm",onClick:()=>this.handleDelete(video.id)},"Delete"))))));}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoUploader);

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
//# sourceMappingURL=component---src-pages-news-the-wall-js.js.map