import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { RootReducer } from 'Store/reducers';
import { container } from '../../inversify/inverisfyContainer';
import { SERVICE_IDENTIFIER } from '../../inversify/inversifyTypes';
import { VirtualizedTable } from './VirtualizedTable';
import { VirtualizedTableAction } from './VirtualizedTableAction';
import { makeTableState } from './VirtualizedTableSelectors';

function VirtualizedTableContainer(props: any) {
    return <VirtualizedTable {...props} />;
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
    const actions = container.get<VirtualizedTableAction>(SERVICE_IDENTIFIER.VirtualizedTableAction);
    return {
        dispatch,
        actions: {
            ...bindActionCreators(
                {
                    filterNameChanged: actions.filterNameChanged,
                    filterValueChanged: actions.filterValueChanged,
                    sortDirectionChanged: actions.sortDirectionChanged,
                    getList: actions.getList,
                },
                dispatch,
            ),
        },
    };
}

const mapStateToProps = (state: RootReducer) => {
    const tableData = makeTableState()

    return {
        state: tableData(state.subjectList)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VirtualizedTableContainer);
