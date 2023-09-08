import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Page from "../components/Layout/Page";
import { Card, Grid, TextField, Typography } from "@mui/material";
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import Items from "../components/Items";
import AppCard from "../components/AppCard";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";

const arrows = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

const meta = {
  title: "Layout/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default",
    disableHeader: false,
    disableBreadcrumbs: false,
    loading: false,
  },
};

// export const DetailPage: Story = {
//   argTypes: {
//     mainCards: {
//       control: "inline-check",
//       options: [
//         "Form Section",
//         "File Upload",
//         "Items",
//         "Form Section",
//         "File Upload",
//         "Items",
//         "Comments",
//       ],
//     },
//   },
//   args: {
//     title: "Detail Page",
//     disableHeader: false,
//     disableBreadcrumbs: false,
//     loading: false,
//     mainCards: [],
//   },
//   render: (args) => (
//     <Page
//       {...args}
//       children={
//         <Grid container spacing={2}>
//           <Grid item sm={4}>
//             {args.mainCards.includes("Comments") && (
//               <Comments>
//                 <Comment UseChipToDisplayComment={true} isEditAble={false} Comment="Status" />
//               </Comments>
//             )}
//           </Grid>
//           <Grid item sm={8}>
//           {args.mainCards.includes("Form Section") && (
//              <Card style={{padding: 25}}>
//               <Typography>Form Section</Typography>
//               <TextField label='test'/>
//              </Card>
//             )}
//           </Grid>
//         </Grid>
//       }
//     ></Page>
//   ),
// };

export const MultiAppPage: Story = {
  argTypes: {
    disableHeader: { control: false },
    disableBreadcrumbs: { control: false },
    loading: { control: false },
    config: { control: "object" },
    horizontal: { control: "boolean" },
  },
  args: {
    title: "Multi App Page",
    horizontal: false,
    config: [
      {
        title: "option 1",
        actions: true,
        primaryButtonText: "view list",
        secondaryButtonText: "create new package",
      },
      {
        title: "option 2",
        actions: true,
        primaryButtonText: "view list",
        secondaryButtonText: "create new package",
      },
      {
        title: "option 3",
        actions: true,
        primaryButtonText: "view list",
        secondaryButtonText: "create new package",
      },
    ],
  },
  render: (args) => (
    <Page
      {...args}
      children={
        <Grid
          container
          justifyContent={"center"}
          style={{
            maxWidth: 1000,
            margin: "-40px auto",
            flexDirection: args.horizontal ? "column" : "row",
            alignItems: 'center'
          }}
          spacing={4}
        >
          {args.config?.map((item) => (
            <Grid item>
              <AppCard
                {...item}
                horizontal={args.horizontal}
                icon={
                  <AirplanemodeActiveIcon color="primary" fontSize="large" />
                }
              />
            </Grid>
          ))}
        </Grid>
      }
    ></Page>
  ),
};
