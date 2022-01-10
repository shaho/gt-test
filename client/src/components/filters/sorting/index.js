import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";
import SortingComponent from "./sorting";

function Sorting() {
  const dispatch = useDispatch();
  const { selectedOrder } = useSelector((state) => state.sorting);

  const setSort = (sort) => {
    dispatch(actions.sort(sort));
  };

  return <SortingComponent handler={setSort} selectedOrder={selectedOrder} />;
}

export default Sorting;
