import{j as a}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{T as g}from"./TextField-a15606ad.js";import{I as P}from"./InputAdornment-3db427cd.js";import{N as R}from"./react-number-format.es-93ad259a.js";import"./_commonjsHelpers-de833af9.js";import"./extends-c60d6d51.js";import"./useThemeProps-94f52e98.js";import"./styled-9a968d51.js";import"./Menu-325419c5.js";import"./react-is.production.min-a192e302.js";import"./useTheme-f9895377.js";import"./Modal-9fb8aeaa.js";import"./Portal-e2d38721.js";import"./inheritsLoose-c82a83d4.js";import"./index-8bf7f4ad.js";import"./TransitionGroupContext-03ffa606.js";import"./ownerWindow-48013543.js";import"./useSlotProps-eab205dd.js";import"./useId-add3311b.js";import"./Paper-f1635e6a.js";import"./debounce-517eeb3c.js";import"./MenuList-65bf41aa.js";import"./isMuiElement-783834c2.js";import"./useControlled-b748c5f1.js";import"./createSvgIcon-6a267752.js";import"./GlobalStyles-88feff6a.js";import"./emotion-react.browser.esm-efcf029b.js";import"./Typography-fdbae6ba.js";import"./extendSxProp-9de56447.js";const f=({label:e="Label",disabled:r=!1,value:o="",fullWidth:m=!1,textAdornment:p,inputProps:d,onChange:t,...L})=>{const[N,A]=i.useState(o);return a.jsx(g,{label:e,disabled:r,variant:"outlined",value:N,onChange:c=>A(c==null?void 0:c.target.value),fullWidth:m,inputProps:d,InputProps:{autoComplete:"on",endAdornment:a.jsx(P,{position:"end",children:a.jsx("p",{children:p})})}})};try{f.displayName="TextField",f.__docgenInfo={description:"Primary UI component for user interaction",displayName:"TextField",props:{label:{defaultValue:{value:"Label"},description:"Label value of the input",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Value of theinput",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disable input interactivity",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Changes the width of the input to match the container element",name:"fullWidth",required:!1,type:{name:"boolean"}},textAdornment:{defaultValue:null,description:"Adds text value as an end adornment depending on the input value from a service",name:"textAdornment",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"Add props to the input field , used for max lenght limitation",name:"inputProps",required:!1,type:{name:"object"}},onChange:{defaultValue:null,description:"Triggers when user changes input",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const j=()=>{const[e,r]=i.useState("");return a.jsx(R,{value:e,customInput:g,label:"Amount",prefix:"$",thousandsGroupStyle:"thousand",thousandSeparator:",",decimalScale:3})},_=()=>{const[e,r]=i.useState(""),[o,m]=i.useState(!1),p=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,d=t=>{r(t),m(p.test(t))};return a.jsx(g,{label:"E-mail Input",value:e,type:"email",error:!o,helperText:!o&&"Please enter email format",onChange:t=>d(t==null?void 0:t.target.value)})},pe={component:f,title:"Components/Inputs/Text Field",tags:["autodocs"],parameters:{layout:"centered"}},n={args:{label:"Default",disabled:!1,value:"",fullWidth:!1,inputProps:{maxLength:50}}},s={args:{label:"Default",disabled:!1,value:"",fullWidth:!1,inputProps:{maxLength:50}},parameters:{docs:{source:{code:`import * as React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import TextField from '@mui/material/TextField';

const NumericFormatCustom = React.forwardRef<NumericFormatProps>(
    function NumericFormatCustom(props, ref) {
      const { onChange, ...other } = props;
  
      return (
        <NumericFormat
          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          valueIsNumericString
          prefix="$"
        />
      );
    },
  );

  interface State {
    textmask: string;
    numberformat: string;
  }
  
  const CurrencyTextField = () => {
    const [values, setValues] = React.useState<State>({
      textmask: '(100) 000-0000',
      numberformat: '1320',
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
        <TextField
          label="Currency Text Field"
          variant='outlined'
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumericFormatCustom as any,
          }}
        />
    );
  }

  export default CurrencyTextField`}}},render:e=>a.jsx(j,{...e})},l={args:{label:"First Value",disabled:!1,value:"",textAdornment:"Second Value"},parameters:{title:"E-Mail",docs:{source:{code:`import { TextField } from "@mui/material";
import { useState } from "react";

const EmailInput = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const regex =
    /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@((([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  const handleChange = (data) => {
    setValue(data);
    setIsValid(regex.test(data));
  };

  return (
    <TextField
      label="E-mail Input"
      value={value}
      type="email"
      error={!isValid}
      helperText={!isValid && "Please enter email format"}
      onChange={(event) => handleChange(event?.target.value)}
    />
  );
};

export default EmailInput;`}}},render:e=>a.jsx(_,{...e})},u={args:{label:"First Value",disabled:!1,value:"",textAdornment:"Second Value"}};var h,x,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: {
      maxLength: 50
    }
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,b,V;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: {
      maxLength: 50
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`import * as React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import TextField from '@mui/material/TextField';

const NumericFormatCustom = React.forwardRef<NumericFormatProps>(
    function NumericFormatCustom(props, ref) {
      const { onChange, ...other } = props;
  
      return (
        <NumericFormat
          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          valueIsNumericString
          prefix="$"
        />
      );
    },
  );

  interface State {
    textmask: string;
    numberformat: string;
  }
  
  const CurrencyTextField = () => {
    const [values, setValues] = React.useState<State>({
      textmask: '(100) 000-0000',
      numberformat: '1320',
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
        <TextField
          label="Currency Text Field"
          variant='outlined'
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumericFormatCustom as any,
          }}
        />
    );
  }

  export default CurrencyTextField\`
      }
    }
  },
  render: args => <CurrencyTextField {...args} />
}`,...(V=(b=s.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var F,S,y;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "First Value",
    disabled: false,
    value: '',
    textAdornment: 'Second Value'
  },
  parameters: {
    title: 'E-Mail',
    docs: {
      source: {
        code: \`import { TextField } from "@mui/material";
import { useState } from "react";

const EmailInput = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const regex =
    /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (data) => {
    setValue(data);
    setIsValid(regex.test(data));
  };

  return (
    <TextField
      label="E-mail Input"
      value={value}
      type="email"
      error={!isValid}
      helperText={!isValid && "Please enter email format"}
      onChange={(event) => handleChange(event?.target.value)}
    />
  );
};

export default EmailInput;\`
      }
    }
  },
  render: args => <EmailInput {...args} />
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var I,T,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "First Value",
    disabled: false,
    value: '',
    textAdornment: 'Second Value'
  }
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const de=["Default","Currency","Email","MultiValue"];export{s as Currency,n as Default,l as Email,u as MultiValue,de as __namedExportsOrder,pe as default};
//# sourceMappingURL=TextField.stories-4a21a07e.js.map
