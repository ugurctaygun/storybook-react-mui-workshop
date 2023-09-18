import{_ as v}from"./extends-c60d6d51.js";import{_ as N,b as X}from"./useThemeProps-08dea6dc.js";import{r as l}from"./index-8ee6c85d.js";import{u as Y}from"./useTheme-7aaf0f9b.js";import{T as Z,r as ee,g as U,a as te}from"./Portal-beb556f1.js";import{j as P}from"./jsx-runtime-f6d73c06.js";import{u as O,a as ne}from"./TransitionGroupContext-03ffa606.js";import"./react-is.production.min-a192e302.js";import{o as G}from"./ownerWindow-48013543.js";import{a as se,g as ie,s as re,c as oe,b as ae}from"./styled-4d22d7a6.js";const ue=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function _(t){return`scale(${t}, ${t**2})`}const le={entering:{opacity:1,transform:_(1)},entered:{opacity:1,transform:"none"}},$=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),W=l.forwardRef(function(e,n){const{addEndListener:f,appear:p=!0,children:h,easing:c,in:a,onEnter:m,onEntered:b,onEntering:R,onExit:C,onExited:T,onExiting:g,style:D,timeout:E="auto",TransitionComponent:H=Z}=e,d=N(e,ue),F=l.useRef(),s=l.useRef(),i=Y(),u=l.useRef(null),y=O(u,h.ref,n),r=o=>w=>{if(o){const L=u.current;w===void 0?o(L):o(L,w)}},k=r(R),j=r((o,w)=>{ee(o);const{duration:L,delay:I,easing:x}=U({style:D,timeout:E,easing:c},{mode:"enter"});let M;E==="auto"?(M=i.transitions.getAutoHeightDuration(o.clientHeight),s.current=M):M=L,o.style.transition=[i.transitions.create("opacity",{duration:M,delay:I}),i.transitions.create("transform",{duration:$?M:M*.666,delay:I,easing:x})].join(","),m&&m(o,w)}),K=r(b),V=r(g),q=r(o=>{const{duration:w,delay:L,easing:I}=U({style:D,timeout:E,easing:c},{mode:"exit"});let x;E==="auto"?(x=i.transitions.getAutoHeightDuration(o.clientHeight),s.current=x):x=w,o.style.transition=[i.transitions.create("opacity",{duration:x,delay:L}),i.transitions.create("transform",{duration:$?x:x*.666,delay:$?L:L||x*.333,easing:I})].join(","),o.style.opacity=0,o.style.transform=_(.75),C&&C(o)}),J=r(T),Q=o=>{E==="auto"&&(F.current=setTimeout(o,s.current||0)),f&&f(u.current,o)};return l.useEffect(()=>()=>{clearTimeout(F.current)},[]),P.jsx(H,v({appear:p,in:a,nodeRef:u,onEnter:j,onEntered:K,onEntering:k,onExit:q,onExited:J,onExiting:V,addEndListener:Q,timeout:E==="auto"?null:E},d,{children:(o,w)=>l.cloneElement(h,v({style:v({opacity:0,transform:_(.75),visibility:o==="exited"&&!a?"hidden":void 0},le[o],D,h.props.style),ref:y},w))}))});W.muiSupportAuto=!0;const Fe=W,de=l.createContext({}),ce=de;function fe(t){return se("MuiList",t)}ie("MuiList",["root","padding","dense","subheader"]);const pe=["children","className","component","dense","disablePadding","subheader"],me=t=>{const{classes:e,disablePadding:n,dense:f,subheader:p}=t;return ae({root:["root",!n&&"padding",f&&"dense",p&&"subheader"]},fe,e)},ge=re("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disablePadding&&e.padding,n.dense&&e.dense,n.subheader&&e.subheader]}})(({ownerState:t})=>v({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),he=l.forwardRef(function(e,n){const f=X({props:e,name:"MuiList"}),{children:p,className:h,component:c="ul",dense:a=!1,disablePadding:m=!1,subheader:b}=f,R=N(f,pe),C=l.useMemo(()=>({dense:a}),[a]),T=v({},f,{component:c,dense:a,disablePadding:m}),g=me(T);return P.jsx(ce.Provider,{value:C,children:P.jsxs(ge,v({as:c,className:oe(g.root,h),ref:n,ownerState:T},R,{children:[b,p]}))})}),ye=he,Ee=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function A(t,e,n){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:n?null:t.firstChild}function z(t,e,n){return t===e?n?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:n?null:t.lastChild}function B(t,e){if(e===void 0)return!0;let n=t.innerText;return n===void 0&&(n=t.textContent),n=n.trim().toLowerCase(),n.length===0?!1:e.repeating?n[0]===e.keys[0]:n.indexOf(e.keys.join(""))===0}function S(t,e,n,f,p,h){let c=!1,a=p(t,e,e?n:!1);for(;a;){if(a===t.firstChild){if(c)return!1;c=!0}const m=f?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!B(a,h)||m)a=p(t,a,n);else return a.focus(),!0}return!1}const xe=l.forwardRef(function(e,n){const{actions:f,autoFocus:p=!1,autoFocusItem:h=!1,children:c,className:a,disabledItemsFocusable:m=!1,disableListWrap:b=!1,onKeyDown:R,variant:C="selectedMenu"}=e,T=N(e,Ee),g=l.useRef(null),D=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ne(()=>{p&&g.current.focus()},[p]),l.useImperativeHandle(f,()=>({adjustStyleForScrollbar:(s,i)=>{const u=!g.current.style.width;if(s.clientHeight<g.current.clientHeight&&u){const y=`${te(G(s))}px`;g.current.style[i.direction==="rtl"?"paddingLeft":"paddingRight"]=y,g.current.style.width=`calc(100% + ${y})`}return g.current}}),[]);const E=s=>{const i=g.current,u=s.key,y=G(i).activeElement;if(u==="ArrowDown")s.preventDefault(),S(i,y,b,m,A);else if(u==="ArrowUp")s.preventDefault(),S(i,y,b,m,z);else if(u==="Home")s.preventDefault(),S(i,null,b,m,A);else if(u==="End")s.preventDefault(),S(i,null,b,m,z);else if(u.length===1){const r=D.current,k=u.toLowerCase(),j=performance.now();r.keys.length>0&&(j-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&k!==r.keys[0]&&(r.repeating=!1)),r.lastTime=j,r.keys.push(k);const K=y&&!r.repeating&&B(y,r);r.previousKeyMatched&&(K||S(i,y,!1,m,A,r))?s.preventDefault():r.previousKeyMatched=!1}R&&R(s)},H=O(g,n);let d=-1;l.Children.forEach(c,(s,i)=>{if(!l.isValidElement(s)){d===i&&(d+=1,d>=c.length&&(d=-1));return}s.props.disabled||(C==="selectedMenu"&&s.props.selected||d===-1)&&(d=i),d===i&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(d+=1,d>=c.length&&(d=-1))});const F=l.Children.map(c,(s,i)=>{if(i===d){const u={};return h&&(u.autoFocus=!0),s.props.tabIndex===void 0&&C==="selectedMenu"&&(u.tabIndex=0),l.cloneElement(s,u)}return s});return P.jsx(ye,v({role:"menu",ref:H,className:a,onKeyDown:E,tabIndex:p?0:-1},T,{children:F}))}),ke=xe;export{Fe as G,ce as L,ke as M};
//# sourceMappingURL=MenuList-893237d2.js.map
