import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS } from '../types';

export const getAllUsers = () => ({ type: GET_ALL_USERS });

export const getAllUsersSuccess = payload => ({
    type: GET_ALL_USERS_SUCCESS,
    payload
});
