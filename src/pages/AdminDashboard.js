import "./AdminDashboard.scss";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo/EGWH_logo.png";
import AdminImg from "../assets/images/admin/admin-img.png";
import AdminImg2 from "../assets/images/Logo/logo-2.png";
import AdminBanner1 from "../assets/images/Banner/MB_Banner_ST.jpg";
import AdminBanner2 from "../assets/images/Banner/DT_Banner_ST.jpg";
import AdminBanner3 from "../assets/images/Banner/DT_Banner_HO.jpg";
const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="desktop">
      <div className="admin-dashboard">
        <img className="logoI"src={AdminImg2} alt="EGWH 로고" />
        {/* 상단 초록 카드 */}
        <section className="card">
          {/* 로고 */}
          <div className="admin-header">
            <img src={Logo} alt="EGWH 로고" />
            
            <div className="top-text">
              <p className="apt-name">스테이아파트</p>
              <p className="role">관리자</p>
            </div>
          </div>
          {/* 기존 관리자 정보 */}
          <div className="admin-box">
            <img className="admin" src={AdminImg} alt="관리사무소 사람" />
            <div className="admin-info">
              <p className="admin-name">홍길동</p>
              <p className="time"> 출근 시간: 09:30 &nbsp; 퇴근 시간: --:-- </p>
              <div className="admin-buttons">
                
                <button className="btn-gray">출근</button>
                <button className="btn-green">퇴근</button>
              </div>
            </div>
          </div>
        </section>
        {/* 메뉴 섹션 */}
        <section className="menu">
          
          <button
            className="menu-card"
            onClick={() => navigate("/app/admin/parking")}
          >
            
            <h3>주차 현황</h3>
            <p>
              
              총 주차공간 00대
              <br /> 주차완료 00대 | 빈 주차공간 00
            </p>
          </button>
          <button
            className="menu-card"
            onClick={() => navigate("/app/admin/board")}
          >
            
            <h3>문의 게시판</h3>
            <p>
              
              문의하고 싶은 사항은
              <br /> 게시판을 사용해주세요.
            </p>
          </button>
        </section>
        <div className="admin-banner">
            <img src={AdminBanner1} alt="스터디 배너" />
            <img src={AdminBanner2} alt="스터디 배너" />
            <img src={AdminBanner3} alt="집 분양 배너" />
        </div>
        {/* 추가 기능 섹션 */}
        <section className="extra">
        
          <button
            className="wide-card"
            onClick={() => navigate("/app/admin/notice")}
          >
            
            공지사항 작성
          </button>
          <button onClick={() => navigate("/app/admin/okpage")}>
            
            입주민 차량 등록
          </button>
          <button onClick={() => navigate("/app/admin/salepage")}>

            상가 할인권 정산 목록
          </button>
        </section>
            <footer>
              <div className="txt-top">
              <p>개인정보 처리 방침</p>
              <p>이용약관</p>
              <p>고객센터 | support@STAY.com</p>
              </div>
              <p>Copyright © 2026 Ateam.</p>
              <p>All rights reserved</p>
            </footer>
        {/* 로그아웃 버튼 */} <button className="logout-btn">로그아웃</button>
      </div>
    </div>
  );
};
export default AdminDashboard;
