import { html, LitElement } from 'lit';
import React from 'react';
import { reverseDirection } from 'shared/utils';
import { Column, FilterButton, HeadersBaseSettings, SortButton as SortButtonType, SortDirection } from '../../typings';
import './VirtualizedTable.css';
import { VirtualizedTableAction } from './VirtualizedTableAction';

export type VirtualizedTableProps = {
    columns: Column[];
    actions: VirtualizedTableAction;
    state: VirtualizedTableReduxProps;
};

export type VirtualizedTableReduxProps = {
    sortBy: string;
    sortDir: SortDirection;
    filterName: string | undefined;
    filterValue: string | undefined;
    data: Subject[];
    originalData: Subject[];
};

export type Subject = {
    id: number;
    data1: string;
    data2: string;
    data3: string;
    data4: string;
};

const сolumnWidth = 200;

const componentName = 'delta-data-table';

class VirtualizedTableBase extends LitElement {
    getSortButton = (sortButton: SortButtonType | false | undefined, name: any, handleSortClick: () => void) => {
        const activeButton = name === this.props.state.sortBy;

        if (sortButton === false) {
            return null;
        }

        if (sortButton === undefined) {
            return html`<delta-sort-button
                @onClick=${handleSortClick}
                ?selected=${activeButton}
                direction=${activeButton ? this.state.sortDir : 'desc'}
            />`;
        }

        return sortButton.element(handleSortClick, activeButton, this.props.state.sortDir);
    };

    getFilterButton = (
        filterButton: FilterButton | false | undefined,
        name: any,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
        onClose: () => void,
    ) => {
        const defaultInput = html`<delta-input-field @onClose=${onClose} @onChange=${onChange} />`;
        const defaultButton = html`<delta-search-button @onClick=${() => actions.filterNameChanged(name as string)} />`;
        const isActiveButton = name === this.props.state.filterName;
        if (filterButton === false) {
            // если сказано, что false, то не рендерим компонент
            return null;
        }
        if (filterButton === undefined) {
            // если undefined(просто не инициализировано поле), то рендерим компонент по умолчанию
            return isActiveButton ? defaultInput : defaultButton;
        }

        if (isActiveButton) {
            // если любое из полей не передано, рендерим как дефолтное
            return filterButton.input !== undefined ? filterButton.input(onChange, onClose) : defaultInput;
        } else {
            return filterButton.element !== undefined
                ? filterButton.element(() => actions.filterNameChanged(name as string))
                : defaultButton;
        }
    };

    renderHeaders = (headerNames: HeadersBaseSettings<any>): React.ReactNode => {
        const headerElements = this.props.columns.map((header, i) => {
            const filterButton = header.buttons?.filterButton;
            const sortButton = header.buttons?.sortButton;

            const handleSortClick = () => {
                const sortDir =
                    this.props.state.sortBy === header.text ? reverseDirection(this.props.state.sortDir) : 'asc';
                actions.sortDirectionChanged(header.text, sortDir);
            };

            const handleFilterValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
                actions.filterValueChanged(event.target.value);
            };

            const onClose = () => {
                actions.filterNameChanged(undefined);
                actions.filterValueChanged(undefined);
            };

            const sortElement = this.getSortButton(sortButton, header.text, handleSortClick);
            const filterElement = this.getFilterButton(filterButton, header.text, handleFilterValueChanged, onClose);

            return html`<div key=${header.text.toString()}>${header.text} ${filterElement} ${sortElement}</div>`;
        });

        const divStyles = { width: сolumnWidth * headerElements.length };

        return html` <div .style=${divStyles}>${headerElements}</div>`;
    };

    renderCell = (columns: Column[], records: any[]) => ({ columnIndex, data, rowIndex, style }: any) => {
        const { hoveredRowIndex, setHoveredRowIndex } = data;
        const className = hoveredRowIndex === rowIndex ? 'CellHovered' : 'Cell';
        const columnName = columns[columnIndex].text;

        return html`<div className=${className} @onMouseEnter=${() => setHoveredRowIndex(rowIndex)} style=${style}>
            ${this.props.state.data[rowIndex][columnName]}
        </div>`;
    };

    renderBody = (columns: Column[], records: any[]): React.ReactNode => this.renderCell(columns, records);

    render() {
        const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
        const { actions } = this.props;
        useEffect(() => {
            actions.getList();
        }, [actions]);

        return html` <div>
            ${this.renderHeaders(this.props.columns as any)}
            ${this.renderBody(this.props.columns, this.props.state.data)}
        </div>`;
    }
}

const VirtualizedTable = connect(mapStateToProps, mapDispatchToProps)(VirtualizedTableBase);

customElements.define(componentName, VirtualizedTable);

declare global {
    interface HTMLElementTagNameMap {
        [componentName]: VirtualizedTableBase;
    }
}
