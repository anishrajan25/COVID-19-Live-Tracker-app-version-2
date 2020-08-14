import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { totalData } from './indiaTotal';
import { persistStore, persistCombineReducers } from 'redux-persist';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            totalData
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}


/// needs updation for persist store