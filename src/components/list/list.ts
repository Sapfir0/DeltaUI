import style from "./list.module.scss";

export interface ListProps {}

export function List(props: ListProps) {
  return (
    <div>
      <slot></slot>
    </div>
  );
}
