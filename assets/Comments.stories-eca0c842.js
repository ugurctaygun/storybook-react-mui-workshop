import{u as v,_ as y,j as o}from"./useThemeProps-885cf5c5.js";import{r as D,i as W}from"./createSvgIcon-d39fdfd0.js";import{G as E,C as L}from"./index-44740e24.js";import{B as S}from"./Box-b5241adb.js";import{_ as a}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{r as g}from"./index-76fb7be0.js";import{a as b,g as j,s as p,c as R,b as H}from"./styled-39ccb8f1.js";import{P as q}from"./Paper-c1c8bff2.js";import{T as h}from"./Typography-a2ca9b1c.js";import{T as k}from"./TextField-add7f6b2.js";import{I as z}from"./InputAdornment-41c3c4d3.js";import{B as G}from"./Button-c4a1b397.js";import"./_commonjsHelpers-de833af9.js";import"./TransitionGroupContext-78298a73.js";import"./useSlotProps-cbdf4664.js";import"./ButtonBase-e40800dc.js";import"./emotion-react.browser.esm-d2ba18d3.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./index-21f33e68.js";import"./Chip-3ce59ec7.js";import"./MenuList-aa49a758.js";import"./index-d3ea75b5.js";import"./GlobalStyles-cce64836.js";function O(t){return b("MuiCard",t)}j("MuiCard",["root"]);const F=["className","raised"],J=t=>{const{classes:e}=t;return H({root:["root"]},O,e)},K=p(q,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),Q=g.forwardRef(function(e,n){const r=v({props:e,name:"MuiCard"}),{className:l,raised:s=!1}=r,m=y(r,F),i=a({},r,{raised:s}),d=J(i);return o.jsx(K,a({className:R(d.root,l),elevation:s?8:void 0,ref:n,ownerState:i},m))}),V=Q;function X(t){return b("MuiCardContent",t)}j("MuiCardContent",["root"]);const Y=["className","component"],Z=t=>{const{classes:e}=t;return H({root:["root"]},X,e)},ee=p("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),te=g.forwardRef(function(e,n){const r=v({props:e,name:"MuiCardContent"}),{className:l,component:s="div"}=r,m=y(r,Y),i=a({},r,{component:s}),d=Z(i);return o.jsx(ee,a({as:s,className:R(d.root,l),ownerState:i,ref:n},m))}),oe=te;function re(t){return b("MuiCardHeader",t)}const se=j("MuiCardHeader",["root","avatar","action","content","title","subheader"]),_=se,ae=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],ne=t=>{const{classes:e}=t;return H({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},re,e)},ie=p("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(t,e)=>a({[`& .${_.title}`]:e.title,[`& .${_.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),de=p("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(t,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),le=p("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(t,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),ce=p("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(t,e)=>e.content})({flex:"1 1 auto"}),pe=g.forwardRef(function(e,n){const r=v({props:e,name:"MuiCardHeader"}),{action:l,avatar:s,className:m,component:i="div",disableTypography:d=!1,subheader:$,subheaderTypographyProps:I,title:U,titleTypographyProps:A}=r,B=y(r,ae),u=a({},r,{component:i,disableTypography:d}),c=ne(u);let C=U;C!=null&&C.type!==h&&!d&&(C=o.jsx(h,a({variant:s?"body2":"h5",className:c.title,component:"span",display:"block"},A,{children:C})));let f=$;return f!=null&&f.type!==h&&!d&&(f=o.jsx(h,a({variant:s?"body2":"body1",className:c.subheader,color:"text.secondary",component:"span",display:"block"},I,{children:f}))),o.jsxs(ie,a({className:R(c.root,m),as:i,ref:n,ownerState:u},B,{children:[s&&o.jsx(de,{className:c.avatar,ownerState:u,children:s}),o.jsxs(ce,{className:c.content,ownerState:u,children:[C,f]}),l&&o.jsx(le,{className:c.action,ownerState:u,children:l})]}))}),me=pe;var M={},ue=W;Object.defineProperty(M,"__esModule",{value:!0});var P=M.default=void 0,Ce=ue(D()),fe=o,he=(0,Ce.default)((0,fe.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");P=M.default=he;const xe=()=>o.jsx(E,{xs:12,style:{minWidth:500},children:o.jsx(S,{mb:2,children:o.jsxs(V,{children:[o.jsx(me,{title:"Comments"}),o.jsxs(oe,{children:[o.jsxs(S,{mb:2,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsx(k,{disabled:!1,onChange:t=>console.log(t),inputProps:{maxLength:250},InputProps:{endAdornment:o.jsx(z,{position:"end",children:o.jsx(h,{style:{position:"absolute",bottom:"5px",right:0,minWidth:"75px",fontSize:"12px"},children:"10 / 250"})})},fullWidth:!0,multiline:!0,rows:2,variant:"outlined",value:"Test"}),o.jsx(G,{style:{marginTop:"15px",minWidth:"150px",marginLeft:"auto"},color:"primary",endIcon:o.jsx(P,{}),children:"Add Comment"})]}),o.jsx(L,{})]})]})})}),ke={component:xe,title:"Design System/Layout/Comments",parameters:{layout:"centered"},tags:["autodocs"]},x={args:{}};var w,N,T;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(T=(N=x.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const ze=["Default"];export{x as Default,ze as __namedExportsOrder,ke as default};
//# sourceMappingURL=Comments.stories-eca0c842.js.map
