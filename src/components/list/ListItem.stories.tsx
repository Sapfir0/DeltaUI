import '../components/button/button';
import { Meta, Story } from '@storybook/web-components';
import { ListName, ListProps } from '../components/list/list';
import { ListItemName } from '../components/listItem/listItem';

export default {
    title: 'Example/List',
    argTypes: {},
} as Meta;

const ListItemsTemplate = ['Overview', 'Devices', 'Analytics', 'Rules', 'Gallery', 'History', 'Settings'].map(
    (name, i) => ({ id: i, text: name }),
);

let selectedIndex = 0;
const setSelectedIndex = (index: number) => () => {
    selectedIndex = index;
    console.log(selectedIndex);
};

const createList = (args) => {
    const items: string[] = [];
    for (const listItemTemplate of ListItemsTemplate) {
        const onClick = setSelectedIndex(listItemTemplate.id);
        items.push(
            `<${ListItemName} 
            selected="${listItemTemplate.id === selectedIndex}" 
            @onClick="${onClick}" > 
                ${listItemTemplate.text} 
            </${ListItemName}>`,
        );
    }

    const element = document.createElement(ListName);
    element.innerHTML = items.toString().replaceAll(',', '');

    for (const arg in args) {
        element[arg as string] = args[arg];
    }
    return element;
};

const Template: Story<ListProps> = createList;

export const List = Template.bind({ text: 'Empty' });
List.args = {
    text: 'Save',
    disabled: false,
};