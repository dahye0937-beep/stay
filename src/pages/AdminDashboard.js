import "./AdminDashboard.scss";
import { useNavigate } from "react-router-dom";
import AdminImg from "../assets/images/admin/admin-img.png";
import React, { useState } from "react";
const AdminDashboard = () => {
  const navigate = useNavigate();
            // 출퇴근 시간
  const [startTime, setStartTime] = useState("--:--");
  const [endTime, setEndTime] = useState("--:--");
  return (
    <div className="desktop">
      <div className="admin-dashboard">
          {/* 상단 초록 카드 */}
        <section className="card">
          <div className="admin-header">
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
              <p className="time"> {startTime} &nbsp; &nbsp; 퇴근 시간:{endTime} </p>
              <div className="admin-buttons">
          {/* 출근 버튼 클릭 시 현재 시간 업데이트 */}
          <button
            className="btn-gray"
            onClick={() => {
                const now = new Date();
                const hours = String(now.getHours()).padStart(2, "0");
                const minutes = String(now.getMinutes()).padStart(2, "0");
                setStartTime(`${hours}:${minutes}`);
            }}
              >
            출근
          </button>
          {/* 퇴근 버튼 클릭 시 6시간 뒤 퇴근 시간으로 업데이트*/}
            <button
              className="btn-green"
              onClick={() => {
                const start = startTime === "--:--" ? new Date() : (() => {
                const [h, m] = startTime.split(":").map(Number);
                const d = new Date();
                d.setHours(h);
                d.setMinutes(m);
                return d;
                })();
                const end = new Date(start.getTime() + 6 * 60 * 60 * 1000); // 6시간 뒤
                const endHours = String(end.getHours()).padStart(2, "0");
                const endMinutes = String(end.getMinutes()).padStart(2, "0");
                setEndTime(`${endHours}:${endMinutes}`);
              }}
              >
            퇴근
          </button>
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
         {/* 데스크탑 화면 밖 푸터 */}
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