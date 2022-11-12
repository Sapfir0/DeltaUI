import React from 'react'
import classNames from 'classnames'

import { Icon } from '../Icon'

import styles from './Statement.module.scss'

export interface IStatementProps{
  value: string | number
  className?: string
  dimension: string
  title?: string
  size: 'large' | 'medium'
}

export function Statement({ value, title, dimension, size, className }: IStatementProps) {
  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>
        {title}
      </span>
      <div className={styles.mainBlock}>
        <span
          className={classNames(styles.value, {
            [styles.large]: size === 'large',
          })}
        >
          {value}
        </span>
        <div className={styles.help}>
          <span className={styles.dimension}>
            {dimension}
          </span>
          <Icon name='arrow_upward' />
        </div>
      </div>
    </div>
  )
}
