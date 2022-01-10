import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  border-radius: 2px;
  border: 2px solid #1ea4ce;
  padding: 0 23px;
  height: 52px;
  line-height: 50px;
  color: #1ea4ce;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  margin-top: 16px;
  &:hover {
    background-color: #1ea4ce;
    color: white;
  }
`;
export const Box = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 2px;
  padding: 18px 16px;
  border: 8px solid #1ea4ce;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
