import React from 'react'
import styled from 'styled-components'
import './App.css'

import { Typography, Divider } from '@mui/material'

const Wrapper = styled.div`
  margin-top: 2rem;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`

const StyledDivider = styled(Divider)`
  width: 100%;
  background-color: #1F4690;
  height: 0.2rem;
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header>
          <Typography variant="h3" fontWeight={200}>4 July, Monday</Typography>
          <StyledDivider variant="middle" />
        </Header>
      </Wrapper>
    </div>
  )
}

export default App
