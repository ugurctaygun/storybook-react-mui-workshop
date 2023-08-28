
import type { Meta, StoryObj } from '@storybook/react';

import DisplayField from '../components/DisplayField';

const meta = {
  component: DisplayField,
  title: "Components/Data Display/Display Field",
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DisplayField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDisplayField : Story = {
  args: {
    label: "Company Name",
    value: 'Arçelik A.Ş'
  },
};
