import type { Meta, StoryObj } from "@storybook/react";

import Expense from "../views/Expense";

const meta = {
  component: Expense,
  title: "Views/Expense",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Expense>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    config: [
      [
        {
          title: "Advance Form",
          type: "FormSection",
          formConfig: [
            {
              title: "Expense Type",
              type: "autocomplete",
              fullWidth: false,
              multiline: false,
              sequence: 2,
            },
            {
              title: "Date",
              type: "datepicker",
              fullWidth: false,
              multiline: false,
              sequence: 3,
            },
            {
              title: "Amount",
              type: "textfield",
              fullWidth: false,
              multiline: false,
              sequence: 1,
            },
          ],
        },
        {
          title: "Stepper",
          type: "Stepper",
        },
        { title: "Comments", type: "Comments" },
        { title: "Pool", type: "Pool" },
      ],
      [
        {
          title: "Expense Item",
          type: "FormSection",
          formConfig: [
            {
              title: "Expense Reason",
              type: "autocomplete",
              fullWidth: false,
              multiline: false,
              sequence: 2,
            },
            {
              title: "Date",
              type: "datepicker",
              fullWidth: false,
              multiline: false,
              sequence: 3,
            },
            {
              title: "Amount",
              type: "textfield",
              fullWidth: false,
              multiline: false,
              sequence: 1,
            },
          ],
        },
        {
          title: "Expense Item",
          type: "FormSection",
          formConfig: [
            {
              title: "Expense Reason",
              type: "autocomplete",
              fullWidth: false,
              multiline: false,
              sequence: 2,
            },
            {
              title: "Date",
              type: "datepicker",
              fullWidth: false,
              multiline: false,
              sequence: 3,
            },
            {
              title: "Amount",
              type: "textfield",
              fullWidth: false,
              multiline: false,
              sequence: 1,
            },
          ],
        }
      ],
      
    ],
  },
};
