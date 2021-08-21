import { createSelector } from 'reselect'
import { Subject, VirtualizedTableReduxProps } from './VirtualizedTable'



const getState = ({filterName, filterValue, sortBy,  sortDir}: VirtualizedTableReduxProps) => {
    return {filterName, filterValue, sortBy, sortDir }
}

const getData = ({data, originalData}: VirtualizedTableReduxProps) => {
    return {data, originalData}
}

export const makeTableState = () => {
    return createSelector(
        [ getState, getData ],
        (params, tableData) => {
            const {filterName, filterValue} = params

            let resultedData = tableData.originalData
            
            if (filterName !== undefined && filterValue !== undefined) {
                try{
                    resultedData = tableData.originalData.filter(el => el[filterName].toString().match(new RegExp(filterValue)))
                } catch (e) {}
            }
    
            
            const sortableData = [...resultedData].sort(( a: Subject, b: Subject ) => { 
                const parsedA = Number.parseInt(a[params.sortBy])
                const parsedB = Number.parseInt(b[params.sortBy])
    
                if (isNaN(parsedA) && isNaN(parsedB)) {
                    return a[params.sortBy].localeCompare(b[params.sortBy]) 
                } else {
                    return parsedA - parsedB
                }
            })
     
    
            if (params.sortDir === 'desc') {
                return {...params, ...tableData, data: sortableData}
            } else {
                return {...params, ...tableData, data: sortableData.reverse()}
            }

        }
    )
}

