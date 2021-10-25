import { Meta, Story } from '@storybook/web-components';
import { CardName, CardProps } from '../components/card/card';

export default {
    title: 'Example/Card',
    argTypes: {},
} as Meta;

const createCard = (args: CardProps) => {
    const element = `<${CardName}> ${args.header} ${args.content}  </${CardName}>`;

    return element;
};

const Template: Story<CardProps> = createCard;

export const Card = Template.bind({});
Card.args = {
    header: `<div slot="header"> Header </div>`,
    content: `<div slot="content"> Content </div>`,
};
