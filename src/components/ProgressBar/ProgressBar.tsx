import React from 'react'

export interface IProgressBarProps{
  value?: number
  defaultValue?: number
  max?: number
}

export function ProgressBar(props: IProgressBarProps) {
  return (
    <progress
      max={props.max ?? 100}
      value={props.value}
    />
  )
}
