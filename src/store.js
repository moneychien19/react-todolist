import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './components/todo-list/todoList.slice'

export const reducer = {
  todoList: todoListReducer,
}

export const store = configureStore({
  reducer,
})
