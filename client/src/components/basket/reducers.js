import * as constants from "./constants";

const initial = {
  basket: [],
  amount: 0,
};
export function reducers(state = initial, action) {
  switch (action.type) {
    case constants.SET_BASKET:
    case constants.SET_AMOUNT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
