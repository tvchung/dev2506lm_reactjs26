import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import IStudent from "../IStudent";
interface StudentFormProps {
  renStudent: IStudent | null;
  renActionName:string| null;
  onClose: (flag: boolean) => void;
  onSubmit:(student:IStudent, actionName:string|null)=>void;
}
export default function StudentForm({ renStudent, renActionName, onClose, onSubmit }: StudentFormProps) {
  // state: trạng thái dữ liệu trên form
  const [form, setForm] = useState<IStudent>({
    studentId: "",
    studentName: "",
    studentAge: 0,
    gender: true,
    birthday: new Date(),
    address: "",
    isActive: true,
  });
  useEffect(() => {
    console.log("renStudent Form:", renStudent);
  });
  // Cập nhật form khi user nhấn "Xem"
  useEffect(() => {
    if (renStudent) {
      setForm(renStudent);
    }else{
      let studentAdd={
        studentId: "",
        studentName: "",
        studentAge: 0,
        gender: true,
        birthday: new Date(),
        address: "",
        isActive: true,
      }
      setForm(studentAdd)
    }
  }, [renStudent]);


  // button click
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(renActionName==="View"){
      onClose(false);
    }else if(renActionName==="Edit"){
      if(form.studentId === "" || form.studentId===null){
        Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  html: `<b>Mã sinh viên</b> không được để trống!`,
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: 'Đã hiểu'
                });
                return;
      }
      onSubmit(form,renActionName)
      onClose(false);
    }else{
      if(form.studentId === "" || form.studentId===null){
        Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  html: `<b>Mã sinh viên</b> không được để trống!`,
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: 'Đã hiểu'
                });
                return;
      }
      onSubmit(form,renActionName)
    }
    
  }
  return (
    <form action="" method="post" className="py-2" onSubmit={handleSubmit}>
      <h3>Thông tin sinh viên</h3>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="id">
          Mã sinh viên
        </span>
        <input
          type="text"
          className="form-control rounded-0"
          id="studentId"
          name="studentId"
          value={form.studentId}
          onChange={(e) => setForm({ ...form, studentId: e.target.value })}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="name">
          Họ và tên
        </span>
        <input
          type="text"
          className="form-control rounded-0"
          id="studentName"
          name="studentName"
          value={form.studentName}
          onChange={(e) => setForm({ ...form, studentName: e.target.value })}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="age">
          Tuổi
        </span>
        <input
          type="number"
          className="form-control rounded-0"
          id="studentAge"
          name="studentAge"
          value={form.studentAge}
          onChange={(e) => {
            const value = e.target.value;
            setForm({
              ...form,
              studentAge: value === "" ? 0 : parseInt(value, 10),
            });
          }}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="sex">
          Giới tính
        </span>
        <div className="d-flex align-items-center">
          <input
            type="radio"
            className="mx-1 ms-3"
            name="gender"
            id="male"
            value="true"
            checked={form.gender === true}
            onChange={() => setForm({ ...form, gender: true })}
          />
          <label htmlFor="male">Nam</label>
          <input
            type="radio"
            className="mx-1 ms-3"
            name="gender"
            id="female"
            value="false"
            checked={form.gender === false}
            onChange={() => setForm({ ...form, gender: false })}
          />
          <label htmlFor="female">Nữ</label>
          {/* <input
            type="radio"
            className="mx-1 ms-3"
            name="gender"
            id="none"
            value="null"
            checked={form.gender === null}
            onChange={() => setForm({ ...form, gender: null })}
          />
          <label htmlFor="none">Khác</label> */}
        </div>
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="birthday">
          Ngày sinh
        </span>
        <input
          type="date"
          className="form-control rounded-0"
          id="birthday"
          name="birthday"
          value={new Date(form.birthday).toISOString().slice(0, 10)}
          onChange={(e) =>
            setForm({ ...form, birthday: new Date(e.target.value) })
          }
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="address">
          Địa chỉ
        </span>
        <textarea
          name="address"
          id="address"
          className="form-control rounded-0"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="active">
          Trạng thái
        </span>
        <div className="d-flex align-items-center">
          <input
            type="radio"
            className="mx-1 ms-3"
            name="isActive"
            id="is-active"
            checked={form.isActive === true}
            onChange={() => setForm({ ...form, isActive: true })}
          />
          <label htmlFor="is-active">Active</label>
          <input
            type="radio"
            className="mx-1 ms-3"
            name="isActive"
            id="non-active"
            checked={form.isActive === false}
            onChange={() => setForm({ ...form, isActive: false })}
          />
          <label htmlFor="non-active">Non-Active</label>
        </div>
      </div>
      <button className={`rounded-0 mt-2 btn ${renActionName==="Add" ? " btn-primary ":renActionName==="Update" ? " btn-warning":" btn-success "}`} id="btnSubmit" type="submit">
        {renActionName === "View" ? "Close" : renActionName==="Edit" ? "Update":"Save"}
      </button>
    </form>
  );
}
