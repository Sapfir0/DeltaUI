import styles from './Button.module.scss'
import React from 'react'
import { IconNames } from '../../typings/iconNames'
import { Icon } from '../icon'

export interface ButtonProps {
  text?: string
  disabled?: boolean
  fullSize?: boolean
  onClick?: () => void
  icon?: IconNames | JSX.Element
}

export function Button({ disabled, onClick, icon, text }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.root}>
      {typeof icon === 'string' ? <Icon name={icon} alt={icon} /> : icon}
      {text}
    </button>
  )
}
