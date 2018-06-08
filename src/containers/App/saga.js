import { all, fork } from "redux-saga/lib/effects";
import searchPageWatcher from  '../../containers/SearchPage/saga';

export default function* rootSaga() {
  yield all([
    fork(searchPageWatcher)
  ]);
}
