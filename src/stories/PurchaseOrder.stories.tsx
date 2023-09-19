import type { Meta, StoryObj } from "@storybook/react";

import PurchaseOrder from "../views/PurchaseOrder";

const meta = {
  component: PurchaseOrder,
  title: "Views/PurchaseOrder",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof PurchaseOrder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    config: [
      [
        {
          title: "Information Card",
          type: "TagCard",
        },
        {
          title: "Approver Pool",
          type: "Pool",
        },
      ],
      [
        {
          title: "Purchase Order",
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
          title: "Stepper",
          type: "Stepper",
        },
        { title: "Comments", type: "Comments" },
        { title: "Pool", type: "Pool" },
      ],
    ],
  },
};
