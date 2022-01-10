import { Row, ITemInfo, Name, Price, ITemForm, Button, Count } from "./styles";

function BasketItem({
  name = "",
  price = "",
  count = 1,
  slug = "",
  handler = () => {},
}) {
  return (
    <Row className="basket-item">
      <ITemInfo>
        <Name>{name}</Name>
        <Price>₺ {price}</Price>
      </ITemInfo>
      <ITemForm>
        <Button
          onClick={() => handler({ slug }, "decrease")}
          className="decrease"
        >
          <img src="/images/decrease.svg" alt="decrease" />
        </Button>
        <Count>{count}</Count>
        <Button
          onClick={() => handler({ slug }, "increase")}
          className="increase"
        >
          <img src="/images/increase.svg" alt="increase" />
        </Button>
      </ITemForm>
    </Row>
  );
}

export default BasketItem;
