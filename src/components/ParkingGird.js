// 주차 지도 js

import SpotCard from "./SpotCard";
import './ParkingGrid.scss'
import ParkingInfo from "./ParkingInfo";


const ParkingGird = () => {
  const grid = [
    { spot_id: "R-1", zone:"R",car_num:"",apt:true,long:false },
    { spot_id: "R-2", zone:"R",car_num:"58가5678",apt:false,long:false },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-1", zone:"R",car_num:"",apt:true,long:false },
    { spot_id: "R-2", zone:"R",car_num:"58가5678",apt:false,long:false },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-1", zone:"R",car_num:"",apt:true,long:false },
    { spot_id: "R-2", zone:"R",car_num:"58가5678",apt:false,long:false },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-1", zone:"R",car_num:"",apt:true,long:false },
    { spot_id: "R-2", zone:"R",car_num:"58가5678",apt:false,long:false },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-1", zone:"R",car_num:"",apt:true,long:false },
    { spot_id: "R-2", zone:"R",car_num:"58가5678",apt:false,long:false },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true },
    { spot_id: "R-3", zone:"R",car_num:"32가5213",apt:false,long:true }
    ];
  const shop=[
    { spot_id: "S-1", zone:"S",car_num:"57가9874",is_paid:true},
    { spot_id: "S-2", zone:"S",car_num:"34가9874",is_paid:false },
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
    { spot_id: "S-1", zone:"S",car_num:"57가9874",is_paid:true},
    { spot_id: "S-2", zone:"S",car_num:"34가9874",is_paid:false },
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
    { spot_id: "S-1", zone:"S",car_num:"57가9874",is_paid:true},
    { spot_id: "S-2", zone:"S",car_num:"34가9874",is_paid:false },
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
    { spot_id: "S-1", zone:"S",car_num:"57가9874",is_paid:true},
    { spot_id: "S-2", zone:"S",car_num:"34가9874",is_paid:false },
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
    { spot_id: "S-3", zone:"S",car_num:"",is_paid:false},
  ]
  return (
    <div className="parking">
      <div className="info_box">
      <ParkingInfo R={grid} S={shop}/>
      </div>
    <div className="all_box">
    <div className="R_box">
      {grid.map((item)=>{
      return <SpotCard data={item}/>
      })
    }
      </div>
    <div className="S_box">
      {
        shop.map((item)=>{
          return<SpotCard data={item} />
        })
      }
    </div>
        {/* <div className="color_box">
      <div className="r">
        <div></div>
        <p>입주민 등록 차량</p>
      </div>
      <div className="v">
        <div></div>
        <p>방문권 등록 차량</p>
      </div>
      <div className="l">
        <div></div>
        <p>정기주차 등록 차량</p>
      </div>
    </div> */}
  </div>
  </div>
  )
}

export default ParkingGird