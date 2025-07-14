import React from 'react'
import IStudent from './IStudent'

interface StudentProps {
    student:IStudent
}

export default function Student({ student }:StudentProps) {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>
        <button className='btn btn-info'> View</button>
        <button className='btn btn-success'> Edit</button>
        <button className='btn btn-danger'> Remove</button>
      </td>
    </tr>
  )
}
