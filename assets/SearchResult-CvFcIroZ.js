import{u as Y,g as te,h as ae,i as B,j as se,P as le,t as re,k as ue,l as F,m as q,n as ie,w as M,p as a,q as ne,R as j,v as oe,x as ce,y as ve,C as he,z as pe,A as de,B as me,D as ye,E as ge,F as fe,G as He,H as I,I as _,J as Re,K as x,L as ke}from"./app-DbdsICOv.js";const we=["/faq.html","/","/manual.html","/privacy.html","/manual/app.html","/manual/create.html","/manual/edit.html","/manual/","/manual/open.html","/manual/print.html","/manual/save.html","/manual/settings.html","/topics/choose-color.html","/topics/choose-gradient.html","/topics/curved-text.html","/topics/","/topics/remove-image-background.html","/manual/edit/attributes.html","/manual/edit/edit-image.html","/manual/edit/","/manual/edit/layers.html","/manual/edit/tools.html","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",g=Y(Qe,[]),qe=()=>{const{queryHistoryCount:s}=x,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=s=>we[s.id]+("anchor"in s?`#${s.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,f=Y(xe,[]),Se=()=>{const s=U>0;return{enabled:s,resultHistory:f,addResultHistory:l=>{if(s){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ce=s=>{const l=he(),r=B(),S=pe(),i=F(0),k=q(()=>i.value>0),d=de([]);return me(()=>{const{search:m,terminate:C}=ye(),H=Re(c=>{const R=c.join(" "),{searchFilter:L=p=>p,splitWord:b,suggestionsFilter:O,...y}=l.value;R?(i.value+=1,m(c.join(" "),r.value,y).then(p=>L(p,R,r.value,S.value)).then(p=>{i.value-=1,d.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(d.value=[])})):d.value=[]},x.searchDelay-x.suggestDelay);M([s,r],([c])=>H(c),{immediate:!0}),ge(()=>{C()})}),{isSearching:k,results:d}};var be=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),S=B(),i=se(le),{enabled:k,addQueryHistory:d,queryHistory:m,removeQueryHistory:C}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:L}=Se(),b=k||H,O=re(s,"queries"),{results:y,isSearching:p}=Ce(O),u=ue({isQuery:!0,index:0}),v=F(0),h=F(0),T=q(()=>b&&(m.value.length>0||c.value.length>0)),D=q(()=>y.value.length>0),A=q(()=>y.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:m.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?m.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:y.value.length-1,h.value=A.value.contents.length-1},K=()=>{v.value=v.value<y.value.length-1?v.value+1:0,h.value=0},V=()=>{h.value<A.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},E=e=>e.map(t=>ke(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[n,Q=""]=He(t)?t[S.value].split("$content"):t.split("$content");return e.display.map(o=>a("div",E([n,...o,Q])))}return e.display.map(t=>a("div",E(t)))},w=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),m.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),C(t)}})]))])):null,Z=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>a(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{w()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>E(n)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),L(t)}})]))])):null;return ie("keydown",e=>{if(s.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=A.value.contents[h.value];d(s.queries.join(" ")),R(t),r.push(P(t)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",m.value[t]),e.preventDefault()):(r.push(c.value[t].link),w())}}}}),M([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!D.value:!T.value}],id:"search-pro-results"},s.queries.length?p.value?a(ne,{hint:i.value.searching}):D.value?a("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},n)=>{const Q=v.value===n;return a("li",{class:["search-pro-result-list-item",{active:Q}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((o,ee)=>{const $=Q&&h.value===ee;return a(j,{to:P(o),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{d(s.queries.join(" ")),R(o),w()}},()=>[o.type==="text"?null:a(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?a("div",{class:"content-header"},o.header):null,a("div",W(o))])])})])})):i.value.emptyResult:b?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{be as default};
