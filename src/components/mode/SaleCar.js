// --- 주차 할인권 발급 ---

import { useState } from "react";
import "./Car.scss";
import "react-datepicker/dist/react-datepicker.css";

const SaleCar = () => {
  const [carNumber, setCarNumber] = useState(""); // 차량번호
  const [carSale, setCarSale] = useState(""); // 할인권 선택

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
        <label>할인권 선택</label>
        <select
          value={carSale}
          placeholder="할인권 시간을 선택해주세요"
          onChange={(e) => setCarSale(e.target.value)}
        >
          <option value="">할인권 시간을 선택해주세요</option>
          <option value="30">1시간</option>
          <option value="60">1시간 30분</option>
          <option value="120">2시간</option>
        </select>
      </div>

      <div className="btn">
        <button>차량 등록</button>
      </div>
    </form>
  );
};

export default SaleCar;
