
import { injectable } from 'inversify';
import { Column, SortDirection } from 'typings';
import { ActionTypePayload, FilterNamePayload, FilterValuePayload, SortPayload } from 'typings/payloads';
import { FILTER_NAME_CHANGED, FILTER_VALUE_CHANGED, GET_LIST, SET_HEADERS, SORT_DIRECTION_CHANGED } from '../../Store/actionNames';


@injectable()
export class VirtualizedTableAction {
    public getList = (): ActionTypePayload<any, any> => ({
        type: GET_LIST,
        payload: {
        }
    })

    public sortDirectionChanged = (sortField: string, sortDirection: SortDirection): ActionTypePayload<SortPayload, any> => ({
        type: SORT_DIRECTION_CHANGED,
        payload: {
            sortField, sortDirection
        }
    })

    public filterNameChanged = (filterName: string | undefined): ActionTypePayload<FilterNamePayload, any> => ({
        type: FILTER_NAME_CHANGED,
        payload: {
            filterName
        }
    })

    public filterValueChanged = (filterValue: string | undefined): ActionTypePayload<FilterValuePayload, any> => ({
        type: FILTER_VALUE_CHANGED,
        payload: {
            filterValue
        }
    })


    
}