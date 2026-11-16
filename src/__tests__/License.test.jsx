import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('License screen', () => {
  it('renders license content at /license', () => {
    render(
      <MemoryRouter initialEntries={['/license']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: 'License Agreement' })).toBeInTheDocument()
    expect(screen.getByText(/You are allowed to use in unlimited projects/)).toBeInTheDocument()
  })

  it('redirects root to /license', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: 'License Agreement' })).toBeInTheDocument()
  })
})
