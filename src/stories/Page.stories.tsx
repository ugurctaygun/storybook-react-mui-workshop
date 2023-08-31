import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Page from "../components/Layout/Page";
import { Card } from "@mui/material";

const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] ;

const meta = {
  title: "Layout/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    columns: { control: "inline-radio", options: [1, 2] },
    columnOneCards: {
      control: "inline-check",
      if: { arg: "columns", eq: 2 },
      options: ["Information Card", "Pre-Form", "Pool", "Comments"],
    },
    mainCards: {
      control: "inline-check",
      options: [
        "Form Section",
        "File Upload",
        "Items",
        "Form Section",
        "File Upload",
        "Items",
        "Comments",
      ],
    },
    arrow: {
      options: arrows, 
      mapping: arrows, 
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          ArrowUp: 'Up',
          ArrowDown: 'Down',
          ArrowLeft: 'Left',
          ArrowRight: 'Right',
        },
      },
    },
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
  // render: (args) => (
  //   <Page {...args}>
  //   </Page>
  // ),
};

export const MultiApp: Story = {
  args: {
    title: "Multi App Page",
    disableHeader: false,
    disableBreadcrumbs: false,
    loading: false,
    mainCards: [
      "Form Section",
      "File Upload",
      "Items",
      "Form Section",
      "File Upload",
      "Items",
      "Comments",
    ]
  },
  render: (args) => <Page {...args} children={<Card>APP asdad 1</Card>}></Page>,
};
