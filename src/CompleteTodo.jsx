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
        <li>{num+1}:{todo}</li>
        <button onClick={()=>onbackTodos(num)}>戻す</button>
        </div>
      )
    })
  }
  </ul>
</div>
    )
}