import { IconNames } from "../../typings/iconNames";
import webpackConfig from "../../../.storybook/main.js";
import React from "react";

export const IconName = "delta-icon" as const;

export interface IconProps {
  name: IconNames;
  alt: string;
}

export function Icon(props: IconProps) {
  const name: IconNames = props.name ?? IconNames.Done;

  //   const publicPath = webpackConfig.publicPathCtor;
  //   console.log(publicPath);

  return <img src={`/icons/${name}_black_24dp.svg`} alt={props.alt} />;
}
