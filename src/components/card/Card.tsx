import React from 'react'
import styles from './Card.module.scss'

export interface CardProps {
  header: JSX.Element
  children: JSX.Element | JSX.Element
}

export function Card({header, children}: CardProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
