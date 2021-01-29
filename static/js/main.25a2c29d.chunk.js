(this["webpackJsonpgovtech-hackathon2021"]=this["webpackJsonpgovtech-hackathon2021"]||[]).push([[0],{15:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),a=s.n(n),r=s(27),i=s.n(r),l=(s(37),s(5)),o=(s(38),s(6)),d=s.n(o),j=s(9),u=(s(15),s(12)),b=s.n(u),h="https://passport-crop.azurewebsites.net",p=function(){var e=Object(j.a)(d.a.mark((function e(t,s){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=new FormData).append("user_file",t),s){e.next=8;break}return e.next=5,b.a.post(h+"/upload-file",c);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,b.a.post(h+"/upload-file-webcam",c);case 10:n=e.sent;case 11:return e.abrupt("return",n.data);case 12:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),O=function(e){var t=e.image;try{return Object(c.jsx)("img",{id:"leftImage",src:URL.createObjectURL(t),alt:t.name})}catch(s){return Object(c.jsx)("img",{id:"leftImage",src:t,alt:t.name})}},m=function(e){var t=e.loading,s=e.setLoading,n=e.file,a=e.setFile,r=(e.processed_image,e.setProcessedImage),i=e.setNotif,l=e.setTakingOne,o=e.setIssues,u=e.loadedFromWebcam,b=e.setLoadedFromWebcam,h=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),s(!0),o([]),e.prev=3,e.next=6,p(n,u);case 6:t=e.sent,r(t.image_url),o(t.issues),i({message:"Image processed succesfully!",error:!1}),setTimeout((function(){i(null)}),5e3),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),i({message:"Well, this is awkward... we can't seem to find a face",error:!0}),setTimeout((function(){i(null)}),8e3);case 17:return e.prev=17,s(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,13,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[""!==n?Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Original image"}),n&&Object(c.jsx)(O,{image:n}),Object(c.jsx)("div",{className:n&&t?"dullButton":"processButton",onClick:n&&t?null:h,children:Object(c.jsx)("p",{children:n&&t?"Disabled while processing":"Process this image"})})]}):null,n&&t?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"dullButton",children:Object(c.jsx)("p",{children:" Disabled while processing... "})}),Object(c.jsx)("div",{className:"dullButton",children:Object(c.jsx)("p",{children:" Disabled while processing... "})})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{id:"selectImage",onChange:function(e){r(""),e.target.files[0]?a(e.target.files[0]):a("")},type:"file",accept:".jpg,.jpeg,.jfif,.png,.jpe,.jif,.jfi,.webp",hidden:!0}),Object(c.jsx)("div",{className:n?"dullButton":"uploadButton",onClick:function(){document.getElementById("selectImage").click(),l(!1),b(!1)},children:Object(c.jsxs)("p",{children:[" ",""===n?"Upload ":"Upload new "," image "]})}),Object(c.jsx)("div",{className:n?"dullButton":"uploadButton",onClick:function(){l(!0),a(""),r("")},children:Object(c.jsxs)("p",{children:[" ",""===n?"Take a ":"Take a new "," picture"]})})]})]})},f=s(7),g=s(8),x=function(e){var t=e.issue;return Object(c.jsx)("div",{className:"error",children:Object(c.jsxs)("span",{style:{fontSize:"11pt"},children:[Object(c.jsx)(f.a,{icon:g.c,style:{color:"red",fontSize:"10pt",paddingRight:"10px"}}),"Warning: ",t]})})},v=function(e){var t=e.processed_image,s=e.issues;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Processed image"}),Object(c.jsx)("img",{id:"rightImage",alt:t,src:t}),s.map((function(e,t){return Object(c.jsx)(x,{issue:e},t)})),Object(c.jsx)("a",{style:{textDecoration:"none",color:"black"},href:t,target:"_blank",download:!0,children:Object(c.jsx)("div",{className:"uploadButton",children:Object(c.jsxs)("p",{children:["Download",Object(c.jsx)(f.a,{icon:g.b,style:{color:"grey",fontSize:"14pt",paddingLeft:"15px"}})]})})})]})},k=s(28),w=s.n(k),N=function(){var e=Object(n.useState)("."),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return s.length>3?a("."):a(s+".")}),500);return function(){return clearInterval(e)}})),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Processing ",s]}),Object(c.jsx)(w.a,{type:"Circles",color:"#00BFFF",height:100,width:100})]})},F=s(31),y=s(29),I=s.n(y),S={facingMode:"user",height:400},B=function(e){var t=e.setFile,s=e.setTakingOne,n=e.setLoadedFromWebcam,r=a.a.useRef(null),i=a.a.useCallback((function(){var e=r.current.getScreenshot();fetch(e).then((function(e){return e.blob()})).then((function(e){var s=new File([e],"webcam_file"+Math.random().toString(36).substr(2,8)+".png",{type:"image/png"});t(s)})),s(!1),n(!0)}),[r]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(I.a,{ref:r,audio:!1,screenshotQuality:1,screenshotFormat:"image/png",videoConstraints:S}),Object(c.jsx)("div",{className:"uploadButton",onClick:i,children:"Take a photo"}),Object(c.jsx)("div",{className:"dullButton",onClick:function(){s(!1),n(!1)},children:"Cancel"})]})};var C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),s=t[0],r=t[1],i=a.a.useState(""),o=Object(l.a)(i,2),d=o[0],j=o[1],u=Object(n.useState)(null),b=Object(l.a)(u,2),h=b[0],p=b[1],O=Object(n.useState)(!1),x=Object(l.a)(O,2),k=x[0],w=x[1],y=Object(n.useState)(!1),I=Object(l.a)(y,2),S=I[0],C=I[1],P=Object(n.useState)([]),T=Object(l.a)(P,2),L=T[0],W=T[1],D=Object(n.useState)(!1),_=Object(l.a)(D,2),z=_[0],U=_[1];return Object(c.jsx)(F.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Passport Photo Tool \ud83d\udcf7"}),null!==h?Object(c.jsx)("div",{className:"topPanel",children:Object(c.jsx)("div",{className:h.error?"notif error":"notif success",children:Object(c.jsx)("p",{children:h.message})})}):null,Object(c.jsx)("div",{className:"split leftPanel",children:Object(c.jsx)("div",{className:"centered",children:Object(c.jsx)(m,{loading:k,setLoading:w,file:d,setFile:j,processedImage:s,setProcessedImage:r,setNotif:p,setTakingOne:C,setIssues:W,loadedFromWebcam:z,setLoadedFromWebcam:U})})}),s?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"middleArrow",children:Object(c.jsx)(f.a,{icon:g.a,style:{color:"green",fontSize:"45pt"}})}),Object(c.jsx)("div",{className:"split rightPanel",children:Object(c.jsx)("div",{className:"centered",children:Object(c.jsx)(v,{processed_image:s,issues:L})})})]}):Object(c.jsx)("div",{className:"split rightPanel",children:Object(c.jsx)("div",{className:"centered",children:S?Object(c.jsx)(B,{setFile:j,setTakingOne:C,setLoadedFromWebcam:U}):""===d?Object(c.jsx)("p",{children:"Upload or an image or take one from your camera to be processed"}):k?Object(c.jsx)(N,{}):Object(c.jsx)("p",{children:"Click on process to view results or replace the current selection"})})})]})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,86)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),P()}},[[85,1,2]]]);
//# sourceMappingURL=main.25a2c29d.chunk.js.map