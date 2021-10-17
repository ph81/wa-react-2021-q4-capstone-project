import { render, screen } from '@testing-library/react';
import App from './App';


test('Renders Ecommerce store name in the App component', () => {
  render(<App />);
  const navElement = screen.getByText(/Nakama/i);
  expect(navElement).toBeInTheDocument();
});