import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTeleconsultaForm } from './hooks/useTeleconsultaForm';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import HelpPage from './components/HelpPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import IntegrantesPage from './components/IntegrantesPage';
import TeleconsultaForm from './components/TeleconsultaForm';

// Styles
import './App.css';

const App: React.FC = () => {
  const {
    isOpen,
    formData,
    openForm,
    closeForm,
    updateFormData,
    handleSubmit,
    getMinDateTime,
    setMaxDateTime
  } = useTeleconsultaForm();

  return (
    <Router>
      <div className="App">
        <Header onOpenForm={openForm} />
        
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenForm={openForm} />} 
          />
          <Route 
            path="/ajuda" 
            element={<HelpPage />} 
          />
          <Route 
            path="/contato" 
            element={<ContactPage />} 
          />
          <Route 
            path="/faq" 
            element={<FAQPage />} 
          />
          <Route 
            path="/integrantes" 
            element={<IntegrantesPage />} 
          />
        </Routes>
        
        <Footer />
        
        <TeleconsultaForm
          isOpen={isOpen}
          formData={formData}
          onClose={closeForm}
          onUpdateFormData={updateFormData}
          onSubmit={handleSubmit}
          getMinDateTime={getMinDateTime}
          setMaxDateTime={setMaxDateTime}
        />
      </div>
    </Router>
  );
};

export default App;