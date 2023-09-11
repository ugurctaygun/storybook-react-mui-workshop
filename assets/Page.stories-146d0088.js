import{j as e}from"./useThemeProps-3da43970.js";import{P as u}from"./Page-8328a4d8.js";import{A as x}from"./index-f70934db.js";import{r as v,i as y}from"./createSvgIcon-4184d37c.js";import{G as i}from"./Grid-1e5e4966.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-a4d559dd.js";import"./HomeOutlined-b11d6e5f.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-f3b6fc62.js";import"./ButtonBase-df20e9df.js";import"./emotion-react.browser.esm-3e506388.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-5ba66160.js";import"./Typography-f6b7e65d.js";import"./extendSxProp-52ff1403.js";import"./useSlotProps-42155a80.js";import"./Box-c864e0b4.js";/* empty css               */import"./Add-2d48e570.js";import"./CardContent-50320bc5.js";import"./Paper-a4bd20c8.js";import"./IconButton-f0104e51.js";import"./Button-61e90e28.js";import"./useId-a4495471.js";import"./debounce-517eeb3c.js";import"./isMuiElement-402c1219.js";import"./ownerWindow-48013543.js";import"./useControlled-3e5b2082.js";import"./useTheme-81e70d49.js";var n={},T=y;Object.defineProperty(n,"__esModule",{value:!0});var f=n.default=void 0,b=T(v()),h=e,A=(0,b.default)((0,h.jsx)("path",{d:"M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"}),"AirplanemodeActive");f=n.default=A;const re={title:"Layout/Page",component:u,parameters:{layout:"fullscreen"}},r={args:{title:"Default",disableHeader:!1,disableBreadcrumbs:!1,loading:!1}},o={argTypes:{disableHeader:{control:!1},disableBreadcrumbs:{control:!1},loading:{control:!1},actions:{control:"boolean"},config:{control:"object"},horizontal:{control:"boolean"}},args:{title:"Multi App Page",horizontal:!1,actions:!0,config:[{title:"First App Title",actions:!0,primaryButtonText:"view list",secondaryButtonText:"create new package"},{title:"Second App Title",actions:!0,primaryButtonText:"view list",secondaryButtonText:"create new package"},{title:"Third App Title",actions:!0,primaryButtonText:"view list",secondaryButtonText:"create new package"}]},render:t=>{var a;return e.jsx(u,{...t,children:e.jsx(i,{container:!0,justifyContent:"center",style:{maxWidth:1e3,margin:"-40px auto",flexDirection:t.horizontal?"column":"row",alignItems:"center"},spacing:4,children:(a=t.config)==null?void 0:a.map(g=>e.jsx(i,{item:!0,children:e.jsx(x,{...g,actions:t.actions,horizontal:t.horizontal,icon:e.jsx(f,{color:"primary",fontSize:"large"})})}))})})}};var l,s,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Default",
    disableHeader: false,
    disableBreadcrumbs: false,
    loading: false
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    disableHeader: {
      control: false
    },
    disableBreadcrumbs: {
      control: false
    },
    loading: {
      control: false
    },
    actions: {
      control: "boolean"
    },
    config: {
      control: "object"
    },
    horizontal: {
      control: "boolean"
    }
  },
  args: {
    title: "Multi App Page",
    horizontal: false,
    actions: true,
    config: [{
      title: "First App Title",
      actions: true,
      primaryButtonText: "view list",
      secondaryButtonText: "create new package"
    }, {
      title: "Second App Title",
      actions: true,
      primaryButtonText: "view list",
      secondaryButtonText: "create new package"
    }, {
      title: "Third App Title",
      actions: true,
      primaryButtonText: "view list",
      secondaryButtonText: "create new package"
    }]
  },
  render: args => <Page {...args} children={<Grid container justifyContent={"center"} style={{
    maxWidth: 1000,
    margin: "-40px auto",
    flexDirection: args.horizontal ? "column" : "row",
    alignItems: "center"
  }} spacing={4}>\r
          {args.config?.map(item => <Grid item>\r
              <AppCard {...item} actions={args.actions} horizontal={args.horizontal} icon={<AirplanemodeActiveIcon color="primary" fontSize="large" />} />\r
            </Grid>)}\r
        </Grid>}></Page>
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const oe=["Default","MultiAppPage"];export{r as Default,o as MultiAppPage,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=Page.stories-146d0088.js.map
