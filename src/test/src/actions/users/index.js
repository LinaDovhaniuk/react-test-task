import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS, ADD_USER, ADD_USER_SUCCESS } from '../types';

export const getAllUsers = () => ({ type: GET_ALL_USERS });

export const getAllUsersSuccess = payload => ({
    type: GET_ALL_USERS_SUCCESS,
    payload
});

export const addUser = payload => ({
    type: ADD_USER,
    payload
});

export const addUserSuccess = payload => ({
    type: ADD_USER_SUCCESS,
    payload
});
