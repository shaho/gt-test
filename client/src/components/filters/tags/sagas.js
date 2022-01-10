import { put, takeLatest, call, select } from "redux-saga/effects";

import * as actions from "./actions";
import * as constants from "./constants";
import * as services from "../../../services";
import * as itemsActions from "../../items/actions";
import { toggleToArray } from "../../../utils";

export const getSelectedTags = (state) => state.tags.selectedTags;

export function* filterByTags(action) {
  const { selectedTags } = action.payload;
  if (selectedTags === "All") {
    yield put(actions.setSelectedTags([]));
  } else {
    const tags = yield select(getSelectedTags);
    const newTags = toggleToArray(tags, selectedTags);
    yield put(actions.setSelectedTags(newTags));
  }
  yield put(itemsActions.setList([], 0, 1));
  yield put(itemsActions.getList());
}
export function* filterByTagsSaga() {
  yield takeLatest(constants.FILTER_BY_TAGS, filterByTags);
}

export function* getAllTags() {
  try {
    yield put(actions.loading(true));
    const response = yield call(services.getTags);
    yield put(actions.setTags(response.data));
  } catch (error) {
    yield put(
      actions.failure(true, "Some errors happend, please try again later")
    );
  } finally {
    yield put(actions.loading(false));
  }
}
export function* getAllTagsSaga() {
  yield takeLatest(constants.GET_TAGS, getAllTags);
}

export const sagas = [getAllTagsSaga(), filterByTagsSaga()];
