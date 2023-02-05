import React from 'react'

import { Switch } from '../Switch'
import { Card } from '../Card'
import { Icon } from '../Icon'
import type { IconNames } from '../../typings/iconNames'

import styles from './ToggleCard.module.scss'

export interface IToggleCardProps{
  description: string
  header: string
  iconName: IconNames[number]
  className?: string
  isStorybook?: boolean
}

export function ToggleCard({ isStorybook, description, header, iconName }: IToggleCardProps) {
  return (
    <Card
      header={(
        <div className={styles.header}>
          <Switch className={styles.switch} />
          {' '}
        </div>
      )}
    >
      <div className={styles.content}>
        <Icon
          isStorybook={isStorybook}
          name={iconName}
        />
        <div>
          <h2 className={styles.cardHeader}>
            {header}
          </h2>
          <span className={styles.lastActive}>
            {description}
          </span>
        </div>
      </div>
    </Card>
  )
}
