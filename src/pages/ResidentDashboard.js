// --- 입주민 메인 페이지 ---

import ParkingDashboard from "./ParkingDashboard";
import SystemController from "../components/SystemController";
import BannerSection from "./BannerSection";
import { useNavigate } from "react-router-dom";
import topImg from "../assets/images/Top/Intersect_PR.svg";

const ResidentDashboard = () => {
  const navigate = useNavigate();

  return (
    <section id="resident">
      <img src={topImg} alt="상단 이미지" />
      <h1>좋은 하루 보내삼</h1>
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
    </section>
  );
};

export default ResidentDashboard;
