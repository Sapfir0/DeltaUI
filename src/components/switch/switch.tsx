import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { CombinePropsAndAttributes } from "../../utils/types";
import styles from "./Switch.module.scss";

export interface SwitchSelfProps {
  disabled?: boolean;
}

export type SwitchProps = CombinePropsAndAttributes<SwitchSelfProps, HTMLAttributes<HTMLLabelElement>>

export function Switch(props: SwitchProps) {
  return (
    <label className={styles.root} {...props}>
      <input disabled={props.disabled} type="checkbox" />
      <span className={classNames(styles.round, styles.slider)}></span>
    </label>
  );
}
