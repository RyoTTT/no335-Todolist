export default function EditTodo ({
    oneditSubmit,
    editTodo,
    ongeteditTodo,
    onsetediting,
})
{
    return (
        <div className="submit">
        <form onSubmit={oneditSubmit}>
        <input name="edit" type="text" value={editTodo.text} onChange={ongeteditTodo}></input>
        <button type="submit">完了</button>
        <button onClick={()=>onsetediting(false)}>元に戻す</button>
        </form>
      </div> 
    )
}