import{j as r}from"./useThemeProps-885cf5c5.js";import{r as V}from"./index-76fb7be0.js";import{T as v}from"./TextField-add7f6b2.js";import{I as y}from"./InputAdornment-41c3c4d3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./_commonjsHelpers-de833af9.js";import"./styled-39ccb8f1.js";import"./useSlotProps-cbdf4664.js";import"./TransitionGroupContext-78298a73.js";import"./Paper-c1c8bff2.js";import"./MenuList-aa49a758.js";import"./index-d3ea75b5.js";import"./inheritsLoose-c82a83d4.js";import"./GlobalStyles-cce64836.js";import"./emotion-react.browser.esm-d2ba18d3.js";import"./Typography-a2ca9b1c.js";const l=({label:n="Label",disabled:m=!1,value:c="",fullWidth:f=!1,textAdornment:g,inputProps:h,onChange:F,...T})=>{const[x,b]=V.useState(c);return r.jsx(v,{label:n,disabled:m,variant:"outlined",value:x,onChange:a=>b(a==null?void 0:a.target.value),fullWidth:f,inputProps:h,InputProps:{autoComplete:"on",endAdornment:r.jsx(y,{position:"end",children:r.jsx("p",{children:g})})}})};try{l.displayName="TextField",l.__docgenInfo={description:"Primary UI component for user interaction",displayName:"TextField",props:{label:{defaultValue:{value:"Label"},description:"Label value of the input",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Value of theinput",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disable input interactivity",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Changes the width of the input to match the container element",name:"fullWidth",required:!1,type:{name:"boolean"}},textAdornment:{defaultValue:null,description:"Adds text value as an end adornment depending on the input value from a service",name:"textAdornment",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"Add props to the input field , used for max lenght limitation",name:"inputProps",required:!1,type:{name:"object"}},onChange:{defaultValue:null,description:"Triggers when user changes input",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const R={component:l,title:"Design System/Components/Text Field",tags:["autodocs"],parameters:{layout:"centered"}},e={args:{label:"Default",disabled:!1,value:"",fullWidth:!1,inputProps:{maxLength:50}}},t={args:{label:"First Value",disabled:!1,value:"",textAdornment:"Second Value"}};var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: {
      maxLength: 50
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "First Value",
    disabled: false,
    value: '',
    textAdornment: 'Second Value'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const U=["DefaultTextField","MultiValueTextField"];export{e as DefaultTextField,t as MultiValueTextField,U as __namedExportsOrder,R as default};
//# sourceMappingURL=TextField.stories-8b2c1e9f.js.map
