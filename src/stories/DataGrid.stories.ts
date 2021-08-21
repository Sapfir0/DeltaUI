import '@material/icon-button';
import '@material/mwc-button';
import '../components/button/button';
import '../components/SearchButton';
import '../components/SortButton';
import '../components/VirtualizedTable/VirtualizedTable';

export default {
    title: 'Example/DataGrid',
    argTypes: {
        onClick: { action: 'onClick' },
    },
};

const createDataGrid = (args: any) => {
    const btn = document.createElement('delta-data-table');
    for (const arg in args) {
        btn[arg] = args[arg];
    }
    return btn;
};

export const DataGrid = createDataGrid.bind({});
DataGrid.args = {
    label: 'Button',
};
