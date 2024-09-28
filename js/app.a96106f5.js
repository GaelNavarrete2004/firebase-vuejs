(function(){"use strict";var e={6136:function(e,t,a){a.d(t,{db:function(){return se}});var o=a(5130),r=a(6768);function n(e,t){const a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(a)}var s=a(1241);const i={},l=(0,s.A)(i,[["render",n]]);var u=l,c=a(1387),d=a(4232);const p={class:"container"},b={class:"container my-4"},m={class:"p-4 border rounded shadow-sm bg-light"},g={class:"mb-3"},f={class:"mb-3"},v={class:"d-grid gap-2"},k={class:"table table-striped table-hover mt-4"},h={scope:"row"},L=["onClick"];function y(e,t,a,n,s,i){const l=(0,r.g2)("Navbar");return(0,r.uX)(),(0,r.CE)("div",p,[(0,r.bF)(l),(0,r.Lk)("div",b,[(0,r.Lk)("form",m,[(0,r.Lk)("div",g,[t[3]||(t[3]=(0,r.Lk)("label",{class:"form-label"},"Nombre",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.usuario.nombre=e),type:"text",class:"form-control"},null,512),[[o.Jo,s.usuario.nombre]])]),(0,r.Lk)("div",f,[t[4]||(t[4]=(0,r.Lk)("label",{class:"form-label"},"Correo",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.usuario.correo=e),type:"email",class:"form-control"},null,512),[[o.Jo,s.usuario.correo]])]),(0,r.Lk)("div",v,[(0,r.Lk)("button",{onClick:t[2]||(t[2]=(0,o.D$)(((...e)=>i.agregarDato&&i.agregarDato(...e)),["prevent"])),class:"btn btn-primary"}," Guardar ")])])]),(0,r.Lk)("table",k,[t[5]||(t[5]=(0,r.Lk)("thead",{class:"table-dark"},[(0,r.Lk)("tr",null,[(0,r.Lk)("th",{scope:"col"},"ID"),(0,r.Lk)("th",{scope:"col"},"Nombre"),(0,r.Lk)("th",{scope:"col"},"Correo"),(0,r.Lk)("th",{scope:"col"},"Acciones")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.usuarios,((e,t)=>((0,r.uX)(),(0,r.CE)("tr",{key:t},[(0,r.Lk)("th",h,(0,d.v_)(t),1),(0,r.Lk)("td",null,(0,d.v_)(e.nombre),1),(0,r.Lk)("td",null,(0,d.v_)(e.correo),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:(0,o.D$)((t=>i.eliminarDato(e.id)),["prevent"]),class:"btn btn-danger btn-sm"}," Eliminar ",8,L)])])))),128))])])])}a(4114);const w={class:"navbar navbar-expand-lg navbar-light bg-light"},C={class:"container-fluid"},x={class:"collapse navbar-collapse",id:"navbarSupportedContent"},U={class:"navbar-nav me-auto mb-2 mb-lg-0"},E={class:"nav-item"},j={class:"nav-item"},S={key:0,type:"button",class:"btn btn-outline-primary mx-2","data-bs-toggle":"modal","data-bs-target":"#login"},D={key:2,type:"button",class:"btn btn-outline-warning","data-bs-toggle":"modal","data-bs-target":"#registro"},I={class:"modal fade",id:"registro"},O={class:"modal-dialog"},A={class:"modal-content"},J={class:"modal-body"},P={class:"input-group mb-3"},_={class:"input-group mb-3"},X={class:"input-group mb-3"},q={class:"modal fade",id:"login"},F={class:"modal-dialog"},M={class:"modal-content"},N={class:"modal-body"},T={class:"input-group mb-3"},V={class:"input-group mb-3"};function H(e,t,a,n,s,i){const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",w,[(0,r.Lk)("div",C,[t[10]||(t[10]=(0,r.Lk)("a",{class:"navbar-brand",href:"#"},"Vuejs firebase",-1)),t[11]||(t[11]=(0,r.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,r.Lk)("div",x,[(0,r.Lk)("ul",U,[(0,r.Lk)("li",E,[(0,r.bF)(l,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,r.k6)((()=>t[8]||(t[8]=[(0,r.eW)("Home")]))),_:1})]),(0,r.Lk)("li",j,[e.existeUsuario?((0,r.uX)(),(0,r.Wv)(l,{key:0,class:"nav-link active","aria-current":"page",to:"/about"},{default:(0,r.k6)((()=>t[9]||(t[9]=[(0,r.eW)("About")]))),_:1})):(0,r.Q3)("",!0)])]),e.existeUsuario?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",S," Log in ")),e.existeUsuario?((0,r.uX)(),(0,r.CE)("button",{key:1,class:"btn btn-outline-danger me-2","data-bs-toggle":"modal","data-bs-target":"#login",onClick:t[0]||(t[0]=(...e)=>i.signout&&i.signout(...e))}," Log out ")):(0,r.Q3)("",!0),e.existeUsuario?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",D," Registrate "))])])]),(0,r.Lk)("div",I,[(0,r.Lk)("div",O,[(0,r.Lk)("div",A,[t[16]||(t[16]=(0,r.Lk)("div",{class:"modal-header"},[(0,r.Lk)("h5",{class:"modal-title"},"Regístrate"),(0,r.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,r.Lk)("div",J,[(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)((e=>i.register(this.email,this.password)),["prevent"]))},[(0,r.Lk)("div",P,[t[12]||(t[12]=(0,r.Lk)("span",{class:"input-group-text"},"Correo",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),type:"email",required:"true",class:"form-control"},null,512),[[o.Jo,s.email]])]),(0,r.Lk)("div",_,[t[13]||(t[13]=(0,r.Lk)("span",{class:"input-group-text"},"Password",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.password=e),type:"password",required:"true",class:"form-control"},null,512),[[o.Jo,s.password]])]),(0,r.Lk)("div",X,[t[14]||(t[14]=(0,r.Lk)("span",{class:"input-group-text"},"Confirm Password",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.repassword=e),type:"password",required:"true",class:"form-control"},null,512),[[o.Jo,s.repassword]])]),t[15]||(t[15]=(0,r.Lk)("div",{class:"d-grid gap-2"},[(0,r.Lk)("button",{type:"submit",class:"btn btn-primary","data-bs-dismiss":"modal"}," Registrar ")],-1))],32)])])])]),(0,r.Lk)("div",q,[(0,r.Lk)("div",F,[(0,r.Lk)("div",M,[t[20]||(t[20]=(0,r.Lk)("div",{class:"modal-header"},[(0,r.Lk)("h5",{class:"modal-title"},"Inicia de sesión"),(0,r.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,r.Lk)("div",N,[(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,o.D$)((e=>i.login(this.email,this.password)),["prevent"]))},[(0,r.Lk)("div",T,[t[17]||(t[17]=(0,r.Lk)("span",{class:"input-group-text"},"Correo",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>s.email=e),type:"email",required:"true",class:"form-control"},null,512),[[o.Jo,s.email]])]),(0,r.Lk)("div",V,[t[18]||(t[18]=(0,r.Lk)("span",{class:"input-group-text"},"Password",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>s.password=e),type:"password",required:"true",class:"form-control"},null,512),[[o.Jo,s.password]])]),t[19]||(t[19]=(0,r.Lk)("div",{class:"d-grid gap-2"},[(0,r.Lk)("button",{type:"submit",class:"btn btn-primary","data-bs-dismiss":"modal"}," Iniciar sesión ")],-1))],32)])])])])],64)}var W=a(6971),$=a(782),G={name:"Navbar",data(){return{email:"",password:"",repassword:"",errorMessage:""}},methods:{register(e,t){const a=(0,W.xI)();(0,W.eJ)(a,e,t).then((e=>{e.user;alert("¡Registrado!")})).catch((e=>{e.code;this.errorMessage=e.message,alert(this.errorMessage)}))},login(e,t){const a=(0,W.xI)();(0,W.x9)(a,e,t).then((e=>{alert("¡Sesión iniciada!");e.user})).catch((e=>{e.code;this.errorMessage=e.message,alert(this.errorMessage)}))},signout(){const e=(0,W.xI)();(0,W.CI)(e).then((()=>{alert("¡Sesión cerrada! Inicia sesión.")})).catch((e=>{}))}},computed:{...(0,$.L8)(["existeUsuario"])}};const K=(0,s.A)(G,[["render",H]]);var Q=K,R=a(2005),B={name:"Home",components:{Navbar:Q},data(){return{usuarios:[],usuario:{nombre:"",correo:""}}},methods:{async obtenerDatos(){const e=await(0,R.GG)((0,R.rJ)(se,"usuarios"));e.forEach((e=>{let t=e.data();t.id=e.id,this.usuarios.push(t),console.log(t)}))},async agregarDato(){await(0,R.gS)((0,R.rJ)(se,"usuarios"),{nombre:this.usuario.nombre,correo:this.usuario.correo}).then((()=>{te.go("/"),console.log("Documento añadido")})).catch((function(e){console.error("Error al añadir el documento: ",e)}))},async eliminarDato(e){await(0,R.kd)((0,R.H9)(se,"usuarios",e)),te.go("/")}},mounted(){this.obtenerDatos()}};const z=(0,s.A)(B,[["render",y]]);var Y=z;const Z=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:()=>a.e(594).then(a.bind(a,603)),meta:{requiresAuth:!0}}],ee=(0,c.aE)({history:(0,c.Bt)(),routes:Z});ee.beforeEach(((e,t,a)=>{if(e.matched.some((e=>e.meta.requiresAuth))){const e=(0,W.xI)(),t=e.currentUser;console.log("usuario desde router",t),t?a():a({path:"/"})}else a()}));var te=ee,ae=(0,$.y$)({state:{usuario:null},mutations:{setUsuario(e,t){e.usuario=t}},actions:{detectarUsuario({commit:e},t){e("setUsuario",t)}},getters:{existeUsuario(e){return null!==e.usuario}},modules:{}}),oe=(a(8077),a(6400));const re={apiKey:"AIzaSyCHjmkgFmOSFkLKnokYnGAJsAEPL9D_HPU",authDomain:"fir-eec17.firebaseapp.com",projectId:"fir-eec17",storageBucket:"fir-eec17.appspot.com",messagingSenderId:"769947960603",appId:"1:769947960603:web:f23731ad2e3a8871fcffbe"},ne=(0,oe.Wp)(re),se=(0,R.aU)(ne),ie=(0,W.xI)();(0,W.hg)(ie,(e=>{if(e){console.log(e);const t={email:e.email,uid:e.uid};ae.dispatch("detectarUsuario",t),console.log(t)}else console.log(e),ae.dispatch("detectarUsuario",e)})),(0,o.Ef)(u).use(ae).use(te).mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,n){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],n=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.82a40b5c.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="firebase9:";a.l=function(o,r,n,s){if(e[o])e[o].push(r);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+n){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+n),i.src=o),e[o]=[r];var p=function(t,a){i.onerror=i.onload=null,clearTimeout(b);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/firebase-vuejs/"}(),function(){var e={524:0};a.f.j=function(t,o){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise((function(a,o){r=e[t]=[a,o]}));o.push(r[2]=n);var s=a.p+a.u(t),i=new Error,l=function(o){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,r[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,s=o[0],i=o[1],l=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(t&&t(o);u<s.length;u++)n=s[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},o=self["webpackChunkfirebase9"]=self["webpackChunkfirebase9"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(6136)}));o=a.O(o)})();
//# sourceMappingURL=app.a96106f5.js.map