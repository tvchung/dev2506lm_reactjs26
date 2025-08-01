import React from "react";
import Student from "./Student";
import IStudent from "../IStudent";

interface StudentListProps {
  renStudents: IStudent[];
  onViewStudent: (student: IStudent) => void;
  onEditStudent:(student: IStudent) => void;
  onDeleteStudent:(student: IStudent) => void;
}
export default function StudentList({renStudents,onViewStudent,onEditStudent,onDeleteStudent}:StudentListProps) {
  // ren data to student component
  let studentElement = renStudents.map((student, index) => (
             <Student key={student.studentId} renStudent={student} index={index} 
                  onView={() => onViewStudent(student)} 
                  onEdit={() => onEditStudent(student)} 
                  onDelete={() => onDeleteStudent(student)}
              />
          ))
        
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
          {/* <Student />
          <Student />
          <Student /> */}
          {studentElement}
        </tbody>
      </table>
    </div>
  );
}
