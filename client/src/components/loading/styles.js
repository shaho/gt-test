import styled from "styled-components";

export const ItemsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 999px) {
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
