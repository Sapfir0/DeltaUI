import React from 'react'
import classNames from 'classnames'

import { Switch } from '../Switch'

import styles from './ToggleCard.module.scss'

export interface IToggleCardProps{
  value: string | number
  className?: string
}

export function ToggleCard({ value, className }: IToggleCardProps) {
  return (
    <div className={classNames(styles.root, className)}>
      <Switch className={styles.switch} />
    </div>
  )
}
