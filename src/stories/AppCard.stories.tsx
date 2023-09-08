import type { Meta, StoryObj } from "@storybook/react";

import AppCard from "../components/AppCard";
import AppActionCard from "../components/AppCard/AppActionCard";

const meta = {
  component: AppCard,
  title: "Components/Navigation/App Navigation",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    actions: { control: "boolean" },
    horizontal: {
      control: "boolean",
      if: { arg: "actions", truthy: true },
      value: false,
    },
    primaryButtonColor: {
      control: "color",
      if: { arg: "actions", truthy: true },
    },
    primaryButtonText: {
      control: "text",
      if: { arg: "actions", truthy: true },
    },
    secondaryButtonText: {
      control: "text",
      if: { arg: "actions", truthy: true },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: false,
    horizontal: false,
  },
};

export const WithActions: Story = {
  args: {
    actions: true,
    horizontal: false,
  },
};
