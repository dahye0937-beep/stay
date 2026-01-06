import LoginPages from "./pages/LoginPages";
import SignUpPages from "./pages/SignUpPages";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import ParkingDashboard from "./pages/ParkingDashboard";
import ResidentDashboard from "./pages/ResidentDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import "./assets/scss/global.scss";
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
        {/* 처음 로그인 화면 */}
        <Route path="/" element={<LoginPages />} />
        {/* 회원가입 화면 */}
        <Route path="/signup" element={<SignUpPages />} />
        {/* 로그인 후 layout 보여짐 */}
        <Route path="/app" element={<Layout />}>
          {/* Layout에 보여질 페이지 */}
          <Route path="dashboard" element={<ParkingDashboard />} />
        </Route>
        {/* 입주민 페이지 */}
        <Route path="/app/resident" element={<Layout />}>
          <Route index element={<ResidentDashboard />} />
          <Route path="/app/resident/favorite" element={<ResidentFav />} />
          <Route path="/app/resident/mypage" element={<ResidentMypage />} />
        </Route>
        {/* 사업가 페이지 */}
        <Route path="/app/business" element={<Layout />}>
          <Route index element={<BusinessDashboard />} />
          <Route path="/app/business/favorite" element={<BusinessFav />} />
          <Route path="/app/business/mypage" element={<BusinessMypage />} />
        </Route>
        {/* 관리자 페이지 */}
        <Route path="/app/admin" element={<Layout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/app/admin/okpage" element={<OkPage />} />
          <Route path="/app/admin/salepage" element={<SalePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
