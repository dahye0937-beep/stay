import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginPages from "./pages/LoginPages";
import SignUpPages from "./pages/SignUpPages";
import ParkingDashboard from "./pages/ParkingDashboard";
import ResidentDashboard from "./pages/ResidentDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ResidentFav from "./pages/ResidentFav";
import BusinessFav from "./pages/BusinessFav";
import ResidentMypage from "./pages/ResidentMypage";
import BusinessMypage from "./pages/BusinessMypage";
import OkPage from "./pages/OkPage";
import SalePage from "./pages/SalePage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* 로그인 / 회원가입 페이지 */}
        <Route path="/" element={<LoginPages />} />
        <Route path="/signup" element={<SignUpPages />} />

        {/* 공통 Layout*/}
        <Route path="/app" element={<Layout />}>
          <Route index element={<ParkingDashboard />} />

          {/* 입주민 페이지 */}
          <Route path="resident">
            <Route index element={<ResidentDashboard />} />
            <Route path="favorite" element={<ResidentFav />} />
            <Route path="mypage" element={<ResidentMypage />} />
          </Route>

          {/* 사업자 페이지 */}
          <Route path="business">
            <Route index element={<BusinessDashboard />} />
            <Route path="favorite" element={<BusinessFav />} />
            <Route path="mypage" element={<BusinessMypage />} />
          </Route>

          {/* 관리자 페이지 */}
          <Route path="admin">
            <Route index element={<AdminDashboard />} />
            <Route path="okpage" element={<OkPage />} />
            <Route path="salepage" element={<SalePage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
