import type { Meta, StoryObj } from "@storybook/react";
import Comments from "../components/Comments";
import { Grid } from "@mui/material";

const meta = {
  component: Comments,
  title: "Layout/Comments",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    submitByButton: { control: 'boolean'},
    characterLimit: { control: 'boolean'},
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Comments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    submitByButton: false,
    characterLimit: false
  },
  render: (args) => (
   <Grid style={{minWidth: 550}}>
    <Comments {...args} />
   </Grid>
  ),
};

export const ButtonSubmit: Story = {
  args: {
    submitByButton: true,
    characterLimit: true
  },
  render: (args) => (
    <Grid style={{minWidth: 550}}>
     <Comments {...args} />
    </Grid>
   ),
};

