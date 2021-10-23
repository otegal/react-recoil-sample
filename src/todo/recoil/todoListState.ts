import {atom, selector} from "recoil";
import {Todo} from "../models/Todo";
import {TodoStats} from "../models/TodoStats";

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: []
})

export type TodoListFilterCondition = 'Show All' | 'Show Completed' | 'Show Uncompleted'

export const todoListFilterState = atom<TodoListFilterCondition>({
  key: 'todoListFilterState',
  default: 'Show All'
})

export const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get<TodoListFilterCondition>(todoListFilterState)
    const list = get<Todo[]>(todoListState)

    switch (filter) {
      case "Show All":
        return list
      case "Show Completed":
        return list.filter((item) => item.isComplete)
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete)
    }
  }
})

export const todoListStatsState = selector<TodoStats>({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  }
})