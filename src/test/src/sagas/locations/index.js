import { get } from '../../api';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { getAllCountriesSuccess, getAllCitiesSuccess, getAllStatesSuccess } from '../../actions/locations';
import { GET_ALL_COUNTRIES, GET_ALL_CITIES, GET_ALL_STATES } from '../../actions/types';

function* getAllCountriesSaga () {
    try {
        const data = yield call(get, 'countries');
        yield put(getAllCountriesSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

function* getAllCountriesWatcher() {
    yield takeEvery(GET_ALL_COUNTRIES, getAllCountriesSaga);
}

function* getAllCitiesSaga () {
    try {
        const data = yield call(get, 'cities');
        yield put(getAllCitiesSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

function* getAllCitiesWatcher() {
    yield takeEvery(GET_ALL_CITIES, getAllCitiesSaga);
}

function* getAllStatesSaga () {
    try {
        const data = yield call(get, 'states');
        yield put(getAllStatesSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

function* getAllStatesWatcher() {
    yield takeEvery(GET_ALL_STATES, getAllStatesSaga);
}

export default [ fork(getAllCountriesWatcher), fork(getAllCitiesWatcher), fork(getAllStatesWatcher) ];