// --- 사업자 마이페이지 ---

import { useNavigate } from "react-router-dom";

const BusinessMypage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>사업자</h1>

      <button
        onClick={() => {
          navigate("/app/business/favorite");
        }}
      >
        즐겨 찾는 차량
      </button>
    </div>
  );
};

export default BusinessMypage;
