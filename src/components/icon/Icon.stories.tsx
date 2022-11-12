import { ComponentStory } from '@storybook/react'
import React from 'react'
import { IconName } from '../../typings/iconNames'
import { Icon } from './icon'

const iconNames: IconName[] =  [
	'arrow_back',
	'arrow_downward',
	'arrow_forward',
	'arrow_upward',
	'cancel',
	'chart-line',
	'cellphone-link',
	'done',
	'equalizer',
	'email',
	'event',
	'help',
	'home',
	'highlight_off',
	'lightbulb',
	'list-bulleted',
	'lock',
	'server',
	'settings',
	'notifications',
	'notifications_none',
	'power',
	'print',
	'update',
	'visibility',
	'wifi'
  ]


export default {
	title: 'Example/Icon',
	argTypes: {
		name: { options: iconNames, control: { type: 'select' } },
	},
}

const Template: ComponentStory<typeof Icon> = (args) => (
	<>
		{iconNames.map((icon) => (
			<Icon {...args} name={icon} />
		))}
	</>
)

export const Primary = Template.bind({ name: 'Empty' })
Primary.args = {
	name: 'done',
	isStorybook: true,
}
