import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  margin: 9px 0;
  padding: 0 3px;
  text-align: left;
  span {
    font-size: 14px;
    height: 22px;
    line-height: 24px;
    display: inline-block;
    overflow: hidden;
  }
  .checkbox {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    border-radius: 2px;
    box-shadow: 0 2px 7px rgba(93, 56, 192, 0.4);
    background-color: white;
    img {
      display: none;
    }
  }
  &.selected {
    .checkbox {
      background-color: #1ea4ce;
      img {
        display: inline-block;
      }
    }
  }
`;
