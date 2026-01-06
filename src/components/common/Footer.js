// --- 푸터 영역 ---

import { useLocation } from "react-router-dom";
import ParkingGird from "../ParkingGird";
import ParkingInfo from "../ParkingInfo";

const Footer = () => {
  const location = useLocation();

  // 숨기고 싶은 페이지 확인
  const hidenpages =
    location.pathname.startsWith("/app/admin") ||
    location.pathname.includes("/favorite") ||
    location.pathname.includes("/mypage");
  return (
    <footer>
      {/* 각 페이지에서 숨기고싶은 페이지 */}
      {!hidenpages && <ParkingInfo />}
      {!hidenpages && <ParkingGird />}
    </footer>
  );
};

export default Footer;
