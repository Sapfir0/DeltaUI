import { SortDirection } from "typings";

export const range = (count: number) => [...Array(count).keys()];

export const reverseDirection = (direction: SortDirection): SortDirection => direction === 'desc' ? 'asc' : 'desc'