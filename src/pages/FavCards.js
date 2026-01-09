import { useUser } from "../contexts/UserContext";
import AnimatedList from "./AnimatedList";
import FavCard from "./FavCard";

const FavCards = ({ list }) => {
    const { toggleFavorite } = useUser();

    if (!list || list.length === 0) {
        return <p className="none">즐겨찾기된 차량이 없습니다.</p>;
    }

    const handleRemove = async (carNum) => {
        // 즐겨찾기 토글 처리
        const res = await toggleFavorite(carNum);

        // 에러 발생 시 (선택적으로 UI 처리)
        if (!res.ok) {
            alert("처리 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="fav-cards">
            <AnimatedList
                items={list}
                renderItem={(item) => (
                    <FavCard data={item} onRemove={handleRemove} />
                )}
            />
        </div>
    );
};

export default FavCards;
