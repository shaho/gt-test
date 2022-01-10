import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";

import ItemsComponent from "./items";
import Pagination from "../pagination";
import * as basketActions from "../basket/actions";
import * as itemsActions from "./actions";
import Loading from "../loading";
import { CalculateFromNTo } from "../../utils";

function Items() {
  const { page } = useParams();

  const { failure, loading, list, error_message, totalItems } = useSelector(
    (state) => state.items
  );
  const dispatch = useDispatch();

  const { from, to, totalPageCount } = CalculateFromNTo(page, totalItems);

  useEffect(() => {
    dispatch(itemsActions.getList(from, to));
  }, []);

  if (totalPageCount && Number(page) > totalPageCount) {
    return <Navigate to="/404-not-found" />;
  }

  const addOrRemoveBasket = (item, type) => {
    dispatch(basketActions.addOrRemoveBasket(item, type));
  };

  const currentPage = isNaN(Number(page)) ? 1 : Number(page);
  return (
    <>
      <div className="box">
        {loading && <Loading />}
        {failure && <div>{error_message}</div>}
        {!loading && <ItemsComponent list={list} handler={addOrRemoveBasket} />}
      </div>
      {!loading && (
        <Pagination currentPage={currentPage} totalPages={totalPageCount} />
      )}
    </>
  );
}

export default Items;
