import {useSetRecoilState} from "recoil";
import {todoListState} from "../recoil/todoListState";
import {useState} from "react";
import {getId} from "../util";

export const TodoItemCreator = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      }
    ])

    setInputValue('')
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>add</button>
    </>
  )
}
