
import type { Meta, StoryObj } from '@storybook/react';

import ToggleNavigation from '../components/Navigation/ToggleNavigation';

const meta = {
  component: ToggleNavigation,
  title: "Components/Navigation/Toggle Navigation",
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToggleNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args:{
    tabs : [{label: 'Home' , hash:'home'}, {label: 'Detail' , hash:'detail'}],
  }

};
