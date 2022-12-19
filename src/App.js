import React from 'react';
import './App.css';
import { useState } from 'react';
import Todolist from './Todolist'
import AddTodo from './Addtodo';
import EditTodo from './Edittodo';
import CompleteTodo from './CompleteTodo';


function App() {
  const [todos,setTodos] = useState([]);
  const [todoText,settodoText] = useState("");
  const [compTodos,setcompTodos] = useState([]);
  const [active,setactive] = useState(false);
  const [editing,setediting] = useState(false);
  const [editTodo,seteditTodo] = useState({id:"",text:""});

//inputから文字を取得
  const getText = (e) => {
    e.preventDefault();
    settodoText(e.target.value);
  }
//文字をセット
  const submitTodo = () => {
      const newTodo = {
        id: todos.length,
        text: todoText
      }
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      settodoText("");
    }
  
//Todo削除
  const todoDelete = (num) => {
    const spliceTodos = [...todos];
    spliceTodos.splice(num,1);
    setTodos(spliceTodos);
    }
  
//完了の欄に移動させる
  const todoComp = (num) => {
    const newStartTodoIdList = startTodoIdList.filter(todoId => num !== todoId);
    setStartTodoIdList(newStartTodoIdList);
    const spliceTodos = [...todos];
    spliceTodos.splice(num,1);
    
  const newcompTodos = [...compTodos,todos[num]];
    setTodos(spliceTodos);
    setcompTodos(newcompTodos);
  }

//未完了の欄に移動させる
  const backTodos = (num) => {
    const backTodos = [...compTodos];
    backTodos.splice(num,1);

    const returnTodos = [...todos,compTodos[num]];
    setTodos(returnTodos);
    setcompTodos(backTodos);
  }

//編集した文字列を取得
  const geteditTodo = (e) => {
    seteditTodo({...editTodo,text:e.target.value});
  }

  const editSubmit = (e) => {
    e.preventDefault();

    editFinish(editTodo.id,editTodo.text);
  }

//編集後、ボタンを押すと編集後の文字列に変わる
  const editFinish = (id,text) => {
    const newTodo = todos.map((todo,num)=> {
   if (num === id) {
    return text;
   } else {
    return todo;
   }
    });
    setediting(false);
    console.log(newTodo);
    setTodos(newTodo);
  }

//編集ボタンを押すとTodo追加欄が編集欄に変わる
  const todoEdit = (todo,num) => {
    setediting(true);
    seteditTodo({id:num,text:todo});
  }
  
//開始ボタンでそのTodoのcssを変更する
  const [startTodoIdList, setStartTodoIdList] = useState([])
  const todoDoing = (id) => {
    setStartTodoIdList([...startTodoIdList, id])
  }
  
 return (
<>
{editing ? (
          <div className="submit">
          <form onSubmit={editSubmit}>
          <input name="edit" type="text" value={editTodo.text} onChange={geteditTodo}></input>
          <button type="submit">完了</button>
          <button onClick={()=>setediting(false)}>元に戻す</button>
          </form>
        </div> 
) : (
  <AddTodo
  todoText={todoText}
  ongetText={getText}
  onsubmitTodo={submitTodo}>
  </AddTodo>
)}
<p>「TODO」</p>
<div className='todolist'>
  <ul>
    {todos.map((todo,num)=>{
      return (
        <div key={num} className="contents" id={ startTodoIdList.includes(todo.id) ? "active" : "" }>
          <li>{todo.id}:{todo.text}</li>
          <button onClick={()=>todoComp(num)}>完了</button>
          <button onClick={()=>todoDelete(num)}>削除</button>
          <button onClick={() => todoDoing(todo.id)}>開始</button>
          <button onClick={()=>todoEdit(todo,num)}>編集</button>
        </div>
      )
    })}
  </ul>
</div>
<p>「完了済TODO」</p>
<CompleteTodo
compTodos={compTodos}
onbackTodos={backTodos}>
</CompleteTodo>
</>
  );
}

export default App;
