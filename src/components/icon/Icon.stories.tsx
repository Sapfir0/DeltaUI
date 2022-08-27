import { Icon } from './icon'
import React from 'react'
import { ComponentStory } from '@storybook/react'
import { getEnumValues } from '../../utils/enum'
import { IconNames } from '../../typings/iconNames'

const iconsList = getEnumValues(IconNames)

export default {
	title: 'Example/Icon',
	argTypes: {
		name: { options: iconsList, control: { type: 'select' } },
	},
}

const Template: ComponentStory<typeof Icon> = (args) => (
	<>
		{iconsList.map((icon) => (
			<Icon {...args} name={icon} />
		))}
	</>
)

export const Primary = Template.bind({ name: 'Empty' })
Primary.args = {
	name: IconNames.Done,
}
