
import type { Meta, StoryObj } from '@storybook/react';

import AppCard from '../components/AppCard';
import AppActionCard from '../components/AppCard/AppActionCard';

const meta = {
  component: AppCard,
  title: "Components/Navigation/App Navigation",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
    actions: false
  },
};

export const WithActions : Story = {
  args: {
    actions: true
  },
};