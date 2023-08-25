import type { Meta, StoryObj } from "@storybook/react";

import Item from "../components/ItemRow";

const meta = {
  component: Item,
  title: "Design System/Components/Invoice Items Row",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
