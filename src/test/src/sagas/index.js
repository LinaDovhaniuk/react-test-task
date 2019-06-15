import { all } from 'redux-saga/effects';
import usersSaga from './users';
import locationsSaga from './locations';

function* saga() {
    yield all([...usersSaga, ...locationsSaga]);

}

export default saga;