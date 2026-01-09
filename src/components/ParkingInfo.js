// 주차 현황 js
import {fetchParkingStatusSummary} from '../api/parkingAPI';
import { useState,useEffect } from "react";

const ParkingInfo = () => {
  const [totalparking,setTotalParking] = useState([]);
  const [spotsparking,setspotsParking] = useState([]);
  const [emptyparking,setemptyParking] = useState([]);
  
  useEffect(() => {
    const loadsummarydata = async ()=>{
    try{
      const {total,occupied,empty } = await fetchParkingStatusSummary();
      setTotalParking(total);
      setspotsParking(occupied);
      setemptyParking(empty);
      
    } catch(e){ console.error(e);}
    }
    loadsummarydata();
  }, []);

  //총 주차대수
    return (
    <div className="info-p">
      <p>총 주차면수 : {totalparking} │</p>
      <p>현재 주차 : {spotsparking} │</p>
      <p>잔여석 : {emptyparking}</p>
    </div>
  )
}

export default ParkingInfo