import { put, takeLatest, call, select } from "redux-saga/effects";

import * as actions from "./actions";
import * as constants from "./constants";
import * as services from "../../../services";
import * as itemsActions from "../../items/actions";
import { toggleToArray } from "../../../utils";

export const getSelectedBrands = (state) => state.brands.selectedBrands;

export function* filterByBrands(action) {
  const { selectedBrands } = action.payload;
  if (selectedBrands === "All") {
    yield put(actions.setSelectedBrands([]));
  } else {
    const brands = yield select(getSelectedBrands);
    const newBrands = toggleToArray(brands, selectedBrands);
    yield put(actions.setSelectedBrands(newBrands));
  }
  yield put(itemsActions.setList([], 0, 1));
  yield put(itemsActions.getList());
}
export function* filterByBrandsSaga() {
  yield takeLatest(constants.FILTER_BY_BRANDS, filterByBrands);
}

export function* getAllBrands() {
  try {
    yield put(actions.loading(true));
    const response = yield call(services.getBrands);
    yield put(actions.setBrands(response.data));
  } catch (error) {
    yield put(
      actions.failure(true, "Some errors happend, please try again later")
    );
  } finally {
    yield put(actions.loading(false));
  }
}
export function* getAllBrandsSaga() {
  yield takeLatest(constants.GET_BRANDS, getAllBrands);
}

export const sagas = [getAllBrandsSaga(), filterByBrandsSaga()];
