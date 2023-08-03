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
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary'
  },
};