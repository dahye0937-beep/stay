import "./BannerSection.scss";

// 이미지 6개 import
// --- 모바일 배너 ---
import banner1 from "../assets/images/Banner/MB_Banner_BR.jpg";
import banner2 from "../assets/images/Banner/MB_Banner_HM.jpg";
import banner3 from "../assets/images/Banner/MB_Banner_HO.jpg";
import banner4 from "../assets/images/Banner/MB_Banner_LN.jpg";
import banner5 from "../assets/images/Banner/MB_Banner_ST.jpg";
import banner6 from "../assets/images/Banner/MB_Banner_cafe.jpg";

const BannerSection = () => {
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  // --- 모바일 ---

  // 1. 배열 복사
  const copyBanners = [...banners];

  // 2. 중복 없이 랜덤 3개 선택
  const selectedBanners = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * copyBanners.length);
    selectedBanners.push(copyBanners[randomIndex]);
    copyBanners.splice(randomIndex, 1); // 선택한 건 배열에서 제거
  }

  return (
    <section id="banner">
      <div className="mb-banner">
        <img src={selectedBanners[0]} alt="배너 1" />
        <img src={selectedBanners[1]} alt="배너 2" />
        <img src={selectedBanners[2]} alt="배너 3" />
      </div>
    </section>
  );
};

export default BannerSection;
