import React, { useState } from 'react'


function Counter() {
const reducer=(state=0,action)=>{
  switch(action.type){
    case "increament":
      return state+action.payload;
      case "decreament":
        return state -action.payload;
        default:
  }
}
    // const [count,setCount]=useState(1)
    // const increament=()=>{
    //   alert('increament clicked')
    // }
    // const decreament=()=>{
    //   alert('decreament clicked')
    // }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>{
        // setCount(count+1)
      }}>increament</button>
      <button onClick={()=>{
        // setCount(count-1)
      }}>decreament</button>
    </div>
  )
}

export default Counter

