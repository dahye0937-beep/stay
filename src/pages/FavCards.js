import { useState } from "react";
import AnimatedList from "./AnimatedList";
import FavCard from "./FavCard";

const FavCards = ({ list }) => {
    const [favList, setFavList] = useState(list);
    if (!favList || favList.length === 0) {
        return <p className="none">즐겨찾기된 차량이 없습니다.</p>;
    }
    const handleRemove = (car_num) => {
        setFavList(prev =>
            prev.filter(item => item.car_num !== car_num)
        );
    };

    return (
        <div className="fav-cards">
            <AnimatedList
                items={favList}
                renderItem={(item) => (
                    <FavCard
                        data={item}
                        onRemove={handleRemove}
                    />
                )}
            />
        </div>
    );
};

export default FavCards;
