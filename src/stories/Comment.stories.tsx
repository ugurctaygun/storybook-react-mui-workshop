
import type { Meta, StoryObj } from '@storybook/react';

import Comment from '../components/Comment';

const meta = {
  component: Comment,
  title: "Design System/Components/Comment Card",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
  },
};