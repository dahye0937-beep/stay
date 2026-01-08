import { createContext, useContext, useEffect, useState } from "react";

import { fetchParkingSpots, fetchParkingStatusSummary } from "../api/parkingAPI";

/* =====================================================
    1) Context 채널 만들기
    ===================================================== */
    const ParkingContext = createContext(null);

    /* =====================================================
    2) Provider (현황판 관련 상태 + 함수)
    ===================================================== */
    const ParkingProvider = ({ children }) => {
    /* -----------------------------------------------------
        ✅ 상태(state) 모음
        - 현황판 UI에 필요한 값들
    ----------------------------------------------------- */

    //  주차 자리 전체 리스트 (APT/STORE 포함)
    //    -> 그리드 카드(자리별 상태) 만들 때 사용
    const [spots, setSpots] = useState([]);

    //  요약 정보 (총/주차중/빈자리)
    //    -> 상단 요약 카드(총 36면 / 주차중 20 / 빈자리 16) 같은 거 만들 때 사용
    const [summary, setSummary] = useState({ total: 0, occupied: 0, empty: 0 });

    //  로딩 (선택)
    const [loading, setLoading] = useState(false);

    /* -----------------------------------------------------
        ✅ 1) 현황판 전체 자리 조회
    ----------------------------------------------------- */

    /**
     * ✅ [현황판 페이지 - 자리 그리드용]
     * - parking_spots 전체 조회
     * - APT/STORE 섞여서 오므로, 프론트에서 zone으로 나눠서 보여주면 됨
     *
     * ✅ 사용 예시
     * const { spots, loadSpots } = useParkingBoard();
     * useEffect(()=>{ loadSpots(); }, []);
     */
    const loadSpots = async () => {
        try {
        setLoading(true);
        const data = await fetchParkingSpots();
        setSpots(data);
        return { ok: true };
        } catch (e) {
        console.error(e);
        return { ok: false, message: e.message };
        } finally {
        setLoading(false);
        }
    };

    /* -----------------------------------------------------
        ✅ 2) 현황판 요약 조회 (총/주차중/빈자리)
    ----------------------------------------------------- */

    /**
     * ✅ [현황판 페이지 - 상단 요약 카드용]
     * - total, occupied, empty 계산해서 반환
     *
     * ✅ 사용 예시
     * const { summary, loadSummary } = useParkingBoard();
     * useEffect(()=>{ loadSummary(); }, []);
     */
    const loadSummary = async () => {
        try {
        const data = await fetchParkingStatusSummary();
        setSummary(data);
        return { ok: true };
        } catch (e) {
        console.error(e);
        return { ok: false, message: e.message };
        }
    };

    /* -----------------------------------------------------
        ✅ 3) 한 번에 갱신하기 (버튼/주기적 갱신용)
    ----------------------------------------------------- */

    /**
     * ✅ [현황판 새로고침 버튼 또는 주기적 갱신용]
     * - spots + summary 둘 다 최신으로 갱신
     *
     * ✅ 사용 예시
     * const { refreshBoard } = useParkingBoard();
     * <button onClick={refreshBoard}>새로고침</button>
     */
    const refreshBoard = async () => {
        await loadSpots();
        await loadSummary();
    };

    // ✅ 처음 화면 들어왔을 때 자동 조회 (강사님 스타일)
    useEffect(() => {
        refreshBoard();
    }, []);

    /* -----------------------------------------------------
        ✅ Context value: 페이지에서 꺼내 쓰는 목록
    ----------------------------------------------------- */
    const value = {
        // state
        spots,
        summary,
        loading,

        // actions
        loadSpots,
        loadSummary,
        refreshBoard,
    };

    return <ParkingContext.Provider value={value}>{children}</ParkingContext.Provider>;
    };

    export default ParkingProvider;

    /* =====================================================
    3) Hook export (페이지에서 이렇게 꺼내 씀)
    ===================================================== */
    export const useParkingBoard = () => useContext(ParkingContext);
