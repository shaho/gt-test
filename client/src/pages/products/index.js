import PagesLayout from "../../components/pages-layout";
import Items from "../../components/items";
import Sorting from "../../components/filters/sorting";
import Brands from "../../components/filters/brands";
import Tags from "../../components/filters/tags";
import ItemTypes from "../../components/filters/item-types";
import Basket from "../../components/basket";
import { Main, SideBarOne, SideBarTwo } from "../styles";

function ProductsPage() {
  return (
    <PagesLayout>
      <SideBarOne className="col col-3">
        <Sorting />
        <Brands />
        <Tags />
      </SideBarOne>
      <Main className="col col-6">
        <h1>Products</h1>
        <ItemTypes />
        <Items />
      </Main>
      <SideBarTwo className="col col-3">
        <Basket />
      </SideBarTwo>
    </PagesLayout>
  );
}

export default ProductsPage;
