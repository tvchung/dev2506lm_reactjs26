import React from "react";
import Student from "./Student";

export default function StudentList() {
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
          <Student />
          <Student />
          <Student />
          {/* <tr className="align-middle">
            <td className="text-center">1</td>
            <td>SV01</td>
            <td>Nguyễn Văn A</td>
            <td className="text-center">20</td>
            <td className="text-center">Nam</td>
            <td className="text-center">
              <button id="btnView" className="btn btn-success rounded-0">
                Xem
              </button>
              <button id="btnEdit" className="btn btn-warning rounded-0">
                Sửa
              </button>
              <button id="btnDel" className="btn btn-danger rounded-0">
                Xóa
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td className="text-center">2</td>
            <td>SV01</td>
            <td>Trần Thị Bình</td>
            <td className="text-center">22</td>
            <td className="text-center">Nữ</td>
            <td className="text-center">
              <button id="btnView" className="btn btn-success rounded-0">
                Xem
              </button>
              <button id="btnEdit" className="btn btn-warning rounded-0">
                Sửa
              </button>
              <button id="btnDel" className="btn btn-danger rounded-0">
                Xóa
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
