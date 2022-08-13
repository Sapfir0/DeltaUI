import React from "react";

export interface ProgressBarProps {
  value?: number;
  defaultValue?: number;
  max?: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return <progress max={props.max} value={props.value}></progress>;
}