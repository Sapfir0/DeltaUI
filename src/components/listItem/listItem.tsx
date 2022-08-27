import styles from './ListItem.module.scss'
import classNames from 'classnames'
import React from 'react'

export interface ListItemProps {
  onClick?: () => void
  selected?: boolean
  key?: string | number
  children: JSX.Element | string
  to?: string
}

export function ListItem({ onClick, selected, key, children, to }: ListItemProps) {
  const componentProps = {
    className: classNames(styles.button, {
      [styles.selected]: selected,
    }),
    onClick: onClick,
  }
  const ListItemComponent = to ? (
    <a {...componentProps}>{children}</a>
  ) : (
    <button {...componentProps}>{children}</button>
  )

  return <div className={styles.root}>{ListItemComponent}</div>
}
