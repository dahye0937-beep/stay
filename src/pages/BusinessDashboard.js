// --- 사업자 메인 페이지 ---

import ParkingDashboard from "./ParkingDashboard";
import SystemController from "../components/SystemController";
import BannerSection from "./BannerSection";
import { useNavigate } from "react-router-dom";
import './BusinessDashboard.scss'

const BusinessDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>많이 버세요</h1>
      <ParkingDashboard />
      <SystemController role="business" />
      <BannerSection />
      <div className="favorite">
        <button
          onClick={() => {
            navigate("/app/business/favorite");
          }}
        >
          즐겨 찾는 차량
        </button>
      </div>
    </div>
  );
};

export default BusinessDashboard;
