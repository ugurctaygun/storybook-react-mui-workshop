import type { Meta, StoryObj } from "@storybook/react";

import Comment from "../components/Comment";
import {codeSnippet} from "../components/Comment/snippet";
import { Grid } from "@mui/material";

const meta = {
  component: Comment,
  title: "Components/Data Display/Comment",
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: codeSnippet,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isEditAble: false,
    CommentDisable: true,
    UseChipToDisplayComment: false,
    Comment: "Comment Text",
    CommentedBy: "User Name",
  },
  render: (args) => (
    <Grid style={{minWidth: 550}}>
     <Comment {...args} />
    </Grid>
   ),
};

export const Editable: Story = {
  args: {
    isEditAble: true,
    CommentDisable: false,
    UseChipToDisplayComment: false,
    Comment: "Click to edit",
    CommentedBy: "User Name",
  },
  render: (args) => (
    <Grid style={{minWidth: 550}}>
     <Comment {...args} />
    </Grid>
   ),
};

export const Status: Story = {
  args: {
    isEditAble: false,
    CommentDisable: true,
    UseChipToDisplayComment: true,
    Comment: "Status",
    CommentedBy: "User Name",
  },
  render: (args) => (
    <Grid style={{minWidth: 550}}>
     <Comment {...args} />
    </Grid>
   ),
};
