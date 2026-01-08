// --- 입주민 마이페이지 ---

import { useNavigate } from "react-router-dom";
import EGWHLogo from "../assets/images/Logo/EGWH_logo.png";
import DesktopLogo from "../assets/images/Logo/logo-2.png";
import "./ResidentMypage.scss";

const ResidentMypage = () => {
  const navigate = useNavigate();
  //DB 연동 예정(더미 데이터)
  const mypageData = {
    role: "입주민",
    building: "0000",
    nuit: "0000",
    carNumber: "12가3456",
    parkingLocation: "B3-2번",
  };

  return (
    <div className="resident-mypage">
      {/* 데스크탑 로고 */}
      <div className="r-logo">
        <img src={DesktopLogo} alt="EGWH 데스크탑 로고" />
      </div>
      {/* 상단 카드 */}
      <section className="resident-card">
        <img  src= {EGWHLogo} alt="EGWH 로고" className="brand-logo"/>
        <div className="mypage-info">
          <span className="role">{mypageData.role}</span>
          <p className="address">
            {mypageData.building}동 {mypageData.nuit}호
          </p>
          <h2 className="car-number">{mypageData.carNumber}</h2>
          <span className="parking">
            현재 주차 위치: {mypageData.parkingLocation}
          </span>
      </div>
      {/* 카드 버튼 */}
      <div className="card-actions">
        <button>차량 정보 수정</button>
        <button>문의 하기</button>
        <button>이용 가이드</button>
      </div>
      </section>
      {/* 메뉴 리스트 */}
      <section className="menu-list">
        <button>공지사항</button>
        <button
          onClick={()=>{
            navigate("/app/resident/visited");
          }}
        >
          방문했던 차량
        </button>
      <button
        onClick={() => {
          navigate("/app/resident/favorite");
        }}
      >
        즐겨 찾는 차량
      </button>
      <button>자주 묻는 질문</button>
      </section>
      {/* 로그아웃 */}
      <button className="logout-btn">로그아웃</button>
    </div>
  );
};

export default ResidentMypage;
