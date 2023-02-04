import React from 'react'

import styles from './Card.module.scss'

export interface ICardProps{
  header: JSX.Element | string | undefined
  children: JSX.Element | JSX.Element[]
  className?: string
}

export function Card({ header, children, ...props }: ICardProps) {
  return (
    <div className={styles.root} {...props}>
      <h2 className={styles.header}>
        {header}
      </h2>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
