import NarbarBasket from "../../basket/navbar-basket";
import { Navbar, Logo, NavbarContainer } from "./styles";

function Header() {
  return (
    <Navbar>
      <NavbarContainer className="container">
        <Logo href="">
          <img src="/images/logo.svg" alt="Market" />
        </Logo>
        <NarbarBasket />
      </NavbarContainer>
    </Navbar>
  );
}

export default Header;
