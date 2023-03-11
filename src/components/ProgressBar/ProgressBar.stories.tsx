import { ComponentStory } from "@storybook/react";
import React from "react";
import { ProgressBar } from "./ProgressBar";

export default {
  title: "Example/ProgressBar",
  argTypes: {
    value: { type: "number" },
    max: { type: "number" },
  },
};

const BaseView: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = BaseView.bind({});
Primary.args = {
  value: 76,
  max: 100,
};