import styled from "styled-components";

export const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #f3f0fe;
  img {
    width: 100%;
    min-height: 92px;
    float: left;
  }
`;
export const Price = styled.div`
  width: 100%;
  margin: 8px 0 3px;
  font-size: 14px;
  font-weight: 500;
  color: #1ea4ce;
`;
export const Title = styled.h3`
  width: 100%;
  height: 48px;
  font-size: 14px;
  font-weight: 700;
  color: #191919;
  overflow: hidden;
  margin: 0;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #1ea4ce;
  height: 22px;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: #147594;
  }
`;
