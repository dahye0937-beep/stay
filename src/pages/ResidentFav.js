// --- 입주민 즐겨찾기 페이지 ---
import FavCards from "./FavCards.js";
import "./favcards.scss";

const ResidentFav = () => {
    const favList = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        carNumber: `12가${3000 + i}`,
        inTime: "10:20",
        outTime: null,
        status: "completed", 
    }));
    return (
        <div className="residentfav">
            <div className="residentfav-inner">
                <h1>즐겨찾는 방문차량</h1>
                <p>즐겨찾기 한 차량들을 보여드릴게요.</p>
            </div>
            <FavCards list={favList} />
        </div>
    );
};

export default ResidentFav;
