import { ComponentStory } from "@storybook/react";
import React from "react";
import { List } from "./List";
import { ListItem } from "../listItem/ListItem";
import { ListProps } from "./List";

export default {
  title: "Example/List",
  argTypes: {},
};

const listItemsTemplate = [
  "Overview",
  "Devices",
  "Analytics",
  "Rules",
  "Gallery",
  "History",
  "Settings",
].map((name, i) => ({ id: i, text: name }));

let selectedIndex = 0;
const setSelectedIndex = (index: number) => () => {
  selectedIndex = index;
  console.log(selectedIndex);
};

const createList = (args: ListProps) => {
  return (
    <List {...args}>
      {listItemsTemplate.map((data) => (
        <ListItem
          selected={data.id === selectedIndex}
          onClick={setSelectedIndex(data.id)}
        >
          {data.text}
        </ListItem>
      ))}
    </List>
  );
};

const Template: ComponentStory<typeof List> = createList;

export const Primary = Template.bind({});
Primary.args = {};
