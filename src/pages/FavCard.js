import "./favCard.scss";
import { ReactComponent as Star } from "../assets/svg/Star.svg";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";
const FavCard = ({ data }) => {
    const [removing, setRemoving] = useState(false);
    const { toggleFavorite } = useUser();

    if (!data) return null;

    const { carNumber } = data;

    const handleRemove = async (e) => {
        e.stopPropagation();
        if (removing) return;

        setRemoving(true);

        // UI 애니메이션 후에 서버 반영
        setTimeout(async () => {
            const res = await toggleFavorite(carNumber);
            if (!res.ok) {
                // 실패 시 애니메이션 롤백
                setRemoving(false);
            }
        }, 300);
    };

    return (
        <div className={`fav-card ${removing ? "removing" : ""}`}>
            <div className="card-inner">
                <p className="car-number">{carNumber}</p>
                <Star className="star" onClick={handleRemove} />
            </div>
        </div>
    );
};

export default FavCard;
