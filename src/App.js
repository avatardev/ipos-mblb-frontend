import { BrowserRouter, Routes, Route } from "react-router-dom";
import MerchantProduct from "./pages/product/MerchantProduct";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/produk/master" element={<Product />} />
          <Route path="/merchant-product" element={<MerchantProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
