<>
<Todolist
todos={todos}
active={active}
ontodoComp={todoComp}
ontodoDelete={todoDelete}
ontodoDoing={todoDoing}
ontodoEdit={todoEdit}>
</Todolist>

<EditTodo
onEditsubmit={editSubmit}
editTodo={editTodo.text}
ongeteditTodo={geteditTodo}
onsetediting={setediting}>
</EditTodo>
</>