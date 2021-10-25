import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { SwitchName, SwitchProps } from '../components/switch/switch';

export default {
    title: 'Example/Switch',
    argTypes: {
        onClick: { action: 'onClick' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: Story<SwitchProps> = TemplateComponent(SwitchName);

export const Switch = Template.bind({ text: 'Empty' });
Switch.args = {
    disabled: false
};
