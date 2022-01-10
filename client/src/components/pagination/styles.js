import styled from "styled-components";

export const Pages = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 32px 0;

  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  a,
  > span {
    color: #697488;
    display: inline-block;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    padding: 0 12px;
  }
  a {
    border-radius: 2px;
    &:hover {
      color: #1ea4ce;
      span {
        color: #1ea4ce;
      }
      svg {
        fill: #1ea4ce;
      }
    }
    svg {
      margin: 0 8px;
      fill: #697488;
      transform: translateY(3px);
    }
  }

  .active {
    color: white;
    background-color: #1ea4ce;
    &:hover {
      color: white;
    }
  }
`;
