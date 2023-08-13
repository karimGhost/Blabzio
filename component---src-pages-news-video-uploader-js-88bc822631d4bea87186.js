"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[3251,1162,5691],{3379:function(e,t,a){a.r(t);var r=a(7294);t.default=()=>{const{0:e,1:t}=(0,r.useState)(!1),{0:a,1:n}=(0,r.useState)(null);return r.createElement("div",null,r.createElement("h2",null,"Audio Recorder"),r.createElement("main",null,r.createElement("div",{className:"audio-controls"},e?null:r.createElement("button",{onClick:async()=>{if("MediaRecorder"in window)try{const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});t(!0),n(e)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser.")},type:"button"},"Get Microphone"),e?r.createElement("button",{type:"button"},"Record"):null)))}},6109:function(e,t,a){a.r(t);var r=a(5785),n=a(7294);t.default=()=>{const e="video/webm",{0:t,1:a}=(0,n.useState)(!1),l=(0,n.useRef)(null),o=(0,n.useRef)(null),{0:i,1:c}=(0,n.useState)("inactive"),{0:s,1:d}=(0,n.useState)(null),{0:u,1:m}=(0,n.useState)([]),{0:b,1:g}=(0,n.useState)(null),{0:p,1:v}=(0,n.useState)("user"),h=async()=>{if(g(null),"MediaRecorder"in window)try{const e={audio:!0,video:{facingMode:p}},t={audio:!0},n=await navigator.mediaDevices.getUserMedia(t),l=await navigator.mediaDevices.getUserMedia(e);a(!0);const o=new MediaStream([].concat((0,r.Z)(n.getAudioTracks()),(0,r.Z)(l.getVideoTracks())));d(o)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser.")};(0,n.useEffect)((()=>{t&&o.current&&s&&(o.current.srcObject=s)}),[t,s]);return n.createElement("div",null,n.createElement("main",null,n.createElement("div",{className:"video-controls"},t?null:n.createElement("button",{onClick:h,type:"button"},"open camera")),t&&o?n.createElement("div",{style:{position:"relative"},className:"video-player"},"recording"===i&&n.createElement("span",{style:{color:"red"}}," ",n.createElement("ul",null,n.createElement("li",{style:{color:"red",position:"absolute",zIndex:"20"},className:"recordmode"},i))),n.createElement("video",{className:"live-player w-100 m-50",ref:o,autoPlay:!0,playsInline:!0}),t&&"inactive"===i?n.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"0",color:"red",borderRadius:"50%",width:"3rem",height:"3rem",background:"transparent",border:"2px solid green",marginLeft:"50%",marginRight:"50%"},onClick:async()=>{c("recording");const t=new MediaRecorder(s,{mimeType:e});l.current=t,l.current.start();let a=[];l.current.ondataavailable=e=>{void 0!==e.data&&0!==e.data.size&&a.push(e.data)},m(a)},type:"button"},n.createElement("i",{style:{marginLeft:"50%",marginRight:"50%",width:"5rem",height:"5rem",padding:"4px",background:"green",borderRadius:"50%"}},"s")):null,"recording"===i?n.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"0",color:"red",borderRadius:"50%",width:"3rem",height:"3rem",background:"transparent",border:"2px solid red",marginLeft:"50%",marginRight:"50%"},onClick:()=>{a(!1),c("inactive"),l.current.stop(),l.current.onstop=()=>{const t=new Blob(u,{type:e}),a=URL.createObjectURL(t);g(a),m([])}},type:"button"},n.createElement("i",{style:{marginLeft:"50%",marginRight:"50%",width:"5rem",height:"5rem",padding:"4px",background:"green",borderRadius:"50%"}},"p")):null,"inactive"===i&&n.createElement("button",{style:{position:"absolute",zIndex:"20",top:"0",right:"0"},type:"button",onClick:async()=>{s&&s.getTracks().forEach((e=>e.stop()));v("user"===p?"environment":"user"),await h()}}," switchcam ")):null,!t&&b?n.createElement("div",{className:"video-player"},n.createElement("video",{className:"recorded-player",src:b,controls:!0,autoPlay:!0}),n.createElement("a",{download:!0,href:b},"Download Recording")):null))}},7477:function(e,t,a){a.r(t);var r=a(7294),n=a(6109),l=a(3379);t.default=()=>{let{0:e,1:t}=(0,r.useState)("video");return r.createElement("div",{className:"vrecorderbod"},r.createElement("h1",null,"The wall"),r.createElement("div",{className:"button-flex"},r.createElement("button",{onClick:(a="video",()=>{t(a)})},"Record Video")),r.createElement("div",null,"video"===e?r.createElement(n.default,null):r.createElement(l.default,null)));var a}}}]);
//# sourceMappingURL=component---src-pages-news-video-uploader-js-88bc822631d4bea87186.js.map