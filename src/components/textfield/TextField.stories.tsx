import { ComponentStory } from '@storybook/react'
import React from 'react'
import { Textfield } from './Textfield'

export default {
  title: 'Example/Textfield',
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template: ComponentStory<typeof Textfield> = (args) => (
  <Textfield {...args} />
)

export const BaseTextfield = Template.bind({})
BaseTextfield.args = {
  placeholder: '',
  defaultValue: 'Template',
}
