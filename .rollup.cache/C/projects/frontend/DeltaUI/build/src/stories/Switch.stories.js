import { TemplateComponent } from './template';
import { SwitchName } from '../components/switch/switch';
export default {
    title: 'Example/Switch',
    argTypes: {
        onClick: { action: 'onClick' },
        disabled: { type: 'boolean' },
    },
};
const Template = TemplateComponent(SwitchName);
export const Switch = Template.bind({ text: 'Empty' });
Switch.args = {
    disabled: false
};
//# sourceMappingURL=Switch.stories.js.map