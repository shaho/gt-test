import * as constants from "./constants";

const initial = {
  selectedOrder: "",
};
export function reducers(state = initial, action) {
  switch (action.type) {
    case constants.SET_SELECTED_SORT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
