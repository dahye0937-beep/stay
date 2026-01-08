import React from "react";
import VisitedCards from "./VisitedCards";
import Logo from "../assets/images/Logo/EGWH_logo.png";
import "./visited.scss";
import { useState } from "react";

const Visited = ({ role }) => {
    const [favList, setFavList] = useState([]);
    const handleAddFav = (item) => {
        // 중복 방지
        const exists = favList.some((fav) => fav.carNumber === item.carNumber);
        if (exists) return;

        setFavList((prev) => [...prev, item]);
    };
    const visitedList = [
        {
            id: 1,
            type: "business",
            storeName: "온담 감자탕",
            carNumber: "12가3456",
            visitedAt: "2026-01-05",
        },
        {
            id: 2,
            type: "resident",
            name: "김윤아",
            carNumber: "45나7890",
            visitedAt: "2026-01-04",
        },
        {
            id: 3,
            type: "business",
            storeName: "청년다방",
            carNumber: "88다1234",
            visitedAt: "2026-01-03",
        },
        {
            id: 4,
            type: "resident",
            name: "이수민",
            carNumber: "31라9876",
            visitedAt: "2026-01-03",
        },
        {
            id: 5,
            type: "business",
            storeName: "카페 루프",
            carNumber: "22마4567",
            visitedAt: "2026-01-02",
        },
        {
            id: 6,
            type: "resident",
            name: "박지훈",
            carNumber: "67바8901",
            visitedAt: "2026-01-02",
        },
        {
            id: 7,
            type: "business",
            storeName: "육회바른연어",
            carNumber: "90사2345",
            visitedAt: "2026-01-01",
        },
        {
            id: 8,
            type: "resident",
            name: "최은지",
            carNumber: "54아6789",
            visitedAt: "2025-12-31",
        },
    ];
    const filteredList = visitedList.filter((item) => item.type === role);
    return (
        <div className="visited-page">
            <img src={Logo} alt="로고" className="logo" />
            <h2>방문했던 차량</h2>
            <VisitedCards list={filteredList} />
        </div>
    );
};

export default Visited;
