
import type { Meta, StoryObj } from '@storybook/react';

import Steps from '../components/Stepper';

const meta = {
  component: Steps,
  title: "Components/Data Display/Stepper",
  parameters: {
    layout: 'centered',
  },
  argTypes:{
    stepStyle: { control: 'select', options: ['Button', 'Label']}
},
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
      currentStep: 0,
      stepStyle: 'Button'
  },
};