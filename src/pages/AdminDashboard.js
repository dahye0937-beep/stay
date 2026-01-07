import "./AdminDashboard.scss";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo/EGWH_logo.png";
import AdminImg from "../assets/images/admin/admin-img.png";
const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="desktop">
      <div className="admin-dashboard">
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
        {/* 로그아웃 버튼 */} <button className="logout-btn">로그아웃</button>
      </div>
    </div>
  );
};
export default AdminDashboard;
