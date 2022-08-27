import { IconNames } from '../../typings/iconNames'
import React from 'react'

export const IconName = 'delta-icon' as const

export interface IconProps {
	name: IconNames[number]
	alt: string
}

export function Icon({ name, alt }: IconProps) {
	return <img src={`/icons/${name}_black_24dp.svg`} alt={alt} />
}
