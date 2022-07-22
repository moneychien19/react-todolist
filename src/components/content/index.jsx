import React from 'react'
import styled from 'styled-components'
import { DetailCard } from './detail-card/DetailCard'
import { TodoList } from './todo-list/TodoList'

const StyledContentContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`

export const Content = () => {
  return (
    <StyledContentContainer>
      <TodoList />
      <DetailCard />
    </StyledContentContainer>
  )
}