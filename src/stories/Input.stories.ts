import '../components/InputField';

export default {
    title: 'Example/Input',
    argTypes: {
        onClick: { action: 'onClick' },
    },
};

const createInput = (args: any) => {
    const btn = document.createElement('delta-input-field');
    for (const arg in args) {
        btn[arg] = args[arg];
    }
    return btn;
};

export const InputField = createInput.bind({});
InputField.args = {
    label: 'Button',
};
