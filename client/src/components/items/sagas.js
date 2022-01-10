import { put, takeLatest, call, select } from "redux-saga/effects";

import * as actions from "./actions";
import * as constants from "./constants";
import * as services from "../../services";

export const getSelectedSort = (state) => state.sorting.selectedOrder;
export const getSelectedType = (state) => state.itemTypes.selectedType;
export const getSelectedTags = (state) => state.tags.selectedTags;
export const getSelectedBrands = (state) => state.brands.selectedBrands;

export function* getAllItems(action) {
  try {
    const sortOrder = yield select(getSelectedSort);
    const itemType = yield select(getSelectedType);
    const tags = yield select(getSelectedTags);
    const brands = yield select(getSelectedBrands);
    yield put(actions.loading(true));
    const response = yield call(services.getItems, {
      ...action.payload,
      sortOrder,
      itemType,
      tags,
      brands,
    });
    yield put(
      actions.setList(response.data, Number(response.headers["x-total-count"]))
    );
  } catch (error) {
    yield put(
      actions.failure(true, "Some errors happend, please try again later")
    );
  } finally {
    yield put(actions.loading(false));
  }
}
export function* getAllItemsSaga() {
  yield takeLatest(constants.GET, getAllItems);
}

export const sagas = [getAllItemsSaga()];
