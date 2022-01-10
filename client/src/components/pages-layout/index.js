import Footer from "./footer";
import Header from "./header";
import { MainContainer } from "./styles";

function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <MainContainer className="container">{children}</MainContainer>
      <Footer />
    </>
  );
}

export default PagesLayout;
