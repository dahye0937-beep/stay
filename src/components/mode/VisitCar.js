// --- 방문 차량 등록 ---

import { useState } from "react";
import "./VisitCar.scss";

const VisitCar = () => {
  const [carNumber, setCarNumber] = useState(""); // 차량번호
  const [visitDate, setVisitDate] = useState(""); // 방문날짜
  const [reason, setReason] = useState(""); // 방문사유

  // 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="visit-form" onSubmit={handleSubmit}>
      <div className="input-group">
          <label>차량번호</label>
        <input
          type="text"
          value={carNumber}
          placeholder="차량번호를 입력해주세요"
          onChange={(e) => setCarNumber(e.target.value)}
        />
      </div>
    </form>
  );
};

export default VisitCar;
