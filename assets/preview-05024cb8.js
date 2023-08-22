import{j as a,x as B,k as O,y as D,_ as L,T as M,u as N,z as y,A as b,B as S,C as F,b as E}from"./useThemeProps-885cf5c5.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{r as p,R}from"./index-76fb7be0.js";import{B as V}from"./index-3fdbe169.js";import{G}from"./GlobalStyles-cce64836.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-react.browser.esm-d2ba18d3.js";const H={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},z=H,q=p.createContext(null),P=q;function $(){return p.useContext(P)}const I=typeof Symbol=="function"&&Symbol.for,Y=I?Symbol.for("mui.nested"):"__THEME_NESTED__";function Z(e,t){return typeof t=="function"?t(e):l({},e,t)}function J(e){const{children:t,theme:o}=e,r=$(),n=p.useMemo(()=>{const i=r===null?o:Z(r,o);return i!=null&&(i[Y]=r!==null),i},[o,r]);return a.jsx(P.Provider,{value:n,children:t})}const j={};function C(e,t,o,r=!1){return p.useMemo(()=>{const n=e&&t[e]||t;if(typeof o=="function"){const i=o(n),s=e?l({},t,{[e]:i}):i;return r?()=>s:s}return e?l({},t,{[e]:o}):l({},t,o)},[e,t,o,r])}function K(e){const{children:t,theme:o,themeId:r}=e,n=B(j),i=$()||j,s=C(r,n,o),c=C(r,i,o,!0);return a.jsx(J,{theme:c,children:a.jsx(O.Provider,{value:s,children:t})})}function A(e){return String(parseFloat(e)).length===String(e).length}function Q(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(e){return parseFloat(e)}function U(e){return(t,o)=>{const r=Q(t);if(r===o)return t;let n=d(t);r!=="px"&&(r==="em"||r==="rem")&&(n=d(t)*d(e));let i=n;if(o!=="px")if(o==="em")i=n/d(e);else if(o==="rem")i=n/d(e);else return t;return parseFloat(i.toFixed(5))+o}}function X({size:e,grid:t}){const o=e-e%t,r=o+t;return e-o<r-e?o:r}function ee({lineHeight:e,pixels:t,htmlFontSize:o}){return t/(e*o)}function te({cssProperty:e,min:t,max:o,unit:r="rem",breakpoints:n=[600,900,1200],transform:i=null}){const s={[e]:`${t}${r}`},c=(o-t)/n[n.length-1];return n.forEach(u=>{let m=t+c*u;i!==null&&(m=i(m)),s[`@media (min-width:${u}px)`]={[e]:`${Math.round(m*1e4)/1e4}${r}`}}),s}function oe(e,t={}){const{breakpoints:o=["sm","md","lg"],disableAlign:r=!1,factor:n=2,variants:i=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,s=l({},e);s.typography=l({},s.typography);const c=s.typography,u=U(c.htmlFontSize),m=o.map(h=>s.breakpoints.values[h]);return i.forEach(h=>{const g=c[h],x=parseFloat(u(g.fontSize,"rem"));if(x<=1)return;const k=x,w=1+(k-1)/n;let{lineHeight:f}=g;if(!A(f)&&!r)throw new Error(D(6));A(f)||(f=parseFloat(u(f,"rem"))/parseFloat(x));let _=null;r||(_=W=>X({size:W,grid:ee({pixels:4,lineHeight:f,htmlFontSize:c.htmlFontSize})})),c[h]=l({},g,te({cssProperty:"fontSize",min:w,max:k,unit:"rem",breakpoints:m,transform:_}))}),s}const re=["theme"];function ne(e){let{theme:t}=e,o=L(e,re);const r=t[M];return a.jsx(K,l({},o,{themeId:r?M:void 0,theme:r||t}))}const ie=(e,t)=>l({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),se=e=>l({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),ae=(e,t=!1)=>{var o;const r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([s,c])=>{var u;r[e.getColorSchemeSelector(s).replace(/\s*&/,"")]={colorScheme:(u=c.palette)==null?void 0:u.mode}});let n=l({html:ie(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:l({margin:0},se(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(n=[n,i]),n};function le(e){const t=N({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:r=!1}=t;return a.jsxs(p.Fragment,{children:[a.jsx(G,{styles:n=>ae(n,r)}),o]})}const ce={h1:{fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px"},h6:{fontWeight:600,fontSize:"14px",letterSpacing:"-0.05px"},subtitle1:{fontSize:"16px",letterSpacing:"-0.05px"},subtitle2:{fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px"},button:{fontSize:"14px"}},ue={mode:"light",primary:{contrastText:"#FFFFFF",dark:z[900],main:"#0091EA",light:z[100],gradient:"linear-gradient(31deg, #00a6b5 -13%, #0088bd 43%, #0076c2 87%)"},secondary:{contrastText:"#FFFFFF",dark:y[900],main:y[500],light:y.A400},success:{contrastText:"#FFFFFF",dark:b[900],main:b[600],light:b[400]},error:{contrastText:"#FFFFFF",dark:S[900],main:S[600],light:S[400]},warning:{contrastText:"#FFFFFF",dark:F[900],main:F[600],light:F[400]},text:{},background:{dark:"#303030",light:"#FAFAFA"},common:{},action:{}},T=({darkMode:e})=>oe(E({typography:ce,palette:ue,components:{MuiButton:{defaultProps:{variant:"contained"}},MuiTextField:{defaultProps:{variant:"outlined"}}}}));try{T.displayName="createTheme",T.__docgenInfo={description:"",displayName:"createTheme",props:{darkMode:{defaultValue:null,description:"",name:"darkMode",required:!0,type:{name:"boolean"}}}}}catch{}function v({children:e,createTheme:t,selectedTheme:o}){console.log(window.location.href);const r=p.useMemo(()=>{const n=t({darkMode:o==="dark"}),i=n.palette.background.default;return E(n,{components:{MuiOutlinedInput:{styleOverrides:{input:{"&:-webkit-autofill":{WebkitBoxShadow:`0 0 0 100px ${i} inset`,WebkitTextFillColor:n.palette.getContrastText(i)}}}},MuiButton:{defaultProps:{size:"small",variant:"contained"}},MuiSelect:{defaultProps:{size:"small"}},MuiTabs:{defaultProps:{indicatorColor:"secondary",textColor:"secondary"}},MuiSvgIcon:{defaultProps:{fontSize:"small"}}}})},[t,o]);return a.jsxs(ne,{theme:r,children:[a.jsx(le,{}),a.jsx(V,{children:e})]})}try{v.displayName="AppDecorator",v.__docgenInfo={description:"",displayName:"AppDecorator",props:{createTheme:{defaultValue:null,description:"",name:"createTheme",required:!0,type:{name:"({ darkMode }: { darkMode: boolean; }) => Theme"}},selectedTheme:{defaultValue:null,description:"",name:"selectedTheme",required:!0,type:{name:"any"}}}}}catch{}const ye=[(e,t)=>a.jsx(v,{createTheme:T,selectedTheme:t.globals.theme,children:a.jsx(R.StrictMode,{children:a.jsx("div",{style:{margin:"50px 0"},children:a.jsx(e,{})})})})],be={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen"},Se={theme:{name:"Theme",description:"Global theme for components",defaultValue:"light",title:"Theme",toolbar:{icon:"circlehollow",items:[{value:"light",icon:"circlehollow",title:"Light Theme"},{value:"dark",icon:"circle",title:"Dark Theme"}],showName:!0,dynamicTitle:!0}}};export{ye as decorators,Se as globalTypes,be as parameters};
//# sourceMappingURL=preview-05024cb8.js.map
