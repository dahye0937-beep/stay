// --- 입주민 메인 페이지 ---

import SystemController from "../components/SystemController";
import BannerSection from "./BannerSection";
import { useNavigate } from "react-router-dom";
import Weather from "../components/Weather";
import topImg from "../assets/images/Top/Intersect_PR.png";
import "./ResidentDashboard.scss";
import ParkingInfo from "../components/ParkingInfo";
import ParkingGird from "../components/ParkingGird";
import { useEffect, useState } from "react";
import { fetchHeaderBundle } from "../api/userApi";

const ResidentDashboard = ({ profile }) => {
  const navigate = useNavigate();
  const [headerInfo, setHeaderInfo] = useState(null); // 사용자 정보

  useEffect(() => {
    if (!profile || !profile.id) return;
    const loadHeaderInfo = async () => {
      try {
        const data = await fetchHeaderBundle(profile.id); // 사용자 정보 가져오기
        setHeaderInfo(data);
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
      }
    };

    loadHeaderInfo(); // 함수 호출
  }, [profile]); // profile이 바뀔 때마다 실행

  return (
    <section id="resident">
      <div className=" resident-top">
        <img src={topImg} alt="상단 이미지" />
        <div className="resident-txt">
          <h2>좋은 하루 보내삼</h2>
          {/* supabase를 통한 정보 불러오기 */}
          {headerInfo ? (
            <>
              <p>{headerInfo.user_name} 님</p>
              <p>{headerInfo.dong_ho}</p>
            </>
          ) : (
            <p>사용자 정보를 불러오는 중...</p>
          )}
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
      <ParkingGird />
    </section>
  );
};

export default ResidentDashboard;
