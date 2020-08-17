import * as ActionTypes from './ActionTypes';

export const symptoms = ( state = {
    errMess: null,
    isLoading: true,
    symptoms: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_SYMPTOMS:
                return { ...state, isLoading: false, errMess: null, symptoms: action.payload};

            case ActionTypes.SYMPTOMS_LOADING:
                return { ...state, isLoading: true, errMess: null, symptoms: []};

            case ActionTypes.SYMPTOMS_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, symptoms: []};
            
            default :
                return state;
            
        }

}