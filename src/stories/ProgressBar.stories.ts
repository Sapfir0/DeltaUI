import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { ProgressBarName, ProgressBarProps } from '../components/progressBar/progressBar';

export default {
    title: 'Example/ProgressBar',
    argTypes: {
        value: { type: 'number' },
        max: { type: 'number' },
    },
} as Meta;

const Template: Story<ProgressBarProps> = TemplateComponent(ProgressBarName);

export const ProgressBar = Template.bind({});
ProgressBar.args = {
    value: 76,
    max: 100,
};
