import type { Meta, StoryObj } from '@storybook/react';
import  Page  from '../components/Layout/Page';

const meta = {
  title: 'Design System/Layout/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
    title: "Default",
    disableHeader: false,
    disableBreadcrumbs: false,
    loading: false,
  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
