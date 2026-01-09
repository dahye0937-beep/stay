// --- 장기 차량 등록 ---
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Car.scss";
import { createPeriodReservation } from "../../api/userApi"; // 장기 등록용 API

const LongCar = ({ profile }) => {
  const [carNumber, setCarNumber] = useState(""); // 차량번호
  const [visitDate, setVisitDate] = useState(null); // 방문날짜
  const [reason, setReason] = useState(""); // 방문사유

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!carNumber || !visitDate) {
      alert("차량 번호와 방문 날짜를 입력해주세요.");
      return;
    }

    if (!reason.trim()) {
      alert("장기 방문 사유를 입력해주세요.");
      return;
    }

    const dateISO = visitDate.toISOString().slice(0, 10);

    try {
      // 현재는 하루 기준으로 startDate와 endDate를 동일하게 설정
      await createPeriodReservation({
        profileId: profile.id,
        carNum: carNumber,
        dateISO,
        purpose: reason,
      });

      alert("장기 방문 차량 등록 성공!");

      // 초기화
      setCarNumber("");
      setVisitDate(null);
      setReason("");
    } catch (err) {
      console.error("장기 방문 차량 등록 실패:", err);
      alert("등록 실패");
    }
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
        <label>방문 사유 (장기 방문 필수)</label>
        <input
          type="text"
          value={reason}
          placeholder="방문 사유를 입력해주세요"
          onChange={(e) => setReason(e.target.value)}
        />
      </div>

      <div className="btn">
        <button type="submit">차량 등록</button>
      </div>
    </form>
  );
};

export default LongCar;
