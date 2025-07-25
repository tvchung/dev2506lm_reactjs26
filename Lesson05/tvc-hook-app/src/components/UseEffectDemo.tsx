import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
    // 1. callback
    useEffect(()=>{
        console.log("Đây là callback function");
    })
    
    // 2. callback and array empty
    useEffect(()=>{
        console.log("Đây là 1 callback function và mảng rỗng")
    },[])

    // 3. callback and deps
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    
    useEffect(()=>{
        console.log("callback and [deps]", count)
    },[count])

  return (
    <div className='alert alert-success'>
        <h2>Sử dụng useEffect </h2>
        <button onClick={()=>setCount(count+1)}>Count ++:  {count} </button>
    </div>
  )
}
