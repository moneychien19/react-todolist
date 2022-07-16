import React from 'react'
import { Drawer } from '@mui/material'
import { SidebarItem } from './SidebarItem'

const SIDEBAR_WIDTH = 256
const groups = [
  { id: '1', name: '宇匯', color: '#ADCCFB' },
  { id: '2', name: 'Side Project', color: '#CAE9C5' },
  { id: '3', name: '雜項', color: '#FBC08A' }
]
const selectedGroupId = '1'

export const Sidebar = () => {
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
      <SidebarItem title="全部" color="#4B4B4B" selected={selectedGroupId === null}/>
      {groups.map(group => (
        <div key={group.id}>
          <SidebarItem title={group.name} color={group.color} selected={selectedGroupId === group.id}/>
        </div>
      ))}
    </Drawer>
  )
}