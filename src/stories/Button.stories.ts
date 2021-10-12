import '../components/button/button';
import { ButtonName, ButtonProps } from '../components/button/button';
import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';

export default {
    title: 'Example/Button',
    argTypes: {
        onClick: { action: 'onClick' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: Story<ButtonProps> = TemplateComponent(ButtonName);

export const Button = Template.bind({ text: 'Empty' });
Button.args = {
    text: 'Save',
    disabled: false
};
