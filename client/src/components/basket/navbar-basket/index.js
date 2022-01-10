import { useSelector } from "react-redux";

import NarbarBasketComponent from "./navbar-basket";

function NarbarBasket() {
  const { amount } = useSelector((state) => state.basket);
  return <NarbarBasketComponent amount={amount} />;
}

export default NarbarBasket;
