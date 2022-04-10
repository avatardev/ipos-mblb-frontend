import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authoize from "./middlewares/Authorize";
import Login from "./pages/auth/Login";
import Buyer from "./pages/buyer/Buyer";
import BuyerUser from "./pages/buyer/BuyerUser";
import CategoryBuyer from "./pages/buyer/CategoryBuyer";
import Dashboard from "./pages/dashboard/Dasboard";
import NotFound from "./pages/handler/NotFound";
import Location from "./pages/location/Location";
import CategoryProduct from "./pages/product/CategoryProduct";
import MerchantList from "./pages/product/MerchantList";
import MerchantProduct from "./pages/product/MerchantProduct";
import Product from "./pages/product/Product";
import BriefReport from "./pages/report/BriefReport";
import ComparisonReport from "./pages/report/ComparisonReport";
import DailyReportList from "./pages/report/DailyReport";
import DailyReportDetail from "./pages/report/DailyReportDetail";
import ReportDetail from "./pages/report/ReportDetail";
import Seller from "./pages/seller/Seller";
import SellerUser from "./pages/seller/SellerUser";
import AdminUser from "./pages/user/Admin";
import CheckerUser from "./pages/user/Checker";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/mblb/dev2">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/produk/seller" element={<MerchantList />} />
          <Route
            path="/produk/seller/:merchantId/:merchantName"
            element={<MerchantProduct />}
          />
          <Route path="/pembeli" element={<Buyer />} />
          <Route path="/pembeli/kategori" element={<CategoryBuyer />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route element={<Authoize />}>
            <Route path="/produk/master" element={<Product />} />
            <Route path="/produk/kategori" element={<CategoryProduct />} />
            <Route path="/penjual" element={<Seller />} />
            <Route path="/penjual/:corpId/:corpName" element={<SellerUser />} />
            <Route path="/pembeli/:corpId" element={<BuyerUser />} />
            <Route path="/user/admin" element={<AdminUser />} />
            <Route path="/user/checker" element={<CheckerUser />} />
            <Route path="/lokasi" element={<Location />} />
          </Route>
            <Route
              path="/laporan/detail-transaksi"
              element={<ReportDetail />}
            />
            <Route path="/laporan/transaksi" element={<BriefReport />} />
            <Route path="/laporan/pembanding" element={<ComparisonReport />} />
            <Route path="/laporan/harian" element={<DailyReportList />} />
            <Route
              path="/laporan/harian/:corpId/:corpName"
              element={<DailyReportDetail />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
