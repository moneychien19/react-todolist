import React from 'react'

import { TodoList } from './components/todo-list/TodoList'
import { Sidebar } from './components/sidebar/Sidebar'

export const App = () => {  
  return (
    <div className="App">
      <Sidebar />
      <TodoList />
    </div>
  )
}
