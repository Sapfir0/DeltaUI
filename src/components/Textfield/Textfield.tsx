import React, { useCallback, useState } from 'react'

import { Icon } from '../Icon'

import styles from './Textfield.module.scss'
import type { InputType } from './TextfieldUtils'

export interface ITextfieldProps {
  placeholder?: string
  pattern?: string
  type?: InputType
  defaultValue?: string
}

export function Textfield(props: ITextfieldProps) {
  const [value, setValue] = useState(props.defaultValue)

  const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }, [])

  return (
    <div>
      <input
        className={styles.root}
        pattern={props.pattern}
        value={value}
        placeholder={props.placeholder}
        onChange={onChange}
      />
      <Icon name='done' />
    </div>
  )
}
