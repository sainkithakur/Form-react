import React from 'react'
export default function Form2(props)  
{
    const {text} = props
    const red=()=>{
        alert("red function called ")
    }
  return (
    <div>
      <h1 onClick={red}>{text}</h1>
    </div>
  )
}

