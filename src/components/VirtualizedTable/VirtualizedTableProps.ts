import { VirtualizedTableReduxProps } from "./VirtualizedTable";

export const VirtualizedTablePropsInitial: VirtualizedTableReduxProps = {
    filterName: undefined,
    filterValue: undefined,
    sortBy: 'id',
    sortDir: 'desc',
    data: [],
    originalData: []
};
