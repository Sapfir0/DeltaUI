import { ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { List } from './List'
import { ListItem } from '../listItem/ListItem'
import { ListProps } from './List'
import { IconName, IconNames } from '../../typings/iconNames'

export default {
  title: 'Example/List',
  component: List,
  argTypes: {},
}

const listItemsTemplate: {text: string, link: string, icon: IconName, id: number}[] = [
  { name: 'Overview', link: '/', icon: 'home' },
  { name: 'Devices', link: '/devices', icon: 'settings' },
  { name: 'Analytics', link: '/analytics', icon: 'chart-line' },
  { name: 'Rules', link: '/rules', icon: 'list-bulleted' },
  { name: 'Gallery', link: '/gallery', icon: 'lightbulb' },
  { name: 'History', link: '/history', icon: 'lightbulb' },
  { name: 'Settings', link: '/settings', icon: 'settings' },
].map(({ name, icon, link }, i) => ({
  id: i,
  text: name,
  icon,
  link,
}))

function ListWrapper(args: ListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const setSelectedElement = (index: number) => () => {
    setSelectedIndex(index)
  }
  return (
    <List {...args}>
      {listItemsTemplate.map((data) => (
        <ListItem
          selected={data.id === selectedIndex}
          onClick={setSelectedElement(data.id)}
          icon={data.icon}
          iconProps={{isStorybook: true}}
        >
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
  }

  return (
    <List {...args}>
      {listItemsTemplate.map((data) => (
        <ListItem
          selected={data.id === selectedIndex}
          to={data.link}
          onClick={setSelectedElement(data.id)}
          icon={data.icon}
          iconProps={{isStorybook: true}}
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
