import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: '1',
      groupId: '1',
      color: '#ADCCFB',
      title: 'Scrum Planning',
      tomato: {
        finishCount: 0,
        totalCount: 3,
      },
      checked: false,
      dueTimestamp: 1659283200,
    },
    {
      id: '2',
      groupId: '1',
      color: '#ADCCFB',
      title: '看 MR',
      tomato: {
        finishCount: 1,
        totalCount: 3,
      },
      checked: false,
      dueTimestamp: 1658937600,
    },
    {
      id: '3',
      groupId: '2',
      color: '#CAE9C5',
      title: 'Todo List Figma 完成',
      tomato: {
        finishCount: 2,
        totalCount: 4,
      },
      checked: false,
      dueTimestamp: 1659024000,
    },
    {
      id: '4',
      groupId: '2',
      color: '#CAE9C5',
      title: 'Todo List 專案架構',
      tomato: {
        finishCount: 1,
        totalCount: 1,
      },
      checked: false,
      dueTimestamp: 1659024000,
    },
    {
      id: '5',
      groupId: '3',
      color: '#FBC08A',
      title: '領錢',
      tomato: {
        finishCount: 0,
        totalCount: 0,
      },
      checked: false,
      dueTimestamp: 1659283200,
    },
    {
      id: '6',
      groupId: '3',
      color: '#FBC08A',
      title: '吃維他命',
      tomato: {
        finishCount: 0,
        totalCount: 0,
      },
      checked: false,
      dueTimestamp: 1658592000,
    },
  ],
  selectedTodoId: '1',
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      state.todos = action.payload
    },
    updateSelectedTodoId: (state, action) => {
      state.selectedTodoId = action.payload
    },
  },
})

export const { updateTodos, updateSelectedTodoId } = todoListSlice.actions

export const selectTodos = (state) => state.todoList.todos
export const selectCheckedTodoIds = (state) =>
  state.todoList.todos.filter((todo) => todo.checked).map((todo) => todo.id)
export const selectSelectedTodoId = (state) => state.todoList.selectedTodoId

export default todoListSlice.reducer
