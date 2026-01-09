//주차 칸

const SpotCard = ({data}) => {
  const isCarnum = data.occupant_car ? true : false;
  const isResident = data.zone === 'APT';
    
  if(isResident){
    //아파트표시카드
      return (
    <div 
      className={`spot-card ${isResident?'resident':'shop'} ${isCarnum ? 'carnum' : ''} 
      {}`}
    >
      <p>{data.spot_id}</p>
      <p>{data.occupant_car }</p>
      
    </div>
  )
  } else{
    //상가표시카드
      return (
    <div 
      className={`spot-card ${isResident?'resident':'shop'} 
      ${isCarnum ? 'carnum' : ''}
      `}
    >
      <p>{data.spot_id}</p>
      <p>{data.occupant_car }</p>
      
    </div>
  )
  }

  
}

export default SpotCard 