import React from 'react'
import styled from 'styled-components'
import './App.css'

import { Typography, Divider, Card, Checkbox } from '@mui/material'

const fakeData = [
  { id: '1', color: '#ADCCFB', title: 'Scrum Planning', checked: false, time: null },
  { id: '2', color: '#ADCCFB', title: '看 MR', checked: false, time: null },
  { id: '3', color: '#CAE9C5', title: 'Todo List Figma 完成', checked: false, time: null },
  { id: '4', color: '#CAE9C5', title: 'Todo List 專案架構', checked: false, time: null },
  { id: '5', color: '#FBC08A', title: '領錢', checked: false, time: '19:00' },
  { id: '6', color: '#FBC08A', title: '吃維他命', checked: true, time: '14:00' },
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

const TodoCard = styled(Card)`
  width: 90%;
  height: 3.5rem;
  display: flex;
`

const TodoColorTag = styled(Card)`
  &.MuiCard-root {
    background-color: ${props => props.color};
    border-radius: 0.25rem 0 0 0.25rem;
    box-shadow: none;
  }
  width: 1.75rem;
`

const TodoWhiteBlock = styled(Card)`
  &.MuiCard-root {
    border-radius: 0 0.25rem 0.25rem 0;
    box-shadow: none;
  }
  width: calc(100% - 1rem);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  position: relative;
`

const TodoTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.checked ? '#D0D0D0' : 'black'};
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

export const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <HeaderContainer>
          <HeaderTitle>4 July, Monday</HeaderTitle>
          <StyledDivider />
        </HeaderContainer>
        {fakeData.map(data => (
          <ContentContainer key={data.id}>
            <TodoCard>
              <TodoColorTag color={data.color} />
              <TodoWhiteBlock>
                <TodoCheckbox checked={data.checked} />
                <TodoTitle checked={data.checked}>
                  {data.title}
                </TodoTitle>
                {data.time && (
                  <TodoTime checked={data.checked}>{data.time}</TodoTime>
                )}
              </TodoWhiteBlock>
            </TodoCard>
          </ContentContainer>
        ))} 
      </Wrapper>
    </div>
  )
}
