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
//추가로 입력한 부분
//control 페이지에 필요한 api정보
export const enterParking = async (carNum) => {
    //기준타입
    let type = "APT";
  //등록된 차량인지 아닌지 체크 : 등록차량이면 APT에 아니면 상가에
    const { data: registerCar, error: car_error } = await supabase
    .from("profiles")
    .select("car_num")
    .eq("car_num", carNum)
    .maybeSingle(); //0 or 1일때 오류 발생하지않음.
  //data가 0개이면 is_paid값이 false, 그렇지 않으면  true
    const paidState = registerCar ? true : false;
    if (car_error) {
    throw new Error("등록된 차량 확인 시 오류 발생");
    }
    if (!paidState) {
        //등록된 차량이 아니면 상가
        type = "STORE";
    }
  //빈자리를 찾기 : 주차 공간 확보
  //등록된 차량이면 아파트에 빈자리를 확인 미등록된 차량이면 상가에 빈자리를 확인
  //car_num = null 그리고 type이 일치
    const { data: spots, error: spot_error } = await supabase
    .from("parking_spots")
    .select("spot_id")
    .eq("zone", type)
    .is("occupant_car", null)
    .order("spot_id", { ascending: true })
    .limit(1);
    if (!spots || spots.length <= 0 || spot_error) {
    throw new Error("주차 공간이 없습니다");
    }
  //공간이 있으면 update 가 발생
  const targetID = spots[0].spot_id; //배정된 자리ID
    const { error } = await supabase
    .from("parking_spots")
    .update({ occupant_car: carNum, is_occupied: true })
    .eq("spot_id", targetID);
    if (error) throw new Error(error);
    return {targetID,type};
};
//출차 처리
export const exitParking = async (carNum) => {
  //1. 차량찾기
    const { data: spot } = await supabase
    .from("parking_spots")
    .select("*")
    .eq("occupant_car", carNum)
    .single(); //한개만 가져와라
    if (!spot) throw new Error("주차장에 차가 없습니다");
  //우선 is_paid가 true/false
    let registerTime = null;
    if (spot.type === "APT") {
    //이미 등록되어서 정산하지 않고 출차
    registerTime = 0;
    } else {
    //2. 주차한 차를 찾으면, 주차 시간을 계산하기
    const nowTime = new Date();
    const entryTime = new Date(spot.updated_at); //DB String --> Object
    // 현재시간 - 입차시간
    const diff = nowTime.getTime() - entryTime.getTime();
    console.log(diff);
    //시간주차를 했는지. 1초 이상 1시간
    registerTime = Math.round(diff / (1000 * 60 * 60 * 9));
    }
    return { registerTime: registerTime, spot_id: spot.spot_id };
};
//출차 확정
export const confirmExit = async (spotId) => {
    const { error } = await supabase
    .from("parking_spots")
    .update({ occupant_car: null, updated_at: null, is_occupied: false })
    .eq("spot_id", spotId);
    if (error) throw new Error("출차하지 못했습니다");
};