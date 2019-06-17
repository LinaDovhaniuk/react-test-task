import { get, post } from '../../api';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { getAllUsersSuccess, addUserSuccess } from '../../actions/users';
import { GET_ALL_USERS, ADD_USER } from '../../actions/types';

function* getAllUsersSaga () {
    try {
        const data = yield call(get, 'users');
        yield put(getAllUsersSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

function* getAllUsersWatcher() {
    yield takeEvery(GET_ALL_USERS, getAllUsersSaga);
}

function* addUserSaga({ payload }) {
    try {
        const data = yield call(post, 'users', payload);
        yield put(addUserSuccess(data));
    } catch (e) {
        console.log(e);
    }
}

function* addUserWatcher() {
    yield takeEvery(ADD_USER, addUserSaga);
}

export default [ fork(getAllUsersWatcher), fork(addUserWatcher) ];