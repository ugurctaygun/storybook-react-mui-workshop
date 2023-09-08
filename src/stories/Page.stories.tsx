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


export const MultiAppPage: Story = {
  argTypes: {
    disableHeader: { control: false },
    disableBreadcrumbs: { control: false },
    loading: { control: false },
    actions: { control: "boolean" },
    config: { control: "object" },
    horizontal: { control: "boolean" },
  },
  args: {
    title: "Multi App Page",
    horizontal: false,
    actions: true,
    config: [
      {
        title: "First App Title",
        actions: true,
        primaryButtonText: "view list",
        secondaryButtonText: "create new package",
      },
      {
        title: "Second App Title",
        actions: true,
        primaryButtonText: "view list",
        secondaryButtonText: "create new package",
      },
      {
        title: "Third App Title",
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
            alignItems: "center",
          }}
          spacing={4}
        >
          {args.config?.map((item) => (
            <Grid item>
              <AppCard
                {...item}
                actions={args.actions}
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
