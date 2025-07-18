import React from 'react'
import IStudent from './IStudent';

type FuncListStudentProps = {
  students: IStudent[];
}; 

export default function FuncListStudent({students}:FuncListStudentProps) {
  return (
    <div>
        <table className='table table-bordered' >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student,index)=>{
                        return (
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>
                                        View / Edit / Delete
                                    </td>
                                </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}
