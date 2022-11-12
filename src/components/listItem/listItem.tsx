import classNames from 'classnames'
import React from 'react'
import { IconName } from '../../typings/iconNames'
import { Icon, IconProps } from '../icon'
import styles from './ListItem.module.scss'

export interface ListItemProps {
  onClick?: () => void
  selected?: boolean
  children: JSX.Element | string
  to?: string
  icon?: IconName
  iconProps?: IconProps
  className?: string
}

export function ListItem({
  icon,
  onClick,
  selected,
  className,
  children,
  to,
  iconProps,
}: ListItemProps) {
  const componentProps = {
    className: classNames(styles.button, {
      [styles.selected]: selected,
    }),
    onClick
  }
  const ListItemComponent = to ? (
    <a href={to} {...componentProps}>
      {children}
    </a>
  ) : (
    <button {...componentProps}>{children}</button>
  )

  return (
    <div className={classNames(styles.root, className, {
      [styles.selected]: selected,
    }, )}>
      {icon && <Icon name={icon} alt={icon} {...iconProps} />}
      {ListItemComponent}
    </div>
  )
}
