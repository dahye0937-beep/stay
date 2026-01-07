// --- 주차 할인권 정산 ---

import { useState } from "react";
import "./Car.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SaleCar = () => {
  const [carNumber, setCarNumber] = useState(""); // 차량번호
  const [visitDate, setVisitDate] = useState(""); // 방문날짜
  const [visitTime, setvisitTime] = useState(""); // 방문시간

  // 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="sale-form" onSubmit={handleSubmit}>
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
        <label>방문 시간</label>
        <input
          type="text"
          value={visitTime}
          placeholder="방문 시간을 선택해주세요"
          onChange={(e) => setvisitTime(e.target.value)}
        />
      </div>
      <div className="btn">
        <button>차량 등록</button>
      </div>
    </form>
  );
};

export default SaleCar;
