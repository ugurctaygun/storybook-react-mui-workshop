import{j as a}from"./jsx-runtime-f6d73c06.js";import{d as ue}from"./Add-047f9ae7.js";import{r as p}from"./index-8ee6c85d.js";import{r as ce,i as pe}from"./createSvgIcon-2399051f.js";import{f as me,b as re,_ as te,c as f}from"./useThemeProps-94f52e98.js";import{_ as g}from"./extends-c60d6d51.js";import{g as ae,a as ne,s as ie,c as j,b as le,r as fe}from"./styled-9a968d51.js";import{B as ve,M as G}from"./Button-3d342b58.js";import{P as be}from"./Popper-8a444aea.js";import{G as ge,M as he}from"./MenuList-65bf41aa.js";import{P as xe}from"./Paper-f1635e6a.js";import{M as ye,d as Ce}from"./Delete-199db6e1.js";import{u as Re,b as Be}from"./TransitionGroupContext-03ffa606.js";import{o as M}from"./ownerWindow-48013543.js";import{B as $e}from"./ButtonBase-4efedc8f.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-6a267752.js";import"./useId-add3311b.js";import"./debounce-517eeb3c.js";import"./isMuiElement-783834c2.js";import"./useControlled-b748c5f1.js";import"./Portal-e2d38721.js";import"./inheritsLoose-c82a83d4.js";import"./index-8bf7f4ad.js";import"./useSlotProps-eab205dd.js";import"./useTheme-f9895377.js";import"./react-is.production.min-a192e302.js";import"./emotion-react.browser.esm-efcf029b.js";import"./assertThisInitialized-081f9914.js";function F(e){return e.substring(2).toLowerCase()}function ke(e,o){return o.documentElement.clientWidth<e.clientX||o.documentElement.clientHeight<e.clientY}function ze(e){const{children:o,disableReactTree:r=!1,mouseEvent:t="onClick",onClickAway:v,touchEvent:u="onTouchEnd"}=e,l=p.useRef(!1),i=p.useRef(null),m=p.useRef(!1),s=p.useRef(!1);p.useEffect(()=>(setTimeout(()=>{m.current=!0},0),()=>{m.current=!1}),[]);const b=Re(o.ref,i),c=Be(n=>{const d=s.current;s.current=!1;const x=M(i.current);if(!m.current||!i.current||"clientX"in n&&ke(n,x))return;if(l.current){l.current=!1;return}let R;n.composedPath?R=n.composedPath().indexOf(i.current)>-1:R=!x.documentElement.contains(n.target)||i.current.contains(n.target),!R&&(r||!d)&&v(n)}),h=n=>d=>{s.current=!0;const x=o.props[n];x&&x(d)},C={ref:b};return u!==!1&&(C[u]=h(u)),p.useEffect(()=>{if(u!==!1){const n=F(u),d=M(i.current),x=()=>{l.current=!0};return d.addEventListener(n,c),d.addEventListener("touchmove",x),()=>{d.removeEventListener(n,c),d.removeEventListener("touchmove",x)}}},[c,u]),t!==!1&&(C[t]=h(t)),p.useEffect(()=>{if(t!==!1){const n=F(t),d=M(i.current);return d.addEventListener(n,c),()=>{d.removeEventListener(n,c)}}},[c,t]),a.jsx(p.Fragment,{children:p.cloneElement(o,C)})}function Ee(e){return ne("MuiButtonGroup",e)}const Pe=ae("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),y=Pe,Ie=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Me=(e,o)=>{const{ownerState:r}=e;return[{[`& .${y.grouped}`]:o.grouped},{[`& .${y.grouped}`]:o[`grouped${f(r.orientation)}`]},{[`& .${y.grouped}`]:o[`grouped${f(r.variant)}`]},{[`& .${y.grouped}`]:o[`grouped${f(r.variant)}${f(r.orientation)}`]},{[`& .${y.grouped}`]:o[`grouped${f(r.variant)}${f(r.color)}`]},o.root,o[r.variant],r.disableElevation===!0&&o.disableElevation,r.fullWidth&&o.fullWidth,r.orientation==="vertical"&&o.vertical]},Te=e=>{const{classes:o,color:r,disabled:t,disableElevation:v,fullWidth:u,orientation:l,variant:i}=e,m={root:["root",i,l==="vertical"&&"vertical",u&&"fullWidth",v&&"disableElevation"],grouped:["grouped",`grouped${f(l)}`,`grouped${f(i)}`,`grouped${f(i)}${f(l)}`,`grouped${f(i)}${f(r)}`,t&&"disabled"]};return le(m,Ee,o)},je=ie("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Me})(({theme:e,ownerState:o})=>g({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${y.grouped}`]:g({minWidth:40,"&:not(:first-of-type)":g({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":g({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${y.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${y.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:me(e.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${y.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${y.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(e.vars||e).palette[o.color].dark},{"&:hover":g({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":g({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"})})),Ge=p.forwardRef(function(o,r){const t=re({props:o,name:"MuiButtonGroup"}),{children:v,className:u,color:l="primary",component:i="div",disabled:m=!1,disableElevation:s=!1,disableFocusRipple:b=!1,disableRipple:c=!1,fullWidth:h=!1,orientation:C="horizontal",size:n="medium",variant:d="outlined"}=t,x=te(t,Ie),R=g({},t,{color:l,component:i,disabled:m,disableElevation:s,disableFocusRipple:b,disableRipple:c,fullWidth:h,orientation:C,size:n,variant:d}),I=Te(R),de=p.useMemo(()=>({className:I.grouped,color:l,disabled:m,disableElevation:s,disableFocusRipple:b,disableRipple:c,fullWidth:h,size:n,variant:d}),[l,m,s,b,c,h,n,d,I.grouped]);return a.jsx(je,g({as:i,role:"group",className:j(I.root,u),ref:r,ownerState:R},x,{children:a.jsx(ve.Provider,{value:de,children:v})}))}),_e=Ge;function Le(e){return ne("MuiFab",e)}const Fe=ae("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),D=Fe,De=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],Ve=e=>{const{color:o,variant:r,classes:t,size:v}=e,u={root:["root",r,`size${f(v)}`,o==="inherit"?"colorInherit":o]},l=le(u,Le,t);return g({},t,l)},Ae=ie($e,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>fe(e)||e==="classes",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],o[`size${f(r.size)}`],r.color==="inherit"&&o.colorInherit,o[f(r.size)],o[r.color]]}})(({theme:e,ownerState:o})=>{var r,t;return g({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:(r=(t=e.palette).getContrastText)==null?void 0:r.call(t,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${D.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},o.size==="small"&&{width:40,height:40},o.size==="medium"&&{width:48,height:48},o.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},o.variant==="extended"&&o.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},o.variant==="extended"&&o.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},o.color==="inherit"&&{color:"inherit"})},({theme:e,ownerState:o})=>g({},o.color!=="inherit"&&o.color!=="default"&&(e.vars||e).palette[o.color]!=null&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}}),({theme:e})=>({[`&.${D.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),We=p.forwardRef(function(o,r){const t=re({props:o,name:"MuiFab"}),{children:v,className:u,color:l="default",component:i="button",disabled:m=!1,disableFocusRipple:s=!1,focusVisibleClassName:b,size:c="large",variant:h="circular"}=t,C=te(t,De),n=g({},t,{color:l,component:i,disabled:m,disableFocusRipple:s,size:c,variant:h}),d=Ve(n);return a.jsx(Ae,g({className:j(d.root,u),component:i,disabled:m,focusRipple:!s,focusVisibleClassName:j(d.focusVisible,b),ownerState:n,ref:r},C,{classes:d,children:v}))}),we=We;var L={},Oe=pe;Object.defineProperty(L,"__esModule",{value:!0});var se=L.default=void 0,Ne=Oe(ce()),qe=a,He=(0,Ne.default)((0,qe.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");se=L.default=He;const T=["First Option","Button Group","Third Option"];function Ue(){const[e,o]=p.useState(!1),r=p.useRef(null),[t,v]=p.useState(1),u=()=>{console.info(`You clicked ${T[t]}`)},l=(s,b)=>{v(b),o(!1)},i=()=>{o(s=>!s)},m=s=>{r.current&&r.current.contains(s.target)||o(!1)};return a.jsxs(p.Fragment,{children:[a.jsxs(_e,{variant:"contained",ref:r,"aria-label":"split button",children:[a.jsx(G,{onClick:u,children:T[t]}),a.jsx(G,{size:"small","aria-controls":e?"split-button-menu":void 0,"aria-expanded":e?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:i,children:a.jsx(se,{})})]}),a.jsx(be,{sx:{zIndex:1},open:e,anchorEl:r.current,role:void 0,transition:!0,disablePortal:!0,children:({TransitionProps:s})=>a.jsx(ge,{...s,style:{transformOrigin:"center top"},children:a.jsx(xe,{children:a.jsx(ze,{onClickAway:m,children:a.jsx(he,{id:"split-button-menu",autoFocusItem:!0,children:T.map((b,c)=>a.jsx(ye,{disabled:c===2,selected:c===t,onClick:h=>l(h,c),children:b},b))})})})})})]})}const _=({size:e="medium",color:o,disabled:r,icon:t=!1,label:v,variant:u,type:l,iconType:i="delete",...m})=>{const s=b=>{switch(b){case"default":return a.jsx(G,{variant:u,disabled:r,color:o,size:e,startIcon:t&&a.jsx(Ce,{}),disableElevation:!0,children:v});case"add":return a.jsxs(we,{"aria-label":"Add",variant:"extended",color:o,children:[a.jsx(ue,{})," ",v]});case"group":return a.jsx(Ue,{})}};return a.jsx(a.Fragment,{children:s(l)})};try{_.displayName="Button",_.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{color:{defaultValue:null,description:"What background color to use",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inherit"'}]}},variant:{defaultValue:null,description:"Button variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"text"'}]}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable button",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"false"},description:"Button icon",name:"icon",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Button type",name:"type",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"add"'},{value:'"group"'}]}},iconType:{defaultValue:{value:"delete"},description:"Optional click handler",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"delete"'},{value:'"copy"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Bo={title:"Components/Inputs/Button",component:_,parameters:{layout:"centered",docs:{source:{code:`// Button
import { Button , Fab } from "@mui/material";

<Button
  variant={variant}
  disabled={disabled}
  color={color}
  size={size}
  startIcon={icon && <DeleteIcon />}
  disableElevation
>
  {label}
</Button>

// Button Group

import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

<ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
  <Button onClick={handleClick}>{options[selectedIndex]}</Button>
  <Button
    size="small"
    aria-controls={open ? 'split-button-menu' : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-label="select merge strategy"
    aria-haspopup="menu"
    onClick={handleToggle}
  >
    <ArrowDropDownIcon />
  </Button>
</ButtonGroup>
<Popper
  sx={{
    zIndex: 1,
  }}
  open={open}
  anchorEl={anchorRef.current}
  role={undefined}
  transition
  disablePortal
>
  {({ TransitionProps }) => (
    <Grow
      {...TransitionProps}
      style={{
        transformOrigin: 'center top' ,
      }}
    >
      <Paper>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList id="split-button-menu" autoFocusItem>
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 2}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Grow>
  )}
</Popper>`}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","error","success","warning"]},variant:{control:"radio",options:["text","outlined","contained"]},type:{control:"select",options:["default","add","group"]},icon:{control:"boolean"},iconType:{control:"select",if:{arg:"icon"},option:["delete","copy"]}}},B={args:{label:"Button",variant:"contained",color:"primary",type:"default"}},$={args:{label:"Validate",variant:"outlined",color:"warning",type:"default"}},k={args:{label:"Reject",variant:"outlined",color:"error",type:"default"}},z={args:{label:"Add New",color:"primary",type:"add"}},E={args:{label:"Delete",color:"error",variant:"outlined",type:"default",icon:!0}},P={args:{label:"Button Group",color:"primary",type:"group"},parameters:{controls:{exclude:["type"]}}};var V,A,W;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary',
    type: 'default'
  }
}`,...(W=(A=B.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var w,O,N;$.parameters={...$.parameters,docs:{...(w=$.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Validate',
    variant: 'outlined',
    color: 'warning',
    type: 'default'
  }
}`,...(N=(O=$.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var q,H,U;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Reject',
    variant: 'outlined',
    color: 'error',
    type: 'default'
  }
}`,...(U=(H=k.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var X,Y,J;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Add New',
    color: 'primary',
    type: 'add'
  }
}`,...(J=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,Z;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    color: 'error',
    variant: 'outlined',
    type: 'default',
    icon: true
  }
}`,...(Z=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var S,ee,oe;P.parameters={...P.parameters,docs:{...(S=P.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Button Group',
    color: 'primary',
    type: 'group'
  },
  parameters: {
    controls: {
      exclude: ['type']
    }
  }
}`,...(oe=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const $o=["Primary","Warning","Error","Add","Delete","Group"];export{z as Add,E as Delete,k as Error,P as Group,B as Primary,$ as Warning,$o as __namedExportsOrder,Bo as default};
//# sourceMappingURL=Button.stories-d670a047.js.map
