import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <div className='root'>
          
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
