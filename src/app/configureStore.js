import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware, { END } from "redux-saga";
import {routerMiddleware} from 'connected-react-router';
import rootReducer from './reducers';
import rootSaga from './generators';
import 'regenerator-runtime/runtime';
import { getPreloadedState } from '@utils/storeHelper';
import { history } from '@utils/index';
export default function initStore(state={}){
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore(
        {
            reducer: rootReducer ,
            preloadedState: getPreloadedState(state),
            middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
                thunk: true,
                serializableCheck: false,
                immutableCheck: true,
            }).concat(sagaMiddleware, routerMiddleware(history)),
            devTools: process.env.NODE_ENV !== 'production',
        });
        sagaMiddleware.run(rootSaga);
        store.close = () => store.dispatch(END)
    return store
}