import * as ActionTypes from './ActionTypes';

export const precautions = ( state = {
    errMess: null,
    isLoading: true,
    precautions: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_PRECAUTIONS:
                return { ...state, isLoading: false, errMess: null, precautions: action.payload};

            case ActionTypes.PRECAUTIONS_LOADING:
                return { ...state, isLoading: true, errMess: null, precautions: []};

            case ActionTypes.PRECAUTIONS_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, precautions: []};
            
            default :
                return state;
            
        }

}