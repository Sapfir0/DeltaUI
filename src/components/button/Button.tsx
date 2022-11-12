import classNames from 'classnames'
import React, { HTMLAttributes } from 'react'
import { IconName } from '../../typings/iconNames'
import { CombinePropsAndAttributes } from '../../utils/types'
import { Icon } from '../icon'
import styles from './Button.module.scss'

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
