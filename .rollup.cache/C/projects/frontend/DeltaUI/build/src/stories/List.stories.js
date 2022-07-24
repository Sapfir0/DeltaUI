import '../components/button/button';
import { ListName } from '../components/list/list';
import { ListItemName } from '../components/listItem/listItem';
export default {
    title: 'Example/List',
    argTypes: {},
};
const ListItemsTemplate = ['Overview', 'Devices', 'Analytics', 'Rules', 'Gallery', 'History', 'Settings'].map((name, i) => ({ id: i, text: name }));
let selectedIndex = 0;
const setSelectedIndex = (index) => () => {
    selectedIndex = index;
    console.log(selectedIndex);
};
const createList = (args) => {
    const items = [];
    for (const listItemTemplate of ListItemsTemplate) {
        const onClick = setSelectedIndex(listItemTemplate.id);
        items.push(`<${ListItemName} 
            selected="${listItemTemplate.id === selectedIndex}" 
            @onClick="${onClick}" > 
                ${listItemTemplate.text} 
            </${ListItemName}>`);
    }
    const element = document.createElement(ListName);
    element.innerHTML = items.toString().replaceAll(',', '');
    for (const arg in args) {
        element[arg] = args[arg];
    }
    return element;
};
const Template = createList;
export const List = Template.bind({ text: 'Empty' });
List.args = {
    text: 'Save',
    disabled: false,
};
//# sourceMappingURL=List.stories.js.map