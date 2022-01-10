import { put, takeLatest, select } from "redux-saga/effects";

import * as actions from "./actions";
import * as constants from "./constants";
import { CalculateTotalAmount, addItem, removeItem } from "../../utils";

export const getStoredBasket = (state) => state.basket.basket;

export function* addOrRemoveBasket(action) {
  const { item, type } = action.payload;
  const storedBasket = yield select(getStoredBasket);
  const newBasket =
    type === "increase"
      ? addItem(storedBasket, item)
      : removeItem(storedBasket, item);
  yield put(actions.setBasket(newBasket));
  const totalAmount = CalculateTotalAmount(newBasket);
  yield put(actions.setAmount(totalAmount));
}
export function* addOrRemoveBasketSaga() {
  yield takeLatest(constants.ADD_BASKET, addOrRemoveBasket);
}

export const sagas = [addOrRemoveBasketSaga()];
