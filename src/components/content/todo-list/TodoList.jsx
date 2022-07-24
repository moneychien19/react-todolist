import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selectSelectedGroup } from '../../sidebar/sidebar.slice'
import { selectTodos, updateTodos } from './todoList.slice'
import { TodoCard } from './TodoCard'

const TodoListContainer = styled.div`
  margin-left: 19.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const TodoList = () => {
  const selectedGroup = useSelector(selectSelectedGroup)
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  const todosInGroup = selectedGroup ? todos.filter(todo => todo.groupId === selectedGroup.id) : todos

  const handleToggleCheck = event => {
    const toggleId = event.target.id
    const toggleTodo = JSON.parse(JSON.stringify(todos.filter(todo => todo.id === toggleId)[0]))
    toggleTodo.checked = !toggleTodo.checked
    const newTodos = [toggleTodo, ...todos.filter(todo => todo.id !== toggleId)].sort((a, b) => +a.id - +b.id)
    dispatch(updateTodos(newTodos))
  }

  return (
    <TodoListContainer>
      {todosInGroup.map(data => (
        <TodoCard key={data.id} data={data} handleToggleCheck={handleToggleCheck} />
      ))}
    </TodoListContainer>
  )
}