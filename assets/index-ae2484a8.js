import{j as e}from"./jsx-runtime-f6d73c06.js";/* empty css               */import{d as w}from"./Add-047f9ae7.js";import{r as _,i as S}from"./createSvgIcon-2399051f.js";import{C as f,a as m}from"./CardContent-e906e295.js";import{I as B}from"./IconButton-17fb74f0.js";import{c as v}from"./createSvgIcon-6a267752.js";import{_ as R}from"./extends-c60d6d51.js";import{b as V,_ as I}from"./useThemeProps-94f52e98.js";import{r as N}from"./index-8ee6c85d.js";import{g as H,a as M,s as j,c as h,b as L}from"./styled-9a968d51.js";import{B as T}from"./ButtonBase-4efedc8f.js";import{T as i}from"./Typography-fdbae6ba.js";import{B as g}from"./Box-fe6fd115.js";import{M as x}from"./Button-3d342b58.js";function q(t){return M("MuiCardActionArea",t)}const z=H("MuiCardActionArea",["root","focusVisible","focusHighlight"]),p=z,W=["children","className","focusVisibleClassName"],F=t=>{const{classes:r}=t;return L({root:["root"],focusHighlight:["focusHighlight"]},q,r)},$=j(T,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(t,r)=>r.root})(({theme:t})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}})),k=j("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(t,r)=>r.focusHighlight})(({theme:t})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})})),U=N.forwardRef(function(r,a){const o=V({props:r,name:"MuiCardActionArea"}),{children:s,className:n,focusVisibleClassName:l}=o,b=I(o,W),c=o,d=F(c);return e.jsxs($,R({className:h(d.root,n),focusVisibleClassName:h(l,d.focusVisible),ref:a,ownerState:c},b,{children:[s,e.jsx(k,{className:d.focusHighlight,ownerState:c})]}))}),D=U,y=v(e.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),E=v(e.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");var u={},P=S;Object.defineProperty(u,"__esModule",{value:!0});var A=u.default=void 0,O=P(_()),G=e,J=(0,O.default)((0,G.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");A=u.default=J;const C=({title:t="App Title",actions:r=!0,icon:a=e.jsx(y,{color:"primary",fontSize:"large"}),horizontal:o=!0,primaryButtonColor:s="",primaryButtonText:n="View List",secondaryButtonText:l="Create New"})=>e.jsx(e.Fragment,{children:r?e.jsx("div",{children:e.jsx(f,{style:{position:"relative",padding:"0 15px",maxWidth:o?480:320,textAlign:"center",minWidth:o?380:280},children:e.jsxs(m,{style:{display:"flex",flexDirection:o?"row":"column",justifyContent:"space-between",alignItems:"center",gap:15},children:[o?e.jsxs(g,{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:15,maxWidth:110},children:[e.jsx(i,{style:{fontWeight:"bold",fontSize:"16px",marginRight:5,wordBreak:"break-word"},children:t}),a]}):e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{fontWeight:"bold",fontSize:"16px",marginRight:5},children:t}),a]}),e.jsxs(g,{children:[e.jsx(x,{variant:s===""?"outlined":"contained",style:{minWidth:160,alignContent:"center",display:"flex",justifyContent:"space-between",paddingLeft:15,marginBottom:15,background:s,width:"100%"},endIcon:e.jsx(A,{style:{fontSize:16}}),children:e.jsx(i,{variant:"h6",children:n})}),e.jsx(x,{style:{minWidth:160,alignContent:"center",display:"flex",justifyContent:"space-between",paddingLeft:15},endIcon:e.jsx(w,{}),children:e.jsx(i,{variant:"h6",children:l})})]})]})})}):e.jsx("div",{children:e.jsxs(f,{className:"appCardContainer",children:[e.jsx(B,{style:{position:"absolute",right:0},children:e.jsx(E,{})}),e.jsx(D,{disableRipple:!0,children:e.jsxs(m,{className:"appCardContent",children:[e.jsx(y,{color:"primary"}),e.jsx(i,{style:{fontWeight:"bold",fontSize:"13px"},children:t})]})})]})})});try{C.displayName="AppCard",C.__docgenInfo={description:"",displayName:"AppCard",props:{title:{defaultValue:{value:"App Title"},description:"Title of the app",name:"title",required:!1,type:{name:"string"}},actions:{defaultValue:{value:"true"},description:"Action buttons if the app card is being used to navigate certain parts of the app",name:"actions",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:{value:"true"},description:`Switch between horizontal and vertical card styles.
Horizontal style can be used for when the button text is too long for vertical`,name:"horizontal",required:!1,type:{name:"boolean"}},primaryButtonColor:{defaultValue:{value:""},description:"Custom color for the primary button",name:"primaryButtonColor",required:!1,type:{name:"string"}},primaryButtonText:{defaultValue:{value:"View List"},description:"Primary button text",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:{value:"Create New"},description:"Secondary button text",name:"secondaryButtonText",required:!1,type:{name:"string"}}}}}catch{}export{C as A};
//# sourceMappingURL=index-ae2484a8.js.map