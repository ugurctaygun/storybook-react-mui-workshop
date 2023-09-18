import{j as e}from"./jsx-runtime-f6d73c06.js";import{F as x}from"./index-2b5a2df5.js";import{P as h}from"./Page-1b2f7f49.js";import{S as g}from"./index-1b491bec.js";import{C}from"./index-f12c4406.js";import{D as n}from"./index-20d0a639.js";import{G as l}from"./Grid-c465b22d.js";import{C as q,a as W}from"./CardContent-c647fcdf.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";/* empty css               */import"./CardHeader-d34cc0e4.js";import"./useThemeProps-08dea6dc.js";import"./extends-c60d6d51.js";import"./styled-4d22d7a6.js";import"./Typography-b5179712.js";import"./extendSxProp-6a5b26b1.js";import"./Box-b36ccd36.js";import"./TransitionGroupContext-03ffa606.js";import"./useTheme-7aaf0f9b.js";import"./useControlled-b748c5f1.js";import"./TextField-7dc1ffe8.js";import"./Menu-29a0c345.js";import"./react-is.production.min-a192e302.js";import"./Modal-14bd54e8.js";import"./Portal-beb556f1.js";import"./inheritsLoose-c82a83d4.js";import"./index-8bf7f4ad.js";import"./ownerWindow-48013543.js";import"./useSlotProps-8ce23cf8.js";import"./useId-add3311b.js";import"./Paper-1303deca.js";import"./debounce-517eeb3c.js";import"./MenuList-893237d2.js";import"./isMuiElement-783834c2.js";import"./createSvgIcon-dc53fbb0.js";import"./GlobalStyles-1c9c0a3f.js";import"./emotion-react.browser.esm-137a7574.js";import"./Autocomplete-96ec3ec9.js";import"./IconButton-6594f49f.js";import"./ButtonBase-df602491.js";import"./assertThisInitialized-081f9914.js";import"./Popper-09af8365.js";import"./Chip-6aff1848.js";import"./HomeOutlined-2234e0ed.js";import"./createSvgIcon-16139344.js";import"./index-9e060e24.js";import"./index-cfc6c778.js";import"./Edit-7b42dc59.js";import"./InputAdornment-7483ed21.js";import"./Button-b40740e0.js";const j=()=>e.jsx(l,{children:e.jsx(q,{children:e.jsxs(W,{style:{display:"grid",gridTemplateColumns:"50% 50%"},children:[e.jsx(n,{label:"Requestor",value:"User Name"}),e.jsx(n,{label:"Date",value:"12.12.2022"}),e.jsx(n,{label:"Total Amount",value:"TL 300"}),e.jsx(n,{label:"Status",value:"Waiting For Approval"})]})})}),o=({config:r=[]})=>{const f=t=>{switch(t.type){case"FormSection":return e.jsx(x,{formTitle:t.title,formData:t.formConfig});case"Stepper":return e.jsx(g,{stepStyle:"Button"});case"InfoCard":return e.jsx(j,{});case"Comments":return e.jsx(C,{submitByButton:!1,characterLimit:!1})}},u=t=>t.map((c,s)=>e.jsx(l,{item:!0,md:s>0?8:4,style:{display:"flex",flexDirection:"column",gap:25},children:c.map((d,y)=>e.jsx("div",{children:f(d)},y))},s));return e.jsx(h,{title:"Expense Request",children:e.jsx(l,{container:!0,spacing:4,justifyContent:"center",children:u(r)})})};try{o.displayName="Expense",o.__docgenInfo={description:"",displayName:"Expense",props:{config:{defaultValue:{value:"[]"},description:"",name:"config",required:!1,type:{name:"never[]"}}}}}catch{}const qe={component:o,title:"Views/Expense",parameters:{layout:"fullscreen"},argTypes:{}},i={args:{config:[[{title:"Advance Form",type:"FormSection",formConfig:[{title:"Expense Type",type:"autocomplete",fullWidth:!1,multiline:!1,sequence:2},{title:"Date",type:"datepicker",fullWidth:!1,multiline:!1,sequence:3},{title:"Amount",type:"textfield",fullWidth:!1,multiline:!1,sequence:1}]},{title:"Stepper",type:"Stepper"},{title:"Comments",type:"Comments"},{title:"Pool",type:"Pool"}],[{title:"Expense Item",type:"FormSection",formConfig:[{title:"Expense Reason",type:"autocomplete",fullWidth:!1,multiline:!1,sequence:2},{title:"Date",type:"datepicker",fullWidth:!1,multiline:!1,sequence:3},{title:"Amount",type:"textfield",fullWidth:!1,multiline:!1,sequence:1}]},{title:"Expense Item",type:"FormSection",formConfig:[{title:"Expense Reason",type:"autocomplete",fullWidth:!1,multiline:!1,sequence:2},{title:"Date",type:"datepicker",fullWidth:!1,multiline:!1,sequence:3},{title:"Amount",type:"textfield",fullWidth:!1,multiline:!1,sequence:1}]}]]}};var p,m,a;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    config: [[{
      title: "Advance Form",
      type: "FormSection",
      formConfig: [{
        title: "Expense Type",
        type: "autocomplete",
        fullWidth: false,
        multiline: false,
        sequence: 2
      }, {
        title: "Date",
        type: "datepicker",
        fullWidth: false,
        multiline: false,
        sequence: 3
      }, {
        title: "Amount",
        type: "textfield",
        fullWidth: false,
        multiline: false,
        sequence: 1
      }]
    }, {
      title: "Stepper",
      type: "Stepper"
    }, {
      title: "Comments",
      type: "Comments"
    }, {
      title: "Pool",
      type: "Pool"
    }], [{
      title: "Expense Item",
      type: "FormSection",
      formConfig: [{
        title: "Expense Reason",
        type: "autocomplete",
        fullWidth: false,
        multiline: false,
        sequence: 2
      }, {
        title: "Date",
        type: "datepicker",
        fullWidth: false,
        multiline: false,
        sequence: 3
      }, {
        title: "Amount",
        type: "textfield",
        fullWidth: false,
        multiline: false,
        sequence: 1
      }]
    }, {
      title: "Expense Item",
      type: "FormSection",
      formConfig: [{
        title: "Expense Reason",
        type: "autocomplete",
        fullWidth: false,
        multiline: false,
        sequence: 2
      }, {
        title: "Date",
        type: "datepicker",
        fullWidth: false,
        multiline: false,
        sequence: 3
      }, {
        title: "Amount",
        type: "textfield",
        fullWidth: false,
        multiline: false,
        sequence: 1
      }]
    }]]
  }
}`,...(a=(m=i.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const We=["Default"];export{i as Default,We as __namedExportsOrder,qe as default};
//# sourceMappingURL=Expense.stories-021668f7.js.map
