// --- 방문 차량 등록 ---

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Car.scss";
import { createDailyReservation } from "../../api/userApi";

const VisitCar = () => {
  const [carNumber, setCarNumber] = useState(""); // 차량번호
  const [visitDate, setVisitDate] = useState(null); // 방문날짜 (Date 객체)
  const [reason, setReason] = useState(""); // 방문사유

  // 새로고침 방지
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!carNumber || !visitDate) {
      alert("차량 번호와 방문 날짜를 입력해주세요.");
      return;
    }

    // 0000-00-00 식으로 supabase에서 보이게
    const dateISO = visitDate.toISOString().slice(0, 10);
    try {
      await createDailyReservation({
        profileId: "TEST_PROFILE_ID",
        carNum: carNumber,
        dateISO,
      });
      alert("등록 성공");
    } catch (err) {
      console.error(err);
      alert("등록 실패");
    }
  };

  return (
    <form className="visit-form" onSubmit={handleSubmit}>
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

export default VisitCar;
