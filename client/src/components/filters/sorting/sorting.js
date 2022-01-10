import FilterBox from "../filter-box";
import Radio from "../../form-elements/radio";
import { sortTypes } from "./types";

function SortingComponent({ handler, selectedOrder = "", types = sortTypes }) {
  const keys = Object.keys(types);
  const list = [];
  keys.forEach((key) => list.push({ key: key, ...types[key] }));

  const handle = (sort) => {
    handler(sort);
  };

  return (
    <FilterBox title="Sorting">
      {list.map((item) => (
        <Radio
          key={item.key}
          slug={item.key}
          label={item.title}
          selected={item.key === selectedOrder}
          handler={handle}
        />
      ))}
    </FilterBox>
  );
}

export default SortingComponent;
