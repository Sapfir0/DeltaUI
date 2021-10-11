import '../components/button/button';
import { componentName } from '../components/button/button';

export default {
    title: 'Example/Button',
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
    },
};

const Template = (args: any) => {
    const btn = document.createElement(componentName);
    for (const arg in args) {
        btn[arg] = args[arg];
    }
    return btn;
};

export const Primary = Template.bind({});
Primary.args = {
    text: 'Save',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
    text: 'large',
};

export const Small = Template.bind({});
Small.args = {
    text: 'small',
};
