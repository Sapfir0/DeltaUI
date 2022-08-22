import { ProgressBar } from "./ProgressBar";
import { ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "Example/ProgressBar",
  argTypes: {
    value: { type: "number" },
    max: { type: "number" },
  },
};

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 76,
  max: 100,
};
