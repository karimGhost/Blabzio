"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[5691],{6109:function(e,t,r){r.r(t);var a=r(7294);t.default=e=>{const t="video/webm",{0:r,1:n}=(0,a.useState)("inactive"),{0:o,1:i}=(0,a.useState)([]),l=e.facingMode,s=e.setFacingMode,c=e.stream,d=(e.setStream,e.liveVideoFeed),m=e.permission,u=e.setPermission,p=e.recordedVideo,b=e.setRecordedVideo,g=e.mediaRecorder;(0,a.useEffect)((()=>{m&&d.current&&c&&(d.current.srcObject=c)}),[m,c]);return a.createElement("div",null,a.createElement("main",{className:"boxmain"},a.createElement("div",{className:"video-controls"}),m&&d?a.createElement("div",{style:{position:"relative"},className:"video-player"},"recording"===r&&a.createElement("span",{style:{color:"red"}}," ",a.createElement("ul",null,a.createElement("li",{style:{color:"red",position:"absolute",zIndex:"20"},className:"recordmode"},r))),a.createElement("video",{className:"live-player  m-50",ref:d,autoPlay:!0,playsInline:!0}),m&&"inactive"===r?a.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",background:"transparent",border:"2px solid green",borderRadius:"50%",width:"3rem",height:"3rem"},onClick:async()=>{n("recording");const e=new MediaRecorder(c,{mimeType:t});g.current=e,g.current.start();let r=[];g.current.ondataavailable=e=>{void 0!==e.data&&0!==e.data.size&&r.push(e.data)},i(r)},type:"button"},a.createElement("i",{style:{display:"block",width:"5rem",height:"5rem",padding:"4px",background:"green",borderRadius:"50%",margin:"1px auto"}},"s")):null,"recording"===r?a.createElement("button",{style:{zIndex:"20",position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",background:"transparent",border:"2px solid red",borderRadius:"50%",width:"3rem",height:"3rem"},onClick:()=>{u(!1),n("inactive"),g.current.stop(),g.current.onstop=()=>{const e=new Blob(o,{type:t}),r=URL.createObjectURL(e);b(r),i([])}},type:"button"},a.createElement("i",{style:{display:"block",width:"5rem",height:"5rem",padding:"4px",background:"green",borderRadius:"50%",margin:"1px auto"}},"p")):null,"inactive"===r&&a.createElement("button",{style:{position:"absolute",zIndex:"20",top:"0",right:"0"},type:"button",onClick:async()=>{c&&c.getTracks().forEach((e=>e.stop()));s("user"===l?"environment":"user"),await getCameraPermission()}}," switchcam ")):null,!m&&p?a.createElement("div",{className:"video-player"},a.createElement("video",{className:"recorded-player",src:p,controls:!0,autoPlay:!0}),a.createElement("a",{download:!0,href:p},"Download Recording")):null))}}}]);
//# sourceMappingURL=component---src-pages-news-video-recorder-js-0d7f7217f35fc3ac2fd1.js.map