import React from 'react'
import styled from 'styled-components'
import { Card } from '@mui/material'

const StyledDetailCardContainer = styled.div`
  width: 36rem;
  margin-left: 1rem;
`

export const DetailCard = () => {
  return (
    <StyledDetailCardContainer>
      <Card>123</Card>
    </StyledDetailCardContainer>
  )
}