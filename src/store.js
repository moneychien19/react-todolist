import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './components/todo-list/todoList.slice'
import sidebarReducer from './components/sidebar/sidebar.slice'

export const reducer = {
  todoList: todoListReducer,
  sidebar: sidebarReducer,
}

export const store = configureStore({
  reducer,
})
