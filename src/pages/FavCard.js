import "./favCard.scss";
import { ReactComponent as Star } from "../assets/svg/Star.svg";
import { useState } from "react";

const FavCard = ({ data, onRemove }) => {
    const [removing, setRemoving] = useState(false); 
    if (!data) return null; 
    const { carNumber, inTime, outTime, status } = data;
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
                <span className={`status ${status}`}>
                    {status === "parking" && "방문 중"}
                    {status === "completed" && "방문 완료"}
                </span>
                <p>{carNumber}</p>
                <div className="time">
                    <p>입차시간 : {inTime}</p>
                    <p>{outTime ? `출차 ${outTime}` : "출차시간 : ---"}</p>
                </div>
            </div>
            <Star className="star" onClick={handleRemove} />
        </div>
    );
};

export default FavCard;
