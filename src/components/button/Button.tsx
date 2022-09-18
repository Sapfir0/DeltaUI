import styles from './Button.module.scss'
import React from 'react'
import { IconName } from '../../typings/iconNames'
import { Icon } from '../icon'
import classNames from 'classnames'

export interface ButtonProps {
  text?: string
  disabled?: boolean
  fullSize?: boolean
  onClick?: () => void
  icon?: IconName | JSX.Element
  className?: string
}

export function Button({ disabled, onClick, icon, text, className }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={classNames(styles.root, className)}>
      {typeof icon === 'string' ? <Icon name={icon} alt={icon} /> : icon}
      {text}
    </button>
  )
}
