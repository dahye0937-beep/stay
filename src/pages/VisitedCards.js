import { useUser } from "../contexts/UserContext";
import VisitedCard from "./VisitedCard";
import AnimatedList from "./AnimatedList";
import "./visited.scss";

const VisitedCards = ({ list, role }) => {
    const { toggleFavorite } = useUser();

    const handleToggleFavorite = async (carNum) => {
        await toggleFavorite(carNum);
        // context에서 자동 refetch됨
    };

    return (
        <AnimatedList
            items={list}
            renderItem={(item) => (
                <VisitedCard
                    key={item.id}
                    data={item}
                    role={role}
                    onToggleFavorite={handleToggleFavorite}
                />
            )}
        />
    );
};

export default VisitedCards;
