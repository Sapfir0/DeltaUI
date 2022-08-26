import styles from "./Button.module.scss";
import React from "react";

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  fullSize?: boolean;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={styles.root}
    >
      {props.text}
    </button>
  );
}
