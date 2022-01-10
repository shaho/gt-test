import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

export const CheckListrWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  height: 120px;
  overflow: scroll;
`;

export const Input = styled.input`
  width: 100%;
  background-color: white;
  color: #999;
  border-radius: 2px;
  border: 2px solid #e0e0e0;
  height: 48px;
  line-height: 50px;
  font-size: 14px;
  padding: 0 14px;
  &:focus {
    border-color: #e0e0e0;
  }
`;
