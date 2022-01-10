import { StyledItem, ImageWrapper, Price, Title, Button } from "./styles";

function Item({ name, price, slug, handler }) {
  return (
    <StyledItem>
      <ImageWrapper>
        <img src="/images/cropped-placeholder.jpeg" alt={name} />
      </ImageWrapper>
      <Price>₺{price}</Price>
      <Title>{name}</Title>
      <Button onClick={() => handler({ name, price, slug })}>Add</Button>
    </StyledItem>
  );
}

export default Item;
