(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{662:(e,a,t)=>{Promise.resolve().then(t.bind(t,8479))},8479:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var s=t(5155),r=t(2115),l=t(5565),n=t(2070),o=t(3463),i=t(9795);let u=r.forwardRef((e,a)=>{let{className:t,value:r,...l}=e;return(0,s.jsx)(n.bL,{ref:a,className:function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,i.QP)((0,o.$)(a))}("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",t),...l,children:(0,s.jsx)(n.C1,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})})});function d(){let[e,a]=(0,r.useState)(""),[t,n]=(0,r.useState)(""),[o,i]=(0,r.useState)(!1),[d,c]=(0,r.useState)(""),[m,f]=(0,r.useState)(!1),[h,p]=(0,r.useState)(0),[x,g]=(0,r.useState)(null),[b,w]=(0,r.useState)(!1),[y,v]=(0,r.useState)(0),N=async a=>{a.preventDefault(),i(!0),c("");let s=setInterval(()=>{p(e=>100===e?(clearInterval(s),100):Math.min(e+10,100))},500);try{let a=await fetch("/api/get_user_info",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}),s=await a.json();i(!1),s.message?(f(!0),g({name:s.user_name,profilePicture:s.profile_picture}),j()):(f(!1),c("Erro ao recuperar informa\xe7\xf5es"))}catch{i(!1),f(!1),c("Ocorreu um erro ao se conectar ao servidor.")}},j=async()=>{w(!0),v(0);let a=setInterval(()=>{v(e=>100===e?(clearInterval(a),100):Math.min(e+10,100))},500);try{let a=await fetch("/api/run_selenium",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}),s=await a.json();s.usuarios_adicionados?c(`Adicionados ${s.usuarios_adicionados} seguidores ao Close Friends!`):c("Erro ao adicionar seguidores.")}catch{c("Erro ao conectar para adicionar seguidores.")}finally{w(!1)}};return(0,s.jsxs)("div",{className:"flex flex-col items-center p-6 bg-gray-50 min-h-screen justify-center",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-center mb-6",children:"Adicionar Close Friends"}),x?(0,s.jsxs)("div",{className:"text-center mb-6",children:[(0,s.jsx)(l.default,{src:`${x.profilePicture}`,alt:"Foto de perfil",width:128,height:128,className:"w-32 h-32 rounded-full mx-auto mb-4"}),(0,s.jsxs)("h2",{className:"text-xl font-semibold",children:["Bem-vindo, ",x.name,"!"]}),(0,s.jsx)("p",{className:"text-gray-600 mt-2",children:"Estamos trabalhando em tudo, aguarde alguns instantes..."}),o&&(0,s.jsx)(u,{value:h,className:"w-full mt-4"})]}):(0,s.jsxs)("form",{onSubmit:N,className:"space-y-6 w-full max-w-md",children:[(0,s.jsx)("input",{type:"text",placeholder:"Usu\xe1rio",className:"border p-3 w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-500",value:e,onChange:e=>a(e.target.value),required:!0}),(0,s.jsx)("input",{type:"password",placeholder:"Senha",className:"border p-3 w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-500",value:t,onChange:e=>n(e.target.value),required:!0}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-200",disabled:o,children:o?"Processando...":"Iniciar"}),o&&(0,s.jsx)(u,{value:h,className:"w-full mt-4"})]}),b&&(0,s.jsx)(u,{value:y,className:"w-full mt-4"}),d&&(0,s.jsx)("p",{className:`mt-4 p-4 rounded-lg w-full text-center font-semibold ${m?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:d})]})}u.displayName=n.bL.displayName}},e=>{var a=a=>e(e.s=a);e.O(0,[190,441,517,358],()=>a(662)),_N_E=e.O()}]);