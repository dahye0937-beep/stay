// --- 추가 차량 등록 ---
import { useState } from "react";
import "./Car.scss";

const AddCar = () => {
  const [carNumber, setCarNumber] = useState(""); // 차량번호
  const [carName, setCarName] = useState(""); // 차량 명의자

  // 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>차량 번호</label>
        <input
          type="text"
          value={carNumber}
          placeholder="차량번호를 입력해주세요"
          onChange={(e) => setCarNumber(e.target.value)}
        />
      </div>{" "}
      <div className="input-group">
        <label>방문 날짜</label>
        <input
          type="차량 명의자"
          value={carName}
          placeholder="차량 명의자를 입력해주세요"
          onChange={(e) => setCarName(e.target.value)}
        />
      </div>
      <div className="btn">
        <button>차량 등록</button>
      </div>
    </form>
  );
};

export default AddCar;
