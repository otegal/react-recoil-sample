import {useRecoilValue} from "recoil";
import {TodoItemCreator} from "./TodoItemCreator";
import {TodoItem} from "./TodoItem";
import {filteredTodoListState} from "../recoil/todoListState";
import {TodoListFilters} from "./TodoListFilters";
import {TodoListStats} from "./TodoListStats";

export const TodoList = (): JSX.Element => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <h1>TodoList</h1>
      <TodoListStats />
      <div>
        <TodoListFilters />
      </div>
      <div>
        <TodoItemCreator />
      </div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <TodoItem item={todo} />
        </div>
      ))}
    </>
  )
}