import styled from "styled-components";

export const FooterWrapper = styled.div`
  color: #1ea4ce;
  text-align: center;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      font-size: 13px;
      margin: 0 20px;
      position: relative;
      &:after {
        content: " • ";
        position: absolute;
        right: -22px;
      }
      &:last-child:after {
        content: "";
      }
    }
  }
`;
