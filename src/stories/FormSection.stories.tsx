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
    formData : [  {
      title: "Description",
      type: "textfield",
      fullWidth: true,
      multiline: true,
      sequence: 4,
    },
    {
      title: "Options",
      type: "autocomplete",
      fullWidth: false,
      multiline: false,
      sequence: 2,
    },
    {
      title: "Date",
      type: "datepicker",
      fullWidth: false,
      multiline: false,
      sequence: 3,
    },
    {
      title: "Amount",
      type: "currency",
      fullWidth: false,
      multiline: false,
      sequence: 1,
    }
  ]
  }
};