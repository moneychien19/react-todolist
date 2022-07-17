import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Typography, Divider } from '@mui/material'

import { selectSelectedGroup } from '../sidebar/sidebar.slice'
import { selectTodos, updateTodos } from './todoList.slice'
import { TodoCard } from './TodoCard'

const Wrapper = styled.div`
  margin-top: 2rem;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`

const HeaderTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 2rem;
    font-weight: 200;
    margin-bottom: 0.5rem;
  }
`

const StyledDivider = styled(Divider)`
  width: 100%;
  background-color: #1F4690;
  height: 0.2rem;
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
    <Wrapper>
      <HeaderContainer>
        <HeaderTitle>4 July, Monday</HeaderTitle>
        <StyledDivider />
      </HeaderContainer>
      {todosInGroup.map(data => (
        <ContentContainer key={data.id}>
          <TodoCard data={data} handleToggleCheck={handleToggleCheck} />
        </ContentContainer>
      ))}
    </Wrapper>
  )
}