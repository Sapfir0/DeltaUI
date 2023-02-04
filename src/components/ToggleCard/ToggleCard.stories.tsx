import { ComponentStory } from '@storybook/react'
import React from 'react'
import { ToggleCard } from './ToggleCard'

export default {
	title: 'Example/ToggleCard',
	argTypes: {

	},
}

const Template: ComponentStory<typeof ToggleCard> = (args) => <ToggleCard {...args} />

export const Primary = Template.bind({ value: 465, dimension: 'F' })
Primary.args = { header: 'Outlets', description: 'Active since June 28, 2020', iconName: 'wifi', isStorybook: true  }

