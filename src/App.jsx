import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import { ContactsProvider } from './contexts/ContactsContext';

function App() {
  return (
    <ContactsProvider> {/* Wrap the app with the provider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/:id" element={<ContactDetailsPage />} />
        </Routes>
      </Router>
    </ContactsProvider>
  );
}

export default App;
