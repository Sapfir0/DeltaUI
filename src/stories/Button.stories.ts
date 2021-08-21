import '@material/mwc-button';
import '../components/button/button';
import '../components/SearchButton';
import '../components/SortButton';
import '@material/icon-button'


export default {
    title: 'Example/Button',
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
    },
};

const createButton = (buttonName: string) => (args: any) => {
    const btn = document.createElement(buttonName);
    for (const arg in args) {
        btn[arg] = args[arg];
    }
    return btn;
};

export const SortButton = createButton('delta-sort-button').bind({});
SortButton.args = {
    label: 'Button',
};

export const SearchButton = createButton('delta-search-button').bind({});
SearchButton.args = {
    label: 'Button',
};
