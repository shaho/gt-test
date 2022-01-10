import styled from "styled-components";

export const Main = styled.main`
  order: 3;
  @media (min-width: 999px) {
    order: 2;
  }
`;
export const SideBarOne = styled.aside`
  order: 1;
  @media (min-width: 999px) {
    order: 1;
  }
`;
export const SideBarTwo = styled.aside`
  order: 2;
  @media (min-width: 999px) {
    order: 3;
  }
`;
