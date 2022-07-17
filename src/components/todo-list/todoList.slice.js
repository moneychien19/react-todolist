import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: '1',
      groupId: '1',
      color: '#ADCCFB',
      title: 'Scrum Planning',
      checked: false,
      time: null,
    },
    {
      id: '2',
      groupId: '1',
      color: '#ADCCFB',
      title: '看 MR',
      checked: false,
      time: null,
    },
    {
      id: '3',
      groupId: '2',
      color: '#CAE9C5',
      title: 'Todo List Figma 完成',
      checked: false,
      time: null,
    },
    {
      id: '4',
      groupId: '2',
      color: '#CAE9C5',
      title: 'Todo List 專案架構',
      checked: false,
      time: null,
    },
    {
      id: '5',
      groupId: '3',
      color: '#FBC08A',
      title: '領錢',
      checked: false,
      time: '19:00',
    },
    {
      id: '6',
      groupId: '3',
      color: '#FBC08A',
      title: '吃維他命',
      checked: false,
      time: '14:00',
    },
  ],
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      state.todos = action.payload
    },
  },
})

export const { updateTodos } = todoListSlice.actions

export const selectTodos = (state) => state.todoList.todos
export const selectCheckedTodoIds = (state) =>
  state.todoList.todos.filter((todo) => todo.checked).map((todo) => todo.id)

export default todoListSlice.reducer
