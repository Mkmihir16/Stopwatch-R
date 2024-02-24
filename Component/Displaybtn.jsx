import React from 'react'
import  "./displaybtn.css"
export default function Displaybtn(props) {
  function showbtn(){
    props.stop()
    document.querySelector(".hidereset").classList.add("displayreset")
  }
  function resetbtn(){
    props.reset();
    document.querySelector(".hidereset").classList.remove("displayreset")
  }
  return (
    <div>
      <div className="divs">
      <button  className="start" onClick={props.start}>Start</button>
      <button  className="stop" onClick={showbtn}>Stop</button>
      <button onClick={resetbtn} className='hidereset'>Reset</button>
      </div>
      
    </div>
  )
}
