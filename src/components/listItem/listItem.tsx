import styles from "./listItem.module.scss";
import classNames from "classnames";
import React from "react";

export interface ListItemProps {
  onClick?: () => void;
  selected?: boolean;
  key?: string | number;
  children: JSX.Element | string;
}

export function ListItem(props: ListItemProps) {
  return (
    <div className={styles.root}>
      <button
        className={classNames(styles.button, {
          [styles.selected]: props.selected,
        })}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}
