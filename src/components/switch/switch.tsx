import classNames from 'classnames'
import type { HTMLAttributes } from 'react'
import React from 'react'

import type { CombinePropsAndAttributes } from '../../utils/types'

import styles from './Switch.module.scss'

export interface ISwitchSelfProps{
  disabled?: boolean
}

export type ISwitchProps = CombinePropsAndAttributes<ISwitchSelfProps, HTMLAttributes<HTMLLabelElement>>

export function Switch(props: ISwitchProps) {
  return (
    <label
      className={styles.root}
      {...props}
    >
      <input
        disabled={props.disabled}
        type='checkbox'
      />
      <span className={classNames(styles.round, styles.slider)} />
    </label>
  )
}
