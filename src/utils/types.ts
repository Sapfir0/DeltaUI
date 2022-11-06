export type CombinePropsAndAttributes<TProps, TAttributes> = TProps &
  {
    [K in Exclude<keyof TAttributes, keyof TProps>]?: TAttributes[K]
  }
