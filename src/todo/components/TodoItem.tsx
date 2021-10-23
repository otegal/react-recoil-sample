import {Todo} from "../models/Todo";
import {useRecoilState} from "recoil";
import {todoListState} from "../recoil/todoListState";

interface TodoItemProps {
  item: Todo
}

export const TodoItem = ({item}: TodoItemProps): JSX.Element => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceTodoItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value
    })
    setTodoList(newList)
  }

  const toggleItemComplete = () => {
    const newList = replaceTodoItemAtIndex(todoList, index, {
      ...item,
      isComplete: true,
    })
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeTodoItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemComplete} />
      <button onClick={deleteItem}>- delete</button>
    </>
  )
}

const replaceTodoItemAtIndex = (arr: Todo[], index: number, newValue: Todo) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeTodoItemAtIndex = (arr: Todo[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
