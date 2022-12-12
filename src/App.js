import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
<div className="submit">
  <input type="text" placeholder='todoを入力'></input>
  <button>追加</button>
</div>
<p>「TODO」</p>
<div className='todolist'>
  <ul>
    <li>todo1</li>
    <button>完了</button>
    <button>削除</button>
  </ul>
</div>
<p>「完了済TODO」</p>
<div className="compTodo">
  <ul>
    <li>CompTodo</li>
    <button>完了</button>
  </ul>
</div>
</>
  );
}

export default App;
