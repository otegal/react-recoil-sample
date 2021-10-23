import {useRecoilValue} from "recoil";
import {todoListState} from "../recoil/todoListState";
import {TodoItemCreator} from "./TodoItemCreator";
import {TodoItem} from "./TodoItem";

export const TodoList = (): JSX.Element => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <h1>TodoList</h1>

      <TodoItemCreator />
      {todoList.map((todo) => (
        <div key={todo.id}>
          <TodoItem item={todo} />
        </div>
      ))}
    </>
  )
}