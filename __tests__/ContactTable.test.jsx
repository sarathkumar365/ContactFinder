import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactTable from '../src/components/ContactTable';

const contacts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    dob: '1990-01-01',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    email: 'john.doe@example.com',
    phone: '1234567890',
  },
];

test('renders contacts in the table', () => {
  render(
    <MemoryRouter>
      <ContactTable contacts={contacts} setSelectedContact={vi.fn()} />
    </MemoryRouter>
  );

  expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  expect(screen.getByText(/123 Main St/)).toBeInTheDocument();
});
