"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[8849],{9819:function(a,e,t){t.r(e),t.d(e,{default:function(){return o}});var n=t(7294),c=t(9755),l=t.n(c),r=t(2861);function o(){const{0:a,1:e}=(0,n.useState)({data:null,color:"green"}),{0:t,1:c}=(0,n.useState)({data:null,color:"red"}),{0:o,1:i}=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){try{const a=await r.Z.get("https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=f8ff84c0ba20f4e45161f78360babf5c");e((e=>({...e,data:a.data})))}catch(o){i(o)}}()}),[]),(0,n.useEffect)((()=>{!async function(){try{const a=await r.Z.get("https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=f8ff84c0ba20f4e45161f78360babf5c");console.log("bad "+a),c((e=>({...e,data:a.data})))}catch(o){console.log(o),c("getting market")}}()}),[]);const{0:d,1:s}=(0,n.useState)(),f=a.data?a.data.map((a=>({...a,color:"green"}))):null,u=t.data?t.data.map((a=>({...a,color:"red"}))):null,g=a.data?f.concat(u):null;let m=t.data?(e=>{const n=a.data&&t.data?e.slice():null;for(let c=a.data&&t.data?n.length-1:null;c>0;c--){const a=Math.floor(Math.random()*(c+1));[n[c],n[a]]=[n[a],n[c]]}return n})(g):null;return console.log(m),(0,n.useEffect)((()=>{window.setInterval((function(){let a=l()("#card").find("div:first"),e=a.width();a.animate({marginLeft:-e},9e3,(function(){l()("#card").find("div:last").after(a),a.css({marginLeft:0})}))}),100)}),[g]),o?n.createElement("div",{style:{color:"black"}},"An error occurred:getting market Data "):a.data&&t.data?n.createElement("div",{id:"card"},n.createElement("div",{className:"marketContainer"},m.map((a=>n.createElement("p",{style:{color:"white"},key:a.name},a.name," ",a.changesPercentage.toFixed()," ",n.createElement("b",{style:{color:"green"===a.color?"rgb(46, 197, 16)":"rgb(252, 60, 60)"}},"green"===a.color?"+":"",a.change,"%")," "))))):n.createElement("div",null,"Loading...")}}}]);
//# sourceMappingURL=component---src-pages-market-js-8f9ddbb4263eb106f057.js.map