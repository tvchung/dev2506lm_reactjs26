import React from 'react';
import './App.css';
import IStudent from './components/IStudent';
import FuncListStudent from './components/FuncListStudent';
import EventFunc1 from './components/EventFunc1';
import EventClass1 from './components/EventClass1';
import EventForm1 from './components/EventForm1';
import EventForm2 from './components/EventForm2';
import EventForm3 from './components/EventForm3';

function App() {

  const students: IStudent[] = [
    { id: 1, name: "Nguyễn Văn A", age: 20 },
    { id: 2, name: "Trần Thị B", age: 21 },
    { id: 3, name: "Lê Văn C" },           // tuổi không bắt buộc
    { id: 4, name: "Phạm Thị D", age: 19 },
  ];

  // handleSubmit
  const handleSubmit = (data:IStudent)=>{
    students.push(data);
    console.log("students:",students);
  }
  return (
    <div className="container border">
        <div>
          <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster Academy" />
          <hr/>
        </div>
        <FuncListStudent students={students} />
        <h2>Event</h2>
        <EventFunc1 />
        <hr/>
        <EventClass1 />
        <hr/>
        <EventForm1 />
        <hr/>
        <EventForm2  onSubmit = {handleSubmit} />
        <hr/>
        <EventForm3 />
    </div>
  );
}

export default App;
