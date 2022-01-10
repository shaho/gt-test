import { Button } from "./styles";

function NarbarBasketComponent({ amount }) {
  return (
    <Button>
      <img src="/images/basket.svg" alt="basket" />
      <span>₺{Number(amount)}</span>
    </Button>
  );
}

export default NarbarBasketComponent;
