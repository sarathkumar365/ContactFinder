// __tests__/SearchForm.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../src/components/SearchForm';

const mockSetFilteredContacts = vi.fn();
const contacts = [
  { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
];

test('filters contacts by first name', () => {
  render(<SearchForm contacts={contacts} setFilteredContacts={mockSetFilteredContacts} />);

  // Update the placeholder text to match "first name" (instead of "Firstname")
  fireEvent.change(screen.getByPlaceholderText(/first name/i), { target: { value: 'John' } });

  fireEvent.click(screen.getByText(/search/i));
  expect(mockSetFilteredContacts).toHaveBeenCalledWith([{ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' }]);
});
