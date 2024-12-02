import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // To wrap the component in a Router
import HomePage from '../src/pages/HomePage'; // Adjust the import path accordingly

test('renders search form with all fields', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  // Check if the input fields are rendered
  expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/last name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/phone/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/street/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/city/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/state/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/zip/i)).toBeInTheDocument();
});
