import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import ExampleContext from './components/ExampleContext';

function App() {
  return (
    <div className="container border">
        <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster Academy'/>
        <h1> Làm việc với React Hook</h1>
        <hr/>
        <UseStateDemo />
        <UseEffectDemo />

        <ExampleContext />
    </div>
  );
}

export default App;
