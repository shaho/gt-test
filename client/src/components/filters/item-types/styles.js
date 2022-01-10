import styled from "styled-components";

export const Button = styled.button`
  background-color: #f2f0fd;
  color: #1ea4ce;
  font-size: 13px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 2px;
  height: 30px;
  line-height: 30px;
  padding: 0 16px;
  &.active {
    background-color: #1ea4ce;
    color: white;
  }
`;
export const ItemTypesWrapper = styled.div`
  width: 100%;
  margin: 16px 0;
`;
