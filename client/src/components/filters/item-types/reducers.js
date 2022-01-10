import * as constants from "./constants";

const initial = {
  selectedType: "",
};
export function reducers(state = initial, action) {
  switch (action.type) {
    case constants.SET_SELECTED_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
