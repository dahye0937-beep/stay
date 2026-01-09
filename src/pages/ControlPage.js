import { useState,useEffect } from "react"
import {enterParking,fetchParkingSpots,exitParking,confirmExit} from '../api/parkingAPI'


const ControlPage = () => {
  const [carnum,setCarnum] = useState('');
  
  //입차
  const fetchEnterMode = async (carNum)=>{
    try{
      //api 에 있는  update  처리
      const {targetID,type} = await enterParking(carNum);
      const typeName = (type === 'APT' ? "입주민" : "상가");
      alert(`[${typeName}입차성공] ${targetID}에 주차되었습니다`);
      // await fetchParkingSpots();   //주차지도가 업데이트가 됨.
    } catch(e){ console.error(e); }
  }


  //출차
  const fetchExitMode = async (carNum)=>{
    try{
      
      //출차처리
      const {registerTime,spot_id} = await exitParking(carNum);
      const result = window.confirm(`주차시간 : ${registerTime}`);
      if(result) {
        //확인버튼 : 출차를 하겠음
        await confirmExit(spot_id);
        alert("안녕히 가세요!");
        await fetchParkingSpots();   //주차지도가 업데이트가 됨.
      }
    } catch(e){ console.log(e); }
  }
  
  //버튼처리
  const submitbtn = (t) =>{
        if(t==="in"){
          fetchEnterMode(carnum);
        }else if(t==="out"){
          fetchExitMode(carnum);
        }
    }


  return (
    
    <div>
      <h1>입차/출차</h1>
      <input type="text"
      value={carnum} 
      onChange={(e)=>{setCarnum(e.target.value)}}/>
      <button onClick={() => submitbtn("in")}>입차</button>
      <button onClick={() => submitbtn("out")}>출차</button>
    </div>
    
  )
}

export default ControlPage