import type { Meta, StoryObj } from '@storybook/react';

import ChipComponent from '../components/Chip';

const meta = {
  title: 'Components/Data Display/Chip',
  component: ChipComponent,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `import Chip from "@mui/material/Chip";

<Chip
  color={color}
  variant={variant}
  label={label}>
</Chip>`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'error', 'success', 'warning']},
    variant: { control: 'radio', options: ['default', 'outlined']},
    textTransform: { control: 'radio', options: ['initial', 'capitalize' , 'uppercase']},
  },
} satisfies Meta<typeof ChipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Status Message',
    color: 'primary',
    variant: 'default'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Status Message',
    color: 'primary',
    variant: 'outlined',
    textTransform: 'uppercase'
  },
};

export const Success: Story = {
  args: {
    label: 'Completed',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Waiting for approval',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Rejected',
    color: 'error',
  },
};
