import React from 'react'
import { PropTypes } from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Card, Typography, Checkbox } from '@mui/material'
import { MdArrowForwardIos } from 'react-icons/md'

import { selectCheckedTodoIds, selectSelectedTodoId, updateSelectedTodoId } from './todoList.slice'

const TodoCardContainer = styled(Card)`
  width: 32rem;
  height: 2.75rem;
  display: flex;
  margin-bottom: 0.5rem;
  cursor: pointer;
`

const TodoColorTag = styled(Card)`
  &.MuiCard-root {
    background-color: ${props => props.color};
    border-radius: 0.25rem 0 0 0.25rem;
    box-shadow: none;
  }
  width: 1.25rem;
`

const TodoWhiteBlock = styled(Card)`
  &.MuiCard-root {
    background-color: ${props => props.selected ? '#EFEFEF' : '#FFFFFF'};
    border-radius: 0 0.25rem 0.25rem 0;
    box-shadow: none;
  }
  width: calc(100% - 1.25rem);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  position: relative;
`

const TodoTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.checked ? '#D0D0D0' : '#4B4B4B'};
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 85%;
  }
`

const TodoCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: #CCCCCC;
    &.Mui-checked {
      color: #CCCCCC;
    }
  }
`

const StyledArrow = styled.p`
  font-size: 0.75rem;
  color: '#A9A9A9';
  position: absolute;
  right: 0.75rem;
`

export const TodoCard = ({ data, handleToggleCheck }) => {
  const checkedTodoIds = useSelector(selectCheckedTodoIds)
  const selectedTodoId = useSelector(selectSelectedTodoId)
  const dispatch = useDispatch()
  
  const handleShowDetail = id => {
    dispatch(updateSelectedTodoId(id))
  }

  return (
    <TodoCardContainer onClick={() => handleShowDetail(data.id)}>
      <TodoColorTag color={data.color} />
      <TodoWhiteBlock selected={selectedTodoId === data.id}>
        <TodoCheckbox 
          id={data.id}
          checked={checkedTodoIds.length > 0 ? checkedTodoIds.includes(data.id) : false}
          onChange={e => handleToggleCheck(e)} 
        />
        <TodoTitle checked={checkedTodoIds.length > 0 ? checkedTodoIds.includes(data.id) : false}>
          {data.title}
        </TodoTitle>
        {selectedTodoId === data.id && (
          <StyledArrow>
            <MdArrowForwardIos />
          </StyledArrow>
        )}
      </TodoWhiteBlock>
    </TodoCardContainer>
  )
}

TodoCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
}