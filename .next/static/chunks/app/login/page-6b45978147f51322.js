(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{2674:function(e,a,s){Promise.resolve().then(s.bind(s,4101))},4101:function(e,a,s){"use strict";s.r(a);var o=s(3955),t=s(6008),n=s(4214);s(2310);var l=s(2668),r=s.n(l);a.default=()=>{let e=(0,t.useRouter)();var a=sessionStorage.tabID&&"2"!==sessionStorage.closedLastTab?sessionStorage.tabID:sessionStorage.tabID=Math.random();async function s(){let e=await fetch("http://localhost:3000/api/login",{cache:"no-store"});if(!e.ok)throw Error("Failed to fetch data");return e.json()}async function l(){n.Z.patch("/api/login/6541366999820c954845b8a8",a).then(e=>{console.log(e)}).catch(e=>{console.log("Error"),console.log(e)})}sessionStorage.closedLastTab="2",r()(window).on("unload beforeunload",function(){sessionStorage.closedLastTab="1"});let c=async o=>{o.preventDefault();let t=await s(),n=o.target[0].value,r=o.target[1].value;t[0].username==n&&t[0].pass==r?(await l(),alert("Success"),console.log("local tabid = "+a),console.log("data tabid = "+t[0].tabid),e.push("/")):alert("Failed : Please check your login details and try again")};return(0,o.jsx)("div",{className:"w-full max-w-xs",children:(0,o.jsxs)("form",{onSubmit:c,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Username"}),(0,o.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",name:"username",type:"text",placeholder:"Username"})]}),(0,o.jsxs)("div",{className:"mb-6",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),(0,o.jsx)("input",{className:"shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",name:"pass",type:"password",placeholder:"******************"}),(0,o.jsx)("p",{className:"text-red-500 text-xs italic",children:"Please choose a password."})]}),(0,o.jsx)("div",{className:"flex items-center justify-between",children:(0,o.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign In"})})]})})}}},function(e){e.O(0,[491,573,704,801,744],function(){return e(e.s=2674)}),_N_E=e.O()}]);