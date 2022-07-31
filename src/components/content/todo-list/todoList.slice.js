import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: '1',
      groupId: '1',
      color: '#ADCCFB',
      title: 'issue：[客戶預覽頁] 信義房屋',
      tomato: {
        finishCount: 0,
        totalCount: 3,
      },
      checked: false,
      dueTimestamp: 1659283200,
      details: `
        <div style="line-height: 1.75rem">
          <p>初始點數：1</p>
          <br />
          <h3 style="font-weight: 500">資訊</h3>
          <ul style="padding-left: 1rem">
            <li>有支援蓋版圖</li>
            <li>左側欄位顯示：版位尺寸、ID</li>
          </ul>
          <br />
          <h3 style="font-weight: 500">Todo</h3>
          <ul style="padding-left: 1rem">
            <li>確認素材和 Logo 圖尺寸對應表</li>
          </ul>
        </div>
      `,
    },
    {
      id: '2',
      groupId: '1',
      color: '#ADCCFB',
      title: 'Scrum Refine',
      tomato: {
        finishCount: 0,
        totalCount: 0,
      },
      checked: false,
      dueTimestamp: 1658937600,
      details: '<div></div>',
    },
    {
      id: '3',
      groupId: '1',
      color: '#ADCCFB',
      title: 'DSP 產品 review',
      tomato: {
        finishCount: 0,
        totalCount: 0,
      },
      checked: false,
      dueTimestamp: 1658937600,
      details: '<div></div>',
    },
    {
      id: '4',
      groupId: '1',
      color: '#ADCCFB',
      title: 'Backend Team Building',
      tomato: {
        finishCount: 0,
        totalCount: 0,
      },
      checked: false,
      dueTimestamp: 1658937600,
      details: '<div></div>',
    },
    {
      id: '5',
      groupId: '1',
      color: '#ADCCFB',
      title:
        'issue：[UX 細節] Scroll bar 樣式統一（現在 Windows 的 Scroll bar 是另一種樣式）',
      tomato: {
        finishCount: 0,
        totalCount: 0,
      },
      checked: false,
      dueTimestamp: 1658937600,
      details: '<div></div>',
    },
    {
      id: '6',
      groupId: '2',
      color: '#CAE9C5',
      title: 'Todo List Figma 完成',
      tomato: {
        finishCount: 2,
        totalCount: 4,
      },
      checked: false,
      dueTimestamp: 1659024000,
      details: '<div></div>',
    },
    {
      id: '7',
      groupId: '2',
      color: '#CAE9C5',
      title: 'Todo List 專案架構',
      tomato: {
        finishCount: 1,
        totalCount: 1,
      },
      checked: false,
      dueTimestamp: 1659024000,
      details: '<div></div>',
    },
    {
      id: '8',
      groupId: '3',
      color: '#FBC08A',
      title: '領錢',
      tomato: {
        finishCount: 0,
        totalCount: 0,
      },
      checked: false,
      dueTimestamp: 1659283200,
      details: '<div></div>',
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
