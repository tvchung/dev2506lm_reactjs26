import React from 'react';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';

function App() {
  return (
    <div className="container h-100">
      <div>
        <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster Academy'/>
       
      </div>
      <div className='text-center alert alert-info'>
         <h1>VIỆN CÔNG NGHỆ VÀ ĐÀO TẠO DEVMASTER</h1>
      </div>
      <hr/>
      <JsxExpression />
      <hr/>
      <h2 className='alert alert-success'>Component</h2>
      <FuncComp />
      <FuncComp name="Chung Trinhj" company="Devmaster Academy" />

      <FuncComp1 name="Chung Trinhj Vawn" company='Công ty Devmaster' ></FuncComp1>
    </div>
  );
}

export default App;
