import{r as a,a as I}from"./index-76fb7be0.js";function b(...t){return t.reduce((e,n)=>n==null?e:function(...u){e.apply(this,u),n.apply(this,u)},()=>{})}let l=0;function p(t){const[e,n]=a.useState(t),s=t||e;return a.useEffect(()=>{e==null&&(l+=1,n(`mui-${l}`))},[e]),s}const o=I["useId".toString()];function h(t){if(o!==void 0){const e=o();return t??e}return p(t)}function C({controlled:t,default:e,name:n,state:s="value"}){const{current:u}=a.useRef(t!==void 0),[c,r]=a.useState(e),f=u?t:c,i=a.useCallback(d=>{u||r(d)},[]);return[f,i]}export{C as a,b as c,h as u};
//# sourceMappingURL=useControlled-68bd0334.js.map
