import React from 'react'
import "./watch.css"
export default function Watch(props) {
  return (
    <div className='div1'>
      <h1>Stopwatch</h1>
      <div className="span">
      <span>{props.time.hr}</span>
      <span>{props.time.min}</span>
      <span>{props.time.s}</span>
      <span>{props.time.ms}</span>
      </div>
     
    </div>
  )
}
