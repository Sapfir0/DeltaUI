import { ComponentStory } from '@storybook/react';
import React from 'react';
import './Button';
import { Button } from './Button';

export default {
    title: 'Example/Button',
    argTypes: {
        onClick: { action: 'onClick' },
        disabled: { type: 'boolean' },
    },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({ text: 'Empty' });
Primary.args = { text: 'Save', disabled: false };