// 방문 차량 등록신청, 정기 차량 등록 신청, 추가 차량 등록

import { useState } from "react";
import AddCar from "./mode/AddCar";
import VisitCar from "./mode/VisitCar";
import LongCar from "./mode/LongCar";
import SaleCar from "./mode/SaleCar";
import SaleCarIssue from "./mode/SaleCarIssue";

const SystemController = ({ role }) => {
  const [mode, setMode] = useState("");

  return (
    <div className="controller">
      <div className="btn-wrap">
        {/* 입주민 */}
        {role === "resident" && (
          <>
            <button onClick={() => setMode("VISITCAR")}>
              방문 차량 등록 신청
            </button>
            <button onClick={() => setMode("LONGCAR")}>
              장기 차량 등록 신청
            </button>
            <button onClick={() => setMode("ADD")}>추가 차량 등록 신청</button>
          </>
        )}

        {/* 사업자 */}
        {role === "business" && (
          <>
            <button onClick={() => setMode("SALECAR")}>주차 할인권 발급</button>
            <button onClick={() => setMode("SALECARISSUE")}>
              주차 할인권 정산
            </button>
            <button onClick={() => setMode("ADD")}>추가 차량 등록 신청</button>
          </>
        )}
      </div>

      <div className="mode-content">
        {mode === "VISITCAR" && <VisitCar />}
        {mode === "LONGCAR" && <LongCar />}
        {mode === "ADD" && <AddCar />}
        {mode === "SALECAR" && <SaleCar />}
        {mode === "SALECARISSUE" && <SaleCarIssue />}
      </div>
    </div>
  );
};

export default SystemController;
