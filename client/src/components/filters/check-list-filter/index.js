import { useEffect, useState } from "react";

import FilterBox from "../filter-box";
import Checkbox from "../../form-elements/check-box";
import { LoadingFilters } from "../../loading/loading-item";
import { addSelectedProp } from "../../../utils";
import { FilterWrapper, CheckListrWrapper, Input } from "./styles";

function CheckListFilter({
  list = [],
  loading = false,
  failure = false,
  error_message = "",
  selected = [],
  handler,
  title = "",
}) {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (list.length > 0) {
      const result = addSelectedProp(list, selected);
      setItems(result);
    }
  }, [list, selected]);

  useEffect(() => {
    if (keyword) {
      const result = items.filter((item) =>
        item.name.toLowerCase().includes(keyword)
      );
      setFiltered(result);
    }
  }, [keyword, items]);

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const renderFarm = (items, filtered) => {
    const list = keyword ? filtered : items;
    const output = list.map((item) => (
      <Checkbox
        key={item.slug}
        slug={item.slug}
        label={item.name}
        selected={item?.selected}
        handler={handle}
      />
    ));
    return output;
  };

  const handle = (item) => {
    handler(item);
  };

  return (
    <FilterBox title={title}>
      <FilterWrapper>
        {loading && <LoadingFilters />}
        {failure && <div>{error_message}</div>}
        {!loading && (
          <>
            <Input
              type="text"
              className="input"
              placeholder={`Search ${title}`}
              name="keyword"
              value={keyword}
              onChange={handleChange}
            />
            <CheckListrWrapper>
              <Checkbox
                label="All"
                selected={selected.length === 0}
                handler={() => handle("All")}
              />
              {renderFarm(items, filtered)}
            </CheckListrWrapper>
          </>
        )}
      </FilterWrapper>
    </FilterBox>
  );
}

export default CheckListFilter;
