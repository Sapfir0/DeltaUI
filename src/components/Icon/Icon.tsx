import type { HTMLAttributes } from 'react'
import React from 'react'

import type { IconNames } from '../../typings/iconNames'
import type { CombinePropsAndAttributes } from '../../utils/types'

export const IconName = 'delta-icon' as const

export interface IIconSelfProps {
  name: IconNames[number]
  alt?: string
  isStorybook?: boolean // параметр, чтобы подменять путь до картинки, если отталкиваться от NODE_ENV, то будет использоваться такая переменная из используещего проекта
  className?: string
}

export type IIconProps = CombinePropsAndAttributes<IIconSelfProps, HTMLAttributes<HTMLDivElement>>

export function Icon({ name, isStorybook, ...props }: IIconProps) {
  const path = isStorybook ? `/icons/${name}_black_24dp.svg` : `/node_modules/@sapfir0/delta_kit/dist/icons/${name}_black_24dp.svg`

  return (
    <img
      src={path}
      {...props}
    />
  )
}
