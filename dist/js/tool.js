(function(e,h){typeof exports=="object"&&typeof module<"u"?h(require("vue")):typeof define=="function"&&define.amd?define(["vue"],h):(e=typeof globalThis<"u"?globalThis:e||self,h(e.Vue))})(this,function(e){"use strict";const h={key:0,class:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75 rounded-lg"},f={__name:"Button",props:{type:String,loading:Boolean},setup(n){return(i,a)=>{const d=e.resolveComponent("Loader");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["shadow relative h-10 px-4 rounded-lg bg-primary-500 text-white text-white flex items-center text-center cursor-pointer hover:opacity-75 transition",{"bg-red-500":n.type==="danger","bg-yellow-500":n.type==="warning","bg-blue-500":n.type==="info","bg-green-500":n.type==="success","bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-300":n.type==="gray","pointer-events-none":n.loading}])},[e.renderSlot(i.$slots,"default"),n.loading?(e.openBlock(),e.createElementBlock("div",h)):e.createCommentVNode("",!0),n.loading?(e.openBlock(),e.createBlock(d,{key:1,class:"absolute inset-0 m-auto text-white",width:"32"})):e.createCommentVNode("",!0)],2)}}},S=(n,i)=>{const a=n.__vccOpts||n;for(const[d,g]of i)a[d]=g;return a},D={props:{type:{type:String,required:!1},loading:{type:Boolean,default:!1},processing:{type:Boolean,default:!1}}},T={type:"button",class:"inline-flex relative items-center justify-center w-8 h-8 focus:outline-none focus:ring rounded-lg"},M={key:0,class:"absolute",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}};function L(n,i,a,d,g,w){const _=e.resolveComponent("Icon"),m=e.resolveComponent("Loader");return e.openBlock(),e.createElementBlock("button",T,[e.createElementVNode("span",{class:e.normalizeClass({invisible:a.processing||a.loading})},[e.renderSlot(n.$slots,"default"),a.type?(e.openBlock(),e.createBlock(_,{key:0,solid:"",type:a.type},null,8,["type"])):e.createCommentVNode("",!0)],2),a.processing||a.loading?(e.openBlock(),e.createElementBlock("span",M,[e.createVNode(m,{class:"text-gray-500",width:"32"})])):e.createCommentVNode("",!0)])}const u=S(D,[["render",L]]),j={class:"nova-command-runner"},O={class:"text-lg font-semibold mb-6"},$={key:0,class:"flex flex-col md:flex-row mb-3 md:space-x-3 space-y-2 md:space-y-0"},F=["value"],U={class:"bg-white dark:bg-gray-800 rounded-lg shadow mb-3 grid md:grid-cols-12 gap-6 p-6"},R={class:"text-sm font-semibold"},H={class:"flex flex-col md:flex-row md:items-center justify-between mt-6 mb-6"},q={class:"font-bold"},z={class:"md:ml-2 inline-flex items-center shadow rounded-lg bg-white dark:bg-gray-800 px-2 h-8"},I={class:"bg-white dark:bg-gray-800 rounded-lg shadow mb-3 p-2 overflow-y-hidden overflow-x-auto"},A={key:0,class:"w-full"},X={class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"},P={class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"},J={class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"},K={class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"},W={class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"},G={class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"},Q={class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"},Y={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},Z={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},v={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},ee={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},te=["innerHTML"],oe={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},re={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},ae={key:1,class:"flex flex-col justify-center items-center px-6 py-8"},ne={class:"text-base font-normal mt-3"},le={key:1,class:"fixed inset-0 z-[60] bg-gray-500/75 dark:bg-gray-900/75 flex items-center justify-center p-3"},se={class:"relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow min-w-80 md:w-1/2 max-w-full max-h-full overflow-y-auto"},ce={class:"text-lg font-bold mb-5"},de={class:"grid gap-6"},ie={key:0},pe={class:"mb-2 block leading-tight w-full text-sm font-semibold"},ge=["onUpdate:modelValue"],me=["type","onUpdate:modelValue","placeholder"],ye={key:1},he=["onUpdate:modelValue"],ke={class:"flex items-center space-x-3 mt-5"},fe={__name:"Tool",setup(n){const i=e.ref(!1),a=e.ref(!1),d=e.ref(!1),g=e.ref(!1),w=e.ref(""),_=e.ref(),m=e.ref(),y=e.ref(),b=e.ref(),B=e.ref(),be=e.ref(),C=e.ref(),x=e.ref(),k=e.ref(),r=e.ref();e.onMounted(async()=>{await N(),xe()});async function N(){if(i.value)return;i.value=!0;const s=await fetch("/nova-vendor/stepanenko3/nova-command-runner");if(s.ok){const o=await s.clone().json();w.value=o.heading,m.value=o.history,B.value=o.commands,be.value=o.help,C.value=o.polling_time,b.value=[],o.commands.forEach(p=>{let t=p.group;b.value.indexOf(t)<0&&b.value.push(t)}),y.value=o.custom_commands,y.value&&Object.keys(y.value).indexOf(k.value)===-1&&(k.value=Object.keys(y.value)[0])}i.value=!1}function xe(){_.value=setInterval(()=>{!i.value&&(a.value||m.value.filter(s=>s.status==="pending").length>0)&&N()},C.value)}function ue(){E({label:"Clear Command Run History",type:"primary",help:"Are you sure you want to clear the command run history?",command_type:"artisan",command:"cache:forget nova-command-runner-history",variables:[],flags:[]})}function E(s){r.value=s,g.value=!0}function V(){g.value=!1,r.value={}}function we(){let s=!0;r.value.variables&&Object.keys(r.value.variables).forEach(o=>{(r.value.variables[o].value==null||r.value.variables[o].value.length===0)&&(s=!1,Nova.error(r.value.variables[o].label+" is required"))}),s&&(d.value=!0,fetch("/nova-vendor/stepanenko3/nova-command-runner/run",{method:"POST",headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},body:JSON.stringify({command:r.value})}).then(async o=>{if(o.ok){const p=await o.json();p.status&&(p.status==="success"||p.status==="pending")?Nova.success(p.result):Nova.error(p.result),d.value=!1,m.value=p.history,V()}else Nova.error(`${o.status}: ${o.statusText||"Something went wrong"}`),d.value=!1,V()}).catch(o=>{d.value=!1}))}function _e(){if(!x.value){Nova.error("Please enter a command");return}E({label:"Custom Command",type:"primary",help:"Are you sure you want to run this command?",command_type:k.value,command:x.value,variables:[],flags:[]})}function Ne(s){return s}return(s,o)=>{const p=e.resolveComponent("Icon");return e.openBlock(),e.createElementBlock("div",j,[e.createElementVNode("div",O,e.toDisplayString(w.value),1),Array.isArray(y.value)?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",$,[e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":o[0]||(o[0]=t=>k.value=t),class:"appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(y.value,(t,l)=>(e.openBlock(),e.createElementBlock("option",{key:l,value:l},e.toDisplayString(t),9,F))),128))],512),[[e.vModelSelect,k.value]]),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>x.value=t),class:"appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg flex-grow"},null,512),[[e.vModelText,x.value]]),e.createVNode(f,{onClick:_e},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString("Run"),1)]),_:1})])),e.createElementVNode("div",U,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(b.value,(t,l)=>(e.openBlock(),e.createElementBlock("div",{class:"md:col-span-3 grid gap-3 content-start",key:l},[e.createElementVNode("div",R,e.toDisplayString(t||"Unnamed group"),1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(B.value,(c,Ee)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[c.group==t?(e.openBlock(),e.createBlock(f,{key:0,loading:!g.value&&d.value,type:c.type,onClick:Ve=>E(c)},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(c.label),1)]),_:2},1032,["loading","type","onClick"])):e.createCommentVNode("",!0)],64))),256))]))),128))]),e.createElementVNode("div",H,[e.createElementVNode("div",q,e.toDisplayString("History"),1),e.createElementVNode("div",z,[e.createVNode(u,{onClick:e.withModifiers(N,["prevent"]),loading:i.value,type:"refresh"},null,8,["loading"]),e.createVNode(u,{onClick:o[2]||(o[2]=e.withModifiers(t=>a.value=!a.value,["prevent"])),class:e.normalizeClass([{"text-green-500":a.value,"text-gray-500":!a.value},"w-8 h-8"]),type:"clock"},null,8,["class"]),e.createVNode(u,{onClick:e.withModifiers(ue,["prevent"]),type:"trash",class:"text-red-500"})])]),e.createElementVNode("div",I,[m.value&&Object.keys(m.value).length>0?(e.openBlock(),e.createElementBlock("table",A,[e.createElementVNode("thead",null,[e.createElementVNode("tr",null,[e.createElementVNode("th",X,e.toDisplayString("Command"),1),e.createElementVNode("th",P,e.toDisplayString("Type"),1),e.createElementVNode("th",J,e.toDisplayString("Run By"),1),e.createElementVNode("th",K,e.toDisplayString("Status"),1),e.createElementVNode("th",W,e.toDisplayString("Result"),1),e.createElementVNode("th",G,e.toDisplayString("Duration"),1),e.createElementVNode("th",Q,e.toDisplayString("Happened"),1)])]),e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,(t,l)=>(e.openBlock(),e.createElementBlock("tr",{key:l},[e.createElementVNode("td",Y,e.toDisplayString(t.run),1),e.createElementVNode("td",Z,e.toDisplayString(t.type),1),e.createElementVNode("td",v,e.toDisplayString(t.run_by),1),e.createElementVNode("td",{class:e.normalizeClass(["px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900",{"!text-green-500":t.status==="success","!text-yellow-500":t.status==="pending","!text-red-500":t.status==="error"}])},e.toDisplayString(t.status),3),e.createElementVNode("td",ee,[e.createElementVNode("pre",{innerHTML:t.result},null,8,te)]),e.createElementVNode("td",oe,e.toDisplayString(t.duration?t.duration+" sec.":""),1),e.createElementVNode("td",re,e.toDisplayString(t.time),1)]))),128))])])):(e.openBlock(),e.createElementBlock("div",ae,[e.createVNode(p,{type:"search",class:"mb-3 text-gray-300 dark:text-gray-500",width:"50",height:"50"}),e.createElementVNode("h3",ne,e.toDisplayString("No Logs."),1)]))]),g.value?(e.openBlock(),e.createElementBlock("div",le,[e.createElementVNode("div",{class:"absolute inset-0",onClick:o[3]||(o[3]=e.withModifiers(()=>g.value=!1,["prevent"]))}),e.createElementVNode("div",se,[e.createElementVNode("div",{class:"absolute top-0 right-0 w-5 cursor-pointer hover:opacity-75 text-lg",onClick:o[4]||(o[4]=e.withModifiers(()=>g.value=!1,["prevent"]))}," ✕ "),e.createElementVNode("div",ce,e.toDisplayString(r.value.label),1),e.createElementVNode("div",de,[r.value.help?(e.openBlock(),e.createElementBlock("p",ie,e.toDisplayString(r.value.help),1)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.value.variables,(t,l)=>(e.openBlock(),e.createElementBlock("div",{key:l},[e.createElementVNode("label",pe,e.toDisplayString(t.label),1),t.field==="select"?e.withDirectives((e.openBlock(),e.createElementBlock("select",{key:0,class:"appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-900 h-10 px-3 rounded-lg","onUpdate:modelValue":c=>t.value=c},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.options,c=>(e.openBlock(),e.createElementBlock("option",null,e.toDisplayString(c),1))),256))],8,ge)),[[e.vModelSelect,t.value]]):e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:1,type:t.field,class:"w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-900 h-10 px-3 rounded-lg","onUpdate:modelValue":c=>t.value=c,placeholder:t.placeholder},null,8,me)),[[e.vModelDynamic,t.value]])]))),128)),r.value.flags.length?(e.openBlock(),e.createElementBlock("div",ye,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.value.flags,(t,l)=>(e.openBlock(),e.createElementBlock("label",{key:"flag-"+l,class:"flex items-center cursor-pointer"},[e.withDirectives(e.createElementVNode("input",{type:"checkbox","onUpdate:modelValue":c=>r.value.flags[l].selected=c,"true-value":1,"false-value":0,class:"opacity-0 absolute pointer-events-none"},null,8,he),[[e.vModelCheckbox,r.value.flags[l].selected]]),e.createElementVNode("span",{class:e.normalizeClass(["h-6 w-6 block mr-2 flex-shrink-0 rounded-lg bg-white dark:bg-gray-900 text-transparent border border-gray-300 dark:border-gray-900 flex items-center justify-center text-center",{"!text-gray-900":r.value.flags[l].selected}])}," ✓ ",2),e.createElementVNode("span",null,e.toDisplayString(t.label),1)]))),128))])):e.createCommentVNode("",!0)]),e.createElementVNode("div",ke,[e.createVNode(f,{type:"gray",onClick:e.withModifiers(V,["prevent"])},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString("Cancel"),1)]),_:1}),e.createVNode(f,{loading:d.value,onClick:o[5]||(o[5]=t=>we()),type:r.value.type},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r.value.label),1)]),_:1},8,["loading","type"])])])])):e.createCommentVNode("",!0)])}}};Nova.booting(()=>{Nova.inertia("NovaCommandRunner",fe)})});
