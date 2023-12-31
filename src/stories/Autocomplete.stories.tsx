
import type { Meta, StoryObj } from '@storybook/react';

import Autocomplete from '../components/Inputs/Autocomplete';

const meta = {
  component: Autocomplete,
  title: "Components/Inputs/Autocomplete",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
    label: "Default",
    disabled: false,
    fullWidth: false
  },
};