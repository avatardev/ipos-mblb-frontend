import { BrowserRouter, Routes, Route } from "react-router-dom";
import MerchantProduct from "./pages/product/MerchantProduct";
import Product from "./pages/product/Product";
import Seller from "./pages/seller/Seller";
import SellerUser from "./pages/seller/SellerUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/produk/master" element={<Product />} />
          <Route path="/produk/seller" element={<MerchantProduct />} />
          <Route path="/penjual" element={<Seller />} />
          <Route path="/penjual/:corpId" element={<SellerUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
