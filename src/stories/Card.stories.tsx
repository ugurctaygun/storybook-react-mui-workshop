import type { Meta, StoryObj } from "@storybook/react";

import CardView from "../components/Card";
import CustomCard from "../components/Card/CustomCard";

const meta = {
  title: "Design System/Components/Card",
  component: CardView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    actionArea: true,
  },
};

export const Test: Story = {
  args: {
    actionArea: false,
  },
  render: (args) => <CustomCard {...args} header={"adasd"} />,
};
