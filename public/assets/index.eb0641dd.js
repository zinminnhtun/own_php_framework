import{a as _,c as $,b as y,r as f,u as x,d as h,o as U,e as l,f as u,g as n,w as g,t as v,h as A,i as w,v as k,j as P,k as d,F as L,l as F,m as S,n as b,p,q as i,s as N,x as j}from"./vendor.219ab425.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};C();const O=o=>new Promise(e=>setTimeout(e,o));var B={state:{data:[{id:1,name:"I love you"},{id:2,name:"I love you,baby"}],loading:!1},getters:{name(o){return o.data.map(e=>e.name)}},mutations:{set(o,e){o.data=e},setLoading(o,e){o.loading=e}},actions:{async get({commit:o}){o("setLoading",!0),await _.get("http://localhost:8000/api/all").then(e=>o("set",e.data)).catch(e=>console.log(e)),O(1e3),o("setLoading",!1)}}},D=$({namespaced:!0,plugins:[y],state:{},getters:{},mutations:{},actions:{},modules:{User:B}});const M={class:"container bg-rose-500 p-16 mx-auto my-2 grid grid-cols-1 sm:grid-cols-2 gap-4"},T=n("label",{for:"file",class:"block"},"File Upload",-1),V=n("div",{class:"flex justify-center"},[n("input",{id:"file",type:"file",class:"w-[75%] focus:ring-amber-400 mr-2 px-3 py-2 outline-none ring"}),n("button",{type:"submit",class:"bg-teal-300 p-2 text-pink-400 hover:bg-teal-400"},"Upload")],-1),H=[T,V],I={class:"p-2 bg-fuchsia-400"},q={class:"flex justify-center"},E=n("button",{type:"submit",class:"bg-teal-300 p-2 text-pink-400 hover:bg-teal-400"},"Upload",-1),K=n("div",{class:"p-2 bg-fuchsia-400"},null,-1),R=n("div",{class:"p-2 bg-fuchsia-400"},null,-1),W=n("div",{class:"p-2 bg-fuchsia-400"},null,-1),z=n("div",{class:"p-2 bg-fuchsia-400"},null,-1),G={setup(o){const e=f(null),r=x();h(()=>r.state.User.data);const a=h(()=>r.getters.name);return U(()=>{r.dispatch("get")}),(t,s)=>(l(),u("div",M,[n("form",{onSubmit:s[0]||(s[0]=g((...c)=>t.summit&&t.summit(...c),["prevent"])),class:"p-2 bg-fuchsia-400 flex-col"},H,32),n("div",I,[n("p",null,v(A(a)),1),n("label",null,v(e.value),1),n("div",q,[w(n("input",{"onUpdate:modelValue":s[1]||(s[1]=c=>e.value=c),type:"text",class:"w-[75%] focus:ring-amber-400 mr-2 px-3 py-2 outline-none ring"},null,512),[[k,e.value]]),E])]),K,R,W,z]))}},J={setup(o){return(e,r)=>(l(),P(G))}};var m=(o,e)=>{const r=o.__vccOpts||o;for(const[a,t]of e)r[a]=t;return r};const Q={name:"About"},X={class:"text-center"};function Y(o,e,r,a,t,s){return l(),u("h1",X,"About Page")}var Z=m(Q,[["render",Y]]);const ee={name:"Post"},te={class:"text-center"};function se(o,e,r,a,t,s){return l(),u("h1",te,"Post")}var oe=m(ee,[["render",se]]);const ne={name:"AddPost"},ae={class:"text-center"};function re(o,e,r,a,t,s){return l(),u("h1",ae,"Add User")}var ce=m(ne,[["render",re]]);const ie={class:"mx-auto mt-12 flex justify-center items-center"},le=["onSubmit"],ue=n("button",{type:"submit",class:"btn-blue"},"Upload",-1),de={setup(o){const e=f(null);function r(t){e.value=t.target.files,console.log(e.value)}function a(){const t=new FormData;for(let s=0;s<e.value.length;s++){let c=e.value[s];t.append("files["+s+"]",c)}_.post("http://localhost:8000/save",t,{header:{"Content-Type":"multipart/form-data"}}).then(s=>console.log(s.data)).catch(s=>console.log(s))}return(t,s)=>(l(),u("div",ie,[n("form",{onSubmit:g(a,["prevent"]),action:"/save",method:"post",enctype:"multipart/form-data",class:"h-screen mx-auto"},[n("input",{onChange:r,type:"file",name:"file",accept:"*/*",class:"file-input",multiple:""},null,32),ue],40,le)]))}},pe=n("h1",{class:"text-center"},"File Upload",-1),_e={setup(o){return(e,r)=>(l(),u(L,null,[pe,d(de)],64))}},me=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:Z},{path:"/post",name:"Post",component:oe},{path:"/add-user",name:"AddUser",component:ce},{path:"/file-upload",name:"FileUpload",component:_e}],fe=F({history:S(),routes:me});const he={class:"bg-gradient-to-br from-sky-200 to-emerald-300"},ge={class:"container mx-auto min-h-screen"},ve={class:"text-center"},be=i("Home"),$e=i(" | "),ye=i("Post"),xe=i(" | "),Ue=i("Add User"),Ae=i(" | "),we=i("File Upload"),ke=i(" | "),Pe=i("About"),Le={setup(o){return(e,r)=>{const a=b("router-link"),t=b("router-view");return l(),u("div",he,[n("div",ge,[n("div",ve,[d(a,{to:"/"},{default:p(()=>[be]),_:1}),$e,d(a,{to:"/post"},{default:p(()=>[ye]),_:1}),xe,d(a,{to:"/add-user"},{default:p(()=>[Ue]),_:1}),Ae,d(a,{to:"/file-upload"},{default:p(()=>[we]),_:1}),ke,d(a,{to:"/about"},{default:p(()=>[Pe]),_:1})]),d(t)])])}}};N(Le).use(j,_).use(D).use(fe).mount("#app");
