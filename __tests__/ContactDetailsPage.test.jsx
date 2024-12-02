
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ContactDetailsPage from '../src/pages/ContactDetailsPage';
import { ContactsContext } from '../src/contexts/ContactsContext';

const mockContacts = [
  { email: 'john.doe@example.com', firstName: 'John', lastName: 'Doe', phone: '123-456-7890' },
];

test('renders contact details', () => {
  render(
    <ContactsContext.Provider value={{ contacts: mockContacts, setContacts: vi.fn() }}>
      <MemoryRouter initialEntries={['/contact/john.doe@example.com']}>
        <Routes>
          <Route path="/contact/:id" element={<ContactDetailsPage />} />
        </Routes>
      </MemoryRouter>
    </ContactsContext.Provider>
  );

  expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
});
