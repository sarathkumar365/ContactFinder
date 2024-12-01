import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import HomePage from './pages/HomePage';
import ContactDetailsPage from './pages/ContactDetailsPage';

function App() {
  return (
    <Router>
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} />  {/* Use element prop instead of component */}
        <Route path="/contact/:id" element={<ContactDetailsPage />} />  {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
