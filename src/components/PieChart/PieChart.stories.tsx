import { ComponentStory } from "@storybook/react";
import React from "react";
import { MyResponsivePie } from "./PieChart";

export default {
  title: "Example/MyResponsivePie",
  argTypes: {
    value: { type: "number" },
    max: { type: "number" },
  },
};

const BaseView: ComponentStory<typeof MyResponsivePie> = (args) => (
  <MyResponsivePie {...args} />
);

export const Primary = BaseView.bind({});
Primary.args = {
  value: 76,
  max: 100,
};
