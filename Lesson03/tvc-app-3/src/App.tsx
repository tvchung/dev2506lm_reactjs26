import React from 'react';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';
import FuncComp2 from './components/FuncComp2';
import ClassComp from './components/ClassComp';
import ClassComp1 from './components/ClassComp1';
import ClassComp2 from './components/ClassComp2';
import FuncComp3 from './components/FuncComp3';
import FuncListMember from './components/FuncListMember';
import ClassMember from './components/ClassMember';
import StudentList from './components/StudentList';
import IStudent from './components/IStudent';
import FuncComp4 from './components/FuncComp4';

function App() {
  // Biến đối tượng
  const objStudent = {
    name:"Chung Chung",
    age:100,
    email:'chungtrinhj@gmail.com'
  }
  // Lớp giao diện đối tượng sinh viên
  // Mock data
  const students: IStudent [] = [
    { id: 1, name: 'Nguyễn Văn A', age: 20 },
    { id: 2, name: 'Trần Thị B', age: 22 },
    { id: 3, name: 'Lê Văn C', age: 19 },
    { id: 4, name: 'Phạm Thị D', age: 21 },
    { id: 5, name: 'Hoàng Văn E', age: 23 },
  ];

  return (
    <div className="container h-100">
      <div>
        <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster Academy'/>
       
      </div>
      <div className='text-center alert alert-info'>
         <h1>VIỆN CÔNG NGHỆ VÀ ĐÀO TẠO DEVMASTER</h1>
      </div>
      {/* <hr/>
      <JsxExpression />
      <hr/>
      <h2 className='alert alert-success'>Component</h2>
      <FuncComp />
      <FuncComp name="Chung Trinhj" company="Devmaster Academy" />

      <FuncComp1 name="Chung Trinhj Vawn" company='Công ty Devmaster' ></FuncComp1>

      <FuncComp2 />
      <FuncComp2 fullName="Trịnh Văn Chung" age="46" email="Chungtrinhj@gmail.com" />

      <FuncComp3 student = {objStudent}/>
      <hr/>
      <ClassComp studentName="Chung Trịnh" />
      <ClassComp1 name='Chung chung' age={100} />

      <ClassComp2 student = {objStudent}/>
      <hr/>
      <FuncListMember />
      <hr/>
      <ClassMember /> */}
      <hr />
      <StudentList students={students} />
      <FuncComp4 />
    </div>
  );
}

export default App;
