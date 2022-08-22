import { ComponentStory } from "@storybook/react";
import React from "react";
import { CardProps, Card } from "../card/Card";

export default {
  title: "Example/Card",
  argTypes: {},
};

const createCard = (args: CardProps) => {
  return <Card {...args}></Card>;
};

const Template: ComponentStory<typeof Card> = createCard;

export const Primary = Template.bind({});
Primary.args = {
  header: <div slot="header"> Header </div>,
  content: <div slot="content"> Content </div>,
};
