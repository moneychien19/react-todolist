import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const initialState = {
  todayString: dayjs().format('D MMM, dddd'),
  groups: [
    { id: '1', name: '宇匯', color: '#ADCCFB' },
    { id: '2', name: 'Side Project', color: '#CAE9C5' },
    { id: '3', name: '雜項', color: '#FBC08A' },
  ],
  selectedGroup: null,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    updateSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload
        ? state.groups.filter((group) => group.id === action.payload)[0]
        : null
    },
  },
})

export const { updateSelectedGroup } = sidebarSlice.actions

export const selectTodayString = (state) => state.sidebar.todayString
export const selectGroups = (state) => state.sidebar.groups
export const selectSelectedGroup = (state) => state.sidebar.selectedGroup

export default sidebarSlice.reducer
