import { GET_ALL_USERS_SUCCESS } from '../../actions/types'
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}