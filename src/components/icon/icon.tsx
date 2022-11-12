import React from 'react'

import type { IconNames } from '../../typings/iconNames'

export const IconName = 'delta-icon' as const

export interface IIconProps {
  name: IconNames[number]
  alt?: string
  isStorybook?: boolean // параметр, чтобы подменять путь до картинки, если отталкиваться от NODE_ENV, то будет использоваться такая переменная из используещего проекта
  className?: string
}

export function Icon({ name, alt, isStorybook }: IIconProps) {
  const path = !isStorybook ? `/node_modules/@sapfir0/delta_kit/dist/icons/${name}_black_24dp.svg` : `/icons/${name}_black_24dp.svg`

  return <img src={path} />
}
