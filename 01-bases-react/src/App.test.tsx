import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Integration', () => {
  it('renders without crashing', () => {
    render(<App />)
    
    // Should render the BasicTypes component
    expect(screen.getByText('Variables')).toBeInTheDocument()
    expect(screen.getByText('Lista de nombres')).toBeInTheDocument()
  })

  it('contains the expected main elements', () => {
    render(<App />)
    
    // Check for key elements from BasicTypes component
    expect(screen.getByText('Name: David')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Change' })).toBeInTheDocument()
    expect(screen.getByText('Julian')).toBeInTheDocument()
  })
})