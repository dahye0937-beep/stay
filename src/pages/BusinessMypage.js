// --- 사업자 마이페이지 ---

import { useNavigate } from "react-router-dom";
import "./BusinessMypage.scss";
import Staylogo from "../assets/images/Logo/EGWH_logo.png";
import DesktopLogo from "../assets/images/Logo/logo-2.png";

const BusinessMypage = () => {
  const navigate = useNavigate();
  const mypageData = {
    role: "사업자",
    building: "0000",
    unit: "0000",
    name: "온담 감자탕",
    carNumber: "12가3456",
    parkingLocation: "A1-6번",
  };

  return (
    <div className="business-mypage">
      {/* 데스크탑 로고 */}
      <div className="b-logo">
        <img src={DesktopLogo} alt="EGWH 데스크탑 로고" />
      </div>
      {/* 상단 카드 */}
      <section className="business-card">
        <img src={Staylogo} alt="EGWH 로고" className="stay-logo" />
        <div className="mypage-info">
          <span className="role">{mypageData.role}</span>
          <p className="address">
            {mypageData.building}동 {mypageData.nuit} 호
          </p>
          {/* 사업자만 상호명 노출 */}
          {mypageData.name && (
            <h2 className="name">{mypageData.name}</h2>
          )}
          <span className="parking">
            현재 주차 위치: {mypageData.parkingLocation}
          </span>
        </div>
        {/* 카드 버튼 */}
        <div className="mypage-actions">
          <button>차량 정보 수정</button>
          <button>문의 하기</button>
          <button>이용 가이드</button>
        </div>
      </section>
      {/* 메뉴 리스트 */}
      <section className="mypage-menu">
        <button>공지사항</button>
        <button
        onClick={()=>{
          navigate("/app/business/visited");
        }}
        >
          방문했던 차량
        </button>
        <button>자주 묻는 질문</button>
      </section>
      {/* 로그아웃 */}
      <button className="mypage-logout">로그아웃</button>
    </div>
  );
};

export default BusinessMypage;