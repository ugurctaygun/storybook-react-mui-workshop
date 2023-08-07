
import type { Meta, StoryObj } from '@storybook/react';

import TabNavigator from '../components/Navigation/TabNavigator';

const meta = {
  component: TabNavigator,
  title: "Design System/Components/Navigation",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabNavigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
   tabs : ['Test 1' , 'Test 2' ,'Test 3']
  },
};