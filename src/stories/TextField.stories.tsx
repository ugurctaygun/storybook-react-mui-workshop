
import type { Meta, StoryObj } from '@storybook/react';

import TextField from '../components/Inputs/TextField';

const meta = {
  component: TextField,
  title: "Design System/Components/Text Field",
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTextField : Story = {
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: { maxLength: 50 },
  },
};

export const MultiValueTextField : Story = {
  args: {
    label: "First Value",
    disabled: false,
    value: '',
    textAdornment: 'Second Value',
  },
};
