import React from "react";
import Student from "./Student";
import IStudent from "../IStudent";
interface StudentListProps{
  renStudents:IStudent[];
  //....
  onViewStudent:(student:IStudent)=>void;
}
export default function StudentList({renStudents, onViewStudent}:StudentListProps) {
  let studentElement = renStudents.map((student,index)=>{
      return <Student key={student.studentId} index={index+1} 
                renStudent = {student} 
                // on....
                onView={()=>onViewStudent(student)}
          />
  })

  return (
    <div className="list ">
      <h3>Danh sách sinh viên</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {/* <Student /> */}
          {studentElement}
        </tbody>
      </table>
    </div>
  );
}
