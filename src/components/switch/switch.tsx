import classNames from "classnames";
import React from "react";
import styles from "./Switch.module.scss";

export interface SwitchProps {
  disabled?: boolean;
}

export function Switch(props: SwitchProps) {
  return (
    <label className={styles.root}>
      <input disabled={props.disabled} type="checkbox" />
      <span className={classNames(styles.round, styles.slider)}></span>
    </label>
  );
}
