import { LoadingItem } from "./loading-item";
import { ItemsGrid } from "./styles";

function Loading({ count = Number(process.env.REACT_APP_ITEM_PER_PAGE) }) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  return (
    <ItemsGrid>
      {arr.map((index) => (
        <LoadingItem key={index} />
      ))}
    </ItemsGrid>
  );
}

export default Loading;
