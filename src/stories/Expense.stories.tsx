import type { Meta, StoryObj } from "@storybook/react";

import Expense from "../views/expense";

const meta = {
  component: Expense,
  title: "Views/Expense",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Expense>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
