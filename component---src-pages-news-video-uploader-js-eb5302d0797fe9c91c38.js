"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[3251,1162,5691],{3379:function(e,t,a){a.r(t);var r=a(7294);t.default=()=>{const{0:e,1:t}=(0,r.useState)(!1),{0:a,1:n}=(0,r.useState)(null);return r.createElement("div",null,r.createElement("h2",null,"Audio Recorder"),r.createElement("main",null,r.createElement("div",{className:"audio-controls"},e?null:r.createElement("button",{onClick:async()=>{if("MediaRecorder"in window)try{const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});t(!0),n(e)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser.")},type:"button"},"Get Microphone"),e?r.createElement("button",{type:"button"},"Record"):null)))}},6109:function(e,t,a){a.r(t);var r=a(5785),n=a(7294);t.default=()=>{const e="video/webm",{0:t,1:a}=(0,n.useState)(!1),o=(0,n.useRef)(null),l=(0,n.useRef)(null),{0:i,1:c}=(0,n.useState)("inactive"),{0:s,1:d}=(0,n.useState)(null),{0:u,1:m}=(0,n.useState)([]),{0:b,1:g}=(0,n.useState)(null),{0:p,1:v}=(0,n.useState)("user"),h=async()=>{if(g(null),"MediaRecorder"in window)try{const e={audio:!1,video:{facingMode:p}},t={audio:!0},n=await navigator.mediaDevices.getUserMedia(t),o=await navigator.mediaDevices.getUserMedia(e);a(!0);const l=new MediaStream([].concat((0,r.Z)(o.getVideoTracks()),(0,r.Z)(n.getAudioTracks())));d(l)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser.")};(0,n.useEffect)((()=>{t&&l.current&&s&&(l.current.srcObject=s)}),[t,s]);return n.createElement("div",null,n.createElement("main",null,n.createElement("div",{className:"video-controls"},t?null:n.createElement("button",{onClick:h,type:"button"},"open camera")),t&&l?n.createElement("div",{style:{position:"relative"},className:"video-player"},"recording"===i&&n.createElement("span",{style:{color:"red"}}," ",n.createElement("ul",null,n.createElement("li",{style:{color:"red",position:"absolute",zIndex:"20"},className:"recordmode"},i))),n.createElement("video",{className:"live-player",ref:l,autoPlay:!0,playsInline:!0}),t&&"inactive"===i?n.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"0",color:"red",borderRadius:"50%",width:"2.5rem",height:"2.5rem",background:"transparent",border:"2px solid green",marginLeft:"auto",marginRight:"auto"},onClick:async()=>{c("recording");const t=new MediaRecorder(s,{mimeType:e});o.current=t,o.current.start();let a=[];o.current.ondataavailable=e=>{void 0!==e.data&&0!==e.data.size&&a.push(e.data)},m(a)},type:"button"},n.createElement("i",{style:{marginLeft:"auto",marginRight:"auto",width:"2rem",height:"2rem",padding:"4px",background:"green",borderRadius:"50%"}},"s")):null,"recording"===i?n.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"0",color:"red",borderRadius:"50%",width:"2rem",height:"2rem",background:"transparent",border:"2px solid red",marginLeft:"auto",marginRight:"auto"},onClick:()=>{a(!1),c("inactive"),o.current.stop(),o.current.onstop=()=>{const t=new Blob(u,{type:e}),a=URL.createObjectURL(t);g(a),m([])}},type:"button"},n.createElement("i",{style:{marginLeft:"auto",marginRight:"auto",width:"1.8rem",height:"1.8rem",padding:"4px",background:"green",borderRadius:"50%"}},"p")):null,"inactive"===i&&n.createElement("button",{style:{position:"absolute",zIndex:"20",top:"0",right:"0"},type:"button",onClick:async()=>{s&&s.getTracks().forEach((e=>e.stop()));v("user"===p?"environment":"user"),await h()}}," switchcam ")):null,!t&&b?n.createElement("div",{className:"video-player"},n.createElement("video",{className:"recorded-player",src:b,controls:!0,autoPlay:!0}),n.createElement("a",{download:!0,href:b},"Download Recording")):null))}},7477:function(e,t,a){a.r(t);var r=a(7294),n=a(6109),o=a(3379);t.default=()=>{let{0:e,1:t}=(0,r.useState)("video");return r.createElement("div",{className:"vrecorderbod"},r.createElement("h1",null,"The wall"),r.createElement("div",{className:"button-flex"},r.createElement("button",{onClick:(a="video",()=>{t(a)})},"Record Video")),r.createElement("div",null,"video"===e?r.createElement(n.default,null):r.createElement(o.default,null)));var a}}}]);
//# sourceMappingURL=component---src-pages-news-video-uploader-js-eb5302d0797fe9c91c38.js.map