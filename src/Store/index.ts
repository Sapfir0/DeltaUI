import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import createRootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware ];


const rootReducerWithRouter = createRootReducer()
export type RootStore = ReturnType<typeof rootReducerWithRouter>

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducerWithRouter);


sagaMiddleware.run(rootSaga)

