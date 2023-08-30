import type { Meta, StoryObj } from "@storybook/react";

import Item from "../components/ItemRow";

const meta = {
  component: Item,
  title: "Components/Data Display/Row",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    actionType: { control: 'radio', options: ['Icons', 'Menu']},
    hasMultiSelect: {control: 'boolean'}
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actionType: "Icons",
    hasMultiSelect: false
  },
};
