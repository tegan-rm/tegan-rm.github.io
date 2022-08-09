import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Projects from './Pages/Projects';
import About from './Pages/About';
import { Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
