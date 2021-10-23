import {useRecoilValue} from "recoil";
import {todoListStatsState} from "../recoil/todoListState";

export const TodoListStats = (): JSX.Element => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {percentCompleted}%</li>
    </ul>
  )
}