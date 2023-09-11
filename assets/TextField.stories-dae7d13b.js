import{j as r}from"./useThemeProps-3da43970.js";import{r as V}from"./index-76fb7be0.js";import{T as v}from"./TextField-a28e90ac.js";import{I as y}from"./InputAdornment-4f35fed6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./_commonjsHelpers-de833af9.js";import"./styled-a4d559dd.js";import"./Menu-62d38616.js";import"./react-is.production.min-a192e302.js";import"./useTheme-81e70d49.js";import"./Modal-f1e94586.js";import"./Portal-713d3f99.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./TransitionGroupContext-5ba66160.js";import"./ownerWindow-48013543.js";import"./useSlotProps-42155a80.js";import"./useId-a4495471.js";import"./Paper-a4bd20c8.js";import"./debounce-517eeb3c.js";import"./MenuList-b91f49cd.js";import"./isMuiElement-402c1219.js";import"./useControlled-3e5b2082.js";import"./createSvgIcon-f3b6fc62.js";import"./GlobalStyles-88f8b3d8.js";import"./emotion-react.browser.esm-3e506388.js";import"./Typography-f6b7e65d.js";import"./extendSxProp-52ff1403.js";const l=({label:o="Label",disabled:m=!1,value:c="",fullWidth:f=!1,textAdornment:h,inputProps:g,onChange:F,...T})=>{const[x,b]=V.useState(c);return r.jsx(v,{label:o,disabled:m,variant:"outlined",value:x,onChange:a=>b(a==null?void 0:a.target.value),fullWidth:f,inputProps:g,InputProps:{autoComplete:"on",endAdornment:r.jsx(y,{position:"end",children:r.jsx("p",{children:h})})}})};try{l.displayName="TextField",l.__docgenInfo={description:"Primary UI component for user interaction",displayName:"TextField",props:{label:{defaultValue:{value:"Label"},description:"Label value of the input",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Value of theinput",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disable input interactivity",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Changes the width of the input to match the container element",name:"fullWidth",required:!1,type:{name:"boolean"}},textAdornment:{defaultValue:null,description:"Adds text value as an end adornment depending on the input value from a service",name:"textAdornment",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"Add props to the input field , used for max lenght limitation",name:"inputProps",required:!1,type:{name:"object"}},onChange:{defaultValue:null,description:"Triggers when user changes input",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const Y={component:l,title:"Components/Inputs/Text Field",tags:["autodocs"],parameters:{layout:"centered"}},e={args:{label:"Default",disabled:!1,value:"",fullWidth:!1,inputProps:{maxLength:50}}},t={args:{label:"First Value",disabled:!1,value:"",textAdornment:"Second Value"}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: {
      maxLength: 50
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "First Value",
    disabled: false,
    value: '',
    textAdornment: 'Second Value'
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Z=["DefaultTextField","MultiValueTextField"];export{e as DefaultTextField,t as MultiValueTextField,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=TextField.stories-dae7d13b.js.map
