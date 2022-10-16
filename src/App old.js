import React, { useState, useRef, useReducer } from 'react';
import BaseModal from './BaseModal.js';


import logo from './logo.svg';
import './App.css';

function App() {
  const [test, setTest] = useState("hello");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState(0);

  function setTestfunction() {
    setTest("hello2")
    console.log(test);
  };

  function counter() {
    setcount(count+1);
  };

  const [sum, apple] = useReducer((state, action) => {
    return state + action;
  }, 5);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type='button' className={"btn btn-primary"} onClick={setTestfunction}>hello</button>
        <button type='button' className={"btn btn-primary"} onClick={counter}>Plus one</button>
        <button onClick={() => apple(1)}>
        Add 1
      </button>
        <p>{count}</p>
        <p>{sum}</p>
        <BaseModal>
        </BaseModal>
        </header>
    </div>
  );
}

export default App;
