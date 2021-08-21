import { Container } from 'inversify';
import 'reflect-metadata';
import { VirtualizedTableAction } from '../Components/VirtualizedTable/VirtualizedTableAction';
import { VirtualizedTableReducer } from '../Components/VirtualizedTable/VirtualizedTableReducer';

import { SERVICE_IDENTIFIER } from './inversifyTypes';

export const container = new Container();
container.bind(SERVICE_IDENTIFIER.VirtualizedTableAction).to(VirtualizedTableAction).inSingletonScope();
container.bind(SERVICE_IDENTIFIER.VirtualizedTableReducer).to(VirtualizedTableReducer).inSingletonScope();

