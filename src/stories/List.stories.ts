import '../components/button/button';
import { Meta, Story } from '@storybook/web-components';
import { TemplateComponent } from './template';
import { ListName, ListProps } from '../components/list/list';
import { ListItemName } from '../components/listItem/listItem';

export default {
    title: 'Example/List',
    argTypes: {},
} as Meta;

const ListItemsTemplate = ['Overview', 'Devices', 'Analytics', 'Rules', 'Gallery', 'History', 'Settings'];

const createList = (args) => {
    const items = [];
    for (const listItemTemplate of ListItemsTemplate) {
        items.push(`<${ListItemName}> ${listItemTemplate} </${ListItemName}>`);
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
