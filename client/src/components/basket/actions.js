import * as constants from "./constants";

export const setBasket = (basket) => ({
  type: constants.SET_BASKET,
  payload: {
    basket,
  },
});

export const addOrRemoveBasket = (item, type = "increase") => ({
  type: constants.ADD_BASKET,
  payload: {
    item,
    type,
  },
});

export const setAmount = (amount) => ({
  type: constants.SET_AMOUNT,
  payload: {
    amount,
  },
});
