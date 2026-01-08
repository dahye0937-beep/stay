//주차 칸

const SpotCard = ({data}) => {
  const isCarnum = data.car_num ? true : false;
  const isResident = data.zone === 'R';
  const paid = data.is_paid ? true:false;
  let aptstat = '입주민차량';
  if(!data.apt){
    if(data.long){
      aptstat = '정기권 차량'
    }else{
      aptstat = '방문 차량'
    }
  }
  if(Object.keys(data).includes('apt')){
      return (
    <div 
      className={`spot-card ${isResident?'resident':'shop'} ${isCarnum ? 'carnum' : ''} 
      {}`}
    >
      <p>{data.spot_id}</p>
      <p>{data.car_num}</p>
      {isCarnum ? <p>{aptstat}</p> : ''}
    </div>
  )
  } else{
      return (
    <div 
      className={`spot-card ${isResident?'resident':'shop'} 
      ${isCarnum ? 'carnum' : ''}
      ${data.is_paid ? 'paid':''}`}
    >
      <p>{data.spot_id}</p>
      <p>{data.car_num}</p>
      { isCarnum ? <p>{paid ? "사전정산완료" : "미정산차량"}</p> : ''}
    </div>
  )
  }

  
}

export default SpotCard 