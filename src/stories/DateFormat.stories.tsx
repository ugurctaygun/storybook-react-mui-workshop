import type { Meta, StoryObj } from '@storybook/react';

import DateFormat from '../components/Formats/DateFormat';

const meta = {
  title: 'Formatting Standards/Date',
  component: DateFormat,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateFormat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDate: Story = {
  args: {
  },
};

