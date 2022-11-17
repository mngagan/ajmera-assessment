/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import App from '../App'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { click } from '@testing-library/user-event/dist/click'

test('check for the page Heading', () => {
  render(<Provider store={store}><App /></Provider>)
  const linkElement = screen.getByText(/Dashboard/i)
  expect(linkElement).toBeInTheDocument()
})

test('check for theme button and change theme', () => {
  render(<Provider store={store}><App /></Provider>)
  const linkElement = screen.getByTestId(/theme-dark/i)
  expect(linkElement).toBeInTheDocument()
  click(screen.getByTestId(/theme-button-light/i))
  const linkElement2 = screen.getByTestId(/theme-light/i)
  expect(linkElement2).toBeInTheDocument()
})
