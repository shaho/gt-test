import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: white;
  cursor: pointer;
  img {
  }
`;

export const Count = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  line-height: 32px;
  color: white;
  background-color: #1ea4ce;
`;

export const Row = styled.div`
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 16px 0;
  display: flex;
  justify-content: stretch;
`;

export const Name = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #191919;
`;
export const Price = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #1ea4ce;
`;

export const ITemInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
`;
export const ITemForm = styled.div`
  display: inline-flex;
  flex: 0 0 96px;
  max-width: 96px;
  height: 32px;
  justify-content: stretch;
  button,
  div {
    flex: 1;
    max-width: 32px;
  }
`;
