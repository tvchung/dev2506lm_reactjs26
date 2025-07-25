import React, { useState } from 'react'

export default function UseStateDemo() {
    // 1. Khởi tạo state sử dụng hàm useState
    const [count, setCount] = useState(0) // biến state (count=0) giá trị khởi tạo ban đầu

    // 2. khởi tạo state là 1 mảng
    const listInit = [1,4,2,5]
    const [list,setList] = useState(listInit)

    // Hàm xử lý sự kiện khi thêm số ngẫu nghiên vào List
    const handleList = ()=>{
        setList([
            ...list,
            parseInt((Math.random() * 100).toString())
        ])
    }

    // 3. khởi tạo state là một object
    const personInit = {
        id:111,
        name:"Chung",
        age:47
    }
    const [person, setPerson] = useState(personInit)

  return (
    <div className='alert alert-danger'>
        <h2>Sử Dụng hàm useState</h2>
        <p>Count: {count}</p>
        <div>
            <button onClick={()=>setCount(count+1)}>Tăng + </button> 
            <button onClick={()=>setCount(count-1)}>Giảm - </button>
        </div>
        
        <hr/>
        <h3>List: {list.toString()}</h3>
        <button onClick={handleList}>Add new</button>

        <h3>Person: 
            <br/>
            Name:{person.name} - Age:{person.age}
        </h3>
    </div>
  )
}
