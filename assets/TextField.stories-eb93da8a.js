import{j as r}from"./useThemeProps-65620fae.js";import{r as V}from"./index-76fb7be0.js";import{T as v}from"./TextField-ce85c982.js";import{I as y}from"./InputAdornment-883de13e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./_commonjsHelpers-de833af9.js";import"./styled-0aaaf00b.js";import"./Menu-9564914c.js";import"./useSlotProps-61ce3021.js";import"./TransitionGroupContext-69894be1.js";import"./useTheme-6ed6b6db.js";import"./MenuList-1d5c71e4.js";import"./index-d3ea75b5.js";import"./inheritsLoose-c82a83d4.js";import"./ownerWindow-74a9cc60.js";import"./useControlled-68bd0334.js";import"./Paper-e33b4945.js";import"./isMuiElement-402c1219.js";import"./GlobalStyles-45e15d30.js";import"./emotion-react.browser.esm-c4bfb050.js";import"./Typography-a9cd13a0.js";import"./extendSxProp-7611aa3b.js";const l=({label:o="Label",disabled:m=!1,value:c="",fullWidth:f=!1,textAdornment:h,inputProps:g,onChange:F,...T})=>{const[x,b]=V.useState(c);return r.jsx(v,{label:o,disabled:m,variant:"outlined",value:x,onChange:a=>b(a==null?void 0:a.target.value),fullWidth:f,inputProps:g,InputProps:{autoComplete:"on",endAdornment:r.jsx(y,{position:"end",children:r.jsx("p",{children:h})})}})};try{l.displayName="TextField",l.__docgenInfo={description:"Primary UI component for user interaction",displayName:"TextField",props:{label:{defaultValue:{value:"Label"},description:"Label value of the input",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Value of theinput",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disable input interactivity",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Changes the width of the input to match the container element",name:"fullWidth",required:!1,type:{name:"boolean"}},textAdornment:{defaultValue:null,description:"Adds text value as an end adornment depending on the input value from a service",name:"textAdornment",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"Add props to the input field , used for max lenght limitation",name:"inputProps",required:!1,type:{name:"object"}},onChange:{defaultValue:null,description:"Triggers when user changes input",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const G={component:l,title:"Components/Inputs/Text Field",tags:["autodocs"],parameters:{layout:"centered"}},e={args:{label:"Default",disabled:!1,value:"",fullWidth:!1,inputProps:{maxLength:50}}},t={args:{label:"First Value",disabled:!1,value:"",textAdornment:"Second Value"}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: {
      maxLength: 50
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "First Value",
    disabled: false,
    value: '',
    textAdornment: 'Second Value'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["DefaultTextField","MultiValueTextField"];export{e as DefaultTextField,t as MultiValueTextField,H as __namedExportsOrder,G as default};
//# sourceMappingURL=TextField.stories-eb93da8a.js.map
