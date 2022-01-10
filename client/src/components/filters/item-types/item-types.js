import { Button, ItemTypesWrapper } from "./styles";

function ItemTypesComponent({
  types = ["mug", "shirt"],
  handler,
  activeType = "",
}) {
  return (
    <ItemTypesWrapper>
      {types.map((type, index) => (
        <Button
          key={index}
          className={activeType === type ? "active" : ""}
          onClick={() => handler(type)}
        >
          {type}
        </Button>
      ))}
    </ItemTypesWrapper>
  );
}

export default ItemTypesComponent;
