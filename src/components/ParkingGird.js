// 주차 지도 js

import SpotCard from "./SpotCard";
import './ParkingGrid.scss'
import ParkingInfo from "./ParkingInfo";
import {fetchParkingSpots} from '../api/parkingAPI';
import { useState,useEffect } from "react";

const ParkingGird = () => {
  const [parkingData,setParkingData] = useState([]);
  useEffect(() => {
    const loadParkingData = async ()=>{
    try{
      const data = await fetchParkingSpots();
      setParkingData(data);
    } catch(e){ console.error(e);}
    }

    loadParkingData();
  }, []);
  const grid = parkingData.filter((s)=>s.zone === 'APT');
  const shop = parkingData.filter((s)=>s.zone === 'STORE');
  return (
    
    <div className="parking">
      <div className="info_box">
      <ParkingInfo/>
      </div>
    <div className="all_box">
    <div className="R_box">
      {grid.map((item)=>{
      return <SpotCard key={item.spot_id} data={item}/>
      })
    }
      </div>
    <div className="S_box">
      {
        shop.map((item)=>{
          return<SpotCard key={item.spot_id} data={item} />
        })
      }
    </div>
  </div>
  </div>
  
  )
}

export default ParkingGird