import { toBeVisible, toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

import userEvent from '@testing-library/user-event'

test('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('test buttons to add and subtract values', () => {
  render(<App />);
  const plusbutton = screen.getByText('+');
  const minusbutton = screen.getByText('-');
  const countDisplay = screen.getByTitle('count')
  expect(plusbutton).toBeInTheDocument()
  expect(minusbutton).toBeInTheDocument()
  expect(countDisplay).toBeInTheDocument()
  expect(countDisplay).toHaveTextContent('0')
  fireEvent.click(plusbutton)
  expect(countDisplay).toHaveTextContent('1')
  fireEvent.click(minusbutton)
  expect(countDisplay).toHaveTextContent('0')

});