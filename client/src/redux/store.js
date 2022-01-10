import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { sagas as basketSagas } from "../components/basket/sagas";
import { reducers as basketReducers } from "../components/basket/reducers";
import { sagas as itemTypesSagas } from "../components/filters/item-types/sagas";
import { reducers as itemTypesReducers } from "../components/filters/item-types/reducers";
import { sagas as sortingSagas } from "../components/filters/sorting/sagas";
import { reducers as sortingReducers } from "../components/filters/sorting/reducers";
import { sagas as itemsSagas } from "../components/items/sagas";
import { reducers as itemsReducers } from "../components/items/reducers";
import { sagas as brandsSagas } from "../components/filters/brands/sagas";
import { reducers as brandsReducers } from "../components/filters/brands/reducers";
import { sagas as tagsSagas } from "../components/filters/tags/sagas";
import { reducers as tagsReducers } from "../components/filters/tags/reducers";

const rootSaga = function* () {
  yield all([
    ...basketSagas,
    ...itemTypesSagas,
    ...sortingSagas,
    ...itemsSagas,
    ...brandsSagas,
    ...tagsSagas,
  ]);
};
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  basket: basketReducers,
  itemTypes: itemTypesReducers,
  sorting: sortingReducers,
  items: itemsReducers,
  brands: brandsReducers,
  tags: tagsReducers,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export { store };
