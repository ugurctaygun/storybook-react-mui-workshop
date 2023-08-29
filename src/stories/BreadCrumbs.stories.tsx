
import type { Meta, StoryObj } from '@storybook/react';

import BreadCrumbs from '../components/Navigation/BreadCrumbs';

const meta = {
  component: BreadCrumbs,
  title: "Components/Navigation/Breadcrumbs",
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   type: { control: 'select', options: ['tabs', 'breadcrumb']},
  //   tabs: {  if: { arg: 'type', eq: 'tabs' },}
  // }
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args:{
  }

};
