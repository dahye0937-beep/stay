import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Car.scss";
import { createDailyReservation } from "../../api/userApi";

const VisitCar = ({ profile }) => {
  const [carNumber, setCarNumber] = useState("");
  const [visitDate, setVisitDate] = useState(null);
  const [reason, setReason] = useState(""); // 장기 등록에서만 사용

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!carNumber || !visitDate) {
      alert("차량 번호와 방문 날짜를 입력해주세요.");
      return;
    }

    const dateISO = visitDate.toISOString().slice(0, 10);

    try {
      await createDailyReservation({
        profileId: profile.id,
        carNum: carNumber,
        dateISO,
      });

      alert("등록 성공");

      // 초기화
      setCarNumber("");
      setVisitDate(null);
      setReason("");
    } catch (err) {
      console.error("방문 차량 등록 실패:", err);
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
        <label>방문 사유 (장기 방문 시)</label>
        <input
          type="text"
          value={reason}
          placeholder="장기 등록 페이지에서 사용됩니다"
          onChange={(e) => setReason(e.target.value)}
        />
      </div>

      <div className="btn">
        <button type="submit">차량 등록</button>
      </div>
    </form>
  );
};

export default VisitCar;
