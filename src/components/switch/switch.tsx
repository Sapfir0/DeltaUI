import styles from "./switch.module.scss";

export interface SwitchProps {
  disabled?: boolean;
}

export function Switch(props: SwitchProps) {
  return (
    <label className={styles.root}>
      <input disabled={props.disabled} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}
