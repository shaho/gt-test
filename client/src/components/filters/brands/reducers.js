import * as constants from "./constants";

const initial = {
  brands: [],
  failure: false,
  loading: false,
  selectedBrands: [],
  error_message: "",
};
export function reducers(state = initial, action) {
  switch (action.type) {
    case constants.SET_BRANDS:
    case constants.BRANDS_FAILURE:
    case constants.BRANDS_LOADING:
    case constants.SET_SELECTED_BRANDS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
