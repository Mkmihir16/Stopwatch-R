import { useState } from 'react'
import './App.css'
import Watch from '../Component/Watch';
import Displaybtn from '../Component/Displaybtn';

function App() {
 const[time,setTime]=useState({ms:0,s:0,min:0,hr:0})
 const[inter,setInter]=useState();
 function reset(){
  setTime({ms:0,s:0,min:0,hr:0})
 }
 function start(){
  setInter(setInterval(run,10))
 }
 function stop(){
 setInter(clearInterval(inter))
 }
 var updatems=time.ms;
 var updates=time.s;
 var updatemin=time.min;
 var updatehr=time.hr;
function run(){
  if(updatems===100){
    updates++;
    updatems=0;
  }
  if(updates===60){
    updatemin++;
    updates=0;
  }
  if(updatemin===60){
    updatehr++;
    updatemin=0;
  }
  updatems++;
  return setTime({ms: updatems<10?'0'+updatems:updatems, s: updates.toString().length===1?'0'+updates:updates, min:updatemin.toString().length===1?'0'+updatemin:updatemin, hr:updatehr.toString().length===1?'0'+updatehr:updatehr})
}
  return (
    <>
      <Watch time={time}/>  
      <Displaybtn start={start} stop={stop} reset={reset}/>
    </>
  )
}

export default App
