import { GET_ALL_COUNTRIES_SUCCESS, GET_ALL_CITIES_SUCCESS, GET_ALL_STATES_SUCCESS } from '../../actions/types'
const initialState = {
    cities: [],
    countries: [],
    states: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES_SUCCESS:
            return { ...state, countries: action.payload };
        case GET_ALL_CITIES_SUCCESS:
            return { ...state, cities: action.payload };
        case GET_ALL_STATES_SUCCESS:
            return { ...state, states: action.payload };

        default:
            return state;
    }
}