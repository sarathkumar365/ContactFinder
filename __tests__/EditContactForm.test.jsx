import { render, screen, fireEvent } from '@testing-library/react';
import EditContactForm from '../src/components/EditContactForm';

const contact = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '1234567890',
};

test('renders edit contact form with pre-filled data', () => {
  render(<EditContactForm contact={contact} setContact={vi.fn()} setIsEditing={vi.fn()} onSave={vi.fn()} />);
  expect(screen.getByDisplayValue(/John/)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/Doe/)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/john.doe@example.com/)).toBeInTheDocument();
});

test('saves contact data on form submission', () => {
  const mockOnSave = vi.fn();
  render(<EditContactForm contact={contact} setContact={vi.fn()} setIsEditing={vi.fn()} onSave={mockOnSave} />);
  fireEvent.click(screen.getByText(/Save Changes/i));
  expect(mockOnSave).toHaveBeenCalledWith(contact);
});
