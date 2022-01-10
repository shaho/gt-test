import BasketItem from "./basket-item";
import { Button, Box } from "./styles";

function BasketComponent({ itemsInBasket = [], amount = "", handler }) {
  const handle = (item, type) => {
    handler(item, type);
  };
  return (
    <Box>
      {itemsInBasket.map((item) => (
        <BasketItem
          key={item.slug}
          slug={item.slug}
          name={item.name}
          price={item.price}
          count={item.count}
          handler={handle}
        />
      ))}
      {Number(amount) ? (
        <Button>₺{amount}</Button>
      ) : (
        "There is no item in your basket!"
      )}
    </Box>
  );
}

export default BasketComponent;
