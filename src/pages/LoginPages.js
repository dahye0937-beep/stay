// 로그인 페이지

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPages = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      LoginPages
      <input
        type="email"
        placeholder="아이디를 입력해주세요"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button>로그인</button>
      {/* 회원가입 이동 */}
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default LoginPages;
