import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BrandsComponent from "./brands";
import * as actions from "./actions";

const Brands = () => {
  const { failure, loading, brands, error_message, selectedBrands } =
    useSelector((state) => state.brands);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBrands());
  }, []);

  const setBrands = (brand) => {
    dispatch(actions.filterByBrands(brand));
  };

  return (
    <BrandsComponent
      list={brands}
      loading={loading}
      failure={failure}
      error_message={error_message}
      selected={selectedBrands}
      handler={setBrands}
    />
  );
};

export default Brands;
