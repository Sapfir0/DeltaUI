import { TemplateComponent } from './template';
import { DoughnutName } from '../components/charts/Doughnut';
export default {
    title: 'Example/Doughnut',
    argTypes: {
        onClick: { action: 'onClick' },
        disabled: { type: 'boolean' },
    },
};
const Template = TemplateComponent(DoughnutName);
export const Doughnut = Template.bind({ text: 'Empty' });
Doughnut.args = {};
//# sourceMappingURL=Doughnut.stories.js.map