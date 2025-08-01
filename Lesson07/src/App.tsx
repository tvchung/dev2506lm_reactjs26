import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Control from "./components/Control";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import IStudent from "./IStudent";

function App() {
  // Quản lý trạng thái form show/hide => state: isForm
  const [isForm, setIsForm] = useState(false);
  // Mock Data
  const studentsInit: IStudent[] = [
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn An",
      studentAge: 20,
      gender: true,
      birthDay: new Date(2005, 3, 15), // tháng 3 là tháng 4 do tháng tính từ 0
      address: "Hà Nội",
      isActive: true,
    },
    {
      studentId: "SV002",
      studentName: "Trần Thị Bình",
      studentAge: 19,
      gender: false,
      birthDay: new Date(2006, 7, 22),
      address: "TP. Hồ Chí Minh",
      isActive: false,
    },
    {
      studentId: "SV003",
      studentName: "Lê Quốc Dũng",
      studentAge: 21,
      gender: true,
      birthDay: new Date(2004, 0, 10),
      address: "Đà Nẵng",
      isActive: true,
    },
  ];

  // Tổ chức dữ liệu của ứng trong state: students
  const [students,setStudents] = useState<IStudent[]>(studentsInit)
  // 1. render => students vào component (StudentList)

  // 2. Hàm xử lý sự kiện khi nhấn thêm mới trên component (Control)
  const handleAdd = ()=>{
    setIsForm(true); // Hiển thị form
    // cập nhật nút submit dựa theo trạng thái nút lệnh xử lý => actionName
    setActionName("Add");
    // Cập nhật dữ liệu để chuyển lên form
    setSelectStudent(null);
  }

  // 3. Hàm xử lý sự kiện xem (View)
  const handleViewStudent = (student:IStudent)=>{
    setIsForm(true); // Hiển thị form
    // cập nhật nút submit dựa theo trạng thái nút lệnh xử lý => actionName
    setActionName("View");
    console.log("Từ view (onViewStudent): ", student);
    // Cập nhật dữ liệu để chuyển lên form
    setSelectStudent(student);
  }

  // 4. state: actionName => để quản lý trạng thái form: xem, thêm, sửa?
  const [actionName, setActionName] = useState("")

  // 5. close form
  const handleClose = ()=>{
    setIsForm(false); // đóng form
  }

  // 6. quản lý dữ liệu form
  const [selectStudent, setSelectStudent] = useState<IStudent | null>(null)

  return (
    <section className="container-fluid">
      <Header />
      <section className="container mt-4">
        <div className="row my-2">
          <div className="col-12 col-md border">
            <Control onAdd={handleAdd} />
            <hr />
            <StudentList renStudents={students} onViewStudent={handleViewStudent} />
          </div>
          {/* <div className="col-12 col-md-5 border ms-0 mt-2  ms-sm-2  mt-sm-0 is-form " > */}
          <div
            className={`col-12 col-md-5 border ms-0 mt-2  ms-sm-2  mt-sm-0 is-form ${
              isForm === true ? "show" : ""
            }`}
          >
            <StudentForm  
              renderActionName={actionName} 
              onClose={handleClose} 
              renderSelectStudent = {selectStudent}
              />
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
