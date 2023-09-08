
import type { Meta, StoryObj } from '@storybook/react';

import Dialog from '../components/Dialog';

const meta = {
  component: Dialog,
  title: "Components/Feedback/Dialog",
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
  },
};