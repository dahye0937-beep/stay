// --- 입주민 마이페이지 ---

import { useNavigate } from "react-router-dom";

const ResidentMypage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>입주자</h1>
      <button
        onClick={() => {
          navigate("/app/resident/favorite");
        }}
      >
        즐겨 찾는 차량
      </button>
    </div>
  );
};

export default ResidentMypage;
