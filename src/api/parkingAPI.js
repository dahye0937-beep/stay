// supabaseClient 불러와서 연결해서 사용
import supabase from "./supabaseClient";

/**
 * ✅ 현황판 전체 조회 (APT + STORE 한 번에)
 * 프론트에서 zone으로 나눠서 보여주면 됨
 */
export const fetchParkingSpots = async () => {
    const { data, error } = await supabase
    .from("parking_spots")
    .select("spot_id, zone, is_occupied, occupant_car, updated_at")
    .order("zone", { ascending: true }) // APT / STORE 정렬
    .order("spot_id", { ascending: true }); // A-1, A-2 ... 순서
    if (error) throw error;
  return data; // [{spot_id, zone, is_occupied, occupant_car, updated_at}, ...]
};

/**
 * ✅ 실시간 주차 현황(공용)
 * - total: 총 주차공간
 * - occupied: 주차중(주차대수)
 * - empty: 빈 공간
 */
export const fetchParkingStatusSummary = async () => {
    const { data, error } = await supabase
    .from("parking_spots")
    .select("is_occupied");
    if (error) throw error;
    const total = data.length;
    const occupied = data.filter((row) => row.is_occupied === true).length;
    const empty = total - occupied;
    return { total, occupied, empty };
};



