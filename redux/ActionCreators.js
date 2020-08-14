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


// TOTAL DATA FOR STATE

export const fetchStateData = () => (dispatch) => {

    dispatch(stateLoading());

    return fetch('https://api.covidindiatracker.com/state_data.json')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(stateData => dispatch(addState(stateData)))
    .catch(error => dispatch(stateFailed(error.message)));
};

export const stateLoading = () => ({
    type: ActionTypes.STATE_LOADING
});

export const stateFailed = (errmess) => ({
    type: ActionTypes.STATE_FAILED,
    payload: errmess
});

export const addState = (stateData) => ({
    type: ActionTypes.ADD_STATE,
    payload: stateData
});


// TOTAL DATA FOR DISTRICT

export const fetchDistrictData = () => (dispatch) => {

    dispatch(districtLoading());

    return fetch('https://api.covid19india.org/state_district_wise.json')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(districtData => dispatch(addDistrict(districtData)))
    .catch(error => dispatch(districtFailed(error.message)));
};

export const districtLoading = () => ({
    type: ActionTypes.DISTRICT_LOADING
});

export const districtFailed = (errmess) => ({
    type: ActionTypes.DISTRICT_FAILED,
    payload: errmess
});

export const addDistrict = (districtData) => ({
    type: ActionTypes.ADD_DISTRICT,
    payload: districtData
});