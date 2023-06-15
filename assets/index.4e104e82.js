import{g as q,d as G}from"./booking.65c4ecd6.js";import{u as H,E as J,D as K,P as Q,M as W}from"./userPagination.8b349a3f.js";import{_ as X,a as Y}from"./EditRole.vue_vue_type_script_setup_true_lang.befa76a1.js";import{d as Z,E as ee,r,l as te,F as ne,G as oe,H as le,o as c,I as x,w as o,i as A,N as h,J as se,s as t,z as l,k as s,j as N,K as ae,L as ie,M as ue,O,Q as re,A as de,C as pe,S as _e,T as ce,U as me,V as w,W as ge}from"./index.b77916f9.js";import"./role.3304a090.js";import"./permission.cabd79a1.js";const fe=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Booking Status"),s("th",null,"Created At"),s("th",null,"Actions")])],-1),ve=s("div",null,"Create New Role",-1),ke=s("div",null,"Update Role",-1),Ne=Z({__name:"index",setup(he){const m=ee(),d=r(null),g=r(!1),p=r(!1),i=r(),y=te(),U=ne(),{getList:u,list:$,page:f,pageSizes:B,itemCount:D,pageSize:v,params:k}=H(q),C=a=>()=>A(h,null,{default:()=>A(a)}),M=r([{label:"Edit",key:"edit",icon:C(J)},{label:"Delete",key:"delete",icon:C(K)}]);function P(){m.error({title:"Confirmation",content:()=>"Are you sure you want to delete?",positiveText:"Delete",negativeText:"Cancel",onPositiveClick:S})}function S(){const a=window.$loading||null;a.start(),G(i.value).then(e=>{y.success(e.message),u(),a.finish(),m.destroyAll}).catch(e=>{y.error(e.message),a.finish(),m.destroyAll}),i.value=null,d.value=null}const E=a=>{d.value==="edit"?(p.value=!0,i.value=a.id):d.value==="delete"&&(i.value=a.id,P())},L=a=>{d.value=a},I=()=>{u(k.value)};return oe(()=>{u()}),(a,e)=>{const V=de,z=pe,R=ge,T=_e,_=ce,j=le("router-link"),b=me,F=se;return c(),x(F,null,{default:o(()=>[t(_,{vertical:!0},{default:o(()=>[t(V,{type:"text",size:"small",value:l(k).name,"onUpdate:value":e[0]||(e[0]=n=>l(k).name=n),onChange:I,placeholder:"Search by Name"},null,8,["value"]),t(T,{striped:!0},{default:o(()=>[fe,s("tbody",null,[(c(!0),N(ie,null,ae(l($),n=>(c(),N("tr",{key:n.id},[s("td",null,w(n.customer_name),1),s("td",null,w(n.booking_status),1),s("td",null,w(n.created_at),1),s("td",null,[t(R,{onClick:we=>E(n),onSelect:L,trigger:"click",options:M.value},{default:o(()=>[t(z,{size:"small",circle:!0},{default:o(()=>[t(l(h),null,{default:o(()=>[t(l(W))]),_:1})]),_:1})]),_:2},1032,["onClick","options"])])]))),128))])]),_:1}),t(_,{style:{"align-items":"center","padding-top":"15px"}},{default:o(()=>[t(l(ue),{page:l(f),"onUpdate:page":e[1]||(e[1]=n=>O(f)?f.value=n:null),"page-size":l(v),"onUpdate:page-size":e[2]||(e[2]=n=>O(v)?v.value=n:null),"item-count":l(D),"page-sizes":l(B),size:"small","show-quick-jumper":!0,"show-size-picker":!0},null,8,["page","page-size","item-count","page-sizes"])]),_:1}),t(j,{to:"/booking/add-booking"},{default:o(()=>[l(U).hasPermission(["can view add booking"])?(c(),x(z,{key:0,type:"primary",size:"large",circle:!0,style:{position:"fixed",bottom:"30px",right:"40px"}},{icon:o(()=>[t(l(h),null,{default:o(()=>[t(l(Q))]),_:1})]),_:1})):re("",!0)]),_:1}),t(b,{show:g.value,"onUpdate:show":e[4]||(e[4]=n=>g.value=n),preset:"dialog"},{header:o(()=>[ve]),default:o(()=>[t(_,{vertical:!0},{default:o(()=>[t(X,{onCreated:e[3]||(e[3]=n=>{l(u)(),g.value=!1})})]),_:1})]),_:1},8,["show"]),t(b,{style:{width:"70%"},show:p.value,"onUpdate:show":e[6]||(e[6]=n=>p.value=n),preset:"dialog"},{header:o(()=>[ke]),default:o(()=>[t(_,{vertical:!0},{default:o(()=>[t(Y,{id:i.value,onUpdated:e[5]||(e[5]=n=>{l(u)(),p.value=!1})},null,8,["id"])]),_:1})]),_:1},8,["show"])]),_:1})]),_:1})}}});export{Ne as default};
