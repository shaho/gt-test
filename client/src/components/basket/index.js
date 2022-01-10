import { useSelector, useDispatch } from "react-redux";

import BasketComponent from "./basket";
import * as actions from "./actions";

function Basket() {
  const { basket, amount } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const addOrRemoveBasket = (item, type) => {
    dispatch(actions.addOrRemoveBasket(item, type));
  };
  return (
    <BasketComponent
      itemsInBasket={basket}
      amount={amount}
      handler={addOrRemoveBasket}
    />
  );
}

export default Basket;
