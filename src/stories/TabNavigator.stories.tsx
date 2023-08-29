
import type { Meta, StoryObj } from '@storybook/react';

import TabNavigator from '../components/Navigation/TabNavigator';

const meta = {
  component: TabNavigator,
  title: "Components/Navigation/Tab Navigator",
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   type: { control: 'select', options: ['tabs', 'breadcrumb']},
  //   tabs: {  if: { arg: 'type', eq: 'tabs' },}
  // }
} satisfies Meta<typeof TabNavigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args:{
    tabs : [{label: 'Home' , hash:'home'}, {label: 'Detail' , hash:'detail'}],
  }

};
