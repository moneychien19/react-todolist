import React from 'react'
import { useSelector } from 'react-redux'
import { Drawer } from '@mui/material'
import { selectGroups, selectSelectedGroup } from './sidebar.slice'
import { SidebarItem } from './SidebarItem'

const SIDEBAR_WIDTH = 288

export const Sidebar = () => {
  const groups = useSelector(selectGroups)
  const selectedGroup = useSelector(selectSelectedGroup)

  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          boxSizing: 'border-box',
          backgroundColor: '#F8F8F8',
          border: 'none',
          paddingTop: '1rem',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <SidebarItem title="全部" color="#4B4B4B" selected={selectedGroup === null}/>
      {groups.map(group => (
        <SidebarItem
          key={group.id}
          id={group.id}
          title={group.name}
          color={group.color}
          selected={selectedGroup?.id === group.id}
        />
      ))}
    </Drawer>
  )
}