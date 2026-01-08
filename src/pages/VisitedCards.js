import VisitedCard from "./VisitedCard";
import AnimatedList from "./AnimatedList";
import "./visited.scss";

const VisitedCards = ({ list }) => {
    return (
        <AnimatedList
            items={list}
            renderItem={(item) => <VisitedCard key={item.id} data={item}/>}
        />
    );
};

export default VisitedCards;
