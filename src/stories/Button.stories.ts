import '../components/button/button';

export default {
    title: 'Example/Button',
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
    },
};

const Template = (args: any) => {
    const btn = document.createElement('spark-button');
    for (const arg in args) {
        btn[arg] = args[arg];
    }
    return btn;
};

export const Primary = Template.bind({});
Primary.args = {
    name: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
    name: 'large',
};

export const Small = Template.bind({});
Small.args = {
    name: 'small',
};
