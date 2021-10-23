import {useRecoilState} from "recoil";
import {todoListFilterState, TodoListFilterCondition} from "../recoil/todoListState";

export const TodoListFilters = (): JSX.Element => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)
  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as TodoListFilterCondition)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}