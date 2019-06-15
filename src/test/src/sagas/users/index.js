import { get } from '../../api';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { getAllUsersSuccess } from '../../actions/users';
import { GET_ALL_USERS } from '../../actions/types';

function* getAllUsersSaga () {
    try {
        const data = yield call(get, 'users');
        console.log(data);
        yield put(getAllUsersSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

function* getAllUsersWatcher() {
    yield takeEvery(GET_ALL_USERS, getAllUsersSaga);
}

export default [ fork(getAllUsersWatcher) ];