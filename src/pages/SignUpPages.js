import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "./SignUpPages.scss";

const Field = ({
  label,
  helper,
  value,
  onChange,
  type = "text",
  name,
  autoComplete,
}) => {
  const hasValue = value && value.trim().length > 0;

  return (
    <div className={`su-field ${hasValue ? "has-value" : ""}`}>
      {/* input */}
      <input
        className="su-input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />

      {/* ✅ 박스 안에 보이는 2줄 텍스트(오버레이) */}
      <div className="su-overlay">
        <div className="su-label">{label}</div>
        <div className="su-helper">{helper}</div>
      </div>
    </div>
  );
};

const SignUpPages = () => {
  const navigate = useNavigate();
  const { doSignup } = useUser();

  const [openType, setOpenType] = useState(false);

  // "APT" | "STORE"
  const [userType, setUserType] = useState("");

  const [userName, setUserName] = useState("");
  const [dongHo, setDongHo] = useState("");
  const [phone, setPhone] = useState(""); // DB에 없어서 저장은 안 하지만 UI는 유지
  const [carNum, setCarNum] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const typeLabel = useMemo(() => {
    if (userType === "APT") return "입주민";
    if (userType === "STORE") return "사업자";
    return "가입 유형을 선택해주세요";
  }, [userType]);

  const selectType = (type) => {
    setUserType(type);
    setOpenType(false);
  };

  const onSubmit = async () => {
    if (!userType) return alert("가입 유형을 선택해주세요.");
    if (!userName.trim()) return alert("이름(상호명)을 입력해주세요.");
    if (!dongHo.trim()) return alert("동/호수를 입력해주세요.");
    if (!carNum.trim()) return alert("차량번호를 입력해주세요.");
    if (!loginId.trim()) return alert("아이디를 입력해주세요.");
    if (!password.trim()) return alert("비밀번호를 입력해주세요.");

    // ✅ API/DB에 맞춰서 보내기 (phone은 현재 profiles에 없으니 보내지 않음)
    const form = {
      userType,
      userName: userName.trim(),
      dongHo: dongHo.trim(),
      carNum: carNum.trim(),
      loginId: loginId.trim(),
      password: password.trim(),
    };

    const res = await doSignup(form);

    if (!res.ok) {
      alert(res.message || "회원가입 실패");
      return;
    }

    // ✅ 네가 말한 흐름: 승인요청 -> alert -> 로그인 화면으로 이동
    alert("승인 요청이 완료되었습니다.\n관리자 승인 후 로그인 가능합니다.");
    navigate("/");
  };

  return (
    <div className="signup-wrap">
      {/* 뒤로가기(원하면) */}
      <button className="su-back" type="button" onClick={() => navigate("/")}>
        ←
      </button>

      {/* 가입유형 드롭다운(아코디언 느낌) */}
      <div className="su-type">
        <button
          type="button"
          className="su-type-btn"
          onClick={() => setOpenType((v) => !v)}
        >
          {typeLabel}
          <span className={`su-caret ${openType ? "open" : ""}`}>▼</span>
        </button>

        {openType && (
          <div className="su-type-menu">
            <button type="button" onClick={() => selectType("APT")}>
              입주민
            </button>
            <button type="button" onClick={() => selectType("STORE")}>
              사업자
            </button>
          </div>
        )}
      </div>

      {/* 입력 폼 */}
      <div className="su-form">
        <Field
          label="이름(상호명)"
          helper="이름을 기재해주세요."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="user_name"
          autoComplete="name"
        />

        <Field
          label="동/호수"
          helper="예) 208동 1240호"
          value={dongHo}
          onChange={(e) => setDongHo(e.target.value)}
          name="dong_ho"
        />

        <Field
          label="연락처"
          helper="000-0000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          autoComplete="tel"
        />

        <Field
          label="차량번호"
          helper="차량번호를 입력해주세요"
          value={carNum}
          onChange={(e) => setCarNum(e.target.value)}
          name="car_num"
        />

        <Field
          label="사용 할 아이디를 입력해주세요"
          helper="영어와 숫자를 포함한 아이디를 기재해주세요"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          name="login_id"
          autoComplete="username"
        />

        <Field
          label="비밀번호"
          helper="영어, 숫자, 특수기호를 포함한 비밀번호를 기재해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          autoComplete="new-password"
        />

        <button className="su-submit" type="button" onClick={onSubmit}>
          승인요청
        </button>
      </div>
    </div>
  );
};

export default SignUpPages;
