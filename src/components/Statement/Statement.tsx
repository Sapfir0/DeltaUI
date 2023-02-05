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
}

export function Statement({ value, title, dimension, size, className, isStorybook }: IStatementProps) {
  return (
    <Card
      header={title}
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
            name='arrow_upward'
            isStorybook={isStorybook}
          />
        </div>
      </div>
    </Card>
  )
}
