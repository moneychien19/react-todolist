import React from 'react'
import { PropTypes } from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Card, Typography, Checkbox } from '@mui/material'

import { selectCheckedTodoIds } from './todoList.slice'

const TodoCardContainer = styled(Card)`
  width: 32rem;
  height: 3rem;
  display: flex;
  margin-bottom: 0.5rem;
`

const TodoColorTag = styled(Card)`
  &.MuiCard-root {
    background-color: ${props => props.color};
    border-radius: 0.25rem 0 0 0.25rem;
    box-shadow: none;
  }
  width: 1.5rem;
`

const TodoWhiteBlock = styled(Card)`
  &.MuiCard-root {
    border-radius: 0 0.25rem 0.25rem 0;
    box-shadow: none;
  }
  width: calc(100% - 1.5rem);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  position: relative;
`

const TodoTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${props => props.checked ? '#D0D0D0' : '#4B4B4B'};
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
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

const TodoTime = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1rem;
    color: ${props => props.checked ? '#D0D0D0' : '#A9A9A9'} ;
  }
  position: absolute;
  right: 1rem;
`

export const TodoCard = ({ data, handleToggleCheck }) => {
  const checkedTodoIds = useSelector(selectCheckedTodoIds)

  return (
    <TodoCardContainer>
      <TodoColorTag color={data.color} />
      <TodoWhiteBlock>
        <TodoCheckbox 
          id={data.id}
          checked={checkedTodoIds.length > 0 ? checkedTodoIds.includes(data.id) : false}
          onChange={e => handleToggleCheck(e)} 
        />
        <TodoTitle checked={checkedTodoIds.length > 0 ? checkedTodoIds.includes(data.id) : false}>
          {data.title}
        </TodoTitle>
        {data.time && (
          <TodoTime checked={checkedTodoIds.length > 0 ? checkedTodoIds.includes(data.id) : false}>{data.time}</TodoTime>
        )}
      </TodoWhiteBlock>
    </TodoCardContainer>
  )
}

TodoCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleToggleCheck: PropTypes.func.isRequired,
}