import styles from './Statement.module.scss'
import React from 'react'
import { Icon } from '../icon'
import classNames from 'classnames'


export interface StatementProps {
  value: string | number
  className?: string
  dimension: string
  title?: string
  size: 'large' | 'medium'
}

export function Statement({ value, title, dimension, size, className }: StatementProps) {
  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{title}</span>
      <div className={styles.mainBlock}>
        <span className={classNames(styles.value, {[styles.large]: size === 'large'})}>{value}</span>
        <div className={styles.help}>
          <span className={styles.dimension}>{dimension}</span>
          <Icon name='arrow_upward' />
        </div>
      </div>
    </div>
  )
}
