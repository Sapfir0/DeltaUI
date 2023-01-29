import classNames from 'classnames'
import React from 'react'

import type { IconName } from '../../typings/iconNames'
import type { IIconProps } from '../Icon'
import { Icon } from '../Icon'

import styles from './ListItem.module.scss'

export interface IListItemProps {
  onClick?(): void
  selected?: boolean
  children: JSX.Element | string
  to?: string
  icon?: IconName
  iconProps?: IIconProps
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
}: IListItemProps) {
  const componentProps = {
    className: classNames(styles.button, {
      [styles.selected]: selected,
    }),
    onClick,
  }

  const ListItemComponent = to ? (
    <a
      href={to}
      {...componentProps}
    >
      {children}
    </a>
  ) : (
    <button {...componentProps}>
      {children}
    </button>
  )

  return (
    <div
      className={classNames(styles.root, className, {
        [styles.selected]: selected,
      },)}
    >
      {icon && (
        <Icon
          name={icon}
          alt={icon}
          {...iconProps}
        />
      )}
      {ListItemComponent}
    </div>
  )
}
