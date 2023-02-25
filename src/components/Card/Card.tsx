import type { HTMLAttributes } from 'react'
import React from 'react'

import type { CombinePropsAndAttributes } from '../../utils/types'

import styles from './Card.module.scss'

export interface ICardSelfProps{
  header?: string | undefined
  headerBlock?: JSX.Element
  children: JSX.Element | JSX.Element[]
  className?: string
}

export type ICardProps = CombinePropsAndAttributes<ICardSelfProps, HTMLAttributes<HTMLDivElement>>

export function Card({ header, headerBlock, children, ...props }: ICardProps) {
  return (
    <div
      className={styles.root}
      {...props}
    >
      {headerBlock ? headerBlock : <h2 className={styles.header}>
        {header}
      </h2>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
