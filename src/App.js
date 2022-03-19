import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryProduct from "./pages/product/CategoryProduct";
import MerchantList from "./pages/product/MerchantList";
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
          <Route path="/produk/seller" element={<MerchantList />} />
          <Route path="/produk/seller/:merchantId" element={<MerchantProduct />} />
          <Route path="/produk/kategori" element={<CategoryProduct />} />
          <Route path="/penjual" element={<Seller />} />
          <Route path="/penjual/:corpId" element={<SellerUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
