(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("submitButton").addEventListener("click",(()=>{let e=document.getElementById("usernameInput").value;(e.length<6||e.length>30||e.includes("&")||e.includes("=")||e.includes("_")||e.includes("-")||e.includes("+")||e.includes("<")||e.includes(">")||e.match(".").length>1)&&console.log("hibas nev")}))}))})();