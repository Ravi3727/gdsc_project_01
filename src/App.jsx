import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/ContactMe';
import Navbar from './Components/Navbar';
import { useState, createContext } from 'react';
import './App.css';

export const AppContext = createContext();

function App() {
  const [mode, setMode] = useState(false);

  return (
    <>
      <div className={`${mode === false ? "bg-gray-200" : "bg-gray-800"} min-h-screen items-center`}>
        <AppContext.Provider value={{ mode, setMode }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
