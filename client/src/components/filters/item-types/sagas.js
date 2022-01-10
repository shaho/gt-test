import { put, takeLatest, select } from "redux-saga/effects";

import * as actions from "./actions";
import * as itemsActions from "../../items/actions";
import * as constants from "./constants";

export const getSelectedType = (state) => state.itemTypes.selectedType;

export function* filterByType(action) {
  const { selectedType } = action.payload;
  const itemType = yield select(getSelectedType);
  const newType = selectedType === itemType ? "" : selectedType;
  yield put(actions.setSelectedType(newType));
  yield put(itemsActions.setList([], 0, 1));
  yield put(itemsActions.getList());
}
export function* filterByTypeSaga() {
  yield takeLatest(constants.FILTER_BY_TYPE, filterByType);
}

export const sagas = [filterByTypeSaga()];
