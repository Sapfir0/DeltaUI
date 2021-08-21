import { MouseEventHandler } from 'react';
import { ListConfig } from './payloads';


export type Key<T> = keyof T;
export type ColumnDefinition<T> = Key<T> | '';
export type HeadersBaseSettings<T> = Map<ColumnDefinition<T>, Column<T>[]>;

export type SortDirection = 'asc' | 'desc';

export type Button = {};

export interface SortButton extends Button {
    sortDirection: SortDirection;
    element: (onClick: MouseEventHandler, selected: boolean, direction: SortDirection) => React.ReactElement;
}

export interface FilterButton extends Button {
    element?: (onClick: MouseEventHandler) => React.ReactElement;
    input?: (onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, onClose: () => void) => React.ReactElement;
}

export type Buttons = {
    sortButton?: SortButton | false;
    filterButton?: FilterButton | false;
};

export interface Column<DTO=any> {
    buttons?: Buttons;
    width?: number;
    text: string;
    cellProps?: (cellValue: any) => any;
    convertFunction?: (cellValue: DTO[keyof DTO], columnName: string, rowData: DTO) => React.ReactElement | string;
}



export interface ISubjectListState<TDto> extends ListConfig {
    items?: TDto[];
    headers: HeadersBaseSettings<TDto>
    totalItems: number;
}