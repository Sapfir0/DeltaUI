import '../components/button/button';
import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { TextFieldName, TextfieldProps } from '../components/textfield/textfield';

export default {
    title: 'Example/Textfield',
    argTypes: {
        onClick: { action: 'onClick' },
    },
} as Meta;

const Template: Story<TextfieldProps> = TemplateComponent(TextFieldName);

export const Textfield = Template.bind({});
Textfield.args = {
    placeholder: '',
    value: 'Template',
};
