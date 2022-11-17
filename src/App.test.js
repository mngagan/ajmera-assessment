import { render, screen } from '@testing-library/react'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

test('check for the page Heading', () => {
  render(<Provider store={store}><App /></Provider>)
  const linkElement = screen.getByText(/Dashboard/i)
  expect(linkElement).toBeInTheDocument()
})
