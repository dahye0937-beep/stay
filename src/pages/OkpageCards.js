import OkpageCard from "./OkpageCard";

const OkpageCards = ({ list }) => {
    if (!list || list.length === 0) return <p>승인 요청이 없습니다.</p>;

    return (
        <div className="okpage-card-list">
            {list.map((item) => (
                <OkpageCard key={item.id} data={item} />
            ))}
        </div>
    );
};

export default OkpageCards;
