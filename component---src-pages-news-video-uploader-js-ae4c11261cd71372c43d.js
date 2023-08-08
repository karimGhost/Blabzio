"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[3251,1162,5691],{3379:function(e,t,a){a.r(t);var n=a(7294);t.default=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:l}=(0,n.useState)(null);return n.createElement("div",null,n.createElement("h2",null,"Audio Recorder"),n.createElement("main",null,n.createElement("div",{className:"audio-controls"},e?null:n.createElement("button",{onClick:async()=>{if("MediaRecorder"in window)try{const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});t(!0),l(e)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser.")},type:"button"},"Get Microphone"),e?n.createElement("button",{type:"button"},"Record"):null)))}},6109:function(e,t,a){a.r(t);var n=a(5785),l=a(7294);t.default=()=>{const e="video/webm",{0:t,1:a}=(0,l.useState)(!1),r=(0,l.useRef)(null),o=(0,l.useRef)(null),{0:c,1:i}=(0,l.useState)("inactive"),{0:d,1:u}=(0,l.useState)(null),{0:s,1:m}=(0,l.useState)([]),{0:v,1:E}=(0,l.useState)(null);(0,l.useEffect)((()=>{t&&o.current&&d&&(o.current.srcObject=d)}),[t,d]);return l.createElement("div",null,l.createElement("h2",null,"Audio Recorder"),l.createElement("main",null,l.createElement("div",{className:"video-controls"},t?null:l.createElement("button",{onClick:async()=>{if(E(null),"MediaRecorder"in window)try{const e={audio:!1,video:!0},t={audio:!0},l=await navigator.mediaDevices.getUserMedia(t),r=await navigator.mediaDevices.getUserMedia(e);a(!0);const o=new MediaStream([].concat((0,n.Z)(r.getVideoTracks()),(0,n.Z)(l.getAudioTracks())));u(o)}catch(e){alert(e.message)}else alert("The MediaRecorder API is not supported in your browser.")},type:"button"},"Get video"),t&&"inactive"===c?l.createElement("button",{onClick:async()=>{i("recording");const t=new MediaRecorder(d,{mimeType:e});r.current=t,r.current.start();let a=[];r.current.ondataavailable=e=>{void 0!==e.data&&0!==e.data.size&&a.push(e.data)},m(a)},type:"button"},"Start Recording"):null,"recording"===c?l.createElement("button",{onClick:()=>{a(!1),i("inactive"),r.current.stop(),r.current.onstop=()=>{const t=new Blob(s,{type:e}),a=URL.createObjectURL(t);E(a),m([])}},type:"button"},"Stop Recording"):null),t&&o?l.createElement("div",{style:{position:"relative"},className:"video-player"},"recording"===c&&l.createElement("span",{style:{color:"red"}}," ",l.createElement("ul",null,l.createElement("li",{style:{color:"red",position:"absolute",zIndex:"20"},className:"recordmode colorChanging"},c))),l.createElement("video",{className:"live-player",ref:o,autoPlay:!0,playsInline:!0})):null,!t&&v?l.createElement("div",{className:"video-player"},l.createElement("video",{className:"recorded-player",src:v,controls:!0,autoPlay:!0}),l.createElement("a",{download:!0,href:v},"Download Recording")):null))}},7477:function(e,t,a){a.r(t);var n=a(7294),l=a(6109),r=a(3379);t.default=()=>{let{0:e,1:t}=(0,n.useState)("video");const a=e=>()=>{t(e)};return n.createElement("div",{className:"vrecorderbod"},n.createElement("h1",null,"React Media Recorder"),n.createElement("div",{className:"button-flex"},n.createElement("button",{onClick:a("video")},"Record Video"),n.createElement("button",{onClick:a("audio")},"Record Audio")),n.createElement("div",null,"video"===e?n.createElement(l.default,null):n.createElement(r.default,null)))}}}]);
//# sourceMappingURL=component---src-pages-news-video-uploader-js-ae4c11261cd71372c43d.js.map