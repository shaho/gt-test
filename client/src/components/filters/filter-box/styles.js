import styled from "styled-components";

export const FilterBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  .box {
    display: none;
    &.open {
      display: block;
    }
    @media (min-width: 999px) {
      display: block;
    }
  }
`;
export const Title = styled.button`
  text-align: left;
  width: 100%;
  color: #697488;
  font-size: 13px;
  font-weight: 500;
  margin: 3px 0;
  background: transparent;
  border: none;
  outline: none;
  display: inline-flex;
  justify-content: space-between;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  padding: 8px 4px;
  @media (min-width: 999px) {
    border: none;
    margin: 12px 0;
    padding: 0;
  }
  .click {
    display: inline-block;
    @media (min-width: 999px) {
      display: none;
    }
  }
`;
