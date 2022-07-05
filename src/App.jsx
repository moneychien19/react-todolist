import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'

import { Typography, Divider } from '@mui/material'

import { TodoCard } from './components/todo-card'

const fakeData = [
  { id: '1', color: '#ADCCFB', title: 'Scrum Planning', checked: false, time: null },
  { id: '2', color: '#ADCCFB', title: '看 MR', checked: false, time: null },
  { id: '3', color: '#CAE9C5', title: 'Todo List Figma 完成', checked: false, time: null },
  { id: '4', color: '#CAE9C5', title: 'Todo List 專案架構', checked: false, time: null },
  { id: '5', color: '#FBC08A', title: '領錢', checked: false, time: '19:00' },
  { id: '6', color: '#FBC08A', title: '吃維他命', checked: false, time: '14:00' },
]

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

export const App = () => {
  const [checkedTodoIds, setCheckedTodoIds] = useState([])

  const handleToggleCheck = event => {
    const toggleId = event.target.id
    if (checkedTodoIds.length > 0) {
      if (checkedTodoIds.includes(toggleId)) {
        setCheckedTodoIds(JSON.parse(JSON.stringify(checkedTodoIds)).filter(id => id !== toggleId))
        return
      }
    }
    const newCheckedTodoIds = JSON.parse(JSON.stringify(checkedTodoIds))
    newCheckedTodoIds.push(toggleId)
    setCheckedTodoIds(newCheckedTodoIds)
  }

  return (
    <div className="App">
      <Wrapper>
        <HeaderContainer>
          <HeaderTitle>4 July, Monday</HeaderTitle>
          <StyledDivider />
        </HeaderContainer>
        {fakeData.map(data => (
          <ContentContainer key={data.id}>
            <TodoCard 
              data={data}
              checkedTodoIds={checkedTodoIds}
              handleToggleCheck={handleToggleCheck}
            />
          </ContentContainer>
        ))} 
      </Wrapper>
    </div>
  )
}
