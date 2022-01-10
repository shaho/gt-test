import Item from "./item";
import { ItemsGrid } from "./styles";

function ItemsComponent({ list = [], handler }) {
  const handle = (item) => {
    handler(item);
  };

  return (
    <ItemsGrid>
      {list.map((item) => (
        <Item
          key={item.slug}
          slug={item.slug}
          name={item.name}
          price={item.price}
          handler={handle}
        />
      ))}
    </ItemsGrid>
  );
}

export default ItemsComponent;
