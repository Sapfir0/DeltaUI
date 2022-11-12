import React from 'react'

import styles from './Card.module.scss'

export interface ICardProps{
  header: JSX.Element
  children: JSX.Element | JSX.Element
}

export function Card({ header, children }: ICardProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.header}>
        {header}
      </h2>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
