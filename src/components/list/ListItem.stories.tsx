import { ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { List } from './List'
import { ListItem } from '../listItem/ListItem'
import { ListProps } from './List'
import { IconNames } from '../../typings/iconNames'

export default {
  title: 'Example/List',
  component: List,
  argTypes: {},
}

const listItemsTemplate = [
  { name: 'Overview', link: '/', icon: IconNames.Home },
  { name: 'Devices', link: '/devices', icon: IconNames.Devices },
  { name: 'Analytics', link: '/analytics', icon: IconNames.ChartLine },
  { name: 'Rules', link: '/rules', icon: IconNames.ListBulleted },
  { name: 'Gallery', link: '/gallery', icon: IconNames.Devices },
  { name: 'History', link: '/history', icon: IconNames.Update },
  { name: 'Settings', link: '/settings', icon: IconNames.Settings },
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
