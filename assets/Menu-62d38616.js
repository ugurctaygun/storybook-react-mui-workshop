import{r}from"./index-76fb7be0.js";import{_ as d}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{b as mo,_ as I,j}from"./useThemeProps-3da43970.js";import"./react-is.production.min-a192e302.js";import{a as ho,g as Po,s as W,c as Q,b as vo,r as bo}from"./styled-a4d559dd.js";import{u as wo}from"./useTheme-81e70d49.js";import{M as So}from"./Modal-f1e94586.js";import{P as Eo}from"./Paper-a4bd20c8.js";import{u as Oo}from"./TransitionGroupContext-5ba66160.js";import{o as lo,a as po}from"./ownerWindow-48013543.js";import{d as _o}from"./debounce-517eeb3c.js";import{G as Fo,M as zo}from"./MenuList-b91f49cd.js";import{u as V,i as $o}from"./useSlotProps-42155a80.js";const Do=r.createContext(void 0),Lo=Do;function dt(){return r.useContext(Lo)}function No(t){return ho("MuiPopover",t)}Po("MuiPopover",["root","paper"]);const Io=["onEntering"],jo=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],Wo=["slotProps"];function co(t,o){let n=0;return typeof o=="number"?n=o:o==="center"?n=t.height/2:o==="bottom"&&(n=t.height),n}function uo(t,o){let n=0;return typeof o=="number"?n=o:o==="center"?n=t.width/2:o==="right"&&(n=t.width),n}function fo(t){return[t.horizontal,t.vertical].map(o=>typeof o=="number"?`${o}px`:o).join(" ")}function J(t){return typeof t=="function"?t():t}const ko=t=>{const{classes:o}=t;return vo({root:["root"],paper:["paper"]},No,o)},Ao=W(So,{name:"MuiPopover",slot:"Root",overridesResolver:(t,o)=>o.root})({}),go=W(Eo,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ho=r.forwardRef(function(o,n){var F,z,g;const P=mo({props:o,name:"MuiPopover"}),{action:k,anchorEl:f,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:C,anchorReference:h="anchorEl",children:A,className:H,container:B,elevation:$=8,marginThreshold:a=16,open:l,PaperProps:D={},slots:x,slotProps:M,transformOrigin:y={vertical:"top",horizontal:"left"},TransitionComponent:b=Fo,transitionDuration:w="auto",TransitionProps:{onEntering:R}={}}=P,S=I(P.TransitionProps,Io),X=I(P,jo),c=(F=M==null?void 0:M.paper)!=null?F:D,L=r.useRef(),Y=Oo(L,c.ref),v=d({},P,{anchorOrigin:m,anchorReference:h,elevation:$,marginThreshold:a,externalPaperSlotProps:c,transformOrigin:y,TransitionComponent:b,transitionDuration:w,TransitionProps:S}),N=ko(v),U=r.useCallback(()=>{if(h==="anchorPosition")return C;const e=J(f),i=(e&&e.nodeType===1?e:lo(L.current).body).getBoundingClientRect();return{top:i.top+co(i,m.vertical),left:i.left+uo(i,m.horizontal)}},[f,m.horizontal,m.vertical,C,h]),G=r.useCallback(e=>({vertical:co(e,y.vertical),horizontal:uo(e,y.horizontal)}),[y.horizontal,y.vertical]),K=r.useCallback(e=>{const s={width:e.offsetWidth,height:e.offsetHeight},i=G(s);if(h==="none")return{top:null,left:null,transformOrigin:fo(i)};const eo=U();let O=eo.top-i.vertical,_=eo.left-i.horizontal;const ro=O+s.height,no=_+s.width,so=po(J(f)),io=so.innerHeight-a,ao=so.innerWidth-a;if(O<a){const u=O-a;O-=u,i.vertical+=u}else if(ro>io){const u=ro-io;O-=u,i.vertical+=u}if(_<a){const u=_-a;_-=u,i.horizontal+=u}else if(no>ao){const u=no-ao;_-=u,i.horizontal+=u}return{top:`${Math.round(O)}px`,left:`${Math.round(_)}px`,transformOrigin:fo(i)}},[f,h,U,G,a]),[p,T]=r.useState(l),E=r.useCallback(()=>{const e=L.current;if(!e)return;const s=K(e);s.top!==null&&(e.style.top=s.top),s.left!==null&&(e.style.left=s.left),e.style.transformOrigin=s.transformOrigin,T(!0)},[K]),xo=(e,s)=>{R&&R(e,s),E()},Mo=()=>{T(!1)};r.useEffect(()=>{l&&E()}),r.useImperativeHandle(k,()=>l?{updatePosition:()=>{E()}}:null,[l,E]),r.useEffect(()=>{if(!l)return;const e=_o(()=>{E()}),s=po(f);return s.addEventListener("resize",e),()=>{e.clear(),s.removeEventListener("resize",e)}},[f,l,E]);let Z=w;w==="auto"&&!b.muiSupportAuto&&(Z=void 0);const yo=B||(f?lo(J(f)).body:void 0),q=(z=x==null?void 0:x.root)!=null?z:Ao,oo=(g=x==null?void 0:x.paper)!=null?g:go,Ro=V({elementType:oo,externalSlotProps:d({},c,{style:p?c.style:d({},c.style,{opacity:0})}),additionalProps:{elevation:$,ref:Y},ownerState:v,className:Q(N.paper,c==null?void 0:c.className)}),to=V({elementType:q,externalSlotProps:(M==null?void 0:M.root)||{},externalForwardedProps:X,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:yo,open:l},ownerState:v,className:Q(N.root,H)}),{slotProps:To}=to,Co=I(to,Wo);return j.jsx(q,d({},Co,!$o(q)&&{slotProps:To},{children:j.jsx(b,d({appear:!0,in:l,onEntering:xo,onExited:Mo,timeout:Z},S,{children:j.jsx(oo,d({},Ro,{children:A}))}))}))}),Uo=Ho;function Go(t){return ho("MuiMenu",t)}Po("MuiMenu",["root","paper","list"]);const Ko=["onEntering"],Vo=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Bo={vertical:"top",horizontal:"right"},Xo={vertical:"top",horizontal:"left"},Yo=t=>{const{classes:o}=t;return vo({root:["root"],paper:["paper"],list:["list"]},Go,o)},qo=W(Uo,{shouldForwardProp:t=>bo(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,o)=>o.root})({}),Jo=W(go,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Qo=W(zo,{name:"MuiMenu",slot:"List",overridesResolver:(t,o)=>o.list})({outline:0}),Zo=r.forwardRef(function(o,n){var F,z;const g=mo({props:o,name:"MuiMenu"}),{autoFocus:P=!0,children:k,className:f,disableAutoFocusItem:m=!1,MenuListProps:C={},onClose:h,open:A,PaperProps:H={},PopoverClasses:B,transitionDuration:$="auto",TransitionProps:{onEntering:a}={},variant:l="selectedMenu",slots:D={},slotProps:x={}}=g,M=I(g.TransitionProps,Ko),y=I(g,Vo),b=wo(),w=b.direction==="rtl",R=d({},g,{autoFocus:P,disableAutoFocusItem:m,MenuListProps:C,onEntering:a,PaperProps:H,transitionDuration:$,TransitionProps:M,variant:l}),S=Yo(R),X=P&&!m&&A,c=r.useRef(null),L=(p,T)=>{c.current&&c.current.adjustStyleForScrollbar(p,b),a&&a(p,T)},Y=p=>{p.key==="Tab"&&(p.preventDefault(),h&&h(p,"tabKeyDown"))};let v=-1;r.Children.map(k,(p,T)=>{r.isValidElement(p)&&(p.props.disabled||(l==="selectedMenu"&&p.props.selected||v===-1)&&(v=T))});const N=(F=D.paper)!=null?F:Jo,U=(z=x.paper)!=null?z:H,G=V({elementType:D.root,externalSlotProps:x.root,ownerState:R,className:[S.root,f]}),K=V({elementType:N,externalSlotProps:U,ownerState:R,className:S.paper});return j.jsx(qo,d({onClose:h,anchorOrigin:{vertical:"bottom",horizontal:w?"right":"left"},transformOrigin:w?Bo:Xo,slots:{paper:N,root:D.root},slotProps:{root:G,paper:K},open:A,ref:n,transitionDuration:$,TransitionProps:d({onEntering:L},M),ownerState:R},y,{classes:B,children:j.jsx(Qo,d({onKeyDown:Y,actions:c,autoFocus:P&&(v===-1||m),autoFocusItem:X,variant:l},C,{className:Q(S.list,C.className),children:k}))}))}),mt=Zo;export{Lo as F,mt as M,dt as u};
//# sourceMappingURL=Menu-62d38616.js.map
