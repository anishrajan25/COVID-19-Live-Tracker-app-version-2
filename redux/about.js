import * as ActionTypes from './ActionTypes';

export const about = ( state = {
    errMess: null,
    isLoading: true,
    about: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_ABOUT:
                return { ...state, isLoading: false, errMess: null, about: action.payload};

            case ActionTypes.ABOUT_LOADING:
                return { ...state, isLoading: true, errMess: null, about: []};

            case ActionTypes.ABOUT_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, about: []};
            
            default :
                return state;
            
        }

}