import { ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { List } from './List'
import { ListItem } from '../listItem/ListItem'
import { ListProps } from './List'

export default {
  title: 'Example/List',
  component: List,
  argTypes: {},
}

const listItemsTemplate = [
  { name: 'Overview', link: '/' },
  { name: 'Devices', link: '/devices' },
  { name: 'Analytics', link: '/analytics' },
  { name: 'Rules', link: '/rules' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'History', link: '/history' },
  { name: 'Settings', link: '/settings' },
].map((route, i) => ({ id: i, text: route.name, link: route.link }))

function ListWrapper(args: ListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const setSelectedElement = (index: number) => () => {
    setSelectedIndex(index)
    console.log(selectedIndex)
  }
  return (
    <List {...args}>
      {listItemsTemplate.map((data) => (
        <ListItem selected={data.id === selectedIndex} onClick={setSelectedElement(data.id)}>
          {data.text}
        </ListItem>
      ))}
    </List>
  )
}

function ListLinksWrapper(args: ListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const setSelectedElement = (index: number) => () => {
    setSelectedIndex(index)
    console.log(selectedIndex)
  }
  return (
    <List {...args}>
      {listItemsTemplate.map((data) => (
        <ListItem
          selected={data.id === selectedIndex}
          to={data.link}
          onClick={setSelectedElement(data.id)}
        >
          {data.text}
        </ListItem>
      ))}
    </List>
  )
}

const TemplateButtonsList: ComponentStory<typeof List> = ListWrapper

export const WithButtons = TemplateButtonsList.bind({})
WithButtons.args = {}

const TemplateLinksList: ComponentStory<typeof List> = ListLinksWrapper

export const WithLinks = TemplateLinksList.bind({})
WithLinks.args = {}
