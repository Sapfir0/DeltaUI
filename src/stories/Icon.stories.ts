import '../components/button/button';
import { IconProps, IconName } from '../components/icon/icon';
import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { IconNames } from '../typings/iconNames';
import { getEnumValues } from '../utils/enum';

export default {
    title: 'Example/Icon',
    argTypes: {
        name: { options: getEnumValues(IconNames), control: { type: 'select' } },
    },
} as Meta;

const Template: Story<IconProps> = TemplateComponent(IconName);

export const Icon = Template.bind({ name: 'Empty' });
Icon.args = {
    name: IconNames.Done,
};
