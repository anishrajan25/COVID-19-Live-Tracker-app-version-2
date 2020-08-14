import * as ActionTypes from './ActionTypes';

export const stateData = ( state = {
    errMess: null,
    isLoading: true,
    stateData: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_STATE:
                return { ...state, isLoading: false, errMess: null, stateData: action.payload};

            case ActionTypes.STATE_LOADING:
                return { ...state, isLoading: true, errMess: null, stateData: []};

            case ActionTypes.STATE_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, stateData: []};
            
            default :
                return state;
            
        }

}
