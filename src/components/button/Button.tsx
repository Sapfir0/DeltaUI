import classNames from 'classnames'
import type { HTMLAttributes } from 'react'
import React from 'react'

import type { IconName } from '../../typings/iconNames'
import type { CombinePropsAndAttributes } from '../../utils/types'
import { Icon } from '../icon'

import styles from './Button.module.scss'

export interface IButtonSelfProps {
  text?: string
  disabled?: boolean
  fullSize?: boolean
  onClick?(): void
  icon?: IconName | JSX.Element
  className?: string
}

export type IButtonProps= CombinePropsAndAttributes<IButtonSelfProps, HTMLAttributes<HTMLButtonElement>>

export function Button({ disabled, onClick, icon, text, className, ...props }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, className)}
      {...props}
    >
      {typeof icon === 'string' ? (
        <Icon
          name={icon}
          alt={icon}
        />
      ) : icon}
      {text}
    </button>
  )
}
