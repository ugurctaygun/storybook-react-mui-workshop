import{j as a}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{M as $}from"./Button-3d342b58.js";import{c as g,b as f,_ as h}from"./useThemeProps-94f52e98.js";import{_ as r}from"./extends-c60d6d51.js";import{g as C,a as D,s as d,c as m,b,r as oo}from"./styled-9a968d51.js";import{u as to}from"./useTheme-f9895377.js";import{B as eo,M as so,F as ao}from"./Modal-9fb8aeaa.js";import{P as _}from"./Paper-f1635e6a.js";import{u as ro}from"./useId-add3311b.js";import{T as I}from"./Typography-fdbae6ba.js";import"./_commonjsHelpers-de833af9.js";import"./ButtonBase-4efedc8f.js";import"./emotion-react.browser.esm-efcf029b.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-03ffa606.js";import"./Portal-e2d38721.js";import"./index-8bf7f4ad.js";import"./ownerWindow-48013543.js";import"./useSlotProps-eab205dd.js";import"./extendSxProp-9de56447.js";function io(o){return D("MuiDialog",o)}const no=C("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),w=no,lo=p.createContext({}),E=lo,co=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],po=d(eo,{name:"MuiDialog",slot:"Backdrop",overrides:(o,t)=>t.backdrop})({zIndex:-1}),uo=o=>{const{classes:t,scroll:e,maxWidth:s,fullWidth:n,fullScreen:i}=o,l={root:["root"],container:["container",`scroll${g(e)}`],paper:["paper",`paperScroll${g(e)}`,`paperWidth${g(String(s))}`,n&&"paperFullWidth",i&&"paperFullScreen"]};return b(l,io,t)},mo=d(so,{name:"MuiDialog",slot:"Root",overridesResolver:(o,t)=>t.root})({"@media print":{position:"absolute !important"}}),go=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.container,t[`scroll${g(e.scroll)}`]]}})(({ownerState:o})=>r({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),xo=d(_,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.paper,t[`scrollPaper${g(e.scroll)}`],t[`paperWidth${g(String(e.maxWidth))}`],e.fullWidth&&t.paperFullWidth,e.fullScreen&&t.paperFullScreen]}})(({theme:o,ownerState:t})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[t.maxWidth]}${o.breakpoints.unit}`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${w.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),fo=p.forwardRef(function(t,e){const s=f({props:t,name:"MuiDialog"}),n=to(),i={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":c,BackdropComponent:u,BackdropProps:k,children:L,className:O,disableEscapeKeyDown:P=!1,fullScreen:Y=!1,fullWidth:K=!1,maxWidth:X="sm",onBackdropClick:R,onClose:S,open:j,PaperComponent:z=_,PaperProps:B={},scroll:H="paper",TransitionComponent:V=ao,transitionDuration:N=i,TransitionProps:q}=s,G=h(s,co),v=r({},s,{disableEscapeKeyDown:P,fullScreen:Y,fullWidth:K,maxWidth:X,scroll:H}),W=uo(v),M=p.useRef(),J=x=>{M.current=x.target===x.currentTarget},Q=x=>{M.current&&(M.current=null,R&&R(x),S&&S(x,"backdropClick"))},T=ro(c),Z=p.useMemo(()=>({titleId:T}),[T]);return a.jsx(mo,r({className:m(W.root,O),closeAfterTransition:!0,components:{Backdrop:po},componentsProps:{backdrop:r({transitionDuration:N,as:u},k)},disableEscapeKeyDown:P,onClose:S,open:j,ref:e,onClick:Q,ownerState:v},G,{children:a.jsx(V,r({appear:!0,in:j,timeout:N,role:"presentation"},q,{children:a.jsx(go,{className:m(W.container),onMouseDown:J,ownerState:v,children:a.jsx(xo,r({as:z,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":T},B,{className:m(W.paper,B.className),ownerState:v,children:a.jsx(E.Provider,{value:Z,children:L})}))})}))}))}),ho=fo;function Co(o){return D("MuiDialogActions",o)}C("MuiDialogActions",["root","spacing"]);const Do=["className","disableSpacing"],bo=o=>{const{classes:t,disableSpacing:e}=o;return b({root:["root",!e&&"spacing"]},Co,t)},vo=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,!e.disableSpacing&&t.spacing]}})(({ownerState:o})=>r({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),yo=p.forwardRef(function(t,e){const s=f({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:i=!1}=s,l=h(s,Do),c=r({},s,{disableSpacing:i}),u=bo(c);return a.jsx(vo,r({className:m(u.root,n),ownerState:c,ref:e},l))}),ko=yo;function So(o){return D("MuiDialogContent",o)}C("MuiDialogContent",["root","dividers"]);function Wo(o){return D("MuiDialogTitle",o)}const Mo=C("MuiDialogTitle",["root"]),To=Mo,$o=["className","dividers"],wo=o=>{const{classes:t,dividers:e}=o;return b({root:["root",e&&"dividers"]},So,t)},Po=d("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>r({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${To.root} + &`]:{paddingTop:0}})),Ro=p.forwardRef(function(t,e){const s=f({props:t,name:"MuiDialogContent"}),{className:n,dividers:i=!1}=s,l=h(s,$o),c=r({},s,{dividers:i}),u=wo(c);return a.jsx(Po,r({className:m(u.root,n),ownerState:c,ref:e},l))}),jo=Ro;function Bo(o){return D("MuiDialogContentText",o)}C("MuiDialogContentText",["root"]);const No=["children","className"],Ao=o=>{const{classes:t}=o,s=b({root:["root"]},Bo,t);return r({},t,s)},Fo=d(I,{shouldForwardProp:o=>oo(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,t)=>t.root})({}),Uo=p.forwardRef(function(t,e){const s=f({props:t,name:"MuiDialogContentText"}),{className:n}=s,i=h(s,No),l=Ao(i);return a.jsx(Fo,r({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:i,className:m(l.root,n)},s,{classes:l}))}),_o=Uo,Io=["className","id"],Eo=o=>{const{classes:t}=o;return b({root:["root"]},Wo,t)},Lo=d(I,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),Oo=p.forwardRef(function(t,e){const s=f({props:t,name:"MuiDialogTitle"}),{className:n,id:i}=s,l=h(s,Io),c=s,u=Eo(c),{titleId:k=i}=p.useContext(E);return a.jsx(Lo,r({component:"h2",className:m(u.root,n),ownerState:c,ref:e,variant:"h6",id:i??k},l))}),Yo=Oo;function Ko(){const[o,t]=p.useState(!1),e=()=>{t(!0)},s=()=>{t(!1)};return a.jsxs("div",{children:[a.jsx($,{variant:"outlined",onClick:e,children:"Open confirmation dialog"}),a.jsxs(ho,{open:o,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[a.jsx(Yo,{id:"alert-dialog-title",children:"Confirmation"}),a.jsx(jo,{children:a.jsx(_o,{id:"alert-dialog-description",children:"Are you sure about this action?"})}),a.jsxs(ko,{children:[a.jsx($,{color:"secondary",onClick:s,children:"Cancel"}),a.jsx($,{onClick:s,autoFocus:!0,children:"Continue"})]})]})]})}const mt={component:Ko,title:"Components/Feedback/Dialog",parameters:{layout:"centered"}},y={args:{}};var A,F,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {}
}`,...(U=(F=y.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const gt=["Confirmation"];export{y as Confirmation,gt as __namedExportsOrder,mt as default};
//# sourceMappingURL=Dialog.stories-29be1a8e.js.map
