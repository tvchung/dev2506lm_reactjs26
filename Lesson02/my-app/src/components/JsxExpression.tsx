import React from 'react'

export default function JsxExpression() {

  const name="Devmaster"
  const user = {
    name:"Chung Trihj",
    age:46
  }
  // hàm
  const formatName = (u:any)=>{
    return u.name + ': ' + u.age;
  }

  // element
  const element = (
    <div className='alert alert-danger'>
        <h2>Xin chào, {name}</h2>
        <h3>Welcome, {formatName(user)}</h3>
    </div>
  )
  // hàm có: rest parameter
  const sum = (...nums:number[]):number=>{

    // let tong:number=0;
    // for (let i = 0; i < nums.length; i++) {
    //   tong +=nums[i];
    // }
    // return tong;
    
    return nums.reduce((sum,nums)=>sum+nums,0)
  }

  return (
    <div>
        <h2>Jsx Expression</h2>
        <hr />
        <p>Xin chào: {name}</p>
        <p>Họ tên: {user.name} - Tuổi của bạn: {user.age}</p>
        <p>Gọi hàm: {formatName(user)}</p>
        {element}
        <hr/>
        <p>Kết quả: {sum(1,2,3)}</p>
        <p>Kết quả: {sum(10,20,30,40,50)}</p>
    </div>
    
  )
}
