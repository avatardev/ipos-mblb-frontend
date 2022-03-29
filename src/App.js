import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Buyer from "./pages/buyer/Buyer";
import BuyerUser from "./pages/buyer/BuyerUser";
import CategoryBuyer from "./pages/buyer/CategoryBuyer";
import Location from "./pages/location/Location";
import CategoryProduct from "./pages/product/CategoryProduct";
import MerchantList from "./pages/product/MerchantList";
import MerchantProduct from "./pages/product/MerchantProduct";
import Product from "./pages/product/Product";
import Seller from "./pages/seller/Seller";
import SellerUser from "./pages/seller/SellerUser";
import AdminUser from "./pages/user/Admin";
import CheckerUser from "./pages/user/Checker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/produk/master" element={<Product />} />
          <Route path="/produk/seller" element={<MerchantList />} />
          <Route path="/produk/seller/:merchantId/:merchantName" element={<MerchantProduct />} />
          <Route path="/produk/kategori" element={<CategoryProduct />} />
          <Route path="/penjual" element={<Seller />} />
          <Route path="/penjual/:corpId" element={<SellerUser />} />
          <Route path="/pembeli" element={<Buyer />} />
          <Route path="/pembeli/kategori" element={<CategoryBuyer />} />
          <Route path="/pembeli/:corpId" element={<BuyerUser />} />
          <Route path="/user/admin" element={<AdminUser />} />
          <Route path="/user/checker" element={<CheckerUser />} />
          <Route path="/lokasi" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
