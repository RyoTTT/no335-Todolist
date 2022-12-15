export default function Todolist  ({
todos,
active,
ontodoComp,
ontodoDelete,
ontodoDoing,
ontodoEdit,
}) 
    {
    return (
<div className='todolist'>
  <ul>
    {todos.map((todo,num)=>{
      return (
        <div key={num} className="contents" id={ active ? "active" : "" }>
          <li>{num+1}:{todo}</li>
          <button onClick={()=>ontodoComp(num)}>完了</button>
          <button onClick={()=>ontodoDelete(num)}>削除</button>
          <button onClick={ontodoDoing}>開始</button>
          <button onClick={()=>ontodoEdit(todo,num)}>編集</button>
        </div>
      )
    })}
  </ul>
</div>
    )
};


