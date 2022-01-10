import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  background-color: #1ea4ce;
  height: 77px;
  color: white;
  position: fixed;
  inset: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  height: 100%;
  align-items: center;
  position: relative;
  padding: 0 20px;
  @media (min-width: 999px) {
    justify-content: center;
  }
  > button {
    position: absolute;
    right: 0;
    top: 0;
    @media (min-width: 999px) {
      right: 8px;
    }
  }
`;

export const Logo = styled.a`
  display: inline-block;
`;
