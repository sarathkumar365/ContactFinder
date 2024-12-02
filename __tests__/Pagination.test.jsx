import { render, screen } from '@testing-library/react';
import Pagination from '../src/components/Pagination';

test('renders pagination buttons', () => {
  render(<Pagination />);
  expect(screen.getByText(/previous/i)).toBeInTheDocument();
  expect(screen.getByText(/next/i)).toBeInTheDocument();
});
