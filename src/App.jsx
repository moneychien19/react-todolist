import React from 'react'
import './App.css'

import { TodoList } from './components/todo-list/TodoList'

export const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  )
}
