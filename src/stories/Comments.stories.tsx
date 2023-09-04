import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import * as CommentStory from "./Comment.stories";

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
  }
};

export const ButtonSubmit: Story = {
  args: {
    submitByButton: true,
    characterLimit: true
  }
};

