import * as ActionTypes from './ActionTypes';

export const totalData = ( state = {
    errMess: null,
    isLoading: true,
    totalData: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_TOTAL:
                return { ...state, isLoading: false, errMess: null, totalData: action.payload};

            case ActionTypes.TOTAL_LOADING:
                return { ...state, isLoading: true, errMess: null, totalData: []};

            case ActionTypes.TOTAL_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, totalData: []};
            
            default :
                return state;
            
        }

}