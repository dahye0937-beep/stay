// 주차 현황 js

const ParkingInfo = ({R=[],S=[]}) => {
  //총 주차대수
  const total = R.length + S.length;
  const spots = R.filter(item=>item.car_num).length + S.filter(item=>item.car_num).length;
  const empty = total - spots;
  return (
    <div className="info-p">
      <p>총 주차면수 : {total} │</p>
      <p>현재 주차 : {spots} │</p>
      <p>잔여석 : {empty}</p>
    </div>
  )
}

export default ParkingInfo