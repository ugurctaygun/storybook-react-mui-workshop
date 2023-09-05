import type { Meta, StoryObj } from "@storybook/react";
import FormSection from "../components/FormSection";

const meta = {
  component: FormSection,
  title: "Layout/Form Section",
  parameters: {
    layout: "centered",
  },
  argTypes: {
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
};