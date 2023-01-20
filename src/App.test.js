import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with "Current" header', () => {
  render(<App />);
  const divElement = screen.getByText('Current');
  expect(divElement).toBeInTheDocument();
});
