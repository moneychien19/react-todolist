import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App, render UI', () => {
  test('should show 4 July, Monday', () => {
    render(<App />)
    const headerTitle = screen.queryByText('4 July, Monday')
    expect(headerTitle).toBeInTheDocument()
  })
})
