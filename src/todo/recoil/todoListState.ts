import {atom} from "recoil";
import {Todo} from "../models/Todo";

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: []
})