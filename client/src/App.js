import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./theme/injectGlobal";
import ProductsPage from "./pages/products";
import NotFound from "./pages/not-found";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/page/:page" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
