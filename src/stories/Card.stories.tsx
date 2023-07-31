import type { Meta, StoryObj } from "@storybook/react";

import CardView from "../components/Card";

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
