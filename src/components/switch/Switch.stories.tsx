import { Switch } from "./switch";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Example/Switch",
  argTypes: {
    onClick: { action: "onClick" },
    disabled: { type: "boolean" },
  },
};

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const BaseSwitch = Template.bind({ text: "Empty" });
BaseSwitch.args = {
  disabled: false,
};
