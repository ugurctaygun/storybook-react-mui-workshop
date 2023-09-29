import{j as e}from"./jsx-runtime-f6d73c06.js";import{P as u}from"./Page-8da854ce.js";import{A as x}from"./index-ae2484a8.js";import{r as v,i as y}from"./createSvgIcon-2399051f.js";import{G as i}from"./Grid-017ed63d.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./styled-9a968d51.js";import"./useThemeProps-94f52e98.js";import"./extends-c60d6d51.js";import"./HomeOutlined-226c3cf2.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-6a267752.js";import"./ButtonBase-4efedc8f.js";import"./emotion-react.browser.esm-efcf029b.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-03ffa606.js";import"./Typography-fdbae6ba.js";import"./extendSxProp-9de56447.js";import"./useSlotProps-eab205dd.js";import"./Box-fe6fd115.js";/* empty css               */import"./Add-047f9ae7.js";import"./CardContent-e906e295.js";import"./Paper-f1635e6a.js";import"./IconButton-17fb74f0.js";import"./Button-3d342b58.js";import"./useId-add3311b.js";import"./debounce-517eeb3c.js";import"./isMuiElement-783834c2.js";import"./ownerWindow-48013543.js";import"./useControlled-b748c5f1.js";import"./useTheme-f9895377.js";var n={},T=y;Object.defineProperty(n,"__esModule",{value:!0});var f=n.default=void 0,b=T(v()),h=e,A=(0,b.default)((0,h.jsx)("path",{d:"M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"}),"AirplanemodeActive");f=n.default=A;const oe={title:"Layout/Page",component:u,parameters:{layout:"fullscreen"}},r={args:{title:"Default",disableHeader:!1,disableBreadcrumbs:!1,loading:!1}},o={argTypes:{disableHeader:{control:!1},disableBreadcrumbs:{control:!1},loading:{control:!1},actions:{control:"boolean"},config:{control:"object"},horizontal:{control:"boolean"}},args:{title:"Multi App Page",horizontal:!1,actions:!0,config:[{title:"First App Title",actions:!0,primaryButtonText:"view list",secondaryButtonText:"create new package"},{title:"Second App Title",actions:!0,primaryButtonText:"view list",secondaryButtonText:"create new package"},{title:"Third App Title",actions:!0,primaryButtonText:"view list",secondaryButtonText:"create new package"}]},render:t=>{var a;return e.jsx(u,{...t,children:e.jsx(i,{container:!0,justifyContent:"center",style:{maxWidth:1e3,margin:"-40px auto",flexDirection:t.horizontal?"column":"row",alignItems:"center"},spacing:4,children:(a=t.config)==null?void 0:a.map(g=>e.jsx(i,{item:!0,children:e.jsx(x,{...g,actions:t.actions,horizontal:t.horizontal,icon:e.jsx(f,{color:"primary",fontSize:"large"})})}))})})}};var l,s,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ne=["Default","MultiAppPage"];export{r as Default,o as MultiAppPage,ne as __namedExportsOrder,oe as default};
//# sourceMappingURL=Page.stories-ed853e44.js.map
