import React from 'react';
import './App.css';
import Header from './components/Header';
import Control from './components/Control';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <section className="container-fluid">
        <Header />
        <section className="container mt-4">
          <div className="row my-2">
              <div className="col-12 col-md border">
                  <Control />
                  <hr/>
                  <StudentList />
              </div>
              <div className="col-md-5 col-12 border ms-0 mt-2  ms-sm-2  mt-sm-0" id="frmForm">
                  <StudentForm />
              </div>
          </div>
        </section>
    </section>
  );
}

export default App;
