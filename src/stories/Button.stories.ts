import type { Meta, StoryObj } from '@storybook/react';

import {Button} from '../components/Buttons'


const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'radio', options: ['primary','secondary', 'error', 'success', 'warning']},
    variant: { control: 'radio', options: ['text', 'outlined','contained']},
    type: { control: 'radio', options: ['default', 'add','group']},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary',
    type: 'default'
  },
};

export const Warning: Story = {
  args: {
    label: 'Validate',
    variant: 'outlined',
    color: 'warning',
    type: 'default'
  },
};

export const Error: Story = {
  args: {
    label: 'Reject',
    variant: 'outlined',
    color: 'error',
    type: 'default'
  },
};

export const Add: Story = {
  args: {
    label: 'Add New',
    color: 'primary',
    type: 'add'
  },
};

export const Delete: Story = {
  args: {
    label: 'Delete',
    color: 'error',
    variant: 'outlined',
    type: 'default',
    icon : true
  },
};

export const Group: Story = {
  args: {
    label: 'Button Group',
    color: 'primary',
    type: 'group'
  },
};

