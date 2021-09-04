import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer';
import MainView from './pages/MainView';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainView />
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
