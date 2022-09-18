import React from "react";

export interface ListProps {
  children: JSX.Element[]
  className?: string
}

export function List({children, className}: ListProps) {
  return <div className={className}>{children}</div>;
}
