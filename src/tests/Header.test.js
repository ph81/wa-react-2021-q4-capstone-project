import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Renders Ecommerce store name in the Header component', () => {
    render(<Header />);
    const navElement = screen.getByText(/Nakama/i);
    expect(navElement).toBeInTheDocument();
  });