// --- 입주민 메인 페이지 ---

import SystemController from "../components/SystemController";
import BannerSection from "./BannerSection";
import { useNavigate } from "react-router-dom";
import Weather from "../components/Weather";
import topImg from "../assets/images/Top/Intersect_PR.png";
import "./ResidentDashboard.scss";

const ResidentDashboard = () => {
  const navigate = useNavigate();

  return (
    <section id="resident">
      <div className=" resident-top">
        <img src={topImg} alt="상단 이미지" />
        <div className="resident-txt">
          <h2>좋은 하루 보내삼</h2>
          {/* supabase를 통한 정보 불러오기 */}
          <p>동탄역 스테이 타워</p>
          <p>102동 1203호</p>
          <Weather />
        </div>
      </div>
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
