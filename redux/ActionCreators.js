import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { precautions } from './precautions';
import { symptoms } from './symptoms';

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

    return fetch('https://api.covid19india.org/v4/data.json')
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


// PRECAUTIONS
export const fetchPrecautions = () => (dispatch) => {

    dispatch(precautionsLoading());

    return fetch(baseUrl + 'precautions')
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
    .then(precautions => dispatch(addPrecautions(precautions)))
    .catch(error => dispatch(precautionsFailed(error.message)));
};

export const precautionsLoading = () => ({
    type: ActionTypes.PRECAUTIONS_LOADING
});

export const precautionsFailed = (errmess) => ({
    type: ActionTypes.PRECAUTIONS_FAILED,
    payload: errmess
});

export const addPrecautions = (precautions) => ({
    type: ActionTypes.ADD_PRECAUTIONS,
    payload: precautions
});


// SYMPTOMS
export const fetchSymptoms = () => (dispatch) => {

    dispatch(symptomsLoading());

    return fetch(baseUrl + 'symptoms')
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
    .then(symptoms => dispatch(addSymptoms(symptoms)))
    .catch(error => dispatch(symptomsFailed(error.message)));
};

export const symptomsLoading = () => ({
    type: ActionTypes.SYMPTOMS_LOADING
});

export const symptomsFailed = (errmess) => ({
    type: ActionTypes.SYMPTOMS_FAILED,
    payload: errmess
});

export const addSymptoms = (symptoms) => ({
    type: ActionTypes.ADD_SYMPTOMS,
    payload: symptoms
});


// ABOUT
export const fetchAbout = () => (dispatch) => {

    dispatch(aboutLoading());

    return fetch(baseUrl + 'about')
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
    .then(about => dispatch(addAbout(about)))
    .catch(error => dispatch(aboutFailed(error.message)));
};

export const aboutLoading = () => ({
    type: ActionTypes.ABOUT_LOADING
});

export const aboutFailed = (errmess) => ({
    type: ActionTypes.ABOUT_FAILED,
    payload: errmess
});

export const addAbout = (about) => ({
    type: ActionTypes.ADD_ABOUT,
    payload: about
});