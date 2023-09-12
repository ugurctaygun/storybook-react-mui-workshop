
import type { Meta, StoryObj } from '@storybook/react';

import ChipNavigation from '../components/Navigation/ChipNavigation';

const meta = {
  component: ChipNavigation,
  title: "Components/Navigation/Chip Navigation",
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChipNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args:{
    chips : [{label: 'Home' , hash:'home'}, {label: 'Detail' , hash:'detail'}],
  }

};
