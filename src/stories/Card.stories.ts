import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { ProgressBarName, ProgressBarProps } from '../components/progressBar/progressBar';
import { CardName, CardProps } from '../components/card/card';

export default {
    title: 'Example/Card',
    argTypes: {},
} as Meta;

const createList = (args) => {
    const element = document.createElement(ListName);
    element.innerHTML = items.toString().replaceAll(',', '');

    for (const arg in args) {
        element[arg as string] = args[arg];
    }
    return element;
};

const Template: Story<CardProps> = TemplateComponent(CardName);

export const Card = Template.bind({});
Card.args = {
    value: `<div slot="header"> </div>`,
    max: 100,
};
