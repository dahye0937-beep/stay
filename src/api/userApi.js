//로그인페이지(메인)
import { supabase } from "./supabaseClient";

export const loginProfile = async (loginId, password) => {
    const { data, error } = await supabase
        .from("profiles")
        .select("id, login_id, password, user_type, is_approved, user_name, car_num, dong_ho")
        .eq("login_id", loginId)
        .maybeSingle();

    if (error) throw error;
    if (!data) throw new Error("아이디가 없습니다.");

    if (data.password !== password) {
        throw new Error("비밀번호가 틀렸습니다.");
    }

    if (!data.is_approved) {
        return {
        status: "PENDING",
        message: "관리자 승인 대기 중입니다.",
        };
    }

    return {
        status: "OK",
        profile: data,
    };
};

// 회원가입(승인요청)페이지
export const signupProfile = async (form) => {
  // form: { loginId, password, userName, userType, carNum, dongHo }
    const { error } = await supabase.from("profiles").insert([
        {
        login_id: form.loginId,
        password: form.password,
        user_name: form.userName,
        user_type: form.userType, // "APT" or "STORE"
        car_num: form.carNum,
        dong_ho: form.dongHo,
        // add_car: 기본 null
        // is_approved: 기본 false
        // created_at: 기본 now()
        },
    ]);
    if (error) throw error;
    return { status: "OK" }; // 가입 완료(승인대기)
};


//공통 헤더 
/**
 * ✅ 모든 헤더 공용 API (입주민/상가 + 마이페이지 포함)
 * 반환:
 * - user_type: 'APT' | 'STORE'
 * - role_label: '입주자' | '사업자'
 * - dong_ho
 * - user_name (상가명/사용자이름)
 * - current_spot (없으면 null)
 */
export const fetchHeaderBundle = async (profileId) => {
  // 1) 기본정보
    const { data: profile, error: pErr } = await supabase
        .from("profiles")
        .select("user_type, dong_ho, user_name, car_num")
        .eq("id", profileId)
        .single();
    if (pErr) throw pErr;

  // 2) 현재 주차 위치(없을 수 있음)
    const { data: spot, error: sErr } = await supabase
        .from("parking_spots")
        .select("spot_id")
        .eq("occupant_car", profile.car_num)
        .eq("is_occupied", true)
        .maybeSingle();
    if (sErr) throw sErr;
    return {
        user_type: profile.user_type,
        role_label: profile.user_type === "APT" ? "입주자" : "사업자",
        dong_ho: profile.dong_ho,
        user_name: profile.user_name,
        current_spot: spot?.spot_id ?? null,
    };
};




// 입주민 페이지 -방문차량 등록(당일: DAILY)
export const createDailyReservation =async ({ profileId, carNum, dateISO }) => {
    const payload = {
    profile_id: profileId,
    car_num: carNum,
    visit_type:"DAILY",
    start_date: dateISO,
    end_date: dateISO
    };
const { error } =await supabase.from("parking_reservations").insert([payload]);
if (error)throw error;
returntrue;
};

//입주민 페이지 장기차량등록(장기:PERIOD)
export const createPeriodReservation =async ({
    profileId,
    carNum,
    startDateISO,
    endDateISO,
    purpose
}) => {
const payload = {
    profile_id: profileId,
    car_num: carNum,
    visit_type:"PERIOD",
    start_date: startDateISO,
    end_date: endDateISO,
    purpose:purpose
};
const { error } =await supabase.from("parking_reservations").insert([payload]);
if (error) throw error;
return true;
};

// 입주민 페이지 & 상가페이지 추가차량등록 ->사용자가 입력창에 ‘명의자’를 적게는 하지만, DB에는 저장하지 않고 그 값은 화면에서만 잠깐 쓰거나 검증만 하고 버립니다.
export const updateAddCar =async ({ profileId, addCarNum }) => {
const { error } =await supabase
    .from("profiles")
    .update({add_car: addCarNum })
    .eq("id", profileId);

if (error)throw error;
return true;
};

//입주민 페이지, 상가페이지 실시간 차량 -> parkingAPI.js

//상가페이지
//상가페이지 주차할인권 발금, 주차 할인권 정산






//입주민 마이페이지
/**
 * ✅ 방문차량 목록 조회 (입주민/상가 공용)
 * - status, car_num
 * - entry_time, exit_time (parking_logs에서)
 * - is_favorite (입주민만 UI 사용, 상가는 무시 가능)
 */
export const fetchVisitCars = async (profileId) => {
    const { data, error } = await supabase
        .from("parking_reservations")
        .select(`
        id,
        car_num,
        status,
        created_at,
        parking_logs (
            entry_time,
            exit_time
        ),
        favorite_cars (
            id
        )
        `)
        .eq("profile_id", profileId)
        .order("created_at", { ascending: false });
    if (error) throw error;
    return (data || []).map((row) => ({
        reservation_id: row.id,
        car_num: row.car_num,
        status: row.status, // READY / EXITED / Unvisited
        entry_time: row.parking_logs?.[0]?.entry_time ?? null,
        exit_time: row.parking_logs?.[0]?.exit_time ?? null,
        is_favorite: (row.favorite_cars?.length ?? 0) > 0,
    }));
    };

//즐겨찾기 페이지
export const fetchFavoriteCars = async (profileId) => {
    const { data, error } = await supabase
        .from("favorite_cars")
        .select("id, car_num, created_at")
        .eq("profile_id", profileId)
        .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
};


/** ✅ 즐겨찾기 토글 (입주민 전용) 
 * 방문차량 목록에서 사용자가 ★ 를 누르면
    1️⃣ 아직 즐겨찾기가 아님 :DB에 없음
    즐겨찾기로 “추가(insert)” 해야 함
    2️⃣ 이미 즐겨찾기 상태 :DB에 이미 있음
    즐겨찾기에서 “삭제(delete)” 해야 함
*/
export const toggleFavoriteCar = async (profileId, carNum) => {
    // 1) 이미 있는지 확인
    const { data: existing, error: findError } = await supabase
        .from("favorite_cars")
        .select("id")
        .eq("profile_id", profileId)
        .eq("car_num", carNum)
        .maybeSingle();
    if (findError) throw findError;

    // 2) 있으면 삭제, 없으면 추가
    if (existing) {
        const { error: delError } = await supabase
        .from("favorite_cars")
        .delete()
        .eq("id", existing.id);
    if (delError) throw delError;
        return { is_favorite: false };
    } else {
        const { error: insError } = await supabase
        .from("favorite_cars")
        .insert([{ profile_id: profileId, car_num: carNum }]);
    if (insError) throw insError;
        return { is_favorite: true };
    }
};
