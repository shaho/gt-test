import { useSelector, useDispatch } from "react-redux";

import ItemTypesComponent from "./item-types";
import * as actions from "./actions";

function ItemTypes() {
  const { selectedType } = useSelector((state) => state.itemTypes);

  const dispatch = useDispatch();

  const setType = (type) => {
    dispatch(actions.filterByType(type));
  };

  return <ItemTypesComponent activeType={selectedType} handler={setType} />;
}

export default ItemTypes;
