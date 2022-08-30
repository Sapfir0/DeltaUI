import styles from './ListItem.module.scss'
import classNames from 'classnames'
import React from 'react'
import { IconNames } from '../../typings/iconNames'
import { Icon } from '../icon'

export interface ListItemProps {
  onClick?: () => void
  selected?: boolean
  key?: string | number
  children: JSX.Element | string
  to?: string
  icon?: IconNames
}

export function ListItem({
  icon,
  onClick,
  selected,
  key,
  children,
  to,
}: ListItemProps) {
  const componentProps = {
    className: classNames(styles.button, {
      [styles.selected]: selected,
    }),
    onClick,
  }
  const ListItemComponent = to ? (
    <a href={to} {...componentProps}>
      {children}
    </a>
  ) : (
    <button {...componentProps}>{children}</button>
  )

  return (
    <div className={styles.root}>
      {icon && <Icon name={icon} alt={icon} />}
      {ListItemComponent}
    </div>
  )
}
