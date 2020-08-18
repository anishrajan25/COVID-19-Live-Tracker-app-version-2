import * as ActionTypes from './ActionTypes';

export const maps = ( state = {
    errMess: null,
    isLoading: true,
    maps: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_MAP:
                return { ...state, isLoading: false, errMess: null, maps: action.payload};

            case ActionTypes.MAP_LOADING:
                return { ...state, isLoading: true, errMess: null, maps: []};

            case ActionTypes.MAP_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, maps: []};
            
            default :
                return state;
            
        }

}