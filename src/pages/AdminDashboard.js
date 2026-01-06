// --- 관리자 페이지 ---

import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button>공지사항 작성</button>
      <button
        onClick={() => {
          navigate("/app/admin/okpage");
        }}
      >
        입주민 차량 등록
      </button>
      <button
        onClick={() => {
          navigate("/app/admin/salepage");
        }}
      >
        상가 할인권 정산 목록
      </button>
    </div>
  );
};

export default AdminDashboard;
