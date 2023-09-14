import type { Meta, StoryObj } from "@storybook/react";

import Items from "../components/Items";

const meta = {
  component: Items,
  title: "Layout/Item List",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    hasMultiSelect: {control: 'boolean'},
    actionType: { control: 'radio', options: ['Icons', 'Menu']},
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Items>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasMultiSelect: false,
    actionType: 'Icons',
    viewTotal: true
  },
};

export const MultiSelect: Story = {
  args: {
    hasMultiSelect: true,
    actionType: 'Menu'
  },
};
