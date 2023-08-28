import type { Meta, StoryObj } from "@storybook/react";

import Items from "../components/Items";

const meta = {
  component: Items,
  title: "Design System/Layout/Items",
  parameters: {
    layout: "centered",
  },
  argTypes: {
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Items>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
