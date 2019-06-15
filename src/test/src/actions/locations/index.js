import { GET_ALL_CITIES, GET_ALL_CITIES_SUCCESS,
    GET_ALL_STATES, GET_ALL_STATES_SUCCESS,
    GET_ALL_COUNTRIES, GET_ALL_COUNTRIES_SUCCESS} from "../types";

export const getAllCountries = () => ({ type: GET_ALL_COUNTRIES });

export const getAllCountriesSuccess = payload => ({
    type: GET_ALL_COUNTRIES_SUCCESS,
    payload
});

export const getAllCities = () => ({ type: GET_ALL_CITIES });

export const getAllCitiesSuccess = payload => ({
    type: GET_ALL_CITIES_SUCCESS,
    payload
});

export const getAllStates = () => ({ type: GET_ALL_STATES });

export const getAllStatesSuccess = payload => ({
    type: GET_ALL_STATES_SUCCESS,
    payload
});
