import type { Meta, StoryObj } from "@storybook/react";

import DateFormat from "../components/Formats/DateFormat";
import DisplayField from "../components/DisplayField";
import moment from "moment";
import { Title } from "@storybook/blocks";

const meta = {
  title: "Components/Data Display/Date",
  component: DateFormat,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DateFormat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDate: Story = {
  parameters: {
    docs: {
      source: {
        code: ".local().format('L')",
      },
    },
  },
  render: () => (
    <>
      <DisplayField
        label={"Default Date Display"}
        value={moment.utc(new Date()).local().format('L')}
      />
    </>
  ),
};


export const Detailed: Story = {
  parameters: {
    docs: {
      source: {
        code: ".local().format('LLL')",
      },
    },
  },
  render: () => (
    <>
      <DisplayField
        label={"Detailed Date Display"}
        value={moment.utc(new Date()).local().format("LLL")}
      />
    </>
  ),
};

