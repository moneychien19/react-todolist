import React from 'react'
import './App.css'
import { useQuery } from '@apollo/client'

import { FETCH_TODOLIST } from './components/todo-list/todoList.graph'
import { TodoList } from './components/todo-list/TodoList'

export const App = () => {
  const { loading, error, data } = useQuery(FETCH_TODOLIST)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  
  console.log(data)
  
  return (
    <div className="App">
      <TodoList />
    </div>
  )
}
