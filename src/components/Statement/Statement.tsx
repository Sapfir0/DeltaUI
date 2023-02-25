import React from 'react'
import classNames from 'classnames'

import { Card } from '../Card'
import { Icon } from '../Icon'

import styles from './Statement.module.scss'

export interface IStatementProps{
  value: string | number | undefined
  className?: string
  dimension: string
  title?: string
  size: 'large' | 'medium'
  isStorybook?: boolean
  isIncreasing: boolean
}

export function Statement({ value, title, dimension, size, className, isStorybook, isIncreasing }: IStatementProps) {
  return (
    <Card
      headerBlock={<h2 className={styles.header}>{title}</h2>}
      className={classNames(styles.root, className)}
    >
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
          <Icon
            name={isIncreasing ? 'arrow_upward' : 'arrow_downward'}
            isStorybook={isStorybook}
          />
        </div>
      </div>
    </Card>
  )
}
