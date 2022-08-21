import React from "react";

export interface ListProps {
  children: JSX.Element[]
}

export function List(props: ListProps) {
  return <div>{props.children}</div>;
}
