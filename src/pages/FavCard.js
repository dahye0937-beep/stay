import "./favCard.scss";
import { ReactComponent as Star } from "../assets/svg/Star.svg";
import { useState } from "react";

const FavCard = ({ data, onRemove }) => {
    const [removing, setRemoving] = useState(false);
    if (!data) return null;

    const { carNumber } = data;

    const handleRemove = (e) => {
        e.stopPropagation();
        if (removing) return;
        setRemoving(true);
        setTimeout(() => {
            onRemove(carNumber);
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
