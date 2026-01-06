// --- 입주민 메인 페이지 ---

import ParkingDashboard from "./ParkingDashboard";
import SystemController from "../components/SystemController";
import BannerSection from "./BannerSection";
import { useNavigate } from "react-router-dom";

const ResidentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>좋은하루</h1>
      <ParkingDashboard />
      <SystemController role="resident" />
      <BannerSection />
      <div className="favorite">
        <button
          onClick={() => {
            navigate("/app/resident/favorite");
          }}
        >
          즐겨 찾는 차량
        </button>
      </div>
    </div>
  );
};

export default ResidentDashboard;
