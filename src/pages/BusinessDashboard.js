import SystemController from "../components/SystemController";
import BannerSection from "./BannerSection";
import "./BusinessDashboard.scss";
import topImg from "../assets/images/Top/Intersect_OR.png";
import Weather from "../components/Weather";
import ParkingInfo from "../components/ParkingInfo";
import ParkingGird from "../components/ParkingGird";

const BusinessDashboard = () => {
  return (
    <section id="business">
      <div className="business-top">
        <img src={topImg} alt="상단 이미지" />
        <div className="business-txt">
          <h2>많이 버세요</h2>
          {/* supabase를 통한 정보 불러오기 */}
          <p>온담 감자탕</p>
          <p>A동 B호</p>
          <Weather />
        </div>
      </div>
      <SystemController role="business" />
      <BannerSection />
      <ParkingInfo/>
      <ParkingGird/>
    </section>
  );
};
export default BusinessDashboard;
