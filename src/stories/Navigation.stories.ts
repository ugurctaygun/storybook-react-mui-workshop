
import type { Meta, StoryObj } from '@storybook/react';

import {Navigation} from '../components/Navigation';

const meta = {
  component: Navigation,
  title: "Components/Navigation",
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: ['tabs', 'breadcrumb']},
    tabs: {  if: { arg: 'type', eq: 'tabs' },}
  }
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Breadcrumbs : Story = {
  args: {
   type: 'breadcrumb'
  },
};

export const TabNavigation : Story = {
  args: {
   tabs : [{label: 'Home' , hash:'home'}, {label: 'Detail' , hash:'detail'}],
   type: 'tabs'
  },
};