import * as ActionTypes from './ActionTypes';

export const districtData = ( state = {
    errMess: null,
    isLoading: true,
    districtData: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_DISTRICT:
                return { ...state, isLoading: false, errMess: null, districtData: action.payload};

            case ActionTypes.DISTRICT_LOADING:
                return { ...state, isLoading: true, errMess: null, districtData: []};

            case ActionTypes.DISTRICT_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, districtData: []};
            
            default :
                return state;
            
        }

}