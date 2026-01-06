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
      <div>
        <h2>임시 이동버튼</h2>
        {/* 테스트용 역할별 이동 버튼 */}
        <button onClick={() => navigate("/app/resident")}>
          입주민 페이지로 이동
        </button>
        <button onClick={() => navigate("/app/business")}>
          사업자 페이지로 이동
        </button>
        <button onClick={() => navigate("/app/admin")}>
          관리자 페이지로 이동
        </button>
      </div>
    </div>
  );
};

export default LoginPages;
