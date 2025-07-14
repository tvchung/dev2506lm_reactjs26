import React from 'react'

export default function FuncComp2(props:any) {
  return (
    <div>
        <h2> Bài tập </h2>
        <div className='alert alert-info'>
            <p> FullName: {props.fullName}</p>
            <p> Age: {props.age}</p>
            <p> Email: {props.email}</p>
            <p> Add: {props.address}</p>
        </div>
    </div>
  )
}
