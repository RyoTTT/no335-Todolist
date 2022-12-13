import React from 'react';
import './App.css';
import { useState } from 'react';
import { findByLabelText } from '@testing-library/react';


function App() {
  const [todos,setTodos] = useState([]);
  const [todoText,settodoText] = useState("");
  const [compTodos,setcompTodos] = useState([]);
  const [active,setactive] = useState(false);

  const getText = (e) => {
    e.preventDefault();
    settodoText(e.target.value);
  }

  const submitTodo = () => {
      const newTodos = [...todos, todoText];
      setTodos(newTodos);
      settodoText("");
    }
  
  const todoDelete = (num) => {
    const spliceTodos = [...todos];
    spliceTodos.splice(num,1);
    setTodos(spliceTodos);
    }
  
  const todoComp = (num) => {
    const spliceTodos = [...todos];
    spliceTodos.splice(num,1);
    
  const newcompTodos = [...compTodos,todos[num]];
    setTodos(spliceTodos);
    setcompTodos(newcompTodos);
  }

  const backTodos = (num) => {
    const backTodos = [...compTodos];
    backTodos.splice(num,1);

    const returnTodos = [...todos,compTodos[num]];
    setTodos(returnTodos);
    setcompTodos(backTodos);
  }
  const todoDoing = () => {
    setactive(!active);
  }
  
 return (
<>
<div className="submit">
  <input name="todo" type="text"  value={todoText} placeholder='todoを入力' onChange={getText}></input>
  <button onClick={submitTodo}>追加</button>
</div>
<p>「TODO」</p>
<div className='todolist'>
  <ul>
    {todos.map((todo,num)=>{
      return (
        <div key="todolist" className="contents" id={ active ? "active" : "" }>
          <li>{num+1}:{todo}</li>
          <button onClick={()=>todoComp(num)}>完了</button>
          <button onClick={()=>todoDelete(num)}>削除</button>
          <button onClick={todoDoing}>開始</button>
        </div>
      )
    })}
  </ul>
</div>
<p>「完了済TODO」</p>
<div className="compTodo">
  <ul>
    {compTodos.map((todo,num)=>{
      return (
        <div key="compTodolist" className="contents">
        <li>{num+1}:{todo}</li>
        <button onClick={()=>backTodos(num)}>戻す</button>
        </div>
      )
    })
  }
  </ul>
</div>
</>
  );
}

export default App;
