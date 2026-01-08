import { ReactComponent as Star } from "../assets/svg/Star.svg";

const VisitedCard = ({ data }) => {
    const { type, carNumber, visitedAt } = data;

    return (
        <div className={`visited-card ${type}`}>
            {type === "resident" && <Star className="star" />}
            {type === "business" && <h3 className="title">{data.storeName}</h3>}
            {type === "resident" && <h3 className="title">{data.name}</h3>}
            <p>방문 했던 차량들을 보여드릴게요</p>
            <div className="txt"> 
                <p>차량번호: {carNumber}</p>
                <p>방문일: {visitedAt}</p>
            </div>
        </div>
    );
};

export default VisitedCard;
