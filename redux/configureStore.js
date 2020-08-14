import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { totalData } from './indiaTotal';
import { stateData } from "./stateData";
import { districtData } from "./districtData";
import { persistStore, persistCombineReducers } from 'redux-persist';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            totalData,
            stateData,
            districtData
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}


/// needs updation for persist store