import React, { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import Header from "./components/Header";
import Control from "./components/Control";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import IStudent from "./IStudent";

function App() {
  // Tạo mock data students
  const listData = [
    {
      studentId: "SV101",
      studentName: "Đặng Thị Hồng",
      studentAge: 19,
      gender: false,
      birthday: new Date("2006-03-22"),
      address: "Nghệ An",
      isActive: true,
    },
    {
      studentId: "SV102",
      studentName: "Ngô Văn Khánh",
      studentAge: 20,
      gender: true,
      birthday: new Date("2006-03-20"),
      address: "Bắc Giang",
      isActive: false,
    },
    {
      studentId: "SV103",
      studentName: "Lý Minh Tú",
      studentAge: 21,
      gender: true,
      birthday: new Date("2006-03-21"),
      address: "Quảng Ngãi",
      isActive: true,
    },
  ];

  // state lưu danh sách sinh viên
  const [studentList, setStudentList] = useState<IStudent[]>(listData);
  // Trạng thái ẩn/hiển form
  const [isForm, setIsForm] = useState(false);
  const [actionName, setActionName] = useState("");
  // state lưu thông tin cần xem / sửa
  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);
  // => chuyển dữ liệu này lên form
  const handleViewStudent = (student: IStudent) => {
    setIsForm(true);
    setActionName("View");
    setSelectedStudent(student);
  };
  const handleClose = (param: boolean) => {
    setIsForm(param);
    setActionName("");
  };

  // Hiển thị form thêm mới
  const handleAdd = () => {
    setIsForm(true);
    setActionName("Add");
    setSelectedStudent(null);
  };

  // Xử lý chức năng hiển thị form sửa
  const handleEditStudent = (student: IStudent) => {
    setIsForm(true);
    setActionName("Edit");
    setSelectedStudent(student);
  };

  useEffect(() => {
    console.log("selectedStudent:", selectedStudent);
  });

  useEffect(() => {
    console.log("isForm:", isForm);
  }, [isForm]);

  const handleSubmit = (student: IStudent | null,actionName: string | null  ) => {
    console.log("Form submit , actionName :", actionName);

    if (actionName === "View") {
      setIsForm(false);
      setActionName("");
    }
    if (actionName === "Add" && student) {
      // Kiểm tra trùng mã sinh viên
      const exists = studentList.some((s) => s.studentId === student.studentId);
      if (exists) {
        // alert("Mã sinh viên đã tồn tại!");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<b>Mã sinh viên</b> đã tồn tại trong danh sách!`,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Đã hiểu",
        });
        return;
      }
      setStudentList((prev) => {
        return [...prev, student];
      });
      setIsForm(false);
      setActionName("");
    }

    // Sửa
    if (actionName === "Edit" && student) {
      // Kiểm tra mã sinh viên có tồn tại trong ds không
      const exists = studentList.some((s) => s.studentId === student.studentId);
      if (!exists) {
        // alert("Mã sinh viên đã tồn tại!");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<b>Mã sinh viên</b> không tồn tại trong danh sách!`,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Đã hiểu",
        });
        return;
      }
      setStudentList((prev) =>
        prev.map((s) => (s.studentId === student.studentId ? student : s))
      );
      setIsForm(false);
      setActionName("");
    }
    // ,/ end Sửa
  };

  // Xử lý chức năng xóa
  const handleDeleteStudent = (student: IStudent)=>{
        Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa?',
        html: `Sinh viên <b>${student.studentName}</b> sẽ bị xóa khỏi danh sách.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy'
      }).then((result) => {
        if (result.isConfirmed) {
          setStudentList((prev) =>
            prev.filter((s) => s.studentId !== student.studentId)
          );

          Swal.fire({
            icon: 'success',
            title: 'Đã xóa!',
            text: `Sinh viên "${student.studentName}" đã được xóa.`,
            timer: 1500,
            showConfirmButton: false,
          });

          setIsForm(false);
          setSelectedStudent(null);
          setActionName("");
        }
      });
  }
  return (
    <section className="container-fluid">
      <Header />
      <section className="container mt-4">
        <div className="row my-2">
          <div className="col-12 col-md border">
            <Control onAdd={handleAdd} />
            <hr />
            <StudentList
              renStudents={studentList}
              onViewStudent={handleViewStudent}
              onEditStudent={handleEditStudent}
              onDeleteStudent={handleDeleteStudent}
            />
          </div>
          <div
            className={`col-md-5 col-12 border ms-0 mt-2 ms-sm-2 mt-sm-0 is-form ${
              isForm ? "show" : ""
            }`}
            id="frmForm"
          >
            <StudentForm
              renStudent={selectedStudent}
              renActionName={actionName}
              onClose={handleClose}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
