import React from 'react'

export interface IListProps {
  children: JSX.Element[]
  className?: string
}

export function List({ children, className }: IListProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
