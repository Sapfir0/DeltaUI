import { ComponentStory } from "@storybook/react";
import React from "react";
import { ICardProps, Card } from "./Card";
import { Statement } from "../Statement";
import { Switch } from "../Switch";

export default {
  title: "Example/Card",
  argTypes: {},
};

const createCard = (args: ICardProps) => {
  return <Card {...args}></Card>;
};

const Template: ComponentStory<typeof Card> = createCard;

export const Primary = Template.bind({});
Primary.args = {
  header: <div slot="header"> Header </div>,
  children: <div slot="content"> Content </div>,
};


const StatementCard: ComponentStory<typeof Card> = createCard;

export const StatementCardComponent = StatementCard.bind({});
StatementCardComponent.args = {
  header: 'Inside',
  children: <div>
    <Statement value={23.0} dimension='F' size='large' isStorybook={true} isIncreasing={true} />
    </div>,
};

const MultipleStatementCard: ComponentStory<typeof Card> = createCard;

export const MultipleStatementCardComponent = MultipleStatementCard.bind({});
MultipleStatementCardComponent.args = {
  children: <div>
    <Statement value={23.0} dimension='F' size='large' title='Inside' isStorybook={true} isIncreasing={true} />
    <Statement value={43.0} dimension='F' size='large' title='Outside' isStorybook={true} isIncreasing={true} />
    </div>,
};

const SwitchCard: ComponentStory<typeof Card> = createCard;

export const SwitchCardComponent = SwitchCard.bind({});
SwitchCardComponent.args = {
  header: <>Inside</>,
  children: <div>
    <Switch />
    </div>,
};
