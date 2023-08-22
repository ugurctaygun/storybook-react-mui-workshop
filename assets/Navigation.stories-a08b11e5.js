import{c as Ot,u as mt,_ as rt,j as c}from"./useThemeProps-885cf5c5.js";import{B as ue,d as pe}from"./HomeOutlined-5e15cb81.js";import{T as dt}from"./Typography-a2ca9b1c.js";import{u as be,L as fe}from"./index-3fdbe169.js";import{u as Xt,P as he}from"./Paper-c1c8bff2.js";import{_ as b}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{r as d}from"./index-76fb7be0.js";import{a as Ut,d as Vt,u as ot,o as me}from"./useSlotProps-cbdf4664.js";import{g as St,a as vt,s as j,c as P,b as gt}from"./styled-39ccb8f1.js";import{c as Yt,b as Se,a as ut}from"./TransitionGroupContext-78298a73.js";import{B as Kt}from"./ButtonBase-e40800dc.js";import"./createSvgIcon-d39fdfd0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-react.browser.esm-d2ba18d3.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";let O;function qt(){if(O)return O;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),O="reverse",t.scrollLeft>0?O="default":(t.scrollLeft=1,t.scrollLeft===0&&(O="negative")),document.body.removeChild(t),O}function ve(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(qt()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function ge(t){return vt("MuiTab",t)}const xe=St("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),L=xe,ye=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Be=t=>{const{classes:e,textColor:r,fullWidth:n,wrapped:s,icon:u,label:h,selected:f,disabled:p}=t,S={root:["root",u&&h&&"labelIcon",`textColor${Ot(r)}`,n&&"fullWidth",s&&"wrapped",f&&"selected",p&&"disabled"],iconWrapper:["iconWrapper"]};return gt(S,ge,e)},Ce=j(Kt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Ot(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${L.iconWrapper}`]:b({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${L.selected}`]:{opacity:1},[`&.${L.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${L.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${L.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${L.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${L.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),we=d.forwardRef(function(e,r){const n=mt({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:h=!1,fullWidth:f,icon:p,iconPosition:S="top",indicator:C,label:w,onChange:x,onClick:v,onFocus:$,selected:T,selectionFollowsFocus:g,textColor:k="inherit",value:y,wrapped:lt=!1}=n,F=rt(n,ye),X=b({},n,{disabled:u,disableFocusRipple:h,selected:T,icon:!!p,iconPosition:S,label:!!w,fullWidth:f,textColor:k,wrapped:lt}),A=Be(X),W=p&&w&&d.isValidElement(p)?d.cloneElement(p,{className:P(A.iconWrapper,p.props.className)}):p,K=E=>{!T&&x&&x(E,y),v&&v(E)},H=E=>{g&&!T&&x&&x(E,y),$&&$(E)};return c.jsxs(Ce,b({focusRipple:!h,className:P(A.root,s),ref:r,role:"tab","aria-selected":T,disabled:u,onClick:K,onFocus:H,ownerState:X,tabIndex:T?0:-1},F,{children:[S==="top"||S==="start"?c.jsxs(d.Fragment,{children:[W,w]}):c.jsxs(d.Fragment,{children:[w,W]}),C]}))}),Te=we,Ie=Yt(c.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Ee=Yt(c.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Ne(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Me(t,e,r,n={},s=()=>{}){const{ease:u=Ne,duration:h=300}=n;let f=null;const p=e[t];let S=!1;const C=()=>{S=!0},w=x=>{if(S){s(new Error("Animation cancelled"));return}f===null&&(f=x);const v=Math.min(1,(x-f)/h);if(e[t]=u(v)*(r-p)+p,v>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(w)};return p===r?(s(new Error("Element already at target position")),C):(requestAnimationFrame(w),C)}const Re=["onChange"],Pe={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function We(t){const{onChange:e}=t,r=rt(t,Re),n=d.useRef(),s=d.useRef(null),u=()=>{n.current=s.current.offsetHeight-s.current.clientHeight};return Se(()=>{const h=Vt(()=>{const p=n.current;u(),p!==n.current&&e(n.current)}),f=Ut(s.current);return f.addEventListener("resize",h),()=>{h.clear(),f.removeEventListener("resize",h)}},[e]),d.useEffect(()=>{u(),e(n.current)},[e]),c.jsx("div",b({style:Pe,ref:s},r))}function _e(t){return vt("MuiTabScrollButton",t)}const ze=St("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Le=ze,je=["className","slots","slotProps","direction","orientation","disabled"],$e=t=>{const{classes:e,orientation:r,disabled:n}=t;return gt({root:["root",r,n&&"disabled"]},_e,e)},ke=j(Kt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${Le.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),Fe=d.forwardRef(function(e,r){var n,s;const u=mt({props:e,name:"MuiTabScrollButton"}),{className:h,slots:f={},slotProps:p={},direction:S}=u,C=rt(u,je),x=Xt().direction==="rtl",v=b({isRtl:x},u),$=$e(v),T=(n=f.StartScrollButtonIcon)!=null?n:Ie,g=(s=f.EndScrollButtonIcon)!=null?s:Ee,k=ot({elementType:T,externalSlotProps:p.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),y=ot({elementType:g,externalSlotProps:p.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return c.jsx(ke,b({component:"div",className:P($.root,h),ref:r,role:null,ownerState:v,tabIndex:null},C,{children:S==="left"?c.jsx(T,b({},k)):c.jsx(g,b({},y))}))}),Ae=Fe;function He(t){return vt("MuiTabs",t)}const De=St("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),pt=De,Oe=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],zt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Lt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,Z=(t,e,r)=>{let n=!1,s=r(t,e);for(;s;){if(s===t.firstChild){if(n)return;n=!0}const u=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||u)s=r(t,s);else{s.focus();return}}},Xe=t=>{const{vertical:e,fixed:r,hideScrollbar:n,scrollableX:s,scrollableY:u,centered:h,scrollButtonsHideMobile:f,classes:p}=t;return gt({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",n&&"hideScrollbar",s&&"scrollableX",u&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[n&&"hideScrollbar"]},He,p)},Ue=j("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${pt.scrollButtons}`]:e.scrollButtons},{[`& .${pt.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${pt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Ve=j("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ye=j("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Ke=j("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),qe=j(We,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),jt={},Ge=d.forwardRef(function(e,r){const n=mt({props:e,name:"MuiTabs"}),s=Xt(),u=s.direction==="rtl",{"aria-label":h,"aria-labelledby":f,action:p,centered:S=!1,children:C,className:w,component:x="div",allowScrollButtonsMobile:v=!1,indicatorColor:$="primary",onChange:T,orientation:g="horizontal",ScrollButtonComponent:k=Ae,scrollButtons:y="auto",selectionFollowsFocus:lt,slots:F={},slotProps:X={},TabIndicatorProps:A={},TabScrollButtonProps:W={},textColor:K="primary",value:H,variant:E="standard",visibleScrollbar:nt=!1}=n,Gt=rt(n,Oe),I=E==="scrollable",B=g==="vertical",U=B?"scrollTop":"scrollLeft",q=B?"top":"left",G=B?"bottom":"right",st=B?"clientHeight":"clientWidth",V=B?"height":"width",_=b({},n,{component:x,allowScrollButtonsMobile:v,indicatorColor:$,orientation:g,vertical:B,scrollButtons:y,textColor:K,variant:E,visibleScrollbar:nt,fixed:!I,hideScrollbar:I&&!nt,scrollableX:I&&!B,scrollableY:I&&B,centered:S&&!I,scrollButtonsHideMobile:!v}),M=Xe(_),Jt=ot({elementType:F.StartScrollButtonIcon,externalSlotProps:X.startScrollButtonIcon,ownerState:_}),Qt=ot({elementType:F.EndScrollButtonIcon,externalSlotProps:X.endScrollButtonIcon,ownerState:_}),[xt,Zt]=d.useState(!1),[z,yt]=d.useState(jt),[Bt,te]=d.useState(!1),[Ct,ee]=d.useState(!1),[wt,oe]=d.useState(!1),[Tt,re]=d.useState({overflow:"hidden",scrollbarWidth:0}),It=new Map,N=d.useRef(null),D=d.useRef(null),Et=()=>{const o=N.current;let l;if(o){const i=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:ve(o,s.direction),scrollWidth:o.scrollWidth,top:i.top,bottom:i.bottom,left:i.left,right:i.right}}let a;if(o&&H!==!1){const i=D.current.children;if(i.length>0){const m=i[It.get(H)];a=m?m.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:a}},Y=ut(()=>{const{tabsMeta:o,tabMeta:l}=Et();let a=0,i;if(B)i="top",l&&o&&(a=l.top-o.top+o.scrollTop);else if(i=u?"right":"left",l&&o){const R=u?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;a=(u?-1:1)*(l[i]-o[i]+R)}const m={[i]:a,[V]:l?l[V]:0};if(isNaN(z[i])||isNaN(z[V]))yt(m);else{const R=Math.abs(z[i]-m[i]),Q=Math.abs(z[V]-m[V]);(R>=1||Q>=1)&&yt(m)}}),at=(o,{animation:l=!0}={})=>{l?Me(U,N.current,o,{duration:s.transitions.duration.standard}):N.current[U]=o},Nt=o=>{let l=N.current[U];B?l+=o:(l+=o*(u?-1:1),l*=u&&qt()==="reverse"?-1:1),at(l)},Mt=()=>{const o=N.current[st];let l=0;const a=Array.from(D.current.children);for(let i=0;i<a.length;i+=1){const m=a[i];if(l+m[st]>o){i===0&&(l=o);break}l+=m[st]}return l},le=()=>{Nt(-1*Mt())},ne=()=>{Nt(Mt())},se=d.useCallback(o=>{re({overflow:null,scrollbarWidth:o})},[]),ae=()=>{const o={};o.scrollbarSizeListener=I?c.jsx(qe,{onChange:se,className:P(M.scrollableX,M.hideScrollbar)}):null;const a=I&&(y==="auto"&&(Bt||Ct)||y===!0);return o.scrollButtonStart=a?c.jsx(k,b({slots:{StartScrollButtonIcon:F.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Jt},orientation:g,direction:u?"right":"left",onClick:le,disabled:!Bt},W,{className:P(M.scrollButtons,W.className)})):null,o.scrollButtonEnd=a?c.jsx(k,b({slots:{EndScrollButtonIcon:F.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Qt},orientation:g,direction:u?"left":"right",onClick:ne,disabled:!Ct},W,{className:P(M.scrollButtons,W.className)})):null,o},Rt=ut(o=>{const{tabsMeta:l,tabMeta:a}=Et();if(!(!a||!l)){if(a[q]<l[q]){const i=l[U]+(a[q]-l[q]);at(i,{animation:o})}else if(a[G]>l[G]){const i=l[U]+(a[G]-l[G]);at(i,{animation:o})}}}),Pt=ut(()=>{I&&y!==!1&&oe(!wt)});d.useEffect(()=>{const o=Vt(()=>{N.current&&Y()}),l=Ut(N.current);l.addEventListener("resize",o);let a;return typeof ResizeObserver<"u"&&(a=new ResizeObserver(o),Array.from(D.current.children).forEach(i=>{a.observe(i)})),()=>{o.clear(),l.removeEventListener("resize",o),a&&a.disconnect()}},[Y]),d.useEffect(()=>{const o=Array.from(D.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&I&&y!==!1){const a=o[0],i=o[l-1],m={root:N.current,threshold:.99},R=ct=>{te(!ct[0].isIntersecting)},Q=new IntersectionObserver(R,m);Q.observe(a);const de=ct=>{ee(!ct[0].isIntersecting)},_t=new IntersectionObserver(de,m);return _t.observe(i),()=>{Q.disconnect(),_t.disconnect()}}},[I,y,wt,C==null?void 0:C.length]),d.useEffect(()=>{Zt(!0)},[]),d.useEffect(()=>{Y()}),d.useEffect(()=>{Rt(jt!==z)},[Rt,z]),d.useImperativeHandle(p,()=>({updateIndicator:Y,updateScrollButtons:Pt}),[Y,Pt]);const Wt=c.jsx(Ke,b({},A,{className:P(M.indicator,A.className),ownerState:_,style:b({},z,A.style)}));let J=0;const ie=d.Children.map(C,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?J:o.props.value;It.set(l,J);const a=l===H;return J+=1,d.cloneElement(o,b({fullWidth:E==="fullWidth",indicator:a&&!xt&&Wt,selected:a,selectionFollowsFocus:lt,onChange:T,textColor:K,value:l},J===1&&H===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),ce=o=>{const l=D.current,a=me(l).activeElement;if(a.getAttribute("role")!=="tab")return;let m=g==="horizontal"?"ArrowLeft":"ArrowUp",R=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&u&&(m="ArrowRight",R="ArrowLeft"),o.key){case m:o.preventDefault(),Z(l,a,Lt);break;case R:o.preventDefault(),Z(l,a,zt);break;case"Home":o.preventDefault(),Z(l,null,zt);break;case"End":o.preventDefault(),Z(l,null,Lt);break}},it=ae();return c.jsxs(Ue,b({className:P(M.root,w),ownerState:_,ref:r,as:x},Gt,{children:[it.scrollButtonStart,it.scrollbarSizeListener,c.jsxs(Ve,{className:M.scroller,ownerState:_,style:{overflow:Tt.overflow,[B?`margin${u?"Left":"Right"}`:"marginBottom"]:nt?void 0:-Tt.scrollbarWidth},ref:N,children:[c.jsx(Ye,{"aria-label":h,"aria-labelledby":f,"aria-orientation":g==="vertical"?"vertical":null,className:M.flexContainer,ownerState:_,onKeyDown:ce,ref:D,role:"tablist",children:ie}),xt&&Wt]}),it.scrollButtonEnd]}))}),Je=Ge,bt=({})=>{const t=["Page","Detail"];return c.jsxs(ue,{separator:"›","aria-label":"breadcrumb",children:[c.jsx(dt,{style:{display:"flex",color:"inherit",cursor:"pointer"},children:c.jsx(pe,{})}),t.map((e,r)=>{const n=r===0,s=r===t.length-1;return n?c.jsx(dt,{style:{cursor:"pointer"},children:e},r):s?c.jsx(dt,{style:{cursor:"pointer"},children:e},r):c.jsx("a",{children:e})})]})};try{bt.displayName="BreadCrumbs",bt.__docgenInfo={description:"",displayName:"BreadCrumbs",props:{}}}catch{}const ft=({tabs:t})=>{console.log(t);const e=be(),r=t.findIndex(n=>n.hash===e.hash.replace("#",""));return c.jsx(he,{variant:"outlined",children:c.jsx(Je,{variant:"scrollable",scrollButtons:"auto",value:r>-1?r:0,children:t==null?void 0:t.map((n,s)=>c.jsx(Te,{label:n.label,component:fe,to:`#${n.hash}`},s))})})};try{ft.displayName="TabNavigator",ft.__docgenInfo={description:"",displayName:"TabNavigator",props:{tabs:{defaultValue:null,description:"Tab values",name:"tabs",required:!0,type:{name:"Tab[]"}}}}}catch{}const ht=({type:t,tabs:e,...r})=>{const n=s=>{switch(s){case"tabs":return c.jsx(ft,{tabs:e});case"breadcrumb":return c.jsx(bt,{})}};return c.jsx(c.Fragment,{children:n(t)})};try{ht.displayName="Navigation",ht.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Navigation",props:{type:{defaultValue:null,description:"Navigation type",name:"type",required:!0,type:{name:"enum",value:[{value:'"breadcrumb"'},{value:'"tabs"'}]}},tabs:{defaultValue:null,description:"Tab values",name:"tabs",required:!0,type:{name:"Tab[]"}}}}}catch{}const ho={component:ht,title:"Design System/Components/Navigation",parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["tabs","breadcrumb"]},tabs:{if:{arg:"type",eq:"tabs"}}}},tt={args:{type:"breadcrumb"}},et={args:{tabs:[{label:"Home",hash:"home"},{label:"Detail",hash:"detail"}],type:"tabs"}};var $t,kt,Ft;tt.parameters={...tt.parameters,docs:{...($t=tt.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    type: 'breadcrumb'
  }
}`,...(Ft=(kt=tt.parameters)==null?void 0:kt.docs)==null?void 0:Ft.source}}};var At,Ht,Dt;et.parameters={...et.parameters,docs:{...(At=et.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Home',
      hash: 'home'
    }, {
      label: 'Detail',
      hash: 'detail'
    }],
    type: 'tabs'
  }
}`,...(Dt=(Ht=et.parameters)==null?void 0:Ht.docs)==null?void 0:Dt.source}}};const mo=["Breadcrumbs","TabNavigation"];export{tt as Breadcrumbs,et as TabNavigation,mo as __namedExportsOrder,ho as default};
//# sourceMappingURL=Navigation.stories-a08b11e5.js.map
