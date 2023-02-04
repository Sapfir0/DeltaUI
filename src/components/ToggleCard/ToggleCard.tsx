import React from 'react'
import classNames from 'classnames'

import { Switch } from '../Switch'

import styles from './ToggleCard.module.scss'
import { Card } from '../Card'
import { Icon } from '../Icon'
import { IconNames } from '../../typings/iconNames'

export interface IToggleCardProps{
  description: string
  header: string
  iconName: IconNames[number]
  className?: string
  isStorybook?: boolean
}

export function ToggleCard({ isStorybook, description, header, iconName }: IToggleCardProps) {
  return (
    <Card header={<div className={styles.header}><Switch className={styles.switch} /> </div>} >
      <div className={styles.content}>
        <Icon isStorybook={isStorybook} name={iconName} />
        <div>
          <h2 className={styles.cardHeader}>{header}</h2>
          <span className={styles.lastActive}>{description}</span>
        </div>
      </div>
    </Card>
  )
}
