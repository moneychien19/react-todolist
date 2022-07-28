import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Card, Divider } from '@mui/material'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'

import { selectSelectedTodoId, selectTodos } from '../todo-list/todoList.slice'
import { selectGroups } from '../../sidebar/sidebar.slice'

const StyledDetailCardContainer = styled.div`
  width: 36rem;
  margin-left: 1rem;
  line-height: 1.5rem;
`

const StyledDetailCard = styled(Card)`
  padding: 1rem;
`
const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`
const StyledInfoLineContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`
const StyledInfoLineName = styled.p`
  width: 8rem;
`
const StyledInfoLineContent = styled.p`
  color: '#4B4B4B';
`
const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DetailCard = () => {
  const selectedTodoId = useSelector(selectSelectedTodoId)
  const todos = useSelector(selectTodos)
  const groups = useSelector(selectGroups)
  const selectedTodo = todos.filter(todo => todo.id === selectedTodoId)[0]
  const group = groups.filter(group => group.id === selectedTodo.groupId)[0]
  
  return (
    <StyledDetailCardContainer>
      <StyledDetailCard>
        <StyledTitleContainer>
          <p style={{ color: '#4B4B4B' }}>{selectedTodo.title}</p>
          <RiDeleteBin6Line style={{ color: '#DE7D7D' }} />
        </StyledTitleContainer>
        <div>
          <StyledInfoLineContainer>
            <StyledInfoLineName>番茄數</StyledInfoLineName>
            <StyledInfoLineContent>{selectedTodo.tomato.finishCount} / {selectedTodo.tomato.totalCount}</StyledInfoLineContent>
          </StyledInfoLineContainer>
          <StyledInfoLineContainer>
            <StyledInfoLineName>分類</StyledInfoLineName>
            <StyledInfoLineContent>{group.name}</StyledInfoLineContent>
          </StyledInfoLineContainer>
          <StyledInfoLineContainer>
            <StyledInfoLineName>到期日</StyledInfoLineName>
            <StyledInfoLineContent>{dayjs.unix(selectedTodo.dueTimestamp).format('YYYY/MM/DD')}</StyledInfoLineContent>
          </StyledInfoLineContainer>
        </div>
        <Divider style={{ margin: '1rem 0' }} />
        <StyledContentContainer>
          <div>
            <p>初始點數：2</p>
          </div>
          <GrEdit />
        </StyledContentContainer>
      </StyledDetailCard>
    </StyledDetailCardContainer>
  )
}