// --- 회원가입 페이지 ---

import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";

const SignUpPages = () => {
  // const navigate = useNavigate(); // 테스트

  const handleLogin = () => {
    // navigate("/app/dashboard"); // 테스트
  };

  return (
    <div>
      <Header />
      <h1>회원가입 페이지</h1>
      <button onClick={handleLogin}>승인요청</button>
    </div>
  );
};

export default SignUpPages;
