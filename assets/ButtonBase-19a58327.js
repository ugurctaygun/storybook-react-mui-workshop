import{_ as A}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as re,j as $,e as ye}from"./useThemeProps-8d75b814.js";import{r as a,R as W}from"./index-76fb7be0.js";import{c as x,a as Te,b as ie,g as ze,d as Oe}from"./styled-e735bca7.js";import{k as oe}from"./emotion-react.browser.esm-c23d3261.js";import{_ as Ae}from"./assertThisInitialized-081f9914.js";import{_ as Xe}from"./inheritsLoose-c82a83d4.js";import{T as fe,u as de,a as H}from"./TransitionGroupContext-472106e6.js";let G=!0,te=!1,he;const Ye={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function We(e){const{type:t,tagName:i}=e;return!!(i==="INPUT"&&Ye[t]&&!e.readOnly||i==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function He(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Ge(){this.visibilityState==="hidden"&&te&&(G=!0)}function qe(e){e.addEventListener("keydown",He,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Ge,!0)}function Je(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||We(t)}function Qe(){const e=a.useCallback(n=>{n!=null&&qe(n.ownerDocument)},[]),t=a.useRef(!1);function i(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function l(n){return Je(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:i,ref:e}}function se(e,t){var i=function(r){return t&&a.isValidElement(r)?t(r):r},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=i(n)}),l}function Ze(e,t){e=e||{},t=t||{};function i(d){return d in t?t[d]:e[d]}var l=Object.create(null),n=[];for(var r in e)r in t?n.length&&(l[r]=n,n=[]):n.push(r);var o,c={};for(var u in t){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=i(p)}c[u]=i(u)}for(o=0;o<n.length;o++)c[n[o]]=i(n[o]);return c}function S(e,t,i){return i[t]!=null?i[t]:e.props[t]}function et(e,t){return se(e.children,function(i){return a.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:S(i,"appear",e),enter:S(i,"enter",e),exit:S(i,"exit",e)})})}function tt(e,t,i){var l=se(e.children),n=Ze(t,l);return Object.keys(n).forEach(function(r){var o=n[r];if(a.isValidElement(o)){var c=r in t,u=r in l,p=t[r],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[r]=a.cloneElement(o,{onExited:i.bind(null,o),in:!0,exit:S(o,"exit",e),enter:S(o,"enter",e)}):!u&&c&&!d?n[r]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[r]=a.cloneElement(o,{onExited:i.bind(null,o),in:p.props.in,exit:S(o,"exit",e),enter:S(o,"enter",e)}))}}),n}var nt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},rt={component:"div",childFactory:function(t){return t}},ae=function(e){Xe(t,e);function t(l,n){var r;r=e.call(this,l,n)||this;var o=r.handleExited.bind(Ae(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,r){var o=r.children,c=r.handleExited,u=r.firstRender;return{children:u?et(n,c):tt(n,o,c),firstRender:!1}},i.handleExited=function(n,r){var o=se(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(r),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},i.render=function(){var n=this.props,r=n.component,o=n.childFactory,c=re(n,["component","childFactory"]),u=this.state.contextValue,p=nt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,r===null?W.createElement(fe.Provider,{value:u},p):W.createElement(fe.Provider,{value:u},W.createElement(r,c,p))},t}(W.Component);ae.propTypes={};ae.defaultProps=rt;const it=ae;function ot(e){const{className:t,classes:i,pulsate:l=!1,rippleX:n,rippleY:r,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=x(t,i.ripple,i.rippleVisible,l&&i.ripplePulsate),C={width:o,height:o,top:-(o/2)+r,left:-(o/2)+n},h=x(i.child,d&&i.childLeaving,l&&i.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const st=Te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=st,at=["center","classes","className"];let q=e=>e,me,be,ge,Re;const ne=550,lt=80,ut=oe(me||(me=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ct=oe(be||(be=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),pt=oe(ge||(ge=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ft=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),dt=ie(ot,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,ut,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ct,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,pt,({theme:e})=>e.transitions.easing.easeInOut),ht=a.forwardRef(function(t,i){const l=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:r={},className:o}=l,c=re(l,at),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const U=a.useCallback(f=>{const{pulsate:y,rippleX:T,rippleY:D,rippleSize:j,cb:K}=f;p(E=>[...E,$.jsx(dt,{classes:{ripple:x(r.ripple,m.ripple),rippleVisible:x(r.rippleVisible,m.rippleVisible),ripplePulsate:x(r.ripplePulsate,m.ripplePulsate),child:x(r.child,m.child),childLeaving:x(r.childLeaving,m.childLeaving),childPulsate:x(r.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:T,rippleY:D,rippleSize:j},d.current)]),d.current+=1,g.current=K},[r]),N=a.useCallback((f={},y={},T=()=>{})=>{const{pulsate:D=!1,center:j=n||y.pulsate,fakeElement:K=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=K?null:R.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,P,L;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:k,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(k-B.left),P=Math.round(v-B.top)}if(j)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((E?E.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((E?E.clientHeight:0)-P),P)*2+2;L=Math.sqrt(k**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:T})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},lt)):U({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:T})},[n,U]),_=a.useCallback(()=>{N({},{pulsate:!0})},[N]),I=a.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{I(f,y)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=y},[]);return a.useImperativeHandle(i,()=>({pulsate:_,start:N,stop:I}),[_,N,I]),$.jsx(ft,A({className:x(m.root,r.root,o),ref:R},c,{children:$.jsx(it,{component:null,exit:!0,children:u})}))}),mt=ht;function bt(e){return ze("MuiButtonBase",e)}const gt=Te("MuiButtonBase",["root","disabled","focusVisible"]),Rt=gt,yt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Tt=e=>{const{disabled:t,focusVisible:i,focusVisibleClassName:l,classes:n}=e,o=Oe({root:["root",t&&"disabled",i&&"focusVisible"]},bt,n);return i&&l&&(o.root+=` ${l}`),o},Et=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Rt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Mt=a.forwardRef(function(t,i){const l=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:r=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:_,onFocusVisible:I,onKeyDown:f,onKeyUp:y,onMouseDown:T,onMouseLeave:D,onMouseUp:j,onTouchEnd:K,onTouchMove:E,onTouchStart:B,tabIndex:V=0,TouchRippleProps:P,touchRippleRef:L,type:k}=l,v=re(l,yt),z=a.useRef(null),M=a.useRef(null),Ee=de(M,L),{isFocusVisibleRef:le,onFocus:Me,onBlur:xe,ref:Ce}=Qe(),[F,X]=a.useState(!1);p&&F&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[J,Ve]=a.useState(!1);a.useEffect(()=>{Ve(!0)},[]);const ve=J&&!d&&!p;a.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function w(s,ce,Ke=g){return H(pe=>(ce&&ce(pe),!Ke&&M.current&&M.current[s](pe),!0))}const we=w("start",T),Be=w("stop",U),Pe=w("stop",N),Le=w("stop",j),De=w("stop",s=>{F&&s.preventDefault(),D&&D(s)}),ke=w("start",B),Fe=w("stop",K),Se=w("stop",E),$e=w("stop",s=>{xe(s),le.current===!1&&X(!1),h&&h(s)},!1),Ne=H(s=>{z.current||(z.current=s.currentTarget),Me(s),le.current===!0&&(X(!0),I&&I(s)),_&&_(s)}),Q=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.useRef(!1),Ie=H(s=>{b&&!Z.current&&F&&M.current&&s.key===" "&&(Z.current=!0,M.current.stop(s,()=>{M.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),je=H(s=>{b&&s.key===" "&&M.current&&F&&!s.defaultPrevented&&(Z.current=!1,M.current.stop(s,()=>{M.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let Y=u;Y==="button"&&(v.href||v.to)&&(Y=C);const O={};Y==="button"?(O.type=k===void 0?"button":k,O.disabled=p):(!v.href&&!v.to&&(O.role="button"),p&&(O["aria-disabled"]=p));const Ue=de(i,Ce,z),ue=A({},l,{centerRipple:r,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:F}),_e=Tt(ue);return $.jsxs(Et,A({as:Y,className:x(_e.root,c),ownerState:ue,onBlur:$e,onClick:R,onContextMenu:Be,onFocus:Ne,onKeyDown:Ie,onKeyUp:je,onMouseDown:we,onMouseLeave:De,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:ke,ref:Ue,tabIndex:p?-1:V,type:k},O,v,{children:[o,ve?$.jsx(mt,A({ref:Ee,center:r},P)):null]}))}),kt=Mt;export{kt as B,Qe as u};
//# sourceMappingURL=ButtonBase-19a58327.js.map
