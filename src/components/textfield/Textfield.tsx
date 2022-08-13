import React from "react";
import { EventHandler, useCallback, useState } from "react";
import styles from "./Textfield.module.scss";
import { InputType } from "./TextfieldUtils";

export interface TextfieldProps {
  placeholder?: string;
  pattern?: string;
  type?: InputType;
  defaultValue?: string;
}

export function Textfield(props: TextfieldProps) {
  const [value, setValue] = useState(props.defaultValue);

  const onChange = useCallback((event: any) => {
    setValue(event);
  }, []);
  return (
    <div>
      <input
        className={styles.root}
        pattern={props.pattern}
        value={value}
        placeholder={props.placeholder}
        onChange={onChange}
      />
      <span className="material-icons-outlined">done</span>
    </div>
  );
}