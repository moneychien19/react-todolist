import React from 'react'
import styled from 'styled-components'
import './App.css'

import { Typography, Divider } from '@mui/material'

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
  return (
    <div className="App">
      <Wrapper>
        <HeaderContainer>
          <HeaderTitle>4 July, Monday</HeaderTitle>
          <StyledDivider />
        </HeaderContainer>
      </Wrapper>
    </div>
  )
}
