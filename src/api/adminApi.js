import { supabase } from "../supabaseClient";

/**
 * ✅ 관리자 헤더 정보 조회
 * - 역할 라벨: 관리자 (고정)
 * - 관리자 이름: profiles.user_name
 */
export const fetchAdminHeader = async (adminProfileId) => {
    const { data, error } = await supabase
        .from("profiles")
        .select("id, user_name, user_type")
        .eq("id", adminProfileId)
        .single();
    if (error) throw error;
    // 관리자 계정인지 체크 (안전장치)
    if (data.user_type !== "ADMIN") {
        throw new Error("관리자 계정이 아닙니다.");
    }
    return {
        role_label: "관리자",      // 화면 고정 텍스트
        admin_name: data.user_name // 예: 홍길동
    };
};

/**
 * ✅ 관리자 주차 현황 요약-> parkingAPI.js
 */

/**
 * ✅ 관리자 - 승인요청 리스트
 * 기준: profiles.is_approved = false
 */
export const fetchApprovalRequests = async () => {
    const { data, error } = await supabase
    .from("profiles")
    .select("id, user_type, user_name, dong_ho, car_num, add_car, is_approved, created_at")
    .eq("is_approved", false)
    .in("user_type", ["APT", "STORE"])
    .order("created_at", { ascending: false });
    if (error) throw error;
    return (data || []).map((row) => ({
    profile_id: row.id,
    user_type: row.user_type,
    label: row.user_type === "APT" ? "입주자" : "사업자",
    user_name: row.user_name,
    dong_ho: row.dong_ho,
    car_num: row.car_num,
    request_type: row.add_car ? "추가차량 신청" : "기본차량 등록 신청",
    created_at: row.created_at,
    }));
};

/**
 * ✅ 관리자 - 승인 처리
 * profiles.is_approved = true 로 변경
 */
export const approveProfile = async (profileId) => {
    const { error } = await supabase
        .from("profiles")
        .update({ is_approved: true })
        .eq("id", profileId);
    if (error) throw error;
    return true;
};