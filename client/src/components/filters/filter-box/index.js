import { useState } from "react";
import { FilterBoxWrapper, Title } from "./styles";

const FilterBox = ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <FilterBoxWrapper>
      <Title onClick={() => setShow(!show)}>
        <span>{title}</span>{" "}
        <span className="click">click to {show ? "close" : "open"}</span>
      </Title>
      <div className={`box ${show && "open"}`}>{children}</div>
    </FilterBoxWrapper>
  );
};

export default FilterBox;
