!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){const r={dev:n(14),stage:n(15),local:n(16),production:n(17)}.stage;t.exports={env:r}},function(t,e,n){const r={cancel:n(6),wovenLogo:n(7),lock:n(8),spinner:n(9),wovenStandaloneLogo:n(10),arrow:n(11)};t.exports=r},function(t,e,n){const{env:r}=n(0),i={log:(...t)=>{r.LOGGING&&console.log(...t)}};t.exports=i},function(t,e,n){const r=n(4),i=n(12),{makeHandshake:o}=n(13),a=n(2),s=n(20),l=n(21),{env:c}=n(0);class d{static setup(t){return this.data=t,this.gammaSetup=this.validateInputData(),this}static validateInputData(){const{key:t,email:e,amount:n,customer_name:r=null,ref:o=null,onClose:a=null,mobile_number:s=null,callback:l}=this.data||{};let c=[];try{i.checkType(t,"string","key is required to be a string - in Gamma.setup()")}catch(t){c.push("-> "+t.message)}try{i.checkEmail(e,"a valid email is required for setup - in Gamma.setup()")}catch(t){c.push("-> "+t.message)}try{i.checkType(n,"number","amount is required to be a number - in Gamma.setup()")}catch(t){c.push("-> "+t.message)}try{i.checkType(l,"function","callback is required to be a function - in Gamma.setup()")}catch(t){c.push("-> "+t.message)}try{i.checkType(a,"function","callback is required to be a function - in Gamma.setup()",!0)}catch(t){c.push("-> "+t.message)}try{i.checkType(r,"string","customer_name is optional but must be a string if included - in Gamma.setup()",!0)}catch(t){c.push("-> "+t.message)}try{i.checkType(o,"string","ref is optional but must be a string if included - in Gamma.setup()",!0)}catch(t){c.push("-> "+t.message)}try{i.checkMobileNumber(s,"mobile_number is optional but a valid mobile number is required if included - in Gamma.setup()",!0)}catch(t){c.push("-> "+t.message)}return!(c.length>0)||(console.error("Gamma Setup Error:\n\n"+c.join("\n")+"\n\nRead the documentation at ( https://docs.woven.finance ) for guide on how to use this package"),!1)}static pop(){if(this.gammaSetup){const{callback:t}=this.data,e=document.createElement("div");e.innerHTML=r,document.body.appendChild(e);const n=document.getElementById("spinner"),i=document.getElementById("gamma-modal"),l=document.getElementById("popup");o(this.data).then(e=>{if(!e.success)throw new Error("unable to start handshake with gamma");{const{token:r,merchant:i={}}=e.body,{name:o,logo:a}=i;document.getElementById("merchant_details").innerHTML=s(o,a);const h=document.createElement("iframe");h.setAttribute("frameBorder","0"),h.setAttribute("allowtransparency","true"),window.matchMedia("(max-width: 600px)").matches||h.setAttribute("scrolling","no"),h.setAttribute("id","iframe"),h.src=`${c.VIEWS_URL}/${r}`,h.onload=function(e){n.style.display="none",window.onmessage=e=>{e.data.hasOwnProperty("frameHeight")?window.matchMedia("(max-width: 600px)").matches||(l.style.height=e.data.frameHeight+"px",window.matchMedia("(max-width: 600px)").matches?l.style.bottom="80px":l.style.top=`calc(50% - ${l.style.height}/2)`):e.data.hasOwnProperty("success")&&e.data.success&&(d.closeModal(),setTimeout(()=>{t(e.data.ref)},1e3))}},l.appendChild(h)}}).catch(t=>{throw a.log(t),new Error("unable to start handshake with gamma")}),l.style.display="block",i.className="darken",i.style.display="block",n.style.display="block"}else console.error("Gamma Error:\n\n-> Gamma.pop() cannot be called without proper setup. \n\nRead the documentation at ( https://docs.woven.finance ) for guide on how to use this package")}static closeModal(){const t=document.getElementById("gamma-modal"),e=document.getElementById("popup");e.innerHTML="",e.style.display="none",t.className="",t.style.display="none";const{onClose:n=null}=this.data;"function"==typeof n&&n()}}var h=document.getElementsByTagName("pay-with-woven");Object.values(h).map(t=>{let e,n;if(t.hasAttribute("theme")){const n=t.getAttribute("theme");switch(!0){case"yellow"==String(n).toLowerCase().trim()||"light"==String(n).toLowerCase().trim():e={btnColor:"#FBDA57",textColor:"#121212",svgColor:"#121212"};break;case"maroon"==String(n).toLowerCase().trim()||"red"==String(n).toLowerCase().trim():e={btnColor:"#79242F",textColor:"#FFFFFF"};break;case"black"==String(n).toLowerCase().trim()||"dark"==String(n).toLowerCase().trim():e={btnColor:"#121212",textColor:"#FFFFFF"};break;default:e={btnColor:"#79242F",textColor:"#FFFFFF"}}}t.hasAttribute("title")&&(n=t.getAttribute("title"));const r=l(e,n);t.innerHTML=""+r}),window.Gamma=d,t.exports=d},function(t,e,n){const r=n(5),i=n(1),o=`\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n\n    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">\n    <style>\n        ${r}\n    </style>\n\n    <div id="gamma-modal">\n        <div id="modal-header">\n            <div class="section">\n                <a id="cancel-btn" onClick="Gamma.closeModal()" style="flex-direction:row;align-items:center;"><div style="display-direction:row;display:flex">${i.cancel}<span id="cancel-text">&nbsp;&nbsp;Cancel</span></div></a>\n            </div>\n            <div class="section" id="merchant_details">\n                \n            </div>\n        </div>\n        <div id="spinner">\n            ${i.spinner}\n        </div>\n        <div id="modal-footer">\n            <div class="section">\n                ${i.wovenLogo}&nbsp;\n                <i class="v-line"></i>\n                <div class="text" id="footer-texts"> &nbsp;Secured Payment &nbsp</div>\n                <i class="grey">${i.lock}</i>\n            </div>\n            <div class="section" id="footer-links">\n                <a href="https://woven.finance/about" target="_blank">About Us</a>&nbsp;&nbsp;\n                <a href="https://woven.finance" target="_blank" style="margin-left: 15px;">Woven Finance</a>\n            </div>\n        </div>\n    </div>\n    \n    \n    <div id="popup"></div>\n`;t.exports=o},function(t,e){t.exports="\n    #popup { \n        display: none; \n        width: 450px; height: 400px;\n        background-color: rgb(0,0,0,0);\n        z-index: 10000000000;\n        left: calc(50% - 225px); top: calc(50% - 200px);\n        position: fixed;\n    }\n\n    #gamma-modal { \n        display: none; \n        width: 100%; height: 100%; \n        top:0px; left:0px;\n        z-index: 9999999998;\n        position: fixed;\n    }\n\n    .darken { \n        background: rgba(18, 18, 18, 0.7);\n        backdrop-filter: blur(5px);\n        -webkit-backdrop-filter: blur(5px);\n        moz-backdrop-filter: blur(5px);\n        /* filter: blur(5px); */\n        /* Note: backdrop-filter has minimal browser support */\n    }\n\n    #iframe {\n        border: 0;\n        width: 100%;\n        height: 100%;\n        border: none;\n        border-radius: 10px;\n    }\n\n    #modal-footer {\n        position: absolute;\n        width: 100%;\n        height: 80px;\n        left: 0px;\n        top: calc(100% - 80px);\n        z-index: 9999999999;\n        background: #33333359;\n        display: flex;\n        flex-direction: row;\n    }\n\n    #modal-header {\n        position: absolute;\n        width: 100%;\n        height: 100px;\n        left: 0px;\n        top: 0px;\n        z-index: 9999999999;\n        background: #00000000;\n        display: flex;\n        flex-direction: row;\n    }\n\n    .section {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin: auto;\n    }\n\n    .section .text {\n        color: #F2F2F2;\n        font-size: 12px;\n        line-height: 14px;\n        align-self: center;\n        opacity: 0.6;\n        font-family: Karla;\n    }\n\n    a {\n        text-decoration: none;\n        color: #F2F2F2;\n        font-size: 12px;\n        line-height: 14px;\n        font-family: Karla;\n    }\n\n    .v-line {\n        /* Line 4 */\n\n        width: 15px;\n        height: 0px;\n\n        opacity: 0.2;\n        /* Gray 5 */\n        border: 1px solid #E0E0E0;\n        transform: rotate(90deg);\n\n        /* Inside Auto Layout */\n        \n        align-self: center;\n        margin: 15px 0px;\n    }\n\n    .grey {\n        color: #F2F2F2;\n        font-size: 12px;\n        line-height: 14px;\n        opacity: 0.6;\n        font-family: Karla;\n    }\n\n    #cancel-btn {\n        background: #00000000;\n        font-size: 16px;\n        line-height: 19px;\n        font-family: Karla;\n        font-style: normal;\n        font-weight: bold;\n        color: #F2F2F2;\n        align-items: center;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    #merchant-logo {\n        height: 45px;\n        width: 45px;\n        align-self: center;\n    }\n\n    #merchant-label {\n        font-family: Public Sans;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 12px;\n        line-height: 15px;\n        /* identical to box height */\n\n        text-align: right;\n\n        color: rgba(255, 255, 255, 0.7);\n    }\n\n    #merchant-name {\n        font-family: Karla;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 19px;\n        /* identical to box height */\n\n        text-align: right;\n\n        color: #FFFFFF;\n    }\n\n    #spinner {\n        position: fixed;\n        top: calc(50% - 25px); left: calc(50% - 25px);\n    }\n\n    @media only screen and (max-width: 600px) {\n        #popup { \n            display: none; \n            width: 98%; height: calc(80vh - 80px);\n            z-index: 10000000000;\n            left: calc(1%); top: 20vh;\n            position: fixed;\n            /* border-radius: 0px; */\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n        }\n\n        #modal-footer {\n            position: absolute;\n            width: 98%;\n            height: 80px;\n            left: 1%;\n            bottom: 0px;\n            z-index: 9999999999;\n            background: #FFFFFF;\n            color: #828282;\n        }\n\n        #modal-footer > .section > svg > g > path {\n            fill: #828282;\n        }\n\n        .grey > svg > path {\n            fill: #828282;\n        }\n\n        #iframe {\n            border: 0;\n            width: 100%;\n            height: 100%;\n            border-radius: 0;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n        }\n\n        #cancel-text {\n            display: none;\n        }\n\n        #merchant-label {\n            font-size: 12px;\n            line-height: 14px;\n        }\n    \n        #merchant-name {\n            font-size: 14px;\n            line-height: 16px;\n        }\n\n        #footer-links {\n            display: none;\n        }\n\n        .grey {\n            color: #828282;\n            font-size: 12px;\n            line-height: 14px;\n            /* opacity: 0.6; */\n            font-family: Karla;\n        }\n\n        #footer-texts {\n            color: #828282;\n            font-size: 12px;\n            line-height: 14px;\n            opacity: 0.6;\n            font-family: Karla;\n        }\n\n        .v-line {\n            border: 1px solid #4F4F4F;\n            opacity: 0.2;\n        }\n    }\n"},function(t,e){t.exports='\n    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M14.7917 1.67709L13.323 0.208344L7.50004 6.03126L1.67712 0.208344L0.208374 1.67709L6.03129 7.50001L0.208374 13.3229L1.67712 14.7917L7.50004 8.96876L13.323 14.7917L14.7917 13.3229L8.96879 7.50001L14.7917 1.67709Z" fill="#F2F2F2"/>\n    </svg>\n'},function(t,e){t.exports='\n<svg width="72" height="20" viewBox="0 0 72 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0)">\n<path d="M29.5017 4.64284C30.0773 4.64284 30.3651 4.81804 30.3651 5.18359V12.5605C30.3651 13.0835 30.5212 13.5116 30.8183 13.8449C30.9556 14.0033 31.1261 14.1294 31.3177 14.2144C31.5093 14.2993 31.7173 14.3409 31.9268 14.3362C32.3958 14.3362 32.7705 14.1777 33.0511 13.8607C33.3324 13.5432 33.4727 13.0999 33.4727 12.5434V5.16647C33.4727 4.80157 33.7605 4.62571 34.3362 4.62571C34.9118 4.62571 35.1996 4.80157 35.1996 5.16647V12.4117C35.1996 13.4497 34.8945 14.2864 34.2841 14.9218C33.6736 15.5567 32.895 15.8669 31.9341 15.8669C31.4249 15.8758 30.9215 15.7586 30.4686 15.5258C30.0443 15.3102 29.6816 14.9904 29.4147 14.5964C29.1478 14.9904 28.7852 15.3102 28.3609 15.5258C27.9092 15.7606 27.4064 15.88 26.8974 15.8735C25.9357 15.8735 25.1572 15.5482 24.5466 14.9132C23.9361 14.2783 23.6311 13.4411 23.6311 12.4031V5.17964C23.6311 4.77786 23.9479 4.58685 24.5809 4.58685C25.2138 4.58685 25.5307 4.77984 25.5307 5.17964V12.5803C25.5307 13.1072 25.6624 13.509 25.9291 13.8087C26.1959 14.1083 26.5483 14.2579 26.9902 14.2579C27.1879 14.2627 27.3843 14.2239 27.5653 14.1442C27.7463 14.0645 27.9075 13.9459 28.0375 13.7968C28.3181 13.4826 28.4656 13.0782 28.4656 12.5836V5.17042C28.4656 4.88391 28.7686 4.6435 29.2494 4.6435L29.5017 4.64284Z" fill="#E5E1E6"/>\n<path d="M44.1778 12.2786C44.1778 13.3456 43.8281 14.2118 43.1424 14.8618C42.4567 15.5119 41.588 15.836 40.5519 15.836C39.5159 15.836 38.6477 15.5113 37.9621 14.8618C37.2764 14.2124 36.926 13.3469 36.926 12.2786V8.13371C36.926 7.06669 37.2764 6.20056 37.9621 5.55047C38.6477 4.90038 39.5191 4.57632 40.5519 4.57632C41.5847 4.57632 42.4567 4.90104 43.1417 5.55047C43.8267 6.1999 44.1771 7.06537 44.1771 8.13371L44.1778 12.2786ZM42.2789 8.19496C42.2789 7.56068 42.1116 7.06603 41.7757 6.69455C41.4398 6.32307 40.9991 6.13799 40.4656 6.13799C39.9321 6.13799 39.4908 6.32373 39.1556 6.69455C38.8203 7.06537 38.653 7.56068 38.653 8.19496V12.2127C38.653 12.847 38.8203 13.3417 39.1556 13.7132C39.4908 14.0846 39.9328 14.2697 40.4656 14.2697C40.9985 14.2697 41.4404 14.084 41.7757 13.7132C42.1109 13.3423 42.2789 12.847 42.2789 12.2127V8.19496Z" fill="#E5E1E6"/>\n<path d="M48.5315 15.066C47.8728 14.242 47.28 13.229 46.7689 12.0408C46.3249 11.0229 46.0966 9.92399 46.0984 8.81343V5.17964C46.0984 4.77786 46.4146 4.58685 47.0475 4.58685C47.6805 4.58685 47.9973 4.77984 47.9973 5.17964V8.84834C47.9952 9.66489 48.1464 10.4746 48.4432 11.2353C48.7501 12.0619 49.2112 12.9195 49.8106 13.8087C50.41 12.9195 50.871 12.0619 51.1779 11.2353C51.4745 10.4745 51.6255 9.66485 51.6232 8.84834V5.17964C51.6232 4.77786 51.94 4.58685 52.573 4.58685C53.2059 4.58685 53.5228 4.77984 53.5228 5.17964V8.8108C53.5246 9.92136 53.2963 11.0203 52.8522 12.0382C52.3372 13.2238 51.7444 14.2394 51.0897 15.0634C50.653 15.6015 50.2334 15.8709 49.8106 15.8709C49.3877 15.8709 48.9682 15.6041 48.5315 15.066Z" fill="#E5E1E6"/>\n<path d="M55.9651 15.7313C55.6166 15.7313 55.4427 15.5337 55.4427 15.122V5.29028C55.4427 4.87929 55.6166 4.68103 55.9651 4.68103H61.2046C61.534 4.68103 61.7111 4.93988 61.7111 5.45824C61.7111 5.9766 61.5366 6.23479 61.2046 6.23479H57.3423V9.17041H60.6283C60.9432 9.17041 61.1085 9.42927 61.1085 9.94697C61.1085 10.4647 60.9432 10.7242 60.6283 10.7242H57.3423V14.1775H61.283C61.6156 14.1775 61.7902 14.4364 61.7902 14.9547C61.7902 15.4731 61.6156 15.7313 61.283 15.7313H55.9651Z" fill="#E5E1E6"/>\n<path d="M65.5781 15.2379C65.5781 15.6331 65.2666 15.8228 64.6435 15.8228C64.0204 15.8228 63.7102 15.6331 63.7102 15.2379V8.12976C63.7102 7.04628 64.0659 6.16698 64.7772 5.50766C65.4886 4.84835 66.3705 4.51968 67.4224 4.51968C68.4742 4.51968 69.3555 4.84901 70.0675 5.50766C70.7795 6.16632 71.1345 7.04759 71.1345 8.12976V15.2327C71.1345 15.6345 70.8177 15.8255 70.1848 15.8255C69.5518 15.8255 69.235 15.6325 69.235 15.2327V8.17126C69.235 7.53697 69.067 7.04232 68.7324 6.67084C68.3978 6.29936 67.9552 6.11428 67.4224 6.11428C66.8895 6.11428 66.4469 6.30002 66.1123 6.67084C65.7777 7.04167 65.6091 7.53697 65.6091 8.17126L65.5781 15.2379Z" fill="#E5E1E6"/>\n<path d="M17.434 13.3707V16.5869H18.1789C18.9304 16.5869 19.6134 16.0876 19.7801 15.3545C19.8364 15.1178 19.8383 14.8715 19.7858 14.6339C19.7333 14.3964 19.6277 14.1738 19.4768 13.9829C19.326 13.792 19.1339 13.6378 18.9149 13.5317C18.6959 13.4257 18.4558 13.3706 18.2125 13.3707H17.434Z" fill="#E5E1E6"/>\n<path d="M12.6942 13.3707H1.66237C0.911508 13.3707 0.227826 13.8706 0.0618455 14.603C0.00546746 14.8395 0.00336277 15.0857 0.0556893 15.3231C0.108016 15.5605 0.213415 15.783 0.363984 15.9739C0.514552 16.1647 0.706382 16.319 0.925086 16.4252C1.14379 16.5314 1.38369 16.5866 1.62681 16.5869H12.6922L12.6942 13.3707Z" fill="#E5E1E6"/>\n<path d="M16.5875 2.37116V1.64664C16.5875 0.893797 16.0862 0.208798 15.3518 0.0454517C15.1166 -0.0107291 14.8718 -0.0131246 14.6355 0.0384437C14.3992 0.0900121 14.1776 0.194216 13.9872 0.343295C13.7968 0.492374 13.6425 0.682489 13.5357 0.899481C13.4289 1.11647 13.3725 1.35475 13.3706 1.59658V2.37116H16.5875Z" fill="#E5E1E6"/>\n<path d="M13.3706 7.27811V18.3567C13.3706 19.1095 13.8718 19.7945 14.6062 19.9585C14.8417 20.0148 15.0869 20.0171 15.3234 19.9653C15.56 19.9135 15.7818 19.809 15.9722 19.6594C16.1626 19.5099 16.3168 19.3193 16.4233 19.1018C16.5297 18.8843 16.5856 18.6456 16.5868 18.4034V7.27811H13.3706Z" fill="#E5E1E6"/>\n<path d="M2.37116 3.21555H1.65718C0.851648 3.21555 0.13174 3.78726 0.017134 4.58554C-0.0167483 4.81417 -0.000962486 5.04741 0.0634164 5.26938C0.127795 5.49135 0.239255 5.69684 0.390205 5.87185C0.541155 6.04687 0.728049 6.18729 0.93816 6.28357C1.14827 6.37985 1.37666 6.42972 1.60778 6.42977H2.37116V3.21555Z" fill="#E5E1E6"/>\n<path d="M7.27808 3.21555V6.43175H18.2117C19.0179 6.43175 19.7378 5.86004 19.8531 5.06241C19.8868 4.83375 19.871 4.6005 19.8065 4.37853C19.742 4.15656 19.6305 3.95108 19.4795 3.77608C19.3285 3.60108 19.1416 3.46067 18.9315 3.3644C18.7213 3.26812 18.4929 3.21825 18.2618 3.21818L7.27808 3.21555Z" fill="#E5E1E6"/>\n<path d="M6.43239 12.6942V1.75203C6.43239 0.999844 5.93181 0.314186 5.19741 0.150182C4.96188 0.093928 4.71667 0.0916081 4.48011 0.143395C4.24355 0.195182 4.02174 0.299738 3.83125 0.449257C3.64076 0.598775 3.4865 0.789394 3.38 1.00688C3.2735 1.22437 3.2175 1.4631 3.21619 1.70526V12.6942H6.43239Z" fill="#E5E1E6"/>\n<path d="M3.21619 17.4333V18.2968C3.21619 19.0489 3.71676 19.7346 4.45116 19.8986C4.6867 19.9549 4.9319 19.9572 5.16846 19.9054C5.40503 19.8536 5.62683 19.7491 5.81732 19.5995C6.00782 19.45 6.16207 19.2594 6.26858 19.0419C6.37508 18.8244 6.43108 18.5857 6.43239 18.3435V17.4333H3.21619Z" fill="#E5E1E6"/>\n</g>\n<defs>\n<clipPath id="clip0">\n<rect width="71.1345" height="20" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n'},function(t,e){t.exports='\n<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.63452 11.125C7.96604 11.125 8.28398 10.9933 8.5184 10.7589C8.75282 10.5245 8.88452 10.2065 8.88452 9.875C8.88452 9.18125 8.32202 8.625 7.63452 8.625C7.303 8.625 6.98506 8.7567 6.75064 8.99112C6.51622 9.22554 6.38452 9.54348 6.38452 9.875C6.38452 10.2065 6.51622 10.5245 6.75064 10.7589C6.98506 10.9933 7.303 11.125 7.63452 11.125ZM11.3845 5.5C11.716 5.5 12.034 5.6317 12.2684 5.86612C12.5028 6.10054 12.6345 6.41848 12.6345 6.75V13C12.6345 13.3315 12.5028 13.6495 12.2684 13.8839C12.034 14.1183 11.716 14.25 11.3845 14.25H3.88452C3.553 14.25 3.23506 14.1183 3.00064 13.8839C2.76622 13.6495 2.63452 13.3315 2.63452 13V6.75C2.63452 6.05625 3.19702 5.5 3.88452 5.5H4.50952V4.25C4.50952 3.4212 4.83876 2.62634 5.42481 2.04029C6.01086 1.45424 6.80572 1.125 7.63452 1.125C8.0449 1.125 8.45126 1.20583 8.83041 1.36288C9.20955 1.51992 9.55405 1.75011 9.84423 2.04029C10.1344 2.33047 10.3646 2.67497 10.5216 3.05411C10.6787 3.43326 10.7595 3.83962 10.7595 4.25V5.5H11.3845ZM7.63452 2.375C7.13724 2.375 6.66033 2.57254 6.3087 2.92417C5.95706 3.27581 5.75952 3.75272 5.75952 4.25V5.5H9.50952V4.25C9.50952 3.75272 9.31198 3.27581 8.96035 2.92417C8.60872 2.57254 8.1318 2.375 7.63452 2.375Z" fill="#F2F2F2"/>\n</svg>\n'},function(t,e){t.exports='\n<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n<g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f2f2f2">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g>\n\x3c!-- [ldio] generated by https://loading.io/ --\x3e</svg>\n'},function(t,e){t.exports=t=>`\n<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M21.7924 16.249V20.1576H22.7236C23.663 20.1576 24.5167 19.5509 24.725 18.66C24.7954 18.3723 24.7979 18.0729 24.7322 17.7842C24.6666 17.4955 24.5345 17.225 24.346 16.9931C24.1574 16.7611 23.9173 16.5736 23.6436 16.4448C23.3699 16.3159 23.0697 16.249 22.7656 16.249H21.7924Z" fill="${t}"/>\n<path d="M15.8679 16.249H2.07834C1.13977 16.249 0.285176 16.8566 0.0777029 17.7467C0.00723126 18.0341 0.00460043 18.3332 0.0700077 18.6217C0.135415 18.9103 0.267163 19.1807 0.455371 19.4126C0.643579 19.6446 0.883363 19.8321 1.15674 19.9611C1.43012 20.0901 1.72999 20.1573 2.03388 20.1576H15.8654L15.8679 16.249Z" fill="${t}"/>\n<path d="M20.7345 2.88154V2.00105C20.7345 1.08614 20.1079 0.253676 19.1899 0.0551652C18.8959 -0.0131101 18.5899 -0.0160212 18.2945 0.0466486C17.9992 0.109318 17.7222 0.235955 17.4842 0.417127C17.2462 0.5983 17.0532 0.829342 16.9198 1.09305C16.7864 1.35675 16.7158 1.64633 16.7134 1.94022V2.88154H20.7345Z" fill="${t}"/>\n<path d="M16.7134 8.84497V22.3085C16.7134 23.2234 17.34 24.0559 18.258 24.2552C18.5523 24.3236 18.8588 24.3264 19.1545 24.2635C19.4501 24.2005 19.7273 24.0734 19.9654 23.8917C20.2034 23.71 20.3962 23.4783 20.5292 23.214C20.6622 22.9497 20.7321 22.6596 20.7336 22.3653V8.84497H16.7134Z" fill="${t}"/>\n<path d="M2.96422 3.90771H2.07175C1.06485 3.90771 0.164978 4.6025 0.0217224 5.57264C-0.02063 5.85048 -0.00089792 6.13393 0.0795747 6.40369C0.160047 6.67344 0.29937 6.92317 0.488055 7.13586C0.67674 7.34855 0.910355 7.51921 1.17299 7.63622C1.43563 7.75322 1.72111 7.81382 2.01001 7.81389H2.96422V3.90771Z" fill="${t}"/>\n<path d="M9.09784 3.90771V7.81629H22.7647C23.7724 7.81629 24.6723 7.12151 24.8164 6.15217C24.8586 5.87428 24.8387 5.59082 24.7582 5.32106C24.6776 5.05131 24.5382 4.80159 24.3494 4.58892C24.1607 4.37625 23.927 4.20561 23.6644 4.08861C23.4017 3.97161 23.1162 3.91101 22.8273 3.91092L9.09784 3.90771Z" fill="${t}"/>\n<path d="M8.04071 15.4271V2.12928C8.04071 1.21517 7.415 0.38191 6.49701 0.182599C6.20259 0.114235 5.89609 0.111416 5.60039 0.174351C5.3047 0.237287 5.02744 0.364351 4.78933 0.546058C4.55122 0.727765 4.3584 0.959419 4.22527 1.22373C4.09214 1.48803 4.02215 1.77816 4.02051 2.07245V15.4271H8.04071Z" fill="${t}"/>\n<path d="M4.02051 21.1863V22.2357C4.02051 23.1498 4.64622 23.983 5.56421 24.1823C5.85863 24.2507 6.16513 24.2535 6.46083 24.1906C6.75652 24.1277 7.03378 24.0006 7.27189 23.8189C7.51 23.6372 7.70282 23.4055 7.83595 23.1412C7.96907 22.8769 8.03907 22.5868 8.04071 22.2925V21.1863H4.02051Z" fill="${t}"/>\n</svg>\n`},function(t,e){t.exports=t=>`\n    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0.158333 8.81667L3.975 5L0.158333 1.175L1.33333 0L6.33333 5L1.33333 10L0.158333 8.81667Z" fill="${t}"/>\n    </svg>\n`},function(t,e,n){const r={checkType:function(t,e,n,r=!1){if((!r||null!=t)&&typeof t!==e)throw new Error(n)},checkEmail:function(t,e){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))throw new Error(e)},checkMobileNumber:function(t,e,n=!1){if(n&&null==t)return;if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(String(t)))throw new Error(e)}};t.exports=r},function(t,e,n){const r=n(2),i=n(18),{env:o}=n(0);n(19);t.exports={makeHandshake:async t=>{const{key:e,email:n,amount:a,customer_name:s="NA",ref:l=null,mobile_number:c="08012345678",metadata:d={},callback_url:h=""}=t||{},p=JSON.stringify({api_key:e,customer_name:s,customer_email:n,customer_mobile:c,customer_ref:l,amount:(a/100).toFixed(2),call_back_url:h,meta_data:d});console.log(o.HANDSHAKE_URL);try{const t=await window.fetch(o.HANDSHAKE_URL,{method:i.HTTP_POST,headers:i.HTTP_DEFAULT_HEADER,body:p});return await t.json()}catch(t){throw r.log(t),new Error("Gamma Error","unable to start transaction. please check your connection")}}}},function(t){t.exports=JSON.parse('{"HANDSHAKE_URL":"https://dd.staging.woven.finance/directdebits/v1/setup","VIEWS_URL":"https://payment.staging.woven.finance/#","MODE":"development","LOGGING":true}')},function(t){t.exports=JSON.parse('{"HANDSHAKE_URL":"https://dd.staging.woven.finance/directdebits/v1/setup","VIEWS_URL":"https://payment.staging.woven.finance/#","MODE":"production","LOGGING":true}')},function(t){t.exports=JSON.parse('{"HANDSHAKE_URL":"https://dd.staging.woven.finance/directdebits/v1/setup","VIEWS_URL":"http://localhost:8080/#","MODE":"development","LOGGING":true}')},function(t){t.exports=JSON.parse('{"HANDSHAKE_URL":"https://dd.woven.finance/directdebits/v1/setup","VIEWS_URL":"https://payment.woven.finance/#","MODE":"production","LOGGING":false}')},function(t,e){t.exports={HTTP_POST:"POST",HTTP_GET:"GET",HTTP_DEFAULT_HEADER:{"Content-Type":"application/json;charset=utf-8"}}},function(t,e,n){"use strict";n.r(e),n.d(e,"Headers",(function(){return u})),n.d(e,"Request",(function(){return x})),n.d(e,"Response",(function(){return E})),n.d(e,"DOMException",(function(){return _})),n.d(e,"fetch",(function(){return k}));var r="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r&&r,i="URLSearchParams"in r,o="Symbol"in r&&"iterator"in Symbol,a="FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in r,l="ArrayBuffer"in r;if(l)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function u(t){this.map={},t instanceof u?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function m(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function g(t){var e=new FileReader,n=y(e);return e.readAsArrayBuffer(t),n}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function C(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:a&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:i&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():l&&a&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l&&(ArrayBuffer.prototype.isPrototypeOf(t)||d(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=m(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(g)}),this.text=function(){var t,e,n,r=m(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=y(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=h(t),e=p(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},u.prototype.delete=function(t){delete this.map[h(t)]},u.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},u.prototype.set=function(t,e){this.map[h(t)]=p(e)},u.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},u.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),f(t)},u.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},u.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),f(t)},o&&(u.prototype[Symbol.iterator]=u.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(t,e){if(!(this instanceof x))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,r,i=(e=e||{}).body;if(t instanceof x){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),w.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var o=/([?&])_=[^&]*/;if(o.test(this.url))this.url=this.url.replace(o,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(i))}})),e}function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},C.call(x.prototype),C.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];E.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})};var _=r.DOMException;try{new _}catch(t){(_=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function k(t,e){return new Promise((function(n,i){var o=new x(t,e);if(o.signal&&o.signal.aborted)return i(new _("Aborted","AbortError"));var s=new XMLHttpRequest;function c(){s.abort()}s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();e.append(r,i)}})),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var i="response"in s?s.response:s.responseText;setTimeout((function(){n(new E(i,r))}),0)},s.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},s.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},s.onabort=function(){setTimeout((function(){i(new _("Aborted","AbortError"))}),0)},s.open(o.method,function(t){try{return""===t&&r.location.href?r.location.href:t}catch(e){return t}}(o.url),!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&(a?s.responseType="blob":l&&o.headers.get("Content-Type")&&-1!==o.headers.get("Content-Type").indexOf("application/octet-stream")&&(s.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof u?o.headers.forEach((function(t,e){s.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){s.setRequestHeader(t,p(e.headers[t]))})),o.signal&&(o.signal.addEventListener("abort",c),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",c)}),s.send(void 0===o._bodyInit?null:o._bodyInit)}))}k.polyfill=!0,r.fetch||(r.fetch=k,r.Headers=u,r.Request=x,r.Response=E)},function(t,e){t.exports=(t,e)=>`\n        <div style="display: block;">\n            <div id="merchant-label">Merchant</div>\n            <div id="merchant-name">${t}</div>\n        </div>\n        <div style="margin: 10px;">\n            <img id="merchant-logo" src="${e}" />\n        </div>\n    `},function(t,e,n){const r=n(1),i=n(22);t.exports=(t={},e="Pay Now")=>{const{btnColor:n="#79242F",textColor:o="#FFFFFF",svgColor:a="#FF7276"}=t;return`\n        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;700;800&display=swap" rel="stylesheet">\n        <button style="${i.create({all:"unset",padding:"15px",background:n,"border-radius":"10px",width:"253px","font-family":"Public Sans","font-style":"normal","font-weight":"bold","font-size":"16px","line-height":"19px",color:o,"text-align":"center","justify-content":"center"})}">\n            <div style="display: flex; flex-direction: row; ailgn-items: center; justify-content: space-between; align-content: center;">\n                ${r.wovenStandaloneLogo(a)}\n                <span style="font-size: 16px; align-self: center; cursor: default;">${e}</span>\n                <span style="align-self: center;">${r.arrow(o+"88")}</span>\n            </div>\n        </button>\n    `}},function(t,e){const n={create:t=>{if("object"!=typeof t)return"";let e="";return Object.keys(t).map((n,r)=>{e=`${e} ${n}:${t[n]};`}),e}};t.exports=n}]);