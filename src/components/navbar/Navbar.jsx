import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectTodayString } from '../sidebar/sidebar.slice'

import { Typography } from '@mui/material'

const StyledNavbarContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  margin-left: 18rem;
  margin-top: 1rem;
`

const StyledDate = styled(Typography)`
  &.MuiTypography-root {
    font-size: 2rem;
    font-weight: 200;
    margin-bottom: 0.5rem;
  }
`

export const Navbar = () => {
  const todayString = useSelector(selectTodayString)
  
  return (
    <StyledNavbarContainer>
      <StyledDate>{todayString}</StyledDate>
    </StyledNavbarContainer>
  )
}