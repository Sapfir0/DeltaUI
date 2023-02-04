import { ComponentStory } from '@storybook/react'
import React from 'react'
import { Statement } from './Statement'

export default {
	title: 'Example/Statement',
	argTypes: {

	},
}

const Template: ComponentStory<typeof Statement> = (args) => <Statement {...args} />

export const Primary = Template.bind({ value: 465, dimension: 'F', isStorybook: true })
Primary.args = { value: 465, dimension: 'F', size: 'large', title: 'ON LIVINGROOM', isStorybook: true   }

