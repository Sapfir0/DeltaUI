import { TemplateComponent } from './template';
import { ProgressBarName } from '../components/progressBar/progressBar';
export default {
    title: 'Example/ProgressBar',
    argTypes: {
        value: { type: 'number' },
        max: { type: 'number' },
    },
};
const Template = TemplateComponent(ProgressBarName);
export const ProgressBar = Template.bind({});
ProgressBar.args = {
    value: 76,
    max: 100,
};
//# sourceMappingURL=ProgressBar.stories.js.map