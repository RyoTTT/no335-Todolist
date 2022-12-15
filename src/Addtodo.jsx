export default function AddTodo({
    todoText,
    ongetText,
    onsubmitTodo,
})
{
    return (
    <div className="submit">
    <input name="todo" type="text"  value={todoText} placeholder='todoを入力' onChange={ongetText}></input>
    <button onClick={onsubmitTodo}>追加</button>
    </div>
    );
}