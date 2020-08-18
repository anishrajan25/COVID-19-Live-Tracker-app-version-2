import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { totalData } from './indiaTotal';
import { stateData } from "./stateData";
import { symptoms } from "./symptoms";
import { districtData } from "./districtData";
import { about } from "./about";
import { maps } from "./map";
import { precautions } from "./precautions";
import { persistStore, persistCombineReducers } from 'redux-persist';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            totalData,
            maps,
            stateData,
            districtData,
            precautions,
            symptoms,
            about
        }),
        applyMiddleware(thunk)
    );

    return store;
}


/// needs updation for persist store