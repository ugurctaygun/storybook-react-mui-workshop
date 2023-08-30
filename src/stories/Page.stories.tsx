import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Page from "../components/Layout/Page";

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
  // render: (args) => (
  //   <Page {...args}>
  //   </Page>
  // ),
};
