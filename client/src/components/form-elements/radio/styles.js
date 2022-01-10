import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  margin: 8px 0;
  span {
    font-size: 14px;
    line-height: 18px;
  }
  .radio {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 2px solid #dfdee2;
    margin-right: 12px;
    border-radius: 50%;
    img {
      display: none;
    }
  }
  &.selected {
    .radio {
      border-color: #1ea4ce;
      img {
        display: inline-block;
      }
    }
  }
`;
