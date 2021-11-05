import '../components/button/button';
import { IconProps, IconName } from '../components/icon/icon';
import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { IconNames } from '../typings/iconNames';

export default {
    title: 'Example/Icon',
    argTypes: {
        name: { type: 'string' },
    },
} as Meta;

const Template: Story<IconProps> = TemplateComponent(IconName);

export const Icon = Template.bind({ name: 'Empty' });
Icon.args = {
    name: IconNames.Done,
};
