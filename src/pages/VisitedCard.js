import { ReactComponent as Star } from "../assets/svg/Star.svg";

const VisitedCard = ({ data, role, onToggleFavorite }) => {
    const { type, carNumber, visitedAt, storeName, name, favorite } = data;

    const handleStarClick = (e) => {
        e.stopPropagation();
        onToggleFavorite(carNumber);
    };

    return (
        <div className={`visited-card ${type}`}>
            {role === "APT" && type === "resident" && (
                <Star
                    className={`star ${favorite ? "active" : ""}`}
                    onClick={handleStarClick}
                />
            )}

            {type === "business" && <h3 className="title">{storeName}</h3>}
            {type === "resident" && <h3 className="title">{name}</h3>}

            <div className="txt">
                <p>차량번호: {carNumber}</p>
                <p>방문일: {visitedAt}</p>
            </div>
        </div>
    );
};

export default VisitedCard;
