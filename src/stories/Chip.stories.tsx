import type { Meta, StoryObj } from '@storybook/react';

import ChipComponent from '../components/Chip';

const meta = {
  title: 'Design System/Components/Chip',
  component: ChipComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'radio', options: ['primary', 'error', 'success', 'warning']},
    variant: { control: 'radio', options: ['default', 'outlined']},
  },
} satisfies Meta<typeof ChipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Chip',
    color: 'primary',
    variant: 'default'
  },
};

export const Success: Story = {
  args: {
    label: 'Completed',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Waiting for approval',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Rejected',
    color: 'error',
  },
};
