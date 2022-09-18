import { IconNames } from '../../typings/iconNames'
import React from 'react'

export const IconName = 'delta-icon' as const

export interface IconProps {
  name: IconNames[number]
  alt?: string
  isStorybook?: boolean // параметр, чтобы подменять путь до картинки, если отталкиваться от NODE_ENV, то будет использоваться такая переменная из используещего проекта 
  className?: string
}

export function Icon({ name, alt, isStorybook }: IconProps) {
  const path = !isStorybook ? `/node_modules/delta_kit/dist/icons/${name}_black_24dp.svg` : `/icons/${name}_black_24dp.svg`
  
  return <img src={path} />
}
