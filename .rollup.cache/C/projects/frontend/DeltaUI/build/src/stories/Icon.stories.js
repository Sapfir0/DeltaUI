import '../components/button/button';
import { IconName } from '../components/icon/icon';
import { TemplateComponent } from './template';
import { IconNames } from '../typings/iconNames';
import { getEnumValues } from '../utils/enum';
export default {
    title: 'Example/Icon',
    argTypes: {
        name: { options: getEnumValues(IconNames), control: { type: 'select' } },
    },
};
const Template = TemplateComponent(IconName);
export const Icon = Template.bind({ name: 'Empty' });
Icon.args = {
    name: IconNames.Done,
};
//# sourceMappingURL=Icon.stories.js.map