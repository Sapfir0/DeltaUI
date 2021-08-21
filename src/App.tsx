import VirtualizedTableContainer from 'Components/VirtualizedTable/VirtualizedTableContainer';
import React from 'react';
import { Column } from './typings';


function App() {
    const columns: Column[] = [
        { text: 'id' },
        { text: 'data1' },
        { text: 'data2' },
        { text: 'data3' },
        { text: 'data4' },
    ];

    return (
        <div className="App">
            <VirtualizedTableContainer columns={columns} />
        </div>
    );
}

export default App;
