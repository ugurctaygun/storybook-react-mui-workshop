
import type { Meta, StoryObj } from '@storybook/react';

import Comments from '../components/Comments';

const meta = {
  component: Comments,
  title: "Design System/Layout/Comments",
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
};