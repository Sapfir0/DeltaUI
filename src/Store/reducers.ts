import { VirtualizedTableReduxProps } from 'Components/VirtualizedTable/VirtualizedTable';
import { VirtualizedTableReducer } from 'Components/VirtualizedTable/VirtualizedTableReducer';
import { container } from 'inversify/inverisfyContainer';
import { SERVICE_IDENTIFIER } from 'inversify/inversifyTypes';
import { combineReducers } from 'redux';

const virtualizedList = container.get<VirtualizedTableReducer>(SERVICE_IDENTIFIER.VirtualizedTableReducer)

export type RootReducer = {
    subjectList: VirtualizedTableReduxProps
}

const createRootReducer = () => combineReducers({
    subjectList: virtualizedList.getReducer()
});


export default createRootReducer
