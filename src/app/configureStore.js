import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware, { END } from "redux-saga";
import {routerMiddleware} from 'connected-react-router';
import rootReducer from '@features/rootReducer';
import rootSaga from '@features/rootSaga';
import 'regenerator-runtime/runtime';
import { getPreloadedState } from './storeHelpers';
import { history } from '@utils/index';
export default function initStore(state={}){
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore(
        {
            reducer: rootReducer ,
            preloadedState: getPreloadedState(),
            middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
                thunk: true,
                serializableCheck: true,
                immutableCheck: true,
            }).concat(sagaMiddleware, routerMiddleware(history)),
            devTools: process.env.NODE_ENV !== 'production',
        });
        sagaMiddleware.run(rootSaga);
        store.close = () => store.dispatch(END)
    return store
}