import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { DoughnutName, DoughnutProps } from '../components/charts/Doughnut';

export default {
    title: 'Example/Doughnut',
    argTypes: {
        onClick: { action: 'onClick' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: Story<DoughnutProps> = TemplateComponent(DoughnutName);

export const Doughnut = Template.bind({ text: 'Empty' });
Doughnut.args = {
    text: 'Save',
    disabled: false,
};
