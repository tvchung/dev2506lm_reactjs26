import React from 'react'
import Student from './Student'
import { log } from 'console';
import IStudent from './IStudent';

interface StudentListProps {
  students: IStudent[];
}
export default function StudentList({ students }: StudentListProps) {
    console.log("students:",students);
    
    const elementStudent = students.map((student, index)=>{
        return <Student student={student} key={index} />
    }) 
  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {elementStudent}
        </tbody>
    </table>
  )
}
