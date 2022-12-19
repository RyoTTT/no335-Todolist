export default function CompleteTodo({
    compTodos,
    onbackTodos,
})
{
    return (
        <div className="compTodo">
  <ul>
    {compTodos.map((todo,num)=>{
      return (
        <div key="compTodolist" className="contents">
        <li>{todo.id}:{todo.text}</li>
        <button onClick={()=>onbackTodos(num)}>戻す</button>
        </div>
      )
    })
  }
  </ul>
</div>
    )
}