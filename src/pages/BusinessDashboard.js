import SystemController from "../components/SystemController";
import BannerSection from "./BannerSection";
import "./BusinessDashboard.scss";
import topImg from "../assets/images/Top/Intersect_OR.png";
import Weather from "../components/Weather";
import ParkingInfo from "../components/ParkingInfo";
import ParkingGird from "../components/ParkingGird";
import { fetchHeaderBundle } from "../api/userApi";
import { useEffect, useState } from "react";

const BusinessDashboard = ({ profile }) => {
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
    <section id="business">
      <div className="business-top">
        <img src={topImg} alt="상단 이미지" />
        <div className="business-txt">
          <h2>많이 버세요</h2>
          {/* supabase를 통한 정보 불러오기 */}
          {headerInfo ? (
            <>
              <p>{headerInfo.user_name}</p>
              <p>{headerInfo.dong_ho}</p>
            </>
          ) : (
            <p>사용자 정보를 불러오는 중...</p>
          )}
          <Weather />
        </div>
      </div>
      <SystemController role="business" />
      <BannerSection />
      <ParkingInfo />
      <ParkingGird />
    </section>
  );
};
export default BusinessDashboard;
