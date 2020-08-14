import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// TOTAL DATA FOR INDIA
export const fetchTotalData = () => (dispatch) => {

    dispatch(totalLoading())
    //setTimeout(, 2000);
    console.log('invoked fetch total');

    return fetch('https://api.covidindiatracker.com/total.json')
    .then( response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        var err = new Error(error.message);
        throw err;
    })
    .then( response => response.json())
    .then( totalData => dispatch(addTotal(totalData)))
    .catch( error => dispatch(totalFailed(error.message )));
}

export const totalLoading = () => ({
    type: ActionTypes.TOTAL_LOADING
});

export const totalFailed = (errmess) => ({
    type: ActionTypes.TOTAL_FAILED,
    payload: errmess
});

export const addTotal = (totalData) => ({
    type: ActionTypes.ADD_TOTAL,
    payload: totalData
});