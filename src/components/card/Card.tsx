import React from 'react'
import styles from './Card.module.scss'

export interface CardProps {
  header: JSX.Element
  content: JSX.Element
}

export function Card(props: CardProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.header}>{props.header}</h2>
      <div className={styles.content}>{props.content}</div>
    </div>
  )
}
