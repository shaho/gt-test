import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
`;

export const LoadingBox = styled.div`
  border-radius: ${(props) => (props.radius ? props.radius : "0")}px;
  width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  margin-top: ${(props) => props.margin}px;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  animation: loading 1.4s ease infinite;
  background-size: 400% 100%;
`;
