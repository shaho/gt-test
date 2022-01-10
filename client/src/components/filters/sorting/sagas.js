import { put, takeLatest, select } from "redux-saga/effects";

import * as actions from "./actions";
import * as itemsActions from "../../items/actions";
import * as constants from "./constants";

export const getSelectedSort = (state) => state.sorting.selectedOrder;

export function* sort(action) {
  const { selectedOrder } = action.payload;
  const currentOrder = yield select(getSelectedSort);
  const newOrder = selectedOrder === currentOrder ? "" : selectedOrder;
  yield put(actions.setSort(newOrder));
  yield put(itemsActions.setList([], 0, 1));
  yield put(itemsActions.getList());
}
export function* sortSaga() {
  yield takeLatest(constants.SORT, sort);
}

export const sagas = [sortSaga()];
