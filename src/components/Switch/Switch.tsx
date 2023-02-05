import classnames from 'classnames'
import type { HTMLAttributes } from 'react'
import React from 'react'

import type { CombinePropsAndAttributes } from '../../utils/types'

import styles from './Switch.module.scss'

export interface ISwitchSelfProps{
  disabled?: boolean
}

export type ISwitchProps = CombinePropsAndAttributes<ISwitchSelfProps, HTMLAttributes<HTMLLabelElement>>

export function Switch({ className, disabled, ...props }: ISwitchProps) {
  return (
    <label
      className={classnames(styles.root, className)}
      {...props}
    >
      <input
        disabled={disabled}
        type='checkbox'
      />
      <span className={classnames(styles.round, styles.slider)} />
    </label>
  )
}
