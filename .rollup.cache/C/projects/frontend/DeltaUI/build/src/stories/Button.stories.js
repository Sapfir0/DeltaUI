import '../components/button/button';
import { ButtonName } from '../components/button/button';
import { TemplateComponent } from './template';
export default {
    title: 'Example/Button',
    argTypes: {
        onClick: { action: 'onClick' },
        disabled: { type: 'boolean' },
    },
};
const Template = TemplateComponent(ButtonName);
export const Button = Template.bind({ text: 'Empty' });
Button.args = {
    text: 'Save',
    disabled: false
};
//# sourceMappingURL=Button.stories.js.map