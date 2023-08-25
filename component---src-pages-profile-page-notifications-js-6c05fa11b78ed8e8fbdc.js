"use strict";(self.webpackChunkblabzio=self.webpackChunkblabzio||[]).push([[1477],{2858:function(e,t,o){o.r(t),o.d(t,{Head:function(){return M},default:function(){return A}});var a=o(7294),n=o(4866),r=o(4405),c=(o(3869),o(4854),o(4420)),l=o(3308),s=o(9513),i=o(7074),u=o(3643),m=o(3652),d=o(6367);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},f.apply(this,arguments)}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var a=o.call(e,t||"default");if("object"!==b(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}function h(e,t,o){return(t=p(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a,n,r,c,l=[],s=!0,i=!1;try{if(r=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(a=r.call(o)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(u){i=!0,n=u}finally{try{if(!s&&null!=o.return&&(c=o.return(),Object(c)!==c))return}finally{if(i)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=m.V.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0}});function k(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function E(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?k(Object(o),!0).forEach((function(t){h(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var C=a.memo(a.forwardRef((function(e,t){var o=a.useContext(d.Ou),n=v.getProps(e,o),r=y(a.useState(!1),2),c=r[0],m=r[1],b=v.setMetaData({props:n,state:{focused:c}}).ptm,p=a.useRef(null),h=a.useRef(n.inputRef),g=function(e){if(!n.disabled&&!n.readOnly&&(n.onChange||n.onClick)){var t=k(),o=e.target instanceof HTMLDivElement||e.target instanceof HTMLSpanElement||e.target instanceof Object,a=e.target===h.current,r=o&&e.target.checked!==t;if(a||r){var c=t?n.falseValue:n.trueValue,l={originalEvent:e,value:n.value,checked:c,stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},target:{type:"checkbox",name:n.name,id:n.id,value:n.value,checked:c}};if(n.onClick&&n.onClick(l),e.defaultPrevented)return;n.onChange&&n.onChange(l)}u.p7.focus(h.current),e.preventDefault()}},k=function(){return n.checked===n.trueValue};a.useImperativeHandle(t,(function(){return{props:n,focus:function(){return u.p7.focus(h.current)},getElement:function(){return p.current},getInput:function(){return h.current}}})),a.useEffect((function(){u.gb.combinedRefs(h,n.inputRef)}),[h,n.inputRef]),(0,l.rf)((function(){h.current.checked=k()}),[n.checked,n.trueValue]),(0,l.nw)((function(){n.autoFocus&&u.p7.focus(h.current,n.autoFocus)}));var C=k(),S=u.gb.isNotEmpty(n.tooltip),w=v.getOtherProps(n),N=u.gb.reduceKeys(w,u.p7.ARIA_PROPS),A=(0,u.AK)("p-checkbox p-component",{"p-checkbox-checked":C,"p-checkbox-disabled":n.disabled,"p-checkbox-focused":c},n.className),M=(0,u.AK)("p-checkbox-box",{"p-highlight":C,"p-disabled":n.disabled,"p-focus":c}),x=(0,u.dG)({className:"p-checkbox-icon p-c"},b("icon")),G=C?n.icon||a.createElement(s.n,x):null,O=u.Cz.getJSXIcon(G,E({},x),{props:n,checked:C}),P=(0,u.dG)({ref:p,id:n.id,className:A,style:n.style,onClick:function(e){return g(e)},onContextMenu:n.onContextMenu,onMouseDown:n.onMouseDown},w,b("root")),T=(0,u.dG)({className:"p-hidden-accessible"},b("hiddenInputWrapper")),I=(0,u.dG)(E({id:n.inputId,ref:h,type:"checkbox",name:n.name,tabIndex:n.tabIndex,defaultChecked:C,onFocus:function(e){m(!0)},onBlur:function(e){m(!1)},onKeyDown:function(e){var t;"Space"!==(t=e).code&&" "!==t.key||g(t)},disabled:n.disabled,readOnly:n.readOnly,required:n.required},N),b("hiddenInput")),j=(0,u.dG)({className:M},b("input"));return a.createElement(a.Fragment,null,a.createElement("div",P,a.createElement("div",T,a.createElement("input",I)),a.createElement("div",j,O)),S&&a.createElement(i.u,f({target:p,content:n.tooltip},n.tooltipOptions,{pt:b("tooltip")})))})));C.displayName="Checkbox";var S=o(7043),w=o(4871);o(9755);const N={apiKey:"AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",authDomain:"itsmynodezena.firebaseapp.com",databaseURL:"https://itsmynodezena-default-rtdb.firebaseio.com",projectId:"itsmynodezena",storageBucket:"itsmynodezena.appspot.com",messagingSenderId:"299392955521",appId:"1:299392955521:web:ef5671ad2702d441304980"};function A(){const e=(0,a.useRef)(null);n.Z.initializeApp(N,"app012");const t=n.Z.app("app012"),{user:o,setUser:l,loading:s,signOut:i}=(0,r.a)(),{0:u,1:m}=(t.auth(),t.database(),(0,a.useState)(!0)),{0:d,1:f}=(0,a.useState)(!0),{0:b,1:p}=(0,a.useState)({ChangesMadeToAcc:!1,ChangesMadeToGroup:!1,SecurityAlert:!1,somoneComments:!1,somoneshares:!1,Userfollows:!1,newPostMadeinGroup:!1,ReciveMessage:!1,AutoSubscribeGroupnotif:!1,AutoSubscribetonews:!1,setSms:12}),h=e=>{const{name:t,value:o,checked:a}=e.target;p((e=>({...e,[t]:!e[t]})))};console.log(b.Userfollows),(0,a.useEffect)((()=>{!async function(){if(o&&o.uid){const n=t.database().ref("profile/"+o.uid);try{await n.update({ChangesMadeToAcc:b.ChangesMadeToAcc,ChangesMadeToGroup:b.ChangesMadeToGroup,SecurityAlert:b.SecurityAlert,somoneComments:b.somoneComments,somoneshares:b.somoneshares,Userfollows:b.Userfollows,newPostMadeinGroup:b.newPostMadeinGroup,ReciveMessage:b.ReciveMessage,AutoSubscribeGroupnotif:b.AutoSubscribeGroupnotif,AutoSubscribetonews:b.AutoSubscribetonews})}catch(a){console.log(a),e.current.show({severity:"error",summary:"Error",detail:"Error is as: "+a.message,life:9e3})}}}()}),[b]);const{0:g,1:y}=(0,a.useState)(!1),{0:v,1:k}=(0,a.useState)(!1);(0,a.useEffect)((()=>{o&&o.email&&t.database().ref("prof").orderByChild("email").equalTo(o.email).once("value").then((e=>{if(e.exists()){const t=Object.keys(e.val()),o=e.val()[t];y(!0),o.darkmode&&k(o.darkmode),p((e=>({...e,ChangesMadeToAcc:(null==o?void 0:o.ChangesMadeToAcc)||!1,ChangesMadeToGroup:(null==o?void 0:o.ChangesMadeToGroup)||!1,SecurityAlert:(null==o?void 0:o.SecurityAlert)||!1,somoneComments:(null==o?void 0:o.somoneComments)||!1,somoneshares:(null==o?void 0:o.somoneshares)||!1,Userfollows:(null==o?void 0:o.Userfollows)||!1,newPostMadeinGroup:(null==o?void 0:o.newPostMadeinGroup)||!1,ReciveMessage:(null==o?void 0:o.ReciveMessage)||!1,AutoSubscribeGroupnotif:(null==o?void 0:o.AutoSubscribeGroupnotif)||!1,AutoSubscribetonews:(null==o?void 0:o.AutoSubscribetonews)||!1,setSms:o.sms})))}})).catch((t=>{console.log(t),e.current.show({severity:"error",summary:"Error",detail:"Error: "+t.message,life:3e3})}))}),[o]),(0,a.useEffect)((()=>{!0===b.somoneshares||!0===b.somoneComments||!0===b.Userfollows||!0===b.newPostMadeinGroup||!0===b.ReciveMessage?m(!1):m(!0),!0===b.ChangesMadeToAcc||!0===b.ChangesMadeToGroup||!0===b.SecurityAlert||!0===b.somoneComments||!0===b.somoneshares||!0===b.Userfollows||!0===b.newPostMadeinGroup||!0===b.ReciveMessage||!0===b.AutoSubscribeGroupnotif||!0===b.AutoSubscribetonews?A(!1):A(!0)}),[b]);const{0:E,1:A}=(0,a.useState)(!1);return g?a.createElement("div",{style:{alignItems:"center",justifyItems:"center",paddingTop:"25%"},className:"card flex justify-content-center align-content-center "}):a.createElement("div",{style:{background:v&&"#141515"}},a.createElement(c.F,{ref:e}),a.createElement("div",{className:"container-xl px-4 mt-4 "+(v&&"darken")},a.createElement(S.default,{setDarks:k}),a.createElement("div",{className:(v&&"darken")+"row"},a.createElement("div",{className:"col-lg-8"},a.createElement("div",{className:"card card-header-actions mb-4"},a.createElement("div",{className:"card-header",style:{background:v&&"#141515"}},a.createElement("div",{className:"form-check form-switch",style:{background:v&&"#141515",marginBottom:"15px"}},a.createElement("label",{htmlFor:"emailNotifications",style:{color:"orange",marginTop:"-10px",fontSize:"-20px",fontWeight:"bold"}},"Email notifications"))),a.createElement("div",{className:"card-body",style:{background:v&&"#141515"}},a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{background:v&&"#141515"}},a.createElement("label",{className:"small mb-1",htmlFor:"inputNotificationEmail"},"Default notification email"),a.createElement("input",{className:"form-control",id:"inputNotificationEmail",type:"email",value:o&&o.email,onChange:h,disabled:!0})),a.createElement("div",{className:"mb-0"},a.createElement("div",{className:" mb-3 pb-3"},a.createElement("label",{className:"small papol",style:{color:"purple"}},"Choose which types of email updates you receive")),a.createElement("div",{className:"form-check mb-6 mt-6",style:{marginBottom:"15px"}},a.createElement(C,{inputId:"ChangesMadeToAcc",name:"ChangesMadeToAcc",value:!0,className:"mr-1  p-success P-button-success p-checkbox-success",id:"flexSwitchCheckChecked",onChange:h,checked:!0===b.ChangesMadeToAcc}),a.createElement("label",{className:"form-check-label",style:{color:v&&"silver"},htmlFor:"ChangesMadeToAcc"},"Changes made to your account")),a.createElement("div",{className:"form-check mb-4",style:{marginBottom:"15px"}},a.createElement(C,{inputId:"ChangesMadeToGroup",name:"ChangesMadeToGroup",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",onChange:h,checked:!0===b.ChangesMadeToGroup}),a.createElement("label",{className:"form-check-label",style:{color:v&&"silver"},htmlFor:"ChangesMadeToGroup"},"Changes are made to groups you're part of")),a.createElement("div",{className:"form-check",style:{marginBottom:"15px"}},a.createElement(C,{name:"SecurityAlert",inputId:"checkSecurity",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",onChange:h,checked:!0===b.SecurityAlert}),a.createElement("label",{style:{color:v&&"silver"},className:"form-check-label",htmlFor:"checkSecurity"},"Security alerts")))))),a.createElement("div",{className:"card card-header-actions mb-4"},a.createElement("div",{className:"card-header",style:{background:v&&"#141515"}},a.createElement("div",{className:"form-check form-switch",style:{background:v&&"#141515",marginBottom:"15px"}},a.createElement("label",{style:{color:"orange",marginTop:"-10px",fontSize:"-20px",fontWeight:"bold"},className:"form-check-label ml-4",htmlFor:"smsToggleSwitch"}," Push Notifications"))),a.createElement("div",{className:"card-body",style:{background:v&&"#141515"}},a.createElement("form",null,a.createElement("div",{className:"mb-2"},a.createElement("label",{style:{color:v&&"silver"},className:"small mb-1",htmlFor:"inputNotificationSms"},"Default SMS number"),a.createElement(w.R,{label:"default-sms-Number",disabled:!0,id:"number-input",value:b.setSms,onValueChange:h})),a.createElement("div",{className:"mb-0"},a.createElement("div",{className:"mb-5 pb-2"},a.createElement("label",{className:"small mb-2 pupol",style:{color:v&&"silver"}},"Choose which types of push notifications you receive")),a.createElement("div",{className:"form-check mb-3",style:{background:v&&"#141515",marginBottom:"15px"}},a.createElement(C,{inputId:"somoneComments",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"somoneComments",onChange:h,checked:!0===b.somoneComments}),a.createElement("label",{className:"form-check-label",style:{color:v&&"silver"},htmlFor:"somoneComments"},"Someone comments on your post")),a.createElement("div",{className:"form-check mb-3",style:{marginBottom:"15px"}},a.createElement(C,{inputId:"somoneshares",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"somoneshares",onChange:h,checked:!0===b.somoneshares}),a.createElement("label",{style:{color:v&&"silver"},className:"form-check-label",htmlFor:"somoneshares"},"Someone shares your post")),a.createElement("div",{className:"form-check mb-3",style:{marginBottom:"15px"}},a.createElement(C,{inputId:"userfollow",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"Userfollows",onChange:h,checked:!0===b.Userfollows}),a.createElement("label",{style:{color:v&&"silver"},className:"form-check-label",htmlFor:"userfollow"},"A user follows your account")),a.createElement("div",{className:"form-check mb-3",style:{marginBottom:"15px"}},a.createElement(C,{inputId:"newPostMadeinGroup",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"newPostMadeinGroup",onChange:h,checked:!0===b.newPostMadeinGroup}),a.createElement("label",{style:{color:v&&"silver"},className:"form-check-label",htmlFor:"newPostMadeinGroup"},"New posts are made in groups you're part of")),a.createElement("div",{className:"form-check",style:{marginBottom:"15px"}},a.createElement(C,{inputId:"ReciveMessage",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"ReciveMessage",onChange:h,checked:!0===b.ReciveMessage}),a.createElement("label",{style:{color:v&&"silver"},className:"form-check-label",htmlFor:"ReciveMessage"},"You receive a  message"))))))),a.createElement("div",{className:"col-lg-4"},a.createElement("div",{className:"card",style:{background:v&&"#141515"}},a.createElement("div",{style:{color:"orange",fontSize:"-20px",fontWeight:"bold"},className:"card-header"},"Notification Preferences"),a.createElement("div",{className:"card-body"},a.createElement(a.Fragment,null,a.createElement("div",{className:"form-chec mb-7 ",style:{background:v&&"#141515",marginBottom:"38px"}},a.createElement(C,{inputId:"AutoSubscribeGroupnotif",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"AutoSubscribeGroupnotif",onChange:h,checked:!0===b.AutoSubscribeGroupnotif}),a.createElement("label",{style:{fontSize:"1rem",color:v&&"silver"},className:"form-check-label mb-4",htmlFor:"AutoSubscribeGroupnotif"},"Automatically subscribe to group notifications")),a.createElement("div",{className:"form-chec mb-6 mt-7",style:{background:v&&"#141515",marginBottom:"25px"}},a.createElement(C,{inputId:"AutoSubscribetonews",value:!0,className:"mr-1 ",id:"flexSwitchCheckChecked",name:"AutoSubscribetonews",onChange:h,checked:!0===b.AutoSubscribetonews}),a.createElement("label",{style:{color:v&&"silver"},className:"form-check-label mb-4 mt-",htmlFor:"AutoSubscribetonews"},"Automatically subscribe to new notifications")),a.createElement("button",{disabled:E,onClick:()=>{p((e=>({...e,ChangesMadeToAcc:!1,ChangesMadeToGroup:!1,SecurityAlert:!1,somoneComments:!1,somoneshares:!1,Userfollows:!1,newPostMadeinGroup:!1,ReciveMessage:!1,AutoSubscribeGroupnotif:!1,AutoSubscribetonews:!1}))),e.current.show({severity:"Success",summary:"Success",detail:"You have been successfuly unsubscribed",life:6e3})},className:"btn btn-danger-soft btn-dark text-white mb-4 mt-6"},"Unsubscribe from all notifications"))))))))}const M=()=>a.createElement("title",null,"Notifications")}}]);
//# sourceMappingURL=component---src-pages-profile-page-notifications-js-6c05fa11b78ed8e8fbdc.js.map