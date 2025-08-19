import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BasicTypes } from '../components/BasicTypes'

describe('BasicTypes Component', () => {
  it('renders basic variables correctly', () => {
    render(<BasicTypes />)
    
    // Check if the component renders the expected name, age, and active status
    expect(screen.getByText('Name: David')).toBeInTheDocument()
    expect(screen.getByText('Age: 28')).toBeInTheDocument()
    expect(screen.getByText('is acetive: yes')).toBeInTheDocument()
  })

  it('renders the list of names correctly', () => {
    render(<BasicTypes />)
    
    // Check if the title is present
    expect(screen.getByText('Lista de nombres')).toBeInTheDocument()
    
    // Check if all names are rendered
    expect(screen.getByText('Julian')).toBeInTheDocument()
    expect(screen.getByText('Victor')).toBeInTheDocument()
    expect(screen.getByText('Dhayana')).toBeInTheDocument()
    expect(screen.getByText('San')).toBeInTheDocument()
  })

  it('renders the correct structure with headings', () => {
    render(<BasicTypes />)
    
    expect(screen.getByRole('heading', { name: 'Variables' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Lista de nombres' })).toBeInTheDocument()
  })

  it('renders both ordered and unordered lists correctly', () => {
    render(<BasicTypes />)
    
    // Get all lists - should be 2 (ol and ul)
    const allLists = screen.getAllByRole('list')
    expect(allLists).toHaveLength(2)
    
    // Check that we have both types of lists
    const orderedList = document.querySelector('ol')
    const unorderedList = document.querySelector('ul')
    
    expect(orderedList).toBeInTheDocument()
    expect(unorderedList).toBeInTheDocument()
    
    // Check that all list items are present
    const allListItems = screen.getAllByRole('listitem')
    expect(allListItems.length).toBe(7) // 3 for variables + 4 for names
  })

  it('toggles active state when button is clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    
    render(<BasicTypes />)
    
    // Initially should show "yes"
    expect(screen.getByText('is acetive: yes')).toBeInTheDocument()
    
    // Find and click the button
    const button = screen.getByRole('button', { name: 'Change' })
    expect(button).toBeInTheDocument()
    
    fireEvent.click(button)
    
    // After click, should show "no"
    expect(screen.getByText('is acetive: no')).toBeInTheDocument()
    
    // Click again to toggle back
    fireEvent.click(button)
    
    // Should show "yes" again
    expect(screen.getByText('is acetive: yes')).toBeInTheDocument()
    
    // Verify console.log was called
    expect(consoleSpy).toHaveBeenCalled()
    
    consoleSpy.mockRestore()
  })

  it('has the correct button text', () => {
    render(<BasicTypes />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Change')
  })

  it('renders a horizontal rule separator', () => {
    render(<BasicTypes />)
    
    const hrElement = document.querySelector('hr')
    expect(hrElement).toBeInTheDocument()
  })
})