import{j as e}from"./jsx-runtime-f6d73c06.js";import{F as y}from"./index-51e716bd.js";import{P as x}from"./Page-8da854ce.js";import{S as h}from"./index-aa8722e0.js";import{C as g}from"./index-6aaf9d22.js";import{I as q}from"./index-3d6d33f3.js";import{G as r}from"./Grid-017ed63d.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";/* empty css               */import"./CardContent-e906e295.js";import"./extends-c60d6d51.js";import"./useThemeProps-94f52e98.js";import"./styled-9a968d51.js";import"./Paper-f1635e6a.js";import"./CardHeader-7afaba4f.js";import"./Typography-fdbae6ba.js";import"./extendSxProp-9de56447.js";import"./Box-fe6fd115.js";import"./TransitionGroupContext-03ffa606.js";import"./useTheme-f9895377.js";import"./useControlled-b748c5f1.js";import"./TextField-a15606ad.js";import"./Menu-325419c5.js";import"./react-is.production.min-a192e302.js";import"./Modal-9fb8aeaa.js";import"./Portal-e2d38721.js";import"./inheritsLoose-c82a83d4.js";import"./index-8bf7f4ad.js";import"./ownerWindow-48013543.js";import"./useSlotProps-eab205dd.js";import"./useId-add3311b.js";import"./debounce-517eeb3c.js";import"./MenuList-65bf41aa.js";import"./isMuiElement-783834c2.js";import"./createSvgIcon-6a267752.js";import"./GlobalStyles-88feff6a.js";import"./emotion-react.browser.esm-efcf029b.js";import"./Autocomplete-031e011b.js";import"./IconButton-17fb74f0.js";import"./ButtonBase-4efedc8f.js";import"./assertThisInitialized-081f9914.js";import"./Popper-8a444aea.js";import"./Chip-b6c17e7b.js";import"./HomeOutlined-226c3cf2.js";import"./createSvgIcon-2399051f.js";import"./index-8a658aca.js";import"./index-798a5f06.js";import"./Edit-87a978a9.js";import"./InputAdornment-3db427cd.js";import"./Button-3d342b58.js";import"./index-ef31121e.js";const i=({config:l=[]})=>{const a=t=>{switch(t.type){case"FormSection":return e.jsx(y,{formTitle:t.title,formData:t.formConfig});case"Stepper":return e.jsx(h,{stepStyle:"Button"});case"InfoCard":return e.jsx(q,{});case"Comments":return e.jsx(g,{submitByButton:!1,characterLimit:!1})}},f=t=>t.map((u,o)=>e.jsx(r,{item:!0,md:o>0?8:4,style:{display:"flex",flexDirection:"column",gap:25},children:u.map((c,d)=>e.jsx("div",{children:a(c)},d))},o));return e.jsx(x,{title:"Expense Request",children:e.jsx(r,{container:!0,spacing:4,justifyContent:"center",children:f(l)})})};try{i.displayName="Expense",i.__docgenInfo={description:"",displayName:"Expense",props:{config:{defaultValue:{value:"[]"},description:"",name:"config",required:!1,type:{name:"never[]"}}}}}catch{}const ge={component:i,title:"Views/Expense",parameters:{layout:"fullscreen"},argTypes:{}},n={args:{config:[[{title:"Advance Form",type:"FormSection",formConfig:[{title:"Expense Type",type:"autocomplete",fullWidth:!1,multiline:!1,sequence:2},{title:"Date",type:"datepicker",fullWidth:!1,multiline:!1,sequence:3},{title:"Amount",type:"textfield",fullWidth:!1,multiline:!1,sequence:1}]},{title:"Stepper",type:"Stepper"},{title:"Comments",type:"Comments"},{title:"Pool",type:"Pool"}],[{title:"Expense Item",type:"FormSection",formConfig:[{title:"Expense Reason",type:"autocomplete",fullWidth:!1,multiline:!1,sequence:2},{title:"Date",type:"datepicker",fullWidth:!1,multiline:!1,sequence:3},{title:"Amount",type:"textfield",fullWidth:!1,multiline:!1,sequence:1}]},{title:"Expense Item",type:"FormSection",formConfig:[{title:"Expense Reason",type:"autocomplete",fullWidth:!1,multiline:!1,sequence:2},{title:"Date",type:"datepicker",fullWidth:!1,multiline:!1,sequence:3},{title:"Amount",type:"textfield",fullWidth:!1,multiline:!1,sequence:1}]}]]}};var p,m,s;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(s=(m=n.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const qe=["Default"];export{n as Default,qe as __namedExportsOrder,ge as default};
//# sourceMappingURL=Expense.stories-25b609bd.js.map
