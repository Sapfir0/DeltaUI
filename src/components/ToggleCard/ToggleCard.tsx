import styles from './ToggleCard.module.scss'
import React from 'react'
import { Icon } from '../icon'
import classNames from 'classnames'


export interface ToggleCardProps {
  value: string | number
  className?: string
}

export function ToggleCard({ value, className }: ToggleCardProps) {
  return (
    <div className={classNames(styles.root, className)}>
</div>
  )
}
