// --- 주차 할인권 정산 ---
import "./SaleCarIssue.scss";

const SaleCarIssue = () => {
  // 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <div className="issue-txt">
        <p>현재까지 발급된 주차할인권은 00장 입니다.</p>
        <p>정산일은 0000.00.00일 입니다.</p>
      </div>
      <div className="btn">
        <button>정산하기</button>
      </div>
    </form>
  );
};

export default SaleCarIssue;
