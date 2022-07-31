import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import dayjs from 'dayjs'
import InnerHTML from 'dangerously-set-html-content'
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
  align-items: flex-start;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
`
const StyledDeleteIcon = styled(RiDeleteBin6Line)`
  color: #DE7D7D;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.2rem;
  cursor: pointer;
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
  color: #4B4B4B;
`
const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const StyledEditIcon = styled(GrEdit)`
  width: 1.125rem;
  height: 1.125rem;
  margin-top: 0.2rem;
  cursor: pointer;
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
          <StyledDeleteIcon />
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
            <InnerHTML html={selectedTodo.details} />
          </div>
          <StyledEditIcon />
        </StyledContentContainer>
      </StyledDetailCard>
    </StyledDetailCardContainer>
  )
}