import{j as e}from"./jsx-runtime-f6d73c06.js";import{F as v}from"./index-51e716bd.js";import{P as x}from"./Page-8da854ce.js";import{S as P}from"./index-aa8722e0.js";import{C as _}from"./index-6aaf9d22.js";import{I as j}from"./index-3d6d33f3.js";import{G as i}from"./Grid-017ed63d.js";import{C as f,a as y}from"./CardContent-e906e295.js";import{C as A}from"./CardHeader-7afaba4f.js";import{T as N}from"./TextField-a15606ad.js";import{D as S}from"./index-ef31121e.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";/* empty css               */import"./Box-fe6fd115.js";import"./useThemeProps-94f52e98.js";import"./extends-c60d6d51.js";import"./styled-9a968d51.js";import"./extendSxProp-9de56447.js";import"./TransitionGroupContext-03ffa606.js";import"./useTheme-f9895377.js";import"./useControlled-b748c5f1.js";import"./useSlotProps-eab205dd.js";import"./Autocomplete-031e011b.js";import"./createSvgIcon-6a267752.js";import"./IconButton-17fb74f0.js";import"./ButtonBase-4efedc8f.js";import"./emotion-react.browser.esm-efcf029b.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./Popper-8a444aea.js";import"./Portal-e2d38721.js";import"./index-8bf7f4ad.js";import"./ownerWindow-48013543.js";import"./Paper-f1635e6a.js";import"./useId-add3311b.js";import"./Chip-b6c17e7b.js";import"./HomeOutlined-226c3cf2.js";import"./react-is.production.min-a192e302.js";import"./Typography-fdbae6ba.js";import"./createSvgIcon-2399051f.js";import"./debounce-517eeb3c.js";import"./isMuiElement-783834c2.js";import"./index-8a658aca.js";import"./index-798a5f06.js";import"./Edit-87a978a9.js";import"./InputAdornment-3db427cd.js";import"./Menu-325419c5.js";import"./Modal-9fb8aeaa.js";import"./MenuList-65bf41aa.js";import"./Button-3d342b58.js";import"./GlobalStyles-88feff6a.js";const l=({title:r="Pool",options:o=[{name:"Manager Approver Pool",value:"Manager Name"},{name:"Accounting Approver Pool",value:"Accountant Name"}]})=>e.jsx(i,{container:!0,children:e.jsxs(f,{style:{width:"100%"},children:[e.jsx(A,{title:r}),e.jsx(y,{children:o.map((a,t)=>e.jsx(N,{label:a.name,value:a.value,disabled:!0,fullWidth:!0,style:{marginBottom:15}},t))})]})});try{l.displayName="Pool",l.__docgenInfo={description:"",displayName:"Pool",props:{title:{defaultValue:{value:"Pool"},description:"",name:"title",required:!1,type:{name:"string"}},options:{defaultValue:{value:`[\r
    { name: "Manager Approver Pool", value: "Manager Name" },\r
    { name: "Accounting Approver Pool", value: "Accountant Name" },\r
  ]`},description:"",name:"options",required:!1,type:{name:"{ name: string; value: string; }[]"}}}}}catch{}const p=({title:r="Purchase Order",options:o=[{name:"Company Name",value:"Arcelik"},{name:"Company Code",value:"046"}]})=>e.jsx(i,{container:!0,children:e.jsx(f,{style:{width:"100%"},children:e.jsx(y,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",padding:0},children:o.map((a,t)=>e.jsx(S,{label:a.name,value:a.value},t))})})});try{p.displayName="TagCard",p.__docgenInfo={description:"",displayName:"TagCard",props:{title:{defaultValue:{value:"Purchase Order"},description:"",name:"title",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[{name: 'Company Name' , value: 'Arcelik'},{name: 'Company Code' , value: '046'}]"},description:"",name:"options",required:!1,type:{name:"{ name: string; value: string; }[]"}}}}}catch{}const s=({config:r=[]})=>{const o=t=>{switch(t.type){case"FormSection":return e.jsx(v,{formTitle:t.title,formData:t.formConfig});case"Stepper":return e.jsx(P,{stepStyle:"Button"});case"InfoCard":return e.jsx(j,{});case"Comments":return e.jsx(_,{submitByButton:!1,characterLimit:!1});case"Pool":return e.jsx(l,{title:"Approver Pool",options:[{name:"Manager Approver Pool",value:"Manager Name"},{name:"Accounting Approver Pool",value:"Accountant Name"}]});case"TagCard":return e.jsx(p,{})}},a=t=>t.map((g,m)=>e.jsx(i,{item:!0,md:m>0?8:4,style:{display:"flex",flexDirection:"column",gap:25},children:g.map((C,h)=>e.jsx("div",{children:o(C)},h))},m));return e.jsx(x,{title:"Purchase Order Request",children:e.jsx(i,{container:!0,spacing:4,justifyContent:"center",children:a(r)})})};try{s.displayName="PurchaseOrder",s.__docgenInfo={description:"",displayName:"PurchaseOrder",props:{config:{defaultValue:{value:"[]"},description:"",name:"config",required:!1,type:{name:"never[]"}}}}}catch{}const Ne={component:s,title:"Views/PurchaseOrder",parameters:{layout:"fullscreen"},argTypes:{}},n={args:{config:[[{title:"Information Card",type:"TagCard"},{title:"Approver Pool",type:"Pool"}],[{title:"Purchase Order",type:"FormSection",formConfig:[{title:"Expense Reason",type:"autocomplete",fullWidth:!1,multiline:!1,sequence:2},{title:"Date",type:"datepicker",fullWidth:!1,multiline:!1,sequence:3},{title:"Amount",type:"textfield",fullWidth:!1,multiline:!1,sequence:1}]},{title:"Stepper",type:"Stepper"},{title:"Comments",type:"Comments"}]]}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    config: [[{
      title: "Information Card",
      type: "TagCard"
    }, {
      title: "Approver Pool",
      type: "Pool"
    }], [{
      title: "Purchase Order",
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
      title: "Stepper",
      type: "Stepper"
    }, {
      title: "Comments",
      type: "Comments"
    }]]
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Se=["Default"];export{n as Default,Se as __namedExportsOrder,Ne as default};
//# sourceMappingURL=PurchaseOrder.stories-b80b9e8c.js.map
