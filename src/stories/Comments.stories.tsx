
import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import Comments from '../components/Comments';
import Comment from '../components/Comment';
import * as CommentStory from './Comment.stories';

const meta = {
  component: Comments,
  title: "Layout/Comments",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Comments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
  },
  render: () =>  (
    <>
      <Comments>
      <Comment {...CommentStory.Status.args} />
      </Comments>
    
    </>

  )
};