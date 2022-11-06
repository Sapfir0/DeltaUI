import styles from './Button.module.scss'
import React, { HTMLAttributes } from 'react'
import { IconName } from '../../typings/iconNames'
import { Icon } from '../icon'
import classNames from 'classnames'
import { CombinePropsAndAttributes } from '../../utils/types'

export interface ButtonSelfProps {
  text?: string
  disabled?: boolean
  fullSize?: boolean
  onClick?: () => void
  icon?: IconName | JSX.Element
  className?: string
}

export type ButtonProps = CombinePropsAndAttributes<ButtonSelfProps, HTMLAttributes<HTMLButtonElement>>


export function Button({ disabled, onClick, icon, text, className, ...props }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={classNames(styles.root, className)} {...props}>
      {typeof icon === 'string' ? <Icon name={icon} alt={icon} /> : icon}
      {text}
    </button>
  )
}
