import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Typography } from '@mui/material'

import { selectTodayString, selectSelectedGroup } from '../sidebar/sidebar.slice'
import { selectTodos, updateTodos } from './todoList.slice'
import { TodoCard } from './TodoCard'

const TodoListContainer = styled.div`
  margin-top: 1rem;
  margin-left: 18rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeaderTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 2rem;
    font-weight: 200;
    margin-bottom: 0.5rem;
  }
`

export const TodoList = () => {
  const todayString = useSelector(selectTodayString)
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
      <HeaderTitle>{todayString}</HeaderTitle>
      {todosInGroup.map(data => (
        <TodoCard key={data.id} data={data} handleToggleCheck={handleToggleCheck} />
      ))}
    </TodoListContainer>
  )
}