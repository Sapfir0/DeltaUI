import { Icon } from "./icon";
import React from "react";
import { ComponentStory } from "@storybook/react";
import { getEnumValues } from "../../utils/enum";
import { IconNames } from "../../typings/iconNames";

export default {
  title: "Example/Icon",
  argTypes: {
    name: { options: getEnumValues(IconNames), control: { type: "select" } },
  },
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({ name: "Empty" });
Primary.args = {
  name: IconNames.Done,
};
