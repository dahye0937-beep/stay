// --- 장기 차량 등록 ---

import { useState } from "react";
import "./Car.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LongCar = () => {
  const [carNumber, setCarNumber] = useState(""); // 차량번호
  const [visitDate, setVisitDate] = useState(""); // 방문날짜
  const [reason, setReason] = useState(""); // 방문사유

  // 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="long-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>차량 번호</label>
        <input
          type="text"
          value={carNumber}
          placeholder="차량번호를 입력해주세요"
          onChange={(e) => setCarNumber(e.target.value)}
        />
      </div>
      <div className="input-group">
        <p>방문 날짜</p>
        <DatePicker
          selected={visitDate}
          onChange={(date) => setVisitDate(date)}
          placeholderText="방문 날짜를 선택해주세요"
          dateFormat="yyyy.MM.dd"
        />
      </div>
      <div className="input-group">
        <label>방문 사유 * 장기 등록 시에만 적어주세요</label>
        <input
          type="text"
          value={reason}
          placeholder="방문 사유를 적어주세요"
          onChange={(e) => setReason(e.target.value)}
        />
      </div>
      <div className="btn">
        <button>차량 등록</button>
      </div>
    </form>
  );
};

export default LongCar;
