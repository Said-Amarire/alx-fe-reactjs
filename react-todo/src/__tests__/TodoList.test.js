import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App.jsx'

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<App />)
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Write Tests')).toBeInTheDocument()
  })

  test('adds a new todo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Add new todo')
    const button = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'New Todo' } })
    fireEvent.click(button)

    expect(screen.getByText('New Todo')).toBeInTheDocument()
  })

  test('toggles todo completion', () => {
    render(<App />)
    const todo = screen.getByText('Learn React')
    fireEvent.click(todo)
    expect(todo).toHaveStyle('text-decoration: line-through')
  })

  test('deletes a todo', () => {
    render(<App />)
    const deleteButtons = screen.getAllByText('Delete')
    fireEvent.click(deleteButtons[0])
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
  })
})
