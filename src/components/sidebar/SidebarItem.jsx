import React from 'react'
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { updateSelectedGroup } from './sidebar.slice'
import { Card, Typography} from '@mui/material'

const GroupCardContainer = styled(Card)`
  width: 14rem;
  height: 3rem;
  display: flex;
  background-color: white;
  margin: 0.25rem 1rem;
  &.MuiCard-root {
    box-shadow: none;
    cursor: pointer;
  }
`

const ColorTag = styled(Card)`
  &.MuiCard-root {
    background-color: ${props => props.color};
    border-radius: 0.25rem 0 0 0.25rem;
    box-shadow: none;
  }
  width: 1.25rem;
`

const WhiteBlock = styled(Card)`
  &.MuiCard-root {
    border-radius: 0 0.25rem 0.25rem 0;
    box-shadow: none;
    background-color: ${props => props.selected ? '#EFEFEF' : 'white'};
  }
  width: calc(100% - 1.25rem);
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
`

const GroupName = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.25rem;
    color: '#4B4B4B';
  }
`

export const SidebarItem = ({ id, title, color, selected }) => {
  const dispatch = useDispatch()
  const handleChangeGroup = id => {
    dispatch(updateSelectedGroup(id || null))
  }

  return (
    <GroupCardContainer onClick={() => handleChangeGroup(id)}>
      <ColorTag color={color} />
      <WhiteBlock selected={selected}>
        <GroupName>
          {title}
        </GroupName>
      </WhiteBlock>
    </GroupCardContainer>
  )
}

SidebarItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
}