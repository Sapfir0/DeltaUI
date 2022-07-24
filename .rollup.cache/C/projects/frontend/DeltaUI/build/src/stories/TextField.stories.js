import '../components/button/button';
import { TemplateComponent } from './template';
import { TextFieldName } from '../components/textfield/textfield';
export default {
    title: 'Example/Textfield',
    argTypes: {
        onClick: { action: 'onClick' },
    },
};
const Template = TemplateComponent(TextFieldName);
export const Textfield = Template.bind({});
Textfield.args = {
    placeholder: '',
    value: 'Template',
};
//# sourceMappingURL=TextField.stories.js.map