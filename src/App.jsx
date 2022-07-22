import React from 'react'
import styled from 'styled-components'

import { Sidebar } from './components/sidebar/Sidebar'
import { Navbar } from './components/navbar/Navbar'
import { Content } from './components/content'

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const App = () => {  
  return (
    <div className="App">
      <Sidebar />
      <ContentContainer>
        <Navbar />
        <Content />
      </ContentContainer>
    </div>
  )
}
