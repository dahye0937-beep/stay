import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import VisitedCards from "./VisitedCards";
import "./visited.scss";

const Visited = () => {
    const { profile, visitCars, fetchVisitCarsList } = useUser();

    useEffect(() => {
        if (profile?.id) fetchVisitCarsList();
    }, [profile?.id]);
    console.log("visitCars =>", visitCars);
    const role = profile?.user_type; // APT | STORE

    const filtered = visitCars.filter((item) => {
        if (role === "APT") return item.type === "resident";
        if (role === "STORE") return item.type === "business";
        return false;
    });

    return (
        <div className="visited-page">
            <h2>방문했던 차량</h2>
            <p>방문 했던 차량들을 보여드릴게요</p>
            <VisitedCards list={filtered} role={role} />
        </div>
    );
};

export default Visited;
